import * as React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import 'prismjs/themes/prism-coy.css'
import './index.css'

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
	location: {
		pathname: string
	}
}

export default class PostLayout extends React.Component<Props> {
	readonly node: Node
	constructor(props: Props) {
		super(props)
		for (const { node } of this.props.data.allMarkdownRemark.edges) {
			if (node.frontmatter.path == this.props.location.pathname) {
				this.node = node
				break
			}
		}
	}

	public render() {
		return this.node.frontmatter.publish ? (
			<div>
				<Helmet
					title={`${this.node.frontmatter.title} - ${this.props.data.site.siteMetadata.title}`}
					meta={[
						{ name: 'description', content: 'れもくすサイト' },
						{ name: 'keywords', content: 'lm0x, lm9, ekuinox, feelingso.blue' },
					]}
				/>
				<Header siteTitle={this.props.data.site.siteMetadata.title} />
				<div
					style={{
						margin: '0 auto',
						maxWidth: 960,
						padding: '0px 1.0875rem 1.45rem',
						paddingTop: 0,
					}}
				>
					<div
						style={{
							backgroundColor: '#e7e7e7',
							padding: '1.0rem 1.0rem 1.0rem 2.0rem',
							borderRadius: '1rem',
						}}
					>
						<div>
							<h1 style={{ textAlign: 'center' }}>{this.node.frontmatter.title}</h1>
							{(this.props.children as any)()}
						</div>
					</div>
				</div>
				<Footer siteTitle={this.node.frontmatter.title} />
			</div>
		) : (
			<div>
				<h1>NOT FOUND</h1>
				<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			</div>
		)
	}
}

declare function graphql(x: TemplateStringsArray): any
export const query = graphql`
	query PostQuery {
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
