import React from 'react';

const ProfessionalPlayersList = (props) =>{
	return(
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 fl">
			<img src={props.picture} width="200px" height="150px" alt="im"/>
			<h2>Name: {props.name}</h2>
			<h3>Age: {props.age}</h3>
			<h3>Grand Slams: {props.grandSlams}</h3>
		</div>
	)
}

export default ProfessionalPlayersList;