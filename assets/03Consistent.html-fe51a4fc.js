import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, $ as createBaseVNode, a1 as createTextVNode, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "本节目标:"),
    /* @__PURE__ */ createTextVNode(" 掌握一致性模型, 做到根据需求确定应用程序的一致性模型。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "什么是一致性",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#什么是一致性",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 什么是一致性？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在分布式系统中，一致性可能意味着很多事情。",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "每个副本节点在给定时间点具有相同的数据视图。(zookeeper/主从备份等)"),
    /* @__PURE__ */ createBaseVNode("li", null, "每次读请求获取最近写的值。(数据一致性)"),
    /* @__PURE__ */ createBaseVNode("li", null, "这些并不是一致性的唯一定义，因为一致性有多种形式。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "一致性模型",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "抽象",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<p>实际的系统设计过程中, 我们不可避免要用到 第三方存储系统 (eg: S3 / Cassandra)等, 这些第三方存储系统直接支持的 一致性模型, 是我们做取舍的关键因素 。</p><p>一致性范围的两端是：</p><ul><li><em>最强一致性</em></li><li><em>最弱一致性</em></li></ul><p>在这两端之间存在一致性模型，其中一些如下图所示:</p><p><img src="https://cdn.jsdelivr.net/gh/gaoxiang15125/BlogImage@master/1676041826763.png" alt="" loading="lazy"></p><p>谈到一致性, 就不得不谈到如下两个概念:</p><p>事务的 ACID 属性:</p><ul><li>原子性(Atomicity)</li><li>一致性(Consistency)</li><li>隔离性(Isolation)</li><li>持久性(Durability)</li><li>数据库规则是<strong>ACID 一致性</strong>的核心。 <ul><li>如果模式指定值必须是唯一的，则一致的系统将确保该值在所有操作中都是唯一的。</li><li>如果外键指示删除一行也将删除关联的行，则一致的系统确保一旦基行被销毁，该行所有关联的数据都应被销毁。</li></ul></li></ul><p>CAP定理</p><ul><li>一致性(Consistency)\\可用性(Availability)\\分区容错性(Partition tolerance)</li><li>分布式数据库系统中, 只能保持三个特性中的两个 (可以思考下为什么)</li><li><strong>CAP 一致性</strong>保证 <ul><li>在分布式系统中，相同逻辑值的每个副本始终具有相同的精确值。</li><li>值得注意的是，这是逻辑而非物理保证。</li><li>由于光速，在整个集群中复制数字需要一些时间。</li><li>实际操作中, 可以通过防止客户端访问存在正在变化的值，从逻辑上保证系统的一致性。</li></ul></li></ul><h2 id="最终一致性" tabindex="-1"><a class="header-anchor" href="#最终一致性" aria-hidden="true">#</a> 最终一致性</h2><p><strong>最终一致性</strong>是最弱的一致性模型。对顺序要求不严格.</p><p>可以简单理解为: 系统不额外对数据进行监管操作, 系统中此刻物理地址对应的值, 即是你获取的值.</p><p>最终一致性确保所有副本最终将相同的值返回给读取请求，但返回值并不意味着是最新值。该值最终将达到其最新状态。</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> T1: 系统创建变量 x=2\n<span class="token list punctuation">-</span> T2: 羊某发出写入请求, 预计在T4时刻将x修改为10\n<span class="token list punctuation">-</span> T3: 羽某 高某 同时尝试读取变量 x, 系统将 x=2 返回给两人\n<span class="token list punctuation">-</span> T4: 羽某 高某 再次读取变量x, 此刻及以后, 系统都将 x=10 返回给两人\n</code></pre></div><p>最终一致性确保 <strong>高可用性</strong>。</p><p><strong>实例</strong></p><p><strong>域名系统</strong>是一个高度可用的系统，基于域名系统, 我们可以通过 Internet 对一亿台设备进行名称查找。它使用最终一致性模型，不一定反映最新值。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>注意：</strong> Cassandra 是一个高度可用的 NoSQL 数据库，提供最终一致性。</p></div><h2 id="因果一致性" tabindex="-1"><a class="header-anchor" href="#因果一致性" aria-hidden="true">#</a> 因果一致性</h2><p><strong>因果一致性</strong> 的工作原理是</p><ul><li>将操作分为相关操作和独立操作。</li><li><strong>相关操作</strong> 也称为因果相关操作。</li><li>因果一致性保留因果相关操作的顺序。</li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>假设有这样一段业务逻辑:\nx=a; b=x+5; y=b;\n其中 x,y 两个变量分别由进程P1 P2 管理:\n当P1进程对x进行赋值后, P2进程不能立刻对 y 进行赋值, 而是要先 read(x)a 在 write(y)b\n这时, 我们称 read(x) 与 write(y) 之间有 因果一致性\n</code></pre></div><p>此模型不确保对没有因果关系的操作进行排序。实际执行中, 未排序的操作可能出现在任何地方.</p><p>因果一致性总体上较弱，但强于最终一致性模型。它用于防止非直觉行为。</p><p><strong>实例</strong></p><p>因果一致性模型用于评论系统。例如，对于 Facebook 帖子上的评论进行回复，我们希望在其回复的评论之后显示评论。这是因为评论与其回复之间存在因果关系。</p>', 27);
const _hoisted_34 = { class: "hint-container tip" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "hint-container-title" },
  "提示",
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "注意："),
    /* @__PURE__ */ createTextVNode(" 除了本课讨论的四种一致性模型之外，还有许多一致性模型，并且仍有空间去定义新的一致性模型。研究人员开发了新的一致性模型。例如，Wyatt Lloyd 等人, 提出了"),
    /* @__PURE__ */ createBaseVNode("strong", null, "因果+一致性模型"),
    /* @__PURE__ */ createTextVNode("来加速某些特定类型的交易。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = {
  href: "https://www.cs.princeton.edu/~wlloyd/papers/cops-sosp11.pdf",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_38 = /* @__PURE__ */ createStaticVNode('<h2 id="顺序一致性" tabindex="-1"><a class="header-anchor" href="#顺序一致性" aria-hidden="true">#</a> 顺序一致性</h2><p><strong>顺序一致性</strong> 比因果一致性模型强。它保留每个客户端程序指定的顺序。然而，顺序一致性并不能确保写入是即时可见的，但可以确保写入的顺序是固定的。(保证了时钟顺序)</p><p><strong>实例</strong></p><p>在社交网络应用中，我们通常不关心一些朋友的帖子出现的顺序。但是，我们仍然希望单个朋友的帖子以正确的创建顺序出现）。同样，我们希望我们的朋友在帖子中的评论按照他们提交的顺序显示。顺序一致性模型捕获了所有这些特质。</p><h2 id="严格一致性-线性化" tabindex="-1"><a class="header-anchor" href="#严格一致性-线性化" aria-hidden="true">#</a> 严格一致性(线性化)</h2><p><strong>严格一致性</strong>/<strong>线性化</strong> 是最强的一致性模型。此模型确保来自任何副本的读取请求将获得最新的写入值。一旦客户端收到写入操作已执行的确认，其他客户端就可以读取该值。</p><p>分布式系统天然不支持线性化, 思考这样一个场景:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>我们的系统拥有三个响应节点 NodeA NodeB NodeC\nT1: 三个节点中拥有值: x = 2\nT2: NodeA处理请求 x=10, 预计 T3时刻同步到NodeB T4时刻同步到NodeC\nT3: 羊某 羽某 分别请求 NodeB NodeC 尝试获取 x; 两人获取到了不同的结果\n该系统不符合 严格一致性\n</code></pre></div><p>笔者: 实际生产环境中, 可以通过锁/修改集群方式 解决该问题, 但这无疑增加了系统开销,降低了系统可用性, 对压力非常大的读写系统来说, 是不可忍受的</p><p>线性化影响系统的可用性，这就是为什么它并不总是被使用的原因。具有强一致性要求的应用程序使用基于<strong>复制/仲裁等</strong>技术来提高系统的可用性。</p><p><strong>实例</strong></p><p>更新帐户的密码需要严格的一致性。例如，如果我们怀疑我们的银行账户有可疑活动，我们会立即更改密码，这样未经授权的用户就无法访问我们的账户。如果由于缺乏严格的一致性而可以使用旧密码访问我们的帐户，那么更改密码将是无用的安全策略。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>注意：</strong> Amazon Aurora 提供强一致性。</p></div><h2 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要" aria-hidden="true">#</a> 摘要</h2><p>线性化的服务要求以顺序的/实时的顺序执行事务/操作。通过限制线性服务的步骤,降低交互次数, 我们可以更容易的在其之上创建应用程序.</p><p>线性化的服务比具有较弱一致性的服务具有更差的性能，但数据更为安全。</p><p>如果应用程序程序员使用具有强一致性模型的服务，则他们必须牺牲性能和可用性。这些模型可能会破坏基于它们构建的应用程序的不变性，以换取更高的性能。</p>', 17);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("p", null, [
      createTextVNode("通常，"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          _hoisted_5,
          createTextVNode(" 是用来推断分布式系统执行并发数据读取、写入和变更的正确性的"),
          _hoisted_6,
          createTextVNode("。")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_7,
    createBaseVNode("div", _hoisted_34, [
      _hoisted_35,
      _hoisted_36,
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_37, [
          createTextVNode("因果+一致性模型论文"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("Wyatt Lloyd 普林斯顿大学名誉教授")
      ])
    ]),
    _hoisted_38
  ]);
}
const _03Consistent_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "03Consistent.html.vue"]]);
export {
  _03Consistent_html as default
};
