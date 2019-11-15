import React from 'react';
import ProfessionalPlayersList from './ProfessionalPlayersList';

const ProfessionalPlayers = ({PlayersInfo}) =>{
	return(
		<div>
			{
				PlayersInfo.map(((player, i) => {
					return(
						<div>
							<ProfessionalPlayersList name={PlayersInfo[i].name} username={PlayersInfo[i].username}/>						
						</div>
					)
				}))
			}
		</div>		
	)
}

export default ProfessionalPlayers;