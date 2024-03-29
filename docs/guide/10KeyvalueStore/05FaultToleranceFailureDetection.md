---
icon: featuresNew
title: 启用容错和故障检测
---


学习如何使键值存储容错并能够检测故障。

## 处理临时故障

通常，分布式系统使用基于仲裁的方法来处理故障。仲裁是在分布式事务中所需的最小投票数，以执行操作。

如果一个服务器是仲裁的一部分且已宕机，则我们无法执行所需的操作。这会影响系统的可用性和耐久性。

我们将使用松散仲裁（sloppy quorum）代替严格仲裁成员资格。

通常，领导者管理共识参与者之间的通信。参与者在提交成功的写入后发送确认。在接收这些确认后，领导者会响应客户端。

然而，这种方法的缺点是参与者容易受到网络中断的影响。如果领导者暂时失效且参与者无法联系到它，它们将宣布领导者已死亡。

现在，必须重新选举新的领导者。这样频繁的选举会对性能产生负面影响，因为系统花费更多的时间来选择领导者而不是完成任何实际的工作。

在松散仲裁中，优先列表中前 *n* 个健康节点处理所有读写操作。这 *n* 个健康节点可能不总是在一致性哈希环中顺时针移动时发现的前 *n* 个节点。

让我们考虑以下配置，其中 *n*=3。如果节点 *A* 在写入操作期间暂时不可用或无法访问，则请求将被发送到偏好列表中的下一个健康节点，即此处的节点 *D*。

它确保所需的可用性和耐久性。处理请求后，节点 *D* 包含一个提示，指示预期的接收方是哪个节点（在这种情况下是 *A*）。

一旦节点 *A* 再次运行，节点 *D* 将请求信息发送到 *A*，以便它可以更新其数据。传输完成后，*D* 从其本地存储中删除此项，而不影响系统中的总副本数。

![QQ截图20230414144535](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414144535.png)

假设我们的哈希环中有七个节点，并且有一个节点的偏好列表

![QQ截图20230414144611](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414144611.png)

发生请求，并由节点A处理，因为它是在环中的下一个节点。节点在顺时针方向上移动时被处理

![QQ截图20230414144622](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414144622.png)

由于某些故障，节点A已经宕机

![QQ截图20230414144641](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414144641.png)

又发生了一个请求。节点A必须处理它，但无法处理，因此我们检查偏好列表中的下一个节点

![QQ截图20230414144653](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414144653.png)

由于节点A已经宕机，请求被发送到节点D

这种方法称为**提示转移**（hinted handoff）。使用它，我们可以确保如果一个节点面临临时故障，读取和写入操作仍然可以完成。

::: tip

**注意**：一个高可用性的存储系统必须处理数据中心故障，例如停电、冷却故障、网络故障或自然灾害。

为此，我们应该确保数据中心之间的复制。因此，如果一个数据中心宕机，我们可以从另一个数据中心中恢复它。

:::

::: danger

问题:

使用提示转移的限制是什么？

答案

系统成员的最小更改和临时节点故障是使用提示转移的理想情况。

但是，在某些情况下，提示副本在恢复到原始副本节点之前可能会变得不可用。

:::

## 处理永久故障

在节点永久故障的情况下，我们应该保持我们的副本同步，使我们的系统更耐用。

我们需要加快在副本之间检测不一致性的速度，并减少传输的数据量。

我们将使用Merkle树实现这一点。

在**Merkle树**中，单个键的值被哈希并用作树的叶子节点。

树的上级节点中包含其子节点的哈希值。可以独立验证Merkle树的每个分支，而无需下载完整的树或整个数据集。

在检查副本之间的不一致性时，Merkle树减少了必须交换的数据量。

如果，例如，

两个树的根哈希值相同且它们的叶节点也相同，则无需同步。

在该过程到达树叶之前，主机可以在节点交换子哈希值时识别不同步的键。

Merkle树是实现反熵的一种机制，这意味着保持所有数据一致。

它减少了用于同步的数据传输量和反熵过程中访问的磁盘数量。

以下幻灯片解释了Merkle树的工作原理：

![QQ截图20230414144859](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414144859.png)

计算所有键的哈希值。哈希将成为叶子节点

![QQ截图20230414144910](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414144910.png)

计算并存储H1和H2节点的哈希值作为其父节点

![QQ截图20230414144921](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414144921.png)

计算并存储H3和H4节点的哈希值作为其父节点

![QQ截图20230414144932](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414144932.png)

计算并存储所有其他节点的哈希值作为其父节点

![QQ截图20230414144945](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414144945.png)

计算并存储节点H 1 2 和 H 3 4 的哈希值作为它们的父节点。H 5 6 和 H 7 8 也是如此

![QQ截图20230414145002](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145002.png)

我们复制了奇数节点

![QQ截图20230414145023](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145023.png)

计算两个节点的哈希值（实际节点和其副本），并将其存储为父节点

![QQ截图20230414145040](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145040.png)

计算节点的哈希并将其存储为父节点

![QQ截图20230414145059](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145059.png)

计算最后两个节点的哈希以存储为根节点

![QQ截图20230414145111](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145111.png)

假设更新了K2的值。现在将重新计算其哈希值

![QQ截图20230414145127](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145127.png)

将重新计算并更新父哈希值

![QQ截图20230414145139](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145139.png)

将重新计算并更新父哈希值

![QQ截图20230414145153](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145153.png)

将重新计算并更新父哈希值

![QQ截图20230414145204](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145204.png)

将重新计算并更新根节点的哈希值

### 使用 Merkle 树进行抗熵

每个节点为它所托管的每个虚拟节点的键范围维护一个不同的 Merkle 树。

节点可以确定给定范围内的键是否正确。

相应于公共键范围的 Merkle 树的根在两个节点之间交换。我们将执行以下比较：

1. 比较 Merkle 树根节点的哈希值。
2. 如果它们相同，则不继续执行。
3. 使用递归遍历左右子节点。节点确定是否存在差异并执行必要的同步。

以下幻灯片更详细地解释了 Merkle 树的工作原理。

::: info

**注意**：我们假设所定义的范围仅用于说明。

:::

![QQ截图20230414145612](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145612.png)

<center>假设我们在环中有虚拟节点 A 和 B</center>

![QQ截图20230414145641](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145641.png)

<center>定义了每个虚拟节点所涵盖的范围</center>

![QQ截图20230414145702](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145702.png)

<center>以表格形式定义了每个虚拟节点所涵盖的范围</center>

![QQ截图20230414145718](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145718.png)

<center>节点 A 的 Merkle 树</center>

![QQ截图20230414145735](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145735.png)

<center>节点 B 的 Merkle 树</center>

![QQ截图20230414145749](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145749.png)

<center>假设添加了 A 的一个新虚拟节点 N8，并相应更新了范围</center>

![QQ截图20230414145812](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145812.png)

<center>以表格形式定义了更新后每个虚拟节点所涵盖的范围</center>

![QQ截图20230414145830](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145830.png)

<center>节点 A 的更新后的 Merkle 树</center>

![QQ截图20230414145845](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414145845.png)

<center>节点 B 的更新后的 Merkle 树</center>

使用 Merkle 树的优点在于可以独立地检查 Merkle 树的每个分支，而无需节点下载树或完整数据集。

这减少了必须交换的数据量以进行同步以及抗熵过程中所需的磁盘访问次数。

缺点是当节点加入或离开系统时，树的哈希将被重新计算，因为会影响多个键范围。

我们希望我们的 **节点能够检测到环中其他节点的故障**，因此让我们看看如何将其添加到我们的设计中。

## 推广加入环来检测失败

节点可能会短暂离线，但它们也可能会无限期地离线。

当单个节点离线时，我们不应该重新平衡分区分配或修复无法访问的副本，因为这很少是永久性的离开。因此，应谨慎地添加和删除环中的节点。

计划中的节点投入使用和退役会导致成员变化。这些变化形成历史记录。

它们被持久记录在每个节点的存储中，并使用 gossip 协议在环成员之间进行协调。

**基于 gossip 的协议** 还维护成员的最终一致视图。当两个节点随机选择彼此作为对等方时，两个节点可以有效地同步其持久化的成员历史记录。

让我们通过考虑以下示例来了解基于 gossip 的协议如何工作。假设节点 *A* 第一次启动，并随机将节点 *B* 和 *E* 添加到其 token 集中。Token 集在一致性哈希空间中具有虚拟节点，并将节点映射到其相应的 token 集。这些信息在节点的本地磁盘空间上存储。

现在，节点 *A* 处理一个请求，导致了一个变化，所以它将此通知给 *B* 和 *E*。

另一个节点 *D* 在其 token 集中有 *C* 和 *E*。它进行了更改并告诉了 *C* 和 *E*。其他节点也进行同样的过程。

这样，每个节点最终都了解了每个其他节点的信息。这是异步共享信息的有效方式，并且不会占用太多带宽。

![QQ截图20230414150224](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414150224.png)

<center>一组环中的节点</center>

![QQ截图20230414150240](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414150240.png)

<center>节点 *A* 处理请求。其 token 集中有 B 和 E</center>


![QQ截图20230414150306](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414150306.png)

<center>节点 *A* 在几个请求后向节点 *B* 和 *E* 发送成员信息的 gossip</center>

![QQ截图20230414150327](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414150327.png)

<center>节点 *D* 处理请求。其 token 集中有 C 和 E</center>

![QQ截图20230414150347](/img/10-Key-value%20Store/QQ%E6%88%AA%E5%9B%BE20230414150347.png)

<center>在一些请求之后，Node D会向Node C和E传递成员信息</center>

::: danger

问题:

考虑到一致性哈希的方法，基于gossip的协议会失败吗？

答案:

是的，基于gossip的协议可能会失败。

例如，节点 *A* 的虚拟节点*N*1想要加入环中。

管理员询问 *N2*，它也是节点 *A* 的虚拟节点。在这种情况下，两个节点都认为自己是环的一部分，不会意识到它们是同一个服务器。如果进行任何更改，它将继续更新自己，这是错误的。这被称为**逻辑分区**。

###### 问题

我们如何防止逻辑分区？

答案:

我们可以使一些节点扮演种子的角色，以避免逻辑分区。

我们可以通过配置服务定义一组节点作为种子。

由于所有工作节点最终都可以将其成员身份与种子协调，所以所有工作节点都知道这组节点。

因此，逻辑分区非常罕见。

:::

去中心化的故障检测协议使用基于gossip的协议，允许每个节点了解其他节点的添加或删除。

显式节点的加入和离开方法通知节点有关永久节点的添加和删除。当节点无法与另一个节点通信时，各个节点会检测到临时节点故障。

如果节点在授权时间内无法与其令牌集中的任何节点通信，则会向管理员通信该节点已停止。

## 结论

键值存储提供了灵活性，使我们能够扩展具有非结构化数据的应用程序。

Web应用程序可以使用键值存储来存储有关用户会话和首选项的信息。

使用用户密钥时，所有数据都是可访问的，键值存储非常适合快速读写操作。

键值存储可用于实时推荐和广告，因为存储可以快速访问和呈现新的推荐。