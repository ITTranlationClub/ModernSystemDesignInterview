---
icon: faq
title: 现代系统设计的构建块介绍
---


学习如何像使用乐高积木一样，使用系统设计构建块来制作更大、更有魅力的作品。

## 先底向上的现代系统设计方法

系统设计问题通常存在一些相似性，尽管具体细节通常是独特的。我们将这些设计问题的相似之处提取出来，作为我们将要涵盖的基本*构建块*。其中一个构建块的例子是负载均衡组件，在每个设计问题中我们可能以某种方式使用。

将构建块分离的目的是为了彻底讨论它们的设计。这意味着后面我们可以在任何地方使用它们，而不必再次详细介绍。我们可以将构建块视为构建更有效、更有能力系统的砖块。

我们讨论的许多构建块也可用于实际使用的公共云，例如Amazon Web Services（AWS）、Azure和Google Cloud Platform（GCP）。我们可以使用这些结构来构建一个系统，以进一步巩固我们的理解。(我们不会在本课程中构建该系统，但我们已将其留给有兴趣的学习者作为练习。)

![搜狗截图20230406202441](/img/06-Building%20Blocks/%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20230406202441.png)

使用构建块来设计系统的先底向上方法

我们将详细讨论以下构建块：

1. **域名系统：** 这个构建块侧重于如何为连接到Internet的计算机设计分层和分布式命名系统，通过不同的Internet协议进行连接。
1. **负载均衡器：** 在这里，我们将了解负载均衡器的设计，它用于在可用服务器池中公平分配传入客户端的请求。它还减轻负载并可以绕过失败的服务器。
1. **数据库：** 这个构建块使我们能够以不同的数据处理程序连接存储、检索、修改和删除数据。在这里，我们将讨论数据库类型、复制、分区以及分布式数据库的分析。
1. **键值存储：** 它是一种非关系数据库，以键值对的形式存储数据。在这里，我们将解释键值存储的设计以及重要概念，如实现可扩展性、耐久性和可配置性。
1. **内容分发网络：** 在本章中，我们将设计一个内容分发网络（CDN），用于保留像视频、图像、音频和网页这样的病毒性内容。它有效地向终端用户传递内容，减少延迟和数据中心的负担。
1. **序列号生成器：** 在这个构建块中，我们将重点关注唯一的ID生成器的设计，主要关注保持因果关系。它还解释了生成唯一ID的三种不同方法。
1. **服务监控：** 监控系统在分布式系统中至关重要，因为它们有助于分析系统并在问题发生时通知相关方。监视通常很有用，因为它可以提前警告系统管理员，以便在可能成为严重问题之前就采取行动。在这里，我们将建立两个监视系统，一个用于服务器端，另一个用于客户端错误。
1. **分布式缓存：** 在这个构建块中，我们将设计一个分布式缓存系统，多个缓存服务器协调存储频繁访问的数据。
1. **分布式消息队列：** 在这个构建块中，我们将重点关注由多个服务器组成的队列的设计，它用于生产者和消费者之间的交互。 它有助于将生产者和消费者解耦，产生独立的可伸缩性，并增强可靠性。
1. **发布订阅系统：** 在这个构建块中，我们将重点关注一种称为发布-订阅系统的异步服务之间通信方法。它在无服务器、微服务体系结构和数据处理系统中很受欢迎。
1. **速率限制器(Rate Limiter):** 在这里，我们将设计一个系统，根据预定限制来限制服务的传入请求。这通常作为服务的防御层使用，以避免它们被过度使用-无论预期或意外的情况。
1. **Blob存储(Blob Store):** 这个构建块专注于无结构数据的存储解决方案-例如，多媒体文件和二进制可执行文件。
1. **分布式搜索(Distributed Search):** 搜索系统会从用户处获取一个查询并在几秒钟内返回相关内容。该构建块专注于三个组成部分: 爬虫、索引和搜索。
1. **分布式日志(Distributed Logging):** 日志记录是一个I/O密集型的操作，耗时且缓慢。在这里，我们将设计一个系统，让分布式系统中的服务能够高效地记录他们的事件。该系统将具有可扩展性和可靠性。
1. **分布式任务调度(Distributed Task Scheduling):** 我们将设计一个分布式任务调度系统，它在任务和资源之间进行中介。它会智能地分配资源以满足任务级和系统级目标。它经常用于将后台处理异步完成。
1. **分片计数器(Sharded Counters):** 这个构建块展示了一个高效的分布式计数系统，可处理数百万个并发的读/写请求，例如名人推文上的点赞。

我们已将构建块拓扑排序，这样依赖于其他构建块的构建块就会在后面。

## 约定

为了阐述问题，我们将在设计每个构建块（和设计问题）时使用“要求”部分。在“要求”部分中，我们将强调我们期望开发设计的可交付内容。 “要求”将有两个子类：

1. **功能需求(Functional requirements):** 这些代表设计系统的用户可以使用的功能。例如，系统将允许用户使用搜索栏搜索内容。

2. **非功能需求(Non-functional requirements, NFRs):** 非功能需求基于用户将考虑系统可用性的标准。NFR可能包括高可用性、低延迟、可扩展性等需求。

让我们开始设计我们的构建块。