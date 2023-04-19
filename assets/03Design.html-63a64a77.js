import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/23-DistributedTaskScheduler/QQ截图20230410141938.png";
const _imports_1 = "/model-system-design/img/23-DistributedTaskScheduler/QQ截图20230410142031.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>探索并连接分布式任务调度器的设计组件。让我们确认此设计中使用的组件：</p><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><p>我们可以考虑在许多级别上进行调度。我们可能被要求设计由组织内部运行任务的调度，以在线下的机群上运行任务。在那里，他们必须找到充足的资源并决定首先运行哪个任务。</p><p>另一方面，我们也可能被要求设计云提供商用于调度来自多个客户端的任务的调度。云提供商需要决定首先运行哪个任务以及如何处理哪个客户端，以在不同租户之间提供适当的隔离。</p><p>因此，总体而言，我们系统的主要组件是：</p><ul><li><strong>客户端</strong>：它们发起任务执行。</li><li><strong>资源</strong>：任务在这些组件上执行。</li><li><strong>调度器</strong>：调度器在客户端和资源之间执行过程，并决定哪个任务应该首先获得资源。</li></ul><p><img src="' + _imports_0 + '" alt="QQ截图20230410141938" loading="lazy"></p>', 7);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<p>如上所示，有必要将传入的任务放在一个<strong>队列</strong>中。这是由于以下原因：</p><ul><li>我们可能现在没有足够的可用资源。</li><li>存在任务依赖性，一些任务需要等待其他任务。</li><li>我们需要将客户端与任务执行解耦，以便他们可以将工作交给我们的系统。然后，我们的系统将其排队等待执行。</li></ul><p>让我们设计一个能够调度任何任务的任务调度系统。通常，许多任务的生命周期相对较短，从几秒钟到几分钟。对于长时间运行的任务，我们可能需要在应用程序级别进行周期性的校验和恢复能力，以从可能的故障中恢复。</p><p>让我们假设我们机群中的某个单个服务器可以满足每个任务的计算需求。对于需要许多服务器的任务，应用程序要么需要将它们拆分成较小的任务以便于我们的系统处理，要么在整个集群管理器中进行长期资源获取。</p><h2 id="设计" tabindex="-1"><a class="header-anchor" href="#设计" aria-hidden="true">#</a> 设计</h2><p>当一个任务需要调度时，它应该包含以下信息：</p><ul><li><strong>资源需求</strong>：这些需求包括它需要多少个 CPU 核心、需要多少 RAM 才能执行此任务、需要多少磁盘空间，磁盘访问速率应该是多少（每秒的输入/输出速率或 IOPS），以及该任务需要执行多少个 TCP 端口等。但是，对于客户端来说，很难量化这些要求。为此，我们有各种资源层次，如基本、常规和高级。客户端可以按照这些层次指定要求。</li><li><strong>依赖性</strong>：广义而言，任务可以分为两种类型：有依赖性和无依赖性。<strong>有依赖性的任务</strong>需要执行一个或多个其他任务才能完成它们的执行。这些任务必须按顺序运行。对于有依赖性的任务，客户端应该提供一个给定任务所依赖的任务列表。<strong>无依赖性的任务</strong>不依赖于任何其他任务的执行。无依赖性的任务可以并行运行。我们应该知道一个任务是有依赖性还是无依赖性。依赖信息有助于按顺序执行有依赖性任务，并并行执行无依赖性任务以实现资源的有效利用。</li></ul><p><img src="' + _imports_1 + '" alt="QQ截图20230410142031" loading="lazy"></p>', 8);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<p>任务调度程序的设计如下所示：</p><ul><li><strong>客户端</strong>：云提供商的客户端是来自各种规模的企业和个人，他们想要执行他们的任务。</li><li><strong>速率限制器</strong>：客户端可用资源取决于他们支付的费用。为了保证我们服务的可靠性，限制任务的数量很重要。例如，允许每小时输入系统的任务数量为“X”个。其他人将收到“超过限制”的消息，而不是接受任务并回应迟。速率限制器根据客户的订阅限制客户端安排的任务数量。如果超过限制，它会向客户返回错误消息，指出已超过速率限制。</li><li><strong>任务提交者</strong>：如果任务成功通过速率限制器，则任务提交者接受任务。没有独立的任务提交者。相反，我们有一群接受日益增长的任务的节点。</li><li><strong>唯一ID生成器</strong>：分配唯一的ID给新接受的任务。</li><li>**数据库：**任务提交者接受的所有任务都存储在分布式数据库中。对于每个任务，我们有一些属性，除一个属性外，其中所有属性都存储在关系数据库中。</li><li><strong>关系数据库（RDB）</strong>：关系数据库存储任务ID、用户ID、所需资源、执行容量、客户端尝试的总次数、延迟容忍度等，如下表所示。可以在此处查找RDB的详细信息。</li><li><strong>图形数据库（GDB）</strong>：这是一个非关系型数据库，使用图形数据结构存储数据。我们使用它来构建和存储有向无环图（DAG）的依赖任务，由任务提交者进行拓扑排序，以便可以根据该图安排任务。可以在此处查找图形数据库的更多详细信息。</li></ul><h2 id="数据库架构" tabindex="-1"><a class="header-anchor" href="#数据库架构" aria-hidden="true">#</a> 数据库架构</h2><table><thead><tr><th>列名</th><th>数据类型</th><th>描述</th></tr></thead><tbody><tr><td>TaskID</td><td>Integer</td><td>唯一标识每个任务。</td></tr><tr><td>UserID</td><td>Integer</td><td>这是任务所有者的ID。</td></tr><tr><td>SchedulingType</td><td>VarChar</td><td>这可以是一次性的、每日的、每周的、每月的或每年的。</td></tr><tr><td>TotalAttempts</td><td>Integer</td><td>这是在任务执行失败的情况下，最大的重试次数。</td></tr><tr><td>ResourceRequirements</td><td>VarChar</td><td>客户端必须指定所提供资源类别的类型，例如基本、常规或高级等。指定的资源类别以字符串形式保存在RDB中。</td></tr><tr><td>ExecutionCap</td><td>Time</td><td>这是任务执行允许的最长时间。（当资源分配给任务时，时间开始计算。）</td></tr><tr><td>Status</td><td>VarChar</td><td>这可以是等待、进行中、完成或失败。</td></tr><tr><td>DelayTolerance</td><td>Time</td><td>这表示我们可以容忍多少延迟才能开始任务。</td></tr><tr><td>ScriptPath</td><td>VarChar</td><td>需要执行的脚本的路径。这个脚本是放置在文件系统中的文件。文件应该是可访问的，以便它可以被执行，就像我们在Google Colaboratory中挂载Google Drive，然后在那里执行我们的代码文件一样。</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果我们使用地理复制的数据存储，我们可以在不同的数据中心中运行多个任务调度系统实例，以实现更大规模和更高资源利用率。</p></div><ul><li><strong>批处理和优先级</strong>: 在将任务存储到关系型数据库（RDB）中后，将任务分组成批次。优先级基于任务的属性进行排序，例如延迟容忍度或短执行时间等。前K个优先级的任务被推入分布式队列中，其中K限制了我们可以推入队列的元素数量。K的值取决于许多因素，例如当前可用资源、客户端或任务优先级以及订阅级别。</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>问题</p><p>为什么要将任务存储在数据库中？为什么不直接将任务推送到队列中？</p><p>答案</p><p>队列不会永久保存数据。我们需要支付我们使用的队列服务的成本。</p><p>因此，我们只将那些准备在短时间内执行的任务推送到队列中。</p><p>已成功执行的任务需要从队列中移除。</p><p>此外，有不同的调度类型。任务可以安排一次性、每日、每周、每月或每年。</p><p>因此，我们必须将任务保存在我们的存储中。</p></div><ul><li><strong>分布式队列</strong>: 它由队列和队列管理器组成。队列管理器向队列中添加、更新或删除任务。它会跟踪我们使用的队列类型。它还负责在任务成功执行之前将任务保留在队列中。如果任务执行失败，那么该任务将再次显示在队列中。队列管理器知道在高峰时间运行哪个队列，在低峰时间运行哪个队列。</li><li><strong>队列管理器</strong>: 如果任务成功执行，队列管理器会从队列中删除任务。如果之前的执行失败，则会使任务可见。在任务执行失败的情况下，它将尝试允许任务的允许尝试次数。</li><li><strong>资源管理器</strong>: 资源管理器知道哪些资源是空闲的。它从分布式队列中拉取任务并分配资源。资源管理器跟踪每个任务的执行并将它们的状态发送回队列管理器。如果任务超出了其承诺或所需的资源使用，该任务将被终止，并将状态发送回任务提交者，通过错误消息通知客户端关于任务的终止。</li><li><strong>监视服务</strong>: 它负责检查资源管理器和资源的健康状况。如果某些资源失败，则会警报管理员修复资源或添加新资源（如果需要）。如果资源未被使用，则会警报管理员删除或关闭它们。这里有关于监视服务设计的<strong>详细讨论</strong>。</li></ul><h2 id="任务提交者" tabindex="-1"><a class="header-anchor" href="#任务提交者" aria-hidden="true">#</a> 任务提交者</h2><p>正如我们上面所看到的，我们在设计分布式任务调度器时使用的每个组件都是分布式的，因此可扩展且可用。但是，任务提交者可能会成为单点故障。为了处理这个问题，我们使用了一个节点集群。每个节点必须接受任务，将任务发送到唯一的ID生成器进行ID分配，然后将任务连同任务ID存储在分布式数据库中。</p><p>有一个集群管理器，每个节点都向其发送心跳信号，表示节点正常工作。每个节点向集群管理器更新已批准的任务。集群管理器维护任务列表以及批准该任务的节点ID。如果节点无法执行任务，则集群管理器将该任务交给集群中的另一个节点处理。集群管理器本身也进行了复制。</p><p>以上，我们设计了一个任务调度系统。我们将在下一课中讨论任务调度器的设计考虑因素。</p>', 12);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("调度器将任务放入队列以进行资源分配")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_8,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("任务调度程序的设计")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_16
  ]);
}
const _03Design_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "03Design.html.vue"]]);
export {
  _03Design_html as default
};