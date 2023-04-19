import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, $ as createBaseVNode, a1 as createTextVNode, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "本节目标:",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h2 id="课程结构" tabindex="-1"><a class="header-anchor" href="#课程结构" aria-hidden="true">#</a> 课程结构</h2><p>本课程由四十章组成。这些章节可以分为以下四个不同的部分。</p><ol><li><strong>引言：</strong> 引言部分由五章组成。</li></ol><ul><li><p>介绍课程及其主要特点。</p></li><li><p>指导如何准备系统设计面试。</p></li><li><p>讨论了不同类型的抽象。</p></li><li><p>讨论每个大型系统都应该具备的一些不可或缺的非功能性特征, 在本章最后我们将介绍粗略的计算，这些计算使我们能够在设计问题期间估算资源。</p></li></ul><ol start="2"><li><strong>构建块：</strong> <code>构建块</code> 一章以介绍 16 种不同构建块的介绍性课程开始。这些构建块中的每一个都在一个独立的章节中进行了解释。以&lt;结论&gt;一章结束本节，该章也作为对下一节的介绍。</li><li><strong>设计问题：</strong> 这部分是课程的核心，由十三个设计问题精心打造而成。</li><li><strong>结语：</strong> <code>结语</code>部分对本课程进行了总结，由两章组成:</li></ol>', 5);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "结束语")
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>尽管我们尽力保持各章的独立性，但读者会发现按给定顺序阅读它们很有用。</p></div><p><img src="https://cdn.jsdelivr.net/gh/gaoxiang15125/BlogImage@master/课程章节思维导图.png" alt="本课程结构" loading="lazy"></p><h2 id="课程的优势" tabindex="-1"><a class="header-anchor" href="#课程的优势" aria-hidden="true">#</a> 课程的优势</h2><p>作为一份优秀的课程, 当然有其独树一帜的方面, 本课程优势如下:</p><table><thead><tr><th>优势</th><th>说明</th></tr></thead><tbody><tr><td>构建块(组件)</td><td>这是一种现代的系统设计方法，我们使用较小的构建块构建更大的工程。</td></tr><tr><td>设计构建块</td><td>我们将把我们的每一个构建块都视为一个独立的小型设计问题。</td></tr><tr><td>逐步改进设计</td><td>模拟业务量提升过程,逐步修改设计方案，为复杂系统设计简单和渐进的解决方案。</td></tr><tr><td>评估设计</td><td>设计过程中充分考虑现实问题(资金/规模等), 考虑性能高低。</td></tr><tr><td>用更新的设计解决传统问题</td><td>本课程与最新的行业需求保持同步。</td></tr><tr><td>添加新的设计问题</td><td>对已经流传数十年的设计方案进行更新, 新角度看问题</td></tr><tr><td>精心设计的设计问题</td><td>每个问题在解决和设计方面都有其独到的地方。</td></tr><tr><td>FAANG 专家贡献</td><td>向最好的人学习。</td></tr></tbody></table><p>让我们开始我们的系统设计之旅吧！</p>', 6);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("p", null, [
      _hoisted_1,
      createTextVNode(),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          createTextVNode("概览本系统设计课程的结构和优势")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("。")
    ]),
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("**惊人的失败**")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode(" 这些失败表明在现实世界中，即使是一个小错误也会导致一个大型的稳定的应用程序崩溃。此类失败甚至可能是不可避免的，但我们强调了一些减轻此类失败的措施。")
      ]),
      _hoisted_7
    ]),
    _hoisted_8
  ]);
}
const _02Course_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "02Course.html.vue"]]);
export {
  _02Course_html as default
};
