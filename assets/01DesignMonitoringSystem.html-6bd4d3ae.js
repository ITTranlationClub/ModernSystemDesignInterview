import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/14-MonitorServer-sideErrors/QQ截图20230408200741.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>学习通用监控系统的初始设计。</p><h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2><p>让我们总结一下我们希望监控系统为我们完成的任务：</p><ul><li>监视服务器上关键本地进程的崩溃情况。</li><li>监视服务器上进程使用 CPU/内存/磁盘/网络带宽的任何异常情况。</li><li>监视服务器的整体健康状况，例如 CPU、内存、磁盘、网络带宽、平均负载等等。</li><li>监视服务器硬件组件故障，例如内存故障、失败或减慢的磁盘等等。</li><li>监视服务器能否到达关键的服务——例如网络文件系统等等。</li><li>监视数据中心内部所有网络交换机、负载均衡器和任何其他专用硬件。</li><li>监视服务器、机架和数据中心水平的功耗。</li><li>监视服务器、机架和数据中心上的任何电源事件。</li><li>监视外部客户端的路由信息和 DNS。</li><li>监视数据中心内部和跨数据中心的网络链接和路径延迟。</li><li>监视互联网互连点的网络状态。</li><li>监视可能跨多个数据中心的整体服务健康状况——例如 CDN 和其性能。</li></ul><p>我们希望通过自动化监控来识别系统中的异常情况并通知警报管理器或在仪表盘上显示进度。云服务提供商提供其服务的健康状况：</p><ul><li>AWS: https://health.aws.amazon.com/health/status</li><li>Azure: https://status.azure.com/en-us/status</li><li>Google: https://status.cloud.google.com/</li></ul><h2 id="我们将使用的构建块" tabindex="-1"><a class="header-anchor" href="#我们将使用的构建块" aria-hidden="true">#</a> 我们将使用的构建块</h2><p>分布式监控的设计将包含以下构建块：</p><p><strong>Blob 存储</strong>：我们将使用 Blob 存储来存储有关指标的信息。</p><h2 id="高级设计" tabindex="-1"><a class="header-anchor" href="#高级设计" aria-hidden="true">#</a> 高级设计</h2><p>我们监控服务的高级组件如下：</p><ul><li><strong>存储</strong>：时序数据库存储指标数据，例如当前 CPU 使用情况或应用程序中异常的数量。</li><li><strong>数据收集器服务</strong>：此服务从每个服务中获取相关数据并将其保存在存储中。</li><li><strong>查询服务</strong>：这是一个 API，可以查询时间序列数据库并返回相关信息。</li></ul><p><img src="' + _imports_0 + '" alt="QQ截图20230408200741.png" loading="lazy"></p>', 13);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "让我们在下一课程中深入探讨上述组件。",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("监控系统的高级设计")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_14
  ]);
}
const _01DesignMonitoringSystem_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01DesignMonitoringSystem.html.vue"]]);
export {
  _01DesignMonitoringSystem_html as default
};
