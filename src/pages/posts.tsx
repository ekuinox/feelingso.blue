import * as React from 'react'
import Link from 'gatsby-link'

interface Props {
	data: {
		allMarkdownRemark: {
			totalCount: number
			edges: {
				node: {
					id: string
					frontmatter: {
						title: any
						path: any
						date: any
						tags: any
						excerpt: any
						publish: boolean
						secret: boolean
					}
				}
			}[]
		}
	}
}

export default class PostsIndexPage extends React.Component<Props> {
	constructor(props: Props) {
		super(props)
	}

	render() {
		return (
			<div>
				{this.props.data.allMarkdownRemark.edges.map(({ node: post }) => {
					if (post.frontmatter.publish && !post.frontmatter.secret)
						return (
							<div key={post.id}>
								<h2>
									<Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
								</h2>
								<p>{post.frontmatter.excerpt}</p>
								<p>{post.frontmatter.date}</p>
							</div>
						)
				})}
			</div>
		)
	}
}

declare function graphql(x: TemplateStringsArray): any
export const query = graphql`
	query PostsQuery {
		allMarkdownRemark {
			totalCount
			edges {
				node {
					id
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
`
