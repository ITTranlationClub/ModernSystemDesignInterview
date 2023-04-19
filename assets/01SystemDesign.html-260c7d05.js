import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/23-DistributedTaskScheduler/QQ截图20230410140945.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>了解分布式任务调度器的基本设计原理。</p><h2 id="什么是任务调度器" tabindex="-1"><a class="header-anchor" href="#什么是任务调度器" aria-hidden="true">#</a> 什么是任务调度器？</h2><p>一个 <strong>任务</strong> 是一段需要一定时间的计算工作，需要资源（CPU时间、内存、存储、网络带宽等）。例如，在 Facebook 或 Instagram 上上传照片或视频包括以下后台任务：</p><ol><li>对照片或视频进行多个分辨率的编码。</li><li>验证照片或视频，检查内容是否受版权保护等（内容赚钱化：通过内容赚取收益的一种方式）。</li></ol><p>只有所有上述任务都成功执行，照片或视频才能被显示出来。然而，照片和视频上传者并不需要等待上述任务全部完成才能完成上传。</p><p>另一个例子是当我们在 Facebook 上发表评论时。我们不会一直等到这条评论被发送到所有关注者才能继续发帖。这个过程会被异步任务调度器代理去离线处理。</p><p>在一个系统中，许多任务争夺有限的计算资源。一个系统通过智能地将资源分配给任务，以满足任务级和系统级目标，来协调任务和资源之间的关系的系统被称为 <strong>任务调度器</strong>。</p><h2 id="何时使用任务调度器" tabindex="-1"><a class="header-anchor" href="#何时使用任务调度器" aria-hidden="true">#</a> 何时使用任务调度器</h2><p>任务调度器是系统高效完成工作的关键组件。它允许我们使用有限的资源完成大量任务。</p><p>它还有助于充分利用系统的资源，为用户提供不间断的执行体验等。以下是一些任务调度的用例：</p><ul><li><strong>基于单个操作系统的节点：</strong> 它有许多进程或任务争夺节点的有限计算资源。因此，我们可以使用本地操作系统任务调度程序，高效地分配资源给任务。它使用多反馈队列选择一些任务并在某个处理器上运行它们。</li><li><strong>云计算服务：</strong> 在这里有许多分布式资源和来自多个租户的各种任务，有强烈的需求为了高效利用云计算资源和满足租户的需求而使用任务调度器。本地操作系统任务调度器不足以满足此目的，因为任务数量达到了数十亿，任务的来源不是单一的，管理的资源也不在单一台机器上。我们必须采用分布式解决方案。</li><li><strong>大型分布式系统：</strong> 在这个系统中，许多任务针对用户的一个单个请求在后台运行。考虑到像 Facebook、WhatsApp 或 Instagram 这样的流行系统有数百万到数十亿的用户，这些系统需要一个任务调度器来处理数十亿个任务。Facebook 使用 Async 调度其任务，以处理数十亿个并行异步请求。（异步请求：异步请求是那些不在客户端关键路径上的请求，通常具有一些延迟容忍度。用户请求这些任务，系统完成任务而请求者不需要等待工作完成。有关任务的最终状态的通知将在未来的某个时间通知请求者。）</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Async 是 Facebook 的自有分布式任务调度器，负责调度其所有任务。</p><p>有些任务更加时间敏感，比如通知用户某个活动的直播已经开始的任务。</p><p>如果用户在直播结束后才收到通知，这将毫无意义。有些任务可以延迟，比如向用户推荐朋友的任务。</p><p>Async 根据适当的优先级安排任务。</p></div><h2 id="分布式任务调度" tabindex="-1"><a class="header-anchor" href="#分布式任务调度" aria-hidden="true">#</a> 分布式任务调度</h2><p>在适时地决定和分配任务资源的过程称为 <strong>任务调度</strong>。下图展示了操作系统级别的任务调度器和数据中心级别的任务调度器之间的视觉差异：</p><p><img src="' + _imports_0 + '" alt="QQ截图20230410140945" loading="lazy"></p>', 15);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<p>操作系统级别的任务调度器在节点的计算资源上安排该节点的本地任务或进程。同时，数据中心的任务调度器安排来自使用数据中心资源的多个租户的数十亿个任务。</p><p>我们的目标是设计一个类似于数据中心级别的任务调度器，其中考虑以下内容：</p><ul><li>任务将来自许多不同的来源、租户和子系统。</li><li>许多资源将分散在数据中心中（或者可能分散在多个数据中心中）。</li></ul><p>上述两个要求使任务调度问题具有挑战性。我们将设计一个分布式任务调度器，通过使其具有可伸缩性、可靠性和容错性，来处理所有这些任务。</p><h2 id="我们将如何设计任务调度系统" tabindex="-1"><a class="header-anchor" href="#我们将如何设计任务调度系统" aria-hidden="true">#</a> 我们将如何设计任务调度系统？</h2><p>我们将任务调度器的设计分为四个部分：</p><ol><li><strong>需求：</strong> 在这一部分，我们将识别任务调度系统的功能和非功能要求。</li><li><strong>设计：</strong> 这一部分将讨论任务调度系统的系统设计，并探讨系统和数据库架构的组件。</li><li><strong>设计考虑因素：</strong> 在这一部分，我们将强调一些设计因素，如任务优先级、资源优化等。</li><li><strong>评估：</strong> 我们将根据我们的需求评估任务调度器的设计。</li></ol><p>让我们从了解任务调度系统的需求开始.</p>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("操作系统级别的任务调度器和数据中心级别的任务调度器")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_16
  ]);
}
const _01SystemDesign_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01SystemDesign.html.vue"]]);
export {
  _01SystemDesign_html as default
};
