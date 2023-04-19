import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/18-Pub-sub/UsingTheDistributedMessagingQueue.png";
const _imports_1 = "/model-system-design/img/18-Pub-sub/HighLevelDesignOfPubSubSystem.png";
const _imports_2 = "/model-system-design/img/18-Pub-sub/HowMessagesAreStoredWithinSegmentsInsideAPartition.png";
const _imports_3 = "/model-system-design/img/18-Pub-sub/SendMessage0.png";
const _imports_4 = "/model-system-design/img/18-Pub-sub/SendMessage9.png";
const _imports_5 = "/model-system-design/img/18-Pub-sub/ABrokerContinsMultipleTopics.png";
const _imports_6 = "/model-system-design/img/18-Pub-sub/PhysicalView.png";
const _imports_7 = "/model-system-design/img/18-Pub-sub/LogicalView.png";
const _imports_8 = "/model-system-design/img/18-Pub-sub/AnewEntryWillBeAddedAtTheEndOfTheFile.png";
const _imports_9 = "/model-system-design/img/18-Pub-sub/ProducersAddToTheEndOfFile.png";
const _imports_10 = "/model-system-design/img/18-Pub-sub/ReplicationAtThePartitioningLevel.png";
const _imports_11 = "/model-system-design/img/18-Pub-sub/FinalizedDesign.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>深入设计一个发布-订阅系统及其组件。</p><h2 id="第一个设计" tabindex="-1"><a class="header-anchor" href="#第一个设计" aria-hidden="true">#</a> 第一个设计</h2><p>在前面的课程中，我们讨论了生产者将消息写入主题，消费者订阅主题以从该主题读取消息。由于新消息添加到队列的末尾，我们可以使用<strong>分布式消息队列</strong>作为主题。</p><p>下面列出了我们需要的组件：</p><ul><li><strong>主题队列</strong>：每个主题都将是一个分布式消息队列，因此我们可以将来自生产者的消息存储到其中。生产者将将其消息写入该队列。</li><li><strong>数据库</strong>：我们将使用关系数据库存储订阅详细信息。例如，我们需要存储哪个消费者已订阅了哪个主题，以便我们可以为消费者提供他们所需的消息。我们将使用关系数据库，因为我们的与消费者相关的数据是结构化的，并且我们希望确保我们的数据完整性。</li><li><strong>消息主管</strong>：此服务将从主题队列中读取消息，从数据库中获取消费者，并将消息发送到消费者队列。</li><li><strong>消费者队列</strong>：主题队列中的消息将被复制到消费者队列中，以便消费者可以读取消息。对于每个消费者，我们将定义一个单独的分布式队列。</li><li><strong>订阅者</strong>：当消费者请求订阅主题时，此服务将向数据库添加条目。</li></ul><p>消费者将订阅主题，系统将向数据库中添加订阅者的详细信息。</p><p>生产者将写入主题，消息主管将从队列中读取消息，获取应向其添加消息的详细信息，并将其发送给他们。消费者将从其队列中消费消息。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>我们将为消息主管和订阅者使用故障转移服务以防止故障.</p></div><p><img src="' + _imports_0 + '" alt="使用分布式消息队列" loading="lazy"></p>', 9);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<p>使用分布式消息队列使我们的设计简单。然而，需要维护大量的队列是一个重要的问题。</p><p>如果我们有数百万个订阅者订阅数千个主题，定义和维护数百万个队列是昂贵的。</p><p>此外，我们将在所有订阅者队列中复制主题的相同消息，这是不必要的复制，并占用空间。</p><div class="hint-container danger"><p class="hint-container-title">警告</p><h6 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h6><p>有没有办法避免为每个读者维护单独的队列？</p><p>答案</p><p>在消息队列中，读者消费消息后，消息会消失。那么，如果为每个消息添加计数器呢？</p><p>每个订阅者消费消息时，计数器的值会减少。</p><p>只有当计数器变为零时，才会删除消息。现在，我们不需要为每个读者保留单独的队列了。</p><p><strong>问题</strong></p><p>上一种方法的问题是什么？</p><p>答案</p><p>如果使用传统的队列API，则未读消息可能会成为瓶颈。</p><p>例如，如果10个读者中有9个已经消费了队列开头的消息，则该消息不会被删除，直到第十个消费者也消费了该消息，前九个消费者将无法继续前进。</p><p>我们需要更改存储接口，以便消费者可以独立消费数据。</p><p>我们的系统需要保留足够的元数据并跟踪每个消费者消费的信息，并在所有消费者消费该信息后删除消息。</p><p>这类似于Linux中文件的硬链接的引用计数机制。</p></div><h2 id="第二个设计" tabindex="-1"><a class="header-anchor" href="#第二个设计" aria-hidden="true">#</a> 第二个设计</h2><p>让我们考虑另一种设计发布-订阅系统的方法。</p><h3 id="高层设计" tabindex="-1"><a class="header-anchor" href="#高层设计" aria-hidden="true">#</a> 高层设计</h3><p>在高层次上，发布-订阅系统将具有以下组件：</p><ul><li><strong>代理服务器</strong>：此服务器将处理消息。它将存储从生产者发送的消息并允许消费者读取它们。</li><li><strong>集群管理器</strong>：我们将有许多代理服务器以满足我们的可扩展性需求。我们需要一个集群管理器来监督代理服务器的健康状况。它将在代理服务器失败时通知我们。</li><li><strong>存储</strong>：我们将使用关系数据库存储消费者详细信息，例如订阅信息和保留期。</li><li><strong>消费者管理器</strong>：这个组件负责管理消费者。例如，它将验证消费者是否被授权从特定主题读取消息。</li></ul><p>除了这些组件之外，我们还有以下设计考虑因素：</p><ul><li><strong>确认</strong>：确认用于通知生产者已成功存储接收到的消息。如果成功消费消息，系统将等待来自消费者的确认。</li><li><strong>保留时间</strong>：消费者可以指定其消息的保留期时间。默认值为七天，但可以进行配置。一些应用程序，例如银行应用程序，需要按业务要求将数据存储几周，而分析应用程序可能在消费后不需要数据。</li></ul><p><img src="' + _imports_1 + '" alt="发布-订阅系统的高层设计" loading="lazy"></p>', 12);
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<p>让我们详细了解每个组件的作用。</p><h2 id="代理服务器" tabindex="-1"><a class="header-anchor" href="#代理服务器" aria-hidden="true">#</a> 代理服务器</h2><p>代理服务器是我们发布-订阅系统的核心组件。它将处理写入和读取请求。一个代理服务器将有多个主题，每个主题都可以与多个<strong>分区</strong>相关联。</p><p>我们使用分区将消息存储在本地存储中以进行持久化。</p><p>因此，这提高了可用性。分区包含封装在 <strong>段</strong> 中的消息。段有助于使用偏移地址标识消息的开始和结束。</p><p>使用段，消费者可以从分区中读取他们选择的消息，通过从特定的偏移地址读取。下图描绘了上述概念。</p><p><img src="' + _imports_2 + '" alt="如何在分区内的段中存储消息的描绘" loading="lazy"></p>', 7);
const _hoisted_29 = /* @__PURE__ */ createStaticVNode('<p>如我们所知，一个<strong>主题</strong>是存储在代理服务器的本地存储中的持久消息序列。</p><p>一旦数据已添加到主题中，就无法修改。</p><p>从主题读取和写入消息是计算机的I/O任务，而缩放这种任务是具有挑战性的。</p><p>这就是为什么我们将主题分成多个分区的原因。</p><p>属于单个主题的数据可以存在于多个分区中。</p><p>例如，我们假设有主题A并为其分配三个分区。生产者将发送其消息到相关主题。接收到的消息将根据 <strong>轮询算法</strong> 发送到各个分区。</p><p>我们将使用轮询的变体：<strong>加权轮询</strong>。以下幻灯片显示了如何将消息存储在属于单个主题的各个分区中。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>轮询算法:</p><p>Round-robin是一种简单且无饥饿的CPU调度算法。在该算法中，每个进程或作业都被循环分配一个固定的时间片。</p><p>考虑一个例子，其中我们有时间片200毫秒和一个执行时间为1000毫秒的作业。操作系统（OS）在round-robin算法中为任务分配CPU 200毫秒，然后将作业放置在调度队列的末尾。队列中的其他作业被分配相等的时间片（每个200毫秒）。此方法将继续，直到所有作业完成执行。</p><p>加权轮询。</p><p>加权轮询是轮询调度的一般化。它服务于一组队列或任务。</p><p>轮询循环队列或任务，并在每个周期中提供一个服务机会，而加权轮询为每个队列或任务提供指定权重的固定数量的机会，该权重用于影响每个队列或任务所接收的容量部分。</p><p>在计算机网络中，服务机会是如果所选队列非空，则发射一个数据包。</p></div><p><img src="' + _imports_3 + '" alt="" loading="lazy"> <img src="' + _imports_4 + '" alt="" loading="lazy"></p><ul><li>生产者创建同一主题的消息并将它们发送到系统</li><li>轮询算法决定我们需要存储消息的分区</li><li>轮询算法将消息发送到 分区0 并决定传入消息的分区</li><li>轮询算法将消息发送到 分区1 并决定传入消息的分区</li><li>轮询算法将消息发送到 分区1 并决定传入消息的分区</li><li>轮询算法将消息发送到 分区2 并决定传入消息的分区</li><li>轮询算法将消息发送到 分区0 并决定传入消息的分区</li><li>轮询算法将消息发送到 分区2 并决定传入消息的 分区</li><li>消息将添加到相应的分区中</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>详细过程自行脑补</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><h6 id="问题-1" tabindex="-1"><a class="header-anchor" href="#问题-1" aria-hidden="true">#</a> 问题</h6><p>严格的排序可以确保消息按照它们产生的顺序进行存储。我们如何确保我们的消息具有严格的排序？</p><p>答案：</p><p>我们将为每个分区分配一个唯一的ID，<code>partition_ID</code>。用户在写入系统时可以提供<code>partition_ID</code>。</p><p>通过这种方式，消息将被发送到指定的分区，并且顺序将是严格的。</p><p>我们写入pub-sub系统的API调用如下所示：</p><p><code>write(topic_ID, partition_ID, message)</code></p><p>如果用户不提供<code>partition_ID</code>，我们将使用加权轮询算法来决定将哪个消息发送到哪个分区。</p><p>让pub-sub的客户端有选择分区的能力可能看起来很奇怪。</p><p>但是，这样的功能可以是客户端获取某个特定时间段内的数据的基础，例如获取昨天的数据。为简单起见，我们不会在设计中包括基于时间的读取。</p><p><strong>问题</strong></p><p>如果所有分区都在同一个代理上，可能会出现什么问题？</p><p>答案：</p><p>如果代理失败或崩溃，所有分区中的消息都将丢失。为了避免这种情况，我们需要确保将分区分散在不同的代理上。</p><p><strong>问题</strong></p><p>为什么不能使用像S3这样的blob存储来保存消息，而不是代理的本地存储？</p><p>答案：</p><p>像S3这样的blob存储不针对写入和读取短数据进行优化。如果我们的数据进行地理复制，上述问题会更加严重。</p><p>因此，我们使用具有基于追加的写入的服务器本地持久性存储。传统的硬盘经过特殊调整，可以在写入连续的轨道或扇区时提供良好的写入性能。</p><p>对于磁盘的连续区域，读取吞吐量和延迟也很好，因为它允许广泛的数据缓存。</p><p><strong>问题</strong></p><p>如果我们使用轮询算法将消息发送到分区，系统在读取时如何知道查找位置？</p><p>答案：</p><p>我们的系统将需要持久地保存适当的元数据。此元数据将保持段或消息的逻辑索引与服务器标识或分区标识之间的映射关系。</p><p>我们将在本课程后面讨论消费者管理器，它将保留所需的信息。</p></div><p>我们将在系统中将分区分配给各个代理。这意味着同一主题的不同分区将在不同的代理中。我们将按照分区中的严格顺序，将新内容添加到现有消息的末尾。</p><p>考虑下面的幻灯片。我们的系统中有多个代理。每个代理有不同的主题。主题被分成多个分区。</p><p><img src="' + _imports_5 + '" alt="img" loading="lazy"></p>', 15);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_6,
      alt: "img",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_7,
      alt: "img",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们讨论过一条消息将存储在一个段中。我们将使用偏移量标识每个段。由于这些是不可变记录，读取器是独立的，可以使用必要的API函数从文件的任何位置读取消息。",
  -1
  /* HOISTED */
);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "以下幻灯片显示了段级别的详细信息。",
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_8,
      alt: "img",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_9,
      alt: "img",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createStaticVNode('<p>代理解决了我们的第一个设计所遇到的问题。</p><p>我们通过分区主题避免了大量的队列。我们使用分区引入了并行性，避免了消费消息时的瓶颈。</p><h2 id="集群管理器" tabindex="-1"><a class="header-anchor" href="#集群管理器" aria-hidden="true">#</a> 集群管理器</h2><p>我们的集群中将有多个代理。集群管理器将执行以下任务：</p><ul><li><strong>代理和主题注册表</strong>：这将存储每个代理的主题列表。</li><li><strong>管理复制</strong>：集群管理器使用领导者-追随者方法管理复制。其中一个代理是领导者。如果它失败，管理器会决定下一个领导者是谁。如果追随者失败，它会添加一个新的代理，并确保将其转换为更新的追随者。它会相应地更新元数据。我们将在不同的代理上保留每个分区的三个副本。</li></ul><p><img src="' + _imports_10 + '" alt="img" loading="lazy"></p>', 6);
const _hoisted_56 = /* @__PURE__ */ createStaticVNode('<h2 id="消费者管理器" tabindex="-1"><a class="header-anchor" href="#消费者管理器" aria-hidden="true">#</a> 消费者管理器</h2><p>消费者管理器将管理消费者。它具有以下职责：</p><ul><li><p><strong>验证消费者</strong>：管理器将从数据库中获取数据，并验证消费者是否被允许读取特定消息。例如，如果消费者已订阅主题A（但未订阅主题B），则不应允许其从主题B读取消息。消费者管理器验证消费者的请求。</p></li><li><p><strong>保留时间管理</strong>：管理器还将验证消费者是否允许读取特定消息。如果根据其保留时间，该消息对消费者不可访问，则不允许消费者读取消息。</p></li><li><p><strong>消息接收选项管理</strong>：消费者获取数据的方法有两种。第一种是我们的系统将数据推送给其消费者。这种方法可能会导致消费者被连续的消息淹没。另一种方法是消费者请求系统从特定主题读取数据。缺点是少数消费者可能希望尽快了解发布的消息，但我们不支持此功能。</p><p>因此，我们将支持这两种技术。每个消费者都将通知代理它希望数据自动推送还是需要自行读取数据。我们可以避免消费者被过度加载，并为消费者提供自由选择。我们将在关系数据库中保存此信息以及其他消费者详细信息。</p></li><li><p><strong>允许多次读取</strong>：消费者管理器存储每个消费者的偏移信息。我们将使用键值存储偏移量信息针对每个消费者。它允许快速获取并增加消费者的可用性。如果消费者1从偏移量0读取并发送了确认，我们将存储它。因此，当消费者再次读取时，我们可以为读取器提供下一个偏移量以读取消息。</p></li></ul><h2 id="最终设计" tabindex="-1"><a class="header-anchor" href="#最终设计" aria-hidden="true">#</a> 最终设计</h2><p>我们的发布-订阅系统的最终设计如下所示。</p><p><img src="' + _imports_11 + '" alt="img" loading="lazy"></p>', 6);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "结论",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#结论",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 结论")
  ],
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们看到了使用队列和使用我们的自定义存储优化了写入和读取小型数据的两种发布-订阅设计。",
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "发布-订阅具有许多用例。",
  -1
  /* HOISTED */
);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "由于生产者和消费者之间的解耦，系统可以动态扩展，并且故障得到很好的隔离。此外，由于数据消耗的正确计算，发布-订阅是生产大量数据的大规模系统的首选系统。",
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们可以准确地确定哪些数据是需要的和不需要的。",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("使用分布式消息队列")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_10,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("发布-订阅系统的高层设计")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_22,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("如何在分区内的段中存储消息的描绘")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_29,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("代理包含多个主题")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_44,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("物理视图：一个主题被拆分成许多分区，存储在其他代理上")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_45,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("逻辑视图：我们可以以另一种方式表示分区。这里，主题B被分成多个分区")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_46,
    _hoisted_47,
    _hoisted_48,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("将在文件末尾添加一个新条目")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_49,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("消费者可以从文件的任何位置读取 生产者添加到文件的末尾")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_50,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("分区级别的复制")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_56,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("最终设计")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_62,
    _hoisted_63,
    _hoisted_64,
    _hoisted_65,
    _hoisted_66
  ]);
}
const _03Design_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "03Design.html.vue"]]);
export {
  _03Design_html as default
};
