import * as React from 'react'

export interface Props {
	text: string
}

export default class Header extends React.Component<Props> {
	constructor(props: Props) {
		super(props)
	}

	render() {
		return (
			<div>
				<a
					href="https://twitter.com/share?ref_src=twsrc%5Etfw"
					className="twitter-share-button"
					data-show-count="false"
				>
					{this.props.text}
				</a>
			</div>
		)
	}

	componentDidMount() {
		// scriptタグが埋め込まれた後にTwitterのaタグが置かれても機能が有効にならないので、すでにscriptタグが存在する場合は消す。
		const scriptNode = document.getElementById('twitter-wjs')
		if (scriptNode) {
			scriptNode.parentNode.removeChild(scriptNode)
		}

		// ボタン機能の初期化（オフィシャルのボタン生成ページで生成されるものと同じもの）
		!(function(d, s, id) {
			const fjs = d.getElementsByTagName(s)[0],
				p = /^http:/.test(d.location.toString()) ? 'http' : 'https'
			if (!d.getElementById(id)) {
				const js: any = d.createElement(s)
				js.id = id
				js.src = p + '://platform.twitter.com/widgets.js'
				fjs.parentNode.insertBefore(js, fjs)
			}
		})(document, 'script', 'twitter-wjs')
	}
}
