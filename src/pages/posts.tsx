import * as React from 'react'
import PostCard from '../components/PostCard'
import Helmet from 'react-helmet'

export interface Node {
	id: string
	frontmatter: {
		title: string
		path: string
		date: string
		tags: string
		excerpt: string
		publish: boolean
		secret: boolean
	}
}

interface Props {
	data: {
		allMarkdownRemark: {
			totalCount: number
			edges: {
				node: Node
			}[]
		}
		site: {
			siteMetadata: {
				title: string
			}
		}
	}
}

export default class PostsIndexPage extends React.Component<Props> {
	readonly pageTitle = '記事一覧'
	constructor(props: Props) {
		super(props)

		// 降順ソート
		this.props.data.allMarkdownRemark.edges.sort((a, b) => {
			const d1 = new Date(a.node.frontmatter.date)
			const d2 = new Date(b.node.frontmatter.date)
			if (d1 > d2) return -1
			if (d1 < d2) return 1
			return 0
		})
	}

	render() {
		return (
			<div>
				<Helmet title={`${this.pageTitle} - ${this.props.data.site.siteMetadata.title}`} />
				{this.props.data.allMarkdownRemark.edges.map(({ node: post }) => {
					if (post.frontmatter.publish && !post.frontmatter.secret) return <PostCard node={post} />
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
		site {
			siteMetadata {
				title
			}
		}
	}
`
