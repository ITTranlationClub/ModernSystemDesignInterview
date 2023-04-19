---
icon: restfulFastRequest
title: CDN介绍
---


了解CDN，规范CDN设计要求。

## 建议解决方案

解决上一节讨论的所有问题的解决方案是**内容交付网络**(CDN)。CDN是一组地理分布的代理服务器。**代理服务器**是客户端和原始服务器之间的中间服务器。代理服务器放置在网络边缘。由于网络边缘靠近终端用户，代理服务器的放置有助于通过减少延迟和节省带宽快速将内容传递给终端用户。CDN在简单代理服务器上增加了智能。

我们可以通过在用户附近放置小型数据中心并在那里存储数据的副本来让数据靠近用户。CDN主要存储两种类型的数据：静态和动态。CDN主要通过将数据靠近其用户来解决传播延迟问题。CDN提供商在路径上提供足够的带宽，将数据靠近用户（可能在其ISP内）。他们还试图减少传输和排队延迟，因为ISP在自治系统内可能有更多的带宽可用。

让我们看看CDN解决讨论问题的不同方法：

- **高延迟**：CDN将内容靠近终端用户。因此，它减少了物理距离和延迟。

- **数据密集型应用程序**：由于连接到数据的路径仅包括ISP和附近CDN组件，因此在特定区域通过少量CDN组件为大量用户提供服务不会有问题。如下图所示，原始数据中心只需要向本地CDN组件提供数据一次，而本地CDN组件可以单独向不同的用户提供数据。没有用户必须从原始服务器下载自己的数据副本。

  ::: info

  **注意**：CDN提供商使用各种流媒体协议来交付动态内容。例如，CDNsun使用实时消息传输协议（RTMP）、HTTP实时流式传输协议（HLS）、实时流传输协议（RTSP）等等来交付动态内容。

  :::

- **数据中心资源匮乏**：CDN用于提供热门内容。由于这个原因，大多数流量是在CDN而不是原始服务器上处理的。所以，不同的本地或分布式CDN组件在原始服务器上共享负载。

  ![QQ截图20230408183942](/img/11-Content%20Delivery%20Network%20(CDN)/QQ%E6%88%AA%E5%9B%BE20230408183942.png)

  <center>内容向地理分布的CDN传播</center>

  ::: tip
  
  **注意**：一些著名的CDN提供商包括Akamai、StackPath、Cloudflare、Rackspace、Amazon CloudFront和Google Cloud CDN。
  
  :::

::: info

问题：

CDN是否缓存所有来自原始服务器的内容？

回答：

不太可能。CDN根据其能力缓存相当大比例的内容，大多数情况下缓存静态内容。

这也取决于内容的大小。例如，Netflix可能可以在CDN中存储超过90％的电影，而由于内容量巨大，对于像YouTube这样的服务可能不可行。

:::

## 要求

让我们看一下我们期望从CDN中获得的功能和非功能要求。

### 功能要求

以下功能要求将是我们设计的一部分：

- **检索**：根据CDN模型的类型，CDN应该能够从原始服务器检索内容。我们将在接下来的课程中涵盖CDN模型。
- **请求**：根据用户的请求从代理服务器交付内容。CDN代理服务器应该能够响应每个用户的请求。
- **交付**：在推模型的情况下，源服务器应该能够将内容发送到CDN代理服务器。
- **搜索**：CDN应该能够执行针对用户查询的搜索，以从CDN基础设施中缓存或存储其他存储的内容。
- **更新**：在大多数情况下，内容来自原始服务器，但如果我们在CDN中运行脚本，则CDN应能够在一个PoP中的对等CDN代理服务器内更新内容。
- **删除**：根据内容的类型（静态或动态），应该可以在一定时间后从CDN服务器中删除缓存条目。

![QQ截图20230408183957](/img/11-Content%20Delivery%20Network%20(CDN)/QQ%E6%88%AA%E5%9B%BE20230408183957.png)

<center>CDN的功能需求</center>

### 非功能需求

- **性能**：最小化延迟是CDN的核心使命之一，建议的设计应具有最小可能的延迟。
- **可用性**：由于其效果，人们期望CDN随时可用。可用性包括对抗DDoS等攻击的保护。
- **可扩展性**：越来越多的用户将从CDN请求内容。我们提议的CDN设计应能够随着要求的增加而水平扩展。
- **可靠性和安全性**：我们的CDN设计应确保没有单点故障。除了故障，设计的CDN必须可靠地处理大量的流量负载。此外，CDN应为托管的内容提供各种攻击的保护。

![QQ截图20230408184012](/img/11-Content%20Delivery%20Network%20(CDN)/QQ%E6%88%AA%E5%9B%BE20230408184012.png)

<center>CDN的非功能需求</center>

## 构建块我们将使用

CDN的设计利用以下构建块：

![QQ截图20230408184037](/img/11-Content%20Delivery%20Network%20(CDN)/QQ%E6%88%AA%E5%9B%BE20230408184037.png)

<center>CDN设计中使用的构建块</center>

- **DNS** 是将人性化的CDN域名映射到机器可读的IP地址的服务。该IP地址将带领用户前往指定的代理服务器。
- **负载均衡器** 将数百万个请求分布在运行中的代理服务器之间。

在下一课中，我们将讨论CDN的设计。