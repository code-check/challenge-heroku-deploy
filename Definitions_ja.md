## Heroku とは
アプリケーションを作成し、サービス側にコードを送ることで自動的にサーバーを建ててくれる Paas (Platform as a Service) と呼ばれる種類のサービス。
様々なサービスを「アドオン」という形式で提供し、複雑な設定なく機能追加する事ができる。

## Deploy とは
サービスをサーバー上に設置し、アクセス可能な状態にする事。

## Procfile とは
Heroku で deploy するときに「どういったコマンドでサーバーが起動するか？」を記述したファイル。

例えば Node.js でサーバーを実装した場合、`main.js` がメインのファイルだとすると

```
web: node main.js
```

と記入する事でサーバーを立ち上げる事ができる。

ドキュメントは[こちら](https://devcenter.heroku.com/articles/procfile)

## Buildpacks とは
Heroku で deploy するときに「どの言語でビルドされるべきか？」を指定する事ができる。
普段は package.json, Gemfile, composer.json, requrements.txt といったファイルから自動的に判定するが、サーバーとクライアントで別言語を使っている場合、うまく判定ができない事があり明示的に指定する必要がでてくる。

ドキュメントは[こちら](https://devcenter.heroku.com/articles/buildpacks)
