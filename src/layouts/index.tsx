import * as React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'

export interface Props {
	data: {
		site: {
			siteMetadata: {
				title: string
			}
		}
	}
}

export default class IndexLayout extends React.Component<Props> {
	constructor(props: Props) {
		super(props)
	}

	public render() {
		return (
			<div>
				<Helmet
					title={this.props.data.site.siteMetadata.title}
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
					{(this.props.children as any)()}
				</div>
			</div>
		)
	}
}

declare function graphql(x: TemplateStringsArray): any
export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
