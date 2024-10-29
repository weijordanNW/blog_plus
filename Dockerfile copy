# 使用与你本地环境一致的 Node.js 版本
FROM node:21.7.1

# 设置工作目录
WORKDIR /app

# # 复制 package.json 和 pnpm-lock.yaml 文件
# COPY package.json pnpm-lock.yaml ./

# # 安装特定版本的 PNPM，与你本地环境一致
# RUN npm install -g pnpm@9.6.0

# # 安装项目依赖
# RUN pnpm install

# 复制项目文件到工作目录
COPY . .

# 构建 VuePress 项目
# RUN pnpm run build

# 使用 Nginx 作为服务器
FROM nginx:latest

# 将构建好的静态文件复制到 Nginx 的默认目录
# 确保路径与你 VuePress 构建输出一致
COPY --from=0 /app/src/.vuepress/dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]