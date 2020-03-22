import React from 'react';

const CreationPlayer = (props) => {
	return(
		<div>
			<input type="text" placeholder="Enter name of player" onChange={props.onChangeText}/>
			<br/>
			<input type="text" placeholder="Enter age of player" onChange={props.onChangeText2}/>
			<br/>
			<button onClick={props.onClick}>Create Player</button>
		</div>
	)
}

export default CreationPlayer;