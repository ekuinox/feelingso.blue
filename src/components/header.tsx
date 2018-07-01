import * as React from 'react'
import Link from 'gatsby-link'

export interface Props {
	siteTitle: any
}

export default class Header extends React.Component<Props> {
	readonly listFontFamily = 'Latha'
	constructor(props: Props) {
		super(props)
	}

	render() {
		return (
			<div
				style={{
					background: 'rebeccapurple',
					marginBottom: '1.45rem',
				}}
			>
				<div
					style={{
						margin: '0 auto',
						maxWidth: 960,
						padding: '0.45rem 0.0875rem',
					}}
				>
					<h1 style={{ margin: 0, float: 'left' }}>
						<Link
							to="/"
							style={{
								color: 'white',
								textDecoration: 'none',
							}}
						>
							{this.props.siteTitle}
						</Link>
					</h1>
					<ul style={{ display: 'table', listStyle: 'none', paddingLeft: '1.5em' }}>
						<li style={{ paddingLeft: 0, display: 'table-cell', fontFamily: this.listFontFamily }}>
							<Link
								to="/about"
								style={{
									color: 'white',
									textDecoration: 'none',
								}}
							>
								About
							</Link>
						</li>
						<li style={{ paddingLeft: '0.5em', display: 'table-cell', fontFamily: this.listFontFamily }}>
							<Link
								to="/posts"
								style={{
									color: 'white',
									textDecoration: 'none',
								}}
							>
								Posts
							</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
