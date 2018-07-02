module.exports = {
	siteMetadata: {
		title: 'れもくすサイト',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-typescript',
		'gatsby-transformer-remark',
		 {
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
			  plugins: [
				  {
					  resolve: `gatsby-remark-prismjs`,
					  options: {
						  classPrefix: "language-",
						  inlineCodeMarker: null,
						  aliases: {},
						},
					},
				],
			},
		},
	],
}
