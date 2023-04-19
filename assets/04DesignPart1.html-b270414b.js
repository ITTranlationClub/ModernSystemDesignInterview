import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, $ as createBaseVNode, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/17-DistributedMessagingQueue/HighLevelArchitecture.png";
const _imports_1 = "/model-system-design/img/17-DistributedMessagingQueue/ALoadBalancerBetweenFrontEndAndMetadata.png";
const _imports_2 = "/model-system-design/img/17-DistributedMessagingQueue/MappingTableResidesOnTheFrontEndServers.png";
const _imports_3 = "/model-system-design/img/17-DistributedMessagingQueue/MappingTableResidesOnEachMetadataServer.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>了解消息队列的高级设计以及如何扩展队列的元数据。</p><p>截至目前，我们已经讨论了分布式消息队列的要求和设计考虑因素。现在，让我们开始了解分布式消息队列的高级设计。</p><h2 id="分布式消息队列" tabindex="-1"><a class="header-anchor" href="#分布式消息队列" aria-hidden="true">#</a> 分布式消息队列</h2><p>与单服务器消息队列不同，分布式消息队列存在于多个服务器上。分布式消息队列也有自己的挑战。但是，如果设计得当，它可以解决单服务器消息队列的缺点。</p><p>接下来的章节将重点介绍设计分布式消息队列的可扩展性、可用性和耐用性问题，从而为我们引入更加容错的消息队列架构。</p><h3 id="高级设计" tabindex="-1"><a class="header-anchor" href="#高级设计" aria-hidden="true">#</a> 高级设计</h3><p>在深入设计之前，让我们假设以下要点，以使讨论更简单易懂。在接下来的内容中，我们将讨论以下假设如何使我们消除单服务器消息队列方案中的问题。</p><ol><li><p>队列数据使用单个集群内的主从或类似于仲裁的系统进行复制（请参阅数据复制以获取更多详细信息）。我们的服务可以使用分区数据，如果队列太长无法适合单个服务器。我们可以使用一种类似于一致性哈希的方案，或者我们可以使用键值存储器，其中键可能是消息的序列号。在这种情况下，每个分片都会适当地进行复制（请参阅分区以了解更多详细信息）。</p></li><li><p>我们还假设我们的系统可以根据需求自动扩展和自动收缩资源，以最佳地利用资源。</p></li></ol><p>下图展示了由多个组件组成的分布式消息队列的高级设计。</p><p><img src="' + _imports_0 + '" alt="HighLevelArchitecture" loading="lazy"></p>', 10);
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<p>我们设计的主要组件在下面详细说明。</p><h4 id="负载均衡器" tabindex="-1"><a class="header-anchor" href="#负载均衡器" aria-hidden="true">#</a> 负载均衡器</h4><p>负载均衡器层接收来自生产者和消费者的请求，将其转发到其中一个前端服务器。该层由多个负载均衡器组成。因此，请求被接受时延迟最小，提供高可用性。</p><h4 id="前端服务" tabindex="-1"><a class="header-anchor" href="#前端服务" aria-hidden="true">#</a> 前端服务</h4><p>前端服务由分布在数据中心中的无状态计算机组成。前端提供以下服务：</p><ul><li><p><strong>请求验证：</strong> 这确保请求的有效性，并检查是否包含所有必要的信息。</p></li><li><p><strong>认证和授权：</strong> 该服务检查请求者是否为有效用户，并检查是否授权使用这些服务。</p></li><li><p><strong>缓存：</strong> 前端缓存中存储与频繁使用的队列相关的元数据信息。除此之外，用户相关数据也在这里进行缓存，以减少到认证和授权服务的请求时间。</p></li><li><p><strong>请求分发：</strong> 前端还负责调用另外两个服务，即后端和元数据存储。对这两个服务的不同调用是前端的职责之一。</p></li><li><p><strong>请求去重：</strong> 前端还会跟踪所有请求相关的信息，因此它还会防止重复请求。这里可能会有一个问题：如何确定两个（或更多）请求是重复的。有几种方法可以识别重复的消息；然而，最可靠的方法是计算消息内容（而不是消息属性）的哈希值（最好使用SHA256）。这样，如果传入的消息具有相同的内容，服务将根据它们的哈希值检测重复。对于重复的请求，决定该如何处理可能会像在存储中搜索哈希键一样简单。如果在存储中找到了某些内容，则意味着有重复的消息，可以拒绝该消息。</p></li><li><p><strong>使用数据收集：</strong> 这指的是收集实时数据以供审核目的使用。</p></li></ul><h4 id="元数据服务" tabindex="-1"><a class="header-anchor" href="#元数据服务" aria-hidden="true">#</a> 元数据服务</h4><p>该组件负责存储、检索和更新元数据存储和缓存中队列的元数据。每当创建或删除队列时，元数据存储和缓存也会相应地更新。元数据服务充当前端服务器和数据层之间的中介系统。由于队列的元数据存储在缓存中，因此前端服务器会首先检查缓存中与请求收据相关的任何相关信息。如果发生缓存未命中，则会从元数据存储中检索信息，并相应地更新缓存。</p><p>有两种不同的方法来组织元数据缓存集群：</p>', 9);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "如果要存储的元数据较小且可以驻留在单个计算机上，则在每个集群服务器上都复制它。随后，请求可以从任何随机服务器提供服务。在这种方法中，前端服务器和元数据服务之间也可以引入负载均衡器。",
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      alt: "ALoadBalancerBetweenFrontEndAndMetadata",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "如果要存储的元数据太大，则可以采用以下一种或多种方式：",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("第一种策略是使用分片方法将数据划分为不同的碎片。可以基于某些分区键或哈希技术来执行"),
      /* @__PURE__ */ createBaseVNode("strong", null, "分片"),
      /* @__PURE__ */ createTextVNode("，如数据库分区课程中所讨论的一样。每个碎片存储在集群中的不同主机上。此外，每个碎片也在不同的主机上复制，以提高可用性。在此集群组织方法中，前端服务器具有碎片和主机之间的映射表。因此，前端服务器负责将请求重定向到存储数据的主机。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_2,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "第二种方法与第一种方法类似。但是，在这种方法中，映射表存储在每个主机上，而不仅仅是在前端服务器上。因此，任何随机主机都可以接收请求并将其转发到存储数据的主机。这种技术适用于读取密集型应用程序。",
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_3,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在我们对分布式消息队列的讨论中，我们集中讨论了这种类型队列的高级设计。此外，我们探索了高级设计中的每个组件，包括以下内容：",
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "为了使运行顺畅，前端服务器及其所需服务。"),
    /* @__PURE__ */ createBaseVNode("li", null, "负载均衡器。"),
    /* @__PURE__ */ createBaseVNode("li", null, "元数据服务。"),
    /* @__PURE__ */ createBaseVNode("li", null, "元数据集群及其组织。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "设计的一个关键部分是后端服务器的组织，用于队列的创建、删除和其他重要操作。下一课将关注后端服务器的组织和队列管理，以及与消息传递和检索相关的其他重要操作。",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("分布式消息队列的高级架构")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_11,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        _hoisted_20,
        _hoisted_21,
        createVNode(_component_center, null, {
          default: withCtx(() => [
            createTextVNode("引入前端服务器和元数据服务之间的负载均衡器")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        _hoisted_22,
        _hoisted_23,
        _hoisted_24,
        createVNode(_component_center, null, {
          default: withCtx(() => [
            createTextVNode("映射表驻留在前端服务器上")
          ]),
          _: 1
          /* STABLE */
        }),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _hoisted_25,
            _hoisted_26,
            createVNode(_component_center, null, {
              default: withCtx(() => [
                createTextVNode("映射表驻留在每个元数据服务器上")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_27,
    _hoisted_28,
    _hoisted_29
  ]);
}
const _04DesignPart1_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "04DesignPart1.html.vue"]]);
export {
  _04DesignPart1_html as default
};