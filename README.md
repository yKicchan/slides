[![Deploy](https://github.com/yKicchan/slides/actions/workflows/deploy.yml/badge.svg)](https://github.com/yKicchan/slides/actions/workflows/deploy.yml)

# yKicchan's Slides

The slides are created using [Marp](https://marp.app/).

They are published on [GitHub Pages](https://ykicchan.github.io/slides/).

> [!caution]
> This repository extends the Marp engine, so the [`marp-vscode`](https://github.com/marp-team/marp-vscode) extension cannot be used.  
> For more details, see [this comment](https://github.com/marp-team/marp-vscode/issues/85#issuecomment-543798586).

## Scripts

| Action | Command |
| --- | --- |
| Install dependencies | `pnpm install` |
| Create a new slide | `pnpm new {dirname}` |
| Start dev server | `pnpm dev` |
| Start dev server (for template) | `pnpm dev:tmp` |
| Build the slides | `pnpm build` |
| Serve built slides | `pnpm start` |
