---
title: "Docker 概述"
icon: loop
date: 2024-10-25
category:
  - Docker
tag:
  - Docker
dir:
  order: 2
---
聊聊Docker

Docker是基于Go语信开发的！开源项目！

官网：https:www.docker.com

文档地址：htps:/docs.docker.com/   Docker的文档是超级详细的！

仓库地址：https:lhub.docker.com

<!-- <h2 id="q5MUN">Docker为什么出现？</h2> -->
## Docker出现的目的？
一款产品：开发上线两套环境！应用环境，应用配置！

开发一运维。问题：我在我的电脑上可以运行！版本更新，导致服务不可用！对于运维来说，考验就十分大？

环境配置是十分的麻烦，每一个机器都要部署环境(集群Redis、.ES、Hadoop.…)!费时费力。

发布一个项目(jar+(Redis MySQL jdk ES)),项目能不能都带上环境安装打包！

之前在服务器配置一个应用的环境Redis MySQL jdk ES Hadoop,配置超麻烦了，不能够跨平台。

Windows,最后发布到Linux!

传统：开发jar,运维来做！

现在：开发打包部署上线，一套流程做完！

java -apk-发布（应用商店）-张三使用apk-安装即可用！

java --jar（环境）-打包项目带上环境（镜像）-(Dockert仓库：商店)…下载我们发布的镜像-直接运行即可！

Docker的思想就来自于集装箱！

RE-多个应用（端口冲突）-原来都是交叉的！

隔离：Dockeri核心思想！打包装箱！每个箱子是互相隔离的。

水果

生化武器

Docker通过隔离机制，可以将服务器利用到极致！

I

本质：所有的技术都是因为出现了一些问题，我们需要去解决，才去学习！。

<!-- <h2 id="QkNDL">Docker的历史</h2> -->
## Docker的历史
2010年，几个搞T的年轻人，就在美国成立了一家公司

dotCloud

做一些pass的云计算服务！XC有关的容器技术！

他们将自己的技术（容器化技术）命名就是Docker!

Docker刚刚诞生的时候，没有引起行业的注意！dotCloud,就活不下去！

## 开源

开发源代码！

2013年，Docker开源！

Docker越来越多的人发现了docker的优点！火了，Docker每个月都会更新一个版本！

2014年4月9日，Docker1.0发布！

Docker为什么这么火？十分的轻巧！

在容器技术出来之前，我们都是使用虚拟机技术！

虚拟机：在window中装一个Vmware,通过这个软件我们可以虚拟出来一台或者多台电脑！笨重！

虚拟机也是属于虚拟化技术，Docker容器技术，也是一种虚拟化技术！

vm:1 inux centos)原生镜像(一个电脑！)隔离，需要开启多个虚拟机！

几个G几分钟

docker:隔离，镜像(最核心的环境4m+jdk+mysq1)十分的小巧，运行镜像就可以了！小巧！

几个MKB秒级启动！
