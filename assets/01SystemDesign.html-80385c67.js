import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, $ as createBaseVNode, a1 as createTextVNode, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/18-Pub-sub/thePubSubSystem.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "了解设计发布-订阅系统的基础知识。",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "什么是发布-订阅系统",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#什么是发布-订阅系统",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 什么是发布-订阅系统？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "发布-订阅消息通信"),
    /* @__PURE__ */ createTextVNode("，通常称为"),
    /* @__PURE__ */ createBaseVNode("strong", null, "Pub-sub消息通信"),
    /* @__PURE__ */ createTextVNode("，是一种常见的在无服务器和微服务架构中使用的异步服务通信方法。使用发布-订阅系统，消息可以异步发送到一个系统的不同子系统中。订阅发布-订阅模式的所有服务都将接收推入系统的消息。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "例如，当著名运动员Cristiano Ronaldo在Instagram上发布或发推文时，他的所有追随者都会得到通知。在这里，Cristiano Ronaldo是发布者，他的帖子或推文是消息，所有追随者是订阅者。",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "thePubSubSystem",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="动机" tabindex="-1"><a class="header-anchor" href="#动机" aria-hidden="true">#</a> 动机</h2><p>分布式系统的硬件基础设施由数百万台机器组成。使用发布-订阅系统进行异步通信可以增加可扩展性。生产者和消费者是相互独立的，因此可以分别扩展和开发它们。组件之间的解耦，生产者和消费者，允许更大的可扩展性，因为添加或删除任何组件不会影响其他组件。</p><h2 id="如何设计发布-订阅系统" tabindex="-1"><a class="header-anchor" href="#如何设计发布-订阅系统" aria-hidden="true">#</a> 如何设计发布-订阅系统？</h2><p>我们将发布-订阅系统设计分为以下课程：</p><ol><li><strong>介绍</strong>：在这节课中，我们将学习使用发布-订阅系统的用例，定义其要求并为其设计API。</li><li><strong>设计</strong>：在这节课中，我们将讨论有消息队列和代理的两种发布-订阅系统设计。</li></ol>', 5);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    _hoisted_5,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("发布-订阅系统")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_6
  ]);
}
const _01SystemDesign_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01SystemDesign.html.vue"]]);
export {
  _01SystemDesign_html as default
};
