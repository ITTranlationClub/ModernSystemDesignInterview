import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, $ as createBaseVNode, a1 as createTextVNode, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/20-BlobStore/QQ截图20230409213717.png";
const _imports_1 = "/model-system-design/img/20-BlobStore/QQ截图20230409213826.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "学习如何将某些要求纳入blob存储库的设计中。",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "高级设计",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#高级设计",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 高级设计")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "让我们识别并连接blob存储系统的组件。在高层次上，组件是客户端、前端服务器和存储磁盘。",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<p>客户端的请求发送至前端服务器进行处理。前端服务器将客户端的blob存储到连接到它们的存储磁盘中。</p><h2 id="api设计" tabindex="-1"><a class="header-anchor" href="#api设计" aria-hidden="true">#</a> API设计</h2><p>让我们研究blob存储库的API设计。以下所有函数只能由注册和验证用户执行。为简洁起见，我们不包括用户的注册和验证等功能。</p><p><strong>创建容器</strong></p><p><code>createContainer</code>操作在生成此请求的登录帐户下创建一个新容器。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>createContainer(containerName)\n</code></pre></div><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>containerName</code></td><td>这是容器的名称。在存储帐户中，应该是唯一的。</td></tr></tbody></table><p><strong>上传blob</strong></p><p>客户端的数据以字节形式存储在blob存储库中。可以使用以下代码将数据放入容器中。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>putBlob(containerPath, blobName, data)\n</code></pre></div><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>containerPath</code></td><td>这是容器中上传blob的路径。它由<code>accountID</code>和<code>containerID</code>组成。</td></tr><tr><td><code>blobName</code></td><td>这是blob的名称。在容器中应该是唯一的，否则我们的系统将为稍后上传的blob分配一个版本号。</td></tr><tr><td><code>data</code></td><td>这是用户要上传到blob存储库的文件。</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果数据大小非常大，我们可能会使用多阶段流式调用来实现。这个API只是一种逻辑方式来说明需求。</p></div><p><strong>下载blob</strong></p><p>blob通过其唯一名称或ID进行标识。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>getBlob(blobPath)\n</code></pre></div><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>blobPath</code></td><td>这是数据或文件的完全限定路径，包括它的唯一ID。</td></tr></tbody></table><p><strong>删除blob</strong></p><p><code>deleteBlob</code>操作将指定的blob标记为删除。实际blob在垃圾回收期间被删除。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>deleteBlob(blobPath)\n</code></pre></div><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>blobPath</code></td><td>这是用户要删除的blob路径。</td></tr></tbody></table><p><strong>列出blobs</strong></p><p><code>listBlobs</code>操作返回指定容器或路径下的blob列表。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>listBlobs(containerPath)\n</code></pre></div><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>containerPath</code></td><td>这是用户要获取blob列表的容器路径。</td></tr></tbody></table><p><strong>删除容器</strong></p><p><code>deleteContainer</code>操作将指定的容器标记为删除。容器中的任何blob稍后在垃圾回收期间删除。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>deleteContainer(containerPath)\n</code></pre></div><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>containerPath</code></td><td>这是用户要删除容器的路径。</td></tr></tbody></table><p><strong>列出容器</strong></p><p><code>listContainers</code>操作返回指定用户blob存储库帐户下的容器列表。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>listContainers(accountID)\n</code></pre></div><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>accountID</code></td><td>这是想要列出容器的用户的ID。</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>用于检索blob的API提供包含大小、版本号、访问权限、名称等元数据。</p></div><h2 id="详细设计" tabindex="-1"><a class="header-anchor" href="#详细设计" aria-hidden="true">#</a> 详细设计</h2><p>我们从确定完成blob存储设计所需的关键组件开始这一部分。然后，我们将看看这些组件如何连接以满足我们的功能要求。</p><h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3><p>以下是我们在blob存储设计中使用的组件列表:</p><ul><li><p><strong>客户端：</strong> 这是执行指定API函数的用户或程序。</p></li><li><p><strong>速率限制器：</strong> 速率限制器根据用户的订阅或限制来限制请求数量，或限制相同IP地址在同一时间的请求数量。它不允许用户超过预定义的限制。</p></li><li><p><strong>负载均衡器：</strong> 负载均衡器将入站网络流量在一组服务器中分配。还可以根据用户的位置、同一区域内不同数据中心或同一数据中心内不同服务器将请求重定向到不同区域。<strong>DNS</strong>负载平衡可用于根据用户的位置在不同区域之间重新路由请求。</p></li><li><p><strong>前端服务器：</strong> 前端服务器会将用户添加或删除数据的请求转发到相应的存储服务器。</p></li><li><p><strong>数据节点：</strong> 数据节点保存实际的blob数据。也可能它们包含的blob数据的一部分。blob被分成称为<strong>块</strong>的小固定大小片段。数据节点可以容纳blob的所有块或至少其中一些块。</p></li><li><p><strong>主节点：</strong> 主节点是管理所有数据节点的核心组件。它存储有关存储路径和blob的访问权限的信息。访问权限有两种类型：公共和私有。私有访问权限表示只有包含该blob的帐户才能访问该blob。公共访问权限表示任何人都可以访问该blob。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>群集</strong>中的每个数据节点定期向主节点发送一个心跳和块报告。 <strong>心跳</strong>的存在表示数据节点正在运行。<strong>块报告</strong>列出数据节点上的所有块。如果数据节点未能发送心跳，则主节点认为该节点已死亡，然后在副本节点上处理用户请求。当死亡的数据节点恢复时，主节点维护待处理操作的日志，应在该节点上重播。</p></div></li><li><p><strong>元数据存储：</strong> 元数据存储是一个分布式数据库，由主节点用于存储所有元数据。元数据包括帐户元数据、容器元数据和blob元数据。</p><ul><li><strong>账户元数据：</strong> 包含每个用户的帐户信息和每个帐户持有的容器。</li><li><strong>容器元数据：</strong> 包括每个容器中blob的列表。</li><li><strong>Blob元数据：</strong> 包括每个blob存储的位置。Blob元数据在下一课中详细讨论。</li></ul></li><li><p><strong>监视服务：</strong> 监视服务监视数据节点和主节点。它会在需要人为干预的磁盘故障时通知管理员。它还获取有关磁盘上剩余的总可用空间的信息，以便向管理员发出警报并添加更多磁盘。</p></li><li><p><strong>管理员：</strong> 管理员负责处理来自监视服务的通知，并进行常规的整个服务检查，以确保可靠性。</p></li></ul><p>这些组件相互连接的架构如下图所示：</p><p><img src="' + _imports_1 + '" alt="QQ截图20230409213826" loading="lazy"></p>', 40);
const _hoisted_45 = /* @__PURE__ */ createStaticVNode('<h3 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程" aria-hidden="true">#</a> 工作流程</h3><p>我们描述了基于Blob存储可以执行的基本操作所构建的工作流程。我们假设用户已经成功登录并且已经创建了一个容器。每个用户和容器都被分配了一个唯一的ID。用户在特定的容器中执行以下操作：</p><h4 id="写入blob" tabindex="-1"><a class="header-anchor" href="#写入blob" aria-hidden="true">#</a> 写入Blob</h4><ol><li>客户端生成上传Blob请求。如果客户端的请求成功通过速率限制器，则负载均衡器将客户端的请求转发到其中一个前端服务器。前端服务器然后向主节点请求应该将Blob存储在哪些数据节点上。</li><li>主节点使用唯一ID生成器系统为Blob分配一个唯一ID。它然后将大型Blob分成较小的固定大小的块，并将每个块分配到一个数据节点上，该块最终将存储在该节点上。主节点使用空闲空间管理系统确定数据节点上可用的存储空间的数量。</li><li>在确定了块到数据节点的映射之后，前端服务器将块写入分配的数据节点。</li><li>我们为了冗余目的而复制每个块。所有有关块复制的选择都由主节点进行。因此，主节点还分配用于存储副本的存储和数据节点。</li><li>主节点将Blob元数据存储在元数据存储中。我们将在下一课中详细讨论Blob的元数据架构。</li><li>写入Blob后，完全限定的Blob路径将返回给客户端。该路径由用户ID、用户添加Blob的容器ID、Blob ID和Blob的访问级别组成。</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>问题：如果用户在同一容器中同时写入相同名称的两个Blob，主节点会执行什么操作？\n答案：主节点对这些操作进行序列化，并为稍后上传的Blob分配版本号。\n</code></pre></div><h4 id="读取blob" tabindex="-1"><a class="header-anchor" href="#读取blob" aria-hidden="true">#</a> 读取Blob</h4><ol><li>当读取Blob的请求到达前端服务器时，它会请求主节点获取该Blob的元数据。</li><li>主节点首先检查该Blob是否为私有Blob或公共Blob，基于Blob的路径以及我们是否有权传输该Blob。</li><li>授权Blob后，主节点查找该Blob在元数据中的块，并查看它们到数据节点的映射。主节点将块及其映射（数据节点）返回给客户端。</li><li>客户端接着从数据节点中读取块数据。</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>读取Blob所需的元数据信息已在客户端机器上缓存，因此下一次客户端要读取相同的Blob时，我们就不必负担主节点了。此外，客户端的读取操作将在下一次更快。</p></div><div class="language-text" data-ext="text"><pre class="language-text"><code>问题：假设由于即将发生的磁盘故障，主节点将数据从一个数据节点移动到另一个数据节点。如果用户使用缓存的元数据访问数据，则用户现在将拥有过时的信息。我们如何处理这种情况？\n答案：在这种情况下，客户端会调用失败。客户端然后刷新缓存并从主节点获取新的元数据信息。\n</code></pre></div><h4 id="删除blob" tabindex="-1"><a class="header-anchor" href="#删除blob" aria-hidden="true">#</a> 删除Blob</h4><p>在接收到删除Blob请求后，主节点将该Blob标记为已删除，并稍后使用垃圾回收器释放空间。我们将在下一课中了解更多有关垃圾回收器的内容。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>问题：\n主节点是否可以被视为单点故障？如果是，则我们如何应对这个问题？\n答案：\n是的，因为主节点是Blob存储的中心点，也是单点故障。因此，我们必须在主节点的位置上放置备份或阴影服务器。\n我们使用的技术被称为检查点，这意味着我们在不同时间间隔内对数据进行快照。快照捕捉了运行主节点的状态、数据、硬件配置以及主节点与数据节点之间传递的消息。它将操作日志维护在外部存储区域或快照库中。如果主节点故障，自动系统或管理员使用快照从它失败的状态重新启动主节点并重新播放操作日志。\n</code></pre></div><p>在下一课中，我们将讨论Blob存储的设计考虑因素。</p>', 13);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("blob存储的高级设计")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_5,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("blob存储的详细设计")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_45
  ]);
}
const _03Design_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "03Design.html.vue"]]);
export {
  _03Design_html as default
};