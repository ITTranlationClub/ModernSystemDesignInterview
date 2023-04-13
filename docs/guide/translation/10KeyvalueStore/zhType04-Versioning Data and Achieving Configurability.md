# 版本控制数据与实现可配置性

学习如何通过版本控制解决冲突以及如何将键值存储转变为可配置服务。

## 数据版本控制

当更新过程中出现网络分区和节点故障时，对象的版本历史可能变得不连续。因此，需要在系统上明确接受相同数据的多个副本，以避免任何更新丢失。必须认识到，某些故障场景可能导致系统中存在相同数据的多个副本。因此，这些副本可能相同也可能不同。解决这些差异历史之间的冲突对于一致性至关重要和关键。

![](/img/10-Key-value Store/QQ截图20230408182005.png)

两个节点处理请求时复制它们的数据

为了处理不一致性，需要维护事件之间的因果关系。我们可以使用时间戳来实现这一点，并使用最新请求的值更新所有冲突值。但是，在分布式系统中，时间不可靠，因此我们不能将其作为决定因素。

另一种有效维护因果关系的方法是使用向量时钟。**向量时钟**是一组（节点，计数器）对的列表。每个对象版本都有一个向量时钟。如果两个对象有不同的向量时钟，则我们可以判断它们是否存在因果关系（稍后会详细介绍）。除非两个修改经过调解，否则它们被认为是不一致的。

### 修改API设计

我们已经讨论了如何使用向量时钟值判断两个事件是否存在因果关系。为此，我们需要有关谁在之前执行了操作以及其向量时钟值的节点的信息。这是操作的上下文。因此，我们将修改我们的API设计如下。

获取值的API调用应如下所示：

```
get(key)
```

| **参数** | **说明**                                                     |
| -------- | ------------------------------------------------------------ |
| `key`    | 这是我们要获取`value`的`key`。 |

我们返回一个对象或一组冲突对象以及它们的`context`。`context`包含有关对象的元数据，包括对象的版本信息。

将值放入系统的API调用应如下所示：

```
put(key, context, value)
```

| **参数** | **说明**                                                     |
| -------- | ------------------------------------------------------------ |
| `key`    | 这是我们要存储`value`的`key`。                           |
| `context`| 这包含每个对象的元数据。                              |
| `value`  | 这是需要存储在`key`下的对象。                         |

该函数根据`key`找到值应放置的节点，并将与之关联的值存储起来。`context`在`get`操作之后由系统返回。如果我们在`context`中有一系列对象引发冲突，我们将要求客户端解决它。

要在键值存储中更新对象，客户端必须提供`context`。我们使用向量时钟来确定版本信息，通过提供先前读取操作的`context`来提供版本信息。如果键值存储有多个分支，则在处理读取请求时，提供所有叶节点的对象以及它们各自的版本信息。将不同版本进行调解并将它们合并为单个新版本被视为更新。> **注意**: 解决冲突的这个过程类似于Git中的解决方式。如果Git能够将多个版本合并为一个，那么就会自动执行合并操作。如果自动冲突解决不可能，那么就由客户端（开发人员）手动解决冲突。同样地，我们的系统可以尝试自动冲突解决，如果无法自动解决，则会要求应用程序提供最终解决方案。### 向量时钟使用示例![QQ截图20230408182234](/img/10-Key-value Store/QQ截图20230408182234.png)![QQ截图20230408182027](/img/10-Key-value Store/QQ截图20230408182027.png)### 向量时钟限制的妥协如果多个服务器同时写入同一对象，则向量时钟的大小可能会增加。在实践中，这种情况不太可能发生，因为写入通常由首选项列表中前*n*个节点之一处理。![QQ截图20230408182343](/img/10-Key-value Store/QQ截图20230408182343.png)在这些情况下，我们可以限制向量时钟的大小。我们采用截断时钟策略，在每个（节点，计数器）对旁边存储一个时间戳，以显示节点上次更新数据项的时间。当（节点，计数器）对的数量超过预定的阈值（假设为10）时，向量时钟对将被清除。由于子孙链接无法精确计算，这种截断方法可能导致协调效率不高。## `get` 和 `put` 操作之一我们的功能要求之一是系统应该是可配置的。我们希望通过实现键-值存储的基本`get`和`put`函数来控制可用性、一致性、成本效益和性能之间的权衡。我们的系统中每个节点都可以处理`get`（读）和`put`（写）操作。处理读或写操作的节点称为**协调器**。协调器是首选项列表中前*n*个节点中的第一个节点。客户端可以有两种选择节点的方式：- 我们将请求路由到通用的负载均衡器。- 我们使用分区感知的客户端库，直接将请求路由到适当的协调器节点。这两种方法都有其好处。第一种方法中，客户端没有与代码相关联，而第二种方法可以实现降低延迟。由于客户端可以直接转到特定的服务器，所以延迟较低。通过使用类似于仲裁系统中使用的一致性协议，我们可以使我们的服务可配置化。我们来举个例子。假设首选项列表中前*n*个节点的*n*等于33。这意味着需要维护数据的三个副本。我们假设节点放置在一个环上。如果在节点A上执行写函数，则该数据的副本将放置在B和C上。这是因为在环的顺时针方向上移动时，B和C是下一个节点。## *r* 和 *w* 的使用现在，我们考虑两个变量，*r*和*w*。*r*表示需要参与成功读取操作的最小节点数，而*w*则是需要参与成功写操作的最小节点数。因此，如果*r*=2，这意味着当我们在三个节点中存储数据时，我们的系统将从两个节点读取。我们需要选择*r*和*w*的值，使其至少有一个节点在它们之间是共同的。这确保了读者可以获得最新写入的值。为此，我们将使用类似于仲裁系统的系统，通过设置*r*+*w*>*n*来设置。下表概述了*n*、*r*和*w*的值如何影响读和写的速度。## 值对读写速度的影响| **n** | **r** | **w** | **描述**                                              || ----- | ----- | ----- | ------------------------------------------------------------ |
| 3     | 2     | 1     | It won't be allowed as it violates our constraint *r + w > n* . |
| 3     | 2     | 2     | It will be allowed as it fulfills constraints.               |
| 3     | 3     | 1     | It will provide speedy writes and slower reads since readers need to go to all *n* replicas for a value. |
| 3     | 1     | 3     | It will provide speedy reads from any node but slow writes since we now need to write to all *n* nodes synchronously. |

Let’s say *n*=3, which means we have three nodes where the data is copied to. Now, for *w*=2, the operation makes sure to write in two nodes to make this request successful. For the third node, the data is updated asynchronously.

![QQ截图20230408182052](/img/10-Key-value Store/QQ截图20230408182052.png)

In this model, the latency of a `get()` operation is decided by the slowest of the *r* replicas. The reason is that for the larger value of *r*, we focus more on availability and compromise consistency.

The coordinator produces the vector clock for the new version and writes the new version locally upon receiving a `put()` request for a key. The coordinator sends *n* highest-ranking nodes with the updated version and a new vector clock. We consider a write successful if at least *w*−1 nodes respond. Remember that the coordinator writes to itself first, so we get *w* writes in total.

Requests for a `get()` operation are made to the *n* highest-ranked reachable nodes in a preference list for a key. They wait for *r* answers before returning the results to the client. Coordinators return all dataset versions that they regard as unrelated if they get several datasets from the same source (divergent histories that need reconciliation). The conflicting versions are then merged, and the resulting key’s value is rewritten to override the previous versions.

By now, we’ve fulfilled the scalability, availability, conflict-resolution, and configurable service requirements. The last requirement is to have a fault-tolerant system. Let’s discuss how we’ll achieve it in the next lesson.