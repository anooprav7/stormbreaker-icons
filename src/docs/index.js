import React from 'react';
import * as Icons from '../components';

function IconList(props) {
	console.log('Icons', Object.keys(Icons));
	const showIcons = Object.keys(Icons).map(Icon => {
		const FinalIcon = Icons[Icon];
		return <FinalIcon />;
	});
	console.log('showIcons', showIcons);
	return <div>{showIcons}</div>;
}

export default IconList;
