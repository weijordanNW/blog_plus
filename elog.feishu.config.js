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
    platform: 'local',
    limit: 1,
    local: {
      outputDir: './src/feishu/images',
      prefixKey: 'images',
      pathFollowDoc: true,
    },
  }
}
