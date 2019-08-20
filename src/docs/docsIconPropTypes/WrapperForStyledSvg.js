import React from 'react';
import PropTypes from 'prop-types';
import { StyledSvg } from '../../components/StyledSvg';

const WrapperForStyledSvg = props => <StyledSvg {...props} />;

// https://css-tricks.com/accessible-svgs/
WrapperForStyledSvg.propTypes = {
	/** Provides a human-readable title for the element that contains it. If not provided, will be the Icon name. [W3Org](https://www.w3.org/TR/SVG-access/#Equivalent) */
	a11yTitle: PropTypes.string.isRequired,

	/**  A valid theme color value. Eg. primary500, secondary400  */
	themeColor: PropTypes.string,

	/** Applies a color attribute to the SVG element. Takes precedence over themeColor */
	htmlColor: PropTypes.string,

	/** Size of the Icon. Same scale as font scale in stormbreaker theme token   */
	size: PropTypes.string
};
WrapperForStyledSvg.defaultProps = {};

export default WrapperForStyledSvg;
