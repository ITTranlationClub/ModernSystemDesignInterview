---
icon: teamwork
title: 系统设计：分布式监控
---


了解在分布式系统中监控的重要性，并探索我们设计它的高级计划。

## 监控

现代经济依赖于IT基础设施的持续运作。这种基础设施包含硬件、分布式服务和网络资源。这些组件在这样的基础设施中相互关联，使得保持一切平稳运行且无应用程序停机时间变得具有挑战性。

找出问题

当我们的基础设施分布在多个位置并包含许多服务器时，要知道硬件或应用程序级别上正在发生什么是具有挑战性的。在这样的基础设施中，组件可能遇到故障、响应延迟过大、超载或不可达的硬件，以及容器资源不足等等问题。多个服务在这样的基础设施中运行，任何事情都可能出错。

当其中一个服务停止运行时，可能是其他服务崩溃的原因，因此应用程序对用户不可用。如果我们无法及早了解问题所在，手动调试系统可能需要很长时间和大量精力。此外，对于较大的服务，我们需要确保我们的服务在约定的服务级别协议内运行。我们需要捕获即将发生故障的重要趋势和信号作为早期警报，以便可以解决任何关注或问题。

监控有助于分析这种常常会出现故障的复杂基础设施。监控分布式系统意味着收集、解释和显示关于同时运行的进程之间相互作用的数据。它协助调试、测试、性能评估，并提供对多个服务的鸟瞰视图。

## 我们将如何设计分布式监控系统？

我们将分布式监控系统的设计分为以下章节和课程：

* 分布式监控
  * **分布式监控介绍**：了解为什么在分布式系统中进行监控至关重要，停机成本有多大，以及监控类型。
  * **监控系统的先决条件**：探索监控系统中关于度量和警报的一些基本概念。

* 监控服务器端错误
  * **设计监控系统**：定义监控系统的要求和高级设计。
  * **监控系统的详细设计**：深入探讨设计监控系统的细节，并探索涉及的组件。
  * **在监控系统中可视化数据**：学习一种独特的方式来可视化大量监控数据。

* 监控客户端错误
  * **专注于客户端错误**：介绍客户端错误及其重要性。
  * **设计客户端监控系统**：学习设计监控客户端错误的系统。

在下一课中，我们将通过一个示例看看为什么在分布式系统中监控很重要。我们还将查看故障停机成本和监控类型。

