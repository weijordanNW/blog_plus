container_name="blog_plus"

echo "Docker 部署中..."

docker stop $container_name
docker rm -f $container_name
docker rmi -f $container_name

echo '创建容器并将其启用'

docker build -t $container_name -f /docker-opt/$container_name/app/docker/Dockerfile .
docker-compose -f /docker-opt/$container_name/app/docker/docker-compose.yml up -d

echo '容器部署成功'