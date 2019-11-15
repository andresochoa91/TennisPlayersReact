import React from 'react';
import ProfessionalPlayersList from './ProfessionalPlayersList';

const ProfessionalPlayers = ({PlayersInfo}) =>{
	return(
		<div>
			{
				PlayersInfo.map(((player, i) => {
					return(
						<div>
							<ProfessionalPlayersList key={i} picture={PlayersInfo[i].picture} name={PlayersInfo[i].name} age={PlayersInfo[i].age} grandSlams={PlayersInfo[i].grandSlams}/>						
						</div>
					)
				}))
			}
		</div>		
	)
}

export default ProfessionalPlayers;