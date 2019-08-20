import React from 'react';
import PropTypes from 'prop-types';
import { StyledSvg } from '../components/StyledSvg';

const WrapperForStyledSvg = props => <StyledSvg {...props} />;

WrapperForStyledSvg.propTypes = {
	/** Title Here */
	a11yTitle: PropTypes.string,
	color: PropTypes.string,
	htmlColor: PropTypes.string,
	size: PropTypes.number
};
WrapperForStyledSvg.defaultProps = {
	size: 5
};

export default WrapperForStyledSvg;
