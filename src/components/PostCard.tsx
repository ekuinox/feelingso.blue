import * as React from 'react'
import Link from 'gatsby-link'

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
	node: Node
	front?: JSX.Element
	back?: JSX.Element
}

export default class PostCard extends React.Component<Props> {
	constructor(props: Props) {
		super(props)
	}

	render() {
		return (
			<div
				style={{
					marginTop: '2rem',
					padding: '1.0rem 1.0rem 1.0rem 2.0rem',
					backgroundColor: '#ffeeff',
					borderRadius: '0.5rem',
				}}
			>
				{this.props.front}
				<span
					style={{
						fontSize: '75%',
					}}
				>
					{new Date(this.props.node.frontmatter.date).toLocaleDateString()}
				</span>
				<h3>
					<Link to={this.props.node.frontmatter.path}>{this.props.node.frontmatter.title}</Link>
				</h3>
				<span
					style={{
						fontSize: '80%',
						color: 'black',
						backgroundColor: '#808080',
						padding: '0.4rem 0.4rem 0.4rem 0.4rem',
						borderRadius: '0.1rem',
						border: 'dashed 0.04rem',
					}}
				>
					{this.props.node.frontmatter.excerpt}
				</span>
				{this.props.back}
			</div>
		)
	}
}
