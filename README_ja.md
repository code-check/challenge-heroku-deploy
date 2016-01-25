# Heroku への Deploy
**このチャレンジは GitHub への Fork機能の使用を推奨します。**
サンプルの API が実装されたコードが用意されているので、それを [Heroku](https://heroku.com) に Deploy（サーバー側にコードを送って、アプリケーションにアクセス可能な状態にする事）しましょう。
Heroku の[公式なドキュメント](https://devcenter.heroku.com/start)は英語のみですが、有志の方々が[和訳をなさっている](https://github.com/herokaijp/devcenter/wiki/Add-on-app-info)ようです。まだまだ和訳できていないページも多いですが一度見てみるといいかもしれません。

## ステップ 1 - 1: [Heroku](https://heroku.com) のアカウントを作ろう！
Heroku のアカウントを既に持っている場合はこのステップは飛ばしてください。

## ステップ 1 - 2: [Heroku](https://heroku.com) のアプリケーションを作ろう！
Heroku のアカウントを作ってログインしたら[新しいアプリを作成](https://dashboard.heroku.com/new)してください。  
`App Name` の項目は空でも自動的に生成されますが、Herokuを初めて利用する方は自分で名前を設定する事をおすすめします。次のステップでこの App Name が必要となります。

## ステップ 2: Procfile を編集しよう！
Heroku は「どんなコマンドを実行するとサーバーが起動するか」が書かれた [Procfile](https://devcenter.heroku.com/articles/procfile) を用意する必要があります。  
コード内に[空のProcfile](./Procfile)を準備してあるので、自分のサーバーを起動するためのコマンドを調べて設定しましょう。

## ステップ 3: Deploy しよう！
Heroku の Deploy についてのドキュメントは[こちら](https://devcenter.heroku.com/categories/reference#deployment)
[GitHubと連携](https://devcenter.heroku.com/articles/github-integration)させると、GitHub のコードを更新する度に自動的に deploy が行われるようになるので、そちらをおすすめします。

##### Notes: Buildpacks

いくつかのフレームワークでは [buildpacks](https://devcenter.heroku.com/articles/buildpacks)を明示的に指定する必要があるのでドキュメントを読んで設定しましょう！


## ステップ 4: account.json を編集しよう！
アプリケーションを作成したら[account.json](./account.json)の `heroku_appname` の値に先ほど作った Heroku のアプリケーション名を入力してください。（`App Name` の項目に入力した内容）  

```json
{
  "heroku_appname": "<Write your Heroku application name here>"
}
```

## ステップ 5: テストを実行しよう！
デプロイが完了したらテストを実行して、エラーなく終了できることを確認しましょう！
[specifications](./specifications) フォルダの中にある `.spec.js` で終わるファイルからテストの内容が確認できます。

先に Node.js のモジュールをインストールしてから実行する必要があります。次の2つのコマンドをターミナル上で実行することでテストが可能です。

```bash
$ npm install                      # モジュールのインストール
$ $(npm bin)/mocha specifications  # テストの実行
```

次のような出力が確認できれば成功です。(後ろの括弧は実行時間なので一致していなくても問題ありません。)

```
24 passing (1s)
```
