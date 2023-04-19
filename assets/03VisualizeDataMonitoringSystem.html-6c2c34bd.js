import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/14-MonitorServer-sideErrors/QQ截图20230408201524.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="在监控系统中可视化数据" tabindex="-1"><a class="header-anchor" href="#在监控系统中可视化数据" aria-hidden="true">#</a> 在监控系统中可视化数据</h1><p>学习一种新的可视化大量监控数据的方法。大型数据中心有数百万台服务器，为所有服务器的健康数据进行可视化是一项具有挑战性的任务。监控一组服务器的一个重要方面是了解哪些服务器是活着的，哪些是离线的。现代数据中心可以容纳数千台服务器。我们可以使用热图在数据中心中紧凑地显示数千台服务器的信息。</p><p><strong>热图</strong>是一种数据可视化技术，通过使用颜色在二维平面上显示现象的大小。</p><h2 id="使用热图进行故障排除" tabindex="-1"><a class="header-anchor" href="#使用热图进行故障排除" aria-hidden="true">#</a> 使用热图进行故障排除</h2><p>我们将使用热图来确定服务器的状态。每个服务器机架都有一个名称，并按数据中心、群集和行进行排序，因此在任何这些级别上出现的常见问题都是显而易见的。显示大量组件运行状态的热图是一种有效的方法。一个大矩阵中每个单元格的颜色指示每个组件的健康状况。绿色单元格的节点在允许范围内运行，而红色单元格的节点在多次尝试后没有响应。</p><p>下面是一个显示服务器状态的热图。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230408201524" loading="lazy"></p>', 7);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们可以使用热图对全球分布式系统进行监视，并持续共享服务器的健康信息。我们可以使用一位（一为活，零为死）。对于1,000,000个服务器，我们有125 KB的数据。我们可以通过红色颜色快速发现掉线的服务器，并集中精力解决问题的部分。",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们可以创建类似的热图，以俯视任何资源，例如文件系统、网络交换机、链接等。",
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "总结",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#总结",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 总结")
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "在分布式系统中，监控系统是关键，因为它们有助于分析系统并在出现问题时向利益相关者发出警报。"),
    /* @__PURE__ */ createBaseVNode("li", null, "我们可以使用推拉方法的混合来使监控系统可扩展。"),
    /* @__PURE__ */ createBaseVNode("li", null, "热图是一种强大的可视化工具，可以帮助我们在紧凑的空间中了解数千台服务器的健康情况。")
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
        createTextVNode("使用热图查看数据中心中的服务器")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_8,
    _hoisted_9,
    _hoisted_10,
    _hoisted_11
  ]);
}
const _03VisualizeDataMonitoringSystem_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "03VisualizeDataMonitoringSystem.html.vue"]]);
export {
  _03VisualizeDataMonitoringSystem_html as default
};
