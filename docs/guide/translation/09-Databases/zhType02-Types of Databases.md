# 数据库类型
了解不同类型的数据库及其在系统设计中的应用。

正如我们之前讨论的那样，数据库分为两种类型：关系型和非关系型。让我们详细讨论一下这些类型。

## 关系型数据库
**关系型数据库**在存储数据之前遵循特定的模式。存储在关系型数据库中的数据具有先前的结构。大多数情况下，该模型将数据组织到一个或多个关系（也称为表）中，每个元组（实例）都有一个唯一的键。数据实体由实例和属性组成，其中实例存储在行中，每个实例的属性存储在列中。由于每个元组都有一个唯一的键，因此可以通过在其他表中存储主键将一个表中的元组链接到其他表中的元组，通常称为外键。

用于操作数据库的结构化查询语言（SQL）包括插入、删除和检索数据。

关系型数据库受欢迎和占主导地位的原因有很多，包括简单性、稳健性、灵活性、性能、可伸缩性和管理通用数据的兼容性。

关系型数据库提供原子性、一致性、隔离性和持久性[(ACID)](https://www.educative.io/edpresso/what-are-acid-properties-in-a-database)属性，以维护数据库的完整性。ACID是一个强大的抽象，简化了与数据的复杂交互，并将很多异常（如脏读、脏写、读偏斜、丢失更新、写偏斜和幻读）隐藏在一个简单的事务中。但是，由于ACID的设计就像一把大锤，足以解决所有问题。如果某些特定的应用程序只需要处理几个异常，那么有机会使用自定义解决方案来实现更高的性能，尽管会增加复杂性。

让我们详细讨论一下ACID：

- **原子性：**事务被认为是一个原子单元。因此，要么事务中的所有语句都将成功执行，要么它们都不会执行。如果事务中的语句失败，它应该被中止并回滚。

- **一致性：**在任何给定时间，数据库都应该处于一致状态，并且在每个事务之后都应该保持在一致状态。例如，如果多个用户想要从数据库中查看记录，则每次都应返回类似的结果。

- **隔离性：**在多个事务同时运行的情况下，它们不应相互影响。数据库的最终状态应该与事务按顺序执行的状态相同。

- **持久性：**在系统故障事件中，系统应保证已完成的事务将在数据库中永久存储。

使用各种数据库管理系统（DBMS）来定义关系型数据库模式以及其他操作，例如在数据上存储、检索和运行SQL查询。一些流行的DBMS如下所示：

- MySQL
- Oracle Database
- Microsoft SQL Server
- IBM DB2
- Postgres
- SQLite

### 为什么选择关系型数据库？
关系型数据库是软件专业人员在结构化数据存储方面的默认选择。这些数据库具有许多优点。关系数据库最大的优势之一是其对ACID事务及相关编程语义的抽象。这使得最终的程序员很方便地使用关系数据库。让我们重新查看一些关系型数据库的重要特性：

#### 灵活性
在SQL的语境下，**数据定义语言（DDL）**为我们提供了修改数据库的灵活性，包括对表、列、表的重命名和其他更改。DDL甚至允许我们在其他查询正在发生和数据库服务器正在运行时修改模式。

#### 减少冗余## 关系型数据库的优势

关系型数据库最大的优势之一就是它能够消除数据冗余。与特定实体相关的信息出现在一个表中，而与该实体相关的数据出现在通过外键链接的其他表中。这个过程称为规范化，还具有消除不一致依赖关系的附加好处。
####并发性

在设计企业数据库时，并发性是一个重要因素。在这种情况下，数据由许多用户同时读取和写入。我们需要协调这些交互以避免数据不一致，例如酒店房间的重复预订。关系型数据库通过事务性访问数据来处理并发性。正如之前解释的那样，事务被认为是原子操作，因此它也在错误处理方面起作用，要么回滚要么提交事务以进行成功执行。

####整合

从多个来源聚合数据的过程是企业应用程序中的常见做法。执行这种聚合的一种常见方式是集成共享数据库，多个应用程序在其中存储其数据。这样，所有应用程序都可以轻松访问彼此的数据，而并发控制措施则处理多个应用程序的访问。

####备份和灾难恢复

关系型数据库保证数据状态在任何时间都是一致的。导出和导入操作使备份和恢复更加容易。大多数基于云的关系型数据库执行持续镜像操作，以避免数据丢失并使恢复过程更加简便和快速。

###缺点

####阻抗不匹配

阻抗不匹配是关系模型和内存数据结构之间的差异。关系模型将数据组织成具有关系和元组的表格结构。对此结构化数据的SQL操作产生与关系代数相一致的关系。然而，它具有一些局限性。特别是，表格中的值取自不能是结构或列表。而在内存中的情况则不同，可以存储复杂的数据结构。为了使复杂结构与关系兼容，我们需要根据关系代数对数据进行翻译。因此，阻抗不匹配需要在两种表示之间进行翻译，如下图所示：

![QQ截图20230406213538](/img/09-Databases/QQ截图20230406213538.png)

视图中的单个聚合值由关系型数据库中的多个行和表组成

##为什么使用非关系型（NoSQL）数据库？

非关系型（NoSQL）数据库是用于访问和管理数据的各种数据模型的设计。有各种类型的NoSQL数据库，我们将在下一部分中进行解释。这些数据库用于需要大量半结构化和非结构化数据，低延迟和灵活数据模型的应用程序。这可以通过放松其他数据库的数据一致性限制来实现。以下是NoSQL数据库的一些特征：
- 简单设计：与关系型数据库不同，NoSQL不需要处理阻抗不匹配，例如在一个文档中存储所有员工的数据，而不是需要联接操作的多个表格。这种策略使它更简单，更容易编写少量代码，调试和维护。
- 水平扩展：主要是由于NoSQL能够在大型集群上运行数据库而受到青睐。这解决了当并发用户数量增加时的问题。由于与特定员工相关的数据存储在一个文档中，而不是分布在多个节点上的多个表格，因此轻松进行扩展。NoSQL数据库通常在多个节点上分布数据，并自动平衡数据和查询跨节点。在节点故障的情况下，可以透明地替换它们而不会引起任何应用程序中断。- **可用性:** 为了增强数据的可用性，节点替换可以在没有应用程序停机的情况下执行。大多数非关系型数据库的变种都支持数据复制，以确保高可用性和灾难恢复。- **支持非结构化和半结构化数据：** 许多NoSQL数据库处理在数据库配置或数据写入时没有架构的数据。例如，文档数据库是无结构的；它们允许文档（JSON、XML、BSON等）具有不同的字段。例如，一个 JSON 文档可以比另一个 JSON 文档少一些字段。- **成本:** 许多关系型数据库的许可证非常昂贵，而许多 NoSQL 数据库是开源的并且免费提供。同样，一些关系型数据库依赖于昂贵的专有硬件和存储系统，而 NoSQL 数据库通常使用集群的廉价通用服务器。NoSQL 数据库根据操作和特性的性质被分为各种类别，包括文档存储、列式数据库、键值存储和图形数据库。我们将在以下章节中从系统设计的角度讨论每种类型以及它们的使用场景。### NoSQL数据​​库的类型以下介绍了各种类型的 NoSQL 数据库：![QQ截图20230406213555](/img/09-Databases/QQ截图20230406213555.png)NoSQL 数据库的种类#### 键值数据库**键值数据库** 使用类似哈希表的键值方法来存储键值对数据。我们可以在下面的几段中看到它被描述。在此，键作为唯一或主键，而值可以是从简单的标量值到复杂的对象的任何值。这些数据库允许轻松分区和水平扩展数据。一些受欢迎的键值数据库包括Amazon DynamoDB、Redis和Memcached DB。**使用案例：** 键值数据库对于面向会话的应用程序非常有效。例如，Web 应用程序等面向会话的应用程序会在会话期间将用户数据存储在主存储器或数据库中。这些数据可能包括用户的配置文件信息、推荐、定向促销、折扣等。为了方便访问和存储，每个用户的会话都分配了一个唯一的 ID（一个键）。因此，存储此类数据的更好选择是键值数据库。以下图展示了一个键值数据库的示例。商品的 `Product ID` 和 `Type` 被联合视为主键，这被视为该键值数据库的键。此外，存储商品属性的架构是基于商品的性质和它拥有的属性数量来定义的。 ![QQ截图20230406213609](/img/09-Databases/QQ截图20230406213609.png)DynamoDB 中以键值对形式存储的数据，其中键是两个属性（Product ID 和 Type）的组合#### 文档数据库**文档数据库** 旨在以 XML、JSON、BSON 等格式存储和检索文档。这些文档由具有地图、集合和标量值的分层树状数据结构组成。该类型数据库中的文档可能具有不同的结构和数据。MongoDB 和 Google Cloud Firestore 是文档数据库的示例。**使用案例：** 文档数据库适用于非结构化目录数据，如 JSON 文件或其他复杂的结构化分层数据。例如，在电子商务应用程序中，一个产品具有成千上万的属性，在关系型数据库中由于其对读取性能的影响而不可行。这时文档数据库的作用就来了，它可以有效地将每个属性存储在单个文件中，以便进行简单的管理和更快的读取速度。此外，它还是内容管理应用程序（如博客和视频平台）的好选择。在这些应用程序中，存储所需的实体作为单个文档。以下示例展示存储在JSON文档中的数据。这些数据是关于一个人的。文件中存储了各种属性，包括`id`、`name`、`email`等。```json{  "id": 1001,   "name": "Brown",   "title": "Mr.",   "email": "brown@anyEmail.com",   "cell": "123-465-9999",   "likes": [      "designing",      "cycling",      "skiing"],   "businesses": [      { "name": "ABC co.",         "partner": "Vike",         "status": "Bankrupt",         "date_founded": {            "$date": "2021-12-10" } }]}```一个包含商人数据的JSON文件

#### 图形数据库

**图形数据库**使用图形数据结构存储数据，其中节点表示实体，边展示实体之间的关系。基于关系的节点组织会导致节点之间出现有趣的模式。这个数据库允许我们将数据存储一次，然后根据关系不同解释它。流行的图形数据库包括Neo4J，OrientDB和InfiniteGraph。图形数据通过存储文件进行持久化存储。每个文件包含有关图的特定部分的数据，例如节点，链接，属性等。

在下图中，一些数据使用图形数据结构存储在通过表示节点之间关系的边连接在一起的节点中。每个节点都有一些属性，例如`Name`，`ID`和`Age`。具有`ID:2`的节点具有`Name`为`James`和年龄为`29`岁的属性。

![QQ截图20230406213621](/img/09-Databases/QQ截图20230406213621.png)

一个图由节点和链接组成。该图捕获实体及其彼此之间的关系

**使用案例**：图形数据库可用于社交应用程序，并在不同类型的用户及其活动之间提供有趣的事实和数据。图形数据库的重点是存储数据，并为基于实体之间关系的分析和决策打下基础。图数据库的性质使之适用于各种应用，例如数据规定和隐私，机器学习研究，基于金融服务的应用等等。

#### 列式数据库

**列式数据库**将数据存储在列中而不是行中。它们能够快速有效地访问数据库中的所有条目。流行的列式数据库包括Cassandra，HBase，Hypertable和Amazon SimpleDB。

**使用案例**：列式数据库对于大量聚合和数据分析查询非常高效。它大大降低了磁盘I/O需求和从磁盘加载的数据量。例如，在与金融机构相关的应用中，需要在一段时间内汇总金融交易。列式数据库通过仅读取金额列而忽略客户的其他属性来更快地执行此操作。

下图显示了列式数据库的示例，其中数据以列导向格式存储。这与关系数据库存储数据的行导向方式不同。

![QQ截图20230406213645](/img/09-Databases/QQ截图20230406213645.png)

列式和行式数据库

### NoSQL数据库的缺点

#### 缺乏标准化

NoSQL没有遵循任何特定标准，例如关系数据库遵循关系代数。从一种类型的NoSQL数据库迁移应用程序可能会是个挑战。

#### 一致性

NoSQL数据库在发生故障时提供基于特定一致性和可用性权衡的不同产品。我们将没有强大的数据完整性，例如在关系数据库中的主要和参照完整性。数据可能不是强一致性的，但可能会使用弱模型（例如最终一致性）缓慢收敛。

## 选择正确的数据库

许多因素影响在应用程序中使用的数据库的选择。下表比较了关系数据库和非关系数据库，以帮助我们选择：## 关系型数据库和非关系型数据库

| **关系型数据库**                                 | **非关系型数据库**                            |
| ------------------------------------------------ | --------------------------------------------- |
| 如果要存储的数据是结构化的                      | 如果要存储的数据是非结构化的                 |
| 如果需要 ACID 属性                             | 如果需要序列化和反序列化数据                  |
| 如果数据大小相对较小且可适配于一个节点          | 如果要存储的数据大小较大                      |

> 注意：当 NoSQL 数据库首次出现时，它们与传统数据库相比程序化和使用上有很大不同。然而，在过去的许多年里，学术界和工业界进行了广泛的研究，NoSQL 和传统存储之间的面向程序员的差异已变得模糊。我们可能正在使用相同的 SQL 结构来访问 NoSQL 存储并获得与传统存储相同的性能和一致性。Google 的 Cloud Spanner 就是一个具有自动水平分片功能和高速全球数据快照的地理复制数据库。

## 测验

通过测验来测试您对不同类型数据库的了解程度。

* 当我们有非结构化数据并需要高性能时，应该使用哪种数据库？
* 在哪些情况下我们应该避免选择关系型数据库？
* 如果我们制作一个需要以表格格式存储数据的零售店应用程序，应该使用哪种数据库？
* 制作类似 Facebook 的应用应该使用哪种数据库？
* 哪些应用程序应该使用文档导向数据库？
* 哪些场景应该使用键值数据库？