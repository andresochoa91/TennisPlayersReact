import React, {Component} from 'react';
import './App.css';
import Players from './Players';
import CreationPlayer from './CreationPlayer';
import {PlayersInfo} from './PlayersInfo';

class App extends Component {
  constructor(){
    super()
    this.state = {
      newPlayer: "Alucard",
      age: "666",
      newPlayer2: "",
      age2: "",
      playerI: PlayersInfo
    }
  }

  lookFor = (event) =>{
    const a = PlayersInfo.filter(pla => pla.name.toLowerCase().includes(event.target.value.toLowerCase()));
    this.setState({playerI: a})
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
    return(
      <div>
        <h1>Tennis Players</h1>
        <input type="search" placeholder="Look for the tennis player" onChange={this.lookFor}/>
        <Players nameAmateurPlayer={this.state.newPlayer} ageAmateurPlayer={this.state.age} PlayersInfo={this.state.playerI}/>
        <CreationPlayer onChangeText={this.changeText} onChangeText2={this.changeText2} onClick={this.pushButton}/>
      </div>
    )   
  }
}

export default App;