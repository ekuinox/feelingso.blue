import * as React from 'react'
import Helmet from 'react-helmet'

export interface Props {
	data: {
		markdownRemark: {
			html: any
			frontmatter: {
				title: any
				date: any
				path: any
				tags: any
				excerpt: any
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
		return (
			<div>
				<Helmet title={`${this.props.data.markdownRemark.frontmatter.title} - My Blog`} />
				<div>
					<h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
					<h3>{this.props.data.markdownRemark.frontmatter.date}</h3>
					<div dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }} />
				</div>
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
				date(formatString: "MMMM DD, YYYY")
				path
				tags
				excerpt
			}
		}
	}
`
