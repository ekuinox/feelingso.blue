import * as React from 'react'
import Helmet from 'react-helmet'
import './404.css'

interface Props {
	data: {
		site: {
			siteMetadata: {
				title: string
			}
		}
	}
}

export default class NotFoundPage extends React.Component<Props> {
	readonly pageTitle = "404"
	constructor(props: Props) {
		super(props)
	}
	render() {
		return (
			<div>
				<Helmet title={`${this.pageTitle} - ${this.props.data.site.siteMetadata.title}`} />
				<h1>NOT FOUND</h1>
				<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
				<img id={'not-found-img'} src={'/assets/img/IMG_0202.JPG'} />
			</div>
		)
	}
}

declare function graphql(x: TemplateStringsArray): any
export const query = graphql`
	query NotFoundPageQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
