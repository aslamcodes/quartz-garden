---
dg-publish: true
tags: 
type: 
date: 19th July 2025
done: false
---

## EC2 Placement Groups
You cannot control which AZ your Ec2 instances would get launched, usually. But with placement groups you can control, predefined strategies that AWS provided.
- Partition: 
- Spread: Ensures the instances are not located in same physical hardware
    - Spread levels: Hosts (only on outposts) and Racks
- Cluster: Group instances in a az, for low latency benefits
