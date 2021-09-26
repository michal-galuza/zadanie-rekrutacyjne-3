/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	env: {
		API_DOMAIN: 'http://localhost:3001',
	},
	images: {
		domains: ['test.justjoin.it'],
	},
};
