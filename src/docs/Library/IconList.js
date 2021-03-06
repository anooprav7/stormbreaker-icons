import React, { useState, useEffect } from 'react';
import * as Icons from '../../components';
import styled from 'styled-components';
import IconItem from './IconItem';

const Container = styled.div`
	/* display: flex; */
	/* justify-content: space-between; */
	/* flex-wrap: wrap; */
`;

const Input = styled.input`
	display: block;
	width: 100%;
	font-size: 16px;
	height: 44px;
	margin: 0 0 15px 0;
	box-sizing: border-box;
	background: rgb(255, 255, 255);
	border-width: 1px;
	border-style: solid;
	border-color: rgb(204, 204, 204);
	border-radius: 3px;
	padding: 10px 16px;
	transition: border-color 0.25s ease 0s, box-shadow 0.25s ease 0s;
	font-family: sans-serif;
	&:focus {
		box-shadow: #0b5fff 0px 0px 0px 1px;
		border-color: #0b5fff;
		outline: none;
	}
`;

const allIconNames = Object.keys(Icons);

function IconList(props) {
	const [query, setQuery] = useState('');
	const filteredIcons = allIconNames.reduce((IconsToShow, Icon) => {
		if (Icon.toLowerCase().startsWith(query.toLowerCase()))
			return (IconsToShow = [...IconsToShow, <IconItem IconComponent={Icons[Icon]} label={Icon} />]);
		return IconsToShow;
	}, []);
	return (
		<Container>
			{' '}
			<Input placeholder='Search Icon Library' onChange={e => setQuery(e.target.value)} />
			{filteredIcons.length > 0 ? filteredIcons : <div>No Icons Found</div>}
		</Container>
	);
}

export default IconList;
