---
title: BloodHound使用技巧
date: 2025-09-23
authors:
  - name: Lamber
    link: https://github.com/Lamber-maybe
    image: https://github.com/Lamber-maybe.png
tags:
  - bloodhound
---


1. 当拥有一个账户时，右键将该账户 `Mark User as Owned` ，然后 `Analysis` -> `Shortest Path from Owned Principals` 可以快速发掘可利用路径


### 自定义查询语句


检索 WinRM 权限

```cypher
MATCH p1=shortestPath((u1:User)-[r1:MemberOf*1..]->(g1:Group)) MATCH p2=(u1)-[:CanPSRemote*1..]->(c:Computer) RETURN p2
```

检索 SQLAdmin 账户

```cypher
MATCH p1=shortestPath((u1:User)-[r1:MemberOf*1..]->(g1:Group)) MATCH p2=(u1)-[:SQLAdmin*1..]->(c:Computer) RETURN p2
```