import { _ as _export_sfc, Y as openBlock, Z as createElementBlock, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/21-DistributedSearch/1676549049529.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>了解搜索系统的工作原理并了解我们设计分布式搜索系统的高级计划。</p><h2 id="为什么我们需要搜索系统" tabindex="-1"><a class="header-anchor" href="#为什么我们需要搜索系统" aria-hidden="true">#</a> 为什么我们需要搜索系统？</h2><p>如今，我们几乎在每个网站上都能看到搜索栏。我们使用该搜索栏从该网站上可用的大量内容中挑选出相关内容。搜索栏使我们能够快速找到我们正在寻找的内容。例如，教育网站上有很多课程。如果我们没有搜索功能，用户将不得不滚动浏览许多页面并阅读每门课程的名称才能找到他们正在寻找的课程。</p><p>让我们再举一个例子。YouTube 上上传和存储了数十亿个视频。想象一下，如果 YouTube 没有为我们提供搜索栏。我们如何从多年来发布在 YouTube 上的数百万个视频中找到特定的视频？浏览所有这些视频并找到我们需要的视频需要几个月的时间。用户发现仅仅通过四处滚动就很难找到他们正在寻找的东西。</p><p>搜索引擎是一个更大的例子。我们在 Internet 上拥有数十亿个网站。每个网站都有很多网页，每个网页上都有很多内容。内容如此之多，如果没有搜索引擎，互联网几乎毫无用处，用户最终会迷失在无关数据的海洋中。搜索引擎本质上是对大量可用数据的过滤器。它们让用户快速获取真正感兴趣的信息，而无需筛选过多不必要的网页。</p><p>每个搜索栏的背后都有一个搜索系统。</p><h2 id="什么是搜索系统" tabindex="-1"><a class="header-anchor" href="#什么是搜索系统" aria-hidden="true">#</a> 什么是搜索系统？</h2><p>搜索<strong>系统</strong>是一种从用户那里获取一些文本输入（搜索查询）并在几秒或更短时间内返回相关内容的系统。搜索系统包含三个主要组件，即：</p><ul><li>抓取内容并创建文档<strong>的</strong>爬虫。</li><li>一个<strong>索引器</strong>，它构建一个可搜索的索引。</li><li>搜索<strong>器，它通过在</strong><em>索引器</em>创建的<em>索引</em>上运行搜索查询来响应搜索查询。</li></ul><p><img src="' + _imports_0 + '" alt="" loading="lazy"></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>我们有单独的章节专门对 <code>爬虫</code> 组件进行讲解。在本章中，我们将重点关注索引。</p></div><h2 id="我们将如何设计分布式搜索系统" tabindex="-1"><a class="header-anchor" href="#我们将如何设计分布式搜索系统" aria-hidden="true">#</a> 我们将如何设计分布式搜索系统？</h2><p>我们将分布式搜索系统的设计分为五课：</p><ol><li><strong>需求：</strong> 在本课中，我们列出了分布式搜索系统的功能和非功能需求。我们还估算了我们系统的资源，例如服务器、存储和处理大量查询所需的带宽。</li><li><strong>索引：</strong> 本课通过示例为我们提供了有关索引过程的背景知识。在讨论了索引之后，我们还研究了分布式搜索系统的集中式架构。</li><li><strong>初始设计：</strong> 本课包括我们系统的高级设计、API 以及索引和搜索过程的细节。</li><li><strong>最终设计：</strong> 在本课中，我们将评估之前的设计并对其进行改造以使其更具可扩展性。</li><li><strong>评估：</strong> 本课解释了我们设计的分布式搜索系统如何满足其要求。</li></ol><p>让我们首先了解设计分布式搜索系统的要求。</p>', 15);
const _hoisted_16 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_16);
}
const _01SystemDesign_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "01SystemDesign.html.vue"]]);
export {
  _01SystemDesign_html as default
};
