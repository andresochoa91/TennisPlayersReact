import React from 'react';

const ProfessionalPlayersList = (props) =>{
	return(
		<div>
			<h2>Name: {props.name}</h2>
			<h3>Age: {props.age}</h3>
			<h3>Grand Slams: {props.grandSlams}</h3>
		</div>
	)
}

export default ProfessionalPlayersList;