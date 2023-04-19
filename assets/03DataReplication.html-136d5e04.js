import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/09-Databases/QQ截图20230406214321.png";
const _imports_1 = "/model-system-design/img/09-Databases/QQ截图20230406214345.png";
const _imports_2 = "/model-system-design/img/09-Databases/QQ截图20230406214406.png";
const _imports_3 = "/model-system-design/img/09-Databases/QQ截图20230406214417.png";
const _imports_4 = "/model-system-design/img/09-Databases/QQ截图20230406214425.png";
const _imports_5 = "/model-system-design/img/09-Databases/QQ截图20230406214441.png";
const _imports_6 = "/model-system-design/img/09-Databases/QQ截图20230406214455.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="数据复制" tabindex="-1"><a class="header-anchor" href="#数据复制" aria-hidden="true">#</a> 数据复制</h1><p>了解数据在多个节点之间复制的模型。</p><p>数据是组织的资产，因为它推动整个业务。</p><p>数据为业务提供了重要的商业见解，揭示了什么是重要的，需要改变什么。</p><p>组织还需要安全地保存并按需提供其客户的数据。</p><p>在不同的条件下（如读写增加、磁盘和节点故障、网络和电源故障等），及时访问所需数据是成功运营在线业务所必需的。</p><p>我们需要从数据存储中获得以下特性：</p><ul><li>容错性（故障下可用，如磁盘、节点、网络和电源故障）。</li><li>可扩展性（随着读取、写入和其他操作的增加）。</li><li>性能（客户端的低延迟和高吞吐量）。</li></ul><p>在单个节点上实现上述特性是具有挑战性的，甚至不可能。</p><h2 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h2><p><strong>复制</strong>指在各个节点（最好是地理分布）保留数据的多个副本，以实现可用性、可扩展性和性能。</p><p>在本课程中，我们假设单个节点足以容纳我们的整个数据。</p><p>在讨论将数据分区到多个节点时，我们不会使用此假设。通常，复制和分区的概念是相互关联的。</p><p>然而，与可用性等诸多好处相比，复制也带来了其复杂性。</p><p>如果复制的数据不需要频繁更改，则复制相对简单。在复制数据的过程中，主要问题在于如何随时间维护复制的数据的更改。</p><p>复制可能会引起的其他复杂性如下：</p><ul><li>如何使多个数据副本相互一致？</li><li>如何处理失败的复制节点？</li><li>我们应该同步复制还是异步复制？</li><li>在异步复制的情况下，如何处理复制滞后？</li><li>如何处理并发写入？</li><li>需要向终端程序员公开哪种一致性模型？</li></ul><p>我们将在本课程中探讨这些问题的答案。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230406214321" loading="lazy"></p><p>复制实例</p><p>在解释不同类型的复制之前，让我们了解同步和异步复制的方法。</p><h2 id="同步与异步复制" tabindex="-1"><a class="header-anchor" href="#同步与异步复制" aria-hidden="true">#</a> 同步与异步复制</h2><p>有两种方法可以将更改分发到副本节点：</p><ul><li>同步复制</li><li>异步复制</li></ul><p>在<strong>同步复制</strong>中，主节点等待从节点关于更新数据的确认。在收到所有从节点的确认后，主节点向客户端报告成功。而在<strong>异步复制</strong>中，主节点不等待从节点的确认，更新自身后向客户端报告成功。</p><p>同步复制的优点是所有从节点都完全与主节点保持最新。但是，这种方法存在缺点。如果由于故障或网络故障而导致其中一个从节点无法确认，主节点将无法向客户端确认，直到它收到崩溃节点的成功确认。这会导致主节点向客户端响应的高延迟。</p><p>另一方面，异步复制的优点是即使所有从节点都已关闭，主节点也可以继续工作。但是，如果主节点失败，则未复制到从节点的写入将丢失。</p><p>上面的段落解释了当系统的不同组件可能失败时，数据一致性和可用性之间的权衡。</p><p><img src="' + _imports_1 + '" alt="QQ截图20230406214345" loading="lazy"></p><p>同步与异步复制</p><h2 id="数据复制模型" tabindex="-1"><a class="header-anchor" href="#数据复制模型" aria-hidden="true">#</a> 数据复制模型</h2><p>现在，让我们讨论各种数据复制机制。在本节中，我们将讨论以下模型以及它们的优缺点：</p><ul><li>单个领导者或主要-次要复制</li><li>多个领导者复制</li><li>对等或无领导复制</li></ul><h3 id="单个领导者-主要-次要复制" tabindex="-1"><a class="header-anchor" href="#单个领导者-主要-次要复制" aria-hidden="true">#</a> 单个领导者/主要-次要复制</h3><p>在<strong>主要-次要复制</strong>中，数据在多个节点之间进行复制。</p><p>其中一个节点被指定为主节点。它负责处理存储在群集上的数据的任何写入。</p><p>它还将所有写入发送到从节点并保持它们同步。</p><p>如果我们的工作负载以读为主，那么主要-次要复制是合适的。</p><p>为了更好地随着读者的增加进行扩展，我们可以添加更多的跟随者，并将读取负载分布到可用的跟随者上。</p><p>但是，向许多跟随者复制数据可能会使主节点成为瓶颈。</p><p>此外，如果我们的工作负载以写为主，主要-次要复制是不合适的。</p><p>主要-次要复制的另一个优点是它具有读取弹性。</p><p>在主节点故障的情况下，从节点仍然可以处理读取请求。</p><p>因此，对于读取密集型应用程序，这是一种有用的方法。</p><p>如果我们使用异步复制，则通过此方法进行的复制可能会出现不一致性。</p><p>在主节点无法将更新的数据传播到从节点的情况下，从不同副本读取的客户端可能会看到不一致的数据。</p><p>因此，如果主节点失败，则未传递给从节点的任何丢失的更新都可能会丢失。</p><p><img src="' + _imports_2 + '" alt="QQ截图20230406214406" loading="lazy"></p>', 48);
const _hoisted_49 = /* @__PURE__ */ createStaticVNode('<div class="hint-container danger"><p class="hint-container-title">警告</p><h6 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h6><p>当主节点失败时会发生什么？</p><p>答案:</p><p>在主节点失败的情况下，可以任命一个从节点作为主节点，从而加快恢复初始主节点的过程。</p><p>选择新的主节点有两种方法：手动和自动。</p><p>在<strong>手动方法</strong>中，操作员决定哪个节点应该成为主节点，并通知所有从节点。</p><p>在<strong>自动方法</strong>中，当从节点发现主节点失败时，它们通过进行一种称为领导者选举的选举任命新的主节点。</p></div><h4 id="主要-次要复制方法" tabindex="-1"><a class="header-anchor" href="#主要-次要复制方法" aria-hidden="true">#</a> 主要-次要复制方法</h4><p>在主要-次要复制中有许多不同的复制方法：</p><ul><li>基于语句的复制</li><li>写前日志（WAL）传送</li><li>逻辑（基于行的）日志复制</li></ul><p>让我们详细讨论每个方法。</p><h5 id="基于语句的复制" tabindex="-1"><a class="header-anchor" href="#基于语句的复制" aria-hidden="true">#</a> 基于语句的复制</h5><p>在基于语句的复制方法中，主节点保存执行的所有语句，例如插入、删除、更新等，并将它们发送给从节点执行。</p><p>这种类型的复制在MySQL 5.1版本之前使用过。</p><p>这种方法似乎很好，但它也有缺点。例如，任何非确定性函数（如<code>NOW()</code>）可能会导致跟随者和主节点上的不同写操作。</p><p>此外，如果写操作依赖于先前的写操作，并且它们以错误的顺序到达从节点，则从节点上的结果将不确定。</p><h5 id="日志先写-wal-复制" tabindex="-1"><a class="header-anchor" href="#日志先写-wal-复制" aria-hidden="true">#</a> 日志先写（WAL）复制</h5><p>在日志先写（WAL）复制方法中，主节点在执行查询之前将查询保存在称为日志先写文件的日志文件中。然后使用这些日志将数据复制到从节点。</p><p>这在PostgreSQL和Oracle中使用。</p><p>WAL的问题在于它只在非常低的级别上定义数据。</p><p>它与数据库引擎的内部结构紧密耦合，这使得升级领导者和从节点上的软件变得复杂。</p><h5 id="逻辑-基于行-日志复制" tabindex="-1"><a class="header-anchor" href="#逻辑-基于行-日志复制" aria-hidden="true">#</a> 逻辑（基于行）日志复制</h5><p>在逻辑（基于行）日志复制方法中，所有从节点都复制实际的数据更改。</p><p>例如，如果在表中插入或删除一行，则从节点将在该特定表中复制该更改。</p><p>二进制日志记录主节点上数据库表的更改。</p><p>为了创建主节点的副本，从节点读取此数据并相应地更改其记录</p><p>基于行的复制不像WAL那样困难，因为它不需要关于数据库引擎内部数据布局的信息。</p><h3 id="多主节点复制" tabindex="-1"><a class="header-anchor" href="#多主节点复制" aria-hidden="true">#</a> 多主节点复制</h3><p>如上所述，使用异步复制的单个主节点复制存在缺点。</p><p>只有一个主节点，所有写操作都必须通过它，这限制了性能。</p><p>如果主节点出现故障，从节点可能没有更新的数据库。</p><p><strong>多主节点复制</strong>是单个主节点复制的替代方法。有多个主节点处理写入并将它们发送到所有其他主节点和从节点以进行复制。这种复制类型与外部工具（如MySQL的Tungsten Replicator）一起在数据库中使用。</p><p>这种复制在应用程序中非常有用，即使我们离线也可以继续工作。</p><p>例如，在日历应用程序中，我们可以设置会议，即使没有互联网访问。</p><p>一旦联网，它将从我们的本地数据库（我们的移动电话或笔记本电脑作为主节点）复制其更改到其他节点。</p><p><img src="' + _imports_3 + '" alt="QQ截图20230406214417" loading="lazy"></p><p>多主数据复制模型（全部到全部拓扑）</p><h4 id="冲突" tabindex="-1"><a class="header-anchor" href="#冲突" aria-hidden="true">#</a> 冲突</h4><p>多主节点复制比单个主节点复制具有更好的性能和可扩展性，但它也有一个重要的缺点。由于所有主节点同时处理写请求，它们可能修改相同的数据，这可能会在它们之间创建冲突。例如，假设两个客户端同时编辑相同的数据，则它们的写入操作将在它们各自的主节点上成功，但当它们异步到达其他主节点时，会创建冲突。</p><h4 id="处理冲突" tabindex="-1"><a class="header-anchor" href="#处理冲突" aria-hidden="true">#</a> 处理冲突</h4><p>冲突可能导致不同节点上的不同数据。这些应该有效地处理，而不会丢失任何数据。让我们讨论一些处理冲突的方法：</p><p><img src="' + _imports_4 + '" alt="QQ截图20230406214425" loading="lazy"></p>', 36);
const _hoisted_85 = /* @__PURE__ */ createStaticVNode('<h5 id="冲突避免" tabindex="-1"><a class="header-anchor" href="#冲突避免" aria-hidden="true">#</a> 冲突避免</h5><p>解决冲突的一个简单策略是在第一时间防止它们发生。如果应用程序能够验证给定记录的所有写操作都经过相同的领导者，就可以避免冲突。</p><p>但是，如果用户移动到不同的位置并且现在靠近不同的数据中心，冲突可能仍会发生。</p><p>如果发生这种情况，我们需要重新路由流量。在这种情况下，冲突避免方法失败并导致并发写操作。</p><h5 id="最后写入获胜" tabindex="-1"><a class="header-anchor" href="#最后写入获胜" aria-hidden="true">#</a> 最后写入获胜</h5><p>所有节点都使用本地时钟为每个更新分配一个时间戳。当发生冲突时，选择具有最新时间戳的更新。</p><p>这种方法也可能带来困难，因为在分布式系统中，节点之间的时钟同步具有挑战性。时钟偏差可能会导致数据丢失。</p><h5 id="自定义逻辑" tabindex="-1"><a class="header-anchor" href="#自定义逻辑" aria-hidden="true">#</a> 自定义逻辑</h5><p>在这种方法中，我们可以编写自己的逻辑来处理冲突，以满足应用程序的需求。</p><p>这个自定义逻辑可以在读写操作时执行。当系统检测到冲突时，它将调用我们的自定义冲突处理程序。</p><h4 id="多领导者复制拓扑结构" tabindex="-1"><a class="header-anchor" href="#多领导者复制拓扑结构" aria-hidden="true">#</a> 多领导者复制拓扑结构</h4><p>有许多拓扑结构可以实现多领导者复制，例如环形拓扑结构、星形拓扑结构和全互连拓扑结构。</p><p>其中最常见的是全互连拓扑结构。在星形和环形拓扑结构中，存在与主从复制相似的缺点，即如果其中一个节点失败，它可能会影响整个系统。</p><p>这就是为什么全互连拓扑结构是最常用的拓扑结构。</p><h3 id="对等-无领导者复制" tabindex="-1"><a class="header-anchor" href="#对等-无领导者复制" aria-hidden="true">#</a> 对等/无领导者复制</h3><p>在主从复制模型中，主节点成为瓶颈和单点故障。此外，它有助于实现读的可伸缩性，但无法提供写的可伸缩性。</p><p><strong>对等/无领导者复制</strong>模型通过没有单个主节点来解决这些问题。所有节点具有相同的权重，并且可以接受读和写请求。</p><p>亚马逊在他们的DynamoDB数据存储中流行了这种方案。</p><p><img src="' + _imports_5 + '" alt="QQ截图20230406214441" loading="lazy"></p><p>对等数据复制模型，所有节点都对所有数据执行读写操作</p><p>与主从复制类似，这种复制也可能导致不一致性。</p><p>这是因为当多个节点接受写请求时，可能会导致并发写入。</p><p>用于解决写-写不一致性问题的有用方法称为<strong>Quorums</strong>。</p><h4 id="quorums" tabindex="-1"><a class="header-anchor" href="#quorums" aria-hidden="true">#</a> Quorums</h4><p>假设我们有三个节点。如果至少有三个节点中的两个保证返回成功更新，则表示只有一个节点失败。</p><p>这意味着如果我们从两个节点读取，至少其中一个将具有更新的版本，我们的系统可以继续工作。</p><p>如果我们有 n 个节点，那么每次写操作至少要在 w 个节点上进行更新才被视为成功，并且我们必须从 r 个节点上进行读取。</p><p>只要 w+r&gt;n ，我们就可以通过读取获取更新后的值，因为至少有一个节点必须具有我们可以读取的已更新写入。</p><p>Quorum 读取和写入遵守这些 r 和 w 值。</p><p>这些 n、 w 和 r 可以在 Dynamo 风格的数据库中进行配置。</p><p><img src="' + _imports_6 + '" alt="QQ截图20230406214455" loading="lazy"></p>', 31);
const _hoisted_116 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "hint-container danger" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "hint-container-title" }, "警告"),
    /* @__PURE__ */ createBaseVNode("p", null, "当我们的工作负载以读为主时，哪种复制机制最适合（高吞吐量、低延迟、低实现开销）？"),
    /* @__PURE__ */ createBaseVNode("p", null, "A) 主-备份/单主复制"),
    /* @__PURE__ */ createBaseVNode("p", null, "B) 多主复制"),
    /* @__PURE__ */ createBaseVNode("p", null, "C) 点对点复制")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("从主节点复制数据到从节点的主要-次要数据复制模型")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_49,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("写入冲突")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_85,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("读取器从副本2获取更新的值")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_116
  ]);
}
const _03DataReplication_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "03DataReplication.html.vue"]]);
export {
  _03DataReplication_html as default
};
