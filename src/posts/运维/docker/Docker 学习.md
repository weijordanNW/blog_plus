---
title: "Docker 学习"
icon: loop
date: 2024-10-25
category:
  - Docker
tag:
  - Docker
dir:
  order: 2
---
文档

[https://www.yuque.com/leifengyang/sutong/au0lv3sv3eldsmn8](https://www.yuque.com/leifengyang/sutong/au0lv3sv3eldsmn8)

视频

[https://www.bilibili.com/video/BV1Bg4fesE9K?spm_id_from=333.788.player.switch&amp;vd_source=ac6ab4c3cdc5d0193edf55fd77ba0b4f&amp;p=9](https://www.bilibili.com/video/BV1Bg4fesE9K?spm_id_from=333.788.player.switch&vd_source=ac6ab4c3cdc5d0193edf55fd77ba0b4f&p=9)

Vagrant下载 [https://www.vagrantup.com/downloads.html](https://www.vagrantup.com/downloads.html)

Virtualbox 5.1下载 [https://www.virtualbox.org/wiki/Download_Old_Builds_5_1](https://www.virtualbox.org/wiki/Download_Old_Builds_5_1)

Docker国内源安装 [https://get.daocloud.io/#install-docker](https://get.daocloud.io/#install-docker)

Docker官方网站 [https://www.docker.com/](https://www.docker.com/)

Docker官方文档中心 [https://docs.docker.com/](https://docs.docker.com/)

DockerHub [https://hub.docker.com/](https://hub.docker.com/)

<!-- <h2 id="crz9q">安装</h2> -->

## 安装

国内常见云平台：

> [阿里云](https://promotion.aliyun.com/ntms/act/ambassador/sharetouser.html?userCode=50sid5bu&utm_source=50sid5bu)、
> [腾讯云](https://curl.qcloud.com/iyFTRSJb)、
> [华为云](https://activity.huaweicloud.com/discount_area_v5/index.html?fromacct=d1a6f32e-d6d0-4702-9213-eafe022a0708&utm_source=bGVpZmVuZ3lhbmc==&utm_medium=cps&utm_campaign=201905)、
> [青云](https://www.qingcloud.com/)......

> 使用 CentOS 7.9
>
> WindTerm下载：[https://github.com/kingToolbox/WindTerm/releases/download/2.6.0/WindTerm_2.6.1_Windows_Portable_x86_64.zip](https://github.com/kingToolbox/WindTerm/releases/download/2.6.0/WindTerm_2.6.1_Windows_Portable_x86_64.zip)

```javascript
# 移除旧版本docker
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

# 配置docker yum源。
sudo yum install -y yum-utils
sudo yum-config-manager \
--add-repo \
http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo


# 安装 最新 docker
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 启动& 开机启动docker； enable + start 二合一
systemctl enable docker --now

# 配置加速
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://registry.dockermirror.com"
    ]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

<!-- <h2 id="wXF7E">介绍</h2> -->

## 介绍

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729820157097-f84ac46a-bae4-4aac-88f6-0d0b67dd0887.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729820926847-7bca161b-aa59-476d-81a6-4578da3305c9.png)

<!-- <h2 id="Lael5">命令操作</h2> -->

## 命令操作

<!-- <h3 id="adW4p">总结</h3> -->

### 总结

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729842975229-600137ef-e82d-4ce3-88e6-8720fb6d6840.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729843036525-38dae0e4-a003-493e-b910-6aa5140370e2.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729824003973-83e7b023-d9e8-4d31-bfa6-f7d612277131.png)

<!-- <h4 id="e81Zx">镜像</h4> -->

### 镜像

检素docker search

下载docker pull

列表docker images

删除docker rmi

<!-- <h4 id="hJLda">容器</h4> -->

### 容器

运行：docker run

查看：docker ps

停止：docker stop

启动：docker start

重启：dockerrestart

状态：dockerstats

日志：docker logs

进入：docker exec

删除docker rm

<!-- <h4 id="rXSpc">分享</h4> -->

### 分享

提交：docker commit

保存：docker save

加载：docker load

登录docker login

命名：docker tag

推送docker push

```javascript
#查看运行中的容器
docker ps
#查看所有容器
docker ps -a
#搜索镜像
docker search nginx
#下载镜像
docker pull nginx
#下载指定版本镜像
docker pull nginx:1.26.0
#查看所有镜像
docker images
#删除指定id的镜像
docker rmi e784f4560448


#运行一个新容器
docker run nginx
#停止容器
docker stop keen_blackwell
#启动容器
docker start 592
#重启容器
docker restart 592
#查看容器资源占用情况
docker stats 592
#查看容器日志
docker logs 592
#删除指定容器
docker rm 592
#强制删除指定容器
docker rm -f 592
# 后台启动容器
docker run -d --name mynginx nginx
# 后台启动并暴露端口
docker run -d --name mynginx -p 80:80 nginx
# 进入容器内部
docker exec -it mynginx /bin/bash

# 提交容器变化打成一个新的镜像
docker commit -m "update index.html" mynginx mynginx:v1.0
# 保存镜像为指定文件
docker save -o mynginx.tar mynginx:v1.0
# 删除多个镜像
docker rmi bde7d154a67f 94543a6c1aef e784f4560448
# 加载镜像
docker load -i mynginx.tar 


# 登录 docker hub
docker login
# 重新给镜像打标签
docker tag mynginx:v1.0 leifengyang/mynginx:v1.0
# 推送镜像
docker push leifengyang/mynginx:v1.0
```

下载镜像

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729822414283-735d890e-3d38-4958-b30c-eb431b71fab2.png)

启动容器

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729822572918-b6498af7-9650-48fb-a590-c8c1a300f259.png)

修改页面

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729823211587-3ca1f057-5716-4a79-a6ee-ad43af898e05.png)

保存镜像

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729823263526-081a8901-a0de-4330-81d0-cbd5574c2933.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729823360471-767e723a-a9ab-4471-a326-2476ecda413c.png)

分享社区

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729823909584-d858562b-6868-4fac-9646-050eb01f75ef.png)

登录

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729823568218-864c1420-08b9-43e5-a494-f9d427708901.png)

改名

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729823642450-bdc8d369-391c-4506-95b9-a2cf9b4b12d1.png)

推送

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729823675695-3e79129d-b384-45bb-857a-e2ba328b7030.png)

做一个最新的版本镜像

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729823852355-31778881-ff22-4a8c-a052-abaeab331e63.png)

<!-- <h2 id="Q9rJP">批量删除容器</h2> -->

## 批量删除容器

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729824260846-0a4f8797-9f89-4db1-898a-030e97dee986.png)

查询所有容器id

docker ps -aq

删除所有容器id

docker rm $(docker ps -aq)

强制删除所有容器id

docker rm -f $(docker ps -aq)

<h2 id="Pk6cw">存储-目录挂载</h2>
将容器和linux主机挂载

删除容器不会影响主机,再次进行挂载时,容器会同步修改内容配置

```javascript
docker run -d -p 99:80 \
-v /app/nghtml:/usr/share/nginx/html \
-v ngconf:/etc/nginx \
--name app03 \
nginx
```

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729824736408-497e0409-012d-40b8-860e-33804865e36b.png)

问题

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729825217573-29f2c35d-df08-4278-8b8c-6a130aa74d7b.png)

目录挂载：-v/app/nghtml::/usr/share/,nginx/html

<!-- <h2 id="DfP5A">存储-卷映射</h2> -->

## 存储-卷映射

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729825360574-09f63dec-1107-4576-bf4e-4d5c5a7a6aa0.png)

卷映射：-v ngconf::/etc/nginx

卷目录位置: /var/lib/docker/volumes/

<!-- <h2 id="h4Var">Docker 网络-自定义网络</h2> -->

## Docker 网络-自定义网络

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729843668483-dad2f425-fbe5-424f-b312-8a6fccb470e7.png)

即容器内的网络互相交互

容器创建时候会创建 docker0 他们共用一个网关,互相之间通过分配的docker0 进行交互

通过 ip 的话ip 如果有改变就不太好,最好的方式是通过域名

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729826351879-59292c26-da80-4297-816b-19705adc3502.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729826389787-30d08075-4f37-4370-be67-8cda5a640ae9.png)

<!-- <h4 id="sKOUu">创建自定义网络</h4> -->

### 创建自定义网络

docker network create mynet

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729844076692-2e3e2d7c-6535-4c87-8131-ad28a9718741.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729842817870-2364e2f2-ebe9-4c1e-ae68-2d34da54dfee.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729826493511-9f41b24b-d563-44b8-9223-c593e37bb4b7.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729826538580-fcf64b07-a338-4860-a1be-8b5f7629dd08.png)

<!-- <h4 id="zm8a6">将容器加入网络</h4> -->

### 将容器加入网络

docker run -d -p 99:80 --name app2 --network mynet nginx

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729826605358-25165241-b3dc-4a49-9a97-e33b236b32f7.png)

<!-- <h4 id="U2F8c">则两容器的 ip 都在同一个网段下</h4> -->

### 则两容器的 ip 都在同一个网段下

docker inspect app1

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729826675604-7cbb9579-80ea-4ff4-b209-82c0570eaaa2.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729826689171-13e1322c-d39f-477b-86ea-17af33bfddb7.png)

容器之间 就可以通过 容器名来访问

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729826876391-3b58ea97-90d9-410b-90e6-e2775121c8f3.png)

<!-- <h2 id="osg5j">网络-Redis-主从集群</h2> -->

## 网络-Redis-主从集群

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729827157273-df3895ed-6f46-4d73-95e2-20bf55530b2c.png)

```javascript
#自定义网络
docker network create mynet
#主节点
docker run -d -p 6379:6379 \
-v /app/rd1:/bitnami/redis/data \
-e REDIS_REPLICATION_MODE=master \
-e REDIS_PASSWORD=123456 \
--network mynet --name redis01 \
bitnami/redis

#从节点
docker run -d -p 6380:6379 \
-v /app/rd2:/bitnami/redis/data \
-e REDIS_REPLICATION_MODE=slave \
-e REDIS_MASTER_HOST=redis01 \
-e REDIS_MASTER_PORT_NUMBER=6379 \
-e REDIS_MASTER_PASSWORD=123456 \
-e REDIS_PASSWORD=123456 \
--network mynet --name redis02 \
bitnami/redis
```

如果没有权限,则给其打开

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729827361948-c0a9ae9e-df19-4b93-abfd-fef705316374.png)

<!-- <h2 id="GFyvB">启动MySQL</h2> -->

## 启动MySQL

```javascript
docker run -d -p 3306:3306 \
-v /app/myconf:/etc/mysql/conf.d \
-v /app/mydata:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
mysql:8.0.37-debian
```

<!-- <h2 id="tGh0V">Docker Compose</h2> -->

## Docker Compose

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729828233448-a6b535d3-9d8f-4606-a31e-4c41bb583310.png)

<!-- <h3 id="TFyZ1">案例启动 wordpress</h3> -->

### 案例启动 wordpress

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729828327988-e3d9052e-20ce-4c6b-a06c-89f5b065bb3f.png)

<!-- <h3 id="sN6zZ">命令式安装</h3> -->

### 命令式安装

建议

compose.yaml

```javascript
name: myblog
services:
  mysql:
    container_name: mysql
    image: mysql:8.0
    ports:
      - "3306:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=123456
      - MYSQL_DATABASE=wordpress
    volumes:
      - mysql-data:/var/lib/mysql
      - /app/myconf:/etc/mysql/conf.d
    restart: always
    networks:
      - blog

  wordpress:
    image: wordpress
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: mysql
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PASSWORD: 123456
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wordpress:/var/www/html
    restart: always
    networks:
      - blog
    depends_on:
      - mysql

volumes:
  mysql-data:
  wordpress:

networks:
  blog:
```

<!-- <h3 id="bVhl6">compose.yaml</h3> -->

### compose.yaml

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729828611337-4c041ca6-06d7-4604-9206-aed137fd886b.png)

```javascript
name: myblog
services:
  mysql:
    container_name: mysql
    image: mysql:8.0
    ports:
      - "3306:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=123456
      - MYSQL_DATABASE=wordpress
    volumes:
      - mysql-data:/var/lib/mysql
      - /app/myconf:/etc/mysql/conf.d
    restart: always
    networks:
      - blog

  wordpress:
    image: wordpress
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: mysql
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PASSWORD: 123456
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wordpress:/var/www/html
    restart: always
    networks:
      - blog
    depends_on:
      - mysql

volumes:
  mysql-data:
  wordpress:

networks:
  blog:
```

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729828981962-bb167b21-f475-4b02-8bfb-6c069dbb346e.png)

粘贴进去

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729828995369-210f0330-788d-48c0-8d6a-ee75bb6cf17a.png)

启动

docker compose -f compose.yaml up -d

移除容器,但是没有移除卷和镜像

docker compose -f compose.yaml down

移除包括卷和镜像

docker compose -f compose.yaml down --rmi all -v

docker compose只会修改你变动过的文件

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729829072343-22c1713e-f318-4e35-a96a-10956befc356.png)

<!-- <h2 id="EO2TZ">特性</h2> -->

## 特性

+ 增量更新
  - 修改 Docker Compose 文件。重新启动应用。只会触发修改项的重新启动。
+ 数据不删
  - 默认就算down了容器，所有挂载的卷不会被移除。比较安全

<!-- <h2 id="ESRAe">Dockerfile-制作镜像</h2> -->

## Dockerfile-制作镜像

```javascript
FROM openjdk:17

LABEL author=leifengyang

COPY app.jar /app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","/app.jar"]
```

构建

docker build -f Dockerfile -t myjavaapp:v1.0

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729838007863-23de8313-e497-4f41-bbaa-afe9a75a9429.png)

制作镜像官网

[https://docs.docker.com/reference/dockerfile/](https://docs.docker.com/reference/dockerfile/)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729838024691-77752112-fc16-4a17-bad1-d2060b028b2d.png)

<!-- <h3 id="dekHS">Dockerfile-镜像分层机制</h3> -->

### Dockerfile-镜像分层机制

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729838734007-ea86baaf-bcdb-43cd-8de6-38f0a069cfa7.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729838815396-e1620653-a0fa-4ec5-b6e1-62c4d76de1d2.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729838844467-db29b02f-c74b-4bb3-a8a2-0a3d5beb669f.png)

<!-- <h2 id="X2zt2">附录 - 1. 一键安装超多中间件</h2> -->

## 附录 - 1. 一键安装超多中间件

一键安装这些组件,使用下面的 yaml 文件

选择需要的使用

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729838872259-9532501b-3a43-431e-8b8c-00c1cc61dd60.png)

前置操作

```yaml
#Disable memory paging and swapping performance
sudo swapoff -a

# Edit the sysctl config file
sudo vi /etc/sysctl.conf

# Add a line to define the desired value
# or change the value if the key exists,
# and then save your changes.
vm.max_map_count=262144

# Reload the kernel parameters using sysctl
sudo sysctl -p

# Verify that the change was applied by checking the value
cat /proc/sys/vm/max_map_count
```

然后准备一个 compose.yaml 文件

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729839047874-a069f2c9-1a61-412a-bfb3-d427faddbf65.png)

<!-- <h2 id="emc7H">yaml</h2> -->

## yaml

注意：

+ 将下面文件中 `kafka` 的  `<font style="color:rgb(0, 0, 0);background-color:rgb(242, 244, 248);">119.45.147.122</font>` 改为你自己的服务器IP。
+ 所有容器都做了时间同步，这样容器的时间和linux主机的时间就一致了

准备一个 `compose.yaml`文件，内容如下：

```yaml
name: devsoft
services:
  redis:
    image: bitnami/redis:latest
    restart: always
    container_name: redis
    environment:
      - REDIS_PASSWORD=123456
    ports:
      - '6379:6379'
    volumes:
      - redis-data:/bitnami/redis/data
      - redis-conf:/opt/bitnami/redis/mounted-etc
      - /etc/localtime:/etc/localtime:ro

  mysql:
    image: mysql:8.0.31
    restart: always
    container_name: mysql
    environment:
      - MYSQL_ROOT_PASSWORD=123456
    ports:
      - '3306:3306'
      - '33060:33060'
    volumes:
      - mysql-conf:/etc/mysql/conf.d
      - mysql-data:/var/lib/mysql
      - /etc/localtime:/etc/localtime:ro

  rabbit:
    image: rabbitmq:3-management
    restart: always
    container_name: rabbitmq
    ports:
      - "5672:5672"
      - "15672:15672"
    environment:
      - RABBITMQ_DEFAULT_USER=rabbit
      - RABBITMQ_DEFAULT_PASS=rabbit
      - RABBITMQ_DEFAULT_VHOST=dev
    volumes:
      - rabbit-data:/var/lib/rabbitmq
      - rabbit-app:/etc/rabbitmq
      - /etc/localtime:/etc/localtime:ro
  opensearch-node1:
    image: opensearchproject/opensearch:2.13.0
    container_name: opensearch-node1
    environment:
      - cluster.name=opensearch-cluster # Name the cluster
      - node.name=opensearch-node1 # Name the node that will run in this container
      - discovery.seed_hosts=opensearch-node1,opensearch-node2 # Nodes to look for when discovering the cluster
      - cluster.initial_cluster_manager_nodes=opensearch-node1,opensearch-node2 # Nodes eligibile to serve as cluster manager
      - bootstrap.memory_lock=true # Disable JVM heap memory swapping
      - "OPENSEARCH_JAVA_OPTS=-Xms512m -Xmx512m" # Set min and max JVM heap sizes to at least 50% of system RAM
      - "DISABLE_INSTALL_DEMO_CONFIG=true" # Prevents execution of bundled demo script which installs demo certificates and security configurations to OpenSearch
      - "DISABLE_SECURITY_PLUGIN=true" # Disables Security plugin
    ulimits:
      memlock:
        soft: -1 # Set memlock to unlimited (no soft or hard limit)
        hard: -1
      nofile:
        soft: 65536 # Maximum number of open files for the opensearch user - set to at least 65536
        hard: 65536
    volumes:
      - opensearch-data1:/usr/share/opensearch/data # Creates volume called opensearch-data1 and mounts it to the container
      - /etc/localtime:/etc/localtime:ro
    ports:
      - 9200:9200 # REST API
      - 9600:9600 # Performance Analyzer

  opensearch-node2:
    image: opensearchproject/opensearch:2.13.0
    container_name: opensearch-node2
    environment:
      - cluster.name=opensearch-cluster # Name the cluster
      - node.name=opensearch-node2 # Name the node that will run in this container
      - discovery.seed_hosts=opensearch-node1,opensearch-node2 # Nodes to look for when discovering the cluster
      - cluster.initial_cluster_manager_nodes=opensearch-node1,opensearch-node2 # Nodes eligibile to serve as cluster manager
      - bootstrap.memory_lock=true # Disable JVM heap memory swapping
      - "OPENSEARCH_JAVA_OPTS=-Xms512m -Xmx512m" # Set min and max JVM heap sizes to at least 50% of system RAM
      - "DISABLE_INSTALL_DEMO_CONFIG=true" # Prevents execution of bundled demo script which installs demo certificates and security configurations to OpenSearch
      - "DISABLE_SECURITY_PLUGIN=true" # Disables Security plugin
    ulimits:
      memlock:
        soft: -1 # Set memlock to unlimited (no soft or hard limit)
        hard: -1
      nofile:
        soft: 65536 # Maximum number of open files for the opensearch user - set to at least 65536
        hard: 65536
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - opensearch-data2:/usr/share/opensearch/data # Creates volume called opensearch-data2 and mounts it to the container

  opensearch-dashboards:
    image: opensearchproject/opensearch-dashboards:2.13.0
    container_name: opensearch-dashboards
    ports:
      - 5601:5601 # Map host port 5601 to container port 5601
    expose:
      - "5601" # Expose port 5601 for web access to OpenSearch Dashboards
    environment:
      - 'OPENSEARCH_HOSTS=["http://opensearch-node1:9200","http://opensearch-node2:9200"]'
      - "DISABLE_SECURITY_DASHBOARDS_PLUGIN=true" # disables security dashboards plugin in OpenSearch Dashboards
    volumes:
      - /etc/localtime:/etc/localtime:ro
  zookeeper:
    image: bitnami/zookeeper:3.9
    container_name: zookeeper
    restart: always
    ports:
      - "2181:2181"
    volumes:
      - "zookeeper_data:/bitnami"
      - /etc/localtime:/etc/localtime:ro
    environment:
      - ALLOW_ANONYMOUS_LOGIN=yes

  kafka:
    image: 'bitnami/kafka:3.4'
    container_name: kafka
    restart: always
    hostname: kafka
    ports:
      - '9092:9092'
      - '9094:9094'
    environment:
      - KAFKA_CFG_NODE_ID=0
      - KAFKA_CFG_PROCESS_ROLES=controller,broker
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093,EXTERNAL://0.0.0.0:9094
      - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092,EXTERNAL://119.45.147.122:9094
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,EXTERNAL:PLAINTEXT,PLAINTEXT:PLAINTEXT
      - KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka:9093
      - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
      - ALLOW_PLAINTEXT_LISTENER=yes
      - "KAFKA_HEAP_OPTS=-Xmx512m -Xms512m"
    volumes:
      - kafka-conf:/bitnami/kafka/config
      - kafka-data:/bitnami/kafka/data
      - /etc/localtime:/etc/localtime:ro
  kafka-ui:
    container_name: kafka-ui
    image: provectuslabs/kafka-ui:latest
    restart: always
    ports:
      - 8080:8080
    environment:
      DYNAMIC_CONFIG_ENABLED: true
      KAFKA_CLUSTERS_0_NAME: kafka-dev
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka:9092
    volumes:
      - kafkaui-app:/etc/kafkaui
      - /etc/localtime:/etc/localtime:ro

  nacos:
    image: nacos/nacos-server:v2.3.1
    container_name: nacos
    ports:
      - 8848:8848
      - 9848:9848
    environment:
      - PREFER_HOST_MODE=hostname
      - MODE=standalone
      - JVM_XMX=512m
      - JVM_XMS=512m
      - SPRING_DATASOURCE_PLATFORM=mysql
      - MYSQL_SERVICE_HOST=nacos-mysql
      - MYSQL_SERVICE_DB_NAME=nacos_devtest
      - MYSQL_SERVICE_PORT=3306
      - MYSQL_SERVICE_USER=nacos
      - MYSQL_SERVICE_PASSWORD=nacos
      - MYSQL_SERVICE_DB_PARAM=characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true
      - NACOS_AUTH_IDENTITY_KEY=2222
      - NACOS_AUTH_IDENTITY_VALUE=2xxx
      - NACOS_AUTH_TOKEN=SecretKey012345678901234567890123456789012345678901234567890123456789
      - NACOS_AUTH_ENABLE=true
    volumes:
      - /app/nacos/standalone-logs/:/home/nacos/logs
      - /etc/localtime:/etc/localtime:ro
    depends_on:
      nacos-mysql:
        condition: service_healthy
  nacos-mysql:
    container_name: nacos-mysql
    build:
      context: .
      dockerfile_inline: |
        FROM mysql:8.0.31
        ADD https://raw.githubusercontent.com/alibaba/nacos/2.3.2/distribution/conf/mysql-schema.sql /docker-entrypoint-initdb.d/nacos-mysql.sql
        RUN chown -R mysql:mysql /docker-entrypoint-initdb.d/nacos-mysql.sql
        EXPOSE 3306
        CMD ["mysqld", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]
    image: nacos/mysql:8.0.30
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=nacos_devtest
      - MYSQL_USER=nacos
      - MYSQL_PASSWORD=nacos
      - LANG=C.UTF-8
    volumes:
      - nacos-mysqldata:/var/lib/mysql
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "13306:3306"
    healthcheck:
      test: [ "CMD", "mysqladmin" ,"ping", "-h", "localhost" ]
      interval: 5s
      timeout: 10s
      retries: 10
  prometheus:
    image: prom/prometheus:v2.52.0
    container_name: prometheus
    restart: always
    ports:
      - 9090:9090
    volumes:
      - prometheus-data:/prometheus
      - prometheus-conf:/etc/prometheus
      - /etc/localtime:/etc/localtime:ro

  grafana:
    image: grafana/grafana:10.4.2
    container_name: grafana
    restart: always
    ports:
      - 3000:3000
    volumes:
      - grafana-data:/var/lib/grafana
      - /etc/localtime:/etc/localtime:ro

volumes:
  redis-data:
  redis-conf:
  mysql-conf:
  mysql-data:
  rabbit-data:
  rabbit-app:
  opensearch-data1:
  opensearch-data2:
  nacos-mysqldata:
  zookeeper_data:
  kafka-conf:
  kafka-data:
  kafkaui-app:
  prometheus-data:
  prometheus-conf:
  grafana-data:
```

<!-- <h2 id="YU7xG">启动</h2> -->

## 启动

```yaml
# 在 compose.yaml 文件所在的目录下执行
docker compose up -d
# 等待启动所有容器
```

:::info
tip：如果重启了服务器，可能有些容器会启动失败。再执行一遍 `docker compose up -d`即可。所有程序都可运行成功，并且不会丢失数据。请放心使用。

:::

<!-- <h2 id="T8mps">访问</h2> -->

## 访问

如果不会,看视频访问操作

[https://www.bilibili.com/video/BV1Bg4fesE9K?spm_id_from=333.788.player.switch&amp;vd_source=ac6ab4c3cdc5d0193edf55fd77ba0b4f&amp;p=24](https://www.bilibili.com/video/BV1Bg4fesE9K?spm_id_from=333.788.player.switch&vd_source=ac6ab4c3cdc5d0193edf55fd77ba0b4f&p=24)

+ zookeeper可视化工具下载：
  - [https://github.com/vran-dev/PrettyZoo/releases/download/v2.1.1/prettyZoo-win.zip](https://github.com/vran-dev/PrettyZoo/releases/download/v2.1.1/prettyZoo-win.zip)
+ redis可视化工具下载：
  - [https://github.com/qishibo/AnotherRedisDesktopManager/releases/download/v1.6.4/Another-Redis-Desktop-Manager.1.6.4.exe](https://github.com/qishibo/AnotherRedisDesktopManager/releases/download/v1.6.4/Another-Redis-Desktop-Manager.1.6.4.exe)

| 组件（容器名）                 | 介绍            | 访问地址                    | 账号/密码          | 特性                |
| ------------------------------ | --------------- | --------------------------- | ------------------ | ------------------- |
| Redis(redis)                   | k-v 库          | 你的ip:6379                 | 单密码模式：123456 | 已开启AOF           |
| MySQL(mysql)                   | 数据库          | 你的ip:3306                 | root/123456        | 默认utf8mb4字符集   |
| Rabbit(rabbit)                 | 消息队列        | 你的ip:15672                | rabbit/rabbit      | 暴露5672和15672端口 |
| OpenSearch(opensearch-node1/2) | 检索引擎        | 你的ip:9200                 |                    | 内存512mb；两个节点 |
| opensearch-dashboards          | search可视化    | 你的ip:5601                 |                    |                     |
| Zookeeper(zookeeper)           | 分布式协调      | 你的ip:2181                 |                    | 允许匿名登录        |
| kafka(kafka)                   | 消息队列        | 你的ip:9092   外部访问:9094 |                    | 占用内存512mb       |
| kafka-ui(kafka-ui)             | kafka可视化     | 你的ip:8080                 |                    |                     |
| nacos(nacos)                   | 注册/配置中心   | 你的ip:8848                 | nacos/nacos        | 持久化数据到MySQL   |
| nacos-mysql(nacos-mysql)       | nacos配套数据库 | 你的ip:13306                | root/root          |                     |
| prometheus(prometheus)         | 时序数据库      | 你的ip:9090                 |                    |                     |
| grafana(grafana)               |                 | 你的ip:3000                 | admin/admin        |                     |
|                                |                 |                             |                    |                     |

<!-- <h2 id="eGWug">销毁实例</h2> -->

## 销毁实例

如果是用服务器去开启docker的,如果不需要用,记得去 云服务器 销毁实例,避免多余计费

结语

![](https://cdn.nlark.com/yuque/0/2024/png/45821596/1729839709312-9e14e455-6e76-4bc9-bdc1-40a3c0577ba2.png)
