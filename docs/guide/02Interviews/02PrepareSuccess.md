---
icon: codestring
title: 如何为成功做准备
---

**本节目标:** 明确面试准备路径与相关学习方法。

为了获得我们所申请的工作, 大量的准备是必要的。

根据候选人的资历和熟练程度，不同的候选人需要不同的面试准备时间。

对于普通候选人来说，准备系统设计面试可能需要三到四个月的时间。

## 本课程目标

本课程帮助读者学习或温习他们的系统设计技能。我们精心策划了一些传统的/新颖的设计问题，期望涵盖系统设计的深度和广度。

接下来介绍一些可以增加您<font color=red>**知识的多样性和深度**</font>的内容。

## 技术博客

许多公司定期以技术博客的形式发布其重要工作的技术细节。

![公司技术博客](https://cdn.jsdelivr.net/gh/gaoxiang15125/BlogImage@master/20230210143028.png)

**为什么公司急于分享他们工作的技术细节？**

- 向外界表明 本公司是一个 **技术公司**, 增加在社区中的话语权,激励更多人加入他们的公司。
- 有助于向 B2B 客户宣传公司产品。
- 有助于公司间接培训潜在的未来员工。

笔者的话:

- 关注阿里云/腾讯云/华为云, 有机会参加一些开源产品发布会, 可以更直观的感受到, 技术公司对开源社区的关注 (有种恨不得你们都来帮忙的感觉).

::: tip

**注意：**  公司为了保证自己的技术优势, 开源的内容与实际生产的内容会存在细微的差别, 照搬并不可取.

:::

我们可以研究这些博客，从而深入了解公司面临的挑战或问题以及他们在设计中实际应用了哪些修改来应对这些挑战。

::: tip

**注意：** 随时了解这些创新对专业人士很重要，对面试者来说更重要。

:::

**国外技术博客网站** 

[Engineering at Meta](https://engineering.fb.com/)、[Meta Research](https://research.fb.com/)、[AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/)、[Amazon Science Blog](https://www.amazon.science/blog)、[Netflix TechBlog](https://netflixtechblog.com/)、[Google Research](https://research.google/)、[Engineering at Quora](https://quoraengineering.quora.com/)、[Uber Engineering Blog](https://eng.uber.com/)、[Databricks Blog](https://databricks.com/blog/category/engineering)、[Pinterest Engineering](https://medium.com/@Pinterest_Engineering)、[BlackRock Engineering](https://medium.com/blackrock-engineering)、[Lyft Engineering](https://eng.lyft.com/) [Salesforce Engineering](https://engineering.salesforce.com/)。

**国内技术博客网站**

美团技术团队\腾讯技术团队\阿里云栖社区\各大中间件中文网 

::: tip

**注意：** 我们应该始终对未经同行评审的材料持保留态度。以批判的眼光并带着技术敏锐度思考博客所说的内容，确定他们所说的内容是否有意义。如果它没有意义，积极的讨论它, 这将是最好的进步方式。

:::

::: info

笔者的话: 20年 Virtual app 项目公司开源了其工具框架, 许多开源作者以该框架为基础, 开发出 black Box 安卓沙盒; 随后这些开源作者收到了该公司的 '侵权威胁';

[Black Box](https://github.com/FBlackBox/BlackBox/issues/121)

:::

## 询问系统为何有效 知其然知其所以然

通过问自己正确的问题，读者可以更深入的明白设计的理由, 掌握设计的原理。

- 了解流行的应用程序如何在较高层次上工作——例如 Instagram、Twitter 等。
- 开始理解并询问**为什么使用某些组件而不是其他组件**——例如，Firebase 与 SQL。
- 建立商业化标准的副项目。从一个简单的产品开始做起，慢慢演化/改进它。
- 从零开始构建一个系统，并熟悉其构建的所有过程和细节。

最终目标是: 做到可以在没有教程的情况下, 克隆一个流行的应用程序.

### 正确的方向

系统设计涉及更高层次的组件，我们需要避免进入战壕。(不需深入前线,稳坐中军帐)

::: info

我们应该少关注机制，多关注权衡取舍。

:::

例如，讨论使用 Room 库还是原始 SQLite 是没有帮助的，因为 Room 库只是 SQLite 的包装器。更好的讨论是关于使用 MySQL 等传统数据库还是使用 MongoDB 等 NoSQL 存储。分析两种选择的利弊,得到正确答案.

我们应该从高层次的东西开始，低层次的细节会自动出现。

## 模拟面试

**模拟面试** 是准备系统设计面试的好方法。读者可以与朋友配对并允许他们提问。当然，如果你没有朋友的话(嘿,小丑, 说滴就是你) 可以自己扮演采访者和受访者的角色。

通过这种方法，我们可以自我批评并向知识渊博的朋友寻求反馈, 更好的进步。

::: tip

**注意：** 没有模拟面试可以完全模拟实际面试，因此最好在公司进行真实面试。在我们完成了一两次面试后，就能更好地评估哪些是对的，哪些是不对的。

:::