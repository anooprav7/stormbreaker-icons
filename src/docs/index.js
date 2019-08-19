import React from 'react';
import * as Icons from '../components';
import styled from 'styled-components';
import IconItem from './IconItem';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

function IconList(props) {
	console.log('Icons', Object.keys(Icons));
	const showIcons = Object.keys(Icons).map(Icon => {
		const FinalIcon = Icons[Icon];
		return <IconItem IconComponent={FinalIcon} label={Icon} />;
	});
	console.log('showIcons', showIcons);
	return <Container>{showIcons}</Container>;
}

export default IconList;
