import { _ as _export_sfc, Y as openBlock, Z as createElementBlock, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p><strong>本节目标:</strong> 了解分布式系统中的故障并掌握处理故障的相关模型。</p><p>故障在分布式系统的世界中是常见的，它们可能以各种形式出现, 有时是偶尔复现, 有时会持续很长时间。</p><p>故障模型为我们提供了一个框架来推断故障的影响范围一级可能的处理故障的方法。</p><p>下图展示了一系列不同的故障模型：</p><p><img src="https://cdn.jsdelivr.net/gh/gaoxiang15125/BlogImage@master/1676258084469.png" alt="故障模型" loading="lazy"></p><h2 id="失败停止-fail-stop" tabindex="-1"><a class="header-anchor" href="#失败停止-fail-stop" aria-hidden="true">#</a> 失败停止 Fail-stop</h2><p>本故障类型中: 分布式系统中的一个节点永久停止。但其他节点仍然可以通过与该节点通信来检测该节点。</p><p>从开发人员的角度看, fail-stop故障模型是最简单/方便进行处理的。</p><h2 id="崩溃" tabindex="-1"><a class="header-anchor" href="#崩溃" aria-hidden="true">#</a> 崩溃</h2><p>本故障类型中: 分布式系统中的一个节点静默停止，其他节点无法检测到该节点已停止工作。</p><h2 id="遗漏失败" tabindex="-1"><a class="header-anchor" href="#遗漏失败" aria-hidden="true">#</a> 遗漏失败</h2><p>本故障类型中: 节点无法发送或接收消息。</p><p>有两种类型的遗漏故障:</p><ul><li>节点未能响应传入请求，则称为<strong>发送遗漏失败</strong>。</li><li>节点没有收到请求，这被称为<strong>接收遗漏失败</strong>。</li></ul><p>笔者的话: 本故障类型对应 消息丢失/消息未消费等</p><h2 id="临时失败" tabindex="-1"><a class="header-anchor" href="#临时失败" aria-hidden="true">#</a> 临时失败</h2><p>本故障类型中: 节点因为延迟等原因没有及时返回结果。</p><p>这种失败可能是由于糟糕的算法、糟糕的设计策略或处理器时钟之间失去同步造成的。</p><h2 id="拜占庭失败" tabindex="-1"><a class="header-anchor" href="#拜占庭失败" aria-hidden="true">#</a> 拜占庭失败</h2><p>本故障类型中: 节点表现出随机行为，例如在任意时间传输任意消息、产生错误结果或中途停止。这主要是由于恶意实体或软件错误的攻击而发生的。拜占庭故障是最具挑战性的故障类型。</p><p>笔者的话: 指假如系统的某个模块发生故障, 不能返回正确结果的时候, 如何确保整个系统的准确性.</p>', 21);
const _hoisted_22 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_22);
}
const _04ErrorModel_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "04ErrorModel.html.vue"]]);
export {
  _04ErrorModel_html as default
};
