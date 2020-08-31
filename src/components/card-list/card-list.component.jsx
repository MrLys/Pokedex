import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

export const CardList = (props) => {
	//console.log(props.pokemon);
	return (
		<div className='card-list'>
			{
				props.pokemon.map(pokemon => (
					<Card
						key={pokemon.id}
						name={pokemon.name}
						img={pokemon.img}
						type={pokemon.type}
						icons={pokemon.icons}
						useIcons={props.icons}/>
				))}
		</div>

	);
};

