import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230408183638.png";
const _imports_1 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230408183646.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>了解 CDN 解决了什么问题。</p><h2 id="问题陈述" tabindex="-1"><a class="header-anchor" href="#问题陈述" aria-hidden="true">#</a> 问题陈述</h2><p>让我们先问一个问题：如果全球数百万用户使用我们的数据密集型应用程序，而我们的服务部署在一个数据中心中以服务用户请求，可能会出现什么问题？</p><p>以下问题可能会出现：</p><ul><li><strong>高延迟</strong>：由于与服务数据中心的物理距离，用户感知的延迟将很高。用户感知的延迟有许多组成部分，如传输延迟 (可用带宽的函数)、传播延迟 (距离的函数)、排队延迟 (网络拥塞的函数) 和节点处理延迟。因此，跨越较长距离的数据传输会导致更高的延迟。实时应用程序通常需要低于 200 毫秒 (ms) 的延迟。对于互联网语音 (VoIP)，延迟不应超过 150 毫秒，而视频流应用程序不能容忍超过几秒钟的延迟。</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>注意：</strong> 根据 2021 年 12 月 21 日所作的一项调查显示，从美国东部 (弗吉尼亚州北部) 到美国西部 (加利福尼亚州北部) 的平均延迟为 62.9 毫秒。跨大陆——例如从美国东部 (弗吉尼亚州北部) 到非洲 (开普敦)——为 225.63 毫秒。这是双向延迟，也称为往返延迟。</p></div><p><img src="' + _imports_0 + '" alt="QQ截图20230408183638" loading="lazy"></p>', 7);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "数据密集型应用程序"),
      /* @__PURE__ */ createTextVNode("：数据密集型应用程序需要传输大量流量。在较长距离上，由于网络路径穿过不同类型的互联网服务提供商，这可能是一个问题。由于一些较小的路径消息传输单元 (MTU) 链接，应用程序在网络上的吞吐量可能会降低。同样，网络路径的不同部分可能具有不同的拥塞特性。随着用户数量的增加，问题会倍增，因为当多个客户端请求数据时，源服务器将需要逐个向每个用户提供数据。也就是说，当使用流媒体服务的应用程序既是数据密集型又是动态的情况下，原始数据中心需要发送大量冗余数据。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "hint-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "hint-container-title" }, "提示"),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "注意："),
      /* @__PURE__ */ createTextVNode(" 根据一项调查，78% 的美国消费者使用流媒体服务，这是五年内增长了 25%。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "数据中心资源的稀缺性"),
      /* @__PURE__ */ createTextVNode("：重要的数据中心资源，如计算能力和带宽，在服务的用户数量显著增加时会成为限制因素。同时吸引数百万用户的服务需要扩展。即使在单个数据中心中扩展，当数据中心由于自然灾害或与互联网连接问题而离线时，它仍可能成为单点故障。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      alt: "QQ截图20230408183646",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>注意：</strong> 根据一项研究，YouTube、Netflix 和 Amazon Prime 在 2020 年共占据了 80% 的互联网流量。大约在 2016 年，CDN 供应商 Akamai 为 15% 到 30% 的网络流量提供服务 (约为 30 太比特每秒)。对于 90% 的互联网用户，Akamai 距离只有一跳。因此，我们有很充分的理由在不使互联网核心成为瓶颈的情况下优化这些数据的传递和消耗。</p></div><h2 id="我们将如何设计-cdn" tabindex="-1"><a class="header-anchor" href="#我们将如何设计-cdn" aria-hidden="true">#</a> 我们将如何设计 CDN？</h2><p>我们将 CDN 的设计分为六个部分：</p><ol><li><strong>CDN 简介：</strong> 我们将提供关于 CDN 的全面介绍，并确定功能和非功能要求。</li><li><strong>CDN 的设计：</strong> 我们将解释如何设计 CDN。我们还将简要描述 API 的设计。</li><li><strong>CDN的深入研究：第1部分：</strong> 本课程将解释缓存策略和CDN架构。此外，我们还将讨论寻找最近的代理服务器的各种方法。</li><li><strong>CDN的深入研究：第2部分：</strong> 我们将讨论如何使CDN中的内容保持一致以及代理服务器的部署。我们还将详细介绍定制和专业的CDN。</li><li><strong>CDN的评估：</strong> 本课程将提供我们提出的设计的评估。</li><li><strong>CDN系统设计测验：</strong> 我们将通过测验加强CDN设计的主要概念。</li></ol><p>让我们在下一课中考虑解决讨论的问题的解决方案。</p>', 5);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("源数据中心在全球范围内满足用户的请求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_8,
    _hoisted_9,
    _hoisted_10,
    _hoisted_11,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("Facebook 和 YouTube 应用程序的用户增长趋势")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_12
  ]);
}
const _01ContentDeliveryNetwork_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01ContentDeliveryNetwork.html.vue"]]);
export {
  _01ContentDeliveryNetwork_html as default
};