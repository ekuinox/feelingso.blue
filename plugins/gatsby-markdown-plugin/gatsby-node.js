const fs = require("fs")
const path = require("path")

exports.createPages = ({boundActionCreators, graphql}, {temlateFile}) => {
    const {createPage} = boundActionCreators;
	const blogPostTemplate = path.resolve(temlateFile);
	return new Promise((resolve, reject) => {
		graphql(`
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
				createPage({
				  path: frontmatter.path,
				  component: fileAbsolutePath,
				  layout: "post",
				  context: {
					  frontmatter: frontmatter
				  },
				  layoutContext: frontmatter
				})
			  }
			)
		  })
		  .then(resolve)
	  })
}
