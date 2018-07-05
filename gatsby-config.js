module.exports = {
	siteMetadata: {
		title: 'れもくすサイト',
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/pages/`,
			},
		},
		'gatsby-plugin-typescript',
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-mdx`,
		'gatsby-transformer-remark',
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
		{
			resolve: `gatsby-markdown-plugin`,
			options: {
				name: `src`,
				path: `${__dirname}/src`,
				layoutFile: `post`
			},
		}
	],
}
