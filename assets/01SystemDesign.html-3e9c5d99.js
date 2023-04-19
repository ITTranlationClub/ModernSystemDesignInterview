import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/19-RateLimiter/ThrottlingTheNumberOfRequestsToAPIServers.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>让我们了解一下如何设计速率限制器的基本细节。</p><h2 id="什么是速率限制器" tabindex="-1"><a class="header-anchor" href="#什么是速率限制器" aria-hidden="true">#</a> 什么是速率限制器？</h2><p>如其名，<strong>速率限制器</strong>限制服务处理请求的数量。当客户端发出的请求超过预先设定的限制时，速率限制器就会限制这些请求。例如，如果一个客户端使用的某个服务的 API 配置为在一分钟内允许 500 个请求，当客户端的请求数量超过该限制时，该服务会为该客户端阻止进一步的请求。</p><h2 id="为什么需要速率限制器" tabindex="-1"><a class="header-anchor" href="#为什么需要速率限制器" aria-hidden="true">#</a> 为什么需要速率限制器？</h2><p>速率限制器通常用作服务的防御层，以避免它们的过度使用，无论是有意还是无意的。它还可以保护服务免受针对应用程序层的恶意攻击，例如**拒绝服务 (DOS)**攻击和暴力破解密码。</p><p>下面，我们列出了一些使用速率限制器可以使服务更可靠的情况：</p><ul><li><strong>防止资源饥饿：</strong> 一些拒绝服务事件是由软件错误或系统配置引起的，导致资源饥饿。这些攻击称为“友好火力的拒绝服务”。速率限制器最常见的用例之一就是避免因此类意图的拒绝服务攻击引起的资源饥饿。</li><li><strong>管理策略和配额：</strong> 在许多用户共享的情况下，需要速率限制器提供公平和合理的资源使用能力，策略是指对所分配的时间段或数量应用限制（配额）。</li><li><strong>控制数据流：</strong> 速率限制器也可以用于需要处理大量数据的系统中。速率限制器控制数据流，使工作在不同机器上得以均匀分配，避免单个机器的负担。</li><li><strong>避免过度成本：</strong> 速率限制也可以用于控制操作成本。例如，组织可以使用速率限制器防止实验失控，并避免产生巨额费用。一些云服务提供商也使用这个概念，提供到某个限制的免费服务，并通过向用户收费的方式来增加配额。</li></ul><p><img src="' + _imports_0 + '" alt="通过速率限制器调节向API服务器发送的请求数量" loading="lazy"></p>', 8);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<h2 id="我们将如何设计速率限制器" tabindex="-1"><a class="header-anchor" href="#我们将如何设计速率限制器" aria-hidden="true">#</a> 我们将如何设计速率限制器？</h2><p>在接下来的课程中，我们将了解以下内容：</p><ol><li><p><strong>需求：</strong> 这是我们讨论速率限制器的功能和非功能需求的地方。我们还描述了不同类型的限制和速率限制器可以被放置在哪些位置才能有效执行其功能。</p></li><li><p><strong>高级设计：</strong> 在本节中，我们将查看高级设计，以提供速率限制器的概述。</p></li><li><p><strong>详细设计：</strong> 在本节中，我们将讨论速率限制器的详细设计，并解释详细设计中涉及的各种构建块。</p></li><li><p><strong>速率限制器算法：</strong> 在本课中，我们将介绍在速率限制器操作中起重要作用的不同算法。</p></li><li><p><strong>测验：</strong> 为了评估您对速率限制器的理解，我们提供了本章末尾的测验。</p></li></ol><p>在下一节中，让我们开始了解速率限制器的需求和设计。</p>', 4);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("通过速率限制器调节向API服务器发送的请求数量")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_9
  ]);
}
const _01SystemDesign_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01SystemDesign.html.vue"]]);
export {
  _01SystemDesign_html as default
};