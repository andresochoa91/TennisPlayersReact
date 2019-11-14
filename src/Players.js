import React from 'react';
import ProfessionalPlayers from './ProfessionalPlayers';
import AmateurPlayer from './AmateurPlayer';
import {PlayersInfo} from './PlayersInfo';

const Players = (props) => {
		return(
		<div>
			<ProfessionalPlayers PlayersInfo={PlayersInfo}/>
			<AmateurPlayer nameAmateurPlayer={props.nameAmateurPlayer} ageAmateurPlayer={props.ageAmateurPlayer}/>
		</div>
	)
}

export default Players;