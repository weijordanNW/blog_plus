# 版本更新日志

## v2.8.1 (2026-05-22)

> 详细变更见 [changelogs/v2.8.1.md](changelogs/v2.8.1.md)

**飞书知识库全量同步**：从飞书知识库下载 144 篇文档，清理 45 个空容器后保留 101 篇有效 Markdown，图片同步至 GitHub 图床

**FrontMatter 标准化**：对 101 篇飞书文档执行统一字段标准化（title / date / category / tag: feishu）

**Git 提交规则**：[.trae/rules/git-commit-message.md](.trae/rules/git-commit-message.md) 新增规则——`提交信息必须使用中文`

**变更记录初始化**：新增 `changelogs/v2.8.0.md` 记录 v2.8.0 累积变更详情（含 Mermaid 可视化架构图），并同步更新 CHANGELOG.md

## v2.8.0 (2026-05-22)

> 详细变更见 [changelogs/v2.8.0.md](changelogs/v2.8.0.md)

**CI/CD 升级**：GitHub Actions 全面升级（checkout v4、pnpm/setup v4、Node 20）

**Docker 多阶段构建**：Node 20 builder → Nginx Alpine runtime，镜像体积大幅减小

**新工具链**：`audit-images` 大图审计 + `compress-images` 大图压缩（基于 sharp），feishu/ 下图床节省数十 MB

**同步脚本重构**：
- `sync-feishu.js`：异步延迟替代同步阻塞，环境变量配置化，移除硬编码文档数限制
- `updateFrontMatter.js`：gray-matter 库替代手写正则，支持 `--dry-run` 预览

**siteLinks.ts 集中配置**：新增 `routes` / `externalLinks` / `siteMeta` / `docSearch` / `googleAnalytics` / `meting` / `live2dModels` / `iconAssets` / `pwaAssets` / `waline` 等常量

**配置迁移**：`config.ts` / `theme.ts` / `navbar` / `sidebar` / `friendData.ts` 所有硬编码全部迁移到 `siteLinks.ts` 引用

**README.md 全新改写**：新增快速开始、常用脚本、内容同步、维护入口、质量检查等章节

**清理**：删除 `deploy copy 4.sh`、`package copy.json` 等遗留文件

## v2.7.4 (2026-05-19)

**Vercel 构建修复**

- `src/.vuepress/dist/` 从 Git 跟踪中移除（479 个旧构建产物不再提交）
- `.gitignore` 取消注释 `src/.vuepress/dist/`，构建产物由 Vercel 自行生成
- [vercel.json](vercel.json) 新增 `buildCommand` / `outputDirectory` / `installCommand` 配置
- `package.json` build 命令构建前自动清理 `.temp` / `.cache` 防止缓存污染

**残留文件清理**

- 删除 `Codex 实战教程-程序员 Sunday.md`（elog 重同步后产生的旧残留文件，含本地图片引用导致 Vite 构建失败）

## v2.7.3 (2026-05-19)

**图片存储迁移到 GitHub 图床**

- 新增 `IMAGE_PLATFORM` 环境变量开关，支持 `github` / `cos` / `local` 三模式切换
- [elog.config.js](elog.config.js) 语雀图片平台改为 `process.env.IMAGE_PLATFORM`
- [elog.feishu.config.js](elog.feishu.config.js) 飞书图片平台改为 `process.env.IMAGE_PLATFORM`
- `.elog.env` 中设置 `IMAGE_PLATFORM=github`，图片上传到 `weijordanNW/blog_plus` 仓库
- 语雀 `prefixKey: 'yuque'`，飞书 `prefixKey: 'feishu'`，云存储路径隔离
- markdown 图片引用从本地路径 `../../images/xxx` 变更为 `https://raw.githubusercontent.com/...`
- `.gitignore` 添加 `src/yuque/images/` 和 `src/feishu/images/`
- 移除本地 103 个图片文件，仓库体积大幅减小
- 切换方式：改 `.elog.env` 中 `IMAGE_PLATFORM` 值，运行 sync 即可

## v2.7.2 (2026-05-19)

**飞书 sidebar 路由**

- [sidebar/zh.ts](src/.vuepress/sidebar/zh.ts) 新增飞书 sidebar 入口，`"/feishu": "structure"` 自动生成侧边栏
- [navbar/zh.ts](src/.vuepress/navbar/zh.ts) 已有飞书导航入口，无需改动

**updateFrontMatter.js 平台兼容**

- 语雀保持旧行为不变：`category: yuque`
- 飞书自动剥离 `飞书知识库` 壳容器，用实际层级路径作 `category`（如 `AI/CC`、`前端/方案/通信`）
- `tag` 字段区分来源：语雀 `yuque`，飞书 `feishu`

**自动清理飞书空容器**

- [sync-feishu.js](scripts/sync-feishu.js) 同步完成后自动删除只有 frontmatter 无正文的父文档（如 `AI.md`、`CC.md`、`前端.md` 等）
- 同时清理遗留的空目录
- 22 篇原始文档精简到 12 篇有内容文档

## v2.7.1 (2026-05-19)

**语雀同步增强**

- 新增 [scripts/sync-yuque.js](scripts/sync-yuque.js) — 语雀同步专用脚本，自动分离缓存
- 新增 `pnpm run sync-yuque` 命令，一键拉取语雀文档
- 新增 `pnpm run update-frontmatter-yuque` 命令，更新语雀文档 FrontMatter
- [elog.config.js](elog.config.js) 配置语雀账号密码模式，输出到 `src/yuque/`

**飞书同步新增**

- 新增 [elog.feishu.config.js](elog.feishu.config.js) — 飞书知识库配置，文档/图片下载并发限为 1
- 新增 [scripts/sync-feishu.js](scripts/sync-feishu.js) — 飞书同步专用脚本，支持断点续传与自动重试
- 新增 `pnpm run sync-feishu` 命令，一键拉取飞书知识库文档
- 新增 `pnpm run update-frontmatter-feishu` 命令，更新飞书文档 FrontMatter

**缓存分离机制**

- 语雀使用 `elog.yuque.cache.json`，飞书使用 `elog.feishu.cache.json`，互不干扰
- 自动恢复对应缓存后再同步，确保增量更新准确

**断点续传（飞书限流处理）**

- 飞书 API 频率限制（错误码 99991400）时自动冷却 70 秒后重试，最多 8 轮
- 扫描 `src/feishu/` 下已下载文件数，判断同步进度
- 首次全量同步 22 篇飞书知识库文档（AI、前端方案、思维导图等）

**updateFrontMatter.js 升级**

- [scripts/updateFrontMatter.js](scripts/updateFrontMatter.js) 支持命令行参数指定目录
- 用法：`node scripts/updateFrontMatter.js ./src/feishu`
- 目录 basename 自动作为 category/tag 默认值

**package.json**

- 将 `"type": "module"` 改为 `"type": "commonjs"`，避免反复切换
- 版本号更新至 `2.7.1`
