/*
SVGO Config Options - https://gist.github.com/pladaria/69321af86ce165c2c1fc1c718b098dd0
https://www.smooth-code.com/open-source/svgr/docs/options/#svgo-config
*/
// https://github.com/smooth-code/svgr/issues/248

function getComponentTemplate({ template }, opts, { imports, componentName, props, jsx, exports }) {
	const svgContainerComponent = 'StyledSvg';
	jsx.openingElement.name.name = svgContainerComponent;
	jsx.closingElement.name.name = svgContainerComponent;
	jsx.openingElement.attributes.push({
		type: 'JSXText',
		value: '{...props}'
	});

	return template.ast`${imports}
    import StyledSvg from '../StyledSvg';
    export function ${componentName}(${props}) { 
        return (
            ${jsx}
            )
    }
`;
}

module.exports = getComponentTemplate;
