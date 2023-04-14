# 全局负载均衡和本地负载均衡

了解全局负载均衡和本地负载均衡的执行方式。

## 介绍

在前面的课程中，负载均衡好像只在数据中心内执行。然而，在全球和本地范围内都需要负载均衡。让我们了解一下这两种功能的作用：

- **全局服务器负载平衡（GSLB）**：GSLB涉及将流量负载分布到多个地理区域。
- **本地负载平衡**：这指的是在数据中心内实现的负载平衡。这种类型的负载平衡侧重于提高数据中心中托管服务器的效率和资源利用率。

让我们在下面了解这两种技术。

## 全局服务器负载平衡

GSLB确保智能转发全球到达的流量负载到数据中心。例如，一个数据中心中的电力或网络故障需要将所有流量重定向到另一个数据中心。GSLB根据用户的地理位置、不同地点托管服务器的数量、数据中心的健康状况等，做出转发决策。

在下一节课中，我们还将学习GSLB如何提供自动区域故障转移。GSLB服务可以安装在本地或通过负载平衡作为服务（LBaaS）获得。

下图显示了GSLB可以将请求转发到三个不同的数据中心。数据中心内的每个本地负载平衡层将与提供关于LB和服务器群集健康状况的GSLB维护控制平面连接。GSLB使用这些信息来驱动流量决策并根据每个区域的配置和监控信息转发流量负载。

![QQ截图20230406211013](/img/08-Load Balancers/QQ截图20230406211013.png)

使用全局负载平衡将用户请求发送到不同的区域

现在，我们将讨论域名系统（DNS）如何执行GSLB。

### DNS中的负载平衡

我们知道DNS可以对DNS查询的多个IP地址进行响应。在[DNS课程](https://www.educative.io/collection/page/10370001/4941429335392256/5728619204182016)中，我们讨论了可以通过DNS执行负载平衡，同时查看`nslookup`的输出。DNS使用简单的技术来对每个DNS查询的IP地址列表进行重新排序。因此，不同的用户会得到一个重新排序的IP地址列表。这样，DNS会将请求的负载分配到不同的数据中心中。这是执行GSLB的方法。特别是，DNS使用轮询来执行负载平衡，如下所示：

- ISP 1的用户请求服务的IP地址
- DNS响应数据中心1的IP地址
- 用户发送请求到数据中心1
- ISP 1的用户在数据中心1中得到服务
- ISP 2的用户请求相同服务的DNS基础设施的IP地址
- DNS响应数据中心2的IP地址并执行GSLB
- 用户发送请求到数据中心2
- ISP 2的用户在数据中心2中得到服务
- ISP 3的用户请求相同服务的DNS基础设施的IP地址
- DNS响应数据中心3的IP地址并执行GSLB
- 用户发送请求到数据中心3
- ISP 3的用户在数据中心3中得到服务
- ISP 4的用户请求相同服务的DNS基础设施的IP地址
- DNS在轮询的方式下响应数据中心1的IP地址并执行GSLB
- 用户发送请求到数据中心1
- ISP 4的用户在数据中心1中得到服务

如上所示，DNS中的轮询将客户端严格地按顺序转发到数据中心。然而，轮询有以下限制：不同的ISP拥有不同数量的用户。为许多客户提供服务的ISP会向其客户提供相同的缓存IP，导致终端服务器的负载分配不均匀。由于轮询负载平衡算法不考虑任何终端服务器的崩溃，因此它会持续分配崩溃服务器的IP地址，直到缓存条目的TTL到期。在这种情况下，由于DNS级别的负载平衡，服务的可用性可能会受到影响。尽管轮询算法存在局限性，但仍然被许多DNS服务提供商广泛使用。此外，DNS使用短TTL的缓存条目，以在不同的数据中心之间实现有效的负载平衡。

> **注意：**DNS不是唯一的GSLB形式。应用交付控制器（ADC）和基于云的负载平衡（稍后将进行讨论）是进行GSLB更好的方式。

隐藏ADCs

应用交付控制器（ADC）是应用交付网络（ADN）的一部分。它们可以被认为是提供各种服务（包括负载平衡）的LB的超集。ADC的主要任务是执行Web加速，以减少来自服务器农场的负载。在3层和7层之间的一些众所周知的服务包括缓存、SSL卸载、代理/反向代理服务、IP流量优化等等。ADC还实现GSLB。

### 需要本地负载均衡器

DNS在平衡负载方面起着至关重要的作用，但它存在以下限制:

- DNS数据包的大小（512字节）不足以包含所有可能的服务器IP地址。
- 对客户端行为的控制有限。客户端可以任意选择收到的IP地址集中的一个。其中一些接收到的IP地址可能属于繁忙的数据中心。
- 客户端无法确定建立连接的最近地址。尽管DNS地理定位和类似任播的解决方案可以实现，但这些并不是微不足道的解决方案。
- 在发生故障时，通过DNS进行恢复可能会很慢，因为缓存机制，特别是当TTL值较长时。

为了解决上述问题，我们需要另一层负载均衡，即本地LB。在下一课中，我们将讨论有关本地负载均衡器的不同细节。

## 什么是本地负载均衡？

本地负载均衡器位于数据中心内。它们类似于反向代理，并尽力将传入请求分配给可用服务器池。传入客户端的请求无缝连接到使用虚拟IP地址（**VIP**）的LB。

思考问题

###### 问题

DNS是否可以被认为是全局服务器负载平衡器（GSLB）？

隐藏答案

是的，实际上有两种方法可以进行全局流量管理（GTM）：

**通过ADC执行GTM**：一些ADC实现了GSLB。在这种情况下，ADC具有托管服务器的实时视图，并根据数据中心的健康和容量转发请求。

**通过DNS执行GTM**：DNS通过分析客户端的IP位置来执行GSLB。对于请求域名的每个用户（例如[www.educative.io](http://www.educative.io/)），基于DNS的GSLB将转发到地理位置更接近请求IP位置的数据中心的IP地址。

在下一节中，我们将探讨本地负载均衡器的一些高级细节。