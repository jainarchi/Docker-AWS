https://drive.google.com/file/d/1Qpyj_0CMbQhhTVCKyBay_oqyrYPyomt2/preview 
 
 dockerfile contains 5 steps to built an image

 - FROM node:20-alpine  (base light weighted docker image) nodev20 + Linux OS (only code to control hardware)

 - COPY ./package.json .        
 - COPY ./package-lock.json .

 - RUN npm install
 
 - COPY ..

 - CMD["node" , "server.js"]


 
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



