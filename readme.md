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








































































































































































