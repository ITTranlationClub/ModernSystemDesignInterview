import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/10-Key-valueStore/QQ截图20230407120258.png";
const _imports_1 = "/model-system-design/img/10-Key-valueStore/QQ截图20230407120312.png";
const _imports_2 = "/model-system-design/img/10-Key-valueStore/QQ截图20230407120517.png";
const _imports_3 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413212810.png";
const _imports_4 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413212823.png";
const _imports_5 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413212834.png";
const _imports_6 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413212845.png";
const _imports_7 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413212903.png";
const _imports_8 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413212913.png";
const _imports_9 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413212922.png";
const _imports_10 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413212932.png";
const _imports_11 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413212942.png";
const _imports_12 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413212954.png";
const _imports_13 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213013.png";
const _imports_14 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213024.png";
const _imports_15 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213036.png";
const _imports_16 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213047.png";
const _imports_17 = "/model-system-design/img/10-Key-valueStore/QQ截图20230407120328.png";
const _imports_18 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213624.png";
const _imports_19 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213639.png";
const _imports_20 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213650.png";
const _imports_21 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213701.png";
const _imports_22 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213717.png";
const _imports_23 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213731.png";
const _imports_24 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213745.png";
const _imports_25 = "/model-system-design/img/10-Key-valueStore/QQ截图20230413213806.png";
const _imports_26 = "/model-system-design/img/10-Key-valueStore/QQ截图20230407120342.png";
const _imports_27 = "/model-system-design/img/10-Key-valueStore/QQ截图20230407120352.png";
const _imports_28 = "/model-system-design/img/10-Key-valueStore/QQ截图20230407120410.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>了解一致性哈希如何实现可扩展性以及如何复制分区数据。</p><h2 id="增加可扩展性" tabindex="-1"><a class="header-anchor" href="#增加可扩展性" aria-hidden="true">#</a> 增加可扩展性</h2><p>让我们从其中一个核心设计要求开始：可扩展性。我们将键-值数据存储在存储节点中。随着需求的变化，我们可能需要添加或删除存储节点。这意味着我们需要将数据分区到系统中的节点上，以便将负载分布到所有节点上。</p><p>例如，假设我们有四个节点，我们希望将25％的请求发送到每个节点以平衡负载。传统的解决方法是使用取模运算符。当收到请求时，我们分配一个请求ID，计算其哈希值，并通过将其取模节点数得到余数。余数值就是节点编号，我们将请求发送到该节点以处理它。</p><p>以下幻灯片解释了这个过程：</p><p><img src="' + _imports_0 + '" alt="QQ截图20230407120258" loading="lazy"></p><p>我们获取请求ID的哈希值，并取模以查找应处理请求的节点</p><p><img src="' + _imports_1 + '" alt="QQ截图20230407120312" loading="lazy"></p><p>我们对请求ID执行所需的操作以获取节点</p><p><img src="' + _imports_2 + '" alt="QQ截图20230407120517" loading="lazy"></p><p>节点2将处理请求</p><p>我们希望在最小更改基础架构的情况下添加和删除节点。</p><p>但是在这种方法中，当我们添加或删除节点时，我们需要移动大量的键。</p><p>这是低效的。</p><p>例如，我们移除节点2，并假设对于相同的请求ID，新服务器要处理请求的节点将是节点1，因为10%3=110%3=1。</p><p>节点在它们的本地缓存中保存信息，如键和它们的值。</p><p>因此，我们需要将该请求的数据移动到下一个要处理请求的节点。</p><p>但是这种复制可能是昂贵的，并且可能导致高延迟。</p><p>接下来，我们将学习如何高效地复制数据。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><h6 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h6><p>为什么我们没有使用负载均衡器将请求分发到所有节点？</p><p>答案</p><p>负载均衡器根据算法分发客户端请求。</p><p>该算法可以像上面解释的那样简单，也可以是一些详细的算法，如下一节所述的详细描述。</p><p>我们将讨论的下一种方法可能是负载均衡器将请求平衡在节点之间的方法之一。</p></div><h3 id="一致性哈希" tabindex="-1"><a class="header-anchor" href="#一致性哈希" aria-hidden="true">#</a> 一致性哈希</h3><p><strong>一致性哈希</strong>是一种有效的管理节点集合负载的方式。</p><p>在一致性哈希中，我们考虑一个哈希环，从0到<em>n</em>−1都是哈希值，其中<em>n</em>是可用的哈希值数量。</p><p>我们使用每个节点的ID，计算其哈希值，并将其映射到环上。我们对请求应用相同的过程。</p><p>每个请求按顺时针方向在环上移动，由它找到的下一个节点完成。</p><p>每当向环添加新节点时，立即下一个节点就会受到影响。</p><p>它必须与新添加的节点共享其数据，而其他节点则不受影响。它很容易扩展，因为我们能够使节点更改最小化。</p><p>这是因为只有少量的关键字需要移动。</p><p>哈希是随机分布的，因此我们期望请求负载在平均情况下随机分布并平均分布在环上。</p><p><img src="' + _imports_3 + '" alt="QQ截图20230413212810" loading="lazy"></p><p>考虑我们有一个哈希环，从0到n-1都是哈希值，其中n是环中可用的哈希值总数。</p><p><img src="' + _imports_4 + '" alt="QQ截图20230413212823" loading="lazy"></p><p>计算 Node1 的哈希值并将 Node1 添加到环中。</p><p><img src="' + _imports_5 + '" alt="QQ截图20230413212834" loading="lazy"></p><p>计算Node2的哈希值并将Node2添加到环中。</p><p><img src="' + _imports_6 + '" alt="QQ截图20230413212845" loading="lazy"></p><p>计算其他节点的哈希值并将其添加到环中。</p><p><img src="' + _imports_7 + '" alt="QQ截图20230413212903" loading="lazy"></p><p>同样，计算请求的哈希值并将请求添加到环中。</p><p><img src="' + _imports_8 + '" alt="QQ截图20230413212913" loading="lazy"></p><p>请求按顺时针方向移动到找到的下一个节点处完成。</p><p><img src="' + _imports_9 + '" alt="QQ截图20230413212922" loading="lazy"></p><p>计算下一个请求的哈希值并将请求添加到环中。</p><p><img src="' + _imports_10 + '" alt="QQ截图20230413212932" loading="lazy"></p><p>请求由N2完成，因为它是顺时针方向的下一个节点。</p><p><img src="' + _imports_11 + '" alt="QQ截图20230413212942" loading="lazy"></p><p>计算请求的哈希值并将请求添加到环中。</p><p><img src="' + _imports_12 + '" alt="QQ截图20230413212954" loading="lazy"></p><p>请求被 N3 处理，因为它是顺时针方向上的下一个节点。</p><p><img src="' + _imports_13 + '" alt="QQ截图20230413213013" loading="lazy"></p><p>对于新节点 Node5，计算哈希值后将其添加到环中。</p><p><img src="' + _imports_14 + '" alt="QQ截图20230413213024" loading="lazy"></p><p>N3 将从 N2 到 N5 的键与 N5 共享。</p><p><img src="' + _imports_15 + '" alt="QQ截图20230413213036" loading="lazy"></p><p>计算新请求的哈希值并将其添加到环中。</p><p><img src="' + _imports_16 + '" alt="QQ截图20230413213047" loading="lazy"></p><p>请求被 N5 处理，而不是 N3，因为 N5 是顺时针方向上的下一个节点。</p><p>一致性哈希的主要优点是，随着节点加入或离开，它确保最少数量的键需要移动。</p><p>然而，在实践中，请求负载并不均衡。任何处理大量数据的服务器都可能成为分布式系统中的瓶颈。</p><p>该节点将接收到不成比例的大量数据存储和检索请求，降低整个系统的性能。因此，这些节点被称为热点。</p><p>如下图所示，大多数请求在 N4 和 N1 之间。</p><p>现在，与其他节点相比，N1 必须处理大部分请求，它已成为一个热点。</p><p>这意味着非均匀的负载分布增加了单个服务器的负载。</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p><strong>注意：</strong> 在继续阅读之前，思考一下非均匀负载分布的可能解决方案是一种很好的练习。</p></div><p><img src="' + _imports_17 + '" alt="QQ截图20230407120328" loading="lazy"></p><p>环中的非均匀请求分布</p><h4 id="使用虚拟节点" tabindex="-1"><a class="header-anchor" href="#使用虚拟节点" aria-hidden="true">#</a> 使用虚拟节点</h4><p>我们将使用虚拟节点来确保负载在节点之间更均匀地分布。不再仅仅应用一个哈希函数，而是将多个哈希函数应用于同一个键。</p><p>让我们来举个例子。假设我们有三个哈希函数。</p><p>对于每个节点，我们计算三个哈希值并将它们放入环中。</p><p>对于请求，我们只使用一个哈希函数。</p><p>不管请求落在环的哪个位置，它都将被顺时针方向上的下一个节点处理。</p><p>每个服务器都有三个位置，因此请求的负载更加均匀。</p><p>此外，如果一个节点比其他节点有更多的硬件容量，我们可以通过使用更多的哈希函数添加更多的虚拟节点。</p><p>这样，它在环中会有更多的位置，并为更多的请求提供服务。</p><p><img src="' + _imports_18 + '" alt="QQ截图20230413213624" loading="lazy"></p><p>使用哈希 1 计算 Node1 的哈希值，并将其放入环中</p><p><img src="' + _imports_19 + '" alt="QQ截图20230413213639" loading="lazy"></p><p>使用哈希 2 计算 Node1 的哈希值，并将其放入环中</p><p><img src="' + _imports_20 + '" alt="QQ截图20230413213650" loading="lazy"></p><p>使用哈希 3 计算 Node1 的哈希值，并将其放入环中</p><p><img src="' + _imports_21 + '" alt="QQ截图20230413213701" loading="lazy"></p><p>使用哈希 1 计算 Node2 的哈希值，并将其放入环中</p><p><img src="' + _imports_22 + '" alt="QQ截图20230413213717" loading="lazy"></p><p>使用哈希 2 计算 Node2 的哈希值，并将其放入环中</p><p><img src="' + _imports_23 + '" alt="QQ截图20230413213731" loading="lazy"></p><p>使用哈希 3 计算 Node2 的哈希值，并将其放入环中</p><p><img src="' + _imports_24 + '" alt="QQ截图20230413213745" loading="lazy"></p><p>使用哈希 1 计算请求的哈希值，并将请求放入环中</p><p><img src="' + _imports_25 + '" alt="QQ截图20230413213806" loading="lazy"></p><p>请求将由 Node2 的虚拟节点处理</p><h5 id="使用虚拟节点的优点" tabindex="-1"><a class="header-anchor" href="#使用虚拟节点的优点" aria-hidden="true">#</a> 使用虚拟节点的优点</h5><p>使用虚拟节点有以下一些优点：</p><ul><li>如果一个节点失败或需要例行维护，工作负载会均匀地分布到其他节点上。对于每个新可访问的节点，当它重新上线或添加到系统中时，其他节点接收到的负载几乎是相等的。</li><li>每个节点可以决定它需要负责多少个虚拟节点，考虑到物理基础设施的异构性。例如，如果一个节点的计算能力比其他节点大约多一倍，它可以承担更多的负载。</li></ul><p>我们已经使所提出的键值存储设计具有可扩展性。下一个任务是使我们的系统高度可用。</p><h2 id="数据复制" tabindex="-1"><a class="header-anchor" href="#数据复制" aria-hidden="true">#</a> 数据复制</h2><p>我们有各种方法来复制存储。可以是主次关系或对等关系。</p><h3 id="主次关系" tabindex="-1"><a class="header-anchor" href="#主次关系" aria-hidden="true">#</a> 主次关系</h3><p>在<strong>主次关系</strong>中，一个存储区是主要的，其他存储区是次要的。</p><p>次要存储从主要存储中复制其数据。主要存储提供写请求，而次要存储提供读请求。</p><p>写入后，存在一个复制延迟。此外，如果主要存储出现故障，我们无法写入存储，它将成为单点故障。</p><p><img src="' + _imports_26 + '" alt="QQ截图20230407120342" loading="lazy"></p>', 102);
const _hoisted_103 = /* @__PURE__ */ createStaticVNode('<div class="hint-container tip"><p class="hint-container-title">提示</p><h6 id="问题-1" tabindex="-1"><a class="header-anchor" href="#问题-1" aria-hidden="true">#</a> 问题</h6><p>主次关系是否满足我们在系统设计：键值存储课程中定义的键值存储要求？</p><p>答案</p><p>我们的要求之一是需要始终具备写入能力。这种方法适用于始终读取选项。</p><p>然而，这种方法不包括始终写入的能力，因为它会过载主要存储。此外，如果一个主服务器故障，我们需要将次要存储升级为主要存储。</p><p>在切换期间，写入的可用性将会受到影响，因为我们不允许写入。</p></div><h3 id="对等关系" tabindex="-1"><a class="header-anchor" href="#对等关系" aria-hidden="true">#</a> 对等关系</h3><p>在<strong>对等关系</strong>中，所有涉及的存储区都是主要的，它们复制数据以保持更新。</p><p>所有节点都允许读和写。通常，在所有 <em>n</em> 节点中复制是低效和昂贵的。</p><p>因此，选择三个或五个存储节点进行复制是常见的选择。</p><p><img src="' + _imports_27 + '" alt="QQ截图20230407120352" loading="lazy"></p>', 6);
const _hoisted_109 = /* @__PURE__ */ createStaticVNode('<p>我们将使用对等关系进行复制。我们将在多个主机上复制数据以实现耐用性和高可用性。</p><p>每个数据项将在 <em>n</em> 个主机上复制，其中 <em>n</em> 是按键值存储实例配置的参数。例如，如果我们选择 <em>n</em> 为 55，则表示我们希望数据复制到五个节点。</p><p>每个节点都会将其数据复制到其他节点。我们将调用一个协调器节点来处理读或写操作。</p><p>它直接负责键。协调器节点被分配了键“K”。它还负责将键复制到环上的 <em>n</em>−1 个继承者（顺时针）。</p><p>这些继承者虚拟节点列表称为首选项列表。</p><p>为了避免在同一物理节点上放置副本，首选项列表可以跳过已经在列表中的那些虚拟节点的物理节点。</p><p>让我们考虑下面所示的示例。我们将复制因子 <em>n</em> 设置为 3。对于键“K”，复制是在接下来的三个节点 B、C 和 D 上完成的。同样，对于键“L”，复制是在节点 C、D 和 E 上完成的。</p><p><img src="' + _imports_28 + '" alt="QQ截图20230407120410" loading="lazy"></p><p>键值存储中的复制</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><h6 id="问题-2" tabindex="-1"><a class="header-anchor" href="#问题-2" aria-hidden="true">#</a> 问题</h6><p>同步或异步复制的影响是什么？</p><p>答案</p><p>在同步复制中，写入速度很慢，因为在向用户确认之前，数据必须复制到所有节点。</p><p>它会影响我们的可用性，因此我们不能采用它。当我们选择异步复制时，它允许我们向节点进行快速写入。</p></div><p>在 CAP 定理的上下文中，当存在网络分区时，键值存储可以是一致的或可用的。</p><p>对于键值存储，我们更喜欢可用性而不是一致性。这意味着如果两个存储节点失去复制连接，它们将继续处理发送到它们的请求，当连接恢复时，它们将进行同步。</p><p>在断开连接的阶段，节点不一致的可能性很高。因此，我们需要解决这些冲突。在下一课中，我们将学习一种使用数据版本控制来处理不一致的概念。</p>', 13);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("主次关系")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_103,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("对等关系")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_109
  ]);
}
const _03ScalabilityReplication_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "03ScalabilityReplication.html.vue"]]);
export {
  _03ScalabilityReplication_html as default
};
