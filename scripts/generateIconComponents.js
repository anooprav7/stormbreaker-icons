const svgr = require('@svgr/core').default;
const fs = require('fs');
const path = require('path');
const pascalCase = require('pascalcase');
const rimraf = require('rimraf');

const { SVGR_CONFIG } = require('./configs.js');

const INPUT_SVG_FILES_BASE_PATH = path.resolve('src/assets/icons/');
const OUTPUT_ICON_COMPONENTS_BASE_PATH = path.resolve('src/components/Icons/');

fs.readdir(INPUT_SVG_FILES_BASE_PATH, (err, icons) => {
	if (err) throw err;

	rimraf.sync(OUTPUT_ICON_COMPONENTS_BASE_PATH);
	fs.mkdirSync(OUTPUT_ICON_COMPONENTS_BASE_PATH);

	let iconNames = [];

	icons.forEach(icon => {
		if (/\.svg$/.test(icon)) {
			const iconPath = path.join(INPUT_SVG_FILES_BASE_PATH, icon);
			let fileName = pascalCase(icon.replace('.svg', ''));
			iconNames.push(fileName);
			const content = fs.readFileSync(iconPath, 'utf8');

			svgr(content, SVGR_CONFIG, { componentName: fileName }).then(jsCode => {
				const destinationFile = path.resolve(OUTPUT_ICON_COMPONENTS_BASE_PATH, `${fileName}.js`);
				fs.writeFile(destinationFile, jsCode, err => {
					if (err) throw err;
				});
			});
		}
	});

	fs.writeFileSync(
		path.resolve(OUTPUT_ICON_COMPONENTS_BASE_PATH, 'index.js'),
		`${iconNames.map(iconName => `export * from './${iconName}';`).join('\n')}\n`
	);
	console.log(iconNames.map(icon => icon.toString()));
});
