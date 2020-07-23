1. What is cloud :- 
Cloud is set of Server's, where multiple Virtual machines with different configuration can be hosted
Servers that are accessed over the internet instead of having physical server
cloud is server where database and software run on those servers
Cloud is a massive set of infrastructure (Servers and Services) hosted at one or many places and used by many other organizations or individuals. 
Data availability and reliablity
Storage outside your office location and access anywhere from worl
cloud consists of data centers in multiplr regions


2. What is the difference btween a data center 
    Cloud is platform enablement :- 
    Private Cloud 
    Government Cloud 
    Public Cloud 
    Api ; Service --> 

    SDN 
    SDH 
    SDS
    SDSEC 

    Services: 


    Cloud Because i have a software control : 
    Api : Create Machines 
          Create Harddisk 
          Create Networks 
          Create Security Configuration 

    Layer UI:=- 
    Integrated with  a simple platform :- 

    Amazon Web Service :- 
    Azure Service
    Google Cloud Platform
    ========================================================================================================
    IaaS  It everything
    PaaS : Serverless computing :- 
    SaaS : 
    XaaS
    =========================================================================================================

    16 Gb machine with a lot of storage and with a lot network :- 
    PoC:- Click a button on cloud and get a VM readily avialble--> Pay as you go 


    AWS 
    GOOGLE 
    AZURE 
    -------------------
    Service ---> API ---> Microservices 
    Authentication 
    Storage 
    Logging 
    Hardware 
    Firewall 
    Database 


Cloud : 

Truly Elastic: 
Hypervisor 
============================================================================================================
Microservices :- 
Micro : how much micro 
MonoLith : how monolith

------------------------------------------------------------------------------------------------------------
1.  How does one talk to database (Application) (Service API)
2.  How does one method talk to another method (?) Login/ Logging/ Auditing/Network/ 
3.  how does one person talk to another person (?)

Dissection : If you can distribute you can scale : 
             Product :- Logging ---> api ---> 
                        Ui :- 

                        AuthService--> 

                        Blogs --> 
You Wrote a application : = 
    You Deploy 
    You Need Env
    You Need Hw 

    IaaC-- Infrastucture as code :- 

    300 function and each function is reusbale 
Build to integrate integrate and build :- 

Container 
Serverless 
Kubernetes 
PaaS 

==================================================================================================================

1. Cloud with Instrastructure 
2. Cloud with  Servless/ Containers 
3. Cloud with Services 

==============================================================================================================
The accounts are admin accounts for the Cloud :- 
AWS Cloud :-

https://console.aws.amazon.com -->aws console 

Regions :- (Logical)

AWS :- oracle exa data ? 
Oracle Cloud : Exa data : yes 
IBM : Mainframe on the cloud 

Cloud Native :- 

Cloud:-

Region :- 
    |----- AZ (Availibility Zone)


Services:- 




VPC: 
Virtual Private Cloud :- 




How to create A virtual machine and access it over the internet using the AWS Console :- 
VM Linux : Create WebServer -> WebSite -> 

EC2 : 
Instance = Virtual Machines 
EBS -  Elastic Block Storage (Hard Disk)
Network -  Interface 
Security Groups = Firewall Rules 
Snapshots : Backup of machines 
Restoration : Recovery Snapshots 
Auto Scaling : Group --> 1 more machine should be scaled up 
Load Balancers : (WebServer on 2 machines Loadbalancer)
AMI (Amazon Machine Images) : Buy images : 
Compute Infra 

Can i buy Appliances on aws 




1.  How to create our own instances with webservers and a littble security group
    (usage of the implemenation windows box)
2.  We can create load balancer 
3.  How we can use the application 1 up 1 down 
4.  the Storage Section  *S3 and its related sections 
    Understand  the WebServer: Serverless webhosting 
5.  VPC (Virtual Private Network) (optional)


Q1. okay i have a machine and now i want to install some software or my application on this machine . 

    WebServer:- and also make it available on the internet so that people are able access my machines 
    I want to create snapshot of this machine and from the snapshot i want create one machine 
    I want to use these two machine as my target in front of my load balancer : so i will be creating 
    a load balancer :- 
    I should be able pull one machine down and make the other machine still serve my application 



1. Instance must be Running to connect 
2. The password is you key which you downoaded .pem yesterday 
3. if you use putty you need to have a ppk created from .pem 
        PuttyGen --> Import --> Save PrivateKey ---> .ppk 
4. The ip address will never remain same everytime you reboot :- if you want a static ip you have pay 
        Elastic IP 

To Install a a basic WebServer on the Linux box 
# install a http server
sudo yum install httpd -y   

# this will make our http  service start automatic after restart 
sudo chkconfig httpd on  

# starts your service 
sudo service httpd start

# check the service is listening or not 
netstat -an | grep LISTEN | grep 80 
ps -ef | grep httpd 

# conclusion of of you excercise 
1. We have created a cloud vm on amazon 
2. we have hosted a webserver on it 
3. we have create a security rule to allow (80/22)
4. we have successfully viewed the page on the http server 
5. enable the icmp ping : 

# what next I would want to create a Backup of machine i want to backitup

What is snapshot is a backup of you hdd / drive / Volume 



I want to restore my snapshot on a new machine :- 

a) i first create a new machine 
b) i shut down that machine 
c) i detach its xvda or what ever are the Volumes i dont want 
d) i have taken a snapshot from my old machine 
e) i create a new volume from my snapshot 
f) i attach that volume to my new instance as /dev/xvda
g) i start my instance and now it should start with a pre installed webserver 
h) i simply open the browser as the security group is same (80/22) open it should allow me to 
    access the webserver without any thing : as its preinstalled and prestarted 


#  Load Balancer as a service 
we will create a load balancer and with that load balancer now we have 2 web servers behind 
so at any given point the load balancer should serve the site from on of the systems (Targets)

login to you linux box 

cd /var/www/html
sudo vi index.html 
<h1> Welcome to Server-1</h1>
esc + : + wq 

BOth the machines





1. how to create Machines snapshots
2. how to create volumes from the snapshots
3. how to attach the volumes to instances 
4. how to create a machine from snapshot 
5. how to add to webserver 
6. how to to enable services 
7. how to configure security groups 
8. how to make use the http load balancer
9. how the target groups define the load balancing 
10. health protocol 
12. we understood how the application was throwing 403 and lb had a issue 
13. we understood how index.html 
14. How configurre the complete End deployment on the IaaS 




EC2 : 
1. Instances 
2. AMI 
3. EBS (Blockstore)
4. Volumes 
5. Security Groups 
6. Keys 
7. ELB (Elastic Load Balancer)
8. Target Groups 
9. Snapshots 
10. Regions
11. Availibility Zone 
12. VPC 
13. Microservice -> 
14. Iaas / PaaS / SaaS
15. IAM :- 
========================================================

#  Storage and Networking 
1. Storage :  With S3 : 
Simple Storage Service  : S3 
its a cloud storage system :- 
a) S3 is a object Store any object can be stored 
b) S3 can be accessed over a  http protocol 
c) S3 is global although hosted in one region but its global
d) S3 can be used to host a webserver :  you static webapplication 
e) S3 can supports encryption 
f) S3 support versioning 
g) S3 Supports different Areas 
    i) I can use to restore by db backup (DBAAS / RDS)
    ii) S3 can be used to trigger lambda functions 
    iii) S3 Can be use to transfer snapshots from one region to another 
    iv)  S3 can be use for audit log storage 
    v)  S3 can be used as file locker 
h) THere are various ways where the implementation can be used for storage 
    Storage Classes :-  
        Standard  (Every day access )
        Intilligent  frequentl . infrequently 
        Single zone 
        Glaciers 
        Deep Archives 



s3://aws  (reserved bucket)
s3://www.vinsys.com.bucket001
S3 is global uuid standardization 


a) Bucket for hosting a webserver 
b) To Storage our Files and other with versioning 
c) Bucket to even study other type of scenario


# understand what is virtualization what containers







S3 Stands for Simple Storage Service 
S3 can be used for any type of Storage 


1. HOw do i host a webserver on the S3 Bucket 
------------------------------------------------
a) First you need to decide bucket name 
b) you need to create the bucket and dont forget although buckets are global but they still get 
    create in region for thier physical presence 
c) You need to get the bucket access mode to public because you have make page public if public 
    access is blocked you will not able to host and make pages available anonymous users ***** 
d) You will- need to have static aspx/aps/jsp/php (Not Static pages server compiled) (WebServer)
    text/html , image/*  application/javascript (any content that is directly servable to the 
    user pages browsers) non server computed are good candiates for hosting 

e)  index.html -->push it to your bucket and make it public read only  *****
f)  enable the bucket webserver hosting feature (Bucket Hosting Feature)
g)  if u wish to enable versioning 
        if someone overwrites a file on you webserver on file its easy recover the old version


# virtual private cloud 
VPC 
CIDR /-
SUBNETS /-  
ROUTES  /- 
Internet Gateways /-


CIDR : Block of Ip Addresss :- 
VPC :(Virtual Private Cloud)  have  range of private ip address blocked your self ? 
How many ip address should block whoch when i block how many are reserved 
8'
==============================================================================================================
VPC is i want my own virtual private cloud my own ip set and own vlans (Subnets) i want a seperation 
in my system :- r
1. Is decide on  CIDR Block (Is a big cake more ip address )
    10.10.0.0/16  (Reserve 65536 Ipaddress) (VPC needs a cidr Block )
2. You need create Subnets from your VPC :- 
    a) 10.10.1.0/24  + DB + AZ1 
    b) 10.10.2.0/24  + DB + AZ2 
    c) 10.10.3.0/24  + DB + AZ3
3.  If you wish to access external internet or you public addresses to be assigned to you machines the 
    you will need internet gateway Egress -- Going out :- 
    You can create a IGW ---> 
    Assign this IGW to your VPC ---> 
4.  DHCP OPTS / Names Resolution / DNS REsolutions 
5.  Routes : so if you dont assign route property you willl not be able to go out or let other come in 
    you vpc resolution (Natting is a part of the routing )
    Route - On you vpc   10.10.0.0/16  ---> Locally 
    There a option where not local but on the internet -> =-====> 
        that will 
        0.0.0.0/0 -----> Internet Gateway ---> 
6. Either you can make a use of the EC2 instance --> 
        Choose you vpc see that you have correctly launched and with launch  
        it has assined the require ip  address for the instance; 
7. Optional:- Ip reservation ---> Assign this ip to your instance ---> 
        Now shut it down and after shut down again restart the server your ip address remain intact 
8.  Where are my logs where is my System output monitoring where is alerts 
    where are anamolies and detections where is notifications .........
#  Container and Docker How autonomous application are Deployed 
---------------------------:
nilesh.devdas@outlook.com
---------------------------:


---------------------------
Bare Bones:- 
Virtualization :- 
Containerization :-
---------------------------

1. Is your development Environment Same as Production  ? No 
2. what you build is not what you test and is not what you ship ? 
3. How much time does it take to create a running prod like / Cloine like Environment 
4. How to Rollback to a specific version of the whole application 
5. Can i scale by a click of a button so that i can scale to a  Number desired (++1  --1)
6. How do i version my binaries ? --->
7. Deployment is is rollback is not 
8. Where is Service Delivery ? 
    How much you Develop ? How much you Deliver 

Containerization :-
What is difference between environment A and Environment B  ? 
Configuration ....... 
A) Property Files 
B) Enviromental Parameters 
C) Storage folders/ Paths 
D) Memory Cpu 
E) Network 
+++
My Binaries Together 
Then it becomes a deployable ready image 

VM Snapshot = AMI => 
A machine is huge :-  It time boot is high because it comes with Kernel 
Its Maintenence is high because it comes with license, Os Management , Antivirus, and Blah blah 


Virtualization  v/s Containerization 
1 Physical Box := 
24 Cores = 48 Threads : 24 Cores  1 = 2 Thread -->
4 Cores assign to one machine --> VM (4 VPU) and then i will assigne such 8 VM's For this 

i have a service --> Supposed to scale and delploy 
1 VM of this needs to deploy my 10 services 
login 
blogs 
catlogue
reviews 
booking 
logging 
-->  1. How and where do i control each service ? 
-->  2. The Service Login --> Problem that i dont ports 80 --> Login1/Login2/Login3
-->  3. how to monitor 3 services where 4 instance whether healthy whether down ? 


Build --> Application that is autonomous (Microservice)
When the applications the environment start 

We start Environment then the application can bestarted 
We Start the service --> The environment automatically start -> 

How many of you can configure a softwar ELK or Configura LogShaper 
What if i give you a ready made deployimage 

AMI ---> VM ====> Started  ===> Has its own Storage/Network/RUnt FIle System  (Individual Kerner)

DOcker Image --> Containers --> Started   ==> Own Storage / Network / Run File System / I share the same Kernel 



1. Maven : Pom.xml 
2. config : Nuget 
3. Python ; requirements.txt 
4. Node : package.json 

Moder Application --> Standar
------------------------------------------------------------------------------------------------------------------
Step 1 :  I will create a new VM 
            No changes standard way of create vm : 
            Chose a images which docker yum avilablity -> 
Step 2 :  Inside VM i will install docker 
            # sudo yum install docker 
            # sudo chkconfig docker on 
            # sudo service docker start 
            # sudo docker ps   # to check if there are any running containers 

Step 3 :  pull some docker image and create and host container 
Step 4 :  i am going to modify this container and add my own files to file / config / app to it 
Step 5 :  i am going to commit the container in my name and push it back to th docker hub by myname 
Step 6 :  i am going to give you all this image which you can pull and run at your need using the 
          docker commands 

Do i really Need to do all the Step 1 to Step 6 The answer is no : I can directly pull a image from 
the repository and instal that container on ECS ---> 

ECS --> Elastic Container Service --> 
    a) Cluster of machines with Docker installed already on it and so that i can simply run the 
        images without logging in any machine and scale up scale down or do what every i wish 
        to achieve ina Step 1 to Step 6 Just from the AWS Console 

a) The first Requirement is to understand how docker works ---> 
b) When i login to the ECS --> 
================================================================================================================



docker 





































































































































































































1. you have added a http server
2. you have added a rule to allow 80
3. you have start the server  sudo service httpd start 
4. you have use the domain/ip (public ) and

















































































































































































