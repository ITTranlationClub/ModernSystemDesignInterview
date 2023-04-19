import { _ as _export_sfc, Y as openBlock, Z as createElementBlock, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p><strong>本节目标:</strong> 了解容错, 掌握衡量标准并理解其重要性。</p><h2 id="什么是容错" tabindex="-1"><a class="header-anchor" href="#什么是容错" aria-hidden="true">#</a> 什么是容错？</h2><p>现实世界中的大型应用程序运行着数百台服务器和数据库，以满足数十亿用户的请求,也承担着存储重要数据的任务。这些应用程序需要一种<strong>保证数据安全并通过避免单点故障来避免重新计算的计算密集型任务</strong>的机制。(也就是容错)</p><p><strong>容错</strong>指即使一个或多个组件发生故障，系统也能持续执行的能力。相关组件可以是软件(常见的校验程序)或硬件(RAID0~9等)。构思一个百分百容错的系统实际上非常困难。</p><p>容错相关系统特性:</p><p>可用性侧重于 24*7 用户请求成功与否。</p><p>可靠性侧重于每个客户的请求与其响应结果。</p><h3 id="容错技术" tabindex="-1"><a class="header-anchor" href="#容错技术" aria-hidden="true">#</a> 容错技术</h3><p>故障一般发生在 硬件 或 软件 级别, 并最终对数据造成影响</p><p>从系统结构的角度, 可以有很多方法实现容错.</p><p>接下来我们讨论一些通用的 容错技术.</p><h4 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h4><p><strong>基于复制的容错</strong> 是应用最广泛的容错技术。使用这种技术，我们可以复制服务和数据,将故障节点替换为健康节点，将故障数据存储替换为其副本。大型服务可以在不影响最终客户的情况下透明地进行切换。</p><p>为单独的存储创建数据的多个副本也引入了新的技术挑战。</p><p><strong>技术难点</strong></p><p>当数据发生更新时，所有副本都需要定期更新以保持一致性。更新副本中的数据是一项具有挑战性的工作。当系统需要强一致性时，我们可以同步更新副本中的数据。但是，这会降低系统的可用性。</p><p>如果可以容忍最终一致性，我们可以异步更新副本中的数据，但这会导致读过时。</p><p>需要使用 CAP 定理 对系统进行灵活的设计</p><p><img src="https://cdn.jsdelivr.net/gh/gaoxiang15125/BlogImage@master/1676448246130.png" alt="" loading="lazy"></p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>笔者的话: 实际项目中, 对应 各种中间件的主从备份 日志备份等</p></div><h4 id="检查点" tabindex="-1"><a class="header-anchor" href="#检查点" aria-hidden="true">#</a> 检查点</h4><p><strong>检查点</strong>是一种将系统某个<strong>稳定的一致的点</strong> 保存在稳定存储中的技术。</p><p>检查点可以按照一定的规则在多个时间点执行。主要目的是保存给定点的计算状态。当系统发生故障时，我们可以从上一个检查点获取最后计算的数据并从重新开始工作。</p><p><strong>技术难点</strong></p><p>检查点也有我们在复制中遇到的同样问题。</p><p>当系统必须执行检查点时，需要确保系统处于一致状态，这意味着所有修改系统状态的进程都将停止。这种类型的检查点称为<strong>同步检查点</strong>。</p><p>另一方面，不一致状态下的检查点会导致数据不一致问题。让我们看下图，了解一致状态和不一致状态之间的区别：</p><p><img src="https://cdn.jsdelivr.net/gh/gaoxiang15125/BlogImage@master/1676457572311.png" alt="" loading="lazy"></p><p><strong>Consistent state一致状态</strong>：上图显示系统执行检查点时进程之间没有通信。所有进程在检查点之前和之后都在发送或接收消息。系统的这种状态称为一致状态。</p><p><strong>Inconsistent state不一致状态</strong>：上图还显示了当系统执行检查点时，进程通过消息进行通信。这表示不一致的状态，因为当我们得到一个先前保存的检查点时，<code>进程 i</code>有消息 <code>m1</code>，<code>进程j</code>将没有消息发送记录。</p>', 30);
const _hoisted_31 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_31);
}
const _05FaultTolerance_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "05FaultTolerance.html.vue"]]);
export {
  _05FaultTolerance_html as default
};