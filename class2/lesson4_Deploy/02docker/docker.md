# docker
## install docker
https://www.docker.com/get-started

## Dockerfile & .dockerignore

## image
list: docker images
pull: docker pull ${IMAGES}   e.g. docker pull ubuntu
build: docker build -t ${image name} --file ./Dockerfile .  `docker build -t bakergy-nodejs --file ./Dockerfile . `
delete: docker rmi ${image id}
push: 
```
1. login : docker login
2. add tag: docker tag ${dockerId} ${dockerhub repo}:${tag}
3. push to dockerhub: docker hub docker push ${dockerhub repo}
```
run: docker run -it -p 8000:3000 ${image name}  `docker run -it -p 3000:3000 bakergy-nodejs`


##### note: -t tag ,-it前景執行, -d背景執行, -p外部port:內部port

## container
list: docker ps
start: docker start ${id}
stop: docker stop ${id}
remove: docker rm ${id}
execute: docker exec -it ${id} bash `docker exec -it ${id} bash`
