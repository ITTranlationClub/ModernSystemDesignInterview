import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/08-LoadBalancers/QQ截图20230406211013.png";
const _imports_1 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210003.png";
const _imports_2 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210014.png";
const _imports_3 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210027.png";
const _imports_4 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210044.png";
const _imports_5 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210058.png";
const _imports_6 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210112.png";
const _imports_7 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210134.png";
const _imports_8 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210150.png";
const _imports_9 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210204.png";
const _imports_10 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210231.png";
const _imports_11 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210252.png";
const _imports_12 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210315.png";
const _imports_13 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210336.png";
const _imports_14 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210355.png";
const _imports_15 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210411.png";
const _imports_16 = "/model-system-design/img/08-LoadBalancers/QQ截图20230413210431.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>了解全局和本地负载均衡的工作原理。</p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>从前一篇课程中可以看出，负载均衡只在数据中心内部进行。然而，负载均衡在全球和本地范围内都是必需的。现在让我们了解下两种负载均衡的作用：</p><ul><li><strong>全局服务器负载均衡（GSLB）</strong>：GSLB涉及跨多个地理区域分配流量负载。</li><li><strong>本地负载均衡</strong>：这指的是在数据中心内实现的负载均衡。这种类型的负载均衡专注于提高数据中心主机的效率和资源利用率。</li></ul><p>现在我们来了解下这两种技术。</p><h2 id="全局服务器负载均衡" tabindex="-1"><a class="header-anchor" href="#全局服务器负载均衡" aria-hidden="true">#</a> 全局服务器负载均衡</h2><p>GSLB确保全球到达的流量智能地转发到数据中心。例如，在数据中心的电力或网络故障发生时，需要将所有流量重定向到另一个数据中心。</p><p>GSLB基于用户地理位置、不同位置的托管服务器数量以及数据中心的健康状况等因素做出转发决策。</p><p>在接下来的课程中，我们还将学习GSLB如何提供自动区域故障转移。</p><p>GSLB服务可以安装在本地或通过负载平衡作为服务（LBaaS）获得。</p><p>下面的插图显示GSLB可以将请求转发到三个不同的数据中心。</p><p>每个数据中心内的每个本地负载平衡层都将与GSLB保持控制平面连接，并提供有关LB和服务器群的健康状况的信息。</p><p>GSLB使用这些信息来驱动交通决策，并根据每个区域的配置和监视信息转发交通负载。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230406211013" loading="lazy"></p>', 14);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "现在，我们来讨论域名系统（DNS）如何执行GSLB。",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "dns中的负载均衡",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#dns中的负载均衡",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" DNS中的负载均衡")
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("我们知道DNS可以对DNS查询响应多个IP地址。在 DNS 的课程中，我们讨论了通过查看"),
    /* @__PURE__ */ createBaseVNode("code", null, "nslookup"),
    /* @__PURE__ */ createTextVNode("的输出，在DNS中进行负载平衡的可能性。DNS使用简单的技术，通过重新排列每个DNS查询的IP地址列表来响应。因此，不同的用户获得重新排序的IP地址列表，导致用户访问不同的服务器来满足其请求。这样，DNS可以在不同的数据中心上分配请求负载。这就是执行GSLB。特别地，DNS使用轮询进行负载平衡，如下所示：")
  ],
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      alt: "QQ截图20230413210003",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_2,
      alt: "QQ截图20230413210014",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_3,
      alt: "QQ截图20230413210027",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_4,
      alt: "QQ截图20230413210044",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_5,
      alt: "QQ截图20230413210058",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_6,
      alt: "QQ截图20230413210112",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_7,
      alt: "QQ截图20230413210134",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_8,
      alt: "QQ截图20230413210150",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_9,
      alt: "QQ截图20230413210204",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_10,
      alt: "QQ截图20230413210231",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_11,
      alt: "QQ截图20230413210252",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_12,
      alt: "QQ截图20230413210315",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_13,
      alt: "QQ截图",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_14,
      alt: "QQ截图20230413210355",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_15,
      alt: "QQ截图20230413210411",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_16,
      alt: "QQ截图20230413210431",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createStaticVNode('<p>如上所示，DNS中的轮询将客户端严格按照循环顺序转发到数据中心。然而，轮询具有以下限制：</p><ul><li>不同ISP具有不同数量的用户。服务许多客户的ISP将为其客户提供相同的缓存IP，导致端服务器的负载分布不均。</li><li>因为轮询负载平衡算法不考虑任何端服务器崩溃，所以它会继续分配崩溃服务器的IP地址，直到缓存条目的TTL过期。在这种情况下，服务的可用性可能会受到DNS级别的负载平衡的影响。</li></ul><p>尽管存在限制，轮询仍然被许多DNS服务提供商广泛使用。此外，DNS使用短TTL的缓存条目来在不同的数据中心之间进行有效的负载平衡。</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p><strong>注意：</strong> DNS不是唯一的GSLB形式。应用交付控制器（ADC）和基于云的负载平衡（稍后讨论）是更好的GSLB方法。</p></div><p><strong>什么是 ADC</strong></p><p>应用交付控制器（ADC）是应用交付网络（ADN）的一部分。</p><p>它们可以被认为是提供各种服务，包括负载平衡的LB的超集。</p><p>ADC的主要任务是执行Web加速以减少服务器农场的负载。一些在3到7层之间的众所周知的服务包括缓存、SSL卸载、代理/反向代理服务、IP流量优化等等。</p><p>ADC还实现GSLB。</p><h3 id="本地负载平衡器的需求" tabindex="-1"><a class="header-anchor" href="#本地负载平衡器的需求" aria-hidden="true">#</a> 本地负载平衡器的需求</h3><p>DNS在负载平衡方面发挥着重要作用，但它遇到以下限制：</p><ul><li>DNS数据包的小尺寸（512字节）不足以包括所有可能的服务器IP地址。</li><li>对客户端的行为控制有限。客户端可以在接收到的IP地址集中任意选择。其中一些接收到的IP地址可能属于繁忙的数据中心。</li><li>客户端无法确定建立连接的最近地址。虽然可以实现DNS地理定位和类似任播的解决方案，但它们并不是简单的解决方案。</li><li>在故障情况下，通过DNS进行恢复可能会很慢，因为缓存机制，特别是当TTL值较长时。</li></ul><p>为了解决上述问题的一些问题，我们需要另一层载荷平衡，即本地LB。</p><p>在下一课中，我们将讨论有关本地负载平衡器的不同详情。</p><h2 id="什么是本地负载平衡" tabindex="-1"><a class="header-anchor" href="#什么是本地负载平衡" aria-hidden="true">#</a> 什么是本地负载平衡？</h2><p>本地负载平衡器位于数据中心内。</p><p>它们的行为类似于反向代理，并尽最大努力将传入的请求分配给可用服务器池。传入的客户端请求无缝连接到使用虚拟IP地址（VIP）的LB。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>问题：</p><p>DNS是否可以被认为是全局服务器负载平衡（GSLB）？</p><p>答案:</p><p>是的，实际上有两种全局流量管理（GTM）的方法：</p><ul><li>通过应用交付控制器（ADC）实现的GTM：一些ADC实现了全局负载均衡（GSLB）。在这种情况下，ADC实时查看主机服务器，并根据数据中心的健康状况和容量转发请求。</li><li>通过DNS实现的GTM：DNS通过分析客户端的IP位置来进行全局负载均衡。对于每个请求域名（例如 www.educative.io ）的用户IP，基于DNS的GSLB会将IP地址转发到地理位置更接近请求IP位置的数据中心。</li></ul><p>在下一课中，我们将探讨一些本地负载平衡器的高级细节。</p></div>', 18);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("使用全局负载平衡将用户请求发送到不同的区域")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_15,
    _hoisted_16,
    _hoisted_17,
    _hoisted_18,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("来自ISP 1的用户请求服务的IP地址")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_19,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("DNS响应数据中心1的IP地址")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_20,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("用户向数据中心 1发送请求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_21,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("来自ISP 1的用户在数据中心1中得到服务")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_22,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("来自ISP 2的用户请求同一服务的DNS基础架构IP地址")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_23,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("DNS响应并执行GSLB到数据中心2的IP地址")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_24,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("用户向数据中心2发送请求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_25,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("来自ISP 2的用户在数据中心2得到服务")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_26,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("来自ISP 3的用户请求同一服务的DNS基础架构IP地址")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_27,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("DNS响应并执行GSLB到数据中心3的IP地址")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_28,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("用户向数据中心3发送请求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_29,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("来自ISP 3的用户在数据中心3得到服务 ")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_30,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("来自ISP 4的用户请求DNS基础结构以获取相同服务的IP地址。")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_31,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("DNS以轮询方式响应数据中心1的IP地址，并进行全局服务器负载平衡(GSLB)")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_32,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("用户向数据中心1发送请求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_33,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("来自ISP 4的用户在数据中心1得到服务")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_34
  ]);
}
const _02GlobalLocalBalancers_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "02GlobalLocalBalancers.html.vue"]]);
export {
  _02GlobalLocalBalancers_html as default
};
