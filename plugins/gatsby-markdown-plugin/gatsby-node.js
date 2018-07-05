const path = require("path")

exports.createPages = ({boundActionCreators, graphql}, {layoutFile, temlateFile}) => {
	const {createPage} = boundActionCreators
	const template = path.resolve(temlateFile)
	return graphql(`
	{
		allMarkdownRemark {
			edges {
				node {
					fileAbsolutePath
					frontmatter {
						mdx
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
				const page = (() => {
					if (frontmatter.mdx) {
						return {
							path: path,
							component: fileAbsolutePath,
							layout: layoutFile,
						}
					}
					else {
						return {
							path: path,
							component: template,
						}
					}
				})()
				createPage(page)
			}
		)
	})
}
