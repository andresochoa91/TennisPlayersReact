import React from 'react';
import ProfessionalPlayers from './ProfessionalPlayers';

const Players = (props) => {
	return(
		<div>
			<ProfessionalPlayers PlayersInfo={ props.PlayersInfo }/>
		</div>
	)
}

export default Players;