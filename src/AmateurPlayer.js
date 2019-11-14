import React from 'react';

const AmateurPlayer = (props) =>{
	return(
		<div>
			<h2>Name: {props.nameAmateurPlayer}</h2>
			<h3>Age: {props.ageAmateurPlayer}</h3>
			<h3>Amateur</h3>
		</div>
	)
}

export default AmateurPlayer;