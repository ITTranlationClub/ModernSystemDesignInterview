import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/08-LoadBalancers/QQ截图20230406210610.png";
const _imports_1 = "/model-system-design/img/08-LoadBalancers/QQ截图20230406210622.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="负载均衡器介绍" tabindex="-1"><a class="header-anchor" href="#负载均衡器介绍" aria-hidden="true">#</a> 负载均衡器介绍</h1><p>学习负载均衡器的基础知识以及其所提供的服务。</p><h2 id="什么是负载均衡" tabindex="-1"><a class="header-anchor" href="#什么是负载均衡" aria-hidden="true">#</a> 什么是负载均衡？</h2><p>在一个典型的数据中心中可能会出现每秒数百万次的请求。为了响应这些请求，数千个（或者十万个）服务器共同合作，分享接收请求的负载。</p><blockquote><p><strong>注意：</strong> 在这里，我们需要考虑如何将所有可用的服务器之间的请求均匀分配。</p></blockquote><p>负载均衡器（LB）就是这个问题的答案。负载均衡器的工作是公平地将所有客户端的请求分配给可用服务器池中的各个服务器，以避免过载或崩溃。</p><p>负载均衡层是防火墙之后数据中心内的第一点接触。如果服务每秒只处理几百或者几千个请求，则可能不需要负载均衡器。然而，为了处理越来越多的客户端请求，负载均衡器提供以下能力：</p><ul><li><p><strong>可扩展性</strong>：通过添加服务器，可以无需中断地增加应用程序或服务的容量。负载均衡器使这样的向上或向下扩展对终端用户透明。</p></li><li><p><strong>可用性</strong>：即使一些服务出现故障或故障，系统仍然保持可用。负载均衡器的工作之一是隐藏服务器的故障和故障。</p></li><li><p><strong>性能</strong>：负载均衡器可以将请求转发到负荷较小的服务器，使用户可以更快地获取响应时间。这不仅可以提高性能，还可以提高资源利用率。</p></li></ul><p>以下是负载均衡器的工作方式的示意图：</p><p><img src="' + _imports_0 + '" alt="QQ截图20230406210610" loading="lazy"></p>', 10);
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<h2 id="放置负载均衡器" tabindex="-1"><a class="header-anchor" href="#放置负载均衡器" aria-hidden="true">#</a> 放置负载均衡器</h2><p>通常，LB位于客户端和服务器之间。请求通过负载均衡层前往服务器，然后通过负载均衡层回到客户端。但这并不是唯一使用负载均衡器的地方。</p><p>我们来考虑一下三个众所周知的服务器组——web服务器、应用服务器和数据库服务器。</p><p>为了将流量负载分配到可用服务器上，可以在这三个服务的服务器实例之间使用负载均衡器，具体方式如下：</p><ul><li><p>将负载均衡器放置在应用程序和web服务器/应用程序网关的终端用户之间。</p></li><li><p>将负载均衡器放置在运行业务/应用程序逻辑的web服务器和应用服务器之间。</p></li><li><p>将负载均衡器放置在应用程序服务器和数据库服务器之间。</p></li></ul><p><img src="' + _imports_1 + '" alt="QQ截图20230406210622" loading="lazy"></p><p>在三层结构中可能使用负载均衡器的示例</p><p>实际上，在系统设计中，负载均衡器可以在任何两个服务之间的多个实例之间使用。</p><h2 id="负载均衡器提供的服务" tabindex="-1"><a class="header-anchor" href="#负载均衡器提供的服务" aria-hidden="true">#</a> 负载均衡器提供的服务</h2><p>负载均衡器不仅可以使服务具有可伸缩性、可用性和高性能，还提供一些关键服务，如：</p><ul><li><p><strong>健康检查</strong>：LB使用心跳协议来监测终端服务器的健康和可靠性。健康检查的另一个优点是提高了用户体验。</p></li><li><p><strong>TLS终止</strong>：LB通过处理与客户端之间的TLS终止减轻了终端服务器的负担。</p></li><li><p><strong>预测性分析</strong>：LB可以通过对流经它们的流量执行的分析或者使用随时间获得的流量统计数据来预测流量模式。</p></li><li><p><strong>减少人为干预</strong>：由于LB的自动化，处理故障需要减少系统管理工作量。</p></li><li><p><strong>服务发现</strong>：负载均衡器的一个优点是可以通过查询服务注册表将客户端请求转发到适当的托管服务器。</p></li><li><p><strong>安全性</strong>：负载均衡器可以在OSI模型的不同层（第3层、第4层和第7层）上缓解并减轻诸如拒绝服务（DoS）之类的攻击，从而提高安全性。</p></li></ul><p>总体而言，负载均衡器提供了系统整体设计的灵活性、可靠性、冗余性和效率。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>问题：</p><p>如果负载均衡器失效怎么办？它们不是单点故障（SPOF）吗？</p><p>答案:</p><p>负载均衡器通常以成对部署，作为一种灾难恢复措施。如果一个负载均衡器失效，并且没有什么可切换的，整个服务都将崩溃。一般地，为了保持高可用性，企业会使用负载均衡器集群，利用心跳通信来始终检查负载均衡器的健康状况。在主要LB失效时，备份可以接管。但是，如果整个集群都失败了，也可以在紧急情况下手动重新路由。</p></div><p>在接下来的课程中，我们将看到如何在复杂应用程序中使用负载均衡器以及哪种类型的负载均衡器适用于哪种用例。</p>', 14);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("负载均衡器的简化工作方式")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_11
  ]);
}
const _01LoadBalancers_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01LoadBalancers.html.vue"]]);
export {
  _01LoadBalancers_html as default
};