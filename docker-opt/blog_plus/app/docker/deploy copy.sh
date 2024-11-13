#!/bin/bash

# 定义容器和镜像名称
container_name="blog_plus"
# image_name="blog_plus"

echo "Docker 部署中..."

# 停止并移除现有的容器
if [ "$(docker ps -q -f name=$container_name)" ]; then
    echo "停止容器..."
    docker stop $container_name
fi

if [ "$(docker ps -aq -f status=exited -f name=$container_name)" ]; then
    echo "移除容器..."
    docker rm -f $container_name
fi

# 移除现有镜像
# if [ "$(docker images -q $image_name)" ]; then
#     echo "移除镜像..."
#     docker rmi -f $image_name
# fi

# 构建新的 Docker 镜像
echo "构建新的 Docker 镜像..."
docker build -t $image_name .

# 使用 Docker Compose 启动服务
echo "启动服务..."
docker-compose up -d

echo "容器部署成功"