import React, {Component} from 'react';
import Players from './Players';
import CreationPlayer from './CreationPlayer';
import {PlayersInfo} from './PlayersInfo';
import "tachyons";

class App extends Component {
  constructor(){
    console.log("constructor");
    super()
    this.state = {
      newPlayer: "Alucard",
      age: "666",
      newPlayer2: "",
      age2: "",
      playerI: []
    }
  }

  componentDidMount(){
    console.log("componentDidMount");
    this.setState({playerI: PlayersInfo})
  }

  lookFor = (event) =>{
    this.setState({playerI: PlayersInfo.filter(pla => pla.name.toLowerCase().includes(event.target.value.toLowerCase()))})
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
    console.log("render");
    return(
      <div className="tc dib br3 pa3 ma2 bw2 fl w-100">
        <h1 className="f1">Tennis Players</h1>
        <input type="search" placeholder="Look for the tennis player" onChange={this.lookFor}/>
        <Players nameAmateurPlayer={this.state.newPlayer} ageAmateurPlayer={this.state.age} PlayersInfo={this.state.playerI}/>
        <CreationPlayer onChangeText={this.changeText} onChangeText2={this.changeText2} onClick={this.pushButton}/>
      </div>
    )   
  }
}

export default App;