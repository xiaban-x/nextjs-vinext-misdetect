# 官方 Next.js 构建，依赖里留着 vinext

用来复现 `counselling-website-production` 的现网失败。

包名是 `site-creator-vinext-starter`，并且安装了 `vinext@1.0.1`。`npm run build` 实际执行的是 `next build --webpack`，产物在 `.next`，不会生成 `dist/client` 和 `dist/server`。

用现网 CLI 1.7.5 部署时，会被判成 Vinext，然后报：

```text
Vinext build did not emit dist/client and dist/server. The build script must be vite build or vinext build.
```

`feat/vinext-ssr` 上按构建命令区分之后，同一个项目会继续走 Next.js 和 OpenNext。

这个目录没有写进 `templates-new.json`，控制台模板列表里不会出现。
