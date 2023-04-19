import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, $ as createBaseVNode, a1 as createTextVNode, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/23-DistributedTaskScheduler/QQ截图20230410155710.png";
const _imports_1 = "/model-system-design/img/23-DistributedTaskScheduler/QQ截图20230410155922.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "介绍分片计数器。",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "问题陈述",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#问题陈述",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 问题陈述")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "像Facebook、Twitter和YouTube这样的实时应用程序具有高用户流量。用户与应用程序进行交互，并根据应用程序的结构执行多个操作（查看、点赞、评论等）。例如，在一个Facebook页面上发布了一张图片，该页面有数百万的粉丝，每毫秒后该帖子的点赞数量迅速增加。在这种情况下，对于这个单个图像进行点赞可能很容易，但是当许多名人同时上传数千个这样的图像或视频，每个名人都有数百万的粉丝时，我们该怎么办？这个问题被称为“重要性高的问题”。",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "上述情况显示了一个简单的计数操作如何变得难以精确和高效地管理。下图显示了在2021年8月的24小时内由数百万用户观看的YouTube视频：",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "QQ截图20230410155710",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "平均每秒有六千条推文在Twitter上发送，这相当于每分钟360,000条推文和每天约5亿条推文。处理这些5亿条推文上的数十亿个赞是一项具有挑战性的任务。以下表格显示了截至2022年一天中最受欢迎的推文：",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      alt: "QQ截图20230410155922",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<p>我们如何处理数百万的写请求来处理每分钟的数千条推文上的点赞？问题在于写入需要比读取更多的时间，并且并发活动使这个问题更加困难。随着某个计数器（可能是一个驻留在节点内存中的变量）的并发写入数量增加，锁争用将呈非线性增长。在某一点之后，我们可能会花费大部分时间获取锁，以便我们可以安全地更新计数器。</p><h2 id="我们将如何设计分片计数器" tabindex="-1"><a class="header-anchor" href="#我们将如何设计分片计数器" aria-hidden="true">#</a> 我们将如何设计分片计数器？</h2><p>我们将把分片计数器的设计分为三个课程：</p><ol><li><p><strong>高级设计</strong>：在本课程中，我们将讨论分片计数器的高级设计。此外，我们还将简要解释API设计。</p></li><li><p><strong>详细设计</strong>：本课程将深入探讨分片计数器的设计。此外，我们还将评估我们提出的设计。</p></li><li><p><strong>测验</strong>：我们将通过测验回顾分片计数器设计的主要概念。</p></li></ol><p>让我们从分片计数器的高级解决方案草图开始。</p>', 5);
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
        createTextVNode("24小时内YouTube视频的观看次数")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_6,
    _hoisted_7,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("单日最受欢迎的推文")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_8
  ]);
}
const _01SystemDesign_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01SystemDesign.html.vue"]]);
export {
  _01SystemDesign_html as default
};
