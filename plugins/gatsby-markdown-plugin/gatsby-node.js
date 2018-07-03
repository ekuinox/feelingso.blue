const fs = require("fs")
const path = require("path")

exports.createPages = ({boundActionCreators, graphql}, {temlateFile}) => {
    const {createPage} = boundActionCreators;
	const blogPostTemplate = path.resolve(temlateFile);
	return graphql(`{
		allMarkdownRemark {
            edges {
                node {
					html
					id
					frontmatter {
						date
						path
						title
						excerpt
						tags
						publish
					}
				}
			}
		}
	}`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors);
		}
		const posts = result.data.allMarkdownRemark.edges;

		posts.forEach(({node}, index) => {
			if (node.frontmatter.publish)
				createPage({
					path: node.frontmatter.path,
					component: blogPostTemplate,
				});
		});
	});
}