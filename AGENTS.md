# AGENTS.md

This file gives future AI agents project-level context for this repository. The project is a VuePress 2 personal blog using `vuepress-theme-hope`, with synchronized Feishu/Yuque content and Git-tracked image assets.

## Workspace Rule

- This repository is the optimized backup copy of the original sibling project `blog_plus`.
- Make source changes only inside this repository unless the user explicitly asks to modify the original project.
- Do not edit generated directories such as `src/.vuepress/.temp`, `src/.vuepress/.cache`, or `src/.vuepress/dist`.
- Preserve the existing Chinese content, comments, naming, and VuePress/Theme Hope conventions.

## Runtime And Commands

- Target runtime: Node.js 20 LTS.
- Package manager: pnpm, declared in `package.json` as `pnpm@9.1.2`.
- Install dependencies:
  - `pnpm install --frozen-lockfile`
- Start local development:
  - `pnpm dev`
- Production build:
  - `pnpm build`
- Clear VuePress dev cache:
  - `pnpm clean-dev`
- Audit large images:
  - `pnpm run audit-images`
- Compress large images:
  - `pnpm run compress-images`
  - Dry run: `pnpm run compress-images -- --dry-run`
- Update Yuque frontmatter:
  - `pnpm run update-frontmatter-yuque`
  - Safer preview: `pnpm run update-frontmatter-yuque -- --dry-run`

## Architecture Map

- `src/.vuepress/config.ts`
  - Main VuePress config.
  - Registers plugins, dev server proxy, DocSearch, Google Analytics, Meting, live2d, and global site settings.
- `src/.vuepress/theme.ts`
  - Theme Hope config.
  - Controls navbar/sidebar integration, blog behavior, author/footer, Waline comments, PWA, copyright, and theme plugins.
- `src/.vuepress/data/siteLinks.ts`
  - Centralized maintenance entry for fixed routes, external links, service endpoints, analytics/search IDs, image/icon assets, and module-source comments.
  - Prefer adding new fixed URLs here instead of scattering hardcoded links through config files.
- `src/.vuepress/navbar/zh.ts`
  - Chinese top navigation.
- `src/.vuepress/sidebar/zh.ts`
  - Chinese sidebar config.
  - Many sections use `structure`, so sidebar output depends on the Markdown directory tree.
- `src/.vuepress/data/*.ts`
  - Data used by custom cards and pages, such as friend links, projects, and reading items.
- `src/.vuepress/components/`
  - Vue components used by Markdown/pages, including link-card components.
- `MAINTENANCE.md`
  - Human-facing maintenance map. Update it when changing feature ownership, config entry points, or operational workflows.
- `README.md`
  - Main user-facing project documentation.

## Content And Sync

- Main Markdown content lives under `src/`.
- Feishu synchronized Markdown lives mainly under `src/feishu/`.
- Yuque synchronized Markdown lives mainly under `src/yuque/`.
- Feishu sync config: `elog.feishu.config.js`.
- Yuque sync config: `elog.config.js`.
- Local/private Elog environment values are expected in `.elog.env`; do not commit secrets.
- Sync/cache files such as `elog.cache.json` and `elog.feishu.cache.json` are treated as local generated state and should stay ignored.
- Be cautious with bulk edits in synchronized content. If changing generated Markdown, consider whether the sync rule or post-processing script should be updated instead.

## Images

- Root-level `feishu/` and `yuque/` directories contain image assets referenced by synchronized articles.
- Many Markdown image links point to GitHub Raw URLs for these Git-tracked image files.
- Compression is done in place while preserving filenames and paths, so existing Markdown references keep working.
- Use `pnpm run audit-images` before/after large image work.
- Use `pnpm run compress-images -- --dry-run` first when unsure about impact.
- Compression should keep dimensions unless there is a clear reason to resize. Avoid changing article image paths during compression.

## Search

- Global search uses Algolia DocSearch, not a local full-text index.
- Search settings are centralized through `src/.vuepress/data/siteLinks.ts` and consumed by `src/.vuepress/config.ts`.
- New local Feishu/Yuque content will not appear in search until the site is deployed and the Algolia crawler/index updates.
- If search misses new content, check deployment status and crawler/index freshness before changing frontend search UI.

## Deployment

- `Dockerfile` uses a multi-stage build:
  - Node 20 builder installs dependencies and runs `pnpm build`.
  - Nginx runtime serves `src/.vuepress/dist`.
- `docker-compose.yml` serves the built static site through a fixed Nginx image.
- GitHub Actions workflows live in `.github/workflows/`.
- If Docker is unavailable locally, note that Docker build verification could not be run instead of assuming it passed.

## Maintenance Rules

- Put new fixed links, service URLs, and route constants in `src/.vuepress/data/siteLinks.ts`.
- Keep feature-source comments in `siteLinks.ts` and `MAINTENANCE.md` aligned.
- For frontmatter changes, prefer `scripts/updateFrontMatter.js` over ad hoc regex edits.
- For Feishu sync behavior, prefer updating `scripts/sync-feishu.js` or Elog config instead of manually patching generated output repeatedly.
- Avoid broad dependency upgrades. Do small, verifiable upgrades because VuePress, Theme Hope, md-enhance, and plugin versions can be tightly coupled.
- Keep edits scoped. Do not reformat unrelated Markdown or generated content unless the task requires it.

## Verification Checklist

Run the smallest useful checks for the change:

- For documentation-only edits:
  - `git diff --check -- <changed-file>`
- For config/theme/navbar/sidebar changes:
  - `pnpm build`
  - Open `http://localhost:9527/` if the dev server is running.
- For image work:
  - `pnpm run audit-images`
  - `pnpm build`
- For sync/frontmatter scripts:
  - Use `--dry-run` first when available.
  - Then run `pnpm build`.
- Before finalizing:
  - `git status --short`
  - `git diff --check`

## Known Gotchas

- Production builds may show Sass deprecation warnings from `vuepress-theme-hope` / `md-enhance` dependencies. Treat them as dependency warnings unless local code changes introduced new failures.
- The build command clears VuePress temp/cache before building; do not preserve those folders as meaningful source state.
- The sidebar may be generated from directory structure, so moving Markdown files can change navigation.
- Search freshness depends on external Algolia crawling, not only on local build success.
- Image compression can reduce file size without changing article links, but excessive quality reduction may make screenshots or UI captures blurry. Prefer auditing results and only applying stronger compression to oversized files.
