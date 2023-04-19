import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, $ as createBaseVNode, a1 as createTextVNode, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/24-ShardedCounters/QQ截图20230410160240.png";
const _imports_1 = "/model-system-design/img/24-ShardedCounters/QQ截图20230410160359.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "让我们了解和设计分片计数器。",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "高级解决方案概述",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#高级解决方案概述",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 高级解决方案概述")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "管理数百万条推特点赞需要许多计数器在许多节点上运行。为了管理这些计数器，我们需要一个高效的系统，它可以随着用户数量的增长提供高性能和可扩展性。",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "当Twitter上的单个推文获得一百万个赞，并且应用服务器接收到针对每个赞的写入请求以增加相关计数器时，会发生什么？这些数百万个请求最终会在队列中串行化以确保数据一致性。这种串行化是处理并发活动的一种方式，但代价是增加延迟。实时应用程序希望通过为终端用户提供尽可能短的延迟来保持体验质量高。",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "让我们看一下下面的示例以了解这个问题：",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "QQ截图20230410160240",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("单个名人发布的每条推文的计数器不足以处理数百万用户。这个问题的解决方案是 "),
    /* @__PURE__ */ createBaseVNode("strong", null, "分片计数器"),
    /* @__PURE__ */ createTextVNode("，也称为分布式计数器，其中每个计数器具有需要的特定数量的分片。这些分片并行运行在不同的计算单元上。通过将数百万个写入请求分配到不同的分片上，我们可以提高性能并减少争用。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "首先，当用户点赞某个推文时，写入请求被转发到指定的推文计数器。然后，系统选择一个可用的指定推文计数器的分片来增加点赞计数器的值。让我们看一下下面的示例，以了解具有指定分片的分片计数器：",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      alt: "QQ截图20230410160359",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<p>在上面的示例中，每个计数器的总分片数为(<em>N</em>+1)。根据我们的需求，我们将使用适当的值来代替<em>N</em>。让我们讨论一个示例，以了解分片计数器如何处理单个帖子的数百万个写入和读取请求。</p><p>假设一个拥有数百万订阅者的著名YouTube频道上传了一个新视频。服务器从全球用户接收到视频观看量的一大批写入请求。首先，为新上传的视频初始化一个新计数器。服务器将请求转发到相应的计数器，我们的系统随机选择一个可用的分片来更新计数器的值，该值最初为零。相反，当服务器接收到读取请求时，它将添加计数器的所有分片的值，以获取当前总数。</p><p>我们可以为需要可扩展计数的每种情况（如Facebook帖子和YouTube视频）使用分片计数器。</p><h2 id="分片计数器的api设计" tabindex="-1"><a class="header-anchor" href="#分片计数器的api设计" aria-hidden="true">#</a> 分片计数器的API设计</h2><p>本节讨论将调用分片计数器的API。我们的API设计将帮助我们了解分片计数器和其调用者之间的交互。为了使我们的讨论具体化，我们将在Twitter的上下文中讨论每个API功能。让我们为以下每个功能开发API：</p><ul><li>创建计数器</li><li>写计数器</li><li>读计数器</li></ul><p>虽然上述API功能列表不是详尽无遗的，但它们代表了一些最重要的功能之一。</p><h3 id="创建计数器" tabindex="-1"><a class="header-anchor" href="#创建计数器" aria-hidden="true">#</a> 创建计数器</h3><p><code>\\createCounter</code> API初始化了一个可用于计数的分布式计数器。<code>\\createCounter</code> API如下所示：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>scssCopy code\ncreateCounter(counter_id, number_of_shards)\n</code></pre></div><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>counter_id</code></td><td>它代表计数器的唯一ID。调用此API的调用方可以使用一个序列器来获取唯一标识符。有关详情，请参阅序列器构建块课程。</td></tr><tr><td><code>number_of_shards</code></td><td>它指定计数器的分片数量。</td></tr></tbody></table><p>我们可以使用适当的数据存储来保留我们的元数据，包括计数器标识符、它们的分片数量和分片到物理机器的映射。</p><p>让我们以Twitter为例，了解应用程序如何使用上述API。当用户在社交媒体上发布内容时，<code>\\createCounter</code> API用于创建计数器。例如，如果用户在Twitter上发布了一条推文，应用程序服务器将调用<code>\\createCounter</code> API。<code>content_type</code>参数是系统用于确定需要创建的计数器数量的帖子类型。例如，仅在推文包含视频剪辑时，系统需要视图计数器。</p><p>为了找到适当的<code>number_of_shards</code>值，我们可以使用以下启发式算法：</p><ul><li><code>followers_count</code>参数表示发布推文的用户的关注者计数。</li><li><code>post_type</code>参数指定帖子是公开的还是受保护的。受保护的推文仅适用于关注者，这种情况下我们更好地预测分片数量。</li></ul><h3 id="写计数器" tabindex="-1"><a class="header-anchor" href="#写计数器" aria-hidden="true">#</a> 写计数器</h3><p>当我们想要增加（或减少）计数器时，<code>\\writeCounter</code> API用于此。实际上，计数器的特定分片会被增加或减少，我们的服务会根据多个因素进行决策，稍后我们将讨论这些因素。<code>\\writeCounter</code> API如下所示：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>scssCopy code\nwriteCounter(counter_id, action_type)\n</code></pre></div><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>counter_id</code></td><td>它是唯一标识符（在计数器创建时提供）。</td></tr><tr><td><code>action_type</code></td><td>它指定所需操作（增加或减少计数器的值）。我们从数据存储中提取有关计数器的所需信息。</td></tr></tbody></table><p>在我们的Twitter示例中，当用户对其他人的帖子或自己的帖子进行操作时（例如点赞、回复等），会使用<code>\\writeCounter</code> API。</p><h3 id="读计数器" tabindex="-1"><a class="header-anchor" href="#读计数器" aria-hidden="true">#</a> 读计数器</h3><p>当我们想要知道计数器的当前值时，使用<code>\\readCounter</code> API。我们的系统从数据存储中获取适当的信息以从所有分片收集值。<code>\\readCounter</code> API如下所示：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>scssCopy code\nreadCounter(counter_id)\n</code></pre></div><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>counter_id</code></td><td>它是唯一标识符（在计数器创建时提供）。对于Twitter，<code>counter_id</code>将基于以下指标决定：<code>tweet_id</code>指定请求生成的推文的唯一ID。我们可以使用<code>tweet_id</code>获取所有特征（点赞、转发等）的计数器的<code>counter_id</code>。</td></tr></tbody></table><p>当用户想要查看特定推文的点赞数或查看次数时，会调用<code>\\readCounter</code> API。通常，当用户想要查看他们的主页或用户时间轴时，会触发此API。</p><p>下一节将讨论在调用所有上述API时后端系统中发生的情况。</p>', 26);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    _hoisted_5,
    _hoisted_6,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("名人 vs 普通人的推文")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_7,
    _hoisted_8,
    _hoisted_9,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("不同计算单元上的计数器和它们的分片")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_10
  ]);
}
const _02HighLevelDesign_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "02HighLevelDesign.html.vue"]]);
export {
  _02HighLevelDesign_html as default
};
