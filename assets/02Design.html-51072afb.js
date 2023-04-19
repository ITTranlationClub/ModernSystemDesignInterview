import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/15-MonitorClient-sideErrors/ProberCheckingAvailabilityOfWebsite.png";
const _imports_1 = "/model-system-design/img/15-MonitorClient-sideErrors/EvaluatingTheAgentSreportToSeeAsPikeInerrors.png";
const _imports_2 = "/model-system-design/img/15-MonitorClient-sideErrors/ActivateAndDeactivateReports.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>本文介绍如何设计一个监控系统，监控无法到达我们服务的错误。</p><p>一个服务无法看到在其基础架构中未发生的错误。</p><p>这些故障同样令客户感到沮丧，他们可能需要向朋友询问，“服务X也挂了吗？”或者前往诸如 <code>Downdetector</code> 之类的网站，查看是否有其他人报告了相同的问题。他们可能会通过推特或其他沟通渠道报告问题。</p><p>然而，所有这些情况都有很慢的反馈循环。作为服务提供商，我们希望尽快检测到这些问题，采取补救措施。让我们设计这样一个系统。</p><h2 id="初始设计" tabindex="-1"><a class="header-anchor" href="#初始设计" aria-hidden="true">#</a> 初始设计</h2><p>为确保客户端请求到达服务器，我们将作为客户端执行可达性和健康性检查。</p><p>我们需要全球各地的各种视角。</p><p>我们可以运行一个称为探测器的服务，定期发送请求到服务以检查可用性。这样，我们就可以监视来自许多不同地方对我们服务的到达性。</p><p><img src="' + _imports_0 + '" alt="ProberCheckingAvailabilityOfWebsite" loading="lazy"></p>', 9);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h3 id="探测器的问题" tabindex="-1"><a class="header-anchor" href="#探测器的问题" aria-hidden="true">#</a> 探测器的问题</h3><p>我们可能会遇到以下探测器问题：</p><ul><li><p><strong>不完整的覆盖范围</strong>：我们可能没有覆盖所有自治系统的良好覆盖范围。截至2021年3月，互联网上有约10万个唯一的自治系统。这不是成本效益高或甚至可能无法在全球范围内部署那么多探针。国家或ISP特定法规以及需要定期维护是实施此类方案的另一个障碍。</p></li><li><p><strong>缺乏用户模仿</strong>：这些探测可能无法代表典型用户行为，以说明典型用户将如何使用服务。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>初始设计基于主动探测</p></div><h2 id="改进设计" tabindex="-1"><a class="header-anchor" href="#改进设计" aria-hidden="true">#</a> 改进设计</h2><p>我们可以将探测器嵌入实际应用程序中，而不是在视角点上使用探测器。我们将有以下两个组件：</p><ul><li><p><strong>代理</strong>：这是嵌入在客户端应用程序中的探测器，向主服务发送适当的服务报告，以报告任何故障。</p></li><li><p><strong>收集器</strong>：这是一个独立于主服务的报告收集器。它是独立的，以避免客户代理想要向失败的服务报告错误的情况。我们从收集器中汇总错误报告，并查找错误图表中的高峰以查看客户端问题。</p></li></ul><p>以下图例展示了代理如何在主服务不可达时到达独立收集器：</p><p><img src="' + _imports_1 + '" alt="EvaluatingTheAgentSreportToSeeAsPikeInerrors" loading="lazy"></p>', 9);
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<p>这些收集器是一种大数据处理系统的层次结构。我们可以将它们放置在客户端网络附近，并随着时间的推移，我们可以从所有这些本地化站点积累这些统计数据。我们将使用在线流处理系统，使这样的系统接近实时。如果我们主要寻找摘要统计信息，我们的系统可以容忍一些错误报告的丢失。某些报告将相对于整体用户群体。我们可能会说服务用户的1％是“某些人”。如果我们不想丢失任何报告，我们需要更加谨慎地设计系统，这将更昂贵。</p><p>现在，我们将解决以下问题：</p><ul><li><p>用户是否可以激活和停用客户端报告？</p></li><li><p>客户端代理在故障条件下如何到达收集器？</p></li><li><p>我们将如何保护用户隐私？</p></li></ul><h2 id="激活和停用报告" tabindex="-1"><a class="header-anchor" href="#激活和停用报告" aria-hidden="true">#</a> 激活和停用报告</h2><p>我们将使用自定义HTML标头向收集器发送适当的信息。虽然客户端通过浏览器访问服务，但特定的浏览器应该了解此功能，以便在HTTP请求中适当填写标头信息。对于制造浏览器并提供服务的组织（例如基于Chromium的浏览器），此类功能可以随着时间的推移进行整合和标准化。</p><p>另一个解决方案可以使用服务控制的客户端应用程序，然后我们可以轻松地通过HTTP包括这些标题。# 在请求头中填写信息</p><p>如果客户端已经同意了，客户端可以填写请求头。服务端可以回复有关策略和集合端点的适当值。</p><p><img src="' + _imports_2 + '" alt="ActivateAndDeactivateReports" loading="lazy"></p>', 8);
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<h2 id="在故障条件下接触收集器" tabindex="-1"><a class="header-anchor" href="#在故障条件下接触收集器" aria-hidden="true">#</a> 在故障条件下接触收集器</h2><p>收集器需要处于与我们尝试监控的Web服务端点不同的故障域中。客户端可以尝试在不同的故障域中使用各种收集器，直到找到一个可用的为止。我们可以在以下示例中看到类似的模式。有时我们称这种现象为不在故障范围之内。</p><p>如果我们要查看IP的可达性，我们将服务托管在不同的IP上。如果我们要监视域的可用性，则将收集器托管在不同的域上。如果我们要检测自主系统路由是否被劫持，则将服务托管在不同的自主系统中。不过，对于最终的错误，作为服务提供商，我们没有太多可以做的。我们可以在客户端积累这些事件，并在下一次连接时报告它们。服务可以影响其余的组件故障。</p><table><thead><tr><th>1.2.3.4不可达</th><th>不同的服务器 IP</th></tr></thead><tbody><tr><td>找不到example.com</td><td>不同的域</td></tr><tr><td>AS 1234已被劫持</td><td>不同的 ASN</td></tr><tr><td>CDN可用</td><td>不同/没有 CDN</td></tr><tr><td>最后一英里故障</td><td>没有可用的后备服务</td></tr></tbody></table><h2 id="保护用户隐私" tabindex="-1"><a class="header-anchor" href="#保护用户隐私" aria-hidden="true">#</a> 保护用户隐私</h2><p>使用客户端软件的人类用户应全面掌握每个请求所收集和发送的数据。用户还应该能够随时重新激活该功能。如果我们使用客户端应用程序（而不是浏览器应用程序），我们可以在报告中包含许多诊断。对于基于浏览器的客户端，我们可以避免包含以下信息：</p><ul><li><p>我们可以避免包括用于查看客户端到服务路径的跟踪路由跳数。用户可能容易受到其地理位置的影响。这可能类似于收集位置信息。</p></li><li><p>我们可以避免包含正在使用的DNS解析器。同样，关于DNS的细节可以泄露有关位置的一些信息。</p></li><li><p>我们可以避免包括往返时间（RTT）和数据包丢失信息。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>作为一项指导规则，我们应尽可能收集尽可能少的信息，并且必须仅用于用户给予同意的特定目的。</p></div><p>理想情况下，对于基于Web的客户端，我们应仅收集在任何请求成功时在weblog中记录的信息。</p><p>我们不应使用任何主动探测方式，除非用于测试服务的标准功能并报告此类探测结果。因此，排除了跟踪路由和RTT或数据包丢失信息。</p><p>任何中介（如ISP或中间件）都不能更改、添加或删除错误报告机制，因为它们是加密的。同样，指定的收集器是此类数据可能会去的唯一地方。</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>在分布式系统中，难以检测和响应客户端端的错误。因此，监视此类事件以提供良好的用户体验非常必要。</p><p>我们可以使用独立代理处理错误，该代理向收集器发送有关任何故障的服务报告。这些收集器在基础设施和部署方面应与主要服务独立。</p>', 14);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("探测器检查网站可用性")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_10,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("评估代理报告以查看错误高峰")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_19,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("激活和停用报告")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_27
  ]);
}
const _02Design_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "02Design.html.vue"]]);
export {
  _02Design_html as default
};
