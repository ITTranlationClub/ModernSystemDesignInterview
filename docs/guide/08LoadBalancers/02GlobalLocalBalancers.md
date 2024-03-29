---
icon: activity
title: 全局和本地负载均衡
---


了解全局和本地负载均衡的工作原理。

## 简介

从前一篇课程中可以看出，负载均衡只在数据中心内部进行。然而，负载均衡在全球和本地范围内都是必需的。现在让我们了解下两种负载均衡的作用：

- **全局服务器负载均衡（GSLB）**：GSLB涉及跨多个地理区域分配流量负载。
- **本地负载均衡**：这指的是在数据中心内实现的负载均衡。这种类型的负载均衡专注于提高数据中心主机的效率和资源利用率。

现在我们来了解下这两种技术。

## 全局服务器负载均衡

GSLB确保全球到达的流量智能地转发到数据中心。例如，在数据中心的电力或网络故障发生时，需要将所有流量重定向到另一个数据中心。

GSLB基于用户地理位置、不同位置的托管服务器数量以及数据中心的健康状况等因素做出转发决策。

在接下来的课程中，我们还将学习GSLB如何提供自动区域故障转移。

GSLB服务可以安装在本地或通过负载平衡作为服务（LBaaS）获得。

下面的插图显示GSLB可以将请求转发到三个不同的数据中心。

每个数据中心内的每个本地负载平衡层都将与GSLB保持控制平面连接，并提供有关LB和服务器群的健康状况的信息。 

GSLB使用这些信息来驱动交通决策，并根据每个区域的配置和监视信息转发交通负载。

![QQ截图20230406211013](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230406211013.png)

<center>使用全局负载平衡将用户请求发送到不同的区域</center>

现在，我们来讨论域名系统（DNS）如何执行GSLB。

### DNS中的负载均衡

我们知道DNS可以对DNS查询响应多个IP地址。在 DNS 的课程中，我们讨论了通过查看`nslookup`的输出，在DNS中进行负载平衡的可能性。DNS使用简单的技术，通过重新排列每个DNS查询的IP地址列表来响应。因此，不同的用户获得重新排序的IP地址列表，导致用户访问不同的服务器来满足其请求。这样，DNS可以在不同的数据中心上分配请求负载。这就是执行GSLB。特别地，DNS使用轮询进行负载平衡，如下所示：

![QQ截图20230413210003](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210003.png)

<center>来自ISP 1的用户请求服务的IP地址</center>

![QQ截图20230413210014](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210014.png)

<center>DNS响应数据中心1的IP地址</center>

![QQ截图20230413210027](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210027.png)

<center>用户向数据中心 1发送请求</center>

![QQ截图20230413210044](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210044.png)

<center>来自ISP 1的用户在数据中心1中得到服务</center>

![QQ截图20230413210058](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210058.png)

<center>来自ISP 2的用户请求同一服务的DNS基础架构IP地址</center>

![QQ截图20230413210112](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210112.png)

<center>DNS响应并执行GSLB到数据中心2的IP地址</center>

![QQ截图20230413210134](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210134.png)

<center>用户向数据中心2发送请求</center>

![QQ截图20230413210150](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210150.png)

<center>来自ISP 2的用户在数据中心2得到服务</center>

![QQ截图20230413210204](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210204.png)

<center>来自ISP 3的用户请求同一服务的DNS基础架构IP地址</center>

![QQ截图20230413210231](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210231.png)

<center>DNS响应并执行GSLB到数据中心3的IP地址</center>

![QQ截图20230413210252](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210252.png)

<center>用户向数据中心3发送请求</center>

![QQ截图20230413210315](g)

<center>来自ISP 3的用户在数据中心3得到服务 </center>

![QQ截图](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210336.png)

<center>来自ISP 4的用户请求DNS基础结构以获取相同服务的IP地址。</center>  

![QQ截图20230413210355](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210355.png)

<center>DNS以轮询方式响应数据中心1的IP地址，并进行全局服务器负载平衡(GSLB)</center>

![QQ截图20230413210411](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210411.png)

<center>用户向数据中心1发送请求</center> 

![QQ截图20230413210431](/img/08-Load%20Balancers/QQ%E6%88%AA%E5%9B%BE20230413210431.png)

<center>来自ISP 4的用户在数据中心1得到服务</center>  

如上所示，DNS中的轮询将客户端严格按照循环顺序转发到数据中心。然而，轮询具有以下限制：  
- 不同ISP具有不同数量的用户。服务许多客户的ISP将为其客户提供相同的缓存IP，导致端服务器的负载分布不均。  
- 因为轮询负载平衡算法不考虑任何端服务器崩溃，所以它会继续分配崩溃服务器的IP地址，直到缓存条目的TTL过期。在这种情况下，服务的可用性可能会受到DNS级别的负载平衡的影响。  

尽管存在限制，轮询仍然被许多DNS服务提供商广泛使用。此外，DNS使用短TTL的缓存条目来在不同的数据中心之间进行有效的负载平衡。  

::: danger

**注意：** DNS不是唯一的GSLB形式。应用交付控制器（ADC）和基于云的负载平衡（稍后讨论）是更好的GSLB方法。  

:::

**什么是 ADC**  

应用交付控制器（ADC）是应用交付网络（ADN）的一部分。

它们可以被认为是提供各种服务，包括负载平衡的LB的超集。

ADC的主要任务是执行Web加速以减少服务器农场的负载。一些在3到7层之间的众所周知的服务包括缓存、SSL卸载、代理/反向代理服务、IP流量优化等等。

ADC还实现GSLB。  

### 本地负载平衡器的需求  
DNS在负载平衡方面发挥着重要作用，但它遇到以下限制：  
- DNS数据包的小尺寸（512字节）不足以包括所有可能的服务器IP地址。  
- 对客户端的行为控制有限。客户端可以在接收到的IP地址集中任意选择。其中一些接收到的IP地址可能属于繁忙的数据中心。  
- 客户端无法确定建立连接的最近地址。虽然可以实现DNS地理定位和类似任播的解决方案，但它们并不是简单的解决方案。  
- 在故障情况下，通过DNS进行恢复可能会很慢，因为缓存机制，特别是当TTL值较长时。  

为了解决上述问题的一些问题，我们需要另一层载荷平衡，即本地LB。

在下一课中，我们将讨论有关本地负载平衡器的不同详情。  

## 什么是本地负载平衡？  
本地负载平衡器位于数据中心内。

它们的行为类似于反向代理，并尽最大努力将传入的请求分配给可用服务器池。传入的客户端请求无缝连接到使用虚拟IP地址（VIP）的LB。  

::: tip

问题：

DNS是否可以被认为是全局服务器负载平衡（GSLB）？  

答案:

是的，实际上有两种全局流量管理（GTM）的方法：

- 通过应用交付控制器（ADC）实现的GTM：一些ADC实现了全局负载均衡（GSLB）。在这种情况下，ADC实时查看主机服务器，并根据数据中心的健康状况和容量转发请求。
- 通过DNS实现的GTM：DNS通过分析客户端的IP位置来进行全局负载均衡。对于每个请求域名（例如 www.educative.io ）的用户IP，基于DNS的GSLB会将IP地址转发到地理位置更接近请求IP位置的数据中心。

在下一课中，我们将探讨一些本地负载平衡器的高级细节。

:::