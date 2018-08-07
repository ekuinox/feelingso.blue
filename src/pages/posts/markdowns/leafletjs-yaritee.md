---
mdx: false
path: "/posts/2018/07/17/leaflet"
date: "2018-08-08T01:23:26.544Z"
title: "【とりあえず】Leaflet + React + TypeScriptしたい【なんとかなりました】"
tags: []
excerpt: "いやこれが全然できないんだよな"
publish: true
secret: false
---

わけがわからん

Movesが死んでしまったが，ログはエクスポートできたので，Move-O-Scopeっぽいのを作ってみようとして，とりあえずOSMを表示させようとした．

Reactでやってみたくて，[react-leaflet](https://github.com/PaulLeCam/react-leaflet)に手を付けたんですよね．

そしたらもうね，Tileがぐっちゃぐちゃ．わけがわからん．

react-leafletやめて，自分でleaflet使って書いてみてもさっぱりうまく表示されない．どうせくだらんところで間違えてんだろうけどこれがわからないからわからないんだよな（？？？？

まあ助けてください，お願いします

[stackblitz.com/edit/react-ts-kagvn9](https://stackblitz.com/edit/react-ts-kagvn9)

<iframe src="https://stackblitz.com/edit/react-ts-kagvn9?embed=1&file=Map.tsx&view=preview" width="80%" height="300px"></iframe>

さっぱりわからん　寝る

---

追記 2018/08/08 4:33 JST

<blockquote class="twitter-tweet" data-conversation="none" data-cards="hidden" data-partner="tweetdeck"><p lang="und" dir="ltr"><a href="https://t.co/IrUJpjXwTK">https://t.co/IrUJpjXwTK</a></p>&mdash; totoraj (@totoraj930) <a href="https://twitter.com/totoraj930/status/1026882358358638592?ref_src=twsrc%5Etfw">August 7, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


ありがとう．

CSSちゃんとやったれということでした．．．

とりあえず吐くのに関係ねえやろって適当にやってました．

どのみち適当ですが．．．

react-leafletの場合，

`import 'leaflet/dist/leaflet.css'`するのと，`leaflet-container` classを指定したcssを読み込んでやれば良いっぽい

[react-leaflet/index.html at master · PaulLeCam/react-leaflet](https://github.com/PaulLeCam/react-leaflet/blob/master/example/index.html)普通に書いてありました　バカですね，ちゃんと調べましょう

とりあえず出るようになったし寝る　おやすみ

つづく