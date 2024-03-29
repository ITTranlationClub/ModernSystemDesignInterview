---
icon: contactGroup
title: 可维护性
---

**本节目标:** 了解可维护性、掌握衡量标准并理解其与可靠性之间的关系。

## 什么是可维护性？

完成系统开发/部署工作后，主要任务变为 **通过查找和修复错误、添加新功能、保持系统平台更新以及确保系统平稳运行来保持系统的正常运行**。

定义系统设计这方面的特征的指标是 **可维护性**。我们可以将可维护性的概念进一步划分为三个基本方面：

1. **可操作性**：保证系统在正常情况下能够顺利运行后，衡量在出现故障时能够达到正常状态的难易程度。
2. **清晰度**：这是指代码的简单性。代码库越简单，就越容易理解和维护，反之亦然。
3. **可修改性**：指系统能够毫不费力地集成修改后的、新的和不可预见的功能的能力。

### 衡量可维护性

**可维护性**, `M`, 是服务在故障发生的指定时间内恢复其功能的概率。`M`衡量服务恢复正常运行状态的便捷程度。

例如，假设某个组件定义半小时的可维护性值为 95%。在这种情况下，组件在半小时内恢复到完全激活状态的概率是 0.95。

::: tip

**注意：** 可维护性是对系统在运行时进行维修和修改能力的表达。

:::

使用（平均修复时间）MTTR 作为衡量`M`的标准。
$$
平均修复时间=\frac{总维护时间}{总维护次数}
$$
换句话说，MTTR 是修复和恢复故障组件所需的平均时间。我们的目标是尽可能降低 MTTR 值。

### 可维护性和可靠性

可维护性是可靠性的一种更具体的表达。

它们之间的唯一区别是关注的变量不同。

- 可维护性是指 `time-to-repair`，

- 可靠性是指两者`time-to-repair`和`time-to-failure`。

对可维护性和可靠性分析可以帮助我们了解可用性、停机时间和正常运行时间。