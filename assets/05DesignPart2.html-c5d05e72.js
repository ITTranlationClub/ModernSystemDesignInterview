import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/17-DistributedMessagingQueue/PrimarySecondaryModelOfDistributedQueue.png";
const _imports_1 = "/model-system-design/img/17-DistributedMessagingQueue/nodeTable.png";
const _imports_2 = "/model-system-design/img/17-DistributedMessagingQueue/AClusterOfIndependentHosts.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>了解消息队列的详细设计及其在后端服务器中的管理。</p><p>在上一课中，我们讨论了前端服务器和元数据服务的职责。在本课中，我们将重点关注存储队列和消息的主要设计部分：后端服务。</p><h2 id="后端服务" tabindex="-1"><a class="header-anchor" href="#后端服务" aria-hidden="true">#</a> 后端服务</h2><p>这是架构的核心部分，其中进行了重大的活动。当前端接收到消息时，它会参考元数据服务来确定需要发送消息的主机。然后将消息转发到主机，并在相关主机上复制以克服可能存在的可用性问题。在不同主机的集群中复制消息可以使用以下两种模型之一来执行：</p><ol><li><em>主备模型</em></li><li><em>独立主机集群</em></li></ol><p>在深入探讨这些模型的细节之前，让我们讨论负责队列管理的两种类型的集群管理器: <em>内部</em>和<em>外部</em>集群管理器。这两个集群管理器的区别如下表所示。</p><table><thead><tr><th><strong>内部集群管理器</strong></th><th><strong>外部集群管理器</strong></th></tr></thead><tbody><tr><td>它管理集群内队列的分配。</td><td>它管理跨集群的队列分配。</td></tr><tr><td>它了解集群中的每个节点。</td><td>它了解每个集群。但是，它没有有关集群中存在的每个主机的信息。</td></tr><tr><td>它听取来自每个节点的心跳。</td><td>它监视每个独立集群的健康状况。</td></tr><tr><td>它管理主机故障，实例的添加和从集群中删除。</td><td>它管理和利用集群。</td></tr><tr><td>它将队列分区成几个部分，每个部分都有一个主服务器。</td><td>它可以将队列分割到多个集群中，使相同队列的消息在多个集群之间平均分布。</td></tr></tbody></table><h3 id="主备模型" tabindex="-1"><a class="header-anchor" href="#主备模型" aria-hidden="true">#</a> 主备模型</h3><p>在<strong>主备模型</strong>中，每个节点都被视为一个队列集合的<strong>主机</strong>。主机的职责是接收特定队列的请求并完全负责数据复制。请求由前端接收，前端通过元数据服务与内部集群管理器通信以确定请求的主机。</p><p>例如，假设我们有两个标识为101和102的队列，分别驻留在四个不同的主机A、B、C和D上。在此示例中，实例B是队列101的主机，并且将队列101复制到的辅助主机是A和C。随着前端接收到的消息请求，它通过元数据服务从内部集群管理器中识别主服务器。消息从主实例中检索，主实例也负责在使用后删除原始消息及其所有副本。</p><p>如下图所示，内部集群管理器是负责主机、辅助主机和队列之间映射的组件。此外，它还有助于选择主机。因此，它需要可靠、可扩展和高性能。</p><p><img src="' + _imports_0 + '" alt="" loading="lazy"></p>', 12);
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<h3 id="独立主机集群" tabindex="-1"><a class="header-anchor" href="#独立主机集群" aria-hidden="true">#</a> 独立主机集群</h3><p>在<strong>独立主机集群</strong>中，每个主机都是独立的，无需使用主服务器或辅助服务器。在该模型中，消息复制是通过外部集群管理器来实现的。该管理器将队列消息分配给独立集群。由于每个主机都是独立的，因此这个模型较为灵活，能够扩展到更大的规模。但是，这种模型需要更复杂的管理和监控系统。</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p>问题：</p><p>随机主机如何在同一集群中的其他主机的队列中复制数据（即消息）？</p><p>答案：</p><p>每个主机都包含队列与集群中其他主机之间的映射，从而使复制变得更加容易。</p><p>假设我们有一个名为Y的集群，其中包含主机A、B和C。该集群有两个队列，ID分别为101和103，存储在不同的主机上，如下表所示。这个表格存储在集群Y中的每个主机上。当一个随机的主机收到一个消息，比如主机C，针对一个ID为103的队列，主机C会将这个消息复制到存储队列103的其他主机上，即节点A和节点B。</p><p><img src="' + _imports_1 + '" alt="img" loading="lazy"></p></div><p>同样的过程被应用于从消费者接收消息请求。与第一种方法类似，随机选择的主机负责在成功处理消息后进行消息传递和清理。</p><p>此外，还引入了另一个组件，称为外部集群管理器，该管理器负责维护队列和集群之间的映射，如下图所示。外部集群管理器还负责队列管理和将特定队列分配给集群。</p><p>下图说明了独立主机集群。有两个集群A和B，它们由几个节点组成。外部集群管理器具有队列和其相应集群之间的映射表。每当前端接收到队列的请求时，它确定队列对应的集群，并将请求转发到队列所在的集群。该集群内的节点负责相应地存储和发送消息。</p><p><img src="' + _imports_2 + '" alt="" loading="lazy"></p>', 7);
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<div class="hint-container danger"><p class="hint-container-title">警告</p><p>问题：</p><p>在将消息复制到其他主机时会出现什么样的异常情况？</p><p>回答：</p><p>将消息复制到多个主机上的队列有两种方式：</p><ul><li>同步复制</li><li>异步复制</li></ul><p>在同步复制中，主机负责将消息复制到其他主机上的所有相关队列。在辅助主机确认后，主机会通知客户端消息的接收情况。在这种方法中，消息在所有队列副本中保持一致；然而，它会增加通信延迟，并在推选辅助主机作为主机的选举过程中导致部分或无可用性。</p><p>在异步复制中，主机一旦接收到消息，就会向客户端发送确认，并在下一步中开始将消息复制到其他主机。但这种方法也会带来其他问题，如复制滞后和一致性问题。</p><p>根据应用程序的需求，我们可以选择其中之一。</p></div><p>我们已经完成了一个分布式消息队列的设计，并讨论了两种组织后端服务器的模型。我们还描述了队列管理过程以及后端如何处理消息。此外，我们还讨论了如何通过不同的集群管理器管理后端服务器。</p><p>在下一节课中，我们将讨论我们的系统如何满足本章前面描述的功能和非功能要求。</p>', 3);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("分布式队列的主从模型：接收具有ID 101的队列的请求，并相应地服务")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_13,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("一个由分布式队列组成的独立主机集群")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_20
  ]);
}
const _05DesignPart2_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "05DesignPart2.html.vue"]]);
export {
  _05DesignPart2_html as default
};
