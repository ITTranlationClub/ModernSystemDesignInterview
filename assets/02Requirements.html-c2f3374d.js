import{_ as s,X as l,Y as o,$ as n,a2 as r,a1 as a,Z as e,a0 as t,B as d}from"./framework-370f8292.js";const p="/ModernSystemDesignInterview/img/19-RateLimiter/RateLimiterPlacedAtTheServerSide.png",c="/ModernSystemDesignInterview/img/19-RateLimiter/RateLimiterAsMiddleware.png",h="/ModernSystemDesignInterview/img/19-RateLimiter/BuildingBlocksinDesignOfRateLimiter.png",g={},u=a('<p>了解Rate Limiter的要求和重要概念。</p><h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h2><p>在本课程中，我们的重点是设计一个满足以下功能和非功能要求的速率限制器。</p><h3 id="功能要求" tabindex="-1"><a class="header-anchor" href="#功能要求" aria-hidden="true">#</a> 功能要求</h3><ul><li>限制客户端在时间窗口内发送到API的请求数量。</li><li>使每个窗口内的请求限制可配置。</li><li>确保客户端在单个服务器或组合服务器中越过定义的阈值时得到消息（错误或通知）。</li></ul><h3 id="非功能要求" tabindex="-1"><a class="header-anchor" href="#非功能要求" aria-hidden="true">#</a> 非功能要求</h3><ul><li><strong>可用性：</strong> 速率限制器可以保护我们的系统，因此应具有高可用性。</li><li><strong>低延迟：</strong> 由于所有API请求都通过速率限制器传递，因此它应尽可能以最小的延迟工作，而不影响用户体验。</li><li><strong>可扩展性：</strong> 我们的设计应具有高可扩展性，可以随时间限制越来越多的客户端请求。</li></ul><h2 id="限制的类型" tabindex="-1"><a class="header-anchor" href="#限制的类型" aria-hidden="true">#</a> 限制的类型</h2><p>速率限制器可以进行三种限制类型。</p><p>1.<strong>硬限制：</strong> 这种限制对API请求的数量设置了硬限制。因此，当请求超过限制时，它会被丢弃。</p><p>2.<strong>软限制：</strong> 在软限制下，请求的数量可以超过预定的限制值一定的百分比。例如，如果我们的系统每分钟有500条消息的预定的限制，其中有一个5%超额，那么我们可以让客户端每分钟发送525个请求。</p><p>3.<strong>弹性或动态限制：</strong> 在此限制中，如果系统有可用的多余资源，请求的数量可以超过预定的限制。但是，没有为上限定义具体的百分比。例如，如果我们的系统允许每分钟500个请求，那么当有空闲资源时，它可以让用户发送超过500个请求。</p><p>Linux操作系统提供了一个内核功能，称为“cgroups”（控制组），用于限制、记录和隔离进程集合的资源（CPU时间、系统内存、磁盘存储、I / O和网络带宽）。通过使用“cgroups”，系统管理员可以在运行系统时监视、拒绝对特定资源的访问并动态重新配置“cgroups”。通过“cgroups”功能，系统管理员通过以下方式获得对系统资源的细粒度控制：</p><ul><li><strong>资源限制：</strong> 使用该功能，可以对组施加限制，以不超过配置的内存限制和文件系统缓存。</li><li><strong>优先级：</strong> 通过该功能，可优先考虑一些组使用更大的CPU周期或磁盘I / O吞吐量。</li><li><strong>会计：</strong> 该功能用于测量组的资源使用情况，也可用于计费目的。</li><li><strong>控制：</strong> 系统管理员通过此功能可以控制进程组、它们的检查点和重新启动。</li></ul><p>提供了这样丰富的功能，<code>cgroup</code>可以在系统（单个服务器）级别上使用，不仅限制单个用户，还限制用户或进程组的资源使用。</p><p>我们可以通过设计一个服务，该服务接受速率限制服务的输入，并对群集的本地节点实施限制，从而扩展上述概念。</p><h2 id="在哪里放置速率限制器" tabindex="-1"><a class="header-anchor" href="#在哪里放置速率限制器" aria-hidden="true">#</a> 在哪里放置速率限制器</h2><p>有三种不同的放置速率限制器的方式。</p><p>1.<strong>在客户端上：</strong> 在客户端上放置速率限制器很容易。但是，此策略并不安全，因为它很容易被恶意活动篡改。此外，在客户端上进行配置也很困难。</p><p>2.<strong>在服务器端上：</strong> 如下图所示，速率限制器被放置在服务器端上。在这种方法中，服务器接收传递到位于服务器上的速率限制器的请求。</p><p><img src="'+p+'" alt="RateLimiterPlacedAtTheServerSide" loading="lazy"></p>',21),_=e("p",null,[t("3."),e("strong",null,"作为中间件："),t(" 在这种策略中，限流器作为中间件，通过限制API服务器的请求速率来控制流量，如下图所示。")],-1),m=e("p",null,[e("img",{src:c,alt:"RateLimiterAsMiddleware",loading:"lazy"})],-1),f=a('<p>将限流器放置在哪，取决于许多因素，并且基于组织的技术堆栈、工程资源、优先级、计划、目标等主观决策。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>许多现代服务使用API提供其功能给客户端。 API端点可以是限制传入客户端流量的好位置，因为所有流量都通过它们。</p></div><h2 id="实现限流器的两个模型" tabindex="-1"><a class="header-anchor" href="#实现限流器的两个模型" aria-hidden="true">#</a> 实现限流器的两个模型</h2><p>单个限流器可能无法处理巨大的流量，以支持数百万用户。因此，更好的选择是使用多个限流器作为独立节点的集群。由于会有多个限流器及其相应的计数器（或速率限制），因此有两种使用数据库存储、检索和更新计数器以及用户信息的方法。</p><ol><li><p><strong>使用集中式数据库的限流器：</strong> 在这种方法中，限流器与集中式数据库进行交互，最好使用Redis或Cassandra。这种模型的优点是计数器存储在集中式数据库中。因此，客户端无法超过预定义限制。但是，这种方法还存在一些缺点。如果大量请求命中集中式数据库，则会增加延迟。另一个巨大的问题是高并发请求中的竞争条件（或关联锁争用）的潜在问题。</p></li><li><p><strong>使用分布式数据库的限流器：</strong> 使用独立节点集群是另一种方法，其中限流器的状态在分布式数据库中。在这种方法中，每个节点都必须跟踪限流器的速率限制。这种方法的问题在于，当向不同的节点（限流器）发送请求时，客户端可能会在一定时间内超过速率限制，而这时每个节点正在收集状态。为了执行限制，我们必须在负载均衡器中设置粘性会话，以将每个消费者发送到正好一个节点。但是，这种方法缺乏容错性，并且在节点过载时存在扩展问题。</p></li></ol><p>除了上述两个概念外，另一个问题是是否使用针对所有传入请求共享的全局计数器，还是使用每个用户的个体计数器。例如，令牌桶算法可以以两种方式实现。在第一种方法中，所有请求可以共享单个桶中的总令牌数，而在第二种方法中，单独的桶被分配给用户。使用共享或单独的计数器（或桶）的选择取决于用例和限流规则</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p>问题1： 限流器能否用作负载均衡器？ 答案： 负载均衡器防止将太多请求转发到应用程序服务器。它们基于限制拒绝请求或将请求发送到队列以进行后续处理。但是，负载均衡器对输入请求不偏向，将它们看作相等的。例如，假设我们的Web服务公开了多个操作。其中一些操作很快，而另一些操作很慢。对于慢速操作的请求需要更多的时间和处理能力。负载均衡器不知道这些操作的成本。因此，如果我们要限制特定操作的请求数量，应该在应用程序服务器上进行，而不是在负载均衡器级别上。</p><p>问题2： 假设客户端需要使用两个虚拟机（VMs）发送请求以使用某个特定服务，其中一个使用VPN连接到不同的区域。假设限流标识符是基于用户凭据工作的。因此，用户ID将在两个会话中相同。此外，假设来自不同VM的请求可能会击中不同的数据中心。在这种情况下，如何限制速率以防止用户超过速率限制？ 答案： 为了限制传入请求，我们有两种不同的选择来放置速率限制器。 （1）每个数据中心的速率限制器：限制用户传入请求的一种方法是使用每个数据中心的速率限制器。每个数据中心将拥有自己的速率限制器，用于限制传入请求。在这种方法中，速率（计数或速率限制）相对较低。因此，每个单位时间只允许有限数量的请求。此外，该方法提供了较低的延迟，因为这些请求通常会被定向到地理位置最近的数据中心。通常，在数据中心内的延迟不到1毫秒，并且在某些链路失败的情况下，有多个冗余路径可用。 （2）跨数据中心共享速率限制器：另一种方法是在多个数据中心之间共享速率限制器。这样，来自两个VM的请求将被单个速率限制器限制。在这种情况下允许的请求数量更多，但是这种方法相对较慢，因为在将请求定向到任何最近的数据中心之前，它将通过共享速率限制器。地理分布的数据中心的延迟通常高且变化，并且可用的冗余路径不多。</p></div><h2 id="我们将使用的构建块" tabindex="-1"><a class="header-anchor" href="#我们将使用的构建块" aria-hidden="true">#</a> 我们将使用的构建块</h2><p>速率限制器的设计利用了我们在前面章节中讨论过的以下构建块。</p><p><img src="'+h+'" alt="BuildingBlocksinDesignOfRateLimiter" loading="lazy"></p>',10),x=e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"数据库"),t(" 用于存储由服务提供商定义的规则和使用该服务的用户的元数据。")])]),e("li",null,[e("p",null,[e("strong",null,"缓存"),t(" 用于缓存规则和用户数据以进行频繁访问。")])]),e("li",null,[e("p",null,[e("strong",null,"队列"),t(" 对于持有由速率限制器允许的传入请求是必不可少的。")])])],-1),R=e("p",null,"在下一节中，我们将重点介绍基于本课程中讨论的要求的速率限制器的高级和详细设计。",-1);function v(I,L){const i=d("center");return l(),o("div",null,[u,n(i,null,{default:r(()=>[t("服务器端的限流器")]),_:1}),_,m,n(i,null,{default:r(()=>[t("作为中间件的限流器")]),_:1}),f,n(i,null,{default:r(()=>[t("速率限制器设计中的构建块")]),_:1}),x,R])}const A=s(g,[["render",v],["__file","02Requirements.html.vue"]]);export{A as default};
