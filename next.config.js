const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
module.exports = {
	headers: async () => [
		{
			source: '/',
			headers: [
				{
					key: 'X-Portfolio-Version',
					value: version,
				},
			],
		},
	],
};
