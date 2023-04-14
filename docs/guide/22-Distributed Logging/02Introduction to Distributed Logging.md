---
typora-root-url: ..
---

# Introduction to Distributed Logging

Learn about why we need logging in a distributed system.

## Logging in a distributed system

In today’s world, an increasing number of designs are moving to microservice architecture instead of monolithic architecture. In microservice architecture, logs of each microservice are accumulated in the respective machine. If we want to know about a certain event that was processed by several microservices, it is difficult to go into every node, figure out the flow, and view error messages. But, it becomes handy if we can trace the log for any particular flow from end to end.

Moreover, it is also not necessary that a microservice is deployed on only one node. It can be deployed on thousands of nodes. Consider the following example, where hundreds of microservices are interdependent, and failure of one service can result in failures of other services. And if we do not have logs, we might not determine the root cause of failure. This emphasizes the need for logging.

![QQ截图20230410134635](/img/22-Distributed%20Logging/QQ%E6%88%AA%E5%9B%BE20230410134635.png)

Microservices in a distributed systems

![QQ截图20230410134700](/img/22-Distributed%20Logging/QQ%E6%88%AA%E5%9B%BE20230410134700.png)

![QQ截图20230410135050](/img/22-Distributed%20Logging/QQ%E6%88%AA%E5%9B%BE20230410135050.png)

![QQ截图20230410135110](/img/22-Distributed%20Logging/QQ%E6%88%AA%E5%9B%BE20230410135110.png)

Another service that was dependent on the previous service also failed because of it

![QQ截图20230410135119](/img/22-Distributed%20Logging/QQ%E6%88%AA%E5%9B%BE20230410135119.png)

![QQ截图20230410135137](/img/22-Distributed%20Logging/QQ%E6%88%AA%E5%9B%BE20230410135137.png)

Similarly, other dependent services also fail

## Restrain the log size

The number of logs increases over time. At a time, perhaps hundreds of concurrent messages need to be logged. But the question is, are they all important enough to be logged? To solve this, logs have to be structured. We need to decide what to log into the system on the application or logging level.

### Use sampling

We’ll determine which messages we should log into the system in this approach. Consider a situation where we have lots of messages from the same set of events. For example, there are people commenting on a post, where Person X commented on Person Y’s post, then Person Z commented on Person Y’s post, and so on. Instead of logging all the information, we can use a **sampler service** that only logs a smaller set of messages from a larger chunk. This way, we can decide on the most important messages to be logged.

> **Note:** For large systems like Facebook, where billions of events happen per second, it is not viable to log them all. An appropriate sampling threshold and strategy are necessary to selectively pick a representative data set.

We can also categorize the types of messages and apply a filter that identifies the important messages and only logs them to the system.

Point to Ponder

###### Question

What is a scenario where the sampling approach will not work?

Hide Answer

Let’s consider an application that processes a financial ATM transaction. It runs various services like fraud detection, expiration time checking, card validation, and many more. If we start to miss out logging of any service, we cannot identify an end-to-end flow that affects the debugging in case an error occurs. Using sampling, in this case, is not ideal and results in the loss of useful data.

### Use categorization

Let’s look into the logging support provided by various programming languages. For example, there’s log4j and logging in Python. The following severity levels are commonly used in logging:

- `DEBUG`
- `INFO`
- `WARNING`
- `ERROR`
- `FATAL/CRITICAL`

Usually, the production logs are set to print messages with the severity of `WARNING` and above. But for more detailed flow, the severity levels can be set to `DEBUG` and `INFO` levels too.

Click on the “Run” button to see the execution of an example that uses Python’s logging library to print logs.

## Structure the logs

Applications have the liberty to choose the structure of their log data. For example, an application is free to write to log as binary or text data, but it is often helpful to enforce some structure on the logs. The first benefit of structured logs is better interoperability between log writers and readers. Second, the structure can make the job of a log processing system easier.

> **Note:** The structuring of logs is a dense topic in itself. We refer the interested learners to the PhD thesis by Ryan Braud titled "Query-based debugging of distributed systems.”
>
> [适用于分布式系统的基于查询的调试系统--论文](https://escholarship.org/uc/item/2p06d5sv)

## Points to consider while logging

We should be careful while logging. The logging information should only contain the relevant information and not breach security concerns. For secure data, we should log encrypted data. We should consider the following few points while logging:

- Avoid logging personally identifiable information (PII), such as names, addresses, emails, and so on.
- Avoid logging sensitive information like credit card numbers, passwords, and so on.
- Avoid excessive information. Logging all information is unnecessary. It only takes up more space and affects performance. Logging, being an I/O-heavy operation, has its performance penalties.
- The logging mechanism should be secure and not vulnerable because logs contain the application’s flow, and an insecure logging mechanism is vulnerable to hackers.

### Vulnerability in logging infrastructure

A **zero-day vulnerability** in Log4j, a famous logging framework for Java, has been identified recently. Log4j has contained the hidden vulnerability, Log4Shell (CVE-2021-44228), since 2013. Apache gave the highest available score, a CVSS severity rating of 10, to Log4Shell. The exploit is simple to execute and affects hundreds of millions of devices. Security experts are convinced that this vulnerability can allow devastating cyberattacks internationally because it can enable attackers to run malicious code and take control of the machine.