# CDN 简介

学习 CDN，并规范 CDN 设计要求。

## 提议解决方案

解决之前所有问题的方案是内容分发网络（CDN）。CDN 是一组地理分布式代理服务器。代理服务器是客户端和源服务器之间的中间服务器。代理服务器放置在网络边缘。由于网络边缘靠近终端用户，代理服务器的放置有助于通过减少延迟和节省带宽来快速将内容传递给终端用户。CDN 在成为简单代理服务器之外还增加了智能功能。

我们可以通过将小型数据中心放置在用户附近并在那里存储数据副本来将数据靠近用户。CDN 主要存储两种类型的数据：静态数据和动态数据。CDN 主要通过将数据靠近用户来解决传播延迟。CDN 提供商努力确保路径上有足够的带宽，并将数据靠近用户（可能在其 ISP 内）。他们也试图减少传输和排队延迟，因为 ISP 可能在自治系统内有更多可用的带宽。

让我们看看 CDN 解决讨论问题的不同方法：

- **高延迟**：CDN 将内容靠近终端用户。因此，它减少了物理距离和延迟。
- **数据密集型应用程序**：由于到达数据的路径仅包括 ISP 和附近的 CDN 组件，因此通过一些特定区域的少量 CDN 组件为大量用户提供服务没有问题。如下所示，源数据中心仅需要向本地 CDN 组件提供数据一次，而本地 CDN 组件可以为不同的用户单独提供数据。没有用户必须从原始服务器下载自己的数据副本。

  > **注意**：CDN 提供商使用各种流媒体协议来交付动态内容。例如，CDNsun 使用实时消息传递协议（RTMP）、HTTP 实时流（HLS）、实时流协议（RTSP）等等来传递动态内容。

- **数据中心资源短缺**：CDN 用于提供流行的内容。由于这个原因，大部分的流量都由 CDN 而不是源服务器处理。因此，不同的本地或分布式 CDN 组件共享负载在源服务器上。

![QQ截图20230408183942](/img/11-Content Delivery Network (CDN)/QQ截图20230408183942.png)

向地理分布式 CDN 传播内容

> **注意**：一些知名的 CDN 提供商是 Akamai、StackPath、Cloudflare、Rackspace、Amazon CloudFront 和 Google Cloud CDN。

### 考虑问题

###### 问题

CDN 是否缓存从源服务器获取的所有内容？

隐藏答案

不太可能。CDN 根据其能力缓存相当大的一部分内容，而且它主要缓存静态内容。

它还取决于内容的大小。例如，Netflix 可能将其 90% 以上的电影存储在 CDN 中，而 YouTube 这样的服务可能由于内容体积巨大而难以实现。

## 需求

让我们看看我们期望从 CDN 中获得的功能和非功能需求。

### 功能需求

以下功能需求将是我们设计的一部分：

- **检索**：根据 CDN 模型的类型，CDN 应能够从源服务器检索内容。我们将在接下来的课程中介绍 CDN 模型。
- **请求**：代理服务器将根据用户的请求传递内容。CDN 代理服务器应能够响应每个用户的请求。
- **提供**：在推模式下，源服务器应能够将内容发送到 CDN 代理服务器。
- **搜索**：CDN 应能够对用户对 CDN 基础设施中缓存或其他存储的内容执行搜索。## CDN的功能需求

### 非功能需求

- **性能**：最小化延迟是CDN的主要任务之一。所提出的设计应具有最小可能的延迟。

- **可用性**：由于其高效性，人们期望CDN始终可用。可用性包括对抗DDoS等攻击的保护。

- **可扩展性**：越来越多的用户将从CDN请求内容。我们所提出的CDN设计应该能够在要求增加时进行水平扩展。

- **可靠性和安全性**：我们的CDN设计应确保没有单点故障。除了故障之外，设计的CDN必须可靠地处理大量的流量负载。此外，CDN应为托管的内容提供各种攻击的保护。

### 建设块

CDN的设计利用以下构建块：

![QQ截图20230408184037](/img/11-Content Delivery Network (CDN)/QQ截图20230408184037.png)

CDN设计中使用的构建块

- **[DNS](https://www.educative.io/collection/page/10370001/4941429335392256/5728619204182016)**是将人类友好的CDN域名映射到机器可读IP地址的服务。这个IP地址将带领用户到指定的代理服务器。

- **[负载均衡器](https://www.educative.io/collection/page/10370001/4941429335392256/4521972679049216)**在数百万个请求之间分配操作代理服务器。

### 更新和删除内容

- **更新**：在大多数情况下，内容来自原始服务器，但如果我们在CDN中运行脚本，则CDN应该能够在PoP的同行CDN代理服务器中更新内容。

- **删除**：根据内容的类型（静态或动态），应该可以在一定时间后从CDN服务器中删除缓存的条目。

![QQ截图20230408183957](/img/11-Content Delivery Network (CDN)/QQ截图20230408183957.png)

## CDN的非功能需求

### 非功能需求

- **性能**：最小化延迟是CDN的主要任务之一。所提出的设计应具有最小可能的延迟。

- **可用性**：由于其高效性，人们期望CDN始终可用。可用性包括对抗DDoS等攻击的保护。

- **可扩展性**：越来越多的用户将从CDN请求内容。我们所提出的CDN设计应该能够在要求增加时进行水平扩展。

- **可靠性和安全性**：我们的CDN设计应确保没有单点故障。除了故障之外，设计的CDN必须可靠地处理大量的流量负载。此外，CDN应为托管的内容提供各种攻击的保护。

![QQ截图20230408184012](/img/11-Content Delivery Network (CDN)/QQ截图20230408184012.png)

### 我们将使用的建设块

CDN的设计利用以下构建块：

![QQ截图20230408184037](/img/11-Content Delivery Network (CDN)/QQ截图20230408184037.png)

CDN设计中使用的构建块

- **[DNS](https://www.educative.io/collection/page/10370001/4941429335392256/5728619204182016)**是将人类友好的CDN域名映射到机器可读IP地址的服务。这个IP地址将带领用户到指定的代理服务器。

- **[负载均衡器](https://www.educative.io/collection/page/10370001/4941429335392256/4521972679049216)**在数百万个请求之间分配操作代理服务器。

在下一课中，我们将讨论CDN的设计。