import React from 'react';

const AmateurPlayer = (props) =>{
	return(
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${props.nameAmateurPlayer}/?set=set5`} width="200px" height="150px" alt="im"/>
			<h2>Name: {props.nameAmateurPlayer}</h2>
			<h3>Age: {props.ageAmateurPlayer}</h3>
			<h3>Amateur</h3>
		</div>
	)
}

export default AmateurPlayer;