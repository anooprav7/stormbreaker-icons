import React from 'react';
import styled, { css } from 'styled-components';

const fillCss = css`
    fill: ${props => props.htmlColor || (props.themeColor && props.theme.colors[props.themeColor]) || 'currentColor'}; 
`;

const strokeCss = css`
    stroke: ${props => props.htmlColor || (props.themeColor && props.theme.colors[props.themeColor]) || 'currentColor'}; 
`;

const colorCss = css`
    ${props => props.enableFill && fillCss }
    ${props => !props.removeStroke && strokeCss }
	
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

const StyledSvg = styled(({ a11yLabel, themeColor, htmlColor, useDefaultColors, size,removeFill,removeStroke, ...rest }) => (
	<svg role='img' aria-label={a11yLabel} {...rest} />
))`
	display: inline-block;
	width: ${props => (props.size && `${props.size}px`) || '24px'};
	height: ${props => (props.size && `${props.size}px`) || '24px'};
	${({ useDefaultColors }) => !useDefaultColors && colorCss}
`;
StyledSvg.displayName = 'Icon';

export { StyledSvg };
