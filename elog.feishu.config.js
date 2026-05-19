module.exports = {
  write: {
    platform: 'feishu',
    feishu: {
      type: 'wiki',
      wikiId: process.env.FEISHU_WIKI_ID,
      folderToken: process.env.FEISHU_FOLDER_TOKEN,
      appId: process.env.FEISHU_APP_ID,
      appSecret: process.env.FEISHU_APP_SECRET,
      limit: 1,
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './src/feishu',
      filename: 'title',
      format: 'markdown',
      catalog: true,
      frontMatter: {
        enable: true,
        include: ['categories', 'tags', 'title', 'date', 'updated', 'permalink'],
        timeFormat: true,
      }
    },
  },
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
      branch: 'main',
      prefixKey: 'feishu',
    },
    cos: {
      secretId: process.env.COS_SECRET_ID,
      secretKey: process.env.COS_SECRET_KEY,
      bucket: process.env.COS_BUCKET,
      region: process.env.COS_REGION,
      host: process.env.COS_HOST,
      prefixKey: 'feishu',
    },
  }
}
