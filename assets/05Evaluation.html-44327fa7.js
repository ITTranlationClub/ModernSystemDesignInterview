import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/20-BlobStore/QQ截图20230409215824.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>让我们评估我们的设计如何帮助我们实现我们的要求。</p><h2 id="可用性" tabindex="-1"><a class="header-anchor" href="#可用性" aria-hidden="true">#</a> 可用性</h2><p>我们设计中的复制部分使系统可用。为了读取数据，我们为每个 blob 保留四个副本。有了副本，我们可以分发请求负载。如果一个节点出现故障，其他副本节点可以提供请求。此外，我们的副本放置策略处理整个数据中心故障，甚至可以处理由自然灾害引起的区域不可用情况。我们使用监控服务确保在任何时刻都有足够的副本可用，如果失败的副本数量超过指定的阈值，监控服务会及时复制数据。</p><p>对于写请求，我们在容错的集群中复制数据，并快速响应用户，使系统对写请求可用。</p><p>为保持控制节点的可用性，我们保留其状态的备份。在控制节点故障的情况下，我们启动一个新的控制节点实例，从保存的状态初始化它。</p><h2 id="持久性" tabindex="-1"><a class="header-anchor" href="#持久性" aria-hidden="true">#</a> 持久性</h2><p>复制和监控服务确保数据的持久性。一旦上传数据，在存储集群内同步复制。如果一个节点出现数据丢失，我们可以从其他节点恢复数据。监控服务监控存储磁盘。如果任何磁盘发生故障，监控服务将提醒管理员更换磁盘，并向控制节点发送消息，将该磁盘上的内容复制到其他可用磁盘或新添加的磁盘上。然后，控制节点更新映射。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230409215824" loading="lazy"></p>', 8);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<h2 id="可扩展性" tabindex="-1"><a class="header-anchor" href="#可扩展性" aria-hidden="true">#</a> 可扩展性</h2><p>将 blob 分割成小块并进行分区和拆分，帮助我们扩展到数十亿个 blob 请求。Blob 被分区为不同的范围，并由不同的分区服务器提供服务。分区映射指定哪个分区服务器将提供哪个特定范围的 blob 请求。分区还提供了自动负载平衡，以满足 blob 的流量需求。</p><p>我们的系统在存储方面是水平可扩展的。随着存储需求的增加，我们添加更多的数据节点。然而，在某个时候，我们的控制节点可能会成为瓶颈。单个控制节点可以处理每秒 10,000 个查询（QPS）。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>问题：\n当我们的主服务器达到其极限时（无法通过纵向扩展来改善其计算能力）时，我们如何进一步扩展？\n答案：\n我们可以制作我们系统的两个独立实例。每个实例都有自己的控制节点和一组数据节点。部署类似于我们的系统的系统已被证明可以扩展到数百万个亿。因此，制作额外的实例可以帮助我们进一步扩展。\n对于单个实例的进一步扩展，我们需要新的、更复杂的设计。\n</code></pre></div><h2 id="吞吐量" tabindex="-1"><a class="header-anchor" href="#吞吐量" aria-hidden="true">#</a> 吞吐量</h2><p>我们在不同的数据节点上保存 blob 的块，将 blob 的请求分发到多台机器。从多个数据节点并行获取块，帮助我们实现高吞吐量。</p><p>此外，在客户端、前端服务器和控制节点等不同层次上缓存可以提高我们的吞吐量并降低延迟。</p><h2 id="可靠性" tabindex="-1"><a class="header-anchor" href="#可靠性" aria-hidden="true">#</a> 可靠性</h2><p>我们通过我们的监控技术实现可靠性。例如，心跳协议使控制节点更新数据节点的状态。这使控制节点仅从可靠的节点请求数据。此外，它采取必要的预防措施来确保可靠的服务。例如，一个节点的故障会触发控制节点请求一个附加的副本节点。## 监控服务</p><p>监控服务还会向管理员发出警报，要求更换故障硬件（例如：故障硬盘、损坏的网络链接或交换机）。为了确保可靠的服务，主节点会跟踪磁盘上的可用空间。如果剩余可用空间达到某个阈值，就会向管理员发送警报，要求添加新的硬盘。</p><h2 id="一致性" tabindex="-1"><a class="header-anchor" href="#一致性" aria-hidden="true">#</a> 一致性</h2><p>我们在写请求时，在存储集群内同步复制磁盘数据块，使数据在存储集群内具有强一致性。这是用户的关键路径。我们从同一存储集群中为后续读取请求提供此数据，直到我们在另一个数据中心或其他存储集群中复制了此数据。</p><p>在响应写请求并在存储集群内复制数据后，我们会异步地在远离或其他区域的数据中心内复制 Blob，以确保可用性。</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>我们看到 Blob 存储是设计用于存储大型和非结构化数据。 Blob 存储帮助应用程序存储图片、视频、音频等数据。现在，许多应用程序都在使用，如 YouTube、Facebook、Instagram、Twitter 等。我们设计了一个用户可以执行 Blob 存储基本功能的系统。最后，我们根据非功能需求评估了我们的设计。</p>', 15);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("Blob Store 提供的保证")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_9
  ]);
}
const _05Evaluation_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "05Evaluation.html.vue"]]);
export {
  _05Evaluation_html as default
};
