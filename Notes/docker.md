 dockerfile contains steps to built an img

 - FROM node:20-alpine  (base light weighted docker image) nodev20 + Linux OS (only code to control hardware)

 - COPY ./package.json          
 - COPY ./package-lock.json

 - RUN npm install

 - CMD["node" , "server.js"]


 
 ### command to built an image 
- docker built . -t Image-name 
 ( In which directory we run this command docker will find dockerfile to make an image)

-t : tag 


- now Server run inside the container 
- outside the container on local machine 



docker run img
docker run -p 8000:3000 img

