# WeShareReporter(現在開発中)

TipsGetherは、天気に特化したSNS型WEBアプリケーションです。

## :globe_with_meridians: APP URL
### **https://ws-repo-kot26.herokuapp.com/**


## :wrench: 使用方法

## :book: 実装している機能及びテスト

- レスポンシブWebデザイン
- ユーザー登録、ログイン機能(devise gem)

- Rspec
    - Helpers: ヘルパーメソッドのテスト
    - Models: 各モデルのテスト
    - Requests: 各コントローラーのアクションの稼働テスト
    - System: ブラウザ上での統合テスト

- Rubocop

`git push` 時に Rspec と Rubocop が行われ、成功した場合にのみ Heroku にデプロイされます。
