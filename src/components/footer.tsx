import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Share as TwitterShare } from 'react-twitter-widgets'

export interface Props {
	siteTitle: string
}

export default class Header extends React.Component<Props> {
	private location: Location
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
				{this.location ? <TwitterShare url={this.location.toString()} /> : <div id="twitter-share" />}
			</div>
		)
	}

	componentDidMount() {
		this.location = window.document.location
		ReactDOM.render(<TwitterShare url={this.location.toString()} />, document.getElementById('twitter-share'))
	}
}
