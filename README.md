# gemi21.com

Next.js App Routerで構築し、OpenNextを介してCloudflare Workersへデプロイする個人サイトです。

## 必要な環境

- Node.js 22.13以上
- pnpm 11.25.0（`package.json`の`packageManager`で固定）

Corepackを利用する場合は、最初に有効化してください。

```bash
corepack enable
pnpm install
```

## 開発

開発サーバーを起動します。

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000)をブラウザーで開いてください。

主な検証コマンドは次のとおりです。

```bash
pnpm check
pnpm build
pnpm opennext:build
```

`check`はBiomeによる検査と自動修正を行います。実行後は差分を確認してください。

## Cloudflare

ローカルでCloudflare向けのビルドを確認できます。

```bash
pnpm opennext:build
```

デプロイは明示的に必要な場合のみ`pnpm deploy`で実行してください。
