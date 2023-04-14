---
typora-root-url: ..
---

# Requirements of a Distributed Messaging Queue’s Design

Learn about the requirements of designing a distributed messaging queue using a strawman solution.

## Requirements

In a **distributed messaging queue**, data resides on several machines. Our aim is to design a distributed messaging queue that has the following functional and non-functional requirements.

### Functional requirements

Listed below are the actions that a client should be able to perform:

- **Queue creation:** The client should be able to create a queue and set some parameters—for example, queue name, queue size, and **maximum message size.**

  Generally, most popular services like Amazon Simple Queue Service (SQS) and Microsoft Messaging Queue (MSMQ) allow a maximum size of 256KB and 4MB, respectively.

  How do we send messages larger than the predefined size?

  Various approaches are used to send messages larger than the specified allowed size. For example, one approach is to divide the message into small chunks at the sender’s side and combine it at the receiver’s side. However, this approach incurs extra complexity on both the sender and receiver sides.

  Amazon SQS provides extended libraries through which a user can send a message containing a reference to a message payload in Amazon S3 by making calls to several APIs, including `AmazonSQSExtendedClient`, `ExtendedClientConfiguration`, and so on. Similarly, Microsoft MSMQ provides an `MQSendLargeMessage` API to send a larger message than 4MB as an XML document.

  Therefore, we will overlook this discussion by assuming that our system supports one of the strategies followed by Amazon or Microsoft.

  

- **Send message:** Producer entities should be able to send messages to a queue that’s intended for them.

- **Receive message:** Consumer entities should be able to receive messages from their respective queues.

- **Delete message:** The consumer processes should be able to delete a message from the queue after a successful processing of the message.

- **Queue deletion:** Clients should be able to delete a specific queue.

### Non-functional requirements

Our design of a distributed messaging queue should adhere to the following non-functional requirements:

- **Durability**: The data received by the system should be durable and shouldn’t be lost. Producers and consumers can fail independently, and a queue with data durability is critical to make the whole system work, because other entities are relying on the queue.
- **Scalability**: The system needs to be scalable and capable of handling the increased load, queues, producers, consumers, and the number of messages. Similarly, when the load reduces, the system should be able to shrink the resources accordingly.
- **Availability**: The system should be highly available for receiving and sending messages. It should continue operating uninterrupted, even after the failure of one or more of its components.
- **Performance:** The system should provide high throughput and low latency.

## Single-server messaging queue

Before we embark on our journey to map out the design of a distributed messaging queue, we should recall how queues are used within a single server where the producer and consumer processes are also on the same node. A producer or consumer can access a single-server queue by acquiring the locking mechanism to avoid data inconsistency. The queue is considered a critical section where only one entity, either the producer or consumer, can access the data at a time.

However, several aspects restrain us from using the single-server messaging queue in today’s distributed systems paradigm. For example, it becomes unavailable to cooperating processes, producers and consumers, in the event of hardware or network failures. Moreover, performance takes a major hit as contention on the lock increases. Furthermore, it is neither scalable nor durable.

![Multiple producers and consumers interact via a single messaging queue](/img/17-Distributed%20Messaging%20Queue/Multiple%20producers%20and%20consumers%20interact%20via%20a%20single%20messaging%20queue.png)

Multiple producers and consumers interact via a single messaging queue

Point to Ponder

###### Question

Can we extend the design of a single-server messaging queue to a distributed messaging queue?

Hide Answer

A single-server messaging queue has the following drawbacks:**High latency:** As in the case of a single-server messaging queue, a producer or consumer acquires a lock to access the queue. Therefore, this mechanism becomes a bottleneck when many processes try to access the queue. This increases the latency of the service.**Low availability:** Due to the lack of replication of the messaging queue, the producer and consumer process might be unable to access the queue in events of failure. This reduces the system’s availability and reliability.**Lack of durability:** Due to the absence of replication, the data in the queue might be lost in the event of a system failure.**Scalability:** A single-server messaging queue can handle a limited number of messages, producers, and consumers. Therefore, it is not scalable.To extend the design of a single-server messaging queue to a distributed messaging queue, we need to make extensive efforts to eliminate the drawbacks outlined above.

## Building blocks we will use

The design of a distributed messaging queue utilizes the following building blocks:

![BuildingBlocksUsedToDesignDistributedQueue](/img/17-Distributed%20Messaging%20Queue/BuildingBlocksUsedToDesignDistributedQueue.png)

The building blocks used to design a distributed messaging queue

- **[Database(s)](https://www.educative.io/collection/page/10370001/4941429335392256/4901035478351872)** will be required to store the metadata of queues and users.
- **[Caches](https://www.educative.io/collection/page/10370001/4941429335392256/5053577315221504)** are important to keep frequently accessed data, whether it be data pertaining to users or queues metadata.
- **[Load balancers](https://www.educative.io/collection/page/10370001/4941429335392256/4521972679049216)** are used to direct incoming requests to servers where the metadata is stored.

In our discussion on messaging queues, we focused on their functional and non-functional requirements. Before moving on to the process of designing a distributed messaging queue, it’s essential for us to discuss some key considerations and challenges that may affect the design.