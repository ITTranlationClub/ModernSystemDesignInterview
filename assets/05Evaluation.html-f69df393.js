import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/23-DistributedTaskScheduler/QQ截图20230410145331.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>根据我们的需求评估所提出的任务调度器系统。</p><h2 id="可用性" tabindex="-1"><a class="header-anchor" href="#可用性" aria-hidden="true">#</a> 可用性</h2><p>我们设计中的第一个组件是适当复制并确保可用性的速率限制器。任务的提交是由多个节点完成的。如果一个提交任务的节点失败了，其他节点会代替它。我们推送任务的队列也是分布式的，确保可用性。因为我们不断监控是否需要添加或删除资源，所以我们始终有资源可用。设计中的每个组件都是分布式的，使整个系统具有可用性。</p><h2 id="耐久性" tabindex="-1"><a class="header-anchor" href="#耐久性" aria-hidden="true">#</a> 耐久性</h2><p>我们将任务存储在持久性分布式数据库中，并在执行时间附近将任务推送到队列中。一旦任务被提交，它将一直保存在数据库中直到执行完成。</p><h2 id="可扩展性" tabindex="-1"><a class="header-anchor" href="#可扩展性" aria-hidden="true">#</a> 可扩展性</h2><p>我们的任务调度器提供可扩展性，因为我们的设计中任务提交者是分布式的。我们可以向集群中添加更多节点以提交不断增加的任务数量。</p><p>任务然后保存在分布式关系型数据库中，这也是可扩展的。从关系型数据库中获取的任务将被推送到分布式队列中，随着任务数量的增加，队列也会扩展。我们可以为不同类型的任务添加更多队列。我们还可以根据资源需求比例添加更多资源。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230410145331" loading="lazy"></p>', 9);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h2 id="容错性" tabindex="-1"><a class="header-anchor" href="#容错性" aria-hidden="true">#</a> 容错性</h2><p>任务在第一次执行失败时不会从队列中移除。如果执行失败，我们会尝试最大允许次数。如果任务包含无限循环，我们会在一定时间后终止任务并通知用户。</p><h2 id="有界等待时间" tabindex="-1"><a class="header-anchor" href="#有界等待时间" aria-hidden="true">#</a> 有界等待时间</h2><p>我们不会让用户等待无限长的时间。我们有一个关于最大等待时间的限制。如果达到了限制时间，由于某些原因我们无法安排任务，则会通知用户并要求他们再次尝试。</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>我们讨论了操作系统级任务调度器和数据中心级任务调度器之间的区别。我们解释了数据中心级任务调度需要分布式解决方案的原因，因为有多个租户和分散的资源。我们了解到队列是任务调度器的主要构建单元。我们还使用了分布式队列，在任务数量增加时可以扩展以利用更多资源。</p><p>这节课帮助我们评估了FIFO队列的问题。观察到任务调度器的主要工作是设置任务的优先级，为此我们使用了延迟容忍性参数。我们讨论了任务调度器如何确定延迟容忍值，并使用了不同的分布式数据库存储任务详情。我们确保依赖任务按顺序执行，通过在图形数据库中存储的DAG运行任务。根据任务数量（或需求），我们添加或删除资源以优化容量。最后，我们使用监视服务，在需要添加或删除资源时警报管理员。</p>', 7);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("我们的任务调度器系统满足的非功能性需求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_10
  ]);
}
const _05Evaluation_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "05Evaluation.html.vue"]]);
export {
  _05Evaluation_html as default
};
