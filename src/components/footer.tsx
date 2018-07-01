import * as React from 'react'
import TwitterShare from './TwitterShare'
import Link from 'gatsby-link'

export interface Props {
	siteTitle: string
}

export default class Header extends React.Component<Props> {
	constructor(props: Props) {
		super(props)
	}

	render() {
		return (
			<div
				style={{
					padding: '0.45rem 1.0875rem',
					textAlign: 'right',
				}}
			>
				<TwitterShare text="Tweet" />
			</div>
		)
	}
}
