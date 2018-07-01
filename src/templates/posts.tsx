import * as React from 'react'
import Helmet from 'react-helmet'

export interface Props {
	data: {
		markdownRemark: {
			html: any
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
		site: {
			siteMetadata: {
				title: string
			}
		}
	}
	location: any
	pathContext: any
}

export default class PostsTemplate extends React.Component<Props> {
	constructor(props: Props) {
		super(props)
	}

	render() {
		return this.props.data.markdownRemark.frontmatter.publish ? (
			<div>
				<Helmet
					title={`${this.props.data.markdownRemark.frontmatter.title} - ${
						this.props.data.site.siteMetadata.title
					}`}
				/>
				<div>
					<h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
					<h3>{this.props.data.markdownRemark.frontmatter.date}</h3>
					<div dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }} />
				</div>
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
export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
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
		site {
			siteMetadata {
				title
			}
		}
	}
`
