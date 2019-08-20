import React from 'react';
import styled, { css } from 'styled-components';

const colorCss = css`
	fill: ${props => props.color || '#000'};
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

const StyledSvg = styled(({ a11yTitle, color, size, ...rest }) => <svg aria-label={a11yTitle} {...rest} />)`
	display: inline-block;
	flex: 0 0 auto;
	/* width: ${props => props.size || '24px'}; */
	/* height: ${props => props.size || '24px'}; */
	${({ color }) => color !== 'plain' && colorCss}
`;
StyledSvg.displayName = 'Icon';
/*
	a11yTitle: PropTypes.string,
	color: PropTypes.string,
	htmlColor: PropTypes.string,
	size: PropTypes.number
*/

export { StyledSvg };
