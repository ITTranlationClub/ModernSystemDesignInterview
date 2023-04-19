import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230408190431.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>让我们来评估一下我们提出的CDN设计。</p><h2 id="评估" tabindex="-1"><a class="header-anchor" href="#评估" aria-hidden="true">#</a> 评估</h2><p>在这里，我们看到我们的设计如何满足我们在前几节课中讨论的要求。我们的主要要求是高性能、可用性、可扩展性、可靠性和安全性。让我们逐一讨论它们。</p><h3 id="性能" tabindex="-1"><a class="header-anchor" href="#性能" aria-hidden="true">#</a> 性能</h3><p>CDN通过最小化延迟来实现高性能。一些最小化延迟的关键设计决策如下：</p><ul><li>代理服务器通常从RAM中提供内容。</li><li>CDN代理服务器放置在用户附近，以提供更快的访问内容。</li><li>CDN也可以成为位于ISP或互联网交换点的代理服务器的提供者，以处理高流量。</li><li>请求路由系统确保用户被引导到最近的代理服务器。我们将在下一课中对请求路由系统进行详细讨论。</li><li>代理服务器使用SSD或HDD等非易失性存储系统存储长尾内容。从这些资源提供服务会比从源服务器提供内容产生更小的延迟。</li></ul><p><img src="' + _imports_0 + '" alt="QQ截图20230408190431" loading="lazy"></p>', 7);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<ul><li>正如先前讨论的，代理服务器可以以层的形式实现，如果一层没有内容，则可以通过下一层的代理服务器处理请求。例如，边缘代理服务器可以请求父代理服务器。当大多数流量来自这些ISP地区时，在特定ISP中放置代理服务器可能是最佳选择。</li></ul><h3 id="可用性" tabindex="-1"><a class="header-anchor" href="#可用性" aria-hidden="true">#</a> 可用性</h3><p>由于分布式的特性，CDN可以处理大量流量。CDN通过缓存内容作为备份来保证可用性，这样每当源服务器失败时，就可以提供服务。此外，如果CDN中的一个或多个代理服务器停止工作，其他运行的代理服务器会接管并继续驱动Web流量。此外，通过将数据复制到尽可能多的代理服务器来避免单点故障和满足请求负载的要求，可以通过边缘代理服务器的冗余性使它们成为可用的选项。最后，我们可以使用负载均衡器将用户请求分发给附近的活动代理服务器。</p><h3 id="可扩展性" tabindex="-1"><a class="header-anchor" href="#可扩展性" aria-hidden="true">#</a> 可扩展性</h3><p>CDN的设计通过以下方式促进可扩展性：</p><ul><li>它将内容靠近用户，并消除了高带宽的要求，从而保证可扩展性。</li><li>可以通过添加读取副本的数量来实现水平可扩展性，以边缘代理服务器的形式。</li><li>通过使用我们上面描述的代理服务器的分层架构来处理水平可扩展性和单个代理服务器的存储容量的限制。</li></ul><h3 id="可靠性和安全性" tabindex="-1"><a class="header-anchor" href="#可靠性和安全性" aria-hidden="true">#</a> 可靠性和安全性</h3><p>CDN通过仔细实施维护周期以及在需要时集成额外的硬件和软件来确保没有单一的故障点。除了故障之外，CDN还通过均匀分配负载到边缘代理服务器来处理大量流量负载。我们可以使用scrubber服务器来防止DDoS攻击并安全地托管内容。此外，我们可以使用heartbeat协议监视服务器的健康状况并省略有故障的服务器。实时应用程序也构建其自己的指定CDN，以防止内容泄漏问题并安全地为最终用户提供服务。</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>自1990年代以来，CDN在提供高可用性和低延迟内容传递方面发挥了重要作用。现在，CDN被认为是提高巨型服务整体性能的关键性因素。</p>', 10);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("长尾内容")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_8
  ]);
}
const _06EvaluationCDNDesign_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "06EvaluationCDNDesign.html.vue"]]);
export {
  _06EvaluationCDNDesign_html as default
};