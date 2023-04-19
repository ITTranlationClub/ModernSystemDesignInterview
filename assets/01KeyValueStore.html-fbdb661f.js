import { _ as _export_sfc, Y as openBlock, Z as createElementBlock, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/10-Key-valueStore/QQ截图20230407115729.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>让我们了解一下设计键值存储的基础知识。</p><h2 id="键值存储简介" tabindex="-1"><a class="header-anchor" href="#键值存储简介" aria-hidden="true">#</a> 键值存储简介</h2><p><strong>键值存储</strong>是分布式哈希表(DHT)。哈希函数生成一个键，键应该是唯一的。</p><p>在键值存储中，一个键绑定到一个特定的值，并且不对该值的结构做出任何假设。值可以是一个blob、图片、服务器名字，或者用户想要存储在一个唯一键值下的任何东西。</p><p>通常，保持值的大小相对较小（KB到MB）是首选的。我们可以将大型数据放在blob存储中，并在值字段中放置指向该数据的链接。</p><p>键值存储在许多情况下都非常有用，例如在Web应用程序中存储用户会话和构建NoSQL数据库。</p><p>在分布式环境中，使用具有强一致性和高可用性的传统数据库很具有挑战性。</p><p>许多现实世界的服务，例如亚马逊、Facebook、Instagram、Netflix等都使用基于主键的数据存储而不是传统的在线事务处理（OLTP）数据库。</p><p>使用键值存储的例子包括畅销书列表、购物车、客户喜好、会话管理、销售排名和产品目录。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230407115729" loading="lazy"></p><p>键值存储</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>注意：许多应用程序可能不需要传统关系型数据库管理系统（RDBMS）提供的丰富编程模型。</p><p>对于这样的应用程序，使用RDBMS通常在成本和性能方面都很高昂。</p></div><h2 id="我们将如何设计键值存储" tabindex="-1"><a class="header-anchor" href="#我们将如何设计键值存储" aria-hidden="true">#</a> 我们将如何设计键值存储？</h2><p>我们将键值系统设计分成以下四个课程：</p><ol><li>设计键值存储: 我们将定义键值存储的要求并设计API。</li><li>确保可扩展性和复制: 我们将学习如何使用一致性哈希实现可扩展性，并复制被分区的数据。</li><li>数据版本控制和实现可配置性: 我们将学习如何解决由多个实体所做的更改引起的冲突，并使我们的系统对不同的用例更具可配置性。</li><li>实现容错和故障检测: 我们将学习如何使键值存储容错，并如何检测系统中的故障。</li></ol>', 15);
const _hoisted_16 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_16);
}
const _01KeyValueStore_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01KeyValueStore.html.vue"]]);
export {
  _01KeyValueStore_html as default
};