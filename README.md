![](https://img.shields.io/badge/version-2.7.4-orange)
![](https://img.shields.io/badge/theme-hope-green)
![](https://img.shields.io/badge/powerby-vuepress-lightgrey?style=flat-square&logo=appveyor)
![](https://img.shields.io/badge/deploy-vercel-lightgrey?style=flat-square&logo=vercel)

# blog_plus

个人博客源码，线上地址：[https://weijordan.com](https://weijordan.com)

项目基于 `VuePress 2`、`vuepress-theme-hope`、`Vue 3` 和 `TypeScript` 构建，内容来源包含手写 Markdown、语雀同步文档和飞书同步文档。

> 本仓库带有较多个人化配置，不建议直接作为通用模板克隆使用。更适合按需复用主题配置、本地插件、组件和同步脚本。

## 技术栈

- VuePress 2：静态站点生成
- vuepress-theme-hope：主题与博客能力
- Vite：构建工具
- Vue 3：自定义组件
- Waline：评论系统
- Algolia DocSearch：线上全文搜索
- Elog：语雀 / 飞书文档同步
- pnpm：包管理器
- Docker + Nginx：容器化静态部署

## 目录结构

```text
.
├── .github/workflows/        # GitHub Actions
├── api/                      # 接口或服务相关文件
├── feishu/                   # 飞书图片图床目录，文章中多通过 GitHub Raw 引用
├── yuque/                    # 语雀图片图床目录，文章中多通过 GitHub Raw 引用
├── scripts/                  # 同步、FrontMatter、图片审计与压缩脚本
├── src/                      # VuePress 内容根目录
│   ├── .vuepress/            # VuePress 配置、主题扩展、组件、数据
│   │   ├── components/       # 自定义展示组件
│   │   ├── data/             # 友链、导航、全站链接维护数据
│   │   ├── navbar/           # 顶部导航配置
│   │   ├── sidebar/          # 侧边栏配置
│   │   ├── theme/            # 继承主题后的布局与组件
│   │   ├── config.ts         # VuePress 主配置
│   │   └── theme.ts          # Theme Hope 配置
│   ├── blog/                 # 博客相关文章
│   ├── feishu/               # 飞书同步后的 Markdown 内容
│   ├── yuque/                # 语雀同步后的 Markdown 内容
│   ├── posts/                # 手写技术笔记
│   ├── tutorial/             # 软件 / 工具教程
│   └── README.md             # 首页内容
├── Dockerfile
├── docker-compose.yml
├── elog.config.js            # 语雀同步配置
├── elog.feishu.config.js     # 飞书同步配置
├── MAINTENANCE.md            # 维护说明
├── package.json
└── pnpm-lock.yaml
```

## 快速开始

建议使用 Node 20 LTS。

```bash
pnpm install --frozen-lockfile
pnpm dev
```

默认开发地址：

```text
http://localhost:9527/
```

构建：

```bash
pnpm build
```

## 常用脚本

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动开发服务 |
| `pnpm clean-dev` | 清理缓存后启动开发服务 |
| `pnpm build` | 构建静态站点到 `src/.vuepress/dist` |
| `pnpm run sync-yuque` | 同步语雀文档 |
| `pnpm run sync-feishu` | 同步飞书文档 |
| `pnpm run update-frontmatter-yuque` | 更新语雀 Markdown FrontMatter |
| `pnpm run update-frontmatter-feishu` | 更新飞书 Markdown FrontMatter |
| `pnpm run audit-images` | 审计 `feishu/`、`yuque/`、`src/` 下的大图 |
| `pnpm run compress-images` | 压缩 `feishu/`、`yuque/` 下超过阈值的大图 |

FrontMatter 脚本支持干跑：

```bash
pnpm run update-frontmatter-yuque -- --dry-run
```

图片压缩脚本支持干跑：

```bash
pnpm run compress-images -- --dry-run
```

## 内容同步

项目支持语雀和飞书双平台同步，配置分别位于：

- 语雀：[elog.config.js](elog.config.js)
- 飞书：[elog.feishu.config.js](elog.feishu.config.js)

环境变量通常放在 `.elog.env` 中，示例见 `.elog.example.env`。

### 图片存储

`IMAGE_PLATFORM` 控制同步图片的存储位置：

| 值 | 模式 | 说明 |
| --- | --- | --- |
| `github` | GitHub 图床 | 图片上传到仓库并通过 GitHub Raw 访问 |
| `cos` | 腾讯云 COS | 需要配置 COS 凭证 |
| `local` | 本地存储 | 兜底模式 |

当前文章中的飞书 / 语雀图片多为：

```text
https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/xxx.png
https://raw.githubusercontent.com/weijordanNW/blog_plus/main/yuque/xxx.png
```

也就是说，图片文件提交到 GitHub 后，线上文章会通过 GitHub Raw 地址加载。

## 维护入口

固定域名、外部服务、插件地址、内部常用路由已集中到：

- [src/.vuepress/data/siteLinks.ts](src/.vuepress/data/siteLinks.ts)

维护说明见：

- [MAINTENANCE.md](MAINTENANCE.md)

主要来源关系：

| 功能 | 维护位置 |
| --- | --- |
| 顶部导航 | `src/.vuepress/navbar/zh.ts` |
| 侧边栏 | `src/.vuepress/sidebar/zh.ts` |
| 站点域名 / 作者 / 仓库 / 社交链接 | `src/.vuepress/data/siteLinks.ts` + `src/.vuepress/theme.ts` |
| 评论 / PWA / mdEnhance | `src/.vuepress/theme.ts` |
| 搜索 / 统计 / 音乐 / Live2D | `src/.vuepress/config.ts` |
| 友链 / 工具卡片 | `src/.vuepress/data/*.ts` |
| 飞书 / 语雀文章链接 | `src/feishu`、`src/yuque` 中的 Markdown |

## 自定义内容

### 自定义布局

- `Layout.vue`：主题布局扩展
- `NotFound.vue`：404 页面
- `News.vue`：说说列表布局

### 自定义组件

- `BlogHero.vue`
- `PageFooter.vue`
- `Sponsor.vue`
- `NewsList.vue`
- `NewsItem.vue`
- `Mylink.vue`
- `MyCoverLink.vue`

### 本地插件

- `vuepress-plugin-canvas`：背景动画
- `vuepress-plugin-gradient-cover`：遮罩背景
- `vuepress-plugin-hitokoto`：一言
- `vuepress-plugin-live2DAssist`：看板娘辅助
- `vuepress-plugin-popper`：鼠标特效适配

## 搜索

当前搜索使用 Algolia DocSearch，配置位于：

- `src/.vuepress/data/siteLinks.ts`
- `src/.vuepress/config.ts`

注意：搜索结果来自 Algolia 远程索引，不是本地实时索引。新增飞书 / 语雀文章后，需要完成：

1. 构建并部署到线上。
2. Algolia 爬虫重新抓取线上页面。
3. 新内容才会出现在全局搜索结果中。

如果新内容本地能访问但搜索不到，通常是 Algolia 索引还没有更新。

## Docker 部署

构建镜像：

```bash
docker build -t blog_plus:test .
```

使用 compose 启动：

```bash
docker compose up -d
```

当前 Dockerfile 使用多阶段构建：

1. Node 20 构建 VuePress 静态产物。
2. Nginx 运行 `src/.vuepress/dist`。

## 质量检查

推荐提交前执行：

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm run audit-images
git diff --check
```

已知剩余提示：

- Sass deprecation warning 来自 `vuepress-theme-hope` / `md-enhance` 依赖链，不影响当前构建。
- Algolia 搜索索引需要线上爬虫更新，不随本地构建实时变化。

## 版本日志

详见 [CHANGELOG.md](CHANGELOG.md)。
