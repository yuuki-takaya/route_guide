# route_guide
## 使用ライブラリ等
- MongoDB
- Express
- <a href="https://github.com/expressjs/multer">multer</a>（S3へ保存する場合は<a href="https://www.npmjs.com/package/multer-s3">multer-s3</a>を使用）

## 使用方法
1.<a href="https://github.com/yuuki-takaya/route_guide">リポジトリ</a>のmasterブランチからクローンします。

2.以下のコマンドを実行し、パッケージのインストールを行います。
```
$ npm install
```

3.インストール完了後、プログラムを実行します。
```
$ node app.js
```
4.```localhost:3000```をブラウザのurl欄に入力し、serverの立ち上がりを確認しましょう。<br />
この画面では、Objectの登録を行うことが出来ます。

5.```localhost:3000/places```では、Queryの結果をJSON形式に変換して返します。<br />
Query Stringsは```localhost:3000/places/?place=場所名```で表示することが出来ます。

`Local Areaで使う場合は、IP決め打ちソースにベタがきしてるので各自変更お願いします`

