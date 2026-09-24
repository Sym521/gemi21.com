# AGENTS.md

このファイルは、このリポジトリで作業するコーディングエージェント向けの指示です。リポジトリ全体に適用します。より深い階層に別の`AGENTS.md`がある場合は、そちらを優先してください。

## プロジェクト概要

- `gemi21.com`の個人サイト。Astro、React Islands、TypeScript、Tailwind CSSを使用します。
- Astroの開発・ビルド基盤はViteです。
- ブログ記事は`src/content/blog/*.mdx`、静的ファイルは`public/`に置きます。
- `@astrojs/cloudflare`を介してCloudflare Workersへデプロイします。
- パッケージマネージャーはpnpm 11.xです。`pnpm-lock.yaml`を正として扱い、別形式のロックファイルを追加しないでください。

## 主なディレクトリ

- `src/pages/`: ページとAPIエンドポイント
- `src/layouts/`: 共通レイアウト
- `src/components/`: Astro/Reactコンポーネント
- `src/content/blog/`: MDXブログ記事
- `src/lib/`: APIクライアントや共通ユーティリティ
- `src/styles/`: グローバルCSS
- `public/`: 画像、アイコンなどの静的アセット

## 開発コマンド

```bash
pnpm dev       # Astro + Vite開発サーバー
pnpm build     # 型検査後にCloudflare向けビルド
pnpm preview   # 本番ビルドのローカルプレビュー
pnpm lint      # src/をBiomeで検査
pnpm format    # src/をBiomeで整形（書き換えあり）
pnpm check     # Astroの型検査とBiome検査
```

## 実装方針

- TypeScriptのstrict設定を維持し、安易に`any`や型チェック抑制を追加しないでください。
- 静的なUIは`.astro`を基本とし、状態、イベント、ブラウザーAPIが必要な箇所だけReact Islandと`client:*`を使ってください。
- importでは`@/*`エイリアスを利用できます。
- 既存のデザイン、レスポンシブ対応、フォント、Tailwindユーティリティ構成に合わせてください。
- APIでは入力値と外部APIの失敗を処理し、秘密情報や外部APIの詳細なレスポンスをクライアントへ漏らさないでください。
- 日本語テキストとUTF-8エンコーディングを保持し、文字化けを起こす一括変換を避けてください。

## ブログ記事

新しい記事は`src/content/blog/<slug>.mdx`として追加します。URLは`/blog/<slug>`です。frontmatterは次の形式にします。

```yaml
---
title: 記事タイトル
description: 記事の概要
date: YYYY/MM/DD
---
```

記事内画像は`public/images/`に置き、MDXからは`/images/...`で参照してください。

## 環境変数とデプロイ

- `.env*`、トークン、資格情報をコミットしないでください。
- Spotify連携では`SPOTIFY_CLIENT_ID`、`SPOTIFY_CLIENT_SECRET`、`SPOTIFY_REFRESH_TOKEN`をRuntime variables and secretsで使用します。
- Cloudflare設定を変更するときは`astro.config.mjs`と`wrangler.jsonc`の整合性を保ってください。
- 明示的な依頼なしにデプロイを実行しないでください。

## 検証と変更範囲

- 変更は依頼に必要な最小範囲に限定し、無関係な整形やリファクタリングを混ぜないでください。
- 最低限`pnpm check`を実行し、ページ、ルーティング、設定、依存関係に影響する変更では`pnpm build`も実行してください。
- UIを変更した場合は、狭い画面と広い画面で表示崩れや横スクロールがないことを確認してください。
- ユーザーの既存変更を保持し、破壊的なGit操作を行わないでください。
