import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/20-BlobStore/QQ截图20230409214155.png";
const _imports_1 = "/model-system-design/img/20-BlobStore/QQ截图20230409214209.png";
const _imports_2 = "/model-system-design/img/20-BlobStore/QQ截图20230409214408.png";
const _imports_3 = "/model-system-design/img/20-BlobStore/QQ截图20230409214441.png";
const _imports_4 = "/model-system-design/img/20-BlobStore/QQ截图20230409214519.png";
const _imports_5 = "/model-system-design/img/20-BlobStore/QQ截图20230409214958.png";
const _imports_6 = "/model-system-design/img/20-BlobStore/QQ截图20230409215037.png";
const _imports_7 = "/model-system-design/img/20-BlobStore/QQ截图20230409215112.png";
const _imports_8 = "/model-system-design/img/20-BlobStore/QQ截图20230409215138.png";
const _imports_9 = "/model-system-design/img/20-BlobStore/QQ截图20230409215205.png";
const _imports_10 = "/model-system-design/img/20-BlobStore/QQ截图20230409215254.png";
const _imports_11 = "/model-system-design/img/20-BlobStore/QQ截图20230409215318.png";
const _imports_12 = "/model-system-design/img/20-BlobStore/QQ截图20230409215401.png";
const _imports_13 = "/model-system-design/img/20-BlobStore/QQ截图20230409215426.png";
const _imports_14 = "/model-system-design/img/20-BlobStore/QQ截图20230409215450.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>了解关于Blob存储不同设计方面的详细信息。</p><h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言" aria-hidden="true">#</a> 引言</h2><p>即使我们在上一节中详细讨论了Blob存储系统及其主要组成部分的设计，仍有许多有趣的问题需要回答。例如，我们如何存储大的Blob？我们将它们存储在同一硬盘中，同一台机器中，还是将这些Blob分成块？应该制作多少个Blob的副本以确保可靠性和可用性？如何快速搜索和检索Blob？这些只是可能出现的一些问题。</p><p>本课程解决这些重要的设计问题。下表总结了本课程的目标。</p><table><thead><tr><th><strong>部分</strong></th><th><strong>目的</strong></th></tr></thead><tbody><tr><td>Blob元数据</td><td>这是为了确保Blob的高效存储和检索而维护的元数据。</td></tr><tr><td>分区</td><td>这决定了Blob如何在不同的数据节点之间进行分区。</td></tr><tr><td>Blob索引</td><td>这向我们展示了如何高效地搜索Blob。</td></tr><tr><td>分页</td><td>这教我们如何设计检索有限数量的Blob的方法，以确保提高可读性和加载时间。</td></tr><tr><td>复制</td><td>这教我们如何复制Blob，并告诉我们应该维护多少份副本以提高可用性。</td></tr><tr><td>垃圾回收</td><td>这教我们如何删除Blob，而不牺牲性能。</td></tr><tr><td>流式传输</td><td>这教我们如何以分块的方式流式传输大文件，以便为用户提供互动性。</td></tr><tr><td>缓存</td><td>这向我们展示了如何提高响应时间和吞吐量。</td></tr></tbody></table><p>在回答上述问题之前，让我们看看如何为用户创建一些抽象层，以隐藏Blob存储的内部复杂性。这些抽象层帮助我们做出与设计相关的决策。</p><p>有三个抽象层：</p><ol><li><strong>用户账户</strong>：用户通过其<code>account_ID</code>在此层上唯一标识。用户上传的Blob存储在其容器中。</li><li><strong>容器</strong>：每个用户都有一组容器，这些容器都通过一个<code>container_ID</code>唯一标识。这些容器包含Blob。</li><li><strong>Blob</strong>：此层包含有关Blob的信息，这些信息通过其<code>blob_ID</code>唯一标识。此层维护的关于Blob元数据的信息对于实现系统的可用性和可靠性至关重要。</li></ol><p>我们可以基于这些层次制定路由、存储和分片决策。下表总结了这些层次。</p><table><thead><tr><th><strong>级别</strong></th><th><strong>唯一标识符</strong></th><th><strong>信息</strong></th><th><strong>分片方式</strong></th><th><strong>映射</strong></th></tr></thead><tbody><tr><td>用户的Blob存储账户层次</td><td><code>account_ID</code></td><td><code>container_ID</code>值的列表</td><td><code>account_ID</code></td><td>账户-&gt;容器列表</td></tr><tr><td>容器层次</td><td><code>container_ID</code></td><td><code>blob_ID</code>值的列表</td><td><code>container_ID</code></td><td>容器-&gt;Blob列表</td></tr><tr><td>Blob层次</td><td><code>blob_ID</code></td><td>{块的列表，块信息：数据节点ID ..}</td><td><code>blob_ID</code></td><td>Blob-&gt;块的列表</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>我们使用<strong>唯一ID生成器</strong>为用户帐户、容器和Blob生成唯一的ID。</p></div><p>除了存储实际的Blob数据之外，我们还需要维护一些元数据来管理Blob存储。让我们看看那些数据。</p><h2 id="blob元数据" tabindex="-1"><a class="header-anchor" href="#blob元数据" aria-hidden="true">#</a> Blob元数据</h2><p>当用户上传Blob时，它会被分成小块（块：写入和读取的最小数据单元），以便支持无法在单个连续位置、单个数据节点或与该数据节点相关联的磁盘块中存储的大文件的存储。单个Blob的块随后存储在具有足够存储空间来存储这些块的不同数据节点上。有数十亿个Blob保存在存储中。主节点必须存储有关Blob块及其存储位置的所有信息，以便在读取时检索它们。主节点为每个块分配一个ID。</p><p>有关Blob的信息包括每个块的ID以及分配给每个块的数据节点的名称。我们将Blob分成大小相等的块。为了使它们能够处理数据节点故障，我们将块复制。因此，我们还为每个块存储副本ID。我们可以访问与每个Blob相关的所有这些信息。</p><p>假设我们有一个128 MB的Blob，并将其分成两个大小为64 MB的块。该Blob的元数据如下表所示：</p><table><thead><tr><th>块</th><th>数据节点ID</th><th>副本1 ID</th><th>副本2 ID</th><th>副本3 ID</th></tr></thead><tbody><tr><td>1</td><td>d1b1</td><td>r1b1</td><td>r2b1</td><td>r3b1</td></tr><tr><td>2</td><td>d1b2</td><td>r1b2</td><td>r2b2</td><td>r3b2</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为了避免复杂性，块存储中所有Blob的块大小都是固定的。块大小取决于Blob存储的性能要求。我们希望使用较大的块大小来维护主节点上的小元数据，因为较大的块大小会导致更高的磁盘延迟，从而导致较慢的性能。有趣的是，磁盘在读取和写入一定范围内的数据时的延迟几乎相同。例如，一个磁盘在写入位于4-8范围内的MB时，可以具有类似的延迟。此外，它们可以在写入9-20 MB范围内的数据时具有类似的延迟。这是由于磁盘上的连续扇区以及由其操作系统的磁盘和服务器进行的缓存造成的。</p></div><p>我们为每个块维护三个副本。在编写Blob时，主节点使用其自由空间管理系统标识数据和副本节点。除了处理数据节点故障之外，还使用副本节点来处理读/写请求，以便不会过载主节点。</p><p>在上面的示例中，Blob大小是块大小的倍数，因此主节点可以确定要读取每个块的字节数。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>问题：如果Blob大小不是我们配置的块大小的倍数，主节点如何知道读取最后一个块的字节数？\n答案：如果Blob大小不是块大小的倍数，则最后一个块将不是完整块。主节点还保留每个Blob的大小，以确定读取最后一个块的字节数。\n</code></pre></div><h2 id="分区数据" tabindex="-1"><a class="header-anchor" href="#分区数据" aria-hidden="true">#</a> 分区数据</h2><p>我们已经讨论了块存储中的不同抽象级别--帐户层，容器层和Blob层。我们存储和读取了数十亿个Blob。我们有大量数据节点来存储这些Blob。如果我们要在所有数据节点中查找包含特定Blob的数据节点，这将是一个非常缓慢的过程。相反，我们可以将数据节点分组，称每个组为<strong>分区</strong>。我们维护一个分区映射表，其中包含每个分区中所有Blob的列表。如果我们独立于它们的容器ID和帐户ID将Blob分布在不同的分区，就会遇到问题，如下图所示：</p><p><img src="' + _imports_0 + '" alt="" loading="lazy"></p>', 24);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createStaticVNode('<p>基于blob ID的分区会导致一些问题。例如，特定容器或账户下的blob可能分布在不同的分区中，这会在读取或列出与特定账户或特定容器相关联的blob时增加额外的负载。</p><p>为了解决上述问题，我们可以基于blob的完整路径对blob进行分区。这里的分区键是账户ID、容器ID和blob ID的组合。这有助于将单个用户的blob放置在同一分区服务器上，从而增强性能。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>分区映射</strong>由主节点维护，并且这些映射存储在分布式元数据存储中。</p></div><h2 id="blob索引" tabindex="-1"><a class="header-anchor" href="#blob索引" aria-hidden="true">#</a> Blob索引</h2><p>随着上传到存储中的blob数量增加，找到特定的blob变得更加困难和耗时。<strong>Blob索引</strong>解决了blob管理和查询问题。</p><p>为了填充blob索引，我们在上传blob时定义了键值标签属性。我们使用多个标签，例如容器名称、blob名称、上传日期和时间以及一些其他类别（如图像或视频blob等）。</p><p>如下图所示，blob索引引擎读取新标签，对其进行索引，并将其公开到可搜索的blob索引中。</p><p><img src="' + _imports_2 + '" alt="" loading="lazy"></p>', 8);
const _hoisted_34 = /* @__PURE__ */ createStaticVNode('<p>我们可以使用索引对blob进行分类和排序。让我们看看如何在分页中使用索引。</p><h2 id="分页列表" tabindex="-1"><a class="header-anchor" href="#分页列表" aria-hidden="true">#</a> 分页列表</h2><p><strong>列表</strong>是返回与用户输入的前缀相匹配的blob列表。前缀是字符或字符串，返回名称以该特定字符或字符串开头的blob。</p><p>用户可能想要列出与特定账户关联的所有blob、特定容器内存在的所有blob，或者基于前缀列出一些公共blob。问题在于这个列表可能非常长。我们不能一次性将整个列表返回给用户。因此，我们必须分批返回blob列表。</p><p>假设用户想要列出与其帐户关联的blob列表，并且与该帐户关联的总共有2000个blob。一次性搜索、返回和加载太多的blob会影响性能。这就是分页变得重要的地方。我们可以返回前五个结果并给用户一个“下一页”按钮。每次点击“下一页”按钮，它都会返回下面的五个结果。这称为<strong>分页</strong>。</p><p><img src="' + _imports_3 + '" alt="" loading="lazy"></p><p>应用程序所有者根据以下因素设置要返回的结果数量：</p><ul><li>他们认为用户等待查询响应的时间有多长。</li><li>在该时间内他们能够返回多少结果。我们显示了每页返回五个结果，这是一个非常小的数字。我们仅使用此数字进行可视化目的。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>问题：我们如何决定首先返回哪五个blob作为总共2000个blob中的第一批返回结果？\n\n答案：在此，我们利用索引来对blob进行排序和分类。我们应该在存储blob时先进行这些操作。否则，在返回列表时排序会变得很困难。可能会有数百万或数十亿的blob，当收到列表请求时，我们无法快速对其进行排序。思考题\n</code></pre></div><p>对于分页，我们需要一个<strong>续订标记</strong>作为接下来返回的列表部分的起点。续订标记是一个包含在查询响应中的字符串标记，如果查询结果的总数超过我们一次最多可以返回的结果数，则会包含该标记。因此，它充当指针，允许重新查询从上一次停止的地方继续。</p><h2 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h2><p><strong>复制</strong>在两个层面上进行以支持可用性和强一致性。为了保持数据强一致，我们在写操作后立即在用于提供读请求的节点之间同步复制数据。为了实现可用性，我们可以在写操作后将数据复制到不同的区域或数据中心。在数据还没有被复制到那里之前，我们不会从其他数据中心或区域提供读请求。这是复制的两个层面：</p><ul><li>在存储集群内部的<strong>同步复制</strong>。</li><li>跨数据中心和区域的<strong>异步复制</strong>。</li></ul><h3 id="存储集群内部的同步复制" tabindex="-1"><a class="header-anchor" href="#存储集群内部的同步复制" aria-hidden="true">#</a> 存储集群内部的同步复制</h3><p>一个存储集群由<em>N</em>个存储节点架构组成，每个节点配置为带有冗余网络和电源的故障域。</p><p>我们确保每个写入存储集群的数据在该存储集群内部保持持久。主节点在不同故障域的节点上维护足够的数据副本，以确保在发生磁盘、节点或机架故障时仍能保证集群内部的数据持久性。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这种集群内部的复制是客户端写请求的关键路径上完成的。</p></div><p>一旦一个写操作在存储集群内部同步复制完成，便可以将成功的结果返回给客户端。这允许进行<strong>快速写</strong>，因为：</p><ul><li>我们在存储集群内部复制数据，所有节点都在附近，因此可以减少延迟。</li><li>我们使用内联数据复制，使用冗余的网络路径并行地将数据复制到所有副本中。</li></ul><p>这种复制技术有助于在存储集群内部维护数据的一致性和可用性。</p><h3 id="跨数据中心和区域的异步复制" tabindex="-1"><a class="header-anchor" href="#跨数据中心和区域的异步复制" aria-hidden="true">#</a> 跨数据中心和区域的异步复制</h3><p>Blob存储的数据中心分布在不同的区域，例如亚太地区、欧洲、美国东部等。在每个区域中，我们有超过一个位于不同位置的数据中心，所以如果一个数据中心关闭，我们有其他数据中心在同一区域内接替并为用户请求提供服务。每个区域内至少有三个数据中心，每个中心之间相隔数英里，以保护免受局部事件如火灾、洪水等的影响。</p><p>一个Blob的副本数量称为<strong>复制因子</strong>。大多数情况下，复制因子为三就足够了。</p><p><img src="' + _imports_4 + '" alt="QQ截图20230409214519" loading="lazy"></p>', 24);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们将一个Blob的四个副本。其中一个是在主区域的数据中心内的本地副本，以保护服务器机架和驱动器故障。对于这个Blob的第二个副本，我们将它放在同一区域内的另一个数据中心内，以防止数据中心发生火灾或洪水。第三个副本放在不同区域的数据中心以防止区域性灾害。",
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "删除blob时的垃圾回收",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#删除blob时的垃圾回收",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 删除Blob时的垃圾回收")
  ],
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "由于Blob块放置在多个数据节点上，从许多不同节点中删除需要时间，持有客户端直到完成不是一个可行的选项。由于实时延迟优化，我们实际上不会在删除请求中从Blob存储中删除Blob。相反，我们只是在元数据中将Blob标记为“DELETED”，使其对用户无法访问。",
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("在响应用户的删除请求后，稍后删除Blob。将Blob标记为已删除，但暂时不实际删除它，会导致内部元数据不一致，意味着应该空闲的存储空间仍在被使用。这些元数据不一致对用户没有影响。例如，对于在元数据中标记为已删除的Blob，我们仍然有该Blob块的条目。数据节点仍然保留着该Blob块。因此，我们有一个名为"),
    /* @__PURE__ */ createBaseVNode("strong", null, "垃圾回收器"),
    /* @__PURE__ */ createTextVNode("的服务，以后会清理元数据不一致。删除Blob会导致与该Blob相关的块被释放。但是，用户删除Blob请求和Blob存储中相应的空闲空间增加之间可能存在显着的时间延迟。我们可以忍受这种显着的时间延迟，因为作为回报，我们为用户的删除Blob请求提供了实时快速响应的好处。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "整个删除过程如下图所示：",
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_5,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_6,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_7,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_8,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_9,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_10,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_11,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_12,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_13,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_14,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_73 = /* @__PURE__ */ createStaticVNode('<h2 id="流式传输文件" tabindex="-1"><a class="header-anchor" href="#流式传输文件" aria-hidden="true">#</a> 流式传输文件</h2><p>要流式传输文件，我们需要定义每次允许读取多少字节。假设我们每次读取<em>X</em>个字节。第一次从第0个字节（0到<em>X</em>−1）开始读取第一个<em>X</em>个字节，下一次从下一个<em>X</em>个字节（<em>X</em>到2<em>X</em>−1）开始读取。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>问题：我们如何知道我们首先读取了哪些字节，以及下一个要读取哪些字节？\n答案：我们可以使用一个**偏移值**来跟踪我们需要从哪个字节再次开始阅读。\n</code></pre></div><h2 id="缓存blob存储" tabindex="-1"><a class="header-anchor" href="#缓存blob存储" aria-hidden="true">#</a> 缓存Blob存储</h2><p>缓存可以在多个级别进行。以下是一些示例：</p><ul><li><p>在首次读取Blob块的元数据时，在客户端端缓存Blob块的元数据。客户端可以直接访问数据节点，而无需再次与主节点通信以读取相同的Blob块。</p></li><li><p>在<strong>前端服务器</strong>上，我们缓存分区映射并使用它确定要将每个请求转发到哪个分区服务器。</p></li><li><p>在主节点上缓存经常访问的块，这有助于我们高效地流式传输大型对象。它还可以减少磁盘I/O。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Blob存储的缓存通常使用<strong>CDN</strong>。Azure Blob存储服务将公开访问的Blob缓存在Azure内容传递网络中，直到该Blob的TTL（生存时间）过期。源服务器定义TTL，CDN根据来自源服务器的HTTP响应中的<code>Cache-Control</code>头确定TTL。</p></div><p>我们已经涵盖了在设计Blob存储时应考虑的设计因素。现在，我们将评估我们所设计的内容。</p>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("数十亿个Blob")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_25,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("基于Blob ID的范围分区")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_26,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("索引和搜索blob")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_34,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("这些是区域和可用区。深黄色是主数据，浅黄色是副本")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_58,
    _hoisted_59,
    _hoisted_60,
    _hoisted_61,
    _hoisted_62,
    _hoisted_63,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("三个Blob被上传到Blob存储。磁盘1持有所有三个Blob")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_64,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("用户发出用于删除ID为b903的Blob的请求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_65,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("Delete Blob API查看Blob表以删除b903")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_66,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("Blob表中的Blob b903的条目已删除，因此不再可以访问该Blob。垃圾回收器收集该Blob条目")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_67,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("标记Blob已删除后，会向Delete Blob API发送确认")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_68,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("Delete Blob API迅速响应用户，表示该Blob已被删除")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_69,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("用户请求已被快速处理，但存在元数据不一致。稍后，垃圾回收器会删除这些不一致")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_70,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("垃圾回收器从磁盘1中删除了b903的写入字节数")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_71,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("正在磁盘上运行的数据节点处理更新了元数据节点上的最新Blob列表")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_72,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("元数据节点更新了磁盘信息表。不一致已被消除")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_73
  ]);
}
const _04DesignConsiderations_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "04DesignConsiderations.html.vue"]]);
export {
  _04DesignConsiderations_html as default
};