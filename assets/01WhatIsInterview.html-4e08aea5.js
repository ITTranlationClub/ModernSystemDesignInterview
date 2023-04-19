import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, $ as createBaseVNode, a1 as createTextVNode, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "了解系统设计访谈 (SDI) 并战略性地处理它们",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<p>我们的系统设计课程对已经工作的人和准备面试的人同样有用。在本章中，我们重点介绍系统设计面试 (SDI System Design Interviews) 的不同方面，并给予面试者有用的提示。我们鼓励读者阅读本章，即使他们没有准备面试，相信本章会带给你别样的思考。</p><h2 id="sdi-与其他面试有何不同" tabindex="-1"><a class="header-anchor" href="#sdi-与其他面试有何不同" aria-hidden="true">#</a> SDI 与其他面试有何不同？</h2><p>就像任何其他面试一样，我们需要战略性地进行系统设计面试。SDI 不同于编程面试。这次面试几乎不需要任何编码。</p><p>SDI 发生在更高的抽象层次上。我们找出需求并将它们映射到连接这些子系统的计算组件和高级通信协议。</p><p>最后的答案并不重要。重要的是面试者带领面试官经历的过程和旅程。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>与面试中的编码问题相比，系统设计更符合我们将在工作中完成的任务。</p></div><h2 id="我们如何解决设计问题" tabindex="-1"><a class="header-anchor" href="#我们如何解决设计问题" aria-hidden="true">#</a> 我们如何解决设计问题？</h2><p>设计问题一般是开放的/模糊的, 这种模糊模仿了现代商业的现实(没人一开始就能规划所有需求)。</p><p>面试官经常问一个众所周知的问题. 例如，设计 WhatsApp。现实中, 一个真正的 WhatsApp 应用程序具有很多功能，将所有这些功能都作为我们 WhatsApp 的需求不是一个明智的主意：</p><ul><li>首先，我们的采访时间有限。</li><li>其次，使用系统的一些核心功能足以展示我们解决问题的能力。</li></ul><p>我们可以告诉面试官，真正的 WhatsApp 还可以做很多其他我们不打算包含在设计中的事情。如果面试官有异议，我们可以相应地改变我们的行动计划。</p><p>以下是我们在系统设计面试中应该遵循的最佳实践：</p><p>系统设计面试的最佳实践</p><ul><li>申请人应该提出正确的问题来巩固要求。</li><li>申请人还需要确定问题的范围，以便他们能够在有限的面试时间内做出很好的尝试来解决问题。SDI 通常为 35 至 40 分钟。</li><li>与面试官的沟通至关重要。默默地进行设计工作并不是一个好主意。相反，我们应该与面试官互动，以确保他们了解我们的思维过程。</li></ul><h3 id="展示高级设计" tabindex="-1"><a class="header-anchor" href="#展示高级设计" aria-hidden="true">#</a> 展示高级设计</h3><p>在高层次上，组件可以是前端、负载均衡器、缓存、数据处理等。系统设计告诉我们这些组件如何组合在一起。</p><p>架构设计通常将组件表示为框。这些框之间的箭头表示谁与谁数据交流以及这些框或组件如何组合在一起。</p><p><img src="https://cdn.jsdelivr.net/gh/gaoxiang15125/BlogImage@master/1675935366651.png" alt="样本设计" loading="lazy"></p><p>我们可以针对给定的问题绘制如上图所示的图表，并将其呈现给面试官。</p><h2 id="sdi可能包含的问题" tabindex="-1"><a class="header-anchor" href="#sdi可能包含的问题" aria-hidden="true">#</a> SDI可能包含的问题</h2><p>SDI 通常包含与设计如何随时间演变相关的问题，因为系统的某些方面增加了某个数量级——例如，用户数量、每秒查询数量等。系统社区普遍认为，当系统的某些方面增加十倍或更多时，原先的设计可能不适用并且需要更改。</p><p>设计和运行更大的系统需要仔细考虑，因为设计通常不会随着系统需求的增加而线性扩展。</p><p>面试官可能会问: &quot;为什么我们不设计一个已经能够处理比必要或预期拥有更强性能的系统?&quot;</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>复杂系统需要的 dollar 成本, 是我们不得不这样做的主要原因</p></div><h3 id="google-的设计演变" tabindex="-1"><a class="header-anchor" href="#google-的设计演变" aria-hidden="true">#</a> Google 的设计演变</h3><p>早期版本的 Google 搜索在今天看来可能过于简单，但在当时却相当复杂。为了维持生计, 初创公司Google还降低了成本。从结果来看，无论我们作为设计师做什么，都会对企业及其客户产生影响。因此我们需要通过有效利用资源来满足或超越客户的需求。</p><h3 id="设计挑战" tabindex="-1"><a class="header-anchor" href="#设计挑战" aria-hidden="true">#</a> 设计挑战</h3><p>业务会改变，业务会随着时间的推移而不可用，原因如下：</p><ul><li>对于设计问题，没有单一的正确方法或解决方案。(没有银弹)</li><li>很多设计条件都是基于我们所做的假设。</li></ul><h3 id="设计师的责任" tabindex="-1"><a class="header-anchor" href="#设计师的责任" aria-hidden="true">#</a> 设计师的责任</h3><p>作为设计师，我们需要在设计层面提供容错能力.</p><p>要知道, 几乎所有的现代系统都使用现成的组件，并且有数以百万计的此类组件。运行过程中不可避免的会发生各种各样的错误, 我们需要向客户隐藏这种错误, 优化用户体验.</p><h2 id="谁应该准备系统设计面试" tabindex="-1"><a class="header-anchor" href="#谁应该准备系统设计面试" aria-hidden="true">#</a> 谁应该准备系统设计面试？</h2><p>正常来说，具有两年以上经验的中高级开发者至少会参加一次系统设计面试。对于更资深的申请者来说，一次求职过程中出现两到三次系统设计面试是很常见的。</p><p>近期，大公司也向一些初级应聘者提出了系统设计题.</p><p>所谓&quot;有备无患&quot;, 早早的学习准备系统设计面试, 只会带来好处 (●&#39;◡&#39;●)</p><h2 id="理论与实践" tabindex="-1"><a class="header-anchor" href="#理论与实践" aria-hidden="true">#</a> 理论与实践</h2><p>大多数系统设计理论都来自分布式系统领域。复习/学习分布式系统相关概念, 有助于我们学习本课程知识.</p><p>分布式系统为我们提供了成熟软件原则的路标。其中包括：</p><ul><li>稳健性（在危机期间维持运营的能力）</li><li>可扩展性</li><li>可用性</li><li>表现</li><li>可扩展性</li><li>弹性（在中断后可接受的时间段内恢复正常操作的能力）</li></ul><p>这些术语也充当面试官和应聘者之间的通用语。</p><p>例如，我们可能会说当网络组件发生故障时我们需要在可用性和一致性之间进行权衡，因为 CAP 定理表明我们不能在网络分区下同时顾全这两个方面。这种共同语言有助于沟通，也间接表明我们精通理论知识并具有相应实践经验。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>请记住</strong> 向面试官展示他们的技能是候选人的工作。</p></div>', 43);
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
    _hoisted_2
  ]);
}
const _01WhatIsInterview_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01WhatIsInterview.html.vue"]]);
export {
  _01WhatIsInterview_html as default
};
