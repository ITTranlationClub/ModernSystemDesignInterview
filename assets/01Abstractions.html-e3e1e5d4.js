import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, $ as createBaseVNode, a1 as createTextVNode, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "本节目标:"),
    /* @__PURE__ */ createTextVNode(" 探索抽象的重要性。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "什么是抽象",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#什么是抽象",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 什么是抽象？")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "抽象",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "放眼大局是至关重要的",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<p><img src="https://cdn.jsdelivr.net/gh/gaoxiang15125/BlogImage@master/1676017433607.png" alt="" loading="lazy"></p><p>有了上面的抽象，我们就可以笼统地谈论鸟类，而不会被细节所困扰。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>注意：</strong> 如果我们画了一张特定鸟类或其特征的图片，我们将无法实现识别所有鸟类的目标。而只能识别一种特定类型的鸟。</p></div><p>在如今科学的背景下，我们都使用计算机来工作，我们不会从头开始制作硬件并开发操作系统。他们只是作为程序的基础环境, 我们的目标是专注手头的工作, 而不是深入构建系统.</p><p>开发人员使用大量库来开发大型系统。如果他们尝试从构建库入手(造轮子)，那他们就不能完成自己的工作。库为我们提供了一个简单的接口来使用函数并隐藏了它们的内部细节。一个好的抽象允许我们在具有相似需求的多个项目中重用它。</p><h2 id="数据库抽象" tabindex="-1"><a class="header-anchor" href="#数据库抽象" aria-hidden="true">#</a> 数据库抽象</h2><p><strong>事务</strong>是一种数据库抽象，它在并发用户读取、写入或更改数据时隐藏了许多有问题的结果，并提供一个简单的提交接口（如果成功）或中止（如果失败）。无论哪种方式，数据都会从一种一致状态移动到一种新的一致状态。事务使得用户不会被并发数据突变的微妙角落情况所困扰，而是专注于他们的业务逻辑。</p><h2 id="分布式系统中的抽象" tabindex="-1"><a class="header-anchor" href="#分布式系统中的抽象" aria-hidden="true">#</a> 分布式系统中的抽象</h2><p>分布式系统中的抽象帮助工程师简化他们的工作，减轻他们处理分布式系统底层复杂性的负担。</p><p>随着亚马逊 AWS、谷歌云和微软 Azure 等许多大公司提供分布式服务，分布式系统的抽象越来越受欢迎。每项服务都提供不同级别的协议。</p><p>这些分布式服务背后的实现细节对用户来说是隐藏的，开发人员可以专注于应用程序，而不是深入研究通常非常复杂的分布式系统。</p><p>由于用户数量呈指数级增长，如果当今的应用程序基于单个节点，它们将无法保持响应/功能。分布式系统中的抽象帮助工程师快速转向分布式系统以扩展他们的应用程序。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>注意：</strong> 我们将在本章中看到抽象在通信、数据一致性和故障方面的使用。内容重点在于传达核心思想，但不一定要传达概念的所有细微之处。</p></div>', 13);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      _hoisted_3,
      createTextVNode("是混淆我们不需要的细节的艺术。它使我们能够专注于大局。"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("，因为它隐藏了内在的复杂性，从而让我们对既定目标有更广泛的了解并始终专注于这些目标。下图是一个抽象的例子。")
    ]),
    _hoisted_5
  ]);
}
const _01Abstractions_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01Abstractions.html.vue"]]);
export {
  _01Abstractions_html as default
};
