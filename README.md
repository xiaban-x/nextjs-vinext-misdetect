# Official Next.js build with vinext still installed

This reproduces the production failure of `counselling-website-production`.

The package name is `site-creator-vinext-starter`, and `vinext@1.0.1` is installed. `npm run build` still runs `next build --webpack` and writes `.next`. It does not run Vite.

On CLI 1.7.5 the build is classified as Vinext and then fails with:

```text
Vinext build did not emit dist/client and dist/server. The build script must be vite build or vinext build.
```

After the `feat/vinext-ssr` build-command check, the same project stays on Next.js and OpenNext.
# nextjs-vinext-misdetect
# nextjs-vinext-misdetect
