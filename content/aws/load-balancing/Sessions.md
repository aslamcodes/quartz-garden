---
dg-publish: true
tags: 
type: 
date: 19th July 2025
done: false
---
Sticky sessions
Uses cookies to preserve sessions
Might cause imbalance in the load
Expiration dates can be controlled
# Types of cookies
- Application based cookies
    - Custom cookies
        Generated by the application
        Cookie names must be specified indiviudally for each target groups
        AWSALB, AWSALBAPP, AWSALBTG reserved names, can't be used
    - Application cookies
        Generated by loadbalancer
        Cookie name `AWSALBAPP`
- Duration cookies
    Generated by Load balancer
    Names: ALB - AWSALB, ELB - AWSCLB
    Expired based on some duration

Stickiness can be turned on Target Group's Edit attribute settings

