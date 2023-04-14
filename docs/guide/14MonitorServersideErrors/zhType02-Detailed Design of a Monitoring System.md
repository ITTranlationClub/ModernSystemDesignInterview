To extract relevant information from the time-series database, we need a query service. We’ll use Prometheus as our query service. We’ll also integrate our Prometheus instance with the Grafana dashboard, which will allow us to visualize and analyze our metrics data. Grafana has an excellent variety of pre-built widgets and dashboards that can help us monitor our system’s status and performance.

Let’s add the query service to our design.

![QQ截图20230408201041](/img/14-Monitor Server-side Errors/QQ截图20230408201041.png)

Adding the query service

## Alerts

Our monitoring system’s ultimate goal is to inform us of any abnormalities in our system’s behaviors, such as threshold crossings, abnormal error rates, and service unavailability. To accomplish this, we’ll use Prometheus’ alerting functionality. Prometheus provides an expression language to define alert rules. When a rule matches, Prometheus sends a notification to the configured alert receivers.

We must configure some alert receipients to inform them of the system’s abnormalities. We can choose between popular notification systems like Slack, PagerDuty, and VictorOps. The popular choice for new systems is Slack.

We need to introduce our newly identified component to our existing design that will send the necessary alerts.

![QQ截图20230408201053](/img/14-Monitor Server-side Errors/QQ截图20230408201053.png)

Adding alert receivers

## Shortcomings

Our design has several shortcomings:

- If our pull-based metric collection approach causes any issues with data inconsistency, we’ll have to pull data for a longer period.

- Our system requires a considerable amount of storage to save metrics’ historical data.

- Our system requires more network bandwidth to transfer metrics data to the storage server.

## Improvements

We can improve our design by:

- Adding logging functionality to manage requirements of our data collector and monitoring the changes.

- Adding a logging agent that runs in the service process and collects data regularly.

- Implementing disk storage for our time-series database to avoid data inconsistency.

- Using a caching mechanism to reduce the amount of data we need to transfer to our storage server, thereby reducing network traffic.

- Using a push-based solution, which will minimize network traffic and workload on the infrastructure.

- Using cloud storage solutions for metrics data storage to reduce the storage costs.

# Conclusion

We have discussed the detailed design steps for creating a monitoring system. We identified the shortcomings of our initial design and provided several improvements to it. A monitoring system is a critical component of any production environment, and it deserves significant consideration and attention to detail.我们需要一个服务来访问数据库并获取相关的查询结果。我们需要这个服务是因为我们想查看错误，如特定节点的内存使用值，或者在指标超过设定限制时发送警报。让我们添加两个我们需要的组件以及查询功能。### 警报管理器警报管理器负责在违反设定规则时发送警报。它可以发送电子邮件、Slack消息等警报。### 仪表盘我们可以使用收集的指标来设置仪表板以显示所需信息，例如当前周的请求数。让我们添加上述组件，完成监控系统的设计。![QQ截图20230408201043](/img/14-Monitor Server-side Errors/QQ截图20230408201043.png)监控系统的详细设计我们的全方位监控服务适用于主动追踪系统和服务。它收集并存储数据，并支持搜索、图表和警报。## 优点- 我们的监控服务的设计确保操作的顺畅运行，并监控潜在问题的迹象。- 我们的设计避免了过度加载网络流量，通过获取数据本身来完成。- 监控服务提供更高的可用性。## 缺点- 系统似乎是可扩展的，但管理更多的服务器以进行监控可能会成为一个问题。例如，我们有一个专用服务器负责运行监控服务。它可能是一个单点故障（SPOF）。为了解决SPOF，我们可以针对监控系统设置故障转移服务器。然后，我们还需要在实际服务器和故障转移服务器之间保持一致性。然而，这样的设计也会达到可扩展性的上限，随着服务器数量的进一步增加。- 监控会收集大量数据24/7，将其永久保存可能不可行。我们需要一个政策和机制来定期删除不需要的数据，以有效利用资源。让我们想一种方法来解决监控服务的问题。## 改进我们的设计我们想改进我们的设计，使我们的系统可以更好地扩展并决定要保留什么数据和删除什么数据。让我们看看推送式方法是如何工作的。在推送式方法中，应用程序将其数据推送到监控系统。![QQ截图20230408201059](/img/14-Monitor Server-side Errors/QQ截图20230408201059.png)推送式监控系统我们使用了拉取式策略来避免网络拥堵。这也使应用程序可以摆脱必须将相关监控数据发送到系统的方面。相反，监控系统自己获取或拉取数据。为了满足扩展需求，我们需要应用推送式方法。我们将使用混合方法，将我们的拉取式策略与推送式策略相结合。我们将继续在数据中心内的多个服务器中使用拉取式策略。我们还将分配多个监视器服务器来监视数据中心内的数百或数千个服务器，比如一个服务器监视5,000个服务器。我们将称它们为辅助监视器服务器。现在，我们将应用推送式策略。辅助监视系统将其数据推送到一个主数据中心服务器。主数据中心服务器将其数据推送到负责检查全球数据中心的全局监控服务。我们将使用Blob存储来存储过多的数据，应用Elastic Search，使用可视化程序查看相关统计信息。随着我们的服务器或数据中心的增加，我们将添加更多的监控系统。其设计如下。> **注意**: 在系统设计中，使用层次结构系统的设计模式是常见的。通过在层次结构中增加节点或引入额外的层次，我们能够根据当前需求进行扩展。![QQ截图20230408201113](/img/14-Monitor Server-side Errors/QQ截图20230408201113.png)监控系统从多个服务器获取数据，然后将数据推送到数据中心监控系统![QQ截图20230408201125](/img/14-Monitor Server-side Errors/QQ截图20230408201125.png)然后，数据中心监控系统将数据推送到全局监控系统。

思考点

######问题1

如果本地或全局监控系统崩溃会发生什么？

隐藏回答

我们可以将数据存储在本地并等待系统重新运行。但是，本地数据存储有限。因此，我们要么删除以前的数据，要么不存储新的数据。要做出决策，需要创建相关策略。

######问题2

如果一个监控系统使用了它应该监视的数据中心中的相同基础设施，它将如何可靠地工作？考虑到数据中心网络的故障会使监控组件失效。

隐藏回答

监控系统的实际部署需要特殊的关注。我们可能有一个专门用于监控的内部网络，以隔离它与常规网络。我们应该使用独立的Blob存储等服务的实例。

还有一个帮助监控的外部组件，外部可能意味着独立的服务提供商的基础设施。不过，设计这样的系统是复杂的，而且更昂贵。

人类需要消耗大量的数据，即使是各种数据摘要之后，数据仍然可能非常庞大。接下来，我们将探讨如何向人类管理员展示海量数据。