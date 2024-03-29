---
icon: dataMapping
title: 使用因果关系生成唯一ID
---

学习如何使用时间生成唯一ID并保持事件的因果关系。

## 因果关系

在 `上一节课程` 中，我们生成了唯一ID来区分各种事件。除了对事件有唯一标识符之外，我们还对找到这些事件的顺序感兴趣。

让我们考虑一个例子，Peter和John是两个Twitter用户。

John发表了一条评论（事件A），Peter回复了John的评论（事件B）。

事件B依赖于事件A，不能在事件A之前发生。这些事件在这里并不是同时发生的。

我们还可以有并发事件 - 即独立发生的两个事件。

例如，如果Peter和John在两个不同的推文上发表评论，则它们之间没有发生关系或因果关系。

识别一个事件对另一个事件的依赖性是必要的，但对于并发事件则不是。

::: tip

上述场景也可以通过分配唯一ID并使用社交图形来编码事件之间的依赖关系来处理。

我们也可以使用单独的时间数据结构和简单的唯一ID。

然而，我们希望唯一ID能够双重作用 - 提供唯一标识并帮助事件的因果关系。

:::

以下幻灯片提供了并发事件和非并发事件的可视化效果。

![QQ截图20230408193535](/img/12-Sequencer/QQ截图20230408193535.png)

![QQ截图20230408193603](/img/12-Sequencer/QQ截图20230408193603.png)

![QQ截图20230408193616](/img/12-Sequencer/QQ截图20230408193616.png)

![QQ截图20230408193626](/img/12-Sequencer/QQ截图20230408193626.png)

![QQ截图20230408193641](/img/12-Sequencer/QQ截图20230408193641.png)

某些应用程序需要事件具有唯一标识符并携带任何相关因果信息。

一个例子是为写入键值存储的并发写入分配标识符以实现最后写入赢策略。

我们可以使用逻辑时钟或物理时钟来推断因果关系。一些系统具有额外的要求，我们希望事件标识符的因果关系与墙钟时间相匹配。一个例子是遵守欧洲MiFID法规的金融应用程序。MiFID要求时钟与UTC的差距在100微秒以内，以便在高交易量/高速度市场交易期间检测异常。

::: tip

逻辑时钟或物理时钟涉及许多微妙之处。我们可以参考下面标题为“分布式系统中的时间”的文本来刷新我们的时间概念。

:::

我们使用时间来确定我们生活中事件的顺序。例如，如果Sam在早上6点洗澡，早上7点吃早餐，我们可以通过每个事件的时间戳确定Sam在早餐前洗了澡。因此，时间戳可用于保持因果关系。

### 分布式系统中的时间

#### 物理时钟

计算机通常有两种类型的物理时钟：日历时钟和单调计数器。

日历时钟

- 与单调计数器相比，日历时钟通常具有较低的分辨率。
- 网络时间协议（NTP）可以将时钟向前或向后移动，因此它并不总是单调的。
- 它可能包含或不包含闰秒。

##### 单调计数器

- 单调计数器通常比日历时钟具有更高的分辨率。
- 单调计数器应该用于两个事件之间的持续时间而不是时间。
- 这些在不同节点之间没有意义。例如，即使在具有多个处理器的同一服务器上，每个处理器可能都有不同的计数器。应用程序在使用来自不同处理器的计数器时需要小心。
- NTP可能会调整它而不违反单调性。
- NTP只能将计数器变化速率加快或减慢0.05％。

#### 时钟漂移的原因

物理时钟随着时间的推移会漂移，原因有很多：

- 温度差异
- 设备的老化
- 制造缺陷
- 虚拟时钟

例如，时钟漂移200百万分之一的服务器意味着每30秒同步一次时钟，会有6毫秒的漂移，或每24小时重新同步一次，会有17秒的漂移。

一项研究显示，在公共互联网上，NTP无法获得比35毫秒更好的时钟精度，当网络拥塞时，精度可能会飙升到1秒。否则，NTP使用多个时间服务器并且丢弃异常值。

### 折衷：复杂性和成本与时钟精度之间的平衡

通过使用GPS和原子钟、谨慎的部署和监控，可以保持时钟漂移始终很小。然而，这样的系统会带来额外的成本，并增加系统的复杂性。

### 逻辑时钟

- Lamport 时钟为我们提供了 happened-before 关系。如果事件 A 在事件 B 之前发生，那么 A 的时钟值将小于 B 的时钟值。需要注意的是，对于来自任何两个服务器的两个事件的任何两个时钟值，我们不能比较它们来推断 happened-before 关系，因为这两个事件可以是并发的（意味着没有因果关系）。
- 我们可以使用向量时钟来使用时钟值推断 happened-before 关系。为此，我们需要为向量中的每个参与实体提供一个计数器。
- 我们应该注意，happened-before 可能不意味着两个事件之间有因果关系。可能的情况是一个事件发生在另一个事件之前。通常，我们需要在 happened-before 机制的基础上添加应用程序级别的上下文来推断真实的因果关系。

### 使用UNIX时间戳

UNIX 时间戳的粒度为毫秒，可以用于区分不同的事件。我们有一个生成单个时间戳的 **ID 生成服务器** 。将任何生成唯一 ID 的请求路由到该服务器，它返回一个时间戳，然后返回一个唯一 ID。生成毫秒级 ID 的能力使我们可以每秒生成一千个标识符。这意味着我们可以在一天内获得
$$
24(hour)*60(min/hour)*60(sec/min)*1000(ID/sec)=86,400,000IDs
$$
不到十亿个。

我们的系统在生成 ID 方面表现良好，但它提出了一个关键问题。

ID 生成服务器是单点故障（SPOF），我们需要处理它。

为了迎合 SPOF，我们可以添加更多的服务器。每个服务器为每毫秒生成一个唯一的 ID。

为了使整个标识符在系统中唯一，我们将服务器 ID 与 UNIX 时间戳结合起来。然后，我们添加负载均衡器以更有效地分配流量。

使用 UNIX 时间戳生成唯一 ID 的设计如下图所示：

![QQ截图20230408193833](/img/12-Sequencer/QQ截图20230408193833.png)

<center>使用时间戳作为ID</center>

### 优点

该方法简单、可扩展且易于实现。它还使多个服务器能够处理并发请求。

### 缺点

对于两个并发事件，返回相同的时间戳并分配相同的ID。这样，ID不再是唯一的。

## 每种方法实现的要求

|                    | **唯一性** | **可扩展性** | **可用性** | **64位数值ID** | **维护因果关系** |
| ------------------ | ---------- | ------------ | ---------- | -------------- | ---------------- |
| **使用UUID**       | ✖️          | ✔️            | ✔️          | ✖️              | ✖️                |
| **使用数据库**     | ✖️          | ✖️            | ✔️          | ✔️              | ✖️                |
| **使用范围处理器** | ✔️          | ✔️            | ✔️          | ✔️              | ✖️                |
| **使用UNIX时间戳** | ✖️          | **弱**       | ✔️          | ✔️              | **弱**           |

## Twitter Snowflake

让我们尝试高效使用时间。我们可以使用一些位来存储时间，并将其余位用于其他信息。位的划分概述如下：

![QQ截图20230408193845](/img/12-Sequencer/QQ截图20230408193845.png)

Twitter Snowflake位划分的概述

位划分的解释如下：

- **符号位**：分配一个单个位作为符号位，其值始终为零。这使得整个数字为正数。这样做有助于确保使用这些标识符的任何编程环境将其解释为正整数。

- 时间戳：分配41位用于毫秒。将使用Twitter Snowflake默认时期。它的值为
  1288834974657，相当于UTC时间2010年11月4日01:42:54。我们可以在系统部署时启动我们自己的时期，比如2022年1月1日午夜可以作为从零开始的时期。耗尽此范围的最大时间如下所示：

$$
时间耗尽范围=\frac{2^{41}id}{365*24*60*1000ids}\approx69years
$$
以上计算为我们提供了69年的时间，然后我们需要一种新算法来生成ID。正如我们之前所看到的，如果我们每秒可以生成1,000个标识符，那么我们无法获得每天10亿个标识符的目标。虽然现在，在Snowflake提案中，当我们使用工作器ID和机器本地序列号时，我们有充足的标识符可用。

  - 工作器编号：工作器编号为10位。它为我们提供了 = 1,024个工作者ID。为其事件创建唯一ID的服务器将附加其ID。
  -  序列号：序列号为12位。对于服务器上生成的每个ID，序列号增加1。这为我们提供了= 4,096个唯一序列号。当它达到4,096时，我们将其重置为零。此数字添加了一层以避免重复。

以下幻灯片展示了时间戳转换为UTC的过程。

![QQ截图20230414161227](/img/12-Sequencer/QQ截图20230414161227.png)

<center>位的划分概述</center>


![QQ截图20230414161250](/img/12-Sequencer/QQ截图20230414161250.png)

<center>将时间转换为UTC</center>

![QQ截图20230414161304](/img/12-Sequencer/QQ截图20230414161304.png)

<center>将位转换为十进制</center>

![QQ截图20230414161319](/img/12-Sequencer/QQ截图20230414161319.png)

<center>将十进制转换为epoch</center>

![QQ截图20230414161336](/img/12-Sequencer/QQ截图20230414161336.png)

<center>将毫秒转换为UTC</center>

### 优点

Twitter Snowflake将时间戳作为第一个组件。因此，它们可以按时间排序。ID生成器也具有高可用性。

### 缺点

在“死亡期间”生成的ID是一个问题。死亡期间是指没有向服务器发出生成ID的请求的时间段。这些ID将被浪费，因为它们占用了标识符空间。可能唯一的范围会比预期提前耗尽，并在全局用户ID集中创建间隙。

::: danger

###### 问题

你能在上面显示的设计中找到另一个缺点吗？

###### 答案

物理时钟不可靠。对于这样的时钟，误差可能为每天17秒。如果我们在服务器上使用这些测量时间，时间会漂移。

考虑到单个服务器，我们不会受到时间漂移的影响，因为所有交易都落在单个服务器上。但是在分布式环境中，时钟不会保持同步。

由于测量准确时间的不可靠性，无论我们如何经常互相同步这些时钟或使用准确测量方法同步其他时钟，分布式系统中涉及的各种时钟之间始终会存在**偏差**。

:::

该系统的另一个弱点是其对时间的依赖性。 NTP可能会影响此系统的工作。如果其中一台服务器上的时钟向前漂移了两秒钟，其他服务器将落后两秒钟。

NTP时钟会识别它并重新校准其时钟。现在，所有服务器将对齐。但是，在那个漂移过程中，可能已经生成了一些尚未发生的时间的ID，现在我们将具有具有相同时间戳的可能非并发事件对。

最后，我们事件的因果关系将无法得到维护。

拥有准确时间仍然是一个问题。我们可以使用微秒甚至纳秒分辨率读取机器的时钟。即使使用了这种细粒度的测量，**NTP**的风险仍然存在。由于我们不能依赖物理时钟，让我们将逻辑时钟投入使用。

::: info

网络时间协议（NTP）是用于计算机系统之间基于分组交换的可变延迟数据网络上的时钟同步的网络协议。

NTP旨在使所有参与计算机与世界协调时间（UTC）在几毫秒之内同步。它减轻了变量网络延迟的影响。

:::

以下表格概述了使用不同设计方法实现的要求。

## 每种方法实现的要求

|                           | **唯一的** | **可扩展的** | **可用的** | **64位数字ID** | **因果关系维护** |
| ------------------------- | ---------- | ------------ | ---------- | -------------- | ---------------- |
| **使用UUID**              | ✖️          | ✔️            | ✔️          | ✖️              | ✖️                |
| **使用数据库**            | ✖️          | ✖️            | ✔️          | ✔️              | ✖️                |
| **使用范围处理程序**      | ✔️          | ✔️            | ✔️          | ✔️              | ✖️                |
| **使用UNIX时间戳**        | ✖️          | **薄弱**     | ✔️          | ✔️              | **薄弱**         |
| **使用Twitter Snowflake** | ✔️          | ✔️            | ✔️          | ✔️              | **薄弱**         |

## 使用逻辑时钟

我们可以利用逻辑时钟（Lamport和向量时钟），需要对事件进行单调递增的标识符。

### Lamport时钟

在**Lamport时钟**中，每个节点都有其计数器。系统的所有节点都配备了数字计数器，在首次激活时从零开始。在执行事件之前，数字计数器会递增1。从此事件发送到另一个节点的消息具有计数器值。当另一个节点接收消息时，它首先通过取其时钟值的最大值来更新其逻辑时钟。然后，它获取发送的计数器值并执行消息。

Lamport时钟使用“发生在”关系提供唯一的部分事件排序。我们还可以通过标记唯一的节点/进程标识符来获得事件的总排序，尽管这种排序不是唯一的，而且会随节点标识符的不同分配而改变。但是，我们应该注意到Lamport时钟不能让我们在全局级别推断因果关系。这意味着我们不能仅仅比较任何服务器上的两个时钟值以推断“发生在”关系。向量时钟克服了这个缺点。

### 向量时钟

向量时钟维护因果历史记录，即事件之间的“发生在”关系的所有信息。因此，我们必须选择一种高效的数据结构来捕获每个事件的因果历史记录。

考虑下面显示的设计。我们将通过连接相关信息（如Twitter snowflake）来生成我们的ID，并将其分为以下部分：

- **符号位**：一个单一的位分配为符号位，其值始终为零。
- **向量时钟**：这是53位，是每个节点的计数器。
- **工作器编号**：这是10位。它给我们1,024个工作者ID（2^{10}）。

以下幻灯片展示了使用向量时钟生成唯一ID的过程，其中节点A、B和C驻留在数据中心.

::: tip

 在以下幻灯片中，为了便于理解，我们没有将数据转换为位。我们将使用以下模式生成唯一ID：

:::

```
[vector-clock][worker-id]
```

![QQ截图20230414161611](/img/12-Sequencer/QQ截图20230414161611.png)

当前没有任何事件正在进行

![QQ截图20230414161623](/img/12-Sequencer/QQ截图20230414161623.png)

A1的唯一ID：\[1,0,0][A]

![QQ截图20230414161642](/img/12-Sequencer/QQ截图20230414161642.png)

C1的唯一ID：\[0,0,1][C] 

![QQ截图20230414161658](/img/12-Sequencer/QQ截图20230414161658.png)

B1的唯一ID：\[1,1,0][B]

![QQ截图20230414161715](/img/12-Sequencer/QQ截图20230414161715.png)

不需要分配新的ID

![QQ截图20230414161733](/img/12-Sequencer/QQ截图20230414161733.png)

C2的唯一ID：\[0,0,2][C]

![QQ截图20230414161756](/img/12-Sequencer/QQ截图20230414161756.png)

B2的唯一ID：\[1,2,0][B]

![QQ截图20230414161817](/img/12-Sequencer/QQ截图20230414161817.png)

A2的唯一ID：\[2,0,0][A]

![QQ截图20230414161830](/img/12-Sequencer/QQ截图20230414161830.png)

C3的唯一ID：\[0,0,3][C]

![QQ截图20230414161844](/img/12-Sequencer/QQ截图20230414161844.png)

不需要分配新的ID

![QQ截图20230414161859](/img/12-Sequencer/QQ截图20230414161859.png)

C4的唯一ID：\[1,1,4][C]

![QQ截图20230414161912](/img/12-Sequencer/QQ截图20230414161912.png)

C5的唯一ID：\[1,1,5][C]

![QQ截图20230414161924](/img/12-Sequencer/QQ截图20230414161924.png)

A3的唯一ID：\[3,1,5][A]

![QQ截图20230414161936](/img/12-Sequencer/QQ%E6%88%AA%E5%9B%BE20230414161936.png)

不需要分配新的ID

使用向量时钟的方法有效。然而，为了完全捕捉因果关系，向量时钟的大小必须至少为户端，这种信息使ID长度显著增加，使其难以处理、存储、使用和扩展。*n*个节点。

因此，当参与节点的总数巨大时，向量时钟需要大量的存储空间。现在有些系统，比如Web应用，将每个浏览器都视为系统的客户端，这种信息使ID长度显著增加，使其难以处理、存储、使用和扩展。

## 每种方法实现的要求

|                         | **唯一** | **可扩展** | **可用** | **64位数字ID** | **保持因果关系** |
| ----------------------- | -------- | ---------- | -------- | -------------- | ---------------- |
| **使用UUID**            | ✖️        | ✔️          | ✔️        | ✖️              | ✖️                |
| **使用数据库**          | ✖️        | ✖️          | ✔️        | ✔️              | ✖️                |
| **使用范围处理器**      | ✔️        | ✔️          | ✔️        | ✔️              | ✖️                |
| **使用UNIX时间戳**      | ✖️        | **较弱**   | ✔️        | ✔️              | **较弱**         |
| **使用Twitter雪花算法** | ✔️        | ✔️          | ✔️        | ✔️              | **较弱**         |
| **使用向量时钟**        | ✔️        | **较弱**   | ✔️        | **可超过**     | ✔️                |

::: danger

###### 问题

全局时钟会帮助解决我们的问题吗？

答案

由于我们没有全局时钟，即使每个节点可以为发生的事件分配唯一的时间戳，这些时间戳也来自以不同速率运行的时钟。

这将使比较它们更加困难，它们也不会是唯一的。然而，如果我们有一个全局时钟，可以在请求时给我们时间，并且始终准确，那么我们可以保持事件的因果关系，以及唯一的ID。

这样的时钟将非常有价值，但在分布式系统中处理时间是棘手的。

:::

## TrueTime API

Google的TrueTime API在Spanner中是一个有趣的选择。

它不是返回一个特定的时间戳，而是报告一个时间间隔。

当询问当前时间时，我们会得到两个值：最早和最晚的时间戳。这些是可能的最早和最晚的时间戳。

根据其不确定性计算，时钟知道实际当前时间在该区间内的某个位置。区间的宽度取决于许多因素，包括本地石英钟最后一次与更精确的时钟源进行同步的时间有多长。

Google在每个数据中心部署GPS接收器或原子钟，并在约7毫秒内将时钟同步。这使得Spanner将时钟不确定性降至最低。区间的不确定性表示为epsilon。

以下幻灯片解释了TrueTime的时间主服务器如何与多个数据中心中的GPS和原子钟配合工作。

![QQ截图20230414162343](/img/12-Sequencer/QQ截图20230414162343.png)

在每个数据中心中，我们都有时间处理程序。GPS时间主机附有GPS接收器，其中一些带有原子钟

![QQ截图20230414162357](/img/12-Sequencer/QQ截图20230414162357.png)

客户端需要TrueTime

![QQ截图20230414162410](/img/12-Sequencer/QQ截图20230414162410.png)

客户端运行一个守护程序。该守护程序联系大多数GPS时间主机，有时会联系原子钟时间主机以获得不同时间参考的冗余性

![QQ截图20230414162422](/img/12-Sequencer/QQ截图20230414162422.png)

我们运行 Marzullo 算法，交叉时间间隔以确定时间参考。API给出从最早到最晚的时间间隔

![QQ截图20230414162435](/img/12-Sequencer/QQ截图20230414162435.png)

时间参考将以加/减epsilon的形式表示给定的区间



以下幻灯片解释了当客户端请求给出TrueTime时如何计算时间。

![QQ截图20230414162625](/img/12-Sequencer/QQ截图20230414162625.png)

在客户端请求TrueTime之前

![QQ截图20230414162635](/img/12-Sequencer/QQ截图20230414162635.png)

计算时间零的epsilon

![QQ截图20230414162652](/img/12-Sequencer/QQ截图20230414162652.png)

我们假设时钟最多每秒漂移200微秒。这意味着在30秒内我们将大约增加6毫秒（ms）到epsilon的值

![QQ截图20230414162702](/img/12-Sequencer/QQ截图20230414162702.png)

计算30秒时的epsilon

![QQ截图20230414162714](/img/12-Sequencer/QQ截图20230414162714.png)

在接下来的30秒中，我们与时间主机通信，计算参考不确定性，并且它以每秒200微秒的速率增加

![QQ截图20230414162844](/img/12-Sequencer/QQ截图20230414162844.png)

计算60秒时的epsilon

![QQ截图20230414162859](/img/12-Sequencer/QQ截图20230414162859.png)

同样，计算出的参考不确定性以每秒200微秒的速率增加。

Spanner 保证两个置信区间不重叠,即:
$$
A_{起点}<A_{终点}<B_{起点}<B_{终点}
$$
那么B肯定发生在A之后。

我们使用 TrueTime 区间生成我们的唯一ID。假设最早的区间为, 最晚的区间为,  不确定性为ε。我们在我们的唯一ID中使用毫秒 作为时间戳。

- 时间戳：时间戳为41位。我们使用 T_{E} 作为时间戳。

- 不确定性：不确定性为4位。由于最大不确定性被声称为 6-10 毫秒，我们将使用四位来存储它。

- 工作器编号：这是10位。它给了我们 2^{10} = 1,024个工作器ID。

- 序列号：这是8位。对于在服务器上生成的每个ID，序列号增加1。它给了我们  = 256种组合。当它达到256时，我们将其重置为零。

![QQ截图20230408193948](/img/12-Sequencer/QQ截图20230408193948.png)

<center>节点B使用 TrueTime 为其事件生成唯一ID</center>

### 优点

TrueTime 满足所有要求。我们能够生成全局唯一的64位标识符。事件的因果关系得到保持。该方法可扩展且高度可用。

### 缺点

如果两个区间重叠，那么我们不确定A和B的顺序。它们可能是并发事件，但不能给出100％的保证。此外，Spanner是昂贵的，因为它确保高数据库一致性。类似Spanner系统的成本也很高，由于其复杂的基础设施需求和监控。

更新后的表格提供了生成唯一ID的不同系统设计之间的比较。

## 各种方法满足的需求

|                         | **唯一性** | **可扩展性** | **可用性** | **64位数值ID**   | **保持因果关系** |
| ----------------------- | ---------- | ------------ | ---------- | ---------------- | ---------------- |
| **使用UUID**            | ✖️          | ✔️            | ✔️          | ✖️                | ✖️                |
| **使用数据库**          | ✖️          | ✖️            | ✔️          | ✔️                | ✖️                |
| **使用范围处理程序**    | ✔️          | ✔️            | ✔️          | ✔️                | ✖️                |
| **使用UNIX时间戳**      | ✖️          | **较弱**     | ✔️          | ✔️                | **较弱**         |
| **使用Twitter雪花算法** | ✔️          | ✔️            | ✔️          | ✔️                | **较弱**         |
| **使用向量时钟**        | ✔️          | **较弱**     | ✔️          | **可能超出范围** | ✔️                |
| **使用TrueTime**        | ✔️          | ✔️            | ✔️          | ✔️                | ✔️                |

## 摘要

- 我们想避免重复的标识符。考虑如果生成重复的付款或采购订单会发生什么。

- UUID提供了关于密钥非冲突的概率保证。要确定地获得非冲突保证可能需要在不同的分布式实体或存储之间达成共识并从复制的存储中读取。

- 随着键长变大，在数据库中更新元组的速度往往会变慢。因此，标识符应该足够大但不要太大。

- 通常，不希望任何人能够猜测下一个ID。否则，可能会发生不良的数据泄露，并且组织的竞争对手可能会通过简单地查看订单ID来了解一天处理了多少订单。将几个随机数添加到标识符的位中使其难以猜测，尽管这会带来性能成本。

- 如果不想将ID与时间相关联，则可以使用简单的计数器来生成唯一的ID。获取时间戳比简单计数器更慢。

- 如果不想将ID与时间相关联，则可以使用简单的计数器来生成唯一的ID。获取时间戳比简单计数器更慢，但这需要我们持久地存储生成的ID。计数器需要存储在数据库中。存储带有自己的问题。这包括多个并发写操作对数据库产生不可承受的压力，以及数据库成为单点故障的风险。

- 对于一些分布式数据库，如Spanner，生成单调递增或递减的ID可能会对性能造成负面影响。Google报告称：“事实上，使用单调递增（或递减）值作为行键不符合Spanner的最佳实践，因为它会在数据库中创建热点，导致性能降低。”

  

::: info

 全局排序事件是一个昂贵的过程。在集中式数据库中快速且简单的功能（基于自动递增的ID）在分布式版本中由于某些基本约束（如共识在远程实体之间很困难）变得缓慢和复杂。

例如，Spanner是一个地理分布式数据库，报告称“如果对单元格（单行中的一个列）进行读取-更新事务的延迟为10毫秒（ms），则序列值发出的最大理论频率为每秒100次。这个最大值适用于整个数据库，无论客户端应用实例的数量或数据库中的节点数量如何。这是因为单个节点始终管理单个行。”如果我们能够在全局排序和无间隔标识符的要求上妥协，我们将能够在较短时间内获得许多标识符，即更好的性能。

:::