# task-board

## デプロイ先

https://tommdaley.github.io/task-board/

`main`ブランチへのpushをトリガーに、GitHub Actions(`.github/workflows/deploy.yml`)が`npm run build`を実行し、GitHub Pagesへ自動デプロイされる。

## 技術スタック

- React 19
- Vite 8(ビルドツール、`base: '/task-board/'`をGitHub Pages用に設定済み)
- oxlint(Lint)
- プレーンCSS(`App.css` / `index.css`、CSS-in-JSやUIライブラリは未使用)
- 状態管理はReactの`useState`のみ。タスク一覧は`localStorage`(キー: `task-board:tasks`)に永続化

## コンポーネントの命名規約

- コンポーネントファイルは`src/components/`配下に置き、`PascalCase.jsx`で命名する(例: `TaskForm.jsx`, `TaskList.jsx`, `TaskItem.jsx`)。
- 1ファイル1コンポーネント、デフォルトエクスポートとする。
- propsで渡すイベントハンドラ名は`on`+動詞(例: `onAddTask`, `onToggle`, `onDelete`)、コンポーネント内のハンドラ関数名は`handle`+動詞(例: `handleAddTask`, `handleToggleTask`)とする。
- CSSのクラス名はコンポーネント名をkebab-caseにしたものをルートとし、要素は`__`、状態修飾子は`--`で区切る(BEM風、例: `.task-item`, `.task-item__label`, `.task-item--completed`)。

## Git運用ルール

- コードに変更を加えたら、その都度コミットしてGitHubにpushすること。
- 変更をローカルに留め置かず、作業単位ごとに早めにpushする。
- pushする前に `git status` / `git diff` で変更内容を確認する。
- コミットメッセージは変更の意図(なぜ変更したか)が分かるように書く。
