import { _ as _export_sfc, Y as openBlock, Z as createElementBlock, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/21-DistributedSearch/20230217111308.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>分析我们的设计如何满足要求。</p><h2 id="可用性" tabindex="-1"><a class="header-anchor" href="#可用性" aria-hidden="true">#</a> 可用性</h2><p>我们利用分布式存储来存储这些项目：</p><ul><li>索引器抓取的文档。</li><li>索引节点生成的倒排索引。</li></ul><p>数据在分布式存储中跨多个区域复制，使索引和搜索的跨区域部署更加容易。索引和搜索节点组只需要在不同的可用性区域中进行复制。因此，我们将索引和搜索节点集群部署在不同的可用性区域。因此，如果一个地方发生故障，我们可以处理来自另一个集群的请求。多组索引和搜索节点有助于实现高索引和搜索可用性。此外，在每个集群中，如果一个节点死亡，另一个节点可以取而代之。</p><p>索引是离线执行的，而不是在用户的关键路径上。我们不需要同步复制索引操作。没有必要用刚刚添加到索引中的最新数据来响应用户搜索查询。因此，我们不必等待新索引的复制来响应搜索查询。这使得搜索对用户可用。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>一旦我们复制了所有索引节点组中的最新数据并且搜索节点已经下载了它，那么搜索查询就会对最新数据执行</p></div><p><img src="' + _imports_0 + '" alt="" loading="lazy"></p><h2 id="可扩展性" tabindex="-1"><a class="header-anchor" href="#可扩展性" aria-hidden="true">#</a> 可扩展性</h2><p>分区是扩展搜索系统的重要组成部分。当我们增加分区数量并向索引和搜索集群添加更多节点时，我们可以在数据索引和查询方面进行扩展。</p><p>索引和搜索过程的强隔离有助于索引和搜索独立和动态地扩展。</p><h2 id="大数据快速搜索" tabindex="-1"><a class="header-anchor" href="#大数据快速搜索" aria-hidden="true">#</a> 大数据快速搜索</h2><p>我们使用了多个节点，每个节点在较小的倒排索引上并行执行搜索查询。然后合并每个搜索节点的结果并返回给用户。</p><h2 id="降低成本" tabindex="-1"><a class="header-anchor" href="#降低成本" aria-hidden="true">#</a> 降低成本</h2><p>我们使用更便宜的机器来计算索引和执行搜索。如果一个节点发生故障，我们不必重新计算完整的索引。相反，一些文档需要重新编入索引。</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>几乎每个应用程序都需要一个搜索系统。我们已经看到，开发一个可以在单个节点上运行的搜索系统是不可能的。我们利用并行计算框架和低成本机器构建了一个可用、可扩展且高性能的搜索系统。</p>', 17);
const _hoisted_18 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_18);
}
const _06Evaluation_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "06Evaluation.html.vue"]]);
export {
  _06Evaluation_html as default
};