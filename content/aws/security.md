---
dg-publish: true
tags: 
type: 
date: 19th July 2025
done: false
---
******# Amazon Inspector
Run assessments that check security exposures and vulnerabilities in EC2 instances

Host assessment requires an agent
Network assessment requires no agent

**Network Assessment**
Checks for ports that are reachable from outside the VPC
if agent installed, gets the processes that are reachable via the port

**Host Assessment**
Agent can be installed via SSM
CVE - Common Vulnerabilitie Exposures; 
CIS - 
Security Best practices

***Priced based on number of instances***

# Amazon Trusted Advisor
Reduce Cost
Improve performance
Improve security

By optimising AWS environment? By providing guidance/advises

# AWS Security Hub
- Aggregates logs from the account, accross accounts and across aws services and produces a score off of that for a security standards
- The Aggregated logs are converted to ASFF (AWS Security Hub Finding Format) for processing

## Security Standards
> ASFF probably injected into on of these standards, that gives us a score on our posture
- FSBP
- CIS:
- PCI DSS:
- NIST: 

# AWS Guardduty
- Guardduty is more of an "remediation/Active service" compared to AWS inspector which could be said "Passive service" - Layman terms

# AWS Sheild 
WAF and Sheild are closely packed

This is to protect from DDoS attacks, for underlying AWS resources 

Why this is not part of WAF?
> AWS Shield is primarily for DDoS attacks, as DDoS attacks can be of different levels.
https://docs.aws.amazon.com/decision-guides/latest/waf-or-shield/waf-or-shield.html

AWS WAF
Traffic inspection is at request level

AWS Shield
Packet Level

# AWS WAF

AWS Web Application firewall, Blocks networks request before they reach the origin servers

- We can setup rules that filters traffic.
- Protections for top 10 Owasp 

- Rate limitting can be set up with WAF 
- Blocks request from IP address using headers

## WAF ACLs
- Web Access Control List
- Fine grained control over HTTP(s) request that our resources respond to

- **Resources** Amazon CloudFront, Amazon API Gateway, Application Load Balancer, AWS AppSync, Amazon Cognito, AWS App Runner, AWS Amplify, and AWS Verified Access resources.
- **Parameters** with IP, string match, regex, packet size, SQL sense

> Judging by my learnings, WAF has to be a Proxy server or middleware, that forwards HTTP requests after all the inspections 
