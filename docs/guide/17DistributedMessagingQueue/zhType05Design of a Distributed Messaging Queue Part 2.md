# 一个分布式消息队列的设计: 第二部分

了解消息队列的详细设计及其在后端服务器中的管理。

在上一课中，我们讨论了前端服务器和元数据服务的职责。在本课中，我们将重点关注存储队列和消息的主要设计部分：后端服务。

## 后端服务

这是架构的核心部分，其中进行了重大的活动。当前端接收到消息时，它会参考元数据服务来确定需要发送消息的主机。然后将消息转发到主机，并在相关主机上复制以克服可能存在的可用性问题。在不同主机的集群中复制消息可以使用以下两种模型之一来执行：

1. *主备模型*
2. *独立主机集群*

在深入探讨这些模型的细节之前，让我们讨论负责队列管理的两种类型的集群管理器: *内部*和*外部*集群管理器。这两个集群管理器的区别如下表所示。

## 内部与外部集群管理器的比较

| **内部集群管理器**                                          | **外部集群管理器**                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 它管理集群内队列的分配。                                     | 它管理跨集群的队列分配。                                     |
| 它了解集群中的每个节点。                                     | 它了解每个集群。但是，它没有有关集群中存在的每个主机的信息。 |
| 它听取来自每个节点的心跳。                                 | 它监视每个独立集群的健康状况。                             |
| 它管理主机故障，实例的添加和从集群中删除。                  | 它管理和利用集群。                                          |
| 它将队列分区成几个部分，每个部分都有一个主服务器。         | 它可以将队列分割到多个集群中，使相同队列的消息在多个集群之间平均分布。 |

### 主备模型

在**主备模型**中，每个节点都被视为一个队列集合的**主机**。主机的职责是接收特定队列的请求并完全负责数据复制。请求由前端接收，前端通过元数据服务与内部集群管理器通信以确定请求的主机。

例如，假设我们有两个标识为101和102的队列，分别驻留在四个不同的主机A、B、C和D上。在此示例中，实例B是队列101的主机，并且将队列101复制到的辅助主机是A和C。随着前端接收到的消息请求，它通过元数据服务从内部集群管理器中识别主服务器。消息从主实例中检索，主实例也负责在使用后删除原始消息及其所有副本。

如下图所示，内部集群管理器是负责主机、辅助主机和队列之间映射的组件。此外，它还有助于选择主机。因此，它需要可靠、可扩展和高性能。

![](/img/17-Distributed%20Messaging%20Queue/PrimarySecondaryModelOfDistributedQueue.png)

分布式队列的主从模型：接收具有ID 101的队列的请求，并相应地服务

### 独立主机集群

在**独立主机集群**中，每个主机都是独立的，无需使用主服务器或辅助服务器。在该模型中，消息复制是通过外部集群管理器来实现的。该管理器将队列消息分配给独立集群。由于每个主机都是独立的，因此这个模型较为灵活，能够扩展到更大的规模。但是，这种模型需要更复杂的管理和监控系统。

## 结论

在本课中，我们探讨了在分布式消息队列的设计中，关键的部分：后端服务的功能和实现方法。我们还比较了两种主要的消息复制模型：主备模型和独立主机集群模型。不同的模型有不同的优势和限制，需要根据实际情况做出选择。在涉及**独立主机群集**的方法中，我们有多个分布在数据中心的多个独立主机群集。当前端收到消息时，它通过外部集群管理器的元数据服务确定相应的群集。然后将消息转发到群集中的随机主机，该主机在队列存储的其他主机中复制消息。思考一下###### 问题随机主机如何在同一群集内的其他主机中复制数据-也就是队列中的消息？隐藏答案每个主机都由队列和群集内主机之间的映射组成，使复制更容易。假设我们拥有一个群集Y，其中包含主机A、B和C。该群集有两个存储在不同主机上的ID为101和103的队列，如下表所示。这张表在群集Y中的每个主机上都有存储。当随机主机接收到消息，例如主机C，对于ID为103的队列，主机C在存储队列103的其他主机上复制此消息，即节点A和节点B。![img](/img/17-Distributed%20Messaging%20Queue/nodeTable.png)类似的过程也适用于从消费者那里接收消息请求。与第一种方法类似，随机选择的主机负责在成功处理消息后进行消息传递和清除。此外，引入了另一个组件，称为外部群集管理器，该组件负责维护队列和群集之间的映射，如下图所示。外部群集管理器还负责队列管理和将群集分配给特定队列。以下图形图示了独立主机的群集。有两个群集A和B，它们由几个节点组成。外部群集管理器具有队列和其相应群集之间的映射表。每当前端接收到针对队列的请求时，它会确定队列的相应群集并将请求转发到队列所在的群集。该群集中的节点负责相应地存储和发送消息。![](/img/17-Distributed%20Messaging%20Queue/AClusterOfIndependentHosts.png)由分布式队列组成的独立主机群集思考一下###### 问题在复制到其他主机的消息中可能出现什么样的异常情况？隐藏答案在多个主机上驻留的队列中复制消息有两种方式。同步复制异步复制在同步复制中，主机负责在其他主机的所有相关队列中复制消息。在从辅助主机接收确认后，主机然后通知客户端消息的接收。在此方法中，消息在所有队列的副本中保持一致；然而，在选举将辅助机器提升为主机时，在通信中会带来额外的延迟并导致部分到不可用。在异步复制中，一旦主机接收到消息，它会向客户端发出确认，然后在下一步中开始在其他主机上复制消息。这种方法存在其他问题，例如复制滞后和一致性问题。根据应用程序的需求，我们可以选择其中之一。我们已经完成了分布式消息队列的设计，并讨论了组织后端服务器的两种模型。我们还描述了队列的管理过程以及如何在后端处理消息。此外，我们还讨论了如何通过不同的群集管理器管理后端服务器。在下一课中，我们将讨论系统如何满足本章中早期描述的功能和非功能要求。