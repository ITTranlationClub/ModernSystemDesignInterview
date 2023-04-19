import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/23-DistributedTaskScheduler/QQ截图20230410141622.png";
const _imports_1 = "/model-system-design/img/23-DistributedTaskScheduler/QQ截图20230410141708.png";
const _imports_2 = "/model-system-design/img/23-DistributedTaskScheduler/QQ截图20230410141732.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>了解任务调度程序的功能和非功能要求。</p><h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h2><p>我们从以下角度来了解设计任务调度器的功能和非功能要求。</p><h3 id="功能要求" tabindex="-1"><a class="header-anchor" href="#功能要求" aria-hidden="true">#</a> 功能要求</h3><p>分布式任务调度器的功能要求如下：</p><ul><li><strong>提交任务</strong>：系统应允许用户提交任务以进行执行。</li><li><strong>分配资源</strong>：系统应能够为每个任务分配所需的资源。</li><li><strong>移除任务</strong>：系统应允许用户取消已提交的任务。</li><li><strong>监听任务执行</strong>：应适当地监视任务执行并在任务执行失败时重新安排任务。</li><li><strong>有效的资源利用</strong>：必须在时间、成本和公平性方面有效地使用资源（CPU 和内存）。效率意味着我们不会浪费资源。例如，如果我们将重型资源分配给可以在便宜的资源上轻松执行的轻型任务，则意味着我们未有效地利用我们的资源。公平性是所有租户在某个成本类别中平等概率获得资源的能力。</li><li><strong>释放资源</strong>：成功执行任务后，系统应该将分配给任务的资源收回。</li><li><strong>显示任务状态</strong>：系统应向用户显示任务的当前状态。</li></ul><p><img src="' + _imports_0 + '" alt="QQ截图20230410141622" loading="lazy"></p>', 7);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h3 id="非功能要求" tabindex="-1"><a class="header-anchor" href="#非功能要求" aria-hidden="true">#</a> 非功能要求</h3><p>分布式任务调度器的非功能要求如下：</p><ul><li><strong>可用性</strong>：系统应高度可用以安排和执行任务。</li><li><strong>持久性</strong>：系统接收的任务应具有持久性，并且不应丢失。</li><li><strong>可伸缩性</strong>：系统应能够安排和执行每天不断增加的任务数。</li><li><strong>容错性</strong>：系统必须具有容错性，在一个或多个组件出现故障时仍能提供不间断的服务。</li><li><strong>有界等待时间</strong>：这是任务在开始执行之前需要等待的时间。我们不应比预期的执行时间晚执行任务。用户不应无限期地处于等待状态。如果用户的等待时间超过一定阈值，则应通知他们。</li></ul><p><img src="' + _imports_1 + '" alt="QQ截图20230410141708" loading="lazy"></p>', 4);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "到目前为止，在本课程中，我们已经了解了任务调度程序的一般情况，并区分了集中式和分布式任务调度程序。最后，我们列出了分布式任务调度器系统的要求。",
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "我们将使用的构建块",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#我们将使用的构建块",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 我们将使用的构建块")
  ],
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在设计任务调度系统时，我们将利用以下构建块：",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_2,
      alt: "QQ截图20230410141732",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode("<ul><li><strong>速率限制器</strong> 用于限制任务的数量，以使我们的系统可靠。</li><li><strong>序列号生成器</strong> 用于唯一标识任务。</li><li><strong>数据库</strong> 用于存储任务信息。</li><li><strong>分布式队列</strong> 用于按执行顺序排列任务。</li><li><strong>监测</strong> 对于检查资源的运行状况以及检测失败的任务以向用户提供可靠的服务至关重要。</li></ul><p>我们已确定任务调度程序的要求。在下一课中，我们将根据这些要求设计任务调度系统。</p>", 2);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("分布式任务调度器的功能要求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_8,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("分布式任务调度器的非功能要求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_12,
    _hoisted_13,
    _hoisted_14,
    _hoisted_15,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("任务调度程序的构建块")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_16
  ]);
}
const _02Requirements_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "02Requirements.html.vue"]]);
export {
  _02Requirements_html as default
};
