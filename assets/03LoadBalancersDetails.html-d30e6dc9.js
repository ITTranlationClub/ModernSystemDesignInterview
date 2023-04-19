import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/08-LoadBalancers/QQ截图20230406211853.png";
const _imports_1 = "/model-system-design/img/08-LoadBalancers/QQ截图20230406211904.png";
const _imports_2 = "/model-system-design/img/08-LoadBalancers/QQ截图20230406211917.png";
const _imports_3 = "/model-system-design/img/08-LoadBalancers/QQ截图20230406211950.png";
const _imports_4 = "/model-system-design/img/08-LoadBalancers/QQ截图20230406212017.png";
const _imports_5 = "/model-system-design/img/08-LoadBalancers/QQ截图20230406212042.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>了解负载均衡器及其在系统中的使用。</p><p>本课程将着重介绍本地负载均衡器中使用的一些知名算法。我们也将了解负载均衡器如何相互连接以形成一个层次结构，跨不同层级的LB共享工作。</p><h2 id="负载均衡器的算法" tabindex="-1"><a class="header-anchor" href="#负载均衡器的算法" aria-hidden="true">#</a> 负载均衡器的算法</h2><p>负载均衡器按照算法分配客户端请求。以下是一些知名算法：</p><ul><li><strong>轮询调度</strong>：在此算法中，每个请求以重复顺序的方式转发到池中的服务器。</li><li><strong>加权轮询</strong>：如果某些服务器具有更高的服务客户请求的能力，则应使用加权轮询算法。在加权轮询算法中，每个节点被分配一个权重。LB根据节点的权重转发客户请求。权重越高，分配的数量越多。</li><li><strong>最少连接</strong>：在某些情况下，即使所有服务器都具有相同的服务客户的能力，某些服务器上的不均衡负载仍然是可能的。 <ul><li>例如，某些客户端可能具有需要更长时间服务的请求。或者某些客户端可能在同一连接上有随后的请求。</li><li>在这种情况下，我们可以使用最小连接数等算法，其中新到达的请求分配给具有较少现有连接的服务器。</li><li>在这种情况下，LB保持现有连接数量和映射的状态。我们将在本课程后面讨论更多状态维护的内容。</li></ul></li><li><strong>最短响应时间</strong>：在对性能敏感的服务中，需要使用最短响应时间等算法。该算法确保请求最短响应时间的服务器用于服务客户。</li><li><strong>IP哈希</strong>：某些应用程序根据用户的IP地址提供不同级别的服务。在这种情况下，执行哈希IP地址以将用户请求分配给服务器。</li><li><strong>URL哈希</strong>：可能某些应用程序中的一些服务仅由特定服务器提供。在这种情况下，从URL请求服务的客户端被分配给某个集群或一组服务器。URL哈希算法在这些情况下使用。</li></ul><p>还有其他算法，例如随机或加权最少连接算法。</p><h3 id="静态和动态算法" tabindex="-1"><a class="header-anchor" href="#静态和动态算法" aria-hidden="true">#</a> 静态和动态算法</h3><p>算法可以是静态或动态的，具体取决于机器的状态。让我们分别看看每个类别：</p><p><strong>静态算法</strong> 不考虑服务器的变化状态。因此，任务分配是基于现有对服务器配置的了解进行的。当然，这些算法并不复杂，并且在所有请求到达的单个路由器或商品机上实现。</p><p><strong>动态算法</strong> 是考虑服务器当前或最近状态的算法。</p><p>动态算法通过与服务器通信来维护状态，这增加了通信开销。</p><p>状态维护使算法的设计更加复杂。动态算法需要不同的负载平衡服务器彼此通信以交换信息。</p><p>因此，动态算法可以是模块化的，因为没有单个实体会做出决策。</p><p>尽管这增加了动态算法的复杂性，但它导致了更好的转发决策。</p><p>最后，动态算法监视服务器的健康状况，并仅将请求转发到活动服务器。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>注意：</strong> 实际上，动态算法提供的结果要好得多，因为它们维护了提供主机的状态，因此值得付出努力和复杂性。</p></div><h3 id="有状态与无状态lb" tabindex="-1"><a class="header-anchor" href="#有状态与无状态lb" aria-hidden="true">#</a> 有状态与无状态LB</h3><p>尽管静态和动态算法要考虑托管服务器的健康状况，但需要维护状态以存储不同客户端与托管服务器的会话信息。</p><p>如果会话信息没有保留在更低层（分布式缓存或数据库），负载均衡器将用于保持会话信息。</p><p>下面，我们描述了两种通过LB处理会话维护的方法：- 有状态- 无状态</p><h4 id="有状态负载均衡" tabindex="-1"><a class="header-anchor" href="#有状态负载均衡" aria-hidden="true">#</a> 有状态负载均衡</h4><p>正如其名称所示，<strong>有状态负载均衡</strong>（stateful load balancing）涉及维护客户端和托管服务器之间建立的会话状态。有状态负载均衡在其算法中包含状态信息以执行负载平衡。</p><p>有状态负载均衡器基本上会保留一种映射进入客户端到托管服务器的数据结构。</p><p>由于所有客户端的会话信息都在所有负载均衡器之间维护，因此有状态负载均衡器会增加复杂性并限制可扩展性。也就是说，负载均衡器会相互共享其状态信息以做出转发决策。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230406211853" loading="lazy"></p>', 25);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "h4",
  {
    id: "无状态负载均衡",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#无状态负载均衡",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 无状态负载均衡")
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "无状态负载均衡"),
    /* @__PURE__ */ createTextVNode("（stateless load balancing）不维护状态，因此速度更快、更轻量级。无状态负载均衡器使用一致性哈希算法（consistent hashing）做出转发决策。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "但是，如果基础架构发生更改（例如，新的应用服务器加入），无状态负载均衡器可能不像有状态负载均衡器那样具有弹性，因为仅靠一致性哈希算法无法将请求路由到正确的应用服务器。",
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "因此，在一致性哈希算法之外可能仍需要维护本地状态。",
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      alt: "QQ截图20230406211904",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createStaticVNode('<p>因此，跨不同负载均衡器维护状态被视为有状态负载均衡。而负载均衡器内部用于内部使用的状态则被视为无状态负载均衡。</p><h2 id="负载均衡器类型" tabindex="-1"><a class="header-anchor" href="#负载均衡器类型" aria-hidden="true">#</a> 负载均衡器类型</h2><p>根据要求，负载均衡可以在开放系统互连(OSI)协议的网络/传输层和应用层执行。</p><ul><li><strong>第4层负载均衡器</strong>：第4层是指基于传输协议如TCP和UDP进行的负载均衡。这些类型的LB会与客户端维护连接/会话，并确保相同（TCP/UDP）的通信最终转发到相同的后端服务器。尽管TLS终止是在第7层LB上执行的，但一些第4层LB也支持它。</li><li><strong>第7层负载均衡器</strong>：第7层负载均衡器基于应用层协议的数据。可以根据HTTP头、URL、cookie和其他应用特定数据（例如用户ID）做出应用感知的转发决策。除了执行TLS终止之外，这些LB还可以负责限制用户的速率、HTTP路由和头部重写。</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>第7层负载均衡器的检查是智能的。然而，第4层负载均衡器在处理方面更快。</p></div><h2 id="负载均衡器部署" tabindex="-1"><a class="header-anchor" href="#负载均衡器部署" aria-hidden="true">#</a> 负载均衡器部署</h2><p>我们讨论了在不同OSI层上执行的负载均衡的权衡。然而，在实践中，单个层LB不足以满足大型数据中心的需求。事实上，多层负载均衡器协同工作以做出明智的转发决策。一个传统的数据中心可能有三层LB，如下所示：</p><p><img src="' + _imports_2 + '" alt="QQ截图20230406211917" loading="lazy"></p><p>典型数据中心中的三层负载均衡器</p><h3 id="第0和第1层lb" tabindex="-1"><a class="header-anchor" href="#第0和第1层lb" aria-hidden="true">#</a> 第0和第1层LB</h3><p>如果DNS被认为是第0层负载均衡器，等费用多路径(ECMP)路由器则是第1层LB。</p><p>从ECMP的名称可以看出，这一层将根据IP或其他算法（如轮询或加权轮询）将传入的流量分成几部分。</p><p>第1层LB将负载平衡到不同路径上的第二层负载均衡器。</p><p>ECMP路由器在更高层LB的水平可扩展性方面发挥着关键作用。</p><h3 id="第2层lb" tabindex="-1"><a class="header-anchor" href="#第2层lb" aria-hidden="true">#</a> 第2层LB</h3><p>第二层LB包括第4层负载均衡器。第2层LB确保对于任何连接，所有传入的数据包都被转发到相同的第3层LB。</p><p>为了实现这个目标，可以使用类似一致性哈希的技术。但是，在基础架构发生任何变化时，一致性哈希可能不足以满足需求。</p><p>因此，我们必须在本课程后面的章节中看到，保持本地或全局状态。</p><p>第2层负载均衡器可以被认为是第1层和第3层LB之间的粘合剂。</p><p>排除第2层LB可能会导致在故障或负载均衡器的动态缩放时出现错误的转发决策。</p><h3 id="第3层lb" tabindex="-1"><a class="header-anchor" href="#第3层lb" aria-hidden="true">#</a> 第3层LB</h3><p>第3层LB在第3层提供服务。由于这些LB与后端服务器直接联系，它们在HTTP级别执行服务器的健康监测。</p><p>这一层通过在一组健康的后端服务器之间均匀分配请求来实现可扩展性，并通过直接监测服务器的健康状况来提供高可用性。</p><p>这一层还通过处理TCP阻塞控制协议、发现路径MTU(最大传输单元)、客户端和后端服务器之间的应用程序协议差异等低级别细节，减轻了终端服务器的负担。</p><p>其思想是将计算和数据服务留给应用服务器，并有效利用负载均衡器商用机器处理琐碎任务。在某些情况下，第7层LB与服务主机处于相同的级别。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>总结一下，第1层将负载平衡在负载均衡器之间。</p><p>第2层使得在故障情况下从第1层向第3层平稳转移成为可能，而第3层负责在后端服务器之间实现实际的负载均衡。</p><p>每层都执行其他任务，以减轻终端服务器的负担。</p></div><h3 id="实际例子" tabindex="-1"><a class="header-anchor" href="#实际例子" aria-hidden="true">#</a> 实际例子</h3><p>让我们看一个例子，客户端的请求基于客户端网络数据包内的应用程序数据转发到不同的应用程序服务器。</p><p><img src="' + _imports_3 + '" alt="QQ截图20230406211950" loading="lazy"></p>', 29);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_4,
      alt: "QQ截图20230406212017",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createStaticVNode('<p>让我们按照以下步骤来看上面的插图：</p><ul><li><p>R_1代表请求1通过ECMP路由器之一（第1层负载均衡器）传入。</p></li><li><p>ECMP路由器使用轮询算法将R_1转发到三个可用的第2层负载均衡器之一。第2层负载均衡器对源IP地址（IP_c）进行哈希处理，并将数据包转发到下一层负载均衡器。</p></li><li><p>第3层在接收到数据包后，卸载TLS并读取HTTP（S）数据。通过观察请求的URL，它将请求转发到处理幻灯片请求的服务器。</p></li></ul><p>R_2 走同样的路径，但由于请求的URL包含“document”而不是“slides”，因此终端服务器不同。</p><p>第3层负载均衡器预先配置为根据应用程序数据将请求转发到应用程序服务器。例如，典型的HAProxy服务器在第3层负载均衡器中可以有以下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mode HTTP                               \n//定义LB将在哪种模式下工作，TCP为第2层LB\nacl slidesApp path_end -i /presentation \n//定义应用程序类别，如果路径以/presentation结尾\nuse_backend slidesServers if slidesApp  \n//如果请求到达slidesApp，则使用一组后端服务器\nbackend slidesServers                   \n//列出提供slidesApp服务的服务器\nserver slides1 192.168.12.1:80          \n//使用slides1服务器提供slidesApp服务。 \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 5);
const _hoisted_66 = /* @__PURE__ */ createStaticVNode('<div class="hint-container info"><p class="hint-container-title">相关信息</p><h6 id="问题1" tabindex="-1"><a class="header-anchor" href="#问题1" aria-hidden="true">#</a> 问题1</h6><p>当请求到达后端服务器后，是否应将响应路由回负载均衡器的每一层？</p><p>答案:</p><p>不，服务器可以将响应直接发送到路由器（第1层LB）通过第3层LB，它可以从数据中心转发响应。这样的响应被称为<strong>直接路由</strong>（<strong>DR</strong>）或<strong>直接服务器返回</strong>（<strong>DSR</strong>）。</p><h6 id="问题2" tabindex="-1"><a class="header-anchor" href="#问题2" aria-hidden="true">#</a> 问题2</h6><p>为什么服务器不直接将响应发送到路由器（第1层LB），而是要通过第3层LB？</p><p>答案:</p><p>第3层LB维护连接的某些状态，例如SSL加密/解密。这是为了给客户端提供无缝体验。</p><h6 id="问题3" tabindex="-1"><a class="header-anchor" href="#问题3" aria-hidden="true">#</a> 问题3</h6><p>据您看，哪个层的LB更容易出现错误？</p><p>答案:</p><p>第3层的复杂性更高，因此更容易出现错误。</p><h6 id="问题4" tabindex="-1"><a class="header-anchor" href="#问题4" aria-hidden="true">#</a> 问题4</h6><p>上面的图显示了比第2层更多的第3层负载均衡器。您认为这种表示的原因是什么？</p><p>答案:</p><p>第3层执行应用程序特定的分析和相当复杂的计算。因此，处理与第2层相同数量的查询需要更多的机器。</p><p>此外，第3层LB维护大量应用程序服务器的状态，这可能无法使用与第2层相同数量的LB进行处理。</p></div><h2 id="负载均衡器的实现" tabindex="-1"><a class="header-anchor" href="#负载均衡器的实现" aria-hidden="true">#</a> 负载均衡器的实现</h2><p>可以根据传入请求的数量、组织和应用程序特定要求实现不同类型的负载均衡器：</p><h3 id="硬件负载均衡器" tabindex="-1"><a class="header-anchor" href="#硬件负载均衡器" aria-hidden="true">#</a> 硬件负载均衡器</h3><p>负载均衡器在1990年代作为硬件设备引入。硬件负载均衡器作为独立设备运行，价格相当昂贵。尽管如此，它们具有其性能优势，并能处理大量并发用户。基于硬件的解决方案的配置问题是因为它需要额外的人力资源。因此，即使是负担得起硬件负载均衡器的大型企业，它们也不是首选解决方案。可用性可能是硬件负载均衡器的问题，因为在发生故障时需要额外的硬件进行故障转移。最后，硬件LB可能具有更高的维护/运营成本和兼容性问题，使其不太灵活。更不用说硬件LB还有供应商锁。</p><h3 id="软件负载均衡器" tabindex="-1"><a class="header-anchor" href="#软件负载均衡器" aria-hidden="true">#</a> 软件负载均衡器</h3><p>由于其灵活性、可编程性和成本效益，软件负载均衡器变得越来越受欢迎。这一切都是因为它们实现在通用硬件上。随着要求的增长，软件LB可以很好地扩展。软件LB的可用性不会成为问题，因为需要在通用硬件上实现阴影负载平衡器，以便进行故障转移。此外，软件LB可以提供有助于准备未来流量模式的预测分析。</p><h3 id="云负载均衡器" tabindex="-1"><a class="header-anchor" href="#云负载均衡器" aria-hidden="true">#</a> 云负载均衡器</h3><p>随着云计算领域的出现，引入了负载平衡器作为服务（LBaaS）。这是云所有者提供负载平衡服务的地方。用户根据其使用情况或与云提供商的服务级别协议（SLA）支付费用。云基础结构中的负载平衡器可能不一定会取代本地的本地负载平衡设施，但它们可以在不同区域之间执行全局流量管理。这些负载平衡器的主要优势包括易用性、管理、计量成本、用法灵活性、审计以及监视服务以改进业务决策。下面是云负载平衡器如何提供GSLB的示例：</p><p><img src="' + _imports_5 + '" alt="QQ截图20230406212042" loading="lazy"></p><p>GSLB通过LBaaS获得，区域包含应用程序提供商的数据中心</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p>负载平衡器的另一个有趣实现形式是<strong>客户端负载平衡</strong>。客户端负载平衡适用于存在大量服务，并且每个服务都有许多实例的情况（例如Twitter中的负载平衡）。然而，我们的重点是传统的负载平衡器，因为大多数三层应用程序在其设计中采用了这些。</p></div><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>负载平衡器已经发展了很长时间，成为云服务中提供的一项服务，从其硬件形式的问世开始。</p><p>它们是任何企业级服务的关键组件。</p><p>托管服务器的水平可伸缩性总是需要一个良好的负载平衡层，能够提供负载平衡、会话维护、TLS卸载、服务发现等功能。</p>', 16);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("有状态负载均衡")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_26,
    _hoisted_27,
    _hoisted_28,
    _hoisted_29,
    _hoisted_30,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("使用哈希桶将请求映射到端服务器的无状态负载均衡器")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_31,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("请求R1被路由到Slides服务器")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_60,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("请求R2被路由到Documents服务器")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_61,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("第7层负载均衡器的 HAProxy 样本配置")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_66
  ]);
}
const _03LoadBalancersDetails_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "03LoadBalancersDetails.html.vue"]]);
export {
  _03LoadBalancersDetails_html as default
};
