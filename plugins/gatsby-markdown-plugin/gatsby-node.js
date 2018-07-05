const path = require("path")

exports.createPages = ({boundActionCreators, graphql}, {layoutFile}) => {
	const {createPage} = boundActionCreators;
	return graphql(`
	{
		allMarkdownRemark {
			edges {
				node {
					fileAbsolutePath
					frontmatter {
						title
						path
						date(formatString: "MMMM DD, YYYY")
						tags
						excerpt
						publish
						secret
					}
				}
			}
		} 
	}
	`)
	.then(result => {
		if (result.errors) {
			return reject(result.errors)
		}

		// Create markdown pages.
		result.data.allMarkdownRemark.edges.forEach(
			({ node: { fileAbsolutePath, frontmatter } }) => {
				const path = frontmatter.path;
				const page = {
					path: path,
					component: fileAbsolutePath,
					layout: layoutFile,
				}
				createPage(page)
			}
		)
	})
}
