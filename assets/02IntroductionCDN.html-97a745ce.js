import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, $ as createBaseVNode, a0 as createVNode, a3 as withCtx, a1 as createTextVNode, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230408183942.png";
const _imports_1 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230408183957.png";
const _imports_2 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230408184012.png";
const _imports_3 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230408184037.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "了解CDN，规范CDN设计要求。",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "建议解决方案",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#建议解决方案",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 建议解决方案")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("解决上一节讨论的所有问题的解决方案是"),
    /* @__PURE__ */ createBaseVNode("strong", null, "内容交付网络"),
    /* @__PURE__ */ createTextVNode("(CDN)。CDN是一组地理分布的代理服务器。"),
    /* @__PURE__ */ createBaseVNode("strong", null, "代理服务器"),
    /* @__PURE__ */ createTextVNode("是客户端和原始服务器之间的中间服务器。代理服务器放置在网络边缘。由于网络边缘靠近终端用户，代理服务器的放置有助于通过减少延迟和节省带宽快速将内容传递给终端用户。CDN在简单代理服务器上增加了智能。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们可以通过在用户附近放置小型数据中心并在那里存储数据的副本来让数据靠近用户。CDN主要存储两种类型的数据：静态和动态。CDN主要通过将数据靠近其用户来解决传播延迟问题。CDN提供商在路径上提供足够的带宽，将数据靠近用户（可能在其ISP内）。他们还试图减少传输和排队延迟，因为ISP在自治系统内可能有更多的带宽可用。",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "让我们看看CDN解决讨论问题的不同方法：",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "高延迟"),
      /* @__PURE__ */ createTextVNode("：CDN将内容靠近终端用户。因此，它减少了物理距离和延迟。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "数据密集型应用程序"),
      /* @__PURE__ */ createTextVNode("：由于连接到数据的路径仅包括ISP和附近CDN组件，因此在特定区域通过少量CDN组件为大量用户提供服务不会有问题。如下图所示，原始数据中心只需要向本地CDN组件提供数据一次，而本地CDN组件可以单独向不同的用户提供数据。没有用户必须从原始服务器下载自己的数据副本。")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "hint-container info" }, [
      /* @__PURE__ */ createBaseVNode("p", { class: "hint-container-title" }, "相关信息"),
      /* @__PURE__ */ createBaseVNode("p", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "注意"),
        /* @__PURE__ */ createTextVNode("：CDN提供商使用各种流媒体协议来交付动态内容。例如，CDNsun使用实时消息传输协议（RTMP）、HTTP实时流式传输协议（HLS）、实时流传输协议（RTSP）等等来交付动态内容。")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "数据中心资源匮乏"),
    /* @__PURE__ */ createTextVNode("：CDN用于提供热门内容。由于这个原因，大多数流量是在CDN而不是原始服务器上处理的。所以，不同的本地或分布式CDN组件在原始服务器上共享负载。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "QQ截图20230408183942",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "hint-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "hint-container-title" }, "提示"),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "注意"),
      /* @__PURE__ */ createTextVNode("：一些著名的CDN提供商包括Akamai、StackPath、Cloudflare、Rackspace、Amazon CloudFront和Google Cloud CDN。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>问题：</p><p>CDN是否缓存所有来自原始服务器的内容？</p><p>回答：</p><p>不太可能。CDN根据其能力缓存相当大比例的内容，大多数情况下缓存静态内容。</p><p>这也取决于内容的大小。例如，Netflix可能可以在CDN中存储超过90％的电影，而由于内容量巨大，对于像YouTube这样的服务可能不可行。</p></div><h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h2><p>让我们看一下我们期望从CDN中获得的功能和非功能要求。</p><h3 id="功能要求" tabindex="-1"><a class="header-anchor" href="#功能要求" aria-hidden="true">#</a> 功能要求</h3><p>以下功能要求将是我们设计的一部分：</p><ul><li><strong>检索</strong>：根据CDN模型的类型，CDN应该能够从原始服务器检索内容。我们将在接下来的课程中涵盖CDN模型。</li><li><strong>请求</strong>：根据用户的请求从代理服务器交付内容。CDN代理服务器应该能够响应每个用户的请求。</li><li><strong>交付</strong>：在推模型的情况下，源服务器应该能够将内容发送到CDN代理服务器。</li><li><strong>搜索</strong>：CDN应该能够执行针对用户查询的搜索，以从CDN基础设施中缓存或存储其他存储的内容。</li><li><strong>更新</strong>：在大多数情况下，内容来自原始服务器，但如果我们在CDN中运行脚本，则CDN应能够在一个PoP中的对等CDN代理服务器内更新内容。</li><li><strong>删除</strong>：根据内容的类型（静态或动态），应该可以在一定时间后从CDN服务器中删除缓存条目。</li></ul><p><img src="' + _imports_1 + '" alt="QQ截图20230408183957" loading="lazy"></p>', 7);
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<h3 id="非功能需求" tabindex="-1"><a class="header-anchor" href="#非功能需求" aria-hidden="true">#</a> 非功能需求</h3><ul><li><strong>性能</strong>：最小化延迟是CDN的核心使命之一，建议的设计应具有最小可能的延迟。</li><li><strong>可用性</strong>：由于其效果，人们期望CDN随时可用。可用性包括对抗DDoS等攻击的保护。</li><li><strong>可扩展性</strong>：越来越多的用户将从CDN请求内容。我们提议的CDN设计应能够随着要求的增加而水平扩展。</li><li><strong>可靠性和安全性</strong>：我们的CDN设计应确保没有单点故障。除了故障，设计的CDN必须可靠地处理大量的流量负载。此外，CDN应为托管的内容提供各种攻击的保护。</li></ul><p><img src="' + _imports_2 + '" alt="QQ截图20230408184012" loading="lazy"></p>', 3);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "构建块我们将使用",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#构建块我们将使用",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 构建块我们将使用")
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "CDN的设计利用以下构建块：",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_3,
      alt: "QQ截图20230408184037",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "DNS"),
      /* @__PURE__ */ createTextVNode(" 是将人性化的CDN域名映射到机器可读的IP地址的服务。该IP地址将带领用户前往指定的代理服务器。")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "负载均衡器"),
      /* @__PURE__ */ createTextVNode(" 将数百万个请求分布在运行中的代理服务器之间。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在下一课中，我们将讨论CDN的设计。",
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
    createBaseVNode("ul", null, [
      _hoisted_6,
      _hoisted_7,
      createBaseVNode("li", null, [
        _hoisted_8,
        _hoisted_9,
        createVNode(_component_center, null, {
          default: withCtx(() => [
            createTextVNode("内容向地理分布的CDN传播")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_10
      ])
    ]),
    _hoisted_11,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("CDN的功能需求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_18,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("CDN的非功能需求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_21,
    _hoisted_22,
    _hoisted_23,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("CDN设计中使用的构建块")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_24,
    _hoisted_25
  ]);
}
const _02IntroductionCDN_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "02IntroductionCDN.html.vue"]]);
export {
  _02IntroductionCDN_html as default
};
