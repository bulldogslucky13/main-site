const withFonts = require('next-fonts');
const composePlugins = require('next-compose-plugins');
const { version } = require('./package.json');

const headers = async () => [
	{
		source: '/',
		headers: [
			{
				key: 'X-Portfolio-Version',
				value: version,
			},
		],
	},
];

// const {
// 	PHASE_PRODUCTION_SERVER,
// 	PHASE_PRODUCTION_BUILD,
// } = require('next/constants');

module.exports = composePlugins([[withFonts]], { headers });
