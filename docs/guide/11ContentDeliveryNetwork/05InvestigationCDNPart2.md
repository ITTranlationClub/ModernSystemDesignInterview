---
icon: whats-new
title: CDN的深入研究：第二部分
---


学习内容一致性机制和CDN代理服务器的部署。

在这一课程中，我们将学习如何使用不同的一致性机制实现内容一致性。我们还将学习在哪里部署代理服务器以及CDN作为服务和专门的CDN之间的区别。

## CDN中的内容一致性

代理服务器中的数据应该与源服务器中的数据保持一致。如果代理服务器与源服务器不一致，用户将始终面临访问旧数据的风险。不同的一致性机制可以用于确保数据的一致性，这取决于推送或拉取模型。

### 定期轮询

使用拉模型，代理服务器定期请求原始服务器以获取更新的数据，并相应地更改缓存中的内容。当内容变化不频繁时，轮询方法会消耗不必要的带宽。定期轮询使用**到期时间（TTR）**来调整请求更新数据的时间周期。

### 生存时间（TTL）

由于TTR，代理服务器可能会错误地请求更新的数据。可以使用更好的方法来减少刷新消息的频率，称为**生存时间（TTL）**方法。在这种方法中，每个对象由源服务器分配一个TTL属性。TTL定义内容的过期时间。代理服务器向用户提供相同的数据版本，直到该内容过期。到期后，代理服务器将从原始服务器检查更新。如果数据发生更改，则获取更新的数据并将其响应给用户。否则，它将保持相同的数据，并从原始服务器获取更新的到期时间。

### 租赁

使用此技术，源服务器向发送到代理服务器的数据授予租约。 **租约**表示源服务器同意在指定的时间间隔内通知代理服务器是否更改了数据。在租期过期后，代理服务器必须发送消息请求租约续订。租约方法有助于减少代理和源服务器之间交换的消息数量。此外，租赁持续时间可以根据观察到的代理服务器负载进行动态优化。这种技术称为**自适应租赁**。

在下一节中，我们将讨论在哪里放置CDN代理服务器以有效地传输数据。

## 部署

在安装CDN设施之前，我们必须清楚地回答以下问题：

- 安置代理服务器的最佳位置以最大程度地利用CDN技术是什么？
- 我们应该安装多少个CDN代理服务器？

### CDN代理服务器的安置

CDN代理服务器必须放置在连接良好的网络位置。有以下选项：

- **本地**表示可以放置在主要IXP附近的较小数据中心。
- **异地**表示将CDN代理服务器放置在ISP的网络中。

今天，将电影的大部分数据保留在ISP内部的CDN基础设施中可能是可行的。但是，对于像YouTube这样的服务，数据非常大且不断扩展，很难确定我们应该把什么放在用户附近。谷歌使用拆分TCP来通过保持从IXP级别基础架构到它们的主要数据中心具有巨大TCP窗口的持久连接来减少用户感知的延迟。客户端的TCP请求在IXP级别基础设施处终止，然后通过已建立的低延迟TCP连接转发。## 使用IXP的CDN代理服务器优势

这样做可以大大减少客户端感知到的延迟，这是由于避免了TCP连接的初始三次握手和慢启动阶段，以及与远程主机（如果客户端想去Google的主数据中心）的通信。与IXP的往返延迟通常非常低，因此，在那个级别上进行的三次握手和慢启动是可以忽略不计的。**预测性推送**是一个重要的研究领域，用于决定何时将内容推近客户附近。

我们可以使用测量来促进代理服务器放置的决策，其中一个工具是**ProxyTeller**，用于决定在何处放置代理服务器以及需要多少代理服务器才能实现高性能。ProxyTeller使用命中率、网络带宽和客户端响应时间（延迟）作为性能参数来决定代理服务器的放置。其他贪心、随机和热点算法也用于代理服务器的放置。

::: tip

Akamai和Netflix流行化了将CDN代理服务器放置在客户端ISP内部的想法。对于Akamai的许多客户而言，内容只需要一个网络跳跃。另一方面，Google还拥有自己的私有CDN基础设施，但更多地依赖于其靠近IXP的服务器。其中一个原因可能是所涉及的数据量和变化模式。

:::

::: danger

问题：

什么好处能让ISP在其网络中放置CDN代理服务器？

答案：

* CDN节点可减少ISP需要和支付的外部带宽。ISP与代理服务器提供商定义的服务级别协议可能从经济上使ISP受益。
* CDN节点改善了ISP客户的响应能力，使ISP客户更加满意。这使他们比没有CDN节点的ISP具有竞争优势。
* 将内容靠近用户可减少互联网核心上的数据。
:::

## CDN作为服务

大多数公司不会建立自己的CDN。相反，它们使用CDN提供商（如Akamai、Cloudflare、Fastly等）的服务来传输其内容。类似地，像AWS这样的公司让任何人都可以使用全球CDN设施。

公司与CDN服务提供商签订合同，将其内容传递到CDN，从而允许CDN将内容分发给最终用户。公共CDN引起了内容提供商以下注意事项：

- 如果公共CDN挂了，内容提供商就无能为力。
- 如果公共CDN在一些网站流量来源的地区或国家没有任何代理服务器，则这些特定的客户将会很遗憾。在这种情况下，内容提供商必须从其他CDN提供商购买CDN服务或部署并使用自己的私有CDN。
- 某些CDN提供商的域名或IP地址可能被某些国家屏蔽或限制，因为它们可能提供被这些国家禁止的内容。

::: info

一些公司制作了自己的CDN，而没有使用CDN提供商的服务。例如，Netflix拥有一个名为**Open Connect**的专门构建的CDN。

:::

## 专用CDN

我们已经讨论了许多公司使用CDN作为服务的情况，但也有一些情况下公司会建立自己的CDN。有很多原因导致这种决定。其中一个是商用CDN服务的成本。专用CDN由仅为其自己公司提供内容的商业点（PoP）组成。这些PoP可以是缓存服务器、反向代理或应用程序交付控制器。尽管专用CDN在第一次设置时成本高昂，但是随着时间的推移，成本会逐渐降低。本质上，这是一个买还是建造的决策。

专用CDN的PoPs由许多代理服务器组成，以提供PB级内容服务。私有CDN可以与公共CDN共存。如果私有CDN的容量不足或存在导致容量降低的故障，则使用公共CDN作为备份。Netflix的 **Open Connect Appliance（OCA）** 是一种专门用于视频传输的CDN示例。

Netflix的OCA服务器不存储用户数据。相反，它们执行以下任务：

- 它们向AWS（Amazon Web Services）中的Open Connect控制平面报告其状态（健康状况，学习路线和缓存内容的详细信息）。
- 它们服务器用户请求的缓存内容。

![QQ截图20230408190153](/img/11-Content%20Delivery%20Network%20(CDN)/QQ%E6%88%AA%E5%9B%BE20230408190153.png)

<center>Netflix的Open Connect Appliances</center>

位于IXP或嵌入到ISP网络中的所有部署的OCA都由Open Connect运营团队进行监视。

### Netflix为什么要建立自己的CDN

随着Netflix变得越来越受欢迎，它决定出于以下原因建立和管理自己的CDN：
- 由于Netflix客户对视频流的快速增长，CDN服务提供商正在努力扩展其基础设施。
- 随着流媒体视频数量的不断增加，使用CDN服务的成本也在增加。
- 媒体流是Netflix的主要业务和主要收入来源。因此，保护平台上所有视频数据的安全至关重要。Netflix的OCA可以更好地管理潜在的数据泄漏风险。
- 为了为客户提供最佳的流媒体传输体验，Netflix需要最大限度地控制用户的视频播放器、用户和Netflix服务器之间的网络。
- Netflix的OCA可以使用自定义HTTP模块和TCP连接算法，快速检测网络问题并解决其CDN网络中出现的任何问题。
- Netflix希望长时间保留受欢迎的内容。在与公共CDN一起运作时，这并非完全可行，这是因为保留和维护它可能会产生高昂的费用。

::: info

注意:Netflix使用OCA可以实现接近95％的命中率。

:::

接下来我们将在下一课中评估我们提出的设计。