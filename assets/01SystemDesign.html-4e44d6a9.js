import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/22-DistributedLogging/QQ截图20230410134127.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>让我们了解分布式日志记录系统设计的基础知识。</p><h2 id="日志记录" tabindex="-1"><a class="header-anchor" href="#日志记录" aria-hidden="true">#</a> 日志记录</h2><p><strong>日志文件</strong>记录了软件应用程序中发生的事件的详细信息。这些详细信息可能包括微服务、事务、服务操作或任何有助于调试事件流的内容。日志记录对于监视应用程序的流程至关重要。</p><h2 id="日志记录的必要性" tabindex="-1"><a class="header-anchor" href="#日志记录的必要性" aria-hidden="true">#</a> 日志记录的必要性</h2><p>在理解分布式系统中事件流的情况下，日志记录非常重要。虽然看起来可能是一项繁琐的任务，但在遇到失败或安全漏洞时，日志记录有助于确定系统何时以及如何失败或被入侵。它还可以帮助找出失败或入侵的根本原因。它减少了修复系统的平均时间(MTTR)。</p><p>为什么我们不会简单地打印我们的语句以了解应用程序的流程呢?这是可能的，但并不理想。简单的打印语句无法追踪消息的严重程度。打印功能的输出通常会到达终端，而我们的需求可能是将这些数据存储在本地或远程存储上。此外，我们可能会有成千上万条打印语句，因此最好将它们结构化和存储。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230410134127" loading="lazy"></p>', 7);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<p>服务在许多节点上运行的并发活动可能需要因果信息，以正确地拼接事件流程。在处理分布式系统中的因果关系时，我们必须小心。我们使用日志记录服务来适当地管理我们分布式软件的诊断和探索性数据。</p><p>日志记录使我们能够了解我们的代码，找到未预见的错误，修复已识别的错误，并可视化应用程序的性能。这样，我们就能了解生产环境的运作方式，以及系统中的进程如何运行。</p><p>日志分析可用于以下情况：</p><ul><li>故障排除应用程序、节点或网络问题。</li><li>遵守内部安全政策、外部法规和合规性。</li><li>识别和响应数据泄露和其他安全问题。</li><li>了解用户的行为，以输入到推荐系统中。</li></ul><h2 id="我们将如何设计分布式日志记录系统" tabindex="-1"><a class="header-anchor" href="#我们将如何设计分布式日志记录系统" aria-hidden="true">#</a> 我们将如何设计分布式日志记录系统？</h2><p>我们将把分布式日志记录系统设计分为以下两个部分：</p><ol><li><p><strong>介绍</strong>：我们将讨论日志记录在分布式级别下的工作原理。我们还将展示如何限制日志文件的巨大大小，并对其进行结构化。这一课程将指导我们考虑记录有关系统信息时应考虑的要求。</p></li><li><p><strong>设计</strong>：在这一课程中，我们将定义分布式日志记录系统的需求、API设计和详细设计。</p></li></ol>', 7);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("使用打印语句而不是日志记录的问题")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_8
  ]);
}
const _01SystemDesign_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01SystemDesign.html.vue"]]);
export {
  _01SystemDesign_html as default
};
