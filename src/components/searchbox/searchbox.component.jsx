import React from "react";
import "./searchbox.styles.css";

export const SearchBox = ({placeHolder, changeHandler}) => {
	return (
		<input
			className='search'
			type='search'
			placeholder={placeHolder || 'Enter a text'}
			onChange={changeHandler}/>
	);
};