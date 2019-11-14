import React, {Component} from 'react';
import Players from './Players';
import CreationPlayer from './CreationPlayer'

class App extends Component {
	constructor(){
		super()
		this.state = {
			newPlayer: "Alucard",
			age: "666",
			newPlayer2: "",
			age2: ""

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
		return(
			<div>
				<h1>Tennis Players</h1>
				<Players nameAmateurPlayer={this.state.newPlayer} ageAmateurPlayer={this.state.age}/>
				<CreationPlayer onChangeText={this.changeText} onChangeText2={this.changeText2} onClick={this.pushButton}/>
			</div>
		)		
	}
}

export default App;