import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/20-BlobStore/QQ截图20230409211553.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>介绍 Blob 存储并准备进行设计。</p><h2 id="什么是-blob-存储" tabindex="-1"><a class="header-anchor" href="#什么是-blob-存储" aria-hidden="true">#</a> 什么是 Blob 存储？</h2><p><strong>Blob 存储</strong>是用于非结构化数据的存储解决方案。我们可以将照片、音频、视频、二进制可执行代码或其他多媒体项目存储在 Blob 存储中。每种类型的数据都以 <strong>Blob</strong> 的形式存储。它遵循扁平数据组织模式，没有层次结构，即目录、子目录等等。</p><p>大多数情况下，Blob 存储被带有特定业务需求的应用程序使用，称为 <strong>写入一次，多次读取(WORM)</strong>，即数据只能被写入一次，而且任何人都无法更改它。就像在 Microsoft Azure 中一样，Blob 只创建一次，但可以多次读取。此外，这些 Blob 不能在指定的时间间隔内删除，也不能被修改以保护重要数据。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230409211553" loading="lazy"></p>', 5);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>并非所有应用程序都需要此 WORM 要求。但是，我们假设已写入的 Blob 无法修改。如果需要，可以上传 Blob 的新版本，而不是修改它。</p></div><h2 id="为什么要使用-blob-存储" tabindex="-1"><a class="header-anchor" href="#为什么要使用-blob-存储" aria-hidden="true">#</a> 为什么要使用 Blob 存储？</h2><p>Blob 存储是许多数据密集型应用程序的重要组成部分，例如 YouTube、Netflix、Facebook 等等。下表显示了某些最着名应用程序使用的 Blob 存储。这些应用程序每天生成巨量的非结构化数据。它们需要一种易于扩展、可靠、高度可用的存储解决方案，以便存储大型媒体文件。由于数据量不断增加，这些应用程序需要存储无限数量的 Blob。据估计，YouTube 每天需要超过 1 PB 的额外存储。在像 YouTube 这样的系统中，一个视频以多个分辨率存储。此外，所有分辨率的视频都在不同的数据中心和地区之间多次复制以满足可用性要求。这就是为什么每个视频所需的总存储量不等于上传视频的大小。</p><table><thead><tr><th><strong>系统</strong></th><th><strong>Blob 存储</strong></th></tr></thead><tbody><tr><td>Netflix</td><td>S3</td></tr><tr><td>YouTube</td><td>Google Cloud Storage</td></tr><tr><td>Facebook</td><td>Tectonic</td></tr></tbody></table><h2 id="如何设计-blob-存储系统" tabindex="-1"><a class="header-anchor" href="#如何设计-blob-存储系统" aria-hidden="true">#</a> 如何设计 Blob 存储系统？</h2><p>我们将 Blob 存储的设计分为五个课程和一个测验。</p><ol><li><strong>需求：</strong> 在此课程中，我们确定 Blob 存储的功能和非功能需求。我们还估计了 Blob 存储系统所需的资源。</li><li><strong>设计：</strong> 在此课程中，我们提供高级设计、API 设计和 Blob 存储的详细设计，同时解释所有组件和工作流程的详细信息。</li><li><strong>设计考虑因素：</strong> 在此课程中，我们讨论了设计的一些重要方面。例如，我们了解数据库模式、分区策略、Blob 索引、分页和复制等。</li><li><strong>评估：</strong> 在此课程中，我们根据需求评估我们的 Blob 存储。</li><li><strong>测验：</strong> 在此课程中，我们评估 Blob 存储设计的理解程度。</li></ol><p>让我们从 Blob 存储系统的需求开始。</p>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("Blob 存储和流式传输大型的非结构化文件，如音频、视频、图片和文档")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_6
  ]);
}
const _01SystemDesign_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01SystemDesign.html.vue"]]);
export {
  _01SystemDesign_html as default
};