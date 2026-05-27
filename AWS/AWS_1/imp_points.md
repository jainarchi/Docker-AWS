- internet can't connect with private subnets

-  server ko public network pr rakhte h to backend kyu public pr only forntent kyu ni  
   - we can deploy on diff server as well 
   - use S2 with cloudfare aws service act as frontend
    
       

 user req point to ALB

 sari cheeze server se serve nhi krte cost factor then use CDN cloudflare

 use cloudflare caching


------
EC2
AWS ki physical machine ko virtualization ki help se multiple virtual servers me divide kiya jata hai, aur unme se ek tumhara EC2 instance hota hai.

- EC2 is AWS’s virtual server service that provides scalable cloud-based machines running on AWS physical infrastructure.
















## ECR & ECS

create IAM user
and its credential to store image in ECR from local 


### AWS CLI setup
- control aws from cli
- windows : install msi file

warp terminal 
- pwd
- ls
- aws --version

- aws configure
- enter - access key, secret access key, region code , format ( json )

Now our local system is configured

> Local system configuration means providing AWS CLI with AWS credentials so the terminal can access AWS services.

> After configuring AWS CLI, we can control AWS services from the terminal, but only within the permissions assigned to the configured IAM user.


step 2 : push image to ECR
- ecr -> create private repository -> view push command
- run macOS command in windows using git bash  | WSL
- run command 1, 3, 4 as it is
- 2nd - docker buildx build --platform linux/amd64 -t <repo-name>:latest . --load

  - --load :  store image
  - buildx :  docker tool to create cross platform architecture image


  macOS architecture is ARM but AWS architecture is AMD in general - then image will not run on amd based processor


 - Now Image pushed to ECR 


ECS create cluster , inside cluster server run | present in VPC

create VPC first




---



```
WSL - windows subsystem for linux
create OS of linux inside windows OS 
```