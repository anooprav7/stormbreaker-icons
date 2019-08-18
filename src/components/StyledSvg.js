import React from 'react';
import styled, { css } from 'styled-components';

const colorCss = css`
	fill: ${props => props.color || '#0000ff'};
	stroke: ${props => props.color || '#00ff00'};
	g {
		fill: inherit;
		stroke: inherit;
	}
	*:not([stroke]) {
		&[fill='none'] {
			stroke-width: 0;
		}
	}
	*[stroke*='#'],
	*[STROKE*='#'] {
		stroke: inherit;
		fill: none;
	}
	*[fill-rule],
	*[FILL-RULE],
	*[fill*='#'],
	*[FILL*='#'] {
		fill: inherit;
		stroke: none;
	}
`;

const IconInner = ({ a11yTitle, color, size, theme, ...rest }) => <svg aria-label={a11yTitle} {...rest} />;
IconInner.displayName = 'Icon';

const StyledSvg = styled(IconInner)`
	display: inline-block;
	flex: 0 0 auto;
	/* width: ${props => props.size || '24px'}; */
	/* height: ${props => props.size || '24px'}; */
	${({ color }) => color !== 'plain' && colorCss}
`;

/*
	a11yTitle: PropTypes.string,
	color: PropTypes.string,
	htmlColor: PropTypes.string,
	size: PropTypes.number
*/

export default StyledSvg;
