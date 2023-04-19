import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, $ as createBaseVNode, a1 as createTextVNode, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/15-MonitorClient-sideErrors/ServerSideErrorsVersusClientSideErrors.png";
const _imports_1 = "/model-system-design/img/15-MonitorClient-sideErrors/BGPLeak.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "了解客户端错误及其对服务的影响。",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "客户端错误",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#客户端错误",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 客户端错误")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在分布式系统中，客户端通常通过 HTTP 请求访问服务。如果请求无法处理，则可以监视我们的 Web 和应用程序服务器的日志。如果有多个请求失败，我们可以观察内部错误的增加（错误 500）。那些根本原因在客户端的错误很难响应，因为服务对客户端系统很少有洞察力。我们可以尝试查找负载与平均负载相比的下降，但这样的图表通常很难。它可能会存在误报和漏报，因为负载出人意料地变化或因为只有少部分客户群体受到了影响。",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "许多因素会导致失败，从而使客户端无法访问服务器。这些包括以下几点：",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "DNS 名称解析失败。"),
    /* @__PURE__ */ createBaseVNode("li", null, "客户端到服务提供商路径上的任何路由失败。"),
    /* @__PURE__ */ createBaseVNode("li", null, "第三方基础设施（例如中间箱和内容分发网络）出现任何故障。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "服务器端错误与客户端错误",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h2 id="由路由错误引起的故障" tabindex="-1"><a class="header-anchor" href="#由路由错误引起的故障" aria-hidden="true">#</a> 由路由错误引起的故障</h2><p>让我们看一个真实世界的例子，说明一个错误会影响大量服务客户，但服务并不很容易意识到这一点。</p><p>Google的一个同行 ISP 不小心宣布了不应该宣布的互联网路由。因此，许多Google的客户流量开始通过意外的ISP路由，并没有到达Google。客户感到沮丧，因为他们无法与Google联系，而Google可能不会立即意识到这样的问题，因为这些问题并未发生在其基础设施上。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>边界网关协议（BGP）是一个将整个互联网连接在一起的路由协议。同本地区域网络相比，本地区域网络中每个设备都连接到同一个计算机网络，因此路由更加容易。但随着网络的扩大，它变得更加复杂，互联网由全球数百万个网络组成。大型组织和ISP为多个网络站点和位置管理互联网连接。这被称为一个自治系统（AS）。</p><p>AS处理其内部的网络流量，BGP路由器管理传入和传出的流量。每个BGP路由器都包含路由表。它允许BGP找到在互联网上发送数据包的最佳路径以到达目的地。但是可能会发生泄漏路由。泄漏路由是指自治系统在其意图范围之外宣传某些路由通告时的情况。</p><p>在2018年11月12日，发生了BGP泄漏，并影响了全球的客户，包括谷歌、Meta和亚马逊。一项服务宣布一个<code>216.58.192.0/19</code>路由到某些自治系统，并将一个更具体的路由（<code>216.58.192.0/22</code>）宣布到一个不应进一步宣布的自治系统。IP转发会选择最长的前缀进行匹配。在这个例子中，<code>/22</code>比<code>/19</code>前缀更长。由于配置错误，更具体的路由泄漏到了互联网上，因为它是如此具体，所以所有的流量都通过错误的自治系统，导致流量被删除。</p></div><p><img src="' + _imports_1 + '" alt="BGP泄漏" loading="lazy"></p>', 5);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "以上泄漏并不是唯一的。类似的问题不断出现。另一个类似的泄漏发生在2021年4月16日，当时一个自治系统错误地宣布了超过30,000个BGP前缀，导致进入其网络的流量增加了13倍。然而，随后观察到了流入量的增加并解决了问题。",
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "受影响的服务监控系统可能无法及时捕捉到上述事件。监控这种情况非常重要，以便应用程序对所有客户保持可用状态。因此，在接下来的课程中，我们将介绍帮助我们监控上述情况的方法。",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    _hoisted_5,
    _hoisted_6,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("服务端错误与客户端错误")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_7,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("BGP泄漏")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_12,
    _hoisted_13
  ]);
}
const _01ClientSideErrors_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01ClientSideErrors.html.vue"]]);
export {
  _01ClientSideErrors_html as default
};
