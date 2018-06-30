import * as React from 'react'
import Link from 'gatsby-link'

export interface Props {
	siteTitle: any
}

export default class Header extends React.Component<Props> {
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
						padding: '1.45rem 1.0875rem',
					}}
				>
					<h1 style={{ margin: 0 }}>
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
				</div>
			</div>
		)
	}
}
