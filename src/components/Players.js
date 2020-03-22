import React from 'react';
import ProfessionalPlayers from './ProfessionalPlayers';
import AmateurPlayer from './AmateurPlayer';

const Players = (props) => {
//		if (true){
//			throw new Error("Fuuuuuuuuuuuckk");
//		}
		return(
		<div>
			<ProfessionalPlayers PlayersInfo={props.PlayersInfo}/>
			<AmateurPlayer nameAmateurPlayer={props.nameAmateurPlayer} ageAmateurPlayer={props.ageAmateurPlayer}/>
		</div>
	)
}

export default Players;