import React from 'react';
import {PlayersInfo} from './PlayersInfo';

const Players = () => {
		return(
		<div>
			{
				PlayersInfo.map(((player, i) => {
					return(
						<div>
							<h2>Name: {PlayersInfo[i].name}</h2>
							<h3>Age: {PlayersInfo[i].age}</h3>
							<h3>Grand Slams: {PlayersInfo[i].grandSlams}</h3>						
						</div>
					)
				}))
			}
		</div>
	)
}

export default Players;