https://drive.google.com/file/d/1Qpyj_0CMbQhhTVCKyBay_oqyrYPyomt2/preview 
 
 dockerfile contains 5 steps to built an image
 ```
 - FROM node:20-alpine  (base light weighted docker image) 
   nodev20 + Linux OS ( code to control hardware)

 - COPY ./package.json .        
 - COPY ./package-lock.json .

 - RUN npm install
 
 - COPY ..

 - CMD["node" , "server.js"]

 ```
 
 ### command to built an image 
- docker build . -t Image-name 
 ( In which directory we run this command docker will find dockerfile to make an image)

-t : tag 
-p : port mapping


docker run img
docker run -p 8000:3000 img


- now Server run inside the container 
- for outside the container on local machine -p




docker ps  
docker stop containerID             
docker rm containerID   remove container 

rmi imageId    - remove image

docker exec -it contID node --version 


#### to separate our code from os files 
make a WORLDIR /app
and  Copy all inside this

-----
Need to make image again & again we me make any changes 

here docker compose come
- sync all changes in container 
- don't need to create image again manually

```
    volumes:
      - ./Backend:/app
 Local Backend folder ↔ container's /app folder    (sync )
 
 backend_node_modules:/app/node_modules   
- linux manages node modules, binary file are diff for diff OS

```

- docker compose up  (run in docker compose file dir)
- Read Docker Compose doc 
- bind mount -> live connection link between local source code and container
./Backend:/app -> ./Backend mapp to /app in container 


#### if bind Mount ON 
    - container's /app map to local folder and reflect 


#### blind Mound Off
    - container's /app map to image /app     


bind Mount - replace path 


