import { _ as _export_sfc, Y as openBlock, Z as createElementBlock, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p><strong>本节目标:</strong> 了解可扩展性及其在系统设计中的重要性。</p><h2 id="什么是可扩展性" tabindex="-1"><a class="header-anchor" href="#什么是可扩展性" aria-hidden="true">#</a> 什么是可扩展性？</h2><p><strong>可扩展性</strong> 是系统在不影响性能的情况下处理不断增加的工作负载的能力。</p><p>eg: 搜索引擎必须随其业务发展容纳越来越多的用户, 并增加索引的数据量。</p><p>工作负载可以有不同的类型：</p><ul><li><strong>请求工作量</strong>：系统处理的请求数。</li><li><strong>数据/存储工作量</strong>：系统存储的数据量。</li></ul><h2 id="标准" tabindex="-1"><a class="header-anchor" href="#标准" aria-hidden="true">#</a> 标准</h2><p>以下是可扩展性的不同维度：</p><ul><li><strong>大小可扩展性</strong>：如果我们可以简单地向系统添加额外的用户和资源，则系统是大小可扩展的。</li><li><strong>管理可扩展性</strong>：如果新的组织或用户轻松共享系统, 则系统是管理可扩展的 。</li><li><strong>地理可扩展性</strong>：在部署成本不同的地理位置, 系统可以保持正常的性能, 则该系统是地理可扩展的。</li></ul><h2 id="不同的可扩展性方法" tabindex="-1"><a class="header-anchor" href="#不同的可扩展性方法" aria-hidden="true">#</a> 不同的可扩展性方法</h2><p>以下是实现可扩展性的不同方法。</p><h3 id="垂直可扩展性——向上扩展" tabindex="-1"><a class="header-anchor" href="#垂直可扩展性——向上扩展" aria-hidden="true">#</a> 垂直可扩展性——向上扩展</h3><p><strong>垂直扩展</strong>，也称为“<strong>向上扩展</strong>”，是指通过为现有设备提供额外功能（例如，额外的 CPU 或 RAM）来进行扩展。垂直扩展允许我们扩展当前的硬件或软件容量，但该扩展方案存在明显的瓶颈, 很容易达到性能上限。垂直扩展需要庞大的资金支持。</p><h3 id="横向扩展——向外扩展" tabindex="-1"><a class="header-anchor" href="#横向扩展——向外扩展" aria-hidden="true">#</a> 横向扩展——向外扩展</h3><p><strong>水平扩展</strong>，也称为“<strong>向外扩展</strong>”，是指增加网络中的机器数量。甚至, 我们可以使用一些商业节点(云服务器)，它们的成本相对更低。这要求我们构建一个系统, 使很多节点都可以在其中工作, 从整体上看, 它们就像一个服务器一样。</p><p><img src="https://cdn.jsdelivr.net/gh/gaoxiang15125/BlogImage@master/1676381942255.png" alt="" loading="lazy"></p>', 16);
const _hoisted_17 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_17);
}
const _03Scalability_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "03Scalability.html.vue"]]);
export {
  _03Scalability_html as default
};
