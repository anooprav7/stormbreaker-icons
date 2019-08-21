import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	width: 20%;
	margin-top: 7px;
`;
const Wrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 50%;
	&:hover {
		color: #2196f3;
		cursor: pointer;
	}
`;

function IconItem(props) {
	const { label, IconComponent } = props;
	return (
		<Container
			onClick={() => {
				navigator.clipboard.writeText(label).then( ()=>{
                    window.alert(`Copied '${label}' to Clipboard`);
                })
			}}
		>
			<Wrapper>
				<IconComponent size={45} />
				<span>{label}</span>
			</Wrapper>
		</Container>
	);
}

export default IconItem;
