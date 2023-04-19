import{_ as i,X as e,Y as a,a1 as t}from"./framework-370f8292.js";const n="/img/16-DistributedCache/20230217120717.png",l="/img/16-DistributedCache/20230217121054.png",r="/img/16-DistributedCache/20230217121212.png",s="/img/16-DistributedCache/20230217121329.png",p="/img/16-DistributedCache/20230217121401.png",c={},d=t('<p>让我们了解分布式缓存的详细设计。</p><p>本课将找出分布式缓存高级设计的一些缺点，并改进设计以弥补这些不足。让我们开始吧。</p><h2 id="查找并删除限制" tabindex="-1"><a class="header-anchor" href="#查找并删除限制" aria-hidden="true">#</a> 查找并删除限制</h2><p>在开始详细设计之前，我们需要了解并克服一些挑战：</p><ul><li>缓存客户端无法感知缓存服务器的添加或失效。</li><li>该解决方案会遇到单点故障 (SPOF) 问题，因为我们为每组缓存数据设置了一个缓存服务器。不仅如此，如果任何一个缓存服务器上的某些数据被频繁访问（一般称为热键问题），那么我们的性能也会变慢。</li><li>我们的解决方案也没有突出缓存服务器的内部结构。也就是说，它会使用什么样的数据结构来存储，它会使用什么样的驱逐策略？</li></ul><h3 id="维护缓存服务器列表" tabindex="-1"><a class="header-anchor" href="#维护缓存服务器列表" aria-hidden="true">#</a> 维护缓存服务器列表</h3><p>让我们从解决第一个问题开始。我们将采取渐进的步骤来寻求最佳解决方案。让我们看看下面的幻灯片，以了解下面描述的每个解决方案：</p><p><img src="'+n+'" alt="" loading="lazy"></p><p align="center">方案一: 在每个服务器维护一个缓存客户端可以使用的配置文件</p><p><img src="'+l+'" alt="" loading="lazy"></p><p align="center"> 方案二: 在集中位置维护配置文件 </p><p><img src="'+r+'" alt="" loading="lazy"></p><p align="center">方案三: 使用配置服务监视缓存服务器并保持缓存客户端更新</p><ul><li><strong>解决方案 1</strong>：可以在缓存客户端所在的每个服务主机中设置一个配置文件。配置文件将包含缓存客户端有效利用缓存服务器所需的更新后的运行状况和元数据。配置服务的每个副本都可以通过任何 DevOps 工具的推送服务进行更新。这种策略的主要问题是配置文件必须通过一些 DevOps 工具手动更新和部署。</li><li><strong>解决方案 2</strong>：我们可以将配置文件存储在一个集中位置，缓存客户端可以使用该位置来获取有关缓存服务器的更新信息。这解决了部署问题，但我们仍然需要手动更新配置文件并监控每个服务器的健康状况。</li><li><strong>解决方案 3</strong>：一种自动处理该问题的方法是使用持续监控缓存服务器健康状况的配置服务。除此之外，当一个新的缓存服务器被添加到集群时，缓存客户端将得到通知。当我们使用这种策略时，如果出现故障或添加新节点，则不需要人为干预或监控。最后，缓存客户端从配置服务中获取缓存服务器列表。</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>配置服务的运营成本最高。同时，这是一个复杂的解决方案。但是，它是我们提供的所有解决方案中最强大的。</p></div><h3 id="提高可用性" tabindex="-1"><a class="header-anchor" href="#提高可用性" aria-hidden="true">#</a> 提高可用性</h3><p>第二个问题与缓存服务器出现故障时缓存不可用有关。一个简单的解决方案是添加副本节点。我们可以从在缓存分片中添加一个主节点和两个备份节点开始。对于副本，总是存在不一致的可能性。如果我们的副本非常接近，则同步执行写入副本以避免分片副本之间的不一致。在分片之间划分缓存数据至关重要，这样既不会出现不可用问题，也不会浪费任何硬件。</p><p>该解决方案有两个主要优点：</p><ul><li>在发生故障时提高了可用性。</li><li>热分片可以有多个节点（主要-次要）用于读取。</li></ul><p>这样的解决方案不仅会提高可用性，还会增加性能。</p><h3 id="缓存服务器的内部结构" tabindex="-1"><a class="header-anchor" href="#缓存服务器的内部结构" aria-hidden="true">#</a> 缓存服务器的内部结构</h3><p>每个缓存客户端应该使用三种机制来存储和从缓存服务器中逐出条目：</p><ul><li><strong>哈希映射</strong>：缓存服务器使用哈希映射来存储或定位缓存服务器 RAM 中的不同条目。下图显示映射包含指向每个缓存值的指针。</li><li><strong>双向链表</strong>：如果我们必须从缓存中逐出数据，我们需要一个链表，以便我们可以根据访问频率对条目进行排序。下图描述了如何使用双向链表连接条目。</li><li><strong>驱逐政策</strong>：驱逐政策取决于应用程序要求。在这里，我们假设最近最少使用 (LRU) 驱逐策略。</li></ul><p>下面提供了分片集群以及节点数据结构的描述：</p><p><img src="'+s+'" alt="" loading="lazy"></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>从上面的解释中可以明显看出我们不提供<code>delete</code>API。这是因为驱逐（通过驱逐算法）和删除（通过 TTL 的过期条目）是在缓存服务器本地完成的。<code>delete</code>然而，可能会出现需要 API 的情况。例如，当我们从数据库中删除一个最近添加的条目时，为了一致性，它应该导致从缓存中删除项目。</p></div><h2 id="详细设计" tabindex="-1"><a class="header-anchor" href="#详细设计" aria-hidden="true">#</a> 详细设计</h2><p>在解决了之前突出显示的三个问题中的每一个之后，我们现在准备好正式确定详细设计。看下面的详细设计：</p><p><img src="'+p+'" alt="" loading="lazy"></p><p>让我们将建议的详细设计总结为几点：</p><ul><li>客户端的请求通过缓存客户端所在的负载均衡器到达服务主机。</li><li>每个缓存客户端使用一致的哈希来标识缓存服务器。接下来，缓存客户端将请求转发给维护特定分片的缓存服务器。</li><li>每个缓存服务器都有主服务器和副本服务器。在内部，每个服务器都使用相同的机制来存储和清除缓存条目。</li><li>配置服务确保所有客户端看到缓存服务器的更新且一致的视图。</li><li>监控服务还可用于记录和报告缓存服务的不同指标。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>设计的一个重要方面是缓存条目是从 RAM 中存储和检索的。在上一课中，我们讨论了 RAM 是否适合设计缓存系统。</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><h6 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h6><p>虽然一致性哈希是一个不错的选择，但它可能会导致数据分布不均，并且某些服务器可能会过载。我们如何解决这个问题？</p><p>答案</p><p>随着时间的推移，已经提出了许多一致的散列算法风格。我们可以使用一种这样的风格（在这里使用）来均匀分布负载，甚至在不同的缓存服务器上制作相同数据的多个副本。每个缓存服务器内部都可以有虚拟服务器，一台机器中虚拟服务器的数量取决于机器的能力。这样可以更好地控制缓存服务器上的负载量。同时，它提高了可用性。</p></div>',33),o=[d];function h(g,_){return e(),a("div",null,o)}const m=i(c,[["render",h],["__file","04DetailedDesign.html.vue"]]);export{m as default};
