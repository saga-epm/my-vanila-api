Created a nodejs api with mongo and used docker to build images 

# Command to build image
docker build -t saga-epm/myvanilaapi:v1 .   

# Command to run docker image
docker run --name vanialapi -p 80:8000 -d saga-epm/myvanialapi
docker run --name vanilaapi -p 80:8000 -d <docker-image>

# Command to see current images 
docker ps -a: To see all the running containers in your machine.
docker images 

# Command to remove images 
docker stop <container_id>: To stop a running container.
docker rm <container_id>: To remove/delete a docker container(only if it stopped).
docker image ls: To see the list of all the available images with their tag, image id, creation time and size.
docker rmi <image_id>: To delete a specific image.
docker rmi -f <image_id>: To delete a docker image forcefully
docker rm -f (docker ps -a | awk '{print$1}'): To delete all the docker container available in your machine
docker image rm <image_name>: To delete a specific image

To remove the image, you have to remove/stop all the containers which are using it.
docker system prune -a: To clean the docker environment, removing all the containers and images.