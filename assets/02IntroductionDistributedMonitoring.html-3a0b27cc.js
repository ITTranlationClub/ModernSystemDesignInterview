import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163317.png";
const _imports_1 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163333.png";
const _imports_2 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163352.png";
const _imports_3 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163410.png";
const _imports_4 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163430.png";
const _imports_5 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163445.png";
const _imports_6 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163501.png";
const _imports_7 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163518.png";
const _imports_8 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163532.png";
const _imports_9 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163546.png";
const _imports_10 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163559.png";
const _imports_11 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163619.png";
const _imports_12 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163633.png";
const _imports_13 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163646.png";
const _imports_14 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414163748.png";
const _imports_15 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230408195654.png";
const _imports_16 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164158.png";
const _imports_17 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164209.png";
const _imports_18 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164222.png";
const _imports_19 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164232.png";
const _imports_20 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164243.png";
const _imports_21 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164256.png";
const _imports_22 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164308.png";
const _imports_23 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164319.png";
const _imports_24 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164330.png";
const _imports_25 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164352.png";
const _imports_26 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164404.png";
const _imports_27 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164418.png";
const _imports_28 = "/model-system-design/img/13-DistributedMonitoring/QQ截图20230414164431.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "了解为什么在分布式系统中进行监控是至关重要的。",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "监控的需求",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#监控的需求",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 监控的需求")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "让我们了解一下单个服务的故障会如何影响相关系统的平稳运行。为了避免级联故障，监控可以通过提前发出警报或引导我们找到故障的根本原因来发挥至关重要的作用。",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "让我们考虑这样一个场景：用户上传一个名为“intro-to-system-design”的视频到YouTube。位于服务器A上的UI服务获取视频信息并将数据传递给位于服务器B上的服务2。服务2在数据库中创建一个条目并将视频存储在blob存储中。服务器C中的另一个服务3管理数据库X和Y的复制和同步。",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在这种情况下，由于某些错误，服务3失败了，并且服务2在数据库X中创建了一个条目。数据库X崩溃，获取视频的请求被路由到数据库Y。用户想播放 “intro-to-system-design” 视频，但是将显示“视频未找到”的错误。",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "QQ截图20230414163317",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      alt: "QQ截图20230414163333",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_2,
      alt: "QQ截图20230414163352",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_3,
      alt: "QQ截图20230414163410",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_4,
      alt: "QQ截图20230414163430",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_5,
      alt: "QQ截图20230414163445",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_6,
      alt: "QQ截图20230414163501",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_7,
      alt: "QQ截图20230414163518",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_8,
      alt: "QQ截图20230414163532",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_9,
      alt: "QQ截图20230414163546",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_10,
      alt: "QQ截图20230414163559",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_11,
      alt: "QQ截图20230414163619",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_12,
      alt: "QQ截图20230414163633",
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
      src: _imports_13,
      alt: "QQ截图20230414163646",
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
      src: _imports_14,
      alt: "QQ截图20230414163748",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "上面的示例相对简单。在现实中，由于我们有许多数据中心分布在全球各地，每个数据中心都有数百万台服务器，因此遇到了复杂的问题。由于人类管理员到服务器的比例逐渐降低，通常无法手动找到问题。拥有监控系统可以降低操作成本，并鼓励自动化地检测故障。",
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "停机成本",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#停机成本",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 停机成本")
  ],
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "有一些容错系统设计可以将大多数故障隐藏在终端用户之外，但是捕捉故障在它们成为更大问题之前是至关重要的。未经计划的服务停机可能会很昂贵。例如，2021年10月，Meta的应用程序中断了近九个小时，导致每小时损失约1300万美元。这种损失强调了停机的潜在影响。",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "IT基础设施已经广泛分布在全球范围内。下文给出了主要云服务提供商在全球范围内分布的数据中心的概览，截至2021年。这些数据中心通过私有或公共网络连接。监控地理分离的数据中心中的服务器是至关重要的。",
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "根据亚马逊表示，2021年12月7日，“在太平洋标准时间上午7:30，主要AWS网络中托管的AWS服务之一的自动扩容活动触发了大量位于内部网络中的客户端的意外行为。这导致连接活动的大量激增使得连接内部网络和主要AWS网络之间的网络设备不堪重负，结果导致这些网络之间的通信延迟。这些延迟增加了这些网络之间通信中的延迟和错误，导致更多的连接尝试和重试。这导致连接两个网络的设备上出现持续的拥塞和性能问题。”根据估计，亚马逊的停机时间成本是每分钟66240美元。",
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_15,
      alt: "QQ截图20230408195654",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "监控类型",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#监控类型",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 监控类型")
  ],
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "让我们以一个例子来理解我们想要监视的错误类型。在 Educative，每当一个学习者连接到可执行环境时，一个容器被分配。考虑在服务器 A 上的服务 1，它负责在学习者连接时分配容器。另一个服务，在服务器 B 上的服务 2，将该信息取出并通知负责 UI 的服务。在服务器 C 上运行的 UI 服务为学习者更新 UI。假设由于某些错误，服务 2 失败，学习者看到“无法连接…”的错误消息。",
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Educative 的开发人员如何知道学习者面临这个错误？",
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_16,
      alt: "QQ截图20230414164158",
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
      src: _imports_17,
      alt: "QQ截图20230414164209",
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
      src: _imports_18,
      alt: "QQ截图20230414164222",
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
      src: _imports_19,
      alt: "QQ截图20230414164232",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_20,
      alt: "QQ截图20230414164243",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_21,
      alt: "QQ截图20230414164256",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_22,
      alt: "QQ截图20230414164308",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_23,
      alt: "QQ截图20230414164319",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_24,
      alt: "QQ截图20230414164330",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_25,
      alt: "QQ截图20230414164352",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_26,
      alt: "QQ截图20230414164404",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_27,
      alt: "QQ截图20230414164418",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_28,
      alt: "QQ截图20230414164431",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "现在，如果一个学习者发出请求，但从未到达 Educative 的服务器，Educative 如何知道学习者面临问题？",
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "通过上述例子，我们将监控焦点分为两个广泛的错误类别：",
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "服务端错误"),
      /* @__PURE__ */ createTextVNode(": 这些错误通常在服务器上发生并对监控服务可见。这类错误在HTTP响应代码中被报告为错误5xx。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "客户端错误"),
      /* @__PURE__ */ createTextVNode(": 这些错误的根源是在客户端。这类错误在HTTP响应代码中被报告为错误4xx。一些客户端错误在服务请求未能到达时对服务不可见。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们将在即将到来的章节监控服务端错误和监控客户端错误中探讨如何设计监控服务来处理这两种情况。我们希望我们的监控系统能够分析我们全球分布的服务。这样可以更好地了解系统的组件，并能够敏捷地检测和响应故障。",
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
        createTextVNode("用户在YouTube上上传视频")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_7,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("位于服务器A上的UI服务获取视频信息并将数据传递给位于服务器B上的服务2")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_8,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("服务2在数据库中创建一个条目并将视频存储在blob存储中")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_9,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("服务器C中的服务3管理数据库X和Y的复制和同步")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_10,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("由于某些错误，服务3失败了，服务2在数据库X中创建了一个条目")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_11,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("数据库X崩溃了")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_12,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("数据库Y中没有“intro-to-system-design”视频的条目")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_13,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("用户请求获取视频")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_14,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("服务器A上的UI服务将读取请求转发到服务器B")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_15,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("数据库X崩溃了")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_16,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("视频无法获取，因为数据库已经停止")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_17,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("请求被转发到数据库Y")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_18,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("数据库Y中没有这个视频的任何条目")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_19,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("返回“Video not found”的响应到UI服务器")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_20,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("将“Video not found”的响应返回给用户")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_21,
    _hoisted_22,
    _hoisted_23,
    _hoisted_24,
    _hoisted_25,
    _hoisted_26,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("AWS、Azure 和 Google 在全球分布式数据中心概览")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_27,
    _hoisted_28,
    _hoisted_29,
    _hoisted_30,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("学习者开始连接 Educative")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_31,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("Educative 的前端服务器发起容器分配请求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_32,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("服务器 B 上的服务 2 分配一个容器，并通知服务器 A 上的服务 1")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_33,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("服务器 A 上的服务 1 确认分配")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_34,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("服务器 C 上的服务 3 收到为学习者更新 UI 的请求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_35,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("服务器 C 上的服务 3 为学习者更新 UI")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_36,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("连接成功建立")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_37,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("学习者再次开始连接 Educative")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_38,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("Educative 的前端服务器发起容器分配请求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_39,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("由于某种原因，服务器 B 失败")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_40,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("前端服务器等待学习者的 UI 更新")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_41,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("请求超时")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_42,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("无法建立学习者的连接")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_43,
    _hoisted_44,
    _hoisted_45,
    _hoisted_46,
    _hoisted_47
  ]);
}
const _02IntroductionDistributedMonitoring_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "02IntroductionDistributedMonitoring.html.vue"]]);
export {
  _02IntroductionDistributedMonitoring_html as default
};
