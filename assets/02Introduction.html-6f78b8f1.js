import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/18-Pub-sub/MotivationAndUseCasesOfPubSubSystem.png";
const _imports_1 = "/model-system-design/img/18-Pub-sub/TheBuildingBlocksWeWillUse.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>学习Pub-sub系统的用例，如何定义其需求，以及为其设计API。</p><p>Pub-sub消息传递提供了异步通信。让我们探讨一下在何种情况下拥有Pub-sub系统有利。</p><h2 id="pub-sub的用例" tabindex="-1"><a class="header-anchor" href="#pub-sub的用例" aria-hidden="true">#</a> Pub-sub的用例</h2><p>以下列出了一些Pub-sub的用例：</p><ul><li><strong>提高性能</strong>：Pub-sub系统实现了基于推送的分发，减轻了消息接收者定期检查新信息和更改的需要。它鼓励更快的响应时间并降低了传递延迟。</li><li><strong>处理摄取</strong>：Pub-sub有助于处理 <strong>日志摄取</strong> 。用户交互数据可以帮助我们了解用户行为的有用分析。我们可以将大量数据摄取到Pub-sub系统中，以至于可以将数据传递到任何分析系统中，以了解用户行为模式。此外，我们还可以记录完成用户请求时正在发生的事件的详细信息。像Meta这样的大型服务使用名为Scribe的Pub-sub系统，以了解确切哪些人需要哪些数据，并删除或归档已处理或不需要的数据。这样做对于管理大量数据是必要的。</li><li><strong>实时监控</strong>：一个应用程序或系统的原始或处理过的消息可以提供给多个应用程序以实时监控系统。</li><li><strong>复制数据</strong>：Pub-sub系统可以用于分发更改。例如，在领导者-追随者协议中，领导者通过Pub-sub系统将更改发送给其追随者。它允许追随者异步更新其数据。分布式缓存也可以通过异步接收修改来刷新自身。同样，像WhatsApp这样允许多个视图查看同一对话的应用程序，例如在手机和计算机浏览器上，可以使用Pub-sub优雅地工作，其中多个视图可以作为发布者或订阅者。</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>日志摄取是指将日志导入数据库以立即使用，例如监控。</p><p>像Facebook这样的大型应用程序产生大量数据和日志。</p><p>实时提取和处理日志使我们能够进行分析并在故障发生时采取快速行动。</p></div><p><img src="' + _imports_0 + '" alt="MotivationAndUseCasesOfPubSubSystem" loading="lazy"></p>', 7);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<div class="hint-container danger"><p class="hint-container-title">警告</p><h6 id="问题1" tabindex="-1"><a class="header-anchor" href="#问题1" aria-hidden="true">#</a> 问题1</h6><p>Pub-sub系统和队列之间有什么相似之处和不同之处？</p><p>答案</p><p>Pub-sub系统和队列类似，因为它们将生产者产生的信息传递给消费者。</p><p>不同之处在于，队列中只有一个消费者消费一条消息，而在Pub-sub系统中，同一条消息可能有多个消费者。</p><h6 id="问题2" tabindex="-1"><a class="header-anchor" href="#问题2" aria-hidden="true">#</a> 问题2</h6><p>在Pub-sub系统中，生产者和消费者如何解耦？</p><p>答案</p><p>生产者不知道最终谁会读取它们的信息。他们只是将其发送到系统中，并由消费者读取。</p><p>生产者不受慢速消费者、消费者数量或消费者故障的影响。我们可以独立地对它们进行扩展。</p></div><h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2><p>我们旨在设计一个满足以下要求的发布-订阅系统。</p><h3 id="功能需求" tabindex="-1"><a class="header-anchor" href="#功能需求" aria-hidden="true">#</a> 功能需求</h3><p>让我们明确发布-订阅系统的功能需求：</p><ul><li><strong>创建主题</strong>：生产者应该能够创建一个主题。</li><li><strong>写消息</strong>：生产者应该能够向主题写入消息。</li><li><strong>订阅</strong>：消费者应该能够订阅主题以接收消息。</li><li><strong>读取消息</strong>：消费者应该能够从主题中读取消息。</li><li><strong>指定保留时间</strong>：消费者应该能够指定消息在系统中保留的时间。</li><li><strong>删除消息</strong>：用户应该能够定义一定的保留时间，之后系统将自动从主题或系统中删除该消息。</li></ul><h3 id="非功能需求" tabindex="-1"><a class="header-anchor" href="#非功能需求" aria-hidden="true">#</a> 非功能需求</h3><p>我们在设计发布-订阅系统时需要考虑以下非功能需求：</p><ul><li><strong>可扩展性</strong>：系统应该能够扩展，以处理越来越多的主题以及越来越大的写入（由生产者）和读取（由消费者）负载。</li><li><strong>可用性</strong>：系统应该高度可用，以便生产者可以随时添加数据，消费者可以随时读取数据。</li><li><strong>持久性</strong>：系统应该具有持久性。从生产者接受的消息不应该丢失，并应该传递给预期的订阅者。</li><li><strong>容错性</strong>：我们的系统应该能够在发生故障时运行。</li><li><strong>并发性</strong>：系统应该能够处理同时进行读写的并发问题。</li></ul><h2 id="api设计" tabindex="-1"><a class="header-anchor" href="#api设计" aria-hidden="true">#</a> API设计</h2><p>我们将在下面的函数中排除一些参数，例如生产者或消费者的标识符。假设这些信息可以从底层连接上下文中获取。该问题的API设计如下：</p><p><strong>创建主题</strong></p><p>创建主题的API调用应如下所示：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>create(topic_ID, topic_name)\n</code></pre></div><p>如果成功创建主题，该函数将返回确认，否则返回错误。</p><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>topic_ID</code></td><td>它唯一地标识主题。</td></tr><tr><td><code>topic_name</code></td><td>它包含主题的名称。</td></tr></tbody></table><p><strong>写入消息</strong></p><p>写入发布-订阅系统的API调用应如下所示：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>\nwrite(topic_ID, message)\n</code></pre></div><p>API调用将把<code>message</code>写入ID为<code>topic_ID</code>的主题中。每个消息的最大大小为1 MB。如果成功将数据放置在系统中，该函数将返回确认，否则返回适当的错误。</p><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>message</code></td><td>要写入系统中的消息。</td></tr></tbody></table><p><strong>读取消息</strong></p><p>从系统中读取数据的API调用应如下所示：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>\nread(topic_ID)\n</code></pre></div><p>使用<code>topic_ID</code>查找主题，并将调用返回包含消息的对象给调用方。</p><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>topic_ID</code></td><td>它是针对将读取消息的主题的ID。</td></tr></tbody></table><p><strong>订阅主题</strong></p><p>从系统订阅主题的API调用应如下所示：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>\nsubscribe(topic_ID)\n</code></pre></div><p>该函数将消费者添加为订阅具有<code>topic_ID</code>的主题。</p><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>topic_ID</code></td><td>消费者将订阅的主题的ID。</td></tr></tbody></table><p><strong>从主题取消订阅</strong></p><p>从系统中取消订阅主题的API调用应如下所示：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>\nunsubscribe(topic_ID)\n</code></pre></div><p>该函数将从具有<code>topic_ID</code>的主题中删除消费者作为订阅者。</p><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>topic_ID</code></td><td>将从其中取消订阅的主题的ID。</td></tr></tbody></table><p><strong>删除主题</strong></p><p>从系统中删除主题的API调用应如下所示：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>\ndelete_topic(topic_ID)\n</code></pre></div><p>该函数根据<code>topic_ID</code>删除主题。</p><table><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>topic_ID</code></td><td>要删除的主题的ID。</td></tr></tbody></table><h2 id="我们将使用的构建块" tabindex="-1"><a class="header-anchor" href="#我们将使用的构建块" aria-hidden="true">#</a> 我们将使用的构建块</h2><p>发布-订阅的设计利用了许多在最初的章节中讨论的构建块。我们将考虑以下构建块的课程。</p><p><img src="' + _imports_1 + '" alt="我们将使用的构建块" loading="lazy"></p>', 44);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "数据库"),
        /* @__PURE__ */ createTextVNode("：我们将使用数据库来存储订阅详细信息。")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "分布式消息队列"),
        /* @__PURE__ */ createTextVNode("：我们将使用消息队列来存储生产者发送的消息。")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "键-值"),
        /* @__PURE__ */ createTextVNode("：我们将使用键-值存储来保存有关消费者的信息。")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在下一课中，我们将专注于设计发布-订阅系统。",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("Pub-sub系统的动机和用例")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_8,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("我们将使用的构建块")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_52,
    _hoisted_53
  ]);
}
const _02Introduction_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "02Introduction.html.vue"]]);
export {
  _02Introduction_html as default
};