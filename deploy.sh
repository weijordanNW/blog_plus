#srv=blog_plus-boot
srv=blog_plus
echo"项目名为$srv"
docker stop $srv
docker rm -f $srv
docker rmi -f $srv
decker build -t $srv.
docker-compose -f ~/DockerCompose/$srv/docker-compose.yml up -d