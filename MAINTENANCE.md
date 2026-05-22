# 维护说明

## 链接与功能模块来源

固定域名、外部服务、插件服务和常用内部路由统一维护在：

- `src/.vuepress/data/siteLinks.ts`

各功能模块来源如下：

| 功能模块 | 主要维护位置 | 来源说明 |
| --- | --- | --- |
| 顶部导航 | `src/.vuepress/navbar/zh.ts` | 引用 `siteLinks.ts` 中的内部路由和外部项目地址 |
| 侧边栏 | `src/.vuepress/sidebar/zh.ts` | 多数目录使用 `structure`，由 VuePress Theme Hope 根据目录结构自动生成 |
| 主题基础信息 | `src/.vuepress/theme.ts` | 站点域名、作者、仓库、社交入口引用 `siteLinks.ts` |
| 搜索 | `src/.vuepress/config.ts` | 使用 Algolia DocSearch，配置在 `siteLinks.ts`，索引由 Algolia 远程爬虫维护 |
| 评论 | `src/.vuepress/theme.ts` | Waline 服务地址和表情 CDN 引用 `siteLinks.ts` |
| 音乐/看板娘/统计 | `src/.vuepress/config.ts` | Meting、Live2D、Google Analytics 固定地址引用 `siteLinks.ts` |
| PWA 图标 | `src/.vuepress/theme.ts` | 图标路径引用 `siteLinks.ts`，文件位于 `src/.vuepress/public/assets/icon` |
| 友链卡片 | `src/.vuepress/data/friendData.ts` | 由 `MyCoverLink.vue` 渲染 |
| 导航卡片/工具收藏 | `src/.vuepress/data/navWeb.ts`、`api.ts`、`myApi.ts`、`design.ts` | 由 `Mylink.vue` 渲染 |
| 首页按钮 | `src/README.md` | Frontmatter `actions` 直接声明 |
| 飞书/语雀文章链接 | `src/feishu`、`src/yuque` | 由 Elog 同步生成 Markdown，图片多为 GitHub Raw 图床链接 |
| 普通文章链接 | `src/**/*.md` | 文章内容内直接维护 |

## 修改建议

1. 改站点域名、作者、仓库、评论、搜索、Live2D、音乐接口时，优先改 `siteLinks.ts`。
2. 改导航菜单时，改 `navbar/zh.ts`，尽量复用 `siteLinks.ts` 的 `routes` 和 `externalLinks`。
3. 改侧边栏目录时，优先调整目录结构；只有需要特殊排序或命名时再改 `sidebar/zh.ts`。
4. 飞书/语雀同步文章里的链接不建议手动批量改，除非同步规则也一起调整。
