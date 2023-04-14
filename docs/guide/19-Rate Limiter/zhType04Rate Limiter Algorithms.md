# 请求速率限制算法

了解各种请求速率限制算法的工作原理。

## 请求速率限制算法

请求速率限制算法的执行需要高效的算法，每个算法都有其独特的优点和缺点。然而，在特定的时间点上，我们可以根据不同的需要选择使用一个或多个算法的组合。虽然还有其他算法可供选择，但我们将介绍以下流行的算法：

- 令牌桶（Token Bucket）
- 漏斗（Leaking Bucket）
- 固定窗口计数器（Fixed Window Counter）
- 滑动窗口日志（Sliding Window Log）
- 滑动窗口计数器（Sliding Window Counter）

### 令牌桶算法

该算法使用一个固定容量的桶的比喻来实现请求速率的限制。该桶定期以恒定的速率填充令牌。令牌可以视为某种特定大小的数据包。因此，每次接收到请求时，算法都会检查桶中是否有令牌。必须至少有一个令牌才能进一步处理请求。

令牌桶算法的流程如下：

假设我们有一个预定义的速率限制为 *R*，桶的总容量为 *C*。

1. 该算法在每隔 1/*R* 秒添加一个新的令牌到桶中。
2. 当桶中的令牌数等于桶的总容量 *C* 时，算法会丢弃新的传入令牌。
3. 如果有 *N* 个传入请求并且桶中有至少 *N* 个令牌，则消耗令牌并将请求转发进行进一步处理。
4. 如果有 *N* 个传入请求并且桶中的令牌数量较少，则接受的请求数量等于桶中可用令牌的数量。

下图表示令牌桶算法的工作原理：![](/img/19-Rate%20Limiter/howTheTokenBucketAlgorithmWorks.png)

令牌桶算法的工作原理

下面的示例演示了令牌的消耗和速率限制逻辑。在此示例中，桶的容量为三，并以每分钟三个令牌的速率填充。

![](/img/19-Rate%20Limiter/consumesATokenFromTheBucket.png)

一开始，桶中有三个令牌。一分钟内到达一个请求，会消耗桶中的一个令牌。

![](/img/19-Rate%20Limiter/TwoMoreRequestWithinSameMinute.png)

在同一分钟内，又有两个请求到达并消耗剩余的两个令牌。

![](/img/19-Rate%20Limiter/QQ%E6%88%AA%E5%9B%BE20230409211051.png)

在同一分钟内，又有一个（第四个）请求到达。因为桶中没有令牌了，所以拒绝该请求。

![](/img/19-Rate%20Limiter/RefillTheBucketAfterOneMinute.png)

一分钟后重新填充桶。

#### 必要的参数

我们需要以下必要参数来实施令牌桶算法：

- **桶容量（*C*）：** 桶中最多可以容纳的令牌数。
- **速率限制（*R*）：** 我们要限制的每单位时间的请求数。
- **补充速率（1/*R*）：** 每单位时间放入桶中的令牌数。
- **请求计数（*N*）：** 该参数跟踪传入请求的数量，并将其与桶的容量进行比较。

#### 优点

- 在桶中有足够的令牌时，该算法可能会导致突发流量。
- 占用的空间相对较小。由于状态受到限制，算法所需的内存很少。

#### 缺点

- 从实现的角度来看，锁可能需要从桶中取出一个令牌，如果锁上的争用增加，则会增加请求的处理延迟。
- 选择必要参数的最佳值是一个难题。

### 漏斗算法

......**漏桶算法**是令牌桶算法的一个变种，有一些细微的修改。该算法使用桶来容纳传入的请求，并以常数输出速率处理它们，而不是使用令牌。该算法使用水桶漏水的类比。同样，在此算法中，请求以变量速率到达。该算法以先进先出（FIFO）顺序以常定速率处理这些请求。让我们看一下下面的插图，了解漏桶算法的工作方式：

![漏桶算法工作图示](/img/19-Rate%20Limiter/HowTheLeakingBucketAlgorithmWorks.png)

#### 漏桶算法的关键参数

漏桶算法需要以下参数。

- **桶容量（*C*）：** 它确定了桶的最大容量。当桶达到*C*最大限制时，算法将丢弃传入的请求。
- **流入速率（*R*（in））：** 此参数显示请求的流入速率。它是一个变量量，取决于应用程序和请求类型的特性。我们使用此参数来找到桶的初始容量。
- **流出速率（*R*（out））：** 它确定每单位时间处理的请求数。

#### 优点

- 由于常数的流出速率（R(out)，它避免了请求的突发，而不像令牌桶算法。
- 该算法还非常节省空间，因为它仅需要三个状态：流入速率（R(in)）、流出速率（R(out)）和桶容量（C）。
- 由于请求以固定速率处理，因此适用于具有稳定出流速率的应用程序。

#### 缺点

- 一次请求突发可能会填满桶，如果未在指定的时间内处理，则最近的请求可能会受到影响。
- 确定最佳桶大小和流出速率是一个挑战。

### 固定窗口计数器算法

该算法将时间分为称为“窗口”的固定间隔，为每个窗口分配一个计数器。当特定窗口接收到请求时，计数器加一。一旦计数器达到其限制，该窗口内的新请求将被丢弃。如下图所示，虚线代表每个窗口中的限制。如果计数器低于限制，则转发请求；否则丢弃请求。

![固定窗口计数器算法](/img/19-Rate%20Limiter/FixedWindowCounterAlgorithm.png)

固定窗口计数器算法：丢弃超出限制的请求

该算法存在一个重大问题。窗口的边缘可能会出现大于允许请求数量的突发请求。在下图中，该系统允许每分钟最多十个请求。但是，在01:30到02:30的一分钟窗口中的请求数量为20个，大于允许的请求数量。

![固定窗口边缘问题](/img/19-Rate%20Limiter/EdgeCaseProblemInFixedWindow.png)

固定窗口计数器算法的边缘情况问题。在01:30到02:30的一分钟内的请求数量超过了预定义的每分钟10个请求的限制。

#### 固定窗口计数器算法的关键参数

固定窗口计数器算法需要以下参数。

- **窗口大小（*W*）：** 它表示时间窗口的大小。它可以是一分钟、一小时或任何其他合适的时间片。
- **速率限制（*R*）：** 它显示每个时间窗口允许的请求数量。
- **请求次数（*N*）：** 此参数显示每个窗口内的传入请求数量。如果*N*小于或等于*R*，则允许传入的请求。

#### 优点

- 由于请求速率的限制，它也非常节省空间。
- 相对于令牌桶样式算法（如果没有足够的令牌，则舍弃新请求），此算法处理新请求。

#### 缺点

- 在窗口边缘处出现一致的请求突发（每个窗口允许的请求数量的两倍），可能会导致性能降低。

### 滑动窗口日志算法**滑动窗口日志算法**跟踪每个进入的请求。当一个请求到达时，它的到达时间被存储在哈希表（通常称为日志）中。日志根据进来请求的时间戳进行排序。请求的允许取决于日志的大小和到达时间。与**固定窗口计数器**算法相比，该算法的主要优点是不会遭受边缘条件的影响。让我们看看下面的示例，了解滑动窗口日志算法的工作方式。假设我们在一分钟内的最大速率限制是两个请求。

![image1](/img/19-Rate%20Limiter/ANew1.png)

一个新请求在01:00到达。它的到达时间被添加到日志中，请求被接受。时间窗口标记为01:00到02:00。

![image2](/img/19-Rate%20Limiter/ANew2.png)

另一个请求在01:20到达，它的时间戳被添加到日志中。由于日志大小小于最大速率限制，所以允许它。

![image3](/img/19-Rate%20Limiter/ANew3.png)

第三个请求在01:45到达，它的时间戳被添加到日志中。该算法拒绝该请求，因为日志大小达到了最大限制三个。

![image4](/img/19-Rate%20Limiter/ANew4.png)

在02:25时有一个新请求，我们从那里开始新的窗口。我们在日志中保留最后一个窗口（从01:25到02:25）。过时的数据从日志中删除，并相应地减小大小。

#### 基本参数

实现滑动窗口日志算法需要以下参数：

- **日志大小（L）：**该参数类似于速率限制（R），它确定指定时间范围内允许的请求数量。
- **到达时间（T）：**该参数跟踪进入请求的时间戳并确定它们的计数。
- **时间范围（T（r））：**该参数确定时间范围。如果旧请求的时间戳不在此范围内，则删除它们。窗口的起始时间是根据第一个进入请求确定的，并在一分钟后过期。类似地，当到期时间之后的另一个请求到达时，窗口范围将相应更新。

#### 优缺点

- 与固定窗口相比，该算法不受边界条件的影响。

- 它消耗额外的存储空间以存储额外信息，即进来请求的时间戳。它保留时间戳以提供动态窗口，即使请求被拒绝。

### 滑动窗口计数器算法

与之前的固定窗口算法不同，**滑动窗口计数器算法**不是基于固定的时间单位限制请求。该算法考虑了固定窗口计数器和滑动窗口日志算法，以使请求的流程更加顺畅。让我们来看一下下图中算法的流程。

![image5](/img/19-Rate%20Limiter/QQ%E6%88%AA%E5%9B%BE20230409211242.png)

滑动窗口计数器算法，绿色阴影区域显示1分钟的滚动窗口

在上图中，我们在上一个窗口中有88个请求，当前窗口中有12个请求。我们将速率限制设为每分钟100个请求。此外，滚动窗口与当前窗口重叠15秒。现在假设一个新请求在02:15到达。我们将用下面的数学公式来决定接受或拒绝请求：

$$Rate= R_p * $\frac{timeframe-overlaptime}{timeframe}+R_c$$

在这里，*R_p*是前一个窗口中的请求数量，即88个。*R_c*是当前窗口中的请求数量，即12个。我们的时间范围在60秒内，重叠时间为15秒。

$$Rate = 88*（\frac{60-15}{15}）+12=78<100$$

由于78小于100，因此允许进入的请求。

#### 基本参数

该算法相对于上面描述的其他算法更加复杂。它需要以下参数：

- **速率限制（R）**：它确定每个窗口允许的最大请求数量。# 窗口大小（*W*）：
此参数表示时间窗口的大小，可以是一分钟、一小时或任何时间切片。
# 前一个窗口中的请求数（*R_p*）：
它确定在前一个时间窗口中已接收的请求数总数。
# 当前窗口中的请求数（*R_c*）：
它表示在当前窗口中接收的请求数。
# 重叠时间（*O_t*）：
此参数显示滚动窗口与当前窗口的重叠时间。

#### 优点：
该算法也具有空间效率，因为它具有受限状态：当前窗口中的请求数、前一个窗口中的请求数、重叠百分比等等。
它可以平滑处理请求突发并基于前一个窗口的近似平均值处理它们。

#### 缺点：
该算法假定前一个窗口中的请求数是均匀分布的，这可能并不总是可能的。

## 速率限制算法的比较
所有速率限制算法的两个主要因素是：
- **内存：**此功能是指算法需要维护的状态数量。例如，如果一个算法需要比另一个算法更少的变量（状态），则它更具空间效率。
- **突发：**这是指单位时间内流量的增加超过定义的限制。
下表显示了本课程所描述的所有算法的空间效率和流量突发性。

## 速率限制算法的比较

| 算法 | 空间效率 | 允许突发？ |
| - | - | - |
| 令牌桶 | 是 | 是，在定义的限制内允许流量突发 |
| 漏桶 | 是 | 否 |
| 固定窗口计数器 | 是 | 是，在时间窗口的边缘允许突发，并且可以超过定义的限制 |
| 滑动窗口日志 | 否，维护日志需要额外的存储空间。 | 否 |
| 滑动窗口计数器 | 是，但与其他空间效率较高的算法相比需要更多的空间。 | 平滑突发流量 |

## 结论
在本课程中，我们探讨了各种流行的速率限制算法。我们还揭示了这些算法的优缺点。每种算法都可以根据用户选择和使用案例类型进行部署。