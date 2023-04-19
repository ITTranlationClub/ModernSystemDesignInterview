import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/12-Sequencer/QQ截图20230408190932.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "了解设计序列器的基础知识。",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "动机",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#动机",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 动机")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在一个大型分布式系统中，每秒可能会有数百万个事件发生。在 Facebook 的帖子上发表评论、分享一条推文以及在 Instagram 上发布一张照片，这些都是这样的事件。我们需要一种机制来将这些事件区分开来。其中一种机制就是为每一个事件分配全局唯一的ID。",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "为数据库条目分配主键是使用唯一ID的另一个用例。通常情况下，数据库中的自增特性可以满足这个需求。但在分布式数据库中，不同的节点会独立生成标识符，这个特性将无法发挥作用。因此，我们需要一个在分布式设置中充当主键的唯一ID生成器，例如横向分片表。",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "唯一ID有助于我们识别日志中事件的流动，并有助于调试。一个现实世界的唯一ID使用例子是Facebook的端到端性能跟踪和分析系统 Canopy。Canopy使用 TraceID 来唯一标识一个事件，在执行路径中，可能会经过数百个微服务来完成一次用户请求。",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "QQ截图20230408190932",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "我们如何设计序列器",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#我们如何设计序列器",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 我们如何设计序列器？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们将序列器的全面设计分为以下两个课程：",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "唯一ID生成器的设计："),
      /* @__PURE__ */ createTextVNode(" 在列举设计要求后，我们讨论了三种生成唯一ID的方法：使用UUID、使用数据库和使用范围处理程序。")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "带有因果关系的唯一ID："),
      /* @__PURE__ */ createTextVNode(" 在这节课里，我们在生成ID时增加了时间因素，并考虑了因果关系。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "唯一ID"),
    /* @__PURE__ */ createTextVNode("对于识别分布式系统中的事件和对象非常重要。然而，在分布式系统中设计唯一ID生成器是具有挑战性的。在下一节课中，让我们看一下分布式唯一ID生成系统的要求。")
  ],
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
        createTextVNode("分配一个唯一的 TraceID 给每个事件")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_7,
    _hoisted_8,
    _hoisted_9,
    _hoisted_10
  ]);
}
const _01SystemDesignSequencer_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01SystemDesignSequencer.html.vue"]]);
export {
  _01SystemDesignSequencer_html as default
};
