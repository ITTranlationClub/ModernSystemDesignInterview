import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414144535.png";
const _imports_1 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414144611.png";
const _imports_2 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414144622.png";
const _imports_3 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414144641.png";
const _imports_4 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414144653.png";
const _imports_5 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414144859.png";
const _imports_6 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414144910.png";
const _imports_7 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414144921.png";
const _imports_8 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414144932.png";
const _imports_9 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414144945.png";
const _imports_10 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145002.png";
const _imports_11 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145023.png";
const _imports_12 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145040.png";
const _imports_13 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145059.png";
const _imports_14 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145111.png";
const _imports_15 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145127.png";
const _imports_16 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145139.png";
const _imports_17 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145153.png";
const _imports_18 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145204.png";
const _imports_19 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145612.png";
const _imports_20 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145641.png";
const _imports_21 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145702.png";
const _imports_22 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145718.png";
const _imports_23 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145735.png";
const _imports_24 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145749.png";
const _imports_25 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145812.png";
const _imports_26 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145830.png";
const _imports_27 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414145845.png";
const _imports_28 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414150224.png";
const _imports_29 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414150240.png";
const _imports_30 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414150306.png";
const _imports_31 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414150327.png";
const _imports_32 = "/model-system-design/img/10-Key-valueStore/QQ截图20230414150347.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>学习如何使键值存储容错并能够检测故障。</p><h2 id="处理临时故障" tabindex="-1"><a class="header-anchor" href="#处理临时故障" aria-hidden="true">#</a> 处理临时故障</h2><p>通常，分布式系统使用基于仲裁的方法来处理故障。仲裁是在分布式事务中所需的最小投票数，以执行操作。</p><p>如果一个服务器是仲裁的一部分且已宕机，则我们无法执行所需的操作。这会影响系统的可用性和耐久性。</p><p>我们将使用松散仲裁（sloppy quorum）代替严格仲裁成员资格。</p><p>通常，领导者管理共识参与者之间的通信。参与者在提交成功的写入后发送确认。在接收这些确认后，领导者会响应客户端。</p><p>然而，这种方法的缺点是参与者容易受到网络中断的影响。如果领导者暂时失效且参与者无法联系到它，它们将宣布领导者已死亡。</p><p>现在，必须重新选举新的领导者。这样频繁的选举会对性能产生负面影响，因为系统花费更多的时间来选择领导者而不是完成任何实际的工作。</p><p>在松散仲裁中，优先列表中前 <em>n</em> 个健康节点处理所有读写操作。这 <em>n</em> 个健康节点可能不总是在一致性哈希环中顺时针移动时发现的前 <em>n</em> 个节点。</p><p>让我们考虑以下配置，其中 <em>n</em>=3。如果节点 <em>A</em> 在写入操作期间暂时不可用或无法访问，则请求将被发送到偏好列表中的下一个健康节点，即此处的节点 <em>D</em>。</p><p>它确保所需的可用性和耐久性。处理请求后，节点 <em>D</em> 包含一个提示，指示预期的接收方是哪个节点（在这种情况下是 <em>A</em>）。</p><p>一旦节点 <em>A</em> 再次运行，节点 <em>D</em> 将请求信息发送到 <em>A</em>，以便它可以更新其数据。传输完成后，<em>D</em> 从其本地存储中删除此项，而不影响系统中的总副本数。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230414144535" loading="lazy"></p><p>假设我们的哈希环中有七个节点，并且有一个节点的偏好列表</p><p><img src="' + _imports_1 + '" alt="QQ截图20230414144611" loading="lazy"></p><p>发生请求，并由节点A处理，因为它是在环中的下一个节点。节点在顺时针方向上移动时被处理</p><p><img src="' + _imports_2 + '" alt="QQ截图20230414144622" loading="lazy"></p><p>由于某些故障，节点A已经宕机</p><p><img src="' + _imports_3 + '" alt="QQ截图20230414144641" loading="lazy"></p><p>又发生了一个请求。节点A必须处理它，但无法处理，因此我们检查偏好列表中的下一个节点</p><p><img src="' + _imports_4 + '" alt="QQ截图20230414144653" loading="lazy"></p><p>由于节点A已经宕机，请求被发送到节点D</p><p>这种方法称为<strong>提示转移</strong>（hinted handoff）。使用它，我们可以确保如果一个节点面临临时故障，读取和写入操作仍然可以完成。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>注意</strong>：一个高可用性的存储系统必须处理数据中心故障，例如停电、冷却故障、网络故障或自然灾害。</p><p>为此，我们应该确保数据中心之间的复制。因此，如果一个数据中心宕机，我们可以从另一个数据中心中恢复它。</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>问题:</p><p>使用提示转移的限制是什么？</p><p>答案</p><p>系统成员的最小更改和临时节点故障是使用提示转移的理想情况。</p><p>但是，在某些情况下，提示副本在恢复到原始副本节点之前可能会变得不可用。</p></div><h2 id="处理永久故障" tabindex="-1"><a class="header-anchor" href="#处理永久故障" aria-hidden="true">#</a> 处理永久故障</h2><p>在节点永久故障的情况下，我们应该保持我们的副本同步，使我们的系统更耐用。</p><p>我们需要加快在副本之间检测不一致性的速度，并减少传输的数据量。</p><p>我们将使用Merkle树实现这一点。</p><p>在<strong>Merkle树</strong>中，单个键的值被哈希并用作树的叶子节点。</p><p>树的上级节点中包含其子节点的哈希值。可以独立验证Merkle树的每个分支，而无需下载完整的树或整个数据集。</p><p>在检查副本之间的不一致性时，Merkle树减少了必须交换的数据量。</p><p>如果，例如，</p><p>两个树的根哈希值相同且它们的叶节点也相同，则无需同步。</p><p>在该过程到达树叶之前，主机可以在节点交换子哈希值时识别不同步的键。</p><p>Merkle树是实现反熵的一种机制，这意味着保持所有数据一致。</p><p>它减少了用于同步的数据传输量和反熵过程中访问的磁盘数量。</p><p>以下幻灯片解释了Merkle树的工作原理：</p><p><img src="' + _imports_5 + '" alt="QQ截图20230414144859" loading="lazy"></p><p>计算所有键的哈希值。哈希将成为叶子节点</p><p><img src="' + _imports_6 + '" alt="QQ截图20230414144910" loading="lazy"></p><p>计算并存储H1和H2节点的哈希值作为其父节点</p><p><img src="' + _imports_7 + '" alt="QQ截图20230414144921" loading="lazy"></p><p>计算并存储H3和H4节点的哈希值作为其父节点</p><p><img src="' + _imports_8 + '" alt="QQ截图20230414144932" loading="lazy"></p><p>计算并存储所有其他节点的哈希值作为其父节点</p><p><img src="' + _imports_9 + '" alt="QQ截图20230414144945" loading="lazy"></p><p>计算并存储节点H 1 2 和 H 3 4 的哈希值作为它们的父节点。H 5 6 和 H 7 8 也是如此</p><p><img src="' + _imports_10 + '" alt="QQ截图20230414145002" loading="lazy"></p><p>我们复制了奇数节点</p><p><img src="' + _imports_11 + '" alt="QQ截图20230414145023" loading="lazy"></p><p>计算两个节点的哈希值（实际节点和其副本），并将其存储为父节点</p><p><img src="' + _imports_12 + '" alt="QQ截图20230414145040" loading="lazy"></p><p>计算节点的哈希并将其存储为父节点</p><p><img src="' + _imports_13 + '" alt="QQ截图20230414145059" loading="lazy"></p><p>计算最后两个节点的哈希以存储为根节点</p><p><img src="' + _imports_14 + '" alt="QQ截图20230414145111" loading="lazy"></p><p>假设更新了K2的值。现在将重新计算其哈希值</p><p><img src="' + _imports_15 + '" alt="QQ截图20230414145127" loading="lazy"></p><p>将重新计算并更新父哈希值</p><p><img src="' + _imports_16 + '" alt="QQ截图20230414145139" loading="lazy"></p><p>将重新计算并更新父哈希值</p><p><img src="' + _imports_17 + '" alt="QQ截图20230414145153" loading="lazy"></p><p>将重新计算并更新父哈希值</p><p><img src="' + _imports_18 + '" alt="QQ截图20230414145204" loading="lazy"></p><p>将重新计算并更新根节点的哈希值</p><h3 id="使用-merkle-树进行抗熵" tabindex="-1"><a class="header-anchor" href="#使用-merkle-树进行抗熵" aria-hidden="true">#</a> 使用 Merkle 树进行抗熵</h3><p>每个节点为它所托管的每个虚拟节点的键范围维护一个不同的 Merkle 树。</p><p>节点可以确定给定范围内的键是否正确。</p><p>相应于公共键范围的 Merkle 树的根在两个节点之间交换。我们将执行以下比较：</p><ol><li>比较 Merkle 树根节点的哈希值。</li><li>如果它们相同，则不继续执行。</li><li>使用递归遍历左右子节点。节点确定是否存在差异并执行必要的同步。</li></ol><p>以下幻灯片更详细地解释了 Merkle 树的工作原理。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>注意</strong>：我们假设所定义的范围仅用于说明。</p></div><p><img src="' + _imports_19 + '" alt="QQ截图20230414145612" loading="lazy"></p>', 74);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_20,
      alt: "QQ截图20230414145641",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_21,
      alt: "QQ截图20230414145702",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_22,
      alt: "QQ截图20230414145718",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_23,
      alt: "QQ截图20230414145735",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_24,
      alt: "QQ截图20230414145749",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_25,
      alt: "QQ截图20230414145812",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_26,
      alt: "QQ截图20230414145830",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_27,
      alt: "QQ截图20230414145845",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_83 = /* @__PURE__ */ createStaticVNode('<p>使用 Merkle 树的优点在于可以独立地检查 Merkle 树的每个分支，而无需节点下载树或完整数据集。</p><p>这减少了必须交换的数据量以进行同步以及抗熵过程中所需的磁盘访问次数。</p><p>缺点是当节点加入或离开系统时，树的哈希将被重新计算，因为会影响多个键范围。</p><p>我们希望我们的 <strong>节点能够检测到环中其他节点的故障</strong>，因此让我们看看如何将其添加到我们的设计中。</p><h2 id="推广加入环来检测失败" tabindex="-1"><a class="header-anchor" href="#推广加入环来检测失败" aria-hidden="true">#</a> 推广加入环来检测失败</h2><p>节点可能会短暂离线，但它们也可能会无限期地离线。</p><p>当单个节点离线时，我们不应该重新平衡分区分配或修复无法访问的副本，因为这很少是永久性的离开。因此，应谨慎地添加和删除环中的节点。</p><p>计划中的节点投入使用和退役会导致成员变化。这些变化形成历史记录。</p><p>它们被持久记录在每个节点的存储中，并使用 gossip 协议在环成员之间进行协调。</p><p><strong>基于 gossip 的协议</strong> 还维护成员的最终一致视图。当两个节点随机选择彼此作为对等方时，两个节点可以有效地同步其持久化的成员历史记录。</p><p>让我们通过考虑以下示例来了解基于 gossip 的协议如何工作。假设节点 <em>A</em> 第一次启动，并随机将节点 <em>B</em> 和 <em>E</em> 添加到其 token 集中。Token 集在一致性哈希空间中具有虚拟节点，并将节点映射到其相应的 token 集。这些信息在节点的本地磁盘空间上存储。</p><p>现在，节点 <em>A</em> 处理一个请求，导致了一个变化，所以它将此通知给 <em>B</em> 和 <em>E</em>。</p><p>另一个节点 <em>D</em> 在其 token 集中有 <em>C</em> 和 <em>E</em>。它进行了更改并告诉了 <em>C</em> 和 <em>E</em>。其他节点也进行同样的过程。</p><p>这样，每个节点最终都了解了每个其他节点的信息。这是异步共享信息的有效方式，并且不会占用太多带宽。</p><p><img src="' + _imports_28 + '" alt="QQ截图20230414150224" loading="lazy"></p>', 15);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_29,
      alt: "QQ截图20230414150240",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_30,
      alt: "QQ截图20230414150306",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_31,
      alt: "QQ截图20230414150327",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_32,
      alt: "QQ截图20230414150347",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_102 = /* @__PURE__ */ createStaticVNode('<div class="hint-container danger"><p class="hint-container-title">警告</p><p>问题:</p><p>考虑到一致性哈希的方法，基于gossip的协议会失败吗？</p><p>答案:</p><p>是的，基于gossip的协议可能会失败。</p><p>例如，节点 <em>A</em> 的虚拟节点<em>N</em>1想要加入环中。</p><p>管理员询问 <em>N2</em>，它也是节点 <em>A</em> 的虚拟节点。在这种情况下，两个节点都认为自己是环的一部分，不会意识到它们是同一个服务器。如果进行任何更改，它将继续更新自己，这是错误的。这被称为<strong>逻辑分区</strong>。</p><h6 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h6><p>我们如何防止逻辑分区？</p><p>答案:</p><p>我们可以使一些节点扮演种子的角色，以避免逻辑分区。</p><p>我们可以通过配置服务定义一组节点作为种子。</p><p>由于所有工作节点最终都可以将其成员身份与种子协调，所以所有工作节点都知道这组节点。</p><p>因此，逻辑分区非常罕见。</p></div><p>去中心化的故障检测协议使用基于gossip的协议，允许每个节点了解其他节点的添加或删除。</p><p>显式节点的加入和离开方法通知节点有关永久节点的添加和删除。当节点无法与另一个节点通信时，各个节点会检测到临时节点故障。</p><p>如果节点在授权时间内无法与其令牌集中的任何节点通信，则会向管理员通信该节点已停止。</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>键值存储提供了灵活性，使我们能够扩展具有非结构化数据的应用程序。</p><p>Web应用程序可以使用键值存储来存储有关用户会话和首选项的信息。</p><p>使用用户密钥时，所有数据都是可访问的，键值存储非常适合快速读写操作。</p><p>键值存储可用于实时推荐和广告，因为存储可以快速访问和呈现新的推荐。</p>', 9);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("假设我们在环中有虚拟节点 A 和 B")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_75,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("定义了每个虚拟节点所涵盖的范围")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_76,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("以表格形式定义了每个虚拟节点所涵盖的范围")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_77,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("节点 A 的 Merkle 树")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_78,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("节点 B 的 Merkle 树")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_79,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("假设添加了 A 的一个新虚拟节点 N8，并相应更新了范围")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_80,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("以表格形式定义了更新后每个虚拟节点所涵盖的范围")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_81,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("节点 A 的更新后的 Merkle 树")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_82,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("节点 B 的更新后的 Merkle 树")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_83,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("一组环中的节点")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_98,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("节点 *A* 处理请求。其 token 集中有 B 和 E")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_99,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("节点 *A* 在几个请求后向节点 *B* 和 *E* 发送成员信息的 gossip")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_100,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("节点 *D* 处理请求。其 token 集中有 C 和 E")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_101,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("在一些请求之后，Node D会向Node C和E传递成员信息")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_102
  ]);
}
const _05FaultToleranceFailureDetection_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "05FaultToleranceFailureDetection.html.vue"]]);
export {
  _05FaultToleranceFailureDetection_html as default
};
