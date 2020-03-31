import React, {Component} from 'react';
import Players from '../components/Players';
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
      player: []
    }
  } 

  fet = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=> response.json())
      .then(users=> this.setState({player: users}))  
  }

  lookFor = (event) =>{
    if(event.target.value.length === 0){
      this.fet()
    }else{
      this.setState({player: this.state.player.filter(
        pla => pla.name.toLowerCase().includes(event.target.value.toLowerCase())
      )})      
    }
  }

  render(){
    const { player } = this.state;
    return(
      <div className="tc dib br3 pa3 ma2 bw2 fl w-100">
        <h1 className="f1">Tennis Players</h1>
        <input type="search" placeholder="Look for the tennis player" onChange={this.lookFor}/>
        <Scroll>
          <ErrorBoundry>
            {
              this.state.player.length === 0 && this.fet()
            }
            <Players PlayersInfo={ player }/>
          </ErrorBoundry>
        </Scroll>        
      </div>
    )   
  }
}

export default /*connect(mapStateToProps, mapDispatchToProps)*/(App);