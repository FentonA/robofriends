import React from 'react'
import Card from './card.js'


const CardList = ({robots}) =>{
	const cardCompoenent = robots.map((user,i) =>{
		return (
			<Card 
			key={i} 
			id={robots[i].id}
			name={robots[i].name}
			email={robots[i].email}
			/>
	  );
	})
	return(
			<div>
			   {cardCompoenent}
			</div> 	
	);
}

export default CardList;