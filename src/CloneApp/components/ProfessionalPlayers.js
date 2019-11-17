import React from 'react';
import ProfessionalPlayersList from './ProfessionalPlayersList';

const ProfessionalPlayers = ({PlayersInfo}) =>{
	return(
		<div>
			{
				PlayersInfo.map(((player, i) => {
					return(
						<ProfessionalPlayersList key={i} name={PlayersInfo[i].name} username={PlayersInfo[i].username}/>							
					)
				}))
			}
		</div>		
	)
}

export default ProfessionalPlayers;