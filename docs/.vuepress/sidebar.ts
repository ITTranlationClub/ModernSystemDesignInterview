import { sidebar } from "vuepress-theme-hope";


export const zhSidebar = sidebar({

  "/guide/": [{
  		"children": ["01Introduction", "02Course"],
  		"prefix": "01Introduction/",
  		"icon": "activity",
  		"link": "01Introduction/",
  		"text": "导读",
  		"collapsible": true
  	}, {
  		"children": ["01WhatIsInterview", "02PrepareSuccess", "03PerformWell"],
  		"prefix": "02Interviews/",
  		"icon": "contactGroup",
  		"link": "02Interviews/",
  		"text": "系统设计面试",
  		"collapsible": true
  	}, {
  		"children": ["01Abstractions", "02RemotePerformCall", "03Consistent", "04ErrorModel"],
  		"prefix": "03Abstractions/",
  		"icon": "license",
  		"link": "03Abstractions/",
  		"text": "抽象",
  		"collapsible": true
  	}, {
  		"children": ["01Availability", "02Reliability", "03Scalability", "04Maintainability", "05FaultTolerance"],
  		"prefix": "04Nonfunctional/",
  		"icon": "tools",
  		"link": "04Nonfunctional/",
  		"text": "非功能性系统特征",
  		"collapsible": true
  	}, {
  		"children": ["01PutBackEnvelope", "02ResourceEstimation"],
  		"prefix": "05BackEnvelope/",
  		"icon": "featuresNew",
  		"link": "05BackEnvelope/",
  		"text": "粗略计算",
  		"collapsible": true
  	}, {
  		"children": ["01BuildingBlocks"],
  		"prefix": "06BuildingBlocks/",
  		"icon": "dataMapping",
  		"link": "06BuildingBlocks/",
  		"text": "构建块",
  		"collapsible": true
  	}, {
  		"children": ["01DomainNameSystem", "02DomaimNameSystemWorks"],
  		"prefix": "07DomainName/",
  		"icon": "discoverfill",
  		"link": "07DomainName/",
  		"text": "域名系统",
  		"collapsible": true
  	}, {
  		"children": ["01LoadBalancers", "02GlobalLocalBalancers", "03LoadBalancersDetails"],
  		"prefix": "08LoadBalancers/",
  		"icon": "others1",
  		"link": "08LoadBalancers/",
  		"text": "负载均衡器",
  		"collapsible": true
  	}, {
  		"children": ["01Databases", "02DatabasesTypes", "03DataReplication", "04DataPartitioning", "05TradeOffsDatabases"],
  		"prefix": "09Databases/",
  		"icon": "config2",
  		"link": "09Databases/",
  		"text": "数据库",
  		"collapsible": true
  	}, {
  		"children": ["01KeyValueStore", "02DesignKeyValueStore", "03ScalabilityReplication", "04VersioningDataAchievingConfigurability", "05FaultToleranceFailureDetection"],
  		"prefix": "10KeyvalueStore/",
  		"icon": "shortcut-fill",
  		"link": "10KeyvalueStore/",
  		"text": "键值存储",
  		"collapsible": true
  	}, {
  		"children": ["01ContentDeliveryNetwork", "02IntroductionCDN", "03DesignCDN", "04InvestigationCDNPart1", "05InvestigationCDNPart2", "06EvaluationCDNDesign", "07QuizOnCDNDesign"],
  		"prefix": "11ContentDeliveryNetwork/",
  		"icon": "start1",
  		"link": "11ContentDeliveryNetwork/",
  		"text": "内容分发网络",
  		"collapsible": true
  	}, {
  		"children": ["01SystemDesignSequencer", "02DesignUniqueIDGenerator", "03UniqueIDsCausality"],
  		"prefix": "12Sequencer/",
  		"icon": "codestring",
  		"link": "12Sequencer/",
  		"text": "序列生成器",
  		"collapsible": true
  	}, {
  		"children": ["01DistributedMonitoring", "02IntroductionDistributedMonitoring", "03PrerequisitesMonitoringSystem"],
  		"prefix": "13DistributedMonitoring/",
  		"icon": "changelog",
  		"link": "13DistributedMonitoring/",
  		"text": "分布式监控",
  		"collapsible": true
  	}, {
  		"children": ["01DesignMonitoringSystem", "02DetailedDesignMonitoringSystem", "03VisualizeDataMonitoringSystem"],
  		"prefix": "14MonitorServersideErrors/",
  		"icon": "install-fill",
  		"link": "14MonitorServersideErrors/",
  		"text": "监控系统: 服务端错误",
  		"collapsible": true
  	}, {
  		"children": ["01ClientSideErrors", "02Design"],
  		"prefix": "15MonitorClientsideErrors/",
  		"icon": "restfulFastRequest",
  		"link": "15MonitorClientsideErrors/",
  		"text": "监控系统: 客户端错误",
  		"collapsible": true
  	}, {
  		"children": ["01SystemDesign", "02BackGround", "03HighLevelDesign", "04DetailedDesign", "05Evaluation", "06MemcachedVersusRedis"],
  		"prefix": "16DistributeCache/",
  		"icon": "code-box-fill",
  		"link": "16DistributeCache/",
  		"text": "分布式缓存",
  		"collapsible": true
  	}, {
  		"children": ["01SystemDesign", "02Requirements", "03Considerations", "04DesignPart1", "05DesignPart2", "06Evaluation", "07Quiz"],
  		"prefix": "17DistributedMessagingQueue/",
  		"icon": "aixin",
  		"link": "17DistributedMessagingQueue/",
  		"text": "分布式消息队列",
  		"collapsible": true
  	}, {
  		"children": ["01SystemDesign", "02Introduction", "03Design"],
  		"prefix": "18Pubsub/",
  		"icon": "bilibili",
  		"link": "18Pubsub/",
  		"text": "发布-订阅",
  		"collapsible": true
  	}, {
  		"children": ["01SystemDesign", "02Requirements", "03Design", "04RateLimiterAlgorithms", "05Quiz"],
  		"prefix": "19RateLimiter/",
  		"icon": "versionCompare",
  		"link": "19RateLimiter/",
  		"text": "限速器",
  		"collapsible": true
  	}, {
  		"children": ["01SystemDesign", "02Requirements", "03Design", "04DesignConsiderations", "05Evaluation", "06Quiz"],
  		"prefix": "20BlobStore/",
  		"icon": "whats-new",
  		"link": "20BlobStore/",
  		"text": "Blob Store",
  		"collapsible": true
  	}, {
  		"children": ["01SystemDesign", "02Requirements", "03Indexing", "04Design", "05SclingSearchAndIndexing", "06Evaluation"],
  		"prefix": "21DistributedSearch/",
  		"icon": "teamwork",
  		"link": "21DistributedSearch/",
  		"text": "分布式搜索",
  		"collapsible": true
  	}, {
  		"children": ["01SystemDesign", "02Introduction", "03Design"],
  		"prefix": "22DistributedLogging/",
  		"icon": "activity",
  		"link": "22DistributedLogging/",
  		"text": "分布式日志记录",
  		"collapsible": true
  	}, {
  		"children": ["01SystemDesign", "02Requirements", "03Design", "04DesignConsiderations", "05Evaluation"],
  		"prefix": "23DistributedTaskScheduler/",
  		"icon": "license",
  		"link": "23DistributedTaskScheduler/",
  		"text": "分布式任务调度",
  		"collapsible": true
  	}, {
  		"children": ["01SystemDesign", "02HighLevelDesign", "03DetailedDesign", "04Quiz"],
  		"prefix": "24ShardedCounters/",
  		"icon": "config2",
  		"link": "24ShardedCounters/",
  		"text": "分片计数器",
  		"collapsible": true
  	}, {
  		"children": ["01WrappingUp", "02RESHADEDApproach"],
  		"prefix": "25ConcludingBuildingBlocks/",
  		"icon": "codestring",
  		"link": "25ConcludingBuildingBlocks/",
  		"text": "构建块模块总结",
  		"collapsible": true
  	}]
});
