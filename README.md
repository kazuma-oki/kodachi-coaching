# KODACHI コーチングサイト

**公開URL：https://kazuma-oki.github.io/kodachi-coaching/**

Webデザイン定義書に沿って制作したブランドサイトのサンプルです。TOP、考え方、サービス一覧・詳細3ページ、プロフィール、事例一覧・詳細3ページ、お知らせ一覧・詳細3ページ、問い合わせ・完了画面、プライバシーポリシー、404を収録しています。

## 更新・公開

Node.js 22以上を使用します。

```sh
npm ci
npm run dev
npm run build:pages
npm run check:export
```

`main` ブランチへpushすると、GitHub Actionsが全ページを静的HTMLとしてビルドし、GitHub Pagesに自動公開します。手動ビルドでは `/kodachi-coaching` をベースパスに使用します。別のリポジトリ名で使う場合は `GITHUB_REPOSITORY=owner/repository` を指定してください。

- ページと操作：`app/site.tsx`
- デザイン：`app/globals.css`
- サービス・事例・記事：`lib/content.ts`
- URLのベースパス：`lib/paths.ts`
- 生成画像：`public/assets/`
- 画像生成プロンプト：`image-prompts.json`
- 公開処理：`.github/workflows/pages.yml`

## サンプルとしての範囲

ブランド名は仮称です。画像はAI生成のイメージで、実際の施設・コーチ・支援実績を表していません。経歴・資格・実績・料金・相談条件は確定後に掲載する構成です。

フォームは入力・検証・内容確認・完了画面まで動作しますが、入力内容の送信や保存は行いません。CMS、LINE、Instagram、アクセス解析は未接続です。プライバシーポリシーは運営主体の確定後に整備します。制作サンプルのため検索エンジンにはnoindexを設定しています。

フォントはGoogle Fontsから読み込みます。取得できない場合は端末の明朝・ゴシックを使用します。

このリポジトリはGitHub Pages公開用です。以前のSites確認版とは別に管理しています。
