import React, {Component} from 'react';
import Players from '../components/Players';
import CreationPlayer from '../components/CreationPlayer';
import "tachyons";
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { connect } from 'react-redux';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    SearchField: state.searchPlayer.searchField
  }
}

//const mapDispatchToProps = (dispatch) => {
//  return {
//    lookFor: (event) => dispatch(setSearchField(event.target.value))
//  }  
//} 

class App extends Component {
  constructor(){
    super()
    this.state = {
      newPlayer: "Alucard",
      age: "666",
      newPlayer2: "",
      age2: "",
      playerI: []
    }
  }

  fet = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=> response.json())
      .then(users=> this.setState({playerI: users}))  
  }

  componentDidMount(){
    this.fet()
  }

  lookFor = (event) =>{
    if(event.target.value.length === 0){
      this.fet()
    }else{
      this.setState({playerI: this.state.playerI.filter(
        pla => pla.name.toLowerCase().includes(event.target.value.toLowerCase())
      )})      
    }
  }

  changeText = (event) =>{
    this.setState({newPlayer2: event.target.value});
  }

  changeText2 = (event) =>{
    this.setState({age2: event.target.value});
  }

  pushButton = (event) =>{
    this.setState({newPlayer: this.state.newPlayer2});
    this.setState({age: this.state.age2});    
  }

  render(){
    const {newPlayer, age, playerI} = this.state;
    return(
      <div className="tc dib br3 pa3 ma2 bw2 fl w-100">
        <h1 className="f1">Tennis Players</h1>
        <input type="search" placeholder="Look for the tennis player" onChange={this.lookFor}/>
        <Scroll>
          <ErrorBoundry>
            <Players nameAmateurPlayer={newPlayer} ageAmateurPlayer={age} PlayersInfo={playerI}/>
          </ErrorBoundry>
        </Scroll>        
        <CreationPlayer onChangeText={this.changeText} onChangeText2={this.changeText2} onClick={this.pushButton}/>
      </div>
    )   
  }
}

export default /*connect(mapStateToProps, mapDispatchToProps)*/(App);