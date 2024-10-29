# 使用与你本地环境一致的 Node.js 版本
FROM node:21.7.1

# 设置工作目录
WORKDIR /app

# 复制项目文件到工作目录
COPY . .


# 使用 Nginx 作为服务器
FROM nginx:latest

# 将构建好的静态文件复制到 Nginx 的默认目录
# 确保路径与你 VuePress 构建输出一致
COPY --from=0 /app/src/.vuepress/dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]