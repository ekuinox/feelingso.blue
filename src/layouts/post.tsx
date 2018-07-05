import * as React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import 'prismjs/themes/prism-coy.css'
import './index.css'

export default class PLayout extends React.Component<any> {
	constructor(props: any) {
		super(props)
		console.log(this.props)
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
					<div
						style={{
							backgroundColor: '#e7e7e7',
							padding: '1.0rem 1.0rem 1.0rem 2.0rem',
							borderRadius: '1rem',
						}}
					>
						<Helmet title={`${this.props.data.site.siteMetadata.title}`} />
						<div>
							<h1 style={{ textAlign: 'center' }}>{this.props.data.site.siteMetadata.title}</h1>
							{(this.props.children as any)()}
						</div>
					</div>
				</div>
				<Footer siteTitle={this.props.data.site.siteMetadata.title} />
			</div>
		)
	}
}
