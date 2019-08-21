const rimraf = require('rimraf');
const fs = require('fs');

const BUILD_OUTPUT_FOLDER = './build';

rimraf.sync(BUILD_OUTPUT_FOLDER);
fs.mkdirSync(BUILD_OUTPUT_FOLDER);

fs.copyFile('package.json', BUILD_OUTPUT_FOLDER + '/package.json', err => {
	if (err) throw err;
	console.log('package.json copied');
});
