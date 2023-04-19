import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230408185159.png";
const _imports_1 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230408185208.png";
const _imports_2 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230408185221.png";
const _imports_3 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230408185231.png";
const _imports_4 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230414155841.png";
const _imports_5 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230414155857.png";
const _imports_6 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230414155913.png";
const _imports_7 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230414155935.png";
const _imports_8 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230414155953.png";
const _imports_9 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230414160004.png";
const _imports_10 = "/model-system-design/img/11-ContentDeliveryNetwork(CDN)/QQ截图20230414160015.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>学习CDN中的推拉模型和动态内容缓存优化。</p><p>在本课程中，我们将深入探讨一些概念，如CDN模型和多层级CDN架构，这些概念在前几课程中已经提到。我们还将介绍一些新概念，包括动态内容缓存优化和各种在CDN中发现附近代理服务器的技术。</p><h2 id="cdn中的内容缓存策略" tabindex="-1"><a class="header-anchor" href="#cdn中的内容缓存策略" aria-hidden="true">#</a> CDN中的内容缓存策略</h2><p>识别需要缓存的内容对于提供最新和流行的Web内容非常重要。为确保及时更新，使用两种CDN分类来从源服务器获取内容。</p><h3 id="推送cdn" tabindex="-1"><a class="header-anchor" href="#推送cdn" aria-hidden="true">#</a> 推送CDN</h3><p>在推送CDN模型中，内容自动从源服务器发送到CDN代理服务器。内容交付到CDN代理服务器是内容提供商的责任。推送CDN适用于静态内容交付，其中源服务器决定使用CDN向用户交付哪些内容。根据内容的受欢迎程度，将内容推送到各个位置的代理服务器。如果内容变化很快，则推送模型可能难以跟上，并进行多余的内容推送。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230408185159" loading="lazy"></p>', 7);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "拉取cdn",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#拉取cdn",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 拉取CDN")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "当用户请求数据时，CDN从源服务器中提取数据。代理服务器在缓存中保存文件一定时间后，如果不再需要，则从缓存中删除文件以平衡容量和成本。",
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在拉取CDN模型中，CDN本身负责从原始服务器中拉取请求的内容并将其提供给用户。因此，这种CDN更适合提供动态内容。",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      alt: "QQ截图20230408185208",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<p>如上所述，推送CDN主要用于提供静态内容。由于静态内容长时间提供给广泛的用户，推送CDN方案可以维护更多的副本，从而提高可用性。另一方面，拉取CDN更适合频繁更改的内容和高流量负载。拉取CDN的主要优势之一是低存储消耗。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>注意：</strong> 大多数内容提供商使用拉取和推送CDN缓存方法来获得两者的好处。</p></div><h2 id="动态内容缓存优化" tabindex="-1"><a class="header-anchor" href="#动态内容缓存优化" aria-hidden="true">#</a> 动态内容缓存优化</h2><p>由于动态内容经常更改，因此最好对其进行最优化的缓存。本节涉及频繁更改内容的优化。</p><p>某些动态内容创建需要执行脚本，可在代理服务器上执行而不是在原始服务器上运行。可以使用各种参数生成动态数据，如果在代理服务器上执行则可以获得好处。例如，我们可以根据用户位置、某个位置的某个特定第三方API（例如，天气API）等生成动态内容。因此，最好在代理服务器上运行脚本，而不是在原始服务器上运行脚本。</p><p>为了减少原始服务器和代理服务器之间的通信以及代理服务器的存储要求，还可以使用压缩技术。例如，Cloudflare使用Railgun压缩动态内容。</p><p>另一种流行的动态数据压缩方法是**Edge Side Includes（ESI）**的标记语言。通常，Web页面的一小部分在一定时间内更改。这意味着在每个小更改时获取完整的Web页面包含了大量的冗余数据。为了解决这种性能惩罚，ESI指定了内容更改的位置，以便可以缓存Web页面的其余内容。它在CDN边缘服务器或客户端浏览器上组装动态内容。ESI尚未被万维网联盟（W3C）标准化，但许多CDN提供商使用它。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>注意</strong>: <strong>Dynamic Adaptive Streaming over HTTP (DASH)</strong> 使用包含不同分辨率视频的清单文件，让客户端可以 根据网络和终端节点的情况获取适当的视频。Netflix使用了一种带有URL字节范围的专有DASH版本，以进一步优化内容请求和传送。</p></div><h2 id="多层cdn架构" tabindex="-1"><a class="header-anchor" href="#多层cdn架构" aria-hidden="true">#</a> 多层CDN架构</h2><p>内容提供商通过CDN向大量客户端发送内容。同时向CDN代理服务器分配数据的任务对原始服务器来说是具有挑战性的且让原始服务器负担沉重。CDN采用树状结构来为原始服务器简化数据分配过程。边缘代理服务器拥有一些属于同一层次结构的对等服务器。这些服务器会从树状结构的父节点接收数据，父节点最终从原始服务器接收数据。该数据通过树状结构中不同路径从原始服务器复制到代理服务器中。</p><p>数据分发的树状结构允许我们通过向树添加更多服务器节点来为增加的用户扩展系统。它还降低了原始服务器的数据分配负担。CDN通常有一到两个代理服务器（高速缓存）的层级。以下插图展示了两层代理服务器：</p><p><img src="' + _imports_2 + '" alt="QQ截图20230408185221" loading="lazy"></p>', 12);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "当新代理服务器进入CDN的树时，它将请求控制核心，该控制核心维护CDN中所有代理服务器的信息，并提供带有配置数据的初 始内容。",
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("研究表明，许多内容具有长尾分布。这意味着，在某些时候，只有少数内容很受欢迎，然后我们就有了许多不太受欢迎的内容。在此情况下，可以使用"),
    /* @__PURE__ */ createBaseVNode("strong", null, "多层缓存"),
    /* @__PURE__ */ createTextVNode("来处理长尾内容。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_3,
      alt: "QQ截图20230408185231",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<div class="hint-container danger"><p class="hint-container-title">警告</p><p>问题：</p><p>如果子代或父代代理服务器出现故障，或者起源服务器出现故障会发生什么？</p><p>回答：</p><p>每个PoP都包含一组CDN代理服务器。当任何子代理服务器由于任何故障而停止工作时，DNS可以将客户端路由到不同的子级代理服务器。每个子代理服务器都知道许多上层父服务器，如果其中一个失败，它可以转到另一个父服务器。起源服务器是一组具有热备份的服务器，并且内容位于复制存储中。如果任何一个起源服务器出现故障，其他服务器会承担负载。</p></div><p>既然我们已经看到了如何将内容从起源服务器分发到CDN的所有代理服务器，我们还应该了解用户如何使用这些代理服务器更有效地获取数据。在本课程的后续部分，我们将讨论当客户端发出请求时如何选择最近的代理服务器以及如何定位CDN。</p><h2 id="查找最近的代理服务器以获取数据" tabindex="-1"><a class="header-anchor" href="#查找最近的代理服务器以获取数据" aria-hidden="true">#</a> 查找最近的代理服务器以获取数据</h2><p>从最近的代理服务器获取数据对用户来说非常重要，因为CDN旨在通过将数据靠近用户来减少用户感知的延迟。但是，问题仍然存在，即全球用户如何从最近的代理服务器请求数据。本节的目标是回答这个问题。</p><h3 id="影响代理服务器接近度的重要因素" tabindex="-1"><a class="header-anchor" href="#影响代理服务器接近度的重要因素" aria-hidden="true">#</a> 影响代理服务器接近度的重要因素</h3><p>有两个重要因素与查找最近的代理服务器到用户相关：</p><ul><li>用户和代理服务器之间的网络距离至关重要。这是以下两个因素的函数： <ul><li>第一个因素是网络路径的长度。</li><li>第二个因素是网络路径上的容量（带宽）限制。</li></ul></li></ul><p>具有最高容量（带宽）的最短网络路径是与所询问用户最近的代理服务器。这条路径可以帮助用户更快地下载内容。</p><ul><li>请求负载是指代理服务器在任何时刻处理的负载。如果一组代理服务器过载，则请求路由系统应将请求转发到负载较轻的位置。这个行动平衡代理服务器的负载，从而减少响应延迟。</li></ul><p>让我们看看可以用于将用户路由到最近代理服务器的技术。</p><h3 id="dns重定向" tabindex="-1"><a class="header-anchor" href="#dns重定向" aria-hidden="true">#</a> DNS重定向</h3><p>在典型的DNS解析中，我们使用DNS系统获取与人类可读名称对应的IP地址。然而，DNS也可以向客户端返回另一个URI，而不是IP地址。这种机制称为<strong>DNS重定向</strong>。</p><p>内容提供商可以使用DNS重定向将客户端发送到特定的CDN。例如，如果客户端尝试解析包含单词“video”的名称，权威DNS服务器会提供另一个URL（例如<em>c</em>d<em>n</em>.<em>x</em>y<em>z</em>.<em>c</em>o<em>m</em>）。客户端进行另一次DNS解析，并且CDN的权威DNS提供一个适当的CDN代理服务器的IP地址以获取所需内容。</p><p>根据用户位置的不同，DNS的响应可能会有所不同。让我们看下面的幻灯片以了解DNS重定向的工作原理：</p><p><img src="' + _imports_4 + '" alt="QQ截图20230414155841" loading="lazy"></p>', 15);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_5,
      alt: "QQ截图20230414155857",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_6,
      alt: "QQ截图20230414155913",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_7,
      alt: "QQ截图20230414155935",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_8,
      alt: "QQ截图20230414155953",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_9,
      alt: "QQ截图20230414160004",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_10,
      alt: "QQ截图20230414160015",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createStaticVNode('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>最近的代理服务器并不一定是地理位置最接近的服务器。它可能是，但不仅仅是地理位置重要。其他因素如网络距离、带宽和在该路线上的流量负载也很重要。</p></div><p>DNS重定向方法有两个步骤：</p><ol><li>在第一步中，它将客户端映射到适当的网络位置。</li><li>在第二步中，它将负载分配到该位置的代理服务器上，以平衡代理服务器之间的负载（有关此信息的更多细节，请参见DNS和负载均衡器构建块）。</li></ol><p>DNS重定向考虑到网络距离和请求负载这两个重要因素，并减少了向代理服务器的延迟。为了将客户从群集中的一个机器转移到另一个机器，第二步中的DNS回复具有较短的TTL，以便客户端在短时间内重复解析。在硬件故障和网络拥塞的情况下，DNS通过平衡负载、使用智能故障转移和在许多数据中心维护服务器来路由请求，并继续提供内容。这达到了良好的可靠性和性能。</p><p>由于代理服务器的负载随着时间的变化而变化，内容提供商需要在DNS中做出适当的变化，使DNS重定向生效。许多CDN提供商，如Akamai，在其路由系统中使用DNS重定向。</p><h3 id="anycast" tabindex="-1"><a class="header-anchor" href="#anycast" aria-hidden="true">#</a> Anycast</h3><p><strong>Anycast</strong>是一种路由方法，其中位于多个位置的所有边缘服务器共享相同的单一IP地址。它使用**边界网关协议（BGP）**根据网络流量将客户定位到不同的服务器。CDN供应商可以使用任播机制，使客户端被指向最近的代理服务器以获取内容。</p><h3 id="客户端多路复用" tabindex="-1"><a class="header-anchor" href="#客户端多路复用" aria-hidden="true">#</a> 客户端多路复用</h3><p><strong>客户端多路复用</strong>涉及向客户端发送候选服务器列表。然后，客户端从列表中选择一个服务器发送请求。这种方法效率低下，因为客户端缺乏选择最合适服务器的全局信息。这可能导致向已经负载过高的服务器发送请求，并体验到更高的访问延迟。</p><h3 id="http重定向" tabindex="-1"><a class="header-anchor" href="#http重定向" aria-hidden="true">#</a> HTTP重定向</h3><p><strong>HTTP重定向</strong>是所有方法中最简单的方法。通过这个方案，客户端从源服务器请求内容。源服务器通过HTTP协议响应，通过内容的URL重定向用户。</p><p>以下是Facebook提供的HTML代码片段示例。如第8行所示，用户将被重定向到CDN以下载Facebook的标志：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!––</span>  <span class="token attr-name">The</span> <span class="token attr-name">code</span> <span class="token attr-name">below</span> <span class="token attr-name">is</span> <span class="token attr-name">taken</span> <span class="token attr-name">from</span> <span class="token attr-name">Facebook.</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fb_content clearfix <span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_8esj _95k9 _8esf _8opv _8f3m _8ilg _8icx _8op_ _95ka<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_8esk<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_8esl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_8ice<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fb_logo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_8eso<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Facebook helps you connect and share with the people in your life.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 13);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在下一节中，我们将讨论CDN中内容一致性和代理服务器部署的不同细节。",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("将推送的内容发送给PoPs")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_8,
    _hoisted_9,
    _hoisted_10,
    _hoisted_11,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("从原服务器拉取的内容到CDN PoPs")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_12,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("CDN代理服务器之间的数据分布")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_24,
    _hoisted_25,
    _hoisted_26,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("许多类数据表现出长尾现象")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_27,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("原始服务器将内容分发给代理服务器")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_42,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("客户端请求最靠近本地DNS的代理服务器")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_43,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("DNS向请求的客户端提供CDN权威DNS服务器的URL")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_44,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("客户端请求最靠近CDN权威DNS的代理服务器")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_45,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("CDN权威DNS向请求的客户端提供最近的代理服务器的IP地址")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_46,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("客户请求特定的视频")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_47,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("代理服务器提供所请求的视频")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_48,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("包含重定向URL的HTML示例")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_61
  ]);
}
const _04InvestigationCDNPart1_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "04InvestigationCDNPart1.html.vue"]]);
export {
  _04InvestigationCDNPart1_html as default
};
