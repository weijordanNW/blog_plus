# 图片云存储切换方案（GitHub 图床 + COS 兼容）

## 现状

| 目录 | 文件数 | 当前平台 | Git 跟踪 |
|------|:---:|------|:---:|
| `src/yuque/images/` | 32 | `local` | ✅ 已提交 |
| `src/feishu/images/` | 71 | `local` | ✅ 已提交 |
| **合计** | **103** | - | - |

---

## 设计目标

通过一个**环境变量开关** `IMAGE_PLATFORM`（写在 `.elog.env` 中），随时在三种模式间切换：

| `IMAGE_PLATFORM` 值 | 模式 | 说明 |
|:---|------|------|
| `github` | GitHub 图床 | **先启用**，免费 |
| `cos` | 腾讯云 COS | 后续有需要再切 |
| `local` | 本地存储 | 兜底模式 |

切换只需改 `.elog.env` 中一行，然后重新运行 elog sync 即可。

---

## 实施步骤

### 第 1 步：申请 GitHub Token

1. 打开 https://github.com/settings/tokens
2. 生成一个新的 **Personal Access Token (classic)**
3. 勾选 `repo` 权限（Full control of private repositories 即可）
4. 复制 token 备用

### 第 2 步：配置 .elog.env

在 `.elog.env` 中添加以下字段：

```
# 图片存储平台切换开关: github / cos / local
IMAGE_PLATFORM=github

# GitHub 图床
GITHUB_TOKEN=你的GitHubToken
ELOG_GITHUB_USER=weijordanNW
ELOG_GITHUB_REPO=blog_plus
```

> **`IMAGE_PLATFORM=github`** 即启用 GitHub 图床；改成 `local` 回到本地模式；改成 `cos` 启用腾讯云 COS。

### 第 3 步：修改 elog.config.js（语雀）

```javascript
image: {
    enable: true,
    platform: process.env.IMAGE_PLATFORM || 'local',
    local: {
      outputDir: './src/yuque/images',
      prefixKey: 'images',
      pathFollowDoc: true,
    },
    github: {
      token: process.env.GITHUB_TOKEN,
      user: process.env.ELOG_GITHUB_USER,
      repo: process.env.ELOG_GITHUB_REPO,
      prefixKey: '',        // 图片上传到 repo 根目录
      branch: 'main',
    },
    cos: {
      secretId: process.env.COS_SECRET_ID,
      secretKey: process.env.COS_SECRET_KEY,
      bucket: process.env.COS_BUCKET,
      region: process.env.COS_REGION,
      host: process.env.COS_HOST,
      prefixKey: '',
    },
    // oss/qiniu/upyun 保留不动
},
```

### 第 4 步：修改 elog.feishu.config.js（飞书）

添加 `github` 和 `cos` 配置节，并将 `platform` 改为环境变量：

```javascript
image: {
    enable: true,
    platform: process.env.IMAGE_PLATFORM || 'local',
    limit: 1,
    local: {
      outputDir: './src/feishu/images',
      prefixKey: 'images',
      pathFollowDoc: true,
    },
    github: {
      token: process.env.GITHUB_TOKEN,
      user: process.env.ELOG_GITHUB_USER,
      repo: process.env.ELOG_GITHUB_REPO,
      prefixKey: 'feishu',
      branch: 'main',
    },
    cos: {
      secretId: process.env.COS_SECRET_ID,
      secretKey: process.env.COS_SECRET_KEY,
      bucket: process.env.COS_BUCKET,
      region: process.env.COS_REGION,
      host: process.env.COS_HOST,
      prefixKey: 'feishu',
    },
},
```

### 第 5 步：重新运行同步

```bash
# 1. 语雀同步（图片会上传到 GitHub）
pnpm run sync-yuque
pnpm run update-frontmatter-yuque

# 2. 飞书同步（图片会上传到 GitHub）
pnpm run sync-feishu
pnpm run update-frontmatter-feishu
```

此时 markdown 中的图片引用将从：

```
![](../../images/xxx.png)
```

变为：

```
![](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/xxx.png)
```

### 第 6 步：清理本地图片并更新 .gitignore

1. 验证 markdown 中图片链接已变为 GitHub URL
2. `.gitignore` 末尾追加：
   ```
   src/yuque/images/
   src/feishu/images/
   ```
3. 从 Git 移除已跟踪的图片：
   ```bash
   git rm -r --cached src/yuque/images/ src/feishu/images/
   ```
4. 删除本地目录：
   ```bash
   # PowerShell
   Remove-Item -Recurse -Force src/yuque/images, src/feishu/images -ErrorAction SilentlyContinue
   ```

### 第 7 步：更新 CHANGELOG.md

追加 v2.7.3 版本记录。

---

## 切换模式说明

如果 GitHub 图床速度不理想，切换到 COS：

1. `.elog.env` 中 `IMAGE_PLATFORM=cos`
2. 填入 COS 凭证
3. 运行 `pnpm run sync-yuque` 和 `pnpm run sync-feishu`
4. 图片会自动重新上传到 COS，markdown 引用自动更新

如果将来需要回到本地：

1. `.elog.env` 中 `IMAGE_PLATFORM=local`
2. 运行 sync 即可
