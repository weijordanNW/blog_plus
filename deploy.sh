#!/bin/bash

# 设置服务名称变量
srv=blog_plus

# 输出项目名称
echo "项目名为$srv"

# 停止并删除容器
docker stop $srv
docker rm -f $srv

# 删除镜像
docker rmi -f $srv

# 无缓存构建 Docker 镜像
docker build --no-cache -t $srv .

# 使用 Docker Compose 部署服务
docker-compose -f ~/DockerCompose/$srv/docker-compose.yml up -d