import React from 'react';
import PropTypes from 'prop-types';
import { StyledSvg } from '../../components/StyledSvg';

const WrapperForStyledSvg = props => <StyledSvg {...props} />;

// https://css-tricks.com/accessible-svgs/
WrapperForStyledSvg.propTypes = {
	/** Provides a human-readable aria-label on the svg tag. */
	a11yLabel: PropTypes.string,

	/**  A valid theme color value from design token colors. Eg. primary500, secondary400  */
	themeColor: PropTypes.string,

	/** Applies a color attribute to the SVG element. Takes precedence over themeColor */
	htmlColor: PropTypes.string,

	/** Size of the Icon (height and width) in px   */
	size: PropTypes.number,

	/** Use the default colors provided in the svg. Used mostly in Icons with multi-colored paths  */
	useDefaultColors: PropTypes.bool
};
WrapperForStyledSvg.defaultProps = {
	size: 32,
	useDefaultColors: false
};

export default WrapperForStyledSvg;
