For storage estimation, we need to calculate the total storage required for storing videos and thumbnails uploaded on a daily basis by YouTube users. Using our assumptions, we can calculate the total amount of storage required as follows: 

- Total storage required for videos uploaded per day = 250,000 videos * 50 MB per video = 12,500,000 MB or 12.5 TB
- Total storage required for thumbnails uploaded per day = 250,000 videos * 20 KB per thumbnail (assuming one thumbnail per video) = 5,000,000 KB or 4.88 GB

Therefore, the total storage required per day for YouTube data would be 12.5 TB + 4.88 GB = 12.5 TB.

### Bandwidth estimation

To estimate the required bandwidth for a blob store system for storing YouTube data, we need to consider the number of read requests made by users per day. Using our assumptions, we can calculate the total bandwidth required as follows:

- Bandwidth required for read requests per day = 5 million daily active users * 20 read requests per user * (50 MB per video + 20 KB per thumbnail) = 20.5 PB per day

Therefore, a blob storage system dedicated to storing YouTube data would require 20.5 PB of daily bandwidth.

## Conclusion

In conclusion, a blob store must fulfill specific functional and non-functional requirements to handle the storage of large unstructured data like videos, images, documents, and audio files. It must also be able to scale up to accommodate increasing data volumes while ensuring data availability, durability, consistency, and reliability. Finally, we estimated the number of servers, storage, and bandwidth required by a blob store system based on assumptions using YouTube as an example.考虑上述假设，我们使用下面的公式来计算YouTube每天所需的总存储空间：

$$Total_{storage/day}=No.ofVideos/day*(Storage/video+Storage/thumbnail)$$

将上面的数字代入公式中，得到每天大约需要12.51 TB 的存储空间，用于存储上传的视频的单个分辨率的单个副本。

#### 存储上传到YouTube每天的视频和缩略图所需的总存储空间

| 每天的视频数量 | 视频每个的存储空间 (MB) | 缩略图每个的存储空间 (KB) | 每天总存储空间 (TB) |
| --------------------- | ---------------------- | -------------------------- | -------------------------- |
| 250000                | 50                     | 20                         | 12.51                      |

### 带宽估算

让我们估算上传和检索数据所需的带宽。

**入站流量**: 为了估算入站流量所需的带宽，我们考虑每天上传的总数据量，这间接意味着我们上面计算的每天所需的总存储空间。每秒传输到服务器的数据量可以使用以下公式计算：

$$Total_{bandwidth}=\frac{Total_{storage_day}}{24*60*60}$$

#### 在YouTube上传视频所需的带宽

| 每天总存储空间 (TB) | 一天的秒数 | 带宽 (Gb/s) |
| -------------------------- | ---------------- | ---------------- |
| 12.51                      | 86400            | 1.16             |

**出站流量**: 由于 Blob 存储是一种读取密集型存储，因此大部分带宽都用于出站流量。考虑上述假设，我们使用以下公式计算出站流量所需的带宽：

$$Total_{banwidth}=\frac{No.ofActiveUsers/day*No.ofRequests/user/day*Total_{data_size}}{SecondsInADay}$$

#### 在YouTube下载视频所需的带宽

| 每天的活跃用户 | 每个用户的请求数 | 数据大小 (MB) | 所需的带宽 (Gb/s) |
| --------------------------- | ------------------------ | -------------- | ------------------------- |
| 5000000                     | 20                       | 50             | 462.96                    |

![QQ截图20230409213420](/img/20-Blob%20Store/QQ%E6%88%AA%E5%9B%BE20230409213420.png)

总结 Blob 存储系统仅适用于 YouTube 视频的带宽要求。

## 我们将使用的构建块

我们在 Blob 存储系统的设计中使用以下构建块：

![QQ截图20230409213450](/img/20-Blob%20Store/QQ%E6%88%AA%E5%9B%BE20230409213450.png)

任务调度程序设计的构建块

- **速率限制器 (Rate Limiter)** 需要一个速率限制器来控制用户与系统的交互。

- **负载均衡器 (Load balancer)** 需要一个负载均衡器，将请求负载分配到不同的服务器上。

- **数据库 (Database):** 用于存储 blobs 的元数据信息。

- **监控系统 (Monitoring):** 监控存储设备和它们上可用的空间，以便及时添加存储空间。

在本课程中，我们讨论了 Blob 存储系统的要求和估算。在接下来的课程中，我们将设计 Blob 存储系统，同时遵循规定的要求。