# astro + htmx + css modules MRE
minimal reproducible example for the ASTRO/HTMX use case with CSS modules.

If the Astro dev server does not allow setting `cssCodeSplit: false`, then
it is not possible to locally develop HTMX apps without global CSS, the only
alternative would be to preview a production build.

If you know any ways to resolve this, please let me know!
Otherwise, I believe this
should be allowed as a setting for the Astro dev server.

For more context:
1. PR: https://github.com/withastro/astro/pull/10894
2. Discussion: https://github.com/withastro/roadmap/discussions/909

## How to reproduce
1. install dependencies (pnpm install)
2. test the correct behaviour when switching pages in build preview: `pnpm preview`
3. test the broken behaviour when switching pages in dev server: `pnpm dev`
