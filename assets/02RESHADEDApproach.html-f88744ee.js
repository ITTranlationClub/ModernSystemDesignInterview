import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, $ as createBaseVNode, a1 as createTextVNode, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/25-ConcludingtheBuildingBlocksDiscussion/QQ截图20230410162735.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "让我们使用我们的RESHADED方法来分解一个设计问题。",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "介绍",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#介绍",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 介绍")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("系统设计问题并不是直截了当的。我们没有一个通用公式可以用于所有设计问题。但是，我们可以使用一种高级共同策略来为任何设计问题制定一个良好的解决方案。我们称之为"),
    /* @__PURE__ */ createBaseVNode("strong", null, "RESHADED"),
    /* @__PURE__ */ createTextVNode("方法。通常，我们的所有设计问题都是通过记住这个策略来解决的。RESHADED是一个指南，我们将使用它来解决不同的设计问题。虽然没有一种“一刀切”的解决方案，但使用这种方法将具有其优势，我们将在下面看到。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "QQ截图20230410162735",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="reshaded的优点" tabindex="-1"><a class="header-anchor" href="#reshaded的优点" aria-hidden="true">#</a> RESHADED的优点</h2><p>在我们逐个介绍RESHADED中的每个单词之前，让我们先了解一下这种方法的优点。这种方法的一些关键优点如下：</p><ol><li>RESHADED方法帮助我们记住每个设计问题解决的一些关键步骤。这意味着，在任何时候，总会有下一步摆在我们的面前。</li><li>我们提出的解决方案将具有解决任何设计问题所需的所有基本要素。不仅如此，RESHADED方法提供的解决方案将是系统性和周到的。</li></ol><h2 id="探索reshaded" tabindex="-1"><a class="header-anchor" href="#探索reshaded" aria-hidden="true">#</a> 探索RESHADED</h2><p>下面，我们描述了我们在RESHADED的每个单词下采取的步骤：</p><p><strong>需求（Requirements）</strong>：在此步骤中，我们收集设计问题的所有需求并定义其范围。要求包括了解服务是什么，它如何工作以及其主要特点是什么。我们在这一步的目标是收集我们即将设计的服务的功能和非功能要求。</p><p><strong>估算（Estimation）</strong>：顾名思义，此步骤估计提供服务所需的资源，以满足特定数量的用户。资源包括硬件或基础设施资源。以下是一些样本估算问题：</p><ol><li>为了为5亿活跃用户提供流畅的服务，我们需要多少服务器？</li><li>如果我们必须存储每天1.25亿条推文，并且20%的推文包含媒体，我们需要多少存储空间？</li></ol><p>估算非常重要，因为它们帮助我们了解我们将设计的系统的规模。我们将基于估算做出关键决策。例如，我们将决定使用哪种数据库来存储我们的数据，哪种资源结构将提供最佳性能等等。</p><p><strong>存储模式（可选）</strong>：此步骤涉及表达我们的数据模型，即我们定义需要哪些表以及每个表的哪些字段是其组成部分。但是，这是一个可选步骤，我们可能不会在每个设计问题中进行这样的努力。</p><p><strong>高级设计（High-level design）</strong>：此步骤涉及识别我们将用于设计所需系统的主要组件和构建块。我们通过从我们的功能和非功能要求中获取灵感来完成这个步骤。</p><p>这被认为是我们的系统完整设计的第一步，因此需要进一步迭代和改进。主要，本节将重点关注实现功能要求。</p><p><strong>API设计（API design）</strong>：此阶段的目标是为我们的服务构建接口。使用这些接口，用户可以在我们的系统内调用各种服务。这些接口以API调用的形式存在，通常是我们的功能要求的翻译。</p><p><strong>详细设计（Detailed design）</strong>：详细设计从识别高级设计的限制开始。我们将利用这些限制来演变我们的设计。在这个步骤中，我们将通过提及我们将使用的所有组件和构建块来最终确定我们的设计。</p><p>我们还定义了我们的设计的工作流程及其对不同技术的使用。详细设计旨在满足问题的功能和非功能要求。</p><p><strong>评估（Evaluation）</strong>：此步骤将衡量我们解决方案的有效性。换句话说，我们证明了我们的设计如何满足功能和非功能要求。</p><p>我们讨论了我们解决方案中做出的不同权衡，并确定了改进的空间。</p><p><strong>独特组件/功能（Distinctive component/feature）</strong>：在本课程开始时，我们讨论了没有一种“一刀切”的解决方案。此步骤旨在为每个设计问题识别独特的方面并进行讨论。例如，Uber设计问题具有支付服务和欺诈检测作为其独特功能。相比之下，Google Docs具有并发控制，这是在不同用户同时编辑文档的同一部分时所需的。</p><p>接下来，我们将把我们的指南（RESHADED）应用于许多设计问题。</p>', 19);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("RESHADED方法中每个字母的解释")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_5
  ]);
}
const _02RESHADEDApproach_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "02RESHADEDApproach.html.vue"]]);
export {
  _02RESHADEDApproach_html as default
};
