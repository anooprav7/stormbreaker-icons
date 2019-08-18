const getComponentTemplate = require('./componentTemplate');

// https://github.com/svg/svgo/issues/439
// https://gist.github.com/pladaria/69321af86ce165c2c1fc1c718b098dd0
const SVGO_CONFIG = {
	plugins: [{ removeViewBox: false }]
};

const SVGR_CONFIG = {
	template: getComponentTemplate,
	// https://github.com/smooth-code/svgr/issues/264
	plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
	svgoConfig: SVGO_CONFIG
};

module.exports = {
	SVGR_CONFIG
};
