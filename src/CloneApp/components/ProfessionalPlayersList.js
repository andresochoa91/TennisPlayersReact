import React from 'react';

const ProfessionalPlayersList = (props) =>{
	return(
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 fl">
			<img src= {`https://robohash.org/${props.name}/?set=set5`} width="200px" height="150px" alt="im"/>
			<h2>Name: {props.name}</h2>
			<h3>Username: {props.username}</h3>
		</div>
	)
}

export default ProfessionalPlayersList;