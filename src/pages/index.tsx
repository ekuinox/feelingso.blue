import * as React from 'react'
import Link from 'gatsby-link'
import PostCard from '../components/PostCard'

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

export interface Props {
	data: {
		allMarkdownRemark: {
			totalCount: number
			edges: {
				node: Node
			}[]
		}
	}
}

export default class IndexPage extends React.Component<Props> {
	private newestPost: Node = null
	constructor(props: Props) {
		super(props)

		// 最新記事をセットする
		props.data.allMarkdownRemark.edges.map(({ node: post }) => {
			if (
				!post.frontmatter.secret &&
				post.frontmatter.publish &&
				(this.newestPost == null ||
					new Date(post.frontmatter.date) > new Date(this.newestPost.frontmatter.date))
			) {
				this.newestPost = post
			}
		})
	}

	render() {
		return (
			<div style={{ margin: 0 }}>
				<div
					style={{
						padding: '1.0rem 1.0rem 1.0rem 2.0rem',
						backgroundColor: '#ffeeff',
						borderRadius: '0.5rem',
					}}
				>
					<p>れもくすサイトです．</p>
					<p>
						<a href="https://twitter.com/ekuinox/">@ekuinox</a>によって管理されています．私については<Link to="about">
							こちら
						</Link>．
					</p>
				</div>
				<PostCard node={this.newestPost} front={<h2 style={{ fontSize: '90%' }}>最新の記事</h2>} />
			</div>
		)
	}
}

declare function graphql(x: TemplateStringsArray): any
export const query = graphql`
	query IndexQuery {
		allMarkdownRemark {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						path
						date
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
