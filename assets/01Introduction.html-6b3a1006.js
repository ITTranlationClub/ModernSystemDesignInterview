import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, $ as createBaseVNode, a1 as createTextVNode, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "从整体上把握本课程",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h2 id="什么是系统设计" tabindex="-1"><a class="header-anchor" href="#什么是系统设计" aria-hidden="true">#</a> 什么是系统设计？</h2><p><strong>系统设计</strong> 是定义组件及其集成方式、API 和数据模型以构建满足一组特定功能和非功能需求的大型系统的过程。</p><p>系统设计使用计算机网络、并行计算和分布式系统的概念来设计可扩展且高性能的系统。</p><p>分布式系统天生就可以很好地扩展。但分布式系统会提升系统复杂度。</p><p>系统设计的定理可以帮助我们<strong>驯服</strong> 复杂性并完成设计工作。</p><p>系统设计旨在构建可靠、有效和可维护等特性的系统。</p><ul><li><strong>可靠的系统</strong> 会处理故障和错误,并拥有完备可靠的报警/日志系统。</li><li><strong>有效的系统</strong> 满足所有用户需求和业务要求。</li><li><strong>可维护的系统</strong> 是灵活的，可以随意掌握部署规模, 并支持扩展新功能</li></ul><h2 id="基于构建块的现代系统设计" tabindex="-1"><a class="header-anchor" href="#基于构建块的现代系统设计" aria-hidden="true">#</a> 基于构建块的现代系统设计</h2><p>我们已经分离出常用的设计元素，例如负载均衡器; 作为高级系统设计的基本构建块。这有两个目的。</p><p>首先，它允许我们详细讨论所有构建块并讨论它们有趣的微型设计问题。</p><p>其次，当我们解决设计问题时，我们可以专注于问题的特定方面，添加我们将使用的构建块以及我们将如何使用它。这有助于我们消除对常见设计元素的重复讨论。(组件复用)</p>', 11);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "16个对设计现代系统至关重要的构建块",
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<h2 id="关于本课程" tabindex="-1"><a class="header-anchor" href="#关于本课程" aria-hidden="true">#</a> 关于本课程</h2><p>本课程是关于设计随用户增加而扩展的系统，即使在不同的故障下也保持可用，并以良好的性能满足功能目标。</p><p>真实世界的系统构建是一个<strong>迭代过程</strong>，我们也采用这种方式，以一个优秀的设计为开始, 衡量它的性能，并在下一次迭代中改进设计。</p><p>本课程的重点是让我们自己沉浸在精心选择的系统设计工作中，使我们能够解决任何新颖的设计问题，无论是在系统设计面试中还是在办公室的任务中。本课程旨在<strong>教授概念</strong>而不是<strong>提供样板设计</strong>。下面列出了本课程旨在填补的一些空白。</p><p>下面列出了本课程旨在填补的一些空白。</p><p><strong>重新审视系统设计：</strong> 许多系统设计课程提供了解决特定问题的公式。这在面试等高压力情况下似乎很有吸引力，但它可能会鼓励记住设计解决方案，而不是真正理解问题并设计适当的解决方案。如果系统设计是公式化的，那么我们可能不需要人来进行系统设计。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>系统设计既是一门艺术，也是一门科学，从第一原则出发解决设计问题会给人一种新鲜感。</p></div><p><strong>深入和广泛：</strong> 在课程中, 我们会解决一些传统问题，并对它们进行了深入的讨论。我们会给出适当的理由，说明我们为什么使用某些组件，该组件可能是一种折中方案(基于现实问题不得不做出的取舍). 在接下来的章节中, 您将更具体的体会到方案设计.</p><p>我们还解决了一些新的设计问题，这些问题不仅涉及可伸缩性，还涉及可用性、可维护性、一致性和容错性。总的来说，传统问题和新问题涵盖了现代系统设计活动的所有方面。我们希望本课程能让读者有效地解决他们遇到的任何新设计问题。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>真实的系统是复杂的，而且通常我们可能需要做出适当的假设来正确地确定问题的范围。我们将更详细地介绍问题以正确掌握现实世界的系统。</p></div><p><strong>迭代过程：</strong> 实际上，系统通过迭代进行改进。我们通常从简单的事情开始，但是当系统的一个或多个部分出现瓶颈时，就需要进行新的设计。</p><p>在一些设计问题上，我们做一个设计，找出瓶颈，然后改进。在时间限制下工作可能不允许对设计进行迭代。但是，我们仍然建议进行两次迭代</p><ul><li>尽最大努力提出设计（这会占用我们大约 80% 的时间）,作为第一次迭代</li><li>随着系统的扩展,我们将花更多的时间解决问题，这会让我们发现更多设计上的细节, 根据这些细节对设计进行迭代, 从而完善整个系统</li></ul><p><strong>交互式学习：</strong> 我们提供充足的机会供读者获得系统设计经验。并安排了一些设计问题引导读者通过特定的步骤来设计系统。</p><p>我们还提供了一些实例，让读者在没有任何指导步骤的情况下端到端地设计完整的系统。并通过问题和测验来强化重要概念。</p><h2 id="谁应该学习这门课程" tabindex="-1"><a class="header-anchor" href="#谁应该学习这门课程" aria-hidden="true">#</a> 谁应该学习这门课程？</h2><p>系统设计适用于任何想要在职业生涯中更上一层楼的软件工程师。</p>', 17);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "面试准备："),
    /* @__PURE__ */ createTextVNode(" 最近，系统设计正成为软件开发面试的重要组成部分。本课程帮助软件工程师准备面试。我们在本课程的第二章为有兴趣的读者提供了准备系统设计面试的详细指南。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "软件开发人员：",
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "首席工程师",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "解决方案架构师",
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "支持工程师",
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "SRE",
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "运营",
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "产品/项目经理：产品/项目管理"),
    /* @__PURE__ */ createTextVNode(" 中的一大挑战是构建能够随着时间的推移扩展并有效执行的系统。了解系统设计的经理可以指导大规模高性能系统的设计。因此，产品/项目经理必须了解系统设计概念，以成功指导应用程序的设计和开发。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "系统设计读者：",
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "本课程的先决条件",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#本课程的先决条件",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 本课程的先决条件")
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们假设您了解分布式系统的基本概念。",
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "对计算机网络/操作系统有基础的理解.",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_font = resolveComponent("font");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("p", null, [
      createTextVNode("本节目标:"),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_2,
    createBaseVNode("p", null, [
      createTextVNode("本课程共涵盖了 "),
      createVNode(_component_font, { color: "red" }, {
        default: withCtx(() => [
          _hoisted_13
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" 将在后面依次介绍")
    ]),
    _hoisted_14,
    createBaseVNode("ul", null, [
      _hoisted_31,
      createBaseVNode("li", null, [
        _hoisted_32,
        createTextVNode(" 系统设计主要面向旨在成为"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            _hoisted_33
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode(" 或 "),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            _hoisted_34
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode(" 的后端开发人员。这些工程师需要处理实际的用户数据。保证一旦前端将数据提交到后端系统，该数据一定可以被系统正确处理。除此之外, 全栈或前端开发人员可能也想学习系统设计以改进他们的工作。与此同时， 在生产环境中随叫随到的"),
        _hoisted_35,
        createTextVNode("（也称为"),
        _hoisted_36,
        createTextVNode(", 国内称为"),
        _hoisted_37,
        createTextVNode("）每天都要处理各种问题, 系统设计理念可以帮助 SRE 更高效地找到复杂问题的根源。")
      ]),
      _hoisted_38,
      createBaseVNode("li", null, [
        _hoisted_39,
        createTextVNode(" 系统设计是一门有趣的学科，技术领域的人可以从学习系统设计中受益匪浅。本课程帮助读者了解"),
        createVNode(_component_font, { color: "red" }, {
          default: withCtx(() => [
            createTextVNode("大型科技公司")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode("如何从头开始设计和构建成功的应用程序，并随着时间的推移对其进行改进。其他读者可能希望通过学习本课程将他们的想法发展成一个大型应用程序。")
      ])
    ]),
    _hoisted_40,
    _hoisted_41,
    _hoisted_42
  ]);
}
const _01Introduction_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01Introduction.html.vue"]]);
export {
  _01Introduction_html as default
};
