container_name="blog_plus"

echo "Docker 部署中..."

docker stop $container_name
docker rm -f $container_name
docker rmi -f $container_name

echo '创建容器并将其启用'

#  进入项目的根目录执行
#  -t 后面是镜像名，需要小写
#  -f 后面为 docker 构建所依赖的 Dockerfile 文件的路径
#  最后的 . 表示将当前目录作为构建上下文
docker build -t $container_name -f /docker-opt/$container_name/app/docker/Dockerfile .

#  还是在项目的根目录执行
#  -f 后面为 docker-compose 命令所依赖的配置文件路径
docker-compose -f /docker-opt/$container_name/app/docker/docker-compose.yml up -d

echo '容器部署成功'
