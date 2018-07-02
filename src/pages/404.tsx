import * as React from 'react'
import './404.css'

export default class NotFoundPage extends React.Component {
	private _w = 100
	private _h = 100
	render() {
		return (
			<div>
				<h1>NOT FOUND</h1>
				<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
				<img id={'not-found-img'} src={'/assets/img/IMG_0202.JPG'} />
			</div>
		)
	}
}
