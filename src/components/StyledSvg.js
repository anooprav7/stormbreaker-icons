import React from 'react';
import styled, { css } from 'styled-components';

const colorCss = css`
	fill: ${props => props.htmlColor || (props.themeColor && props.theme.colors[props.themeColor]) || 'currentColor'};
	stroke: ${props => props.htmlColor || (props.themeColor && props.theme.colors[props.themeColor]) || 'currentColor'};
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
	width: ${props => (props.size && `${props.size}px`) || '24px'};
	height: ${props => (props.size && `${props.size}px`) || '24px'};
	${({ useDefaultColors }) => !useDefaultColors && colorCss}
`;
StyledSvg.displayName = 'Icon';

export { StyledSvg };
