import { d as defineAsyncComponent, r as ref, a as readonly, b as reactive, c as defineComponent, i as isString$1, e as isArray, f as dedupeHead, g as resolveLocalePath, o as onMounted, h as computed, j as h$1, k as inject, l as isLinkHttp, m as removeLeadingSlash, n as getCurrentInstance, p as camelize, q as capitalize, s as nextTick, u as unref, t as isRef, w as watch, v as onUnmounted, x as getCurrentScope, y as onScopeDispose, z as shallowRef, A as watchEffect, B as resolveComponent, T as Transition, C as useRoute, D as useRouter, E as TransitionGroup, F as onBeforeUnmount, R as RouterLink, G as setupDevtoolsPlugin, H as isLinkMailto, I as toRef, J as isLinkTel, K as isLinkExternal, L as ensureEndingSlash, M as isPlainObject, N as provide, O as removeEndingSlash, P as useLink, Q as resolveRoutePathFromUrl, S as createRouter, U as START_LOCATION_NORMALIZED, V as createSSRApp, W as createWebHistory, X as RouterView } from "./framework-03ffdf83.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/model-system-design/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i2 = links.length - 1; i2 >= 0; i2--) {
        const link2 = links[i2];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html-15a21f23.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/about.html
  "v-fc036150": () => __vitePreload(() => import(
    /* webpackChunkName: "v-fc036150" */
    "./about.html-f9bd33e6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/01Introduction/01Introduction.html
  "v-725da8d4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-725da8d4" */
    "./01Introduction.html-70b52b10.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/01Introduction/02Course.html
  "v-6904c258": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6904c258" */
    "./02Course.html-a8e89955.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/02Interviews/01WhatIsInterview.html
  "v-5db34796": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5db34796" */
    "./01WhatIsInterview.html-307fe56a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/02Interviews/02PrepareSuccess.html
  "v-19841e68": () => __vitePreload(() => import(
    /* webpackChunkName: "v-19841e68" */
    "./02PrepareSuccess.html-b29e569c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/02Interviews/03PerformWell.html
  "v-46818948": () => __vitePreload(() => import(
    /* webpackChunkName: "v-46818948" */
    "./03PerformWell.html-f9851a4d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/03Abstractions/01Abstractions.html
  "v-1e0f8810": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1e0f8810" */
    "./01Abstractions.html-94bac0f4.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/03Abstractions/02RemotePerformCall.html
  "v-81697716": () => __vitePreload(() => import(
    /* webpackChunkName: "v-81697716" */
    "./02RemotePerformCall.html-81240441.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/03Abstractions/03Consistent.html
  "v-d4f4285e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-d4f4285e" */
    "./03Consistent.html-10cbdc63.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/03Abstractions/04ErrorModel.html
  "v-2ddacba1": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2ddacba1" */
    "./04ErrorModel.html-70b74a9c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/04Nonfunctional/01Availability.html
  "v-59b84364": () => __vitePreload(() => import(
    /* webpackChunkName: "v-59b84364" */
    "./01Availability.html-82e0a9d7.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/04Nonfunctional/02Reliability.html
  "v-24081220": () => __vitePreload(() => import(
    /* webpackChunkName: "v-24081220" */
    "./02Reliability.html-54b1b938.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/04Nonfunctional/03Scalability.html
  "v-f8fb7008": () => __vitePreload(() => import(
    /* webpackChunkName: "v-f8fb7008" */
    "./03Scalability.html-86c6751e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/04Nonfunctional/04Maintainability.html
  "v-5abcbb8d": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5abcbb8d" */
    "./04Maintainability.html-dc916d9f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/04Nonfunctional/05FaultTolerance.html
  "v-dfcab9cc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-dfcab9cc" */
    "./05FaultTolerance.html-7d2282b2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/05BackEnvelope/01PutBackEnvelope.html
  "v-35cd218a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-35cd218a" */
    "./01PutBackEnvelope.html-87fc541e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/05BackEnvelope/02ResourceEstimation.html
  "v-04c51677": () => __vitePreload(() => import(
    /* webpackChunkName: "v-04c51677" */
    "./02ResourceEstimation.html-9c294314.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/06BuildingBlocks/01BuildingBlocks.html
  "v-c08a47ca": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c08a47ca" */
    "./01BuildingBlocks.html-a5c40eb9.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/07DomainName/01DomainNameSystem.html
  "v-09373366": () => __vitePreload(() => import(
    /* webpackChunkName: "v-09373366" */
    "./01DomainNameSystem.html-7b10f87c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/07DomainName/02DomaimNameSystemWorks.html
  "v-44472103": () => __vitePreload(() => import(
    /* webpackChunkName: "v-44472103" */
    "./02DomaimNameSystemWorks.html-9adf96d9.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/08LoadBalancers/01LoadBalancers.html
  "v-c88fa4e2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c88fa4e2" */
    "./01LoadBalancers.html-c6f30ab0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/08LoadBalancers/02GlobalLocalBalancers.html
  "v-7dbc9e54": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7dbc9e54" */
    "./02GlobalLocalBalancers.html-a01e816f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/08LoadBalancers/03LoadBalancersDetails.html
  "v-870a4682": () => __vitePreload(() => import(
    /* webpackChunkName: "v-870a4682" */
    "./03LoadBalancersDetails.html-abea165d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/09Databases/01Databases.html
  "v-037c66e4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-037c66e4" */
    "./01Databases.html-cc7355e3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/09Databases/02DatabasesTypes.html
  "v-c753082c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c753082c" */
    "./02DatabasesTypes.html-195686e2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/09Databases/03DataReplication.html
  "v-35edf8a6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-35edf8a6" */
    "./03DataReplication.html-50b165ae.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/09Databases/04DataPartitioning.html
  "v-3c006672": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3c006672" */
    "./04DataPartitioning.html-4d9e9ace.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/09Databases/05TradeOffsDatabases.html
  "v-06c04b18": () => __vitePreload(() => import(
    /* webpackChunkName: "v-06c04b18" */
    "./05TradeOffsDatabases.html-992c3f39.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/10KeyvalueStore/01KeyValueStore.html
  "v-71fd6b54": () => __vitePreload(() => import(
    /* webpackChunkName: "v-71fd6b54" */
    "./01KeyValueStore.html-e0ef5c62.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/10KeyvalueStore/02DesignKeyValueStore.html
  "v-7375d8b5": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7375d8b5" */
    "./02DesignKeyValueStore.html-f19682d0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/10KeyvalueStore/03ScalabilityReplication.html
  "v-ae759124": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ae759124" */
    "./03ScalabilityReplication.html-4abf8a7a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/10KeyvalueStore/04VersioningDataAchievingConfigurability.html
  "v-66159619": () => __vitePreload(() => import(
    /* webpackChunkName: "v-66159619" */
    "./04VersioningDataAchievingConfigurability.html-aaec8efa.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/10KeyvalueStore/05FaultToleranceFailureDetection.html
  "v-01a95783": () => __vitePreload(() => import(
    /* webpackChunkName: "v-01a95783" */
    "./05FaultToleranceFailureDetection.html-b3ca39a6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/11ContentDeliveryNetwork/01ContentDeliveryNetwork.html
  "v-349e6b55": () => __vitePreload(() => import(
    /* webpackChunkName: "v-349e6b55" */
    "./01ContentDeliveryNetwork.html-18fcc608.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/11ContentDeliveryNetwork/02IntroductionCDN.html
  "v-a068d12c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-a068d12c" */
    "./02IntroductionCDN.html-6eca2460.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/11ContentDeliveryNetwork/03DesignCDN.html
  "v-4298a24f": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4298a24f" */
    "./03DesignCDN.html-12c091df.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/11ContentDeliveryNetwork/04InvestigationCDNPart1.html
  "v-63f1600c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-63f1600c" */
    "./04InvestigationCDNPart1.html-b3f3bf10.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/11ContentDeliveryNetwork/05InvestigationCDNPart2.html
  "v-c2116d28": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c2116d28" */
    "./05InvestigationCDNPart2.html-d1dd8e66.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/11ContentDeliveryNetwork/06EvaluationCDNDesign.html
  "v-5db8879c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5db8879c" */
    "./06EvaluationCDNDesign.html-05f77357.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/11ContentDeliveryNetwork/07QuizOnCDNDesign.html
  "v-838320ea": () => __vitePreload(() => import(
    /* webpackChunkName: "v-838320ea" */
    "./07QuizOnCDNDesign.html-8e99fdc0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/12Sequencer/01SystemDesignSequencer.html
  "v-c07322be": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c07322be" */
    "./01SystemDesignSequencer.html-73bddb8f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/12Sequencer/02DesignUniqueIDGenerator.html
  "v-db59f746": () => __vitePreload(() => import(
    /* webpackChunkName: "v-db59f746" */
    "./02DesignUniqueIDGenerator.html-51eee8fa.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/12Sequencer/03UniqueIDsCausality.html
  "v-a11609aa": () => __vitePreload(() => import(
    /* webpackChunkName: "v-a11609aa" */
    "./03UniqueIDsCausality.html-9b76dc34.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/13DistributedMonitoring/01DistributedMonitoring.html
  "v-99acaf7e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-99acaf7e" */
    "./01DistributedMonitoring.html-1aec2416.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/13DistributedMonitoring/02IntroductionDistributedMonitoring.html
  "v-0e8622bc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0e8622bc" */
    "./02IntroductionDistributedMonitoring.html-1dabdc3c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/13DistributedMonitoring/03PrerequisitesMonitoringSystem.html
  "v-40226b0c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-40226b0c" */
    "./03PrerequisitesMonitoringSystem.html-a48c33be.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/14MonitorServersideErrors/01DesignMonitoringSystem.html
  "v-bef102f8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-bef102f8" */
    "./01DesignMonitoringSystem.html-84e2db7d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/14MonitorServersideErrors/02DetailedDesignMonitoringSystem.html
  "v-648647da": () => __vitePreload(() => import(
    /* webpackChunkName: "v-648647da" */
    "./02DetailedDesignMonitoringSystem.html-e93ba8f0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/14MonitorServersideErrors/03VisualizeDataMonitoringSystem.html
  "v-3b91ec34": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3b91ec34" */
    "./03VisualizeDataMonitoringSystem.html-b3d841ac.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/15MonitorClientsideErrors/01ClientSideErrors.html
  "v-afe132da": () => __vitePreload(() => import(
    /* webpackChunkName: "v-afe132da" */
    "./01ClientSideErrors.html-27cf9598.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/15MonitorClientsideErrors/02Design.html
  "v-448e713e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-448e713e" */
    "./02Design.html-7cf89c77.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/16DistributeCache/01SystemDesign.html
  "v-8cec7528": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8cec7528" */
    "./01SystemDesign.html-604f4609.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/16DistributeCache/02BackGround.html
  "v-000c5b6a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-000c5b6a" */
    "./02BackGround.html-a3f7df95.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/16DistributeCache/03HighLevelDesign.html
  "v-6a89698a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6a89698a" */
    "./03HighLevelDesign.html-dd602ca9.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/16DistributeCache/04DetailedDesign.html
  "v-2e9b2b68": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2e9b2b68" */
    "./04DetailedDesign.html-90a59d33.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/16DistributeCache/05Evaluation.html
  "v-3927b3d9": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3927b3d9" */
    "./05Evaluation.html-5fe974ef.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/16DistributeCache/06MemcachedVersusRedis.html
  "v-482c88de": () => __vitePreload(() => import(
    /* webpackChunkName: "v-482c88de" */
    "./06MemcachedVersusRedis.html-1dd0d3e8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/17DistributedMessagingQueue/01SystemDesign.html
  "v-428c72cc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-428c72cc" */
    "./01SystemDesign.html-ecd5964b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/17DistributedMessagingQueue/02Requirements.html
  "v-398f5ed6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-398f5ed6" */
    "./02Requirements.html-6c9e7d43.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/17DistributedMessagingQueue/03Considerations.html
  "v-62e9cbce": () => __vitePreload(() => import(
    /* webpackChunkName: "v-62e9cbce" */
    "./03Considerations.html-d8d4295d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/17DistributedMessagingQueue/04DesignPart1.html
  "v-0878b1a4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0878b1a4" */
    "./04DesignPart1.html-b527ac40.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/17DistributedMessagingQueue/05DesignPart2.html
  "v-4e225dce": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4e225dce" */
    "./05DesignPart2.html-669a2bab.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/17DistributedMessagingQueue/06Evaluation.html
  "v-5697f334": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5697f334" */
    "./06Evaluation.html-b2ba4c01.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/17DistributedMessagingQueue/07Quiz.html
  "v-c2d86268": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c2d86268" */
    "./07Quiz.html-db0807d3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/18Pubsub/01SystemDesign.html
  "v-4fce5cb2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4fce5cb2" */
    "./01SystemDesign.html-53460ac3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/18Pubsub/02Introduction.html
  "v-9dbc20b8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-9dbc20b8" */
    "./02Introduction.html-acf78542.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/18Pubsub/03Design.html
  "v-9cbc9cc2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-9cbc9cc2" */
    "./03Design.html-aa19fb57.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/19RateLimiter/01SystemDesign.html
  "v-3c7a9ce0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3c7a9ce0" */
    "./01SystemDesign.html-33d860c1.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/19RateLimiter/02Requirements.html
  "v-3c9849cc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3c9849cc" */
    "./02Requirements.html-5d4ff99b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/19RateLimiter/03Design.html
  "v-d992f606": () => __vitePreload(() => import(
    /* webpackChunkName: "v-d992f606" */
    "./03Design.html-c03e6351.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/19RateLimiter/04RateLimiterAlgorithms.html
  "v-657f25e8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-657f25e8" */
    "./04RateLimiterAlgorithms.html-f195b398.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/19RateLimiter/05Quiz.html
  "v-09872d84": () => __vitePreload(() => import(
    /* webpackChunkName: "v-09872d84" */
    "./05Quiz.html-00fce09f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/20BlobStore/01SystemDesign.html
  "v-1a60c654": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1a60c654" */
    "./01SystemDesign.html-11fbd7f3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/20BlobStore/02Requirements.html
  "v-4da53512": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4da53512" */
    "./02Requirements.html-93bea998.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/20BlobStore/03Design.html
  "v-03e2467a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-03e2467a" */
    "./03Design.html-1a8dacd2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/20BlobStore/04DesignConsiderations.html
  "v-21a5098b": () => __vitePreload(() => import(
    /* webpackChunkName: "v-21a5098b" */
    "./04DesignConsiderations.html-9bcc8039.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/20BlobStore/05Evaluation.html
  "v-fc1f447a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-fc1f447a" */
    "./05Evaluation.html-439c91fc.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/20BlobStore/06Quiz.html
  "v-28482fe9": () => __vitePreload(() => import(
    /* webpackChunkName: "v-28482fe9" */
    "./06Quiz.html-2080fa36.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/21DistributedSearch/01SystemDesign.html
  "v-697578dc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-697578dc" */
    "./01SystemDesign.html-b44b84e1.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/21DistributedSearch/02Requirements.html
  "v-7769ddd0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7769ddd0" */
    "./02Requirements.html-ef5d08b9.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/21DistributedSearch/03Indexing.html
  "v-578028f7": () => __vitePreload(() => import(
    /* webpackChunkName: "v-578028f7" */
    "./03Indexing.html-edaebe6a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/21DistributedSearch/04Design.html
  "v-74e55aa8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-74e55aa8" */
    "./04Design.html-55bdc9a7.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/21DistributedSearch/05SclingSearchAndIndexing.html
  "v-8ba8a118": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8ba8a118" */
    "./05SclingSearchAndIndexing.html-cada6ab5.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/21DistributedSearch/06Evaluation.html
  "v-e8493db0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-e8493db0" */
    "./06Evaluation.html-732a0bfe.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/23DistributedTaskScheduler/01SystemDesign.html
  "v-1eb76888": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1eb76888" */
    "./01SystemDesign.html-4024c97a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/23DistributedTaskScheduler/02Requirements.html
  "v-4b79e3f8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4b79e3f8" */
    "./02Requirements.html-0ecab054.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/23DistributedTaskScheduler/03Design.html
  "v-69323029": () => __vitePreload(() => import(
    /* webpackChunkName: "v-69323029" */
    "./03Design.html-ae97e23e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/23DistributedTaskScheduler/04DesignConsiderations.html
  "v-77311b1e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-77311b1e" */
    "./04DesignConsiderations.html-c30c5f27.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/23DistributedTaskScheduler/05Evaluation.html
  "v-3acf8e29": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3acf8e29" */
    "./05Evaluation.html-d63960f9.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/22DistributedLogging/01SystemDesign.html
  "v-27fcb824": () => __vitePreload(() => import(
    /* webpackChunkName: "v-27fcb824" */
    "./01SystemDesign.html-82a1462c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/22DistributedLogging/02Introduction.html
  "v-ed5f69d4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ed5f69d4" */
    "./02Introduction.html-211d93ea.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/22DistributedLogging/03Design.html
  "v-74ce0a91": () => __vitePreload(() => import(
    /* webpackChunkName: "v-74ce0a91" */
    "./03Design.html-f513268c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/24ShardedCounters/01SystemDesign.html
  "v-544df0a2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-544df0a2" */
    "./01SystemDesign.html-b000beb0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/24ShardedCounters/02HighLevelDesign.html
  "v-1082d6c4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1082d6c4" */
    "./02HighLevelDesign.html-9e45d053.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/24ShardedCounters/03DetailedDesign.html
  "v-415f8abf": () => __vitePreload(() => import(
    /* webpackChunkName: "v-415f8abf" */
    "./03DetailedDesign.html-e0367fcb.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/24ShardedCounters/04Quiz.html
  "v-61fa2d77": () => __vitePreload(() => import(
    /* webpackChunkName: "v-61fa2d77" */
    "./04Quiz.html-58e7bd64.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/25ConcludingBuildingBlocks/01WrappingUp.html
  "v-3aa109ba": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3aa109ba" */
    "./01WrappingUp.html-e4b79406.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/25ConcludingBuildingBlocks/02RESHADEDApproach.html
  "v-086c64e7": () => __vitePreload(() => import(
    /* webpackChunkName: "v-086c64e7" */
    "./02RESHADEDApproach.html-692f161e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html-1612467f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/
  "v-fffb8e28": () => __vitePreload(() => import(
    /* webpackChunkName: "v-fffb8e28" */
    "./index.html-1f079f5c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/01Introduction/
  "v-77bcb068": () => __vitePreload(() => import(
    /* webpackChunkName: "v-77bcb068" */
    "./index.html-f75fdec0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/02Interviews/
  "v-02eb52e2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-02eb52e2" */
    "./index.html-6e97545c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/03Abstractions/
  "v-afc39cda": () => __vitePreload(() => import(
    /* webpackChunkName: "v-afc39cda" */
    "./index.html-535e7c88.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/04Nonfunctional/
  "v-63c9b5af": () => __vitePreload(() => import(
    /* webpackChunkName: "v-63c9b5af" */
    "./index.html-c1906e0d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/05BackEnvelope/
  "v-77dac4c7": () => __vitePreload(() => import(
    /* webpackChunkName: "v-77dac4c7" */
    "./index.html-2b0b6184.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/06BuildingBlocks/
  "v-6255d07a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6255d07a" */
    "./index.html-1c28f5a8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/07DomainName/
  "v-cf990aa6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-cf990aa6" */
    "./index.html-91863212.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/08LoadBalancers/
  "v-09414c4c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-09414c4c" */
    "./index.html-4f393546.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/09Databases/
  "v-ea20e2a8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ea20e2a8" */
    "./index.html-9f15d0da.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/10KeyvalueStore/
  "v-5af2196b": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5af2196b" */
    "./index.html-3ffd1598.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/11ContentDeliveryNetwork/
  "v-2922f4c2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2922f4c2" */
    "./index.html-4f4843c3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/12Sequencer/
  "v-11e73d6b": () => __vitePreload(() => import(
    /* webpackChunkName: "v-11e73d6b" */
    "./index.html-993b870c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/13DistributedMonitoring/
  "v-20ad781c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-20ad781c" */
    "./index.html-8947d7a6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/14MonitorServersideErrors/
  "v-52f6e2c2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-52f6e2c2" */
    "./index.html-8da1f91f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/15MonitorClientsideErrors/
  "v-76bd1bd0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-76bd1bd0" */
    "./index.html-dbf5efa3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/16DistributeCache/
  "v-447a5c5f": () => __vitePreload(() => import(
    /* webpackChunkName: "v-447a5c5f" */
    "./index.html-ec58f5fd.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/17DistributedMessagingQueue/
  "v-46a8fdf1": () => __vitePreload(() => import(
    /* webpackChunkName: "v-46a8fdf1" */
    "./index.html-5334f296.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/18Pubsub/
  "v-1640aed9": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1640aed9" */
    "./index.html-82f84f8f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/19RateLimiter/
  "v-487c8a8a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-487c8a8a" */
    "./index.html-57e00888.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/20BlobStore/
  "v-2ccf8d96": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2ccf8d96" */
    "./index.html-7d43a534.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/21DistributedSearch/
  "v-751ffeef": () => __vitePreload(() => import(
    /* webpackChunkName: "v-751ffeef" */
    "./index.html-8165580b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/23DistributedTaskScheduler/
  "v-2a594fe2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2a594fe2" */
    "./index.html-73fb84ca.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/22DistributedLogging/
  "v-59fcb4a7": () => __vitePreload(() => import(
    /* webpackChunkName: "v-59fcb4a7" */
    "./index.html-301fe207.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/24ShardedCounters/
  "v-4c2140e9": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4c2140e9" */
    "./index.html-da695e42.js"
  ), true ? [] : void 0).then(({ data }) => data),
  // path: /guide/25ConcludingBuildingBlocks/
  "v-346281c4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-346281c4" */
    "./index.html-3bdfe412.js"
  ), true ? [] : void 0).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/model-system-design/","lang":"en-US","title":"Model System Design","description":"现代系统设计课程","head":[["link",{"rel":"icon","href":"/model-system-design/img/fastRequest.svg"}],["script",{"src":"//at.alicdn.com/t/c/font_2601581_9pz0ama5329.js"}],["script",{"src":"/model-system-design/js/baidu.js"}],["link",{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css"}],["link",{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"}]],"locales":{"/":{"lang":"zh-CN"}}}');
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html-5560a48b.js"
  ), true ? ["assets/index.html-5560a48b.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/about.html
  "v-fc036150": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-fc036150" */
    "./about.html-e8be9c3f.js"
  ), true ? ["assets/about.html-e8be9c3f.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/01Introduction/01Introduction.html
  "v-725da8d4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-725da8d4" */
    "./01Introduction.html-6b3a1006.js"
  ), true ? ["assets/01Introduction.html-6b3a1006.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/01Introduction/02Course.html
  "v-6904c258": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6904c258" */
    "./02Course.html-53b13009.js"
  ), true ? ["assets/02Course.html-53b13009.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/02Interviews/01WhatIsInterview.html
  "v-5db34796": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5db34796" */
    "./01WhatIsInterview.html-4e08aea5.js"
  ), true ? ["assets/01WhatIsInterview.html-4e08aea5.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/02Interviews/02PrepareSuccess.html
  "v-19841e68": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-19841e68" */
    "./02PrepareSuccess.html-bbe6314a.js"
  ), true ? ["assets/02PrepareSuccess.html-bbe6314a.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/02Interviews/03PerformWell.html
  "v-46818948": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-46818948" */
    "./03PerformWell.html-2cf9cfcf.js"
  ), true ? ["assets/03PerformWell.html-2cf9cfcf.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/03Abstractions/01Abstractions.html
  "v-1e0f8810": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1e0f8810" */
    "./01Abstractions.html-e3e1e5d4.js"
  ), true ? ["assets/01Abstractions.html-e3e1e5d4.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/03Abstractions/02RemotePerformCall.html
  "v-81697716": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-81697716" */
    "./02RemotePerformCall.html-df4914b7.js"
  ), true ? ["assets/02RemotePerformCall.html-df4914b7.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/03Abstractions/03Consistent.html
  "v-d4f4285e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-d4f4285e" */
    "./03Consistent.html-fe51a4fc.js"
  ), true ? ["assets/03Consistent.html-fe51a4fc.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/03Abstractions/04ErrorModel.html
  "v-2ddacba1": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2ddacba1" */
    "./04ErrorModel.html-909ceaea.js"
  ), true ? ["assets/04ErrorModel.html-909ceaea.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/04Nonfunctional/01Availability.html
  "v-59b84364": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-59b84364" */
    "./01Availability.html-ccc0247f.js"
  ), true ? ["assets/01Availability.html-ccc0247f.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/04Nonfunctional/02Reliability.html
  "v-24081220": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-24081220" */
    "./02Reliability.html-18e8d928.js"
  ), true ? ["assets/02Reliability.html-18e8d928.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/04Nonfunctional/03Scalability.html
  "v-f8fb7008": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-f8fb7008" */
    "./03Scalability.html-8becaf29.js"
  ), true ? ["assets/03Scalability.html-8becaf29.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/04Nonfunctional/04Maintainability.html
  "v-5abcbb8d": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5abcbb8d" */
    "./04Maintainability.html-bd38550e.js"
  ), true ? ["assets/04Maintainability.html-bd38550e.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/04Nonfunctional/05FaultTolerance.html
  "v-dfcab9cc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-dfcab9cc" */
    "./05FaultTolerance.html-58d093b9.js"
  ), true ? ["assets/05FaultTolerance.html-58d093b9.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/05BackEnvelope/01PutBackEnvelope.html
  "v-35cd218a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-35cd218a" */
    "./01PutBackEnvelope.html-e6944374.js"
  ), true ? ["assets/01PutBackEnvelope.html-e6944374.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/05BackEnvelope/02ResourceEstimation.html
  "v-04c51677": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-04c51677" */
    "./02ResourceEstimation.html-1fd29ce3.js"
  ), true ? ["assets/02ResourceEstimation.html-1fd29ce3.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/06BuildingBlocks/01BuildingBlocks.html
  "v-c08a47ca": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c08a47ca" */
    "./01BuildingBlocks.html-6793dcac.js"
  ), true ? ["assets/01BuildingBlocks.html-6793dcac.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/07DomainName/01DomainNameSystem.html
  "v-09373366": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-09373366" */
    "./01DomainNameSystem.html-6a807911.js"
  ), true ? ["assets/01DomainNameSystem.html-6a807911.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/07DomainName/02DomaimNameSystemWorks.html
  "v-44472103": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-44472103" */
    "./02DomaimNameSystemWorks.html-b5486ac3.js"
  ), true ? ["assets/02DomaimNameSystemWorks.html-b5486ac3.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/08LoadBalancers/01LoadBalancers.html
  "v-c88fa4e2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c88fa4e2" */
    "./01LoadBalancers.html-8b70b791.js"
  ), true ? ["assets/01LoadBalancers.html-8b70b791.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/08LoadBalancers/02GlobalLocalBalancers.html
  "v-7dbc9e54": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7dbc9e54" */
    "./02GlobalLocalBalancers.html-97475106.js"
  ), true ? ["assets/02GlobalLocalBalancers.html-97475106.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/08LoadBalancers/03LoadBalancersDetails.html
  "v-870a4682": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-870a4682" */
    "./03LoadBalancersDetails.html-d30e6dc9.js"
  ), true ? ["assets/03LoadBalancersDetails.html-d30e6dc9.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/09Databases/01Databases.html
  "v-037c66e4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-037c66e4" */
    "./01Databases.html-506251f8.js"
  ), true ? ["assets/01Databases.html-506251f8.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/09Databases/02DatabasesTypes.html
  "v-c753082c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c753082c" */
    "./02DatabasesTypes.html-2788f9cf.js"
  ), true ? ["assets/02DatabasesTypes.html-2788f9cf.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/09Databases/03DataReplication.html
  "v-35edf8a6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-35edf8a6" */
    "./03DataReplication.html-136d5e04.js"
  ), true ? ["assets/03DataReplication.html-136d5e04.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/09Databases/04DataPartitioning.html
  "v-3c006672": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3c006672" */
    "./04DataPartitioning.html-a667cefa.js"
  ), true ? ["assets/04DataPartitioning.html-a667cefa.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/09Databases/05TradeOffsDatabases.html
  "v-06c04b18": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-06c04b18" */
    "./05TradeOffsDatabases.html-7f0fc04a.js"
  ), true ? ["assets/05TradeOffsDatabases.html-7f0fc04a.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/10KeyvalueStore/01KeyValueStore.html
  "v-71fd6b54": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-71fd6b54" */
    "./01KeyValueStore.html-fbdb661f.js"
  ), true ? ["assets/01KeyValueStore.html-fbdb661f.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/10KeyvalueStore/02DesignKeyValueStore.html
  "v-7375d8b5": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7375d8b5" */
    "./02DesignKeyValueStore.html-def72c41.js"
  ), true ? ["assets/02DesignKeyValueStore.html-def72c41.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/10KeyvalueStore/03ScalabilityReplication.html
  "v-ae759124": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ae759124" */
    "./03ScalabilityReplication.html-28fc410f.js"
  ), true ? ["assets/03ScalabilityReplication.html-28fc410f.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/10KeyvalueStore/04VersioningDataAchievingConfigurability.html
  "v-66159619": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-66159619" */
    "./04VersioningDataAchievingConfigurability.html-0658571d.js"
  ), true ? ["assets/04VersioningDataAchievingConfigurability.html-0658571d.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/10KeyvalueStore/05FaultToleranceFailureDetection.html
  "v-01a95783": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-01a95783" */
    "./05FaultToleranceFailureDetection.html-02baf025.js"
  ), true ? ["assets/05FaultToleranceFailureDetection.html-02baf025.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/11ContentDeliveryNetwork/01ContentDeliveryNetwork.html
  "v-349e6b55": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-349e6b55" */
    "./01ContentDeliveryNetwork.html-4bf652c2.js"
  ), true ? ["assets/01ContentDeliveryNetwork.html-4bf652c2.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/11ContentDeliveryNetwork/02IntroductionCDN.html
  "v-a068d12c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-a068d12c" */
    "./02IntroductionCDN.html-97a745ce.js"
  ), true ? ["assets/02IntroductionCDN.html-97a745ce.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/11ContentDeliveryNetwork/03DesignCDN.html
  "v-4298a24f": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4298a24f" */
    "./03DesignCDN.html-8205512a.js"
  ), true ? ["assets/03DesignCDN.html-8205512a.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/11ContentDeliveryNetwork/04InvestigationCDNPart1.html
  "v-63f1600c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-63f1600c" */
    "./04InvestigationCDNPart1.html-eb4a0b81.js"
  ), true ? ["assets/04InvestigationCDNPart1.html-eb4a0b81.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/11ContentDeliveryNetwork/05InvestigationCDNPart2.html
  "v-c2116d28": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c2116d28" */
    "./05InvestigationCDNPart2.html-165e9351.js"
  ), true ? ["assets/05InvestigationCDNPart2.html-165e9351.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/11ContentDeliveryNetwork/06EvaluationCDNDesign.html
  "v-5db8879c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5db8879c" */
    "./06EvaluationCDNDesign.html-dcc189ef.js"
  ), true ? ["assets/06EvaluationCDNDesign.html-dcc189ef.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/11ContentDeliveryNetwork/07QuizOnCDNDesign.html
  "v-838320ea": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-838320ea" */
    "./07QuizOnCDNDesign.html-d5bd77a6.js"
  ), true ? ["assets/07QuizOnCDNDesign.html-d5bd77a6.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/12Sequencer/01SystemDesignSequencer.html
  "v-c07322be": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c07322be" */
    "./01SystemDesignSequencer.html-1c543618.js"
  ), true ? ["assets/01SystemDesignSequencer.html-1c543618.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/12Sequencer/02DesignUniqueIDGenerator.html
  "v-db59f746": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-db59f746" */
    "./02DesignUniqueIDGenerator.html-8e069d41.js"
  ), true ? ["assets/02DesignUniqueIDGenerator.html-8e069d41.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/12Sequencer/03UniqueIDsCausality.html
  "v-a11609aa": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-a11609aa" */
    "./03UniqueIDsCausality.html-7f2fb3dd.js"
  ), true ? ["assets/03UniqueIDsCausality.html-7f2fb3dd.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/13DistributedMonitoring/01DistributedMonitoring.html
  "v-99acaf7e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-99acaf7e" */
    "./01DistributedMonitoring.html-b82ab442.js"
  ), true ? ["assets/01DistributedMonitoring.html-b82ab442.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/13DistributedMonitoring/02IntroductionDistributedMonitoring.html
  "v-0e8622bc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0e8622bc" */
    "./02IntroductionDistributedMonitoring.html-3a0b27cc.js"
  ), true ? ["assets/02IntroductionDistributedMonitoring.html-3a0b27cc.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/13DistributedMonitoring/03PrerequisitesMonitoringSystem.html
  "v-40226b0c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-40226b0c" */
    "./03PrerequisitesMonitoringSystem.html-c2a2074e.js"
  ), true ? ["assets/03PrerequisitesMonitoringSystem.html-c2a2074e.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/14MonitorServersideErrors/01DesignMonitoringSystem.html
  "v-bef102f8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-bef102f8" */
    "./01DesignMonitoringSystem.html-6bd4d3ae.js"
  ), true ? ["assets/01DesignMonitoringSystem.html-6bd4d3ae.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/14MonitorServersideErrors/02DetailedDesignMonitoringSystem.html
  "v-648647da": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-648647da" */
    "./02DetailedDesignMonitoringSystem.html-5c059174.js"
  ), true ? ["assets/02DetailedDesignMonitoringSystem.html-5c059174.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/14MonitorServersideErrors/03VisualizeDataMonitoringSystem.html
  "v-3b91ec34": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3b91ec34" */
    "./03VisualizeDataMonitoringSystem.html-6c2c34bd.js"
  ), true ? ["assets/03VisualizeDataMonitoringSystem.html-6c2c34bd.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/15MonitorClientsideErrors/01ClientSideErrors.html
  "v-afe132da": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-afe132da" */
    "./01ClientSideErrors.html-cf03dc71.js"
  ), true ? ["assets/01ClientSideErrors.html-cf03dc71.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/15MonitorClientsideErrors/02Design.html
  "v-448e713e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-448e713e" */
    "./02Design.html-51072afb.js"
  ), true ? ["assets/02Design.html-51072afb.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/16DistributeCache/01SystemDesign.html
  "v-8cec7528": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8cec7528" */
    "./01SystemDesign.html-f06fab3f.js"
  ), true ? ["assets/01SystemDesign.html-f06fab3f.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/16DistributeCache/02BackGround.html
  "v-000c5b6a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-000c5b6a" */
    "./02BackGround.html-ac67eb58.js"
  ), true ? ["assets/02BackGround.html-ac67eb58.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/16DistributeCache/03HighLevelDesign.html
  "v-6a89698a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6a89698a" */
    "./03HighLevelDesign.html-acb75148.js"
  ), true ? ["assets/03HighLevelDesign.html-acb75148.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/16DistributeCache/04DetailedDesign.html
  "v-2e9b2b68": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2e9b2b68" */
    "./04DetailedDesign.html-cbf3c9e5.js"
  ), true ? ["assets/04DetailedDesign.html-cbf3c9e5.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/16DistributeCache/05Evaluation.html
  "v-3927b3d9": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3927b3d9" */
    "./05Evaluation.html-9aa04559.js"
  ), true ? ["assets/05Evaluation.html-9aa04559.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/16DistributeCache/06MemcachedVersusRedis.html
  "v-482c88de": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-482c88de" */
    "./06MemcachedVersusRedis.html-7b673d03.js"
  ), true ? ["assets/06MemcachedVersusRedis.html-7b673d03.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/17DistributedMessagingQueue/01SystemDesign.html
  "v-428c72cc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-428c72cc" */
    "./01SystemDesign.html-30b45f74.js"
  ), true ? ["assets/01SystemDesign.html-30b45f74.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/17DistributedMessagingQueue/02Requirements.html
  "v-398f5ed6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-398f5ed6" */
    "./02Requirements.html-2b492eeb.js"
  ), true ? ["assets/02Requirements.html-2b492eeb.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/17DistributedMessagingQueue/03Considerations.html
  "v-62e9cbce": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-62e9cbce" */
    "./03Considerations.html-67f2a44a.js"
  ), true ? ["assets/03Considerations.html-67f2a44a.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/17DistributedMessagingQueue/04DesignPart1.html
  "v-0878b1a4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0878b1a4" */
    "./04DesignPart1.html-b270414b.js"
  ), true ? ["assets/04DesignPart1.html-b270414b.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/17DistributedMessagingQueue/05DesignPart2.html
  "v-4e225dce": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4e225dce" */
    "./05DesignPart2.html-c5d05e72.js"
  ), true ? ["assets/05DesignPart2.html-c5d05e72.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/17DistributedMessagingQueue/06Evaluation.html
  "v-5697f334": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5697f334" */
    "./06Evaluation.html-96a25c65.js"
  ), true ? ["assets/06Evaluation.html-96a25c65.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/17DistributedMessagingQueue/07Quiz.html
  "v-c2d86268": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c2d86268" */
    "./07Quiz.html-adee3dc5.js"
  ), true ? ["assets/07Quiz.html-adee3dc5.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/18Pubsub/01SystemDesign.html
  "v-4fce5cb2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4fce5cb2" */
    "./01SystemDesign.html-80385c67.js"
  ), true ? ["assets/01SystemDesign.html-80385c67.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/18Pubsub/02Introduction.html
  "v-9dbc20b8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-9dbc20b8" */
    "./02Introduction.html-6f78b8f1.js"
  ), true ? ["assets/02Introduction.html-6f78b8f1.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/18Pubsub/03Design.html
  "v-9cbc9cc2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-9cbc9cc2" */
    "./03Design.html-eb98d6c5.js"
  ), true ? ["assets/03Design.html-eb98d6c5.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/19RateLimiter/01SystemDesign.html
  "v-3c7a9ce0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3c7a9ce0" */
    "./01SystemDesign.html-3e9c5d99.js"
  ), true ? ["assets/01SystemDesign.html-3e9c5d99.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/19RateLimiter/02Requirements.html
  "v-3c9849cc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3c9849cc" */
    "./02Requirements.html-96511930.js"
  ), true ? ["assets/02Requirements.html-96511930.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/19RateLimiter/03Design.html
  "v-d992f606": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-d992f606" */
    "./03Design.html-e4329b6c.js"
  ), true ? ["assets/03Design.html-e4329b6c.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/19RateLimiter/04RateLimiterAlgorithms.html
  "v-657f25e8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-657f25e8" */
    "./04RateLimiterAlgorithms.html-1c4301d1.js"
  ), true ? ["assets/04RateLimiterAlgorithms.html-1c4301d1.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/19RateLimiter/05Quiz.html
  "v-09872d84": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-09872d84" */
    "./05Quiz.html-97f4e6b2.js"
  ), true ? ["assets/05Quiz.html-97f4e6b2.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/20BlobStore/01SystemDesign.html
  "v-1a60c654": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1a60c654" */
    "./01SystemDesign.html-16d3dfc2.js"
  ), true ? ["assets/01SystemDesign.html-16d3dfc2.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/20BlobStore/02Requirements.html
  "v-4da53512": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4da53512" */
    "./02Requirements.html-450c0a24.js"
  ), true ? ["assets/02Requirements.html-450c0a24.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/20BlobStore/03Design.html
  "v-03e2467a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-03e2467a" */
    "./03Design.html-1775559f.js"
  ), true ? ["assets/03Design.html-1775559f.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/20BlobStore/04DesignConsiderations.html
  "v-21a5098b": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-21a5098b" */
    "./04DesignConsiderations.html-e69f13f7.js"
  ), true ? ["assets/04DesignConsiderations.html-e69f13f7.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/20BlobStore/05Evaluation.html
  "v-fc1f447a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-fc1f447a" */
    "./05Evaluation.html-44327fa7.js"
  ), true ? ["assets/05Evaluation.html-44327fa7.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/20BlobStore/06Quiz.html
  "v-28482fe9": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-28482fe9" */
    "./06Quiz.html-547d0927.js"
  ), true ? ["assets/06Quiz.html-547d0927.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/21DistributedSearch/01SystemDesign.html
  "v-697578dc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-697578dc" */
    "./01SystemDesign.html-09cd65df.js"
  ), true ? ["assets/01SystemDesign.html-09cd65df.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/21DistributedSearch/02Requirements.html
  "v-7769ddd0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7769ddd0" */
    "./02Requirements.html-f59a112b.js"
  ), true ? ["assets/02Requirements.html-f59a112b.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/21DistributedSearch/03Indexing.html
  "v-578028f7": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-578028f7" */
    "./03Indexing.html-72495d85.js"
  ), true ? ["assets/03Indexing.html-72495d85.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/21DistributedSearch/04Design.html
  "v-74e55aa8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-74e55aa8" */
    "./04Design.html-2bf72770.js"
  ), true ? ["assets/04Design.html-2bf72770.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/21DistributedSearch/05SclingSearchAndIndexing.html
  "v-8ba8a118": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8ba8a118" */
    "./05SclingSearchAndIndexing.html-38ee4110.js"
  ), true ? ["assets/05SclingSearchAndIndexing.html-38ee4110.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/21DistributedSearch/06Evaluation.html
  "v-e8493db0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-e8493db0" */
    "./06Evaluation.html-2883fa86.js"
  ), true ? ["assets/06Evaluation.html-2883fa86.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/23DistributedTaskScheduler/01SystemDesign.html
  "v-1eb76888": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1eb76888" */
    "./01SystemDesign.html-260c7d05.js"
  ), true ? ["assets/01SystemDesign.html-260c7d05.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/23DistributedTaskScheduler/02Requirements.html
  "v-4b79e3f8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4b79e3f8" */
    "./02Requirements.html-5a7dd987.js"
  ), true ? ["assets/02Requirements.html-5a7dd987.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/23DistributedTaskScheduler/03Design.html
  "v-69323029": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-69323029" */
    "./03Design.html-63a64a77.js"
  ), true ? ["assets/03Design.html-63a64a77.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/23DistributedTaskScheduler/04DesignConsiderations.html
  "v-77311b1e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-77311b1e" */
    "./04DesignConsiderations.html-c84fa184.js"
  ), true ? ["assets/04DesignConsiderations.html-c84fa184.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/23DistributedTaskScheduler/05Evaluation.html
  "v-3acf8e29": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3acf8e29" */
    "./05Evaluation.html-f69df393.js"
  ), true ? ["assets/05Evaluation.html-f69df393.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/22DistributedLogging/01SystemDesign.html
  "v-27fcb824": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-27fcb824" */
    "./01SystemDesign.html-4e44d6a9.js"
  ), true ? ["assets/01SystemDesign.html-4e44d6a9.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/22DistributedLogging/02Introduction.html
  "v-ed5f69d4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ed5f69d4" */
    "./02Introduction.html-d9450174.js"
  ), true ? ["assets/02Introduction.html-d9450174.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/22DistributedLogging/03Design.html
  "v-74ce0a91": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-74ce0a91" */
    "./03Design.html-32abb987.js"
  ), true ? ["assets/03Design.html-32abb987.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/24ShardedCounters/01SystemDesign.html
  "v-544df0a2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-544df0a2" */
    "./01SystemDesign.html-8c1778c3.js"
  ), true ? ["assets/01SystemDesign.html-8c1778c3.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/24ShardedCounters/02HighLevelDesign.html
  "v-1082d6c4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1082d6c4" */
    "./02HighLevelDesign.html-1a95a709.js"
  ), true ? ["assets/02HighLevelDesign.html-1a95a709.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/24ShardedCounters/03DetailedDesign.html
  "v-415f8abf": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-415f8abf" */
    "./03DetailedDesign.html-5eabbfc0.js"
  ), true ? ["assets/03DetailedDesign.html-5eabbfc0.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/24ShardedCounters/04Quiz.html
  "v-61fa2d77": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-61fa2d77" */
    "./04Quiz.html-07976483.js"
  ), true ? ["assets/04Quiz.html-07976483.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/25ConcludingBuildingBlocks/01WrappingUp.html
  "v-3aa109ba": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3aa109ba" */
    "./01WrappingUp.html-95cc1d2c.js"
  ), true ? ["assets/01WrappingUp.html-95cc1d2c.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/25ConcludingBuildingBlocks/02RESHADEDApproach.html
  "v-086c64e7": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-086c64e7" */
    "./02RESHADEDApproach.html-f88744ee.js"
  ), true ? ["assets/02RESHADEDApproach.html-f88744ee.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html-a65ce28d.js"
  ), true ? ["assets/404.html-a65ce28d.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/
  "v-fffb8e28": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-fffb8e28" */
    "./index.html-b91bd9c1.js"
  ), true ? ["assets/index.html-b91bd9c1.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/01Introduction/
  "v-77bcb068": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-77bcb068" */
    "./index.html-1120a479.js"
  ), true ? ["assets/index.html-1120a479.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/02Interviews/
  "v-02eb52e2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-02eb52e2" */
    "./index.html-18fcb1ae.js"
  ), true ? ["assets/index.html-18fcb1ae.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/03Abstractions/
  "v-afc39cda": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-afc39cda" */
    "./index.html-38093882.js"
  ), true ? ["assets/index.html-38093882.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/04Nonfunctional/
  "v-63c9b5af": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-63c9b5af" */
    "./index.html-899b44fe.js"
  ), true ? ["assets/index.html-899b44fe.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/05BackEnvelope/
  "v-77dac4c7": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-77dac4c7" */
    "./index.html-340d02c2.js"
  ), true ? ["assets/index.html-340d02c2.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/06BuildingBlocks/
  "v-6255d07a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6255d07a" */
    "./index.html-d02c222c.js"
  ), true ? ["assets/index.html-d02c222c.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/07DomainName/
  "v-cf990aa6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-cf990aa6" */
    "./index.html-349ee334.js"
  ), true ? ["assets/index.html-349ee334.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/08LoadBalancers/
  "v-09414c4c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-09414c4c" */
    "./index.html-d73a9b2d.js"
  ), true ? ["assets/index.html-d73a9b2d.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/09Databases/
  "v-ea20e2a8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ea20e2a8" */
    "./index.html-43969270.js"
  ), true ? ["assets/index.html-43969270.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/10KeyvalueStore/
  "v-5af2196b": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5af2196b" */
    "./index.html-f03b7e0b.js"
  ), true ? ["assets/index.html-f03b7e0b.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/11ContentDeliveryNetwork/
  "v-2922f4c2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2922f4c2" */
    "./index.html-05efe36b.js"
  ), true ? ["assets/index.html-05efe36b.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/12Sequencer/
  "v-11e73d6b": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-11e73d6b" */
    "./index.html-032d0d68.js"
  ), true ? ["assets/index.html-032d0d68.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/13DistributedMonitoring/
  "v-20ad781c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-20ad781c" */
    "./index.html-ffa9a3f9.js"
  ), true ? ["assets/index.html-ffa9a3f9.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/14MonitorServersideErrors/
  "v-52f6e2c2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-52f6e2c2" */
    "./index.html-3d9f39ff.js"
  ), true ? ["assets/index.html-3d9f39ff.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/15MonitorClientsideErrors/
  "v-76bd1bd0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-76bd1bd0" */
    "./index.html-5b3ae497.js"
  ), true ? ["assets/index.html-5b3ae497.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/16DistributeCache/
  "v-447a5c5f": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-447a5c5f" */
    "./index.html-a96065d9.js"
  ), true ? ["assets/index.html-a96065d9.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/17DistributedMessagingQueue/
  "v-46a8fdf1": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-46a8fdf1" */
    "./index.html-1266527c.js"
  ), true ? ["assets/index.html-1266527c.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/18Pubsub/
  "v-1640aed9": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1640aed9" */
    "./index.html-beba8345.js"
  ), true ? ["assets/index.html-beba8345.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/19RateLimiter/
  "v-487c8a8a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-487c8a8a" */
    "./index.html-3148f304.js"
  ), true ? ["assets/index.html-3148f304.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/20BlobStore/
  "v-2ccf8d96": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2ccf8d96" */
    "./index.html-4d752d1d.js"
  ), true ? ["assets/index.html-4d752d1d.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/21DistributedSearch/
  "v-751ffeef": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-751ffeef" */
    "./index.html-a7f923ef.js"
  ), true ? ["assets/index.html-a7f923ef.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/23DistributedTaskScheduler/
  "v-2a594fe2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2a594fe2" */
    "./index.html-fd36a4d1.js"
  ), true ? ["assets/index.html-fd36a4d1.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/22DistributedLogging/
  "v-59fcb4a7": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-59fcb4a7" */
    "./index.html-f6962dbd.js"
  ), true ? ["assets/index.html-f6962dbd.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/24ShardedCounters/
  "v-4c2140e9": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4c2140e9" */
    "./index.html-45cb7420.js"
  ), true ? ["assets/index.html-45cb7420.js","assets/framework-03ffdf83.js"] : void 0)),
  // path: /guide/25ConcludingBuildingBlocks/
  "v-346281c4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-346281c4" */
    "./index.html-cbcf2709.js"
  ), true ? ["assets/index.html-cbcf2709.js","assets/framework-03ffdf83.js"] : void 0))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var updateHeadSymbol = Symbol(
  ""
);
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Resolve page data according to page key
   */
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  /**
   * Resolve page frontmatter from page data
   */
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString$1(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (page2, siteLocale) => [page2.title, siteLocale.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (page2) => page2.lang || "en",
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (page2, layouts) => {
    let layoutName;
    if (page2.path) {
      const frontmatterLayout = page2.frontmatter.layout;
      if (isString$1(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page2 = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page2.value.key]
    );
    return () => pageComponent.value ? (
      // use page component
      h$1(pageComponent.value)
    ) : (
      // fallback content
      h$1(
        "div",
        "404 Not Found"
      )
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/model-system-design/"}${removeLeadingSlash(url)}`;
};
const hopeInject = "";
const clientConfig0 = {};
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new u32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j = b2[i2]; j < b2[i2 + 1]; ++j) {
      r2[j] = j - b2[i2] << 5 | i2;
    }
  }
  return [b2, r2];
};
var _a$1 = freb(fleb, 2), fl = _a$1[0], revfl = _a$1[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0];
var rev = new u16(32768);
for (var i$2 = 0; i$2 < 32768; ++i$2) {
  var x$2 = (i$2 & 43690) >>> 1 | (i$2 & 21845) << 1;
  x$2 = (x$2 & 52428) >>> 2 | (x$2 & 13107) << 2;
  x$2 = (x$2 & 61680) >>> 4 | (x$2 & 3855) << 4;
  rev[i$2] = ((x$2 & 65280) >>> 8 | (x$2 & 255) << 8) >>> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 0; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v = le[cd[i2] - 1]++ << r_1;
        for (var m2 = v | (1 << r_1) - 1; v <= m2; ++v) {
          co[rev[v] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >>> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$2 = 0; i$2 < 144; ++i$2)
  flt[i$2] = 8;
for (var i$2 = 144; i$2 < 256; ++i$2)
  flt[i$2] = 9;
for (var i$2 = 256; i$2 < 280; ++i$2)
  flt[i$2] = 7;
for (var i$2 = 280; i$2 < 288; ++i$2)
  flt[i$2] = 8;
var fdt = new u8(32);
for (var i$2 = 0; i$2 < 32; ++i$2)
  fdt[i$2] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d2, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d2, p2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v.length)
    e2 = v.length;
  var n2 = new (v.BYTES_PER_ELEMENT == 2 ? u16 : v.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e2 - s2);
  n2.set(v.subarray(s2, e2));
  return n2;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt2) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt2)
    throw e2;
  return e2;
};
var inflt = function(dat, buf, st2) {
  var sl = dat.length;
  if (!sl || st2 && st2.f && !st2.l)
    return buf || new u8(0);
  var noBuf = !buf || st2;
  var noSt = !st2 || st2.i;
  if (!st2)
    st2 = {};
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st2.f || 0, pos = st2.p || 0, bt2 = st2.b || 0, lm = st2.l, dm = st2.d, lbt = st2.m, dbt = st2.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type2 = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type2) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + l2);
        buf.set(dat.subarray(s2, t2), bt2);
        st2.b = bt2 += l2, st2.p = pos = t2 * 8, st2.f = final;
        continue;
      } else if (type2 == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type2 == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >>> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt2 = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt2);
        dbt = max(dt);
        lm = hMap(lt2, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt2 + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >>> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt2++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl[i2];
          pos += b2;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >>> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + 131072);
        var end = bt2 + add;
        for (; bt2 < end; bt2 += 4) {
          buf[bt2] = buf[bt2 - dt];
          buf[bt2 + 1] = buf[bt2 + 1 - dt];
          buf[bt2 + 2] = buf[bt2 + 2 - dt];
          buf[bt2 + 3] = buf[bt2 + 3 - dt];
        }
        bt2 = end;
      }
    }
    st2.l = lm, st2.p = lpos, st2.b = bt2, st2.f = final;
    if (lm)
      final = 1, st2.m = lbt, st2.d = dm, st2.n = dbt;
  } while (!final);
  return bt2 == buf.length ? buf : slc(buf, 0, bt2);
};
var et$1 = /* @__PURE__ */ new u8(0);
var zlv = function(d2) {
  if ((d2[0] & 15) != 8 || d2[0] >>> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if (d2[1] & 32)
    err(6, "invalid zlib data: preset dictionaries not supported");
};
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
var te$1 = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et$1, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return [r2, slc(d2, i2 - 1)];
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te$1)
    return te$1.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v) {
    ar[ai++] = v;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td)
    return td.decode(dat);
  else {
    var _a2 = dutf8(dat), out = _a2[0], ext = _a2[1];
    if (ext.length)
      err(8);
    return out;
  }
}
const G = ({ name: t2 = "", color: n2 = "currentColor" }, { slots: e2 }) => {
  var i2;
  return h$1("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${t2}-icon`], viewBox: "0 0 1024 1024", fill: n2, "aria-label": `${t2} icon` }, (i2 = e2.default) == null ? void 0 : i2.call(e2));
};
G.displayName = "IconBase";
const vt = ({ size: t2 = 48, stroke: n2 = 4, wrapper: e2 = true, height: i2 = 2 * t2 }) => {
  const h2 = h$1("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: t2, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h$1("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h$1("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": n2, "stroke-linecap": "round" }, [h$1("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h$1("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return e2 ? h$1("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${i2}px` }, h2) : h2;
};
vt.displayName = "LoadingIcon";
const Rt = (t2, { slots: n2 }) => {
  var e2;
  return ((e2 = n2.default) == null ? void 0 : e2.call(n2)) || null;
}, gt = () => h$1(G, { name: "github" }, () => h$1("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
gt.displayName = "GitHubIcon";
const $t = () => h$1(G, { name: "gitlab" }, () => h$1("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
$t.displayName = "GitlabIcon";
const yt = () => h$1(G, { name: "gitee" }, () => h$1("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
yt.displayName = "GiteeIcon";
const bt = () => h$1(G, { name: "bitbucket" }, () => h$1("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
bt.displayName = "BitbucketIcon";
const wt = () => h$1(G, { name: "source" }, () => h$1("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
wt.displayName = "SourceIcon";
const et = Array.isArray, Gt = (t2) => typeof t2 == "function", P$1 = (t2) => typeof t2 == "string";
var Ot = (t2) => /^(https?:)?\/\//.test(t2), J = (t2) => Object.prototype.toString.call(t2) === "[object Object]";
const Vt = (t2, n2) => {
  const e2 = n2 ? n2._instance : getCurrentInstance();
  return J(e2 == null ? void 0 : e2.appContext.components) && (t2 in e2.appContext.components || camelize(t2) in e2.appContext.components || capitalize(camelize(t2)) in e2.appContext.components);
};
function Ft(t2) {
  return t2;
}
function Zt(t2, n2 = true) {
  getCurrentInstance() ? onMounted(t2) : n2 ? t2() : nextTick(t2);
}
function Qt(t2, n2 = false) {
  const e2 = ref(), i2 = () => e2.value = !!t2();
  return i2(), Zt(i2, n2), e2;
}
const St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mt = "__vueuse_ssr_handlers__";
St[Mt] = St[Mt] || {};
var Dt;
(function(t2) {
  t2.UP = "UP", t2.RIGHT = "RIGHT", t2.DOWN = "DOWN", t2.LEFT = "LEFT", t2.NONE = "NONE";
})(Dt || (Dt = {}));
var Jt = Object.defineProperty, xt = Object.getOwnPropertySymbols, qt = Object.prototype.hasOwnProperty, Kt = Object.prototype.propertyIsEnumerable, It = (t2, n2, e2) => n2 in t2 ? Jt(t2, n2, { enumerable: true, configurable: true, writable: true, value: e2 }) : t2[n2] = e2, Xt = (t2, n2) => {
  for (var e2 in n2 || (n2 = {}))
    qt.call(n2, e2) && It(t2, e2, n2[e2]);
  if (xt)
    for (var e2 of xt(n2))
      Kt.call(n2, e2) && It(t2, e2, n2[e2]);
  return t2;
};
const te = { easeInSine: [0.12, 0, 0.39, 0], easeOutSine: [0.61, 1, 0.88, 1], easeInOutSine: [0.37, 0, 0.63, 1], easeInQuad: [0.11, 0, 0.5, 0], easeOutQuad: [0.5, 1, 0.89, 1], easeInOutQuad: [0.45, 0, 0.55, 1], easeInCubic: [0.32, 0, 0.67, 0], easeOutCubic: [0.33, 1, 0.68, 1], easeInOutCubic: [0.65, 0, 0.35, 1], easeInQuart: [0.5, 0, 0.75, 0], easeOutQuart: [0.25, 1, 0.5, 1], easeInOutQuart: [0.76, 0, 0.24, 1], easeInQuint: [0.64, 0, 0.78, 0], easeOutQuint: [0.22, 1, 0.36, 1], easeInOutQuint: [0.83, 0, 0.17, 1], easeInExpo: [0.7, 0, 0.84, 0], easeOutExpo: [0.16, 1, 0.3, 1], easeInOutExpo: [0.87, 0, 0.13, 1], easeInCirc: [0.55, 0, 1, 0.45], easeOutCirc: [0, 0.55, 0.45, 1], easeInOutCirc: [0.85, 0, 0.15, 1], easeInBack: [0.36, 0, 0.66, -0.56], easeOutBack: [0.34, 1.56, 0.64, 1], easeInOutBack: [0.68, -0.6, 0.32, 1.6] };
Xt({ linear: Ft }, te);
const Et = () => Qt(() => typeof window < "u" && window.navigator && "userAgent" in window.navigator), ee = () => {
  const t2 = Et();
  return computed(() => t2.value && /\b(?:Android|iPhone)/i.test(navigator.userAgent));
}, ne = (t2) => {
  const n2 = useRouteLocale();
  return computed(() => t2[n2.value]);
}, re = (t2) => /\b(?:Android|iPhone)/i.test(t2), fe = (t2, n2) => {
  let e2 = 1;
  for (let i2 = 0; i2 < t2.length; i2++)
    e2 += t2.charCodeAt(i2), e2 += e2 << 10, e2 ^= e2 >> 6;
  return e2 += e2 << 3, e2 ^= e2 >> 11, e2 % n2;
};
var K$1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nt = {}, me = { get exports() {
  return nt;
}, set exports(t2) {
  nt = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$1, function() {
    var e2 = 1e3, i2 = 6e4, h2 = 36e5, b2 = "millisecond", y2 = "second", w2 = "minute", p2 = "hour", S2 = "day", k = "week", x2 = "month", u2 = "quarter", l2 = "year", g2 = "date", r2 = "Invalid Date", c2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, I2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(d2) {
      var a2 = ["th", "st", "nd", "rd"], s2 = d2 % 100;
      return "[" + d2 + (a2[(s2 - 20) % 10] || a2[s2] || a2[0]) + "]";
    } }, E = function(d2, a2, s2) {
      var f2 = String(d2);
      return !f2 || f2.length >= a2 ? d2 : "" + Array(a2 + 1 - f2.length).join(s2) + d2;
    }, U = { s: E, z: function(d2) {
      var a2 = -d2.utcOffset(), s2 = Math.abs(a2), f2 = Math.floor(s2 / 60), o2 = s2 % 60;
      return (a2 <= 0 ? "+" : "-") + E(f2, 2, "0") + ":" + E(o2, 2, "0");
    }, m: function d2(a2, s2) {
      if (a2.date() < s2.date())
        return -d2(s2, a2);
      var f2 = 12 * (s2.year() - a2.year()) + (s2.month() - a2.month()), o2 = a2.clone().add(f2, x2), v = s2 - o2 < 0, m2 = a2.clone().add(f2 + (v ? -1 : 1), x2);
      return +(-(f2 + (s2 - o2) / (v ? o2 - m2 : m2 - o2)) || 0);
    }, a: function(d2) {
      return d2 < 0 ? Math.ceil(d2) || 0 : Math.floor(d2);
    }, p: function(d2) {
      return { M: x2, y: l2, w: k, d: S2, D: g2, h: p2, m: w2, s: y2, ms: b2, Q: u2 }[d2] || String(d2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(d2) {
      return d2 === void 0;
    } }, _ = "en", z2 = {};
    z2[_] = M2;
    var H2 = function(d2) {
      return d2 instanceof A2;
    }, j = function d2(a2, s2, f2) {
      var o2;
      if (!a2)
        return _;
      if (typeof a2 == "string") {
        var v = a2.toLowerCase();
        z2[v] && (o2 = v), s2 && (z2[v] = s2, o2 = v);
        var m2 = a2.split("-");
        if (!o2 && m2.length > 1)
          return d2(m2[0]);
      } else {
        var D2 = a2.name;
        z2[D2] = a2, o2 = D2;
      }
      return !f2 && o2 && (_ = o2), o2 || !f2 && _;
    }, O2 = function(d2, a2) {
      if (H2(d2))
        return d2.clone();
      var s2 = typeof a2 == "object" ? a2 : {};
      return s2.date = d2, s2.args = arguments, new A2(s2);
    }, $ = U;
    $.l = j, $.i = H2, $.w = function(d2, a2) {
      return O2(d2, { locale: a2.$L, utc: a2.$u, x: a2.$x, $offset: a2.$offset });
    };
    var A2 = function() {
      function d2(s2) {
        this.$L = j(s2.locale, null, true), this.parse(s2);
      }
      var a2 = d2.prototype;
      return a2.parse = function(s2) {
        this.$d = function(f2) {
          var o2 = f2.date, v = f2.utc;
          if (o2 === null)
            return new Date(NaN);
          if ($.u(o2))
            return new Date();
          if (o2 instanceof Date)
            return new Date(o2);
          if (typeof o2 == "string" && !/Z$/i.test(o2)) {
            var m2 = o2.match(c2);
            if (m2) {
              var D2 = m2[2] - 1 || 0, C2 = (m2[7] || "0").substring(0, 3);
              return v ? new Date(Date.UTC(m2[1], D2, m2[3] || 1, m2[4] || 0, m2[5] || 0, m2[6] || 0, C2)) : new Date(m2[1], D2, m2[3] || 1, m2[4] || 0, m2[5] || 0, m2[6] || 0, C2);
            }
          }
          return new Date(o2);
        }(s2), this.$x = s2.x || {}, this.init();
      }, a2.init = function() {
        var s2 = this.$d;
        this.$y = s2.getFullYear(), this.$M = s2.getMonth(), this.$D = s2.getDate(), this.$W = s2.getDay(), this.$H = s2.getHours(), this.$m = s2.getMinutes(), this.$s = s2.getSeconds(), this.$ms = s2.getMilliseconds();
      }, a2.$utils = function() {
        return $;
      }, a2.isValid = function() {
        return this.$d.toString() !== r2;
      }, a2.isSame = function(s2, f2) {
        var o2 = O2(s2);
        return this.startOf(f2) <= o2 && o2 <= this.endOf(f2);
      }, a2.isAfter = function(s2, f2) {
        return O2(s2) < this.startOf(f2);
      }, a2.isBefore = function(s2, f2) {
        return this.endOf(f2) < O2(s2);
      }, a2.$g = function(s2, f2, o2) {
        return $.u(s2) ? this[f2] : this.set(o2, s2);
      }, a2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, a2.valueOf = function() {
        return this.$d.getTime();
      }, a2.startOf = function(s2, f2) {
        var o2 = this, v = !!$.u(f2) || f2, m2 = $.p(s2), D2 = function(F2, Y2) {
          var R = $.w(o2.$u ? Date.UTC(o2.$y, Y2, F2) : new Date(o2.$y, Y2, F2), o2);
          return v ? R : R.endOf(S2);
        }, C2 = function(F2, Y2) {
          return $.w(o2.toDate()[F2].apply(o2.toDate("s"), (v ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y2)), o2);
        }, T2 = this.$W, N = this.$M, B = this.$D, W = "set" + (this.$u ? "UTC" : "");
        switch (m2) {
          case l2:
            return v ? D2(1, 0) : D2(31, 11);
          case x2:
            return v ? D2(1, N) : D2(0, N + 1);
          case k:
            var Z = this.$locale().weekStart || 0, Q = (T2 < Z ? T2 + 7 : T2) - Z;
            return D2(v ? B - Q : B + (6 - Q), N);
          case S2:
          case g2:
            return C2(W + "Hours", 0);
          case p2:
            return C2(W + "Minutes", 1);
          case w2:
            return C2(W + "Seconds", 2);
          case y2:
            return C2(W + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, a2.endOf = function(s2) {
        return this.startOf(s2, false);
      }, a2.$set = function(s2, f2) {
        var o2, v = $.p(s2), m2 = "set" + (this.$u ? "UTC" : ""), D2 = (o2 = {}, o2[S2] = m2 + "Date", o2[g2] = m2 + "Date", o2[x2] = m2 + "Month", o2[l2] = m2 + "FullYear", o2[p2] = m2 + "Hours", o2[w2] = m2 + "Minutes", o2[y2] = m2 + "Seconds", o2[b2] = m2 + "Milliseconds", o2)[v], C2 = v === S2 ? this.$D + (f2 - this.$W) : f2;
        if (v === x2 || v === l2) {
          var T2 = this.clone().set(g2, 1);
          T2.$d[D2](C2), T2.init(), this.$d = T2.set(g2, Math.min(this.$D, T2.daysInMonth())).$d;
        } else
          D2 && this.$d[D2](C2);
        return this.init(), this;
      }, a2.set = function(s2, f2) {
        return this.clone().$set(s2, f2);
      }, a2.get = function(s2) {
        return this[$.p(s2)]();
      }, a2.add = function(s2, f2) {
        var o2, v = this;
        s2 = Number(s2);
        var m2 = $.p(f2), D2 = function(N) {
          var B = O2(v);
          return $.w(B.date(B.date() + Math.round(N * s2)), v);
        };
        if (m2 === x2)
          return this.set(x2, this.$M + s2);
        if (m2 === l2)
          return this.set(l2, this.$y + s2);
        if (m2 === S2)
          return D2(1);
        if (m2 === k)
          return D2(7);
        var C2 = (o2 = {}, o2[w2] = i2, o2[p2] = h2, o2[y2] = e2, o2)[m2] || 1, T2 = this.$d.getTime() + s2 * C2;
        return $.w(T2, this);
      }, a2.subtract = function(s2, f2) {
        return this.add(-1 * s2, f2);
      }, a2.format = function(s2) {
        var f2 = this, o2 = this.$locale();
        if (!this.isValid())
          return o2.invalidDate || r2;
        var v = s2 || "YYYY-MM-DDTHH:mm:ssZ", m2 = $.z(this), D2 = this.$H, C2 = this.$m, T2 = this.$M, N = o2.weekdays, B = o2.months, W = function(Y2, R, X, q) {
          return Y2 && (Y2[R] || Y2(f2, v)) || X[R].slice(0, q);
        }, Z = function(Y2) {
          return $.s(D2 % 12 || 12, Y2, "0");
        }, Q = o2.meridiem || function(Y2, R, X) {
          var q = Y2 < 12 ? "AM" : "PM";
          return X ? q.toLowerCase() : q;
        }, F2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: T2 + 1, MM: $.s(T2 + 1, 2, "0"), MMM: W(o2.monthsShort, T2, B, 3), MMMM: W(B, T2), D: this.$D, DD: $.s(this.$D, 2, "0"), d: String(this.$W), dd: W(o2.weekdaysMin, this.$W, N, 2), ddd: W(o2.weekdaysShort, this.$W, N, 3), dddd: N[this.$W], H: String(D2), HH: $.s(D2, 2, "0"), h: Z(1), hh: Z(2), a: Q(D2, C2, true), A: Q(D2, C2, false), m: String(C2), mm: $.s(C2, 2, "0"), s: String(this.$s), ss: $.s(this.$s, 2, "0"), SSS: $.s(this.$ms, 3, "0"), Z: m2 };
        return v.replace(I2, function(Y2, R) {
          return R || F2[Y2] || m2.replace(":", "");
        });
      }, a2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, a2.diff = function(s2, f2, o2) {
        var v, m2 = $.p(f2), D2 = O2(s2), C2 = (D2.utcOffset() - this.utcOffset()) * i2, T2 = this - D2, N = $.m(this, D2);
        return N = (v = {}, v[l2] = N / 12, v[x2] = N, v[u2] = N / 3, v[k] = (T2 - C2) / 6048e5, v[S2] = (T2 - C2) / 864e5, v[p2] = T2 / h2, v[w2] = T2 / i2, v[y2] = T2 / e2, v)[m2] || T2, o2 ? N : $.a(N);
      }, a2.daysInMonth = function() {
        return this.endOf(x2).$D;
      }, a2.$locale = function() {
        return z2[this.$L];
      }, a2.locale = function(s2, f2) {
        if (!s2)
          return this.$L;
        var o2 = this.clone(), v = j(s2, f2, true);
        return v && (o2.$L = v), o2;
      }, a2.clone = function() {
        return $.w(this.$d, this);
      }, a2.toDate = function() {
        return new Date(this.valueOf());
      }, a2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, a2.toISOString = function() {
        return this.$d.toISOString();
      }, a2.toString = function() {
        return this.$d.toUTCString();
      }, d2;
    }(), ht = A2.prototype;
    return O2.prototype = ht, [["$ms", b2], ["$s", y2], ["$m", w2], ["$H", p2], ["$W", S2], ["$M", x2], ["$y", l2], ["$D", g2]].forEach(function(d2) {
      ht[d2[1]] = function(a2) {
        return this.$g(a2, d2[0], d2[1]);
      };
    }), O2.extend = function(d2, a2) {
      return d2.$i || (d2(a2, A2, O2), d2.$i = true), O2;
    }, O2.locale = j, O2.isDayjs = H2, O2.unix = function(d2) {
      return O2(1e3 * d2);
    }, O2.en = z2[_], O2.Ls = z2, O2.p = {}, O2;
  });
})(me);
var V = nt, it = {}, pe = { get exports() {
  return it;
}, set exports(t2) {
  it = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$1, function() {
    return function(e2, i2, h2) {
      var b2 = i2.prototype, y2 = function(u2) {
        var l2, g2 = u2.date, r2 = u2.utc, c2 = {};
        if (!((l2 = g2) instanceof Date || l2 instanceof Array || b2.$utils().u(l2) || l2.constructor.name !== "Object")) {
          if (!Object.keys(g2).length)
            return new Date();
          var I2 = r2 ? h2.utc() : h2();
          Object.keys(g2).forEach(function(O2) {
            var $, A2;
            c2[$ = O2, A2 = b2.$utils().p($), A2 === "date" ? "day" : A2] = g2[O2];
          });
          var M2 = c2.day || (c2.year || c2.month >= 0 ? 1 : I2.date()), E = c2.year || I2.year(), U = c2.month >= 0 ? c2.month : c2.year || c2.day ? 0 : I2.month(), _ = c2.hour || 0, z2 = c2.minute || 0, H2 = c2.second || 0, j = c2.millisecond || 0;
          return r2 ? new Date(Date.UTC(E, U, M2, _, z2, H2, j)) : new Date(E, U, M2, _, z2, H2, j);
        }
        return g2;
      }, w2 = b2.parse;
      b2.parse = function(u2) {
        u2.date = y2.bind(this)(u2), w2.bind(this)(u2);
      };
      var p2 = b2.set, S2 = b2.add, k = b2.subtract, x2 = function(u2, l2, g2, r2) {
        r2 === void 0 && (r2 = 1);
        var c2 = Object.keys(l2), I2 = this;
        return c2.forEach(function(M2) {
          I2 = u2.bind(I2)(l2[M2] * r2, M2);
        }), I2;
      };
      b2.set = function(u2, l2) {
        return l2 = l2 === void 0 ? u2 : l2, u2.constructor.name === "Object" ? x2.bind(this)(function(g2, r2) {
          return p2.bind(this)(r2, g2);
        }, l2, u2) : p2.bind(this)(u2, l2);
      }, b2.add = function(u2, l2) {
        return u2.constructor.name === "Object" ? x2.bind(this)(S2, u2, l2) : S2.bind(this)(u2, l2);
      }, b2.subtract = function(u2, l2) {
        return u2.constructor.name === "Object" ? x2.bind(this)(S2, u2, l2, -1) : k.bind(this)(u2, l2);
      };
    };
  });
})(pe);
var ve = it, rt = {}, ge = { get exports() {
  return rt;
}, set exports(t2) {
  rt = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$1, function() {
    var e2 = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, i2 = {};
    return function(h2, b2, y2) {
      var w2, p2 = function(u2, l2, g2) {
        g2 === void 0 && (g2 = {});
        var r2 = new Date(u2), c2 = function(I2, M2) {
          M2 === void 0 && (M2 = {});
          var E = M2.timeZoneName || "short", U = I2 + "|" + E, _ = i2[U];
          return _ || (_ = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: I2, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: E }), i2[U] = _), _;
        }(l2, g2);
        return c2.formatToParts(r2);
      }, S2 = function(u2, l2) {
        for (var g2 = p2(u2, l2), r2 = [], c2 = 0; c2 < g2.length; c2 += 1) {
          var I2 = g2[c2], M2 = I2.type, E = I2.value, U = e2[M2];
          U >= 0 && (r2[U] = parseInt(E, 10));
        }
        var _ = r2[3], z2 = _ === 24 ? 0 : _, H2 = r2[0] + "-" + r2[1] + "-" + r2[2] + " " + z2 + ":" + r2[4] + ":" + r2[5] + ":000", j = +u2;
        return (y2.utc(H2).valueOf() - (j -= j % 1e3)) / 6e4;
      }, k = b2.prototype;
      k.tz = function(u2, l2) {
        u2 === void 0 && (u2 = w2);
        var g2 = this.utcOffset(), r2 = this.toDate(), c2 = r2.toLocaleString("en-US", { timeZone: u2 }), I2 = Math.round((r2 - new Date(c2)) / 1e3 / 60), M2 = y2(c2).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r2.getTimezoneOffset() / 15) - I2, true);
        if (l2) {
          var E = M2.utcOffset();
          M2 = M2.add(g2 - E, "minute");
        }
        return M2.$x.$timezone = u2, M2;
      }, k.offsetName = function(u2) {
        var l2 = this.$x.$timezone || y2.tz.guess(), g2 = p2(this.valueOf(), l2, { timeZoneName: u2 }).find(function(r2) {
          return r2.type.toLowerCase() === "timezonename";
        });
        return g2 && g2.value;
      };
      var x2 = k.startOf;
      k.startOf = function(u2, l2) {
        if (!this.$x || !this.$x.$timezone)
          return x2.call(this, u2, l2);
        var g2 = y2(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return x2.call(g2, u2, l2).tz(this.$x.$timezone, true);
      }, y2.tz = function(u2, l2, g2) {
        var r2 = g2 && l2, c2 = g2 || l2 || w2, I2 = S2(+y2(), c2);
        if (typeof u2 != "string")
          return y2(u2).tz(c2);
        var M2 = function(z2, H2, j) {
          var O2 = z2 - 60 * H2 * 1e3, $ = S2(O2, j);
          if (H2 === $)
            return [O2, H2];
          var A2 = S2(O2 -= 60 * ($ - H2) * 1e3, j);
          return $ === A2 ? [O2, $] : [z2 - 60 * Math.min($, A2) * 1e3, Math.max($, A2)];
        }(y2.utc(u2, r2).valueOf(), I2, c2), E = M2[0], U = M2[1], _ = y2(E).utcOffset(U);
        return _.$x.$timezone = c2, _;
      }, y2.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, y2.tz.setDefault = function(u2) {
        w2 = u2;
      };
    };
  });
})(ge);
var $e = rt, st = {}, ye = { get exports() {
  return st;
}, set exports(t2) {
  st = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$1, function() {
    var e2 = "minute", i2 = /[+-]\d\d(?::?\d\d)?/g, h2 = /([+-]|\d\d)/g;
    return function(b2, y2, w2) {
      var p2 = y2.prototype;
      w2.utc = function(r2) {
        var c2 = { date: r2, utc: true, args: arguments };
        return new y2(c2);
      }, p2.utc = function(r2) {
        var c2 = w2(this.toDate(), { locale: this.$L, utc: true });
        return r2 ? c2.add(this.utcOffset(), e2) : c2;
      }, p2.local = function() {
        return w2(this.toDate(), { locale: this.$L, utc: false });
      };
      var S2 = p2.parse;
      p2.parse = function(r2) {
        r2.utc && (this.$u = true), this.$utils().u(r2.$offset) || (this.$offset = r2.$offset), S2.call(this, r2);
      };
      var k = p2.init;
      p2.init = function() {
        if (this.$u) {
          var r2 = this.$d;
          this.$y = r2.getUTCFullYear(), this.$M = r2.getUTCMonth(), this.$D = r2.getUTCDate(), this.$W = r2.getUTCDay(), this.$H = r2.getUTCHours(), this.$m = r2.getUTCMinutes(), this.$s = r2.getUTCSeconds(), this.$ms = r2.getUTCMilliseconds();
        } else
          k.call(this);
      };
      var x2 = p2.utcOffset;
      p2.utcOffset = function(r2, c2) {
        var I2 = this.$utils().u;
        if (I2(r2))
          return this.$u ? 0 : I2(this.$offset) ? x2.call(this) : this.$offset;
        if (typeof r2 == "string" && (r2 = function(_) {
          _ === void 0 && (_ = "");
          var z2 = _.match(i2);
          if (!z2)
            return null;
          var H2 = ("" + z2[0]).match(h2) || ["-", 0, 0], j = H2[0], O2 = 60 * +H2[1] + +H2[2];
          return O2 === 0 ? 0 : j === "+" ? O2 : -O2;
        }(r2), r2 === null))
          return this;
        var M2 = Math.abs(r2) <= 16 ? 60 * r2 : r2, E = this;
        if (c2)
          return E.$offset = M2, E.$u = r2 === 0, E;
        if (r2 !== 0) {
          var U = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (E = this.local().add(M2 + U, e2)).$offset = M2, E.$x.$localOffset = U;
        } else
          E = this.utc();
        return E;
      };
      var u2 = p2.format;
      p2.format = function(r2) {
        var c2 = r2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return u2.call(this, c2);
      }, p2.valueOf = function() {
        var r2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * r2;
      }, p2.isUTC = function() {
        return !!this.$u;
      }, p2.toISOString = function() {
        return this.toDate().toISOString();
      }, p2.toString = function() {
        return this.toDate().toUTCString();
      };
      var l2 = p2.toDate;
      p2.toDate = function(r2) {
        return r2 === "s" && this.$offset ? w2(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l2.call(this);
      };
      var g2 = p2.diff;
      p2.diff = function(r2, c2, I2) {
        if (r2 && this.$u === r2.$u)
          return g2.call(this, r2, c2, I2);
        var M2 = this.local(), E = w2(r2).local();
        return g2.call(M2, E, c2, I2);
      };
    };
  });
})(ye);
var be = st;
V.extend(ve), V.extend(be), V.extend($e);
const ot = (t2, n2) => {
  if (t2) {
    if (V(t2 instanceof Date ? t2 : P$1(t2) ? t2.trim() : t2).isValid()) {
      const i2 = n2 ? V(t2).tz(n2) : V(t2), h2 = i2.year(), b2 = i2.month() + 1, y2 = i2.date(), w2 = i2.hour(), p2 = i2.minute(), S2 = i2.second(), k = i2.millisecond(), x2 = w2 === 0 && p2 === 0 && S2 === 0 && k === 0;
      return { value: i2.toDate(), info: { year: h2, month: b2, day: y2, ...x2 ? {} : { hour: w2, minute: p2, second: S2 } }, type: x2 ? "date" : "full" };
    }
    const e2 = /(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(t2.trim());
    if (e2) {
      const [, i2, h2, b2, y2, w2, p2] = e2, S2 = (c2) => typeof c2 > "u" ? void 0 : Number(c2), k = (c2) => c2 && c2 < 100 ? c2 + 2e3 : c2, x2 = (c2) => y2 && w2 && !p2 ? 0 : c2, u2 = { year: k(S2(i2)), month: S2(h2), day: S2(b2), hour: S2(y2), minute: S2(w2), second: x2(S2(p2)) }, l2 = i2 === void 0 && h2 === void 0 && b2 === void 0, g2 = y2 === void 0 && w2 === void 0 && p2 === void 0, r2 = V({ ...u2, month: u2.month - 1 }).toDate();
      return { value: l2 ? void 0 : r2, info: g2 ? { year: u2.year, month: u2.month, day: u2.day } : l2 ? { hour: u2.hour, minute: u2.minute, second: u2.second } : u2, type: l2 ? "time" : g2 ? "date" : "full" };
    }
  }
  return null;
}, _t = (t2, n2) => P$1(t2) && t2.startsWith(n2), Oe = (t2, n2) => P$1(t2) && t2.endsWith(n2), Tt = Object.entries, at = Object.keys, Ct = (t2) => J(t2) && P$1(t2.name), De = (t2, n2 = false) => t2 ? et(t2) ? t2.map((e2) => P$1(e2) ? { name: e2 } : Ct(e2) ? e2 : null).filter((e2) => e2 !== null) : P$1(t2) ? [{ name: t2 }] : Ct(t2) ? [t2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n2 ? "" : "| false"} | undefined\`, but got`, t2), []) : [], ct = (t2, n2) => {
  if (t2) {
    if (et(t2) && t2.every(P$1))
      return t2;
    if (P$1(t2))
      return [t2];
    console.error(`Expect ${n2 || "value"} to be \`string[] | string | undefined\`, but got`, t2);
  }
  return [];
}, xe = (t2) => ct(t2, "category"), Ie = (t2) => ct(t2, "tag"), _e = (t2) => _t(t2, "/");
const zt = /#.*$/u, kt = (t2) => {
  const n2 = zt.exec(t2);
  return n2 ? n2[0] : "";
}, lt = (t2) => decodeURI(t2).replace(zt, "").replace(/(index)?\.(md|html)$/, ""), Ce = (t2, n2) => {
  if (n2 === void 0)
    return false;
  const e2 = lt(t2.path), i2 = lt(n2), h2 = kt(n2);
  return h2 ? h2 === t2.hash && (!i2 || e2 === i2) : e2 === i2;
};
const He = (t2) => {
  const n2 = atob(t2);
  return strFromU8(unzlibSync(strToU8(n2, true)));
}, Le = (t2) => Ot(t2) ? t2 : `https://github.com/${t2}`, Ne = (t2) => !Ot(t2) || /github\.com/.test(t2) ? "GitHub" : /bitbucket\.org/.test(t2) ? "Bitbucket" : /gitlab\.com/.test(t2) ? "GitLab" : /gitee\.com/.test(t2) ? "Gitee" : null, Ht = (t2, ...n2) => {
  const e2 = t2.resolve(...n2), i2 = e2.matched[e2.matched.length - 1];
  if (!(i2 != null && i2.redirect))
    return e2;
  const { redirect: h2 } = i2, b2 = Gt(h2) ? h2(e2) : h2, y2 = P$1(b2) ? { path: b2 } : b2;
  return Ht(t2, { hash: e2.hash, query: e2.query, params: e2.params, ...y2 });
};
var _a;
const isClient = typeof window !== "undefined";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop = () => {
};
const isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke) => {
    const duration = resolveUnref(ms);
    const maxDuration = resolveUnref(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function throttleFilter(ms, trailing = true, leading = true, rejectOnCancel = false) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = resolveUnref(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
function resolveRef(r2) {
  return typeof r2 === "function" ? computed(r2) : ref(r2);
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function tryOnUnmounted(fn) {
  if (getCurrentInstance())
    onUnmounted(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, resolveUnref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = resolveUnref(truthyValue);
      _value.value = _value.value === truthy ? resolveUnref(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$2.call(b2, prop))
      __defNormalProp$2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b2)) {
      if (__propIsEnum$2.call(b2, prop))
        __defNormalProp$2(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps$2 = (a2, b2) => __defProps$2(a2, __getOwnPropDescs$2(b2));
var __objRest$1$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter: filter
  } = _a2, watchOptions = __objRest$1$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
const defaultNavigator = isClient ? window.navigator : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(resolveRef(query).value);
    matches.value = mediaQuery.matches;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  watchEffect(update);
  tryOnScopeDispose(() => cleanup());
  return matches;
}
function useClipboard(options = {}) {
  const {
    navigator: navigator2 = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const events = ["copy", "cut"];
  const isClipboardApiSupported = useSupported(() => navigator2 && "clipboard" in navigator2);
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value) {
      navigator2.clipboard.readText().then((value) => {
        text.value = value;
      });
    } else {
      text.value = legacyRead();
    }
  }
  if (isSupported.value && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = resolveUnref(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value)
        await navigator2.clipboard.writeText(value);
      else
        legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = document.createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a2, _b2, _c;
    return (_c = (_b2 = (_a2 = document == null ? void 0 : document.getSelection) == null ? void 0 : _a2.call(document)) == null ? void 0 : _b2.toString()) != null ? _c : "";
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var __defProp$k = Object.defineProperty;
var __getOwnPropSymbols$m = Object.getOwnPropertySymbols;
var __hasOwnProp$m = Object.prototype.hasOwnProperty;
var __propIsEnum$m = Object.prototype.propertyIsEnumerable;
var __defNormalProp$k = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$k = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$m.call(b2, prop))
      __defNormalProp$k(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$m)
    for (var prop of __getOwnPropSymbols$m(b2)) {
      if (__propIsEnum$m.call(b2, prop))
        __defNormalProp$k(a2, prop, b2[prop]);
    }
  return a2;
};
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e2) => {
      console.error(e2);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e2) {
      onError(e2);
    }
  }
  if (!storage)
    return data;
  const rawInit = resolveUnref(defaults);
  const type2 = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type2];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges) {
    useEventListener(window2, "storage", update);
    useEventListener(window2, customStorageEventName, updateFromCustomEvent);
  }
  update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e2) {
      onError(e2);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (isFunction(mergeDefaults))
        return mergeDefaults(value, rawInit);
      else if (type2 === "object" && !Array.isArray(value))
        return __spreadValues$k(__spreadValues$k({}, rawInit), value);
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      data.value = read(event);
    } catch (e2) {
      onError(e2);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
const functionsMap = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
function useFullscreen(target, options = {}) {
  const { document: document2 = defaultDocument, autoExit = false } = options;
  const targetRef = target || (document2 == null ? void 0 : document2.querySelector("html"));
  const isFullscreen = ref(false);
  let map = functionsMap[0];
  const isSupported = useSupported(() => {
    if (!document2) {
      return false;
    } else {
      for (const m2 of functionsMap) {
        if (m2[1] in document2) {
          map = m2;
          return true;
        }
      }
    }
    return false;
  });
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
  async function exit() {
    if (!isSupported.value)
      return;
    if (document2 == null ? void 0 : document2[ELEMENT])
      await document2[EXIT]();
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value)
      return;
    await exit();
    const target2 = unrefElement(targetRef);
    if (target2) {
      await target2[REQUEST]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    if (isFullscreen.value)
      await exit();
    else
      await enter();
  }
  if (document2) {
    useEventListener(document2, EVENT, () => {
      isFullscreen.value = !!(document2 == null ? void 0 : document2[ELEMENT]);
    }, false);
  }
  if (autoExit)
    tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, mutationOptions = __objRest$1(_a2, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type: type2 = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document: document2 = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document2) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document2.querySelector(`script[src="${resolveUnref(src)}"]`);
    if (!el) {
      el = document2.createElement("script");
      el.type = type2;
      el.async = async;
      el.src = resolveUnref(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      Object.entries(attrs).forEach(([name, value]) => el == null ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document2.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document2)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document2.querySelector(`script[src="${resolveUnref(src)}"]`);
    if (el)
      document2.head.removeChild(el);
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}
function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientHeight < ele.scrollHeight || style.overflowY === "auto" && ele.clientWidth < ele.scrollWidth) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e2 = rawEvent || window.event;
  const _target = e2.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e2.touches.length > 1)
    return true;
  if (e2.preventDefault)
    e2.preventDefault();
  return false;
}
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow;
  watch(resolveRef(element), (el) => {
    if (el) {
      const ele = el;
      initialOverflow = ele.style.overflow;
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const ele = resolveUnref(element);
    if (!ele || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener(ele, "touchmove", (e2) => {
        preventDefault(e2);
      }, { passive: false });
    }
    ele.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const ele = resolveUnref(element);
    if (!ele || !isLocked.value)
      return;
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    ele.style.overflow = initialOverflow;
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}
let _id = 0;
function useStyleTag(css2, options = {}) {
  const isLoaded = ref(false);
  const {
    document: document2 = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = ref(css2);
  let stop = () => {
  };
  const load = () => {
    if (!document2)
      return;
    const el = document2.getElementById(id) || document2.createElement("style");
    if (!el.isConnected) {
      el.type = "text/css";
      el.id = id;
      if (options.media)
        el.media = options.media;
      document2.head.appendChild(el);
    }
    if (isLoaded.value)
      return;
    stop = watch(cssRef, (value) => {
      el.textContent = value;
    }, { immediate: true });
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document2 || !isLoaded.value)
      return;
    stop();
    document2.head.removeChild(document2.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
function useWindowScroll({ window: window2 = defaultWindow } = {}) {
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x2 = ref(window2.scrollX);
  const y2 = ref(window2.scrollY);
  useEventListener(window2, "scroll", () => {
    x2.value = window2.scrollX;
    y2.value = window2.scrollY;
  }, {
    capture: false,
    passive: true
  });
  return { x: x2, y: y2 };
}
const fontIcon = "";
var m$1 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const c2 = computed(() => {
    const n2 = ["font-icon icon"], t2 = `${"iconfont icon-"}${o2.icon}`;
    return n2.push(t2), n2;
  }), r2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), at(n2).length ? n2 : null;
  });
  return () => o2.icon ? h$1("span", { key: o2.icon, class: c2.value, style: r2.value, ...{} }) : null;
} });
const badge = "";
const t = ({ type: r2 = "info", text: e2 = "", vertical: i2 = "top", color: a2 }, { slots: l2 }) => {
  var o2;
  return h$1("span", { class: ["badge", r2, { diy: a2 }], style: { verticalAlign: i2, ...a2 ? { backgroundColor: a2 } : {} } }, e2 || ((o2 = l2.default) == null ? void 0 : o2.call(l2)));
};
t.displayName = "Badge";
const biliBili = "";
const e$1 = "accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture";
const h = (e2) => isString$1(e2) ? e2 : `${e2}px`, x$1 = (e2, o2 = 0) => {
  const u2 = ref(), b2 = computed(() => h(unref(e2.width) || "100%")), s2 = ref("auto"), d2 = (t2) => {
    if (isString$1(t2)) {
      const [i2, m2] = t2.split(":"), a2 = Number(i2) / Number(m2);
      if (!Number.isNaN(a2))
        return a2;
    }
    return typeof t2 == "number" ? t2 : 16 / 9;
  }, l2 = (t2) => {
    const i2 = unref(e2.height), m2 = d2(unref(e2.ratio));
    return i2 ? h(i2) : `${Number(t2) / m2 + unref(o2)}px`;
  }, r2 = () => {
    u2.value && (s2.value = l2(u2.value.clientWidth));
  };
  return onMounted(() => {
    r2(), isRef(o2) && watch(o2, () => r2()), useEventListener("orientationchange", () => r2()), useEventListener("resize", () => r2());
  }), { el: u2, width: b2, height: s2 };
};
var y$2 = defineComponent({ name: "BiliBili", props: { bvid: { type: String, required: true }, title: { type: String, default: "A BiliBili video" }, page: { type: [String, Number], default: 1 }, width: { type: [String, Number], default: "100%" }, height: { type: [String, Number], default: void 0 }, ratio: { type: [String, Number], default: 16 / 9 }, time: { type: [String, Number], default: 0 }, lowQuality: Boolean, noDanmaku: Boolean }, setup(e2) {
  const l2 = ref(false), m2 = computed(() => l2.value ? 0 : 68), i2 = () => {
    l2.value = re(navigator.userAgent) || a2.value.clientWidth < 640;
  }, { el: a2, width: n2, height: p2 } = x$1(e2, m2), r2 = computed(() => `https://player.bilibili.com/player.html?bvid=${e2.bvid}&t=${e2.time}&high_quality=${e2.lowQuality ? 0 : 1}&page=${e2.page}&danmaku=${e2.noDanmaku ? 0 : 1}`);
  return onMounted(() => {
    i2(), useEventListener("orientationchange", () => i2()), useEventListener("resize", () => i2());
  }), () => [h$1("div", { class: "bili-desc" }, h$1("a", { class: "sr-only", href: r2.value }, e2.title)), h$1("iframe", { ref: a2, src: r2.value, title: e2.title, class: "bili-iframe", allow: e$1, style: { width: n2.value, height: p2.value } })];
} });
const balloon = "";
const siteInfo = "";
var I$1 = defineComponent({ name: "DemoProject", components: { BitbucketIcon: bt, GiteeIcon: yt, GitHubIcon: gt, GitlabIcon: $t, SourceIcon: wt }, props: { name: { type: String, required: true }, desc: { type: String, default: "" }, logo: { type: String, default: "" }, url: { type: String, required: true }, preview: { type: String, required: true }, repo: { type: String, default: "" } }, setup(e2) {
  const i2 = ne({ "/": { "source": "源代码" } }), r2 = computed(() => isLinkHttp(e2.preview) ? e2.preview : withBase(e2.preview)), n2 = computed(() => e2.repo ? Ne(e2.repo) : null);
  return () => h$1("div", { class: "site-info", onClick: () => {
    window.open(e2.url, "_blank");
  } }, [h$1("div", { class: "site-info-preview", style: { background: `url(${r2.value}) center/cover no-repeat` } }), h$1("div", { class: "site-info-detail" }, [e2.logo ? h$1("img", { class: "site-info-logo", src: e2.logo, loading: "lazy", "no-view": "" }) : null, h$1("div", { class: "site-info-name" }, e2.name), h$1("div", { class: "site-info-desc" }, e2.desc)]), e2.repo ? h$1("div", { class: "site-info-source-wrapper" }, h$1("a", { class: "site-info-source", href: e2.repo, "aria-label": i2.value.source, "data-balloon-pos": "left", title: i2.value.source, target: "_blank" }, h$1(resolveComponent(`${n2.value}Icon`)))) : null]);
} });
const l$2 = () => h$1(G, { name: "back-to-top" }, () => [h$1("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), h$1("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
l$2.displayName = "BackToTopIcon";
const a = () => h$1(G, { name: "close" }, () => h$1("path", { d: "m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z" }));
a.displayName = "CloseIcon";
const backToTop = "";
var T$3 = defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 300 } }, setup(a2) {
  const t2 = usePageFrontmatter(), e2 = ne({ "/": { "backToTop": "返回顶部" } }), { y: r2 } = useWindowScroll(), l2 = computed(() => t2.value.backToTop !== false && r2.value > a2.threshold);
  return () => h$1(Transition, { name: "fade" }, () => l2.value ? h$1("button", { class: "back-to-top", "aria-label": e2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } }, h$1(l$2)) : null);
} });
const notice = "";
var H$1 = defineComponent({ name: "NoticeItem", props: { path: { type: String, default: "" }, match: { type: String, default: "" }, title: { type: String, required: true }, content: { type: String, required: true }, actions: { type: Array, default: () => [] }, noticeKey: { type: String, default: "" }, showOnce: Boolean, confirm: Boolean, fullscreen: Boolean }, setup(t2) {
  const i2 = useRoute(), r2 = useRouter(), n2 = ref(false), u2 = computed(() => t2.noticeKey ? `notice-${t2.noticeKey}` : `${t2.title}${t2.content}`), m2 = computed(() => t2.match ? new RegExp(t2.match).test(i2.path) : _t(i2.path, t2.path));
  onMounted(() => {
    const o2 = (t2.showOnce ? localStorage : sessionStorage).getItem(u2.value);
    n2.value = !o2;
  });
  const a$1 = () => {
    n2.value = false, (t2.showOnce ? localStorage : sessionStorage).setItem("v2-notice", "true");
  }, f2 = (o2) => {
    o2 && (_e(o2) ? r2.push(o2) : isLinkHttp(o2) && window.open(o2)), a$1();
  };
  return () => h$1(TransitionGroup, { name: "notice-fade" }, () => m2.value && n2.value ? [t2.fullscreen ? h$1("div", { key: "mask", class: "notice-mask", onClick: () => {
    t2.confirm || a$1();
  } }) : null, h$1("div", { key: "popup", class: ["notice-wrapper", { fullscreen: t2.fullscreen }] }, [h$1("header", { class: "notice-title" }, [t2.confirm ? null : h$1(a, { onClick: () => a$1() }), h$1("span", { innerHTML: t2.title })]), h$1("div", { class: "notice-content", innerHTML: t2.content }), h$1("div", { class: "notice-footer" }, t2.actions.map(({ text: o2, link: d2, type: h2 = "" }) => h$1("button", { class: ["notice-footer-action", h2], onClick: () => f2(d2), innerHTML: o2 })))])] : []);
} });
const c$1 = ({ config: t2 }) => {
  const i2 = useRoute(), r2 = t2.find((n2) => "match" in n2 ? new RegExp(n2.match).test(i2.path) : _t(i2.path, n2.path));
  return r2 ? h$1(H$1, r2) : null;
};
c$1.displayName = "Notice", c$1.props = { config: { type: Array, required: true } };
const srOnly = "";
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!Vt("FontIcon"))
      app.component("FontIcon", m$1);
    if (!Vt("Badge"))
      app.component("Badge", t);
    if (!Vt("BiliBili"))
      app.component("BiliBili", y$2);
    if (!Vt("SiteInfo"))
      app.component("SiteInfo", I$1);
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/c/font_2601581_9pz0ama5329.css");
`);
    useScriptTag(`//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-617a48e0d1826cc4`);
  },
  rootComponents: [
    () => h$1(T$3, { threshold: 300 }),
    () => h$1(c$1, { config: [{ "noticeKey": "2023.1.3", "path": "/", "title": "最新计划", "content": "<ul><li>系统设计模块即将更新</li><li>如何设计短链系统</li><li>如何设计'知乎'</ul>", "actions": [{ "text": "马上安排", "link": "/guide/about.html", "type": "primary" }], "showOnce": true }] })
  ]
});
function r(r2, e2, n2) {
  var i2, t2, o2;
  void 0 === e2 && (e2 = 50), void 0 === n2 && (n2 = {});
  var a2 = null != (i2 = n2.isImmediate) && i2, u2 = null != (t2 = n2.callback) && t2, c2 = n2.maxWait, v = Date.now(), l2 = [];
  function f2() {
    if (void 0 !== c2) {
      var r3 = Date.now() - v;
      if (r3 + e2 >= c2)
        return c2 - r3;
    }
    return e2;
  }
  var d2 = function() {
    var e3 = [].slice.call(arguments), n3 = this;
    return new Promise(function(i3, t3) {
      var c3 = a2 && void 0 === o2;
      if (void 0 !== o2 && clearTimeout(o2), o2 = setTimeout(function() {
        if (o2 = void 0, v = Date.now(), !a2) {
          var i4 = r2.apply(n3, e3);
          u2 && u2(i4), l2.forEach(function(r3) {
            return (0, r3.resolve)(i4);
          }), l2 = [];
        }
      }, f2()), c3) {
        var d3 = r2.apply(n3, e3);
        return u2 && u2(d3), i3(d3);
      }
      l2.push({ resolve: i3, reject: t3 });
    });
  };
  return d2.cancel = function(r3) {
    void 0 !== o2 && clearTimeout(o2), l2.forEach(function(e3) {
      return (0, e3.reject)(r3);
    }), l2 = [];
  }, d2;
}
const useActiveHeaderLinks = ({ headerLinkSelector: headerLinkSelector2, headerAnchorSelector: headerAnchorSelector2, delay: delay2, offset: offset2 = 5 }) => {
  const router = useRouter();
  const setActiveRouteHash = () => {
    var _a2, _b2;
    const scrollTop = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
    const isAtPageTop = Math.abs(scrollTop - 0) < offset2;
    if (isAtPageTop) {
      updateHash(router, "");
      return;
    }
    const scrollBottom = window.innerHeight + scrollTop;
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const isAtPageBottom = Math.abs(scrollHeight - scrollBottom) < offset2;
    const headerLinks = Array.from(document.querySelectorAll(headerLinkSelector2));
    const headerAnchors = Array.from(document.querySelectorAll(headerAnchorSelector2));
    const existedHeaderAnchors = headerAnchors.filter((anchor) => headerLinks.some((link) => link.hash === anchor.hash));
    for (let i2 = 0; i2 < existedHeaderAnchors.length; i2++) {
      const anchor = existedHeaderAnchors[i2];
      const nextAnchor = existedHeaderAnchors[i2 + 1];
      const hasPassedCurrentAnchor = scrollTop >= (((_a2 = anchor.parentElement) == null ? void 0 : _a2.offsetTop) ?? 0) - offset2;
      const hasNotPassedNextAnchor = !nextAnchor || scrollTop < (((_b2 = nextAnchor.parentElement) == null ? void 0 : _b2.offsetTop) ?? 0) - offset2;
      const isActive = hasPassedCurrentAnchor && hasNotPassedNextAnchor;
      if (!isActive)
        continue;
      const routeHash = decodeURIComponent(router.currentRoute.value.hash);
      const anchorHash = decodeURIComponent(anchor.hash);
      if (routeHash === anchorHash)
        return;
      if (isAtPageBottom) {
        for (let j = i2 + 1; j < existedHeaderAnchors.length; j++) {
          if (routeHash === decodeURIComponent(existedHeaderAnchors[j].hash)) {
            return;
          }
        }
      }
      updateHash(router, anchorHash);
      return;
    }
  };
  const onScroll = r(setActiveRouteHash, delay2);
  onMounted(() => {
    window.addEventListener("scroll", onScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
  });
};
const updateHash = async (router, hash) => {
  const { scrollBehavior } = router.options;
  router.options.scrollBehavior = void 0;
  await router.replace({
    query: router.currentRoute.value.query,
    hash,
    force: true
  }).finally(() => router.options.scrollBehavior = scrollBehavior);
};
const headerLinkSelector = ".sidebar-link, .toc-link";
const headerAnchorSelector = ".header-anchor";
const delay = 200;
const offset = 5;
const clientConfig2 = defineClientConfig({
  setup() {
    useActiveHeaderLinks({
      headerLinkSelector,
      headerAnchorSelector,
      delay,
      offset
    });
  }
});
const autoCatalog = "";
var D = defineComponent({ name: "AutoCatalog", props: { base: { type: String, default: "" }, level: { type: Number, default: 3 }, index: Boolean }, setup(c2, { slots: h2 }) {
  const f2 = ne({ "/": { "title": "目录" } }), O2 = usePageData(), g2 = useRouter(), T2 = useSiteData(), v = (i2) => {
    const u2 = i2["I"];
    return typeof u2 > "u" || u2;
  }, E = () => {
    const i2 = c2.base || O2.value.path.replace(/\/[^/]+$/, "/"), u2 = g2.getRoutes(), p2 = [];
    return u2.filter(({ meta: l2, path: e2 }) => {
      if (!_t(e2, i2) || e2 === i2)
        return false;
      if (i2 === "/") {
        const t2 = at(T2.value.locales).filter((n2) => n2 !== "/");
        if (e2 === "/404.html" || t2.some((n2) => _t(e2, n2)))
          return false;
      }
      return (Oe(e2, ".html") && !Oe(e2, "/index.html") || Oe(e2, "/")) && v(l2);
    }).map(({ path: l2, meta: e2 }) => {
      const t2 = l2.substring(i2.length).split("/").length;
      return { title: e2["t"] || "", icon: e2["i"], base: l2.replace(/\/[^/]+\/?$/, "/"), order: e2["O"] || null, level: Oe(l2, "/") ? t2 - 1 : t2, path: l2 };
    }).filter(({ title: l2, level: e2 }) => typeof l2 == "string" && l2 && e2 <= c2.level).sort(({ title: l2, level: e2, path: t2, order: n2 }, { title: r2, level: o2, path: d2, order: s2 }) => e2 - o2 || (Oe(t2, "/index.html") ? -1 : Oe(d2, "/index.html") ? 1 : n2 === null ? s2 === null ? l2.localeCompare(r2) : s2 : s2 === null ? n2 : n2 > 0 ? s2 > 0 ? n2 - s2 : -1 : s2 < 0 ? n2 - s2 : 1)).forEach((l2) => {
      var e2;
      const { base: t2, level: n2 } = l2;
      switch (n2) {
        case 1:
          p2.push(l2);
          break;
        case 2: {
          const r2 = p2.find((o2) => o2.path === t2);
          r2 && (r2.children ?? (r2.children = [])).push(l2);
          break;
        }
        default: {
          const r2 = p2.find((o2) => o2.path === t2.replace(/\/[^/]+\/$/, "/"));
          if (r2) {
            const o2 = (e2 = r2.children) == null ? void 0 : e2.find((d2) => d2.path === t2);
            o2 && (o2.children ?? (o2.children = [])).push(l2);
          }
        }
      }
    }), p2;
  }, b2 = computed(() => E());
  return () => h$1("div", { class: "auto-catalog-wrapper" }, [h$1("h2", { class: "main-title" }, f2.value.title), ...b2.value.map(({ children: i2 = [], icon: u2, path: p2, title: l2 }, e2) => [h$1("h3", { id: l2, class: ["child-title", { "has-children": i2.length }] }, [h$1("a", { href: `#${l2}`, class: "header-anchor" }, "#"), h$1(RouterLink, { class: "catalog-title", to: p2 }, () => [c2.index ? `${e2 + 1}.` : null, u2 && h2.icon ? h2.icon({ icon: u2 }) : null, l2 || "Unknown"])]), i2.length ? h$1("ul", { class: "child-catalog-wrapper" }, i2.map(({ children: t2 = [], icon: n2, path: r2, title: o2 }, d2) => h$1("li", { class: "child-catalog-item" }, [h$1("div", { class: ["sub-title", { "has-children": t2.length }] }, [h$1("a", { href: `#${o2}`, class: "header-anchor" }, "#"), h$1(RouterLink, { class: "catalog-title", to: r2 }, () => [c2.index ? `${e2 + 1}.${d2 + 1}` : null, n2 && h2.icon ? h2.icon({ icon: n2 }) : null, o2 || "Unknown"])]), t2.length ? h$1("div", { class: "sub-catalog-wrapper" }, t2.map(({ icon: s2, path: A2, title: L }, $) => h$1(RouterLink, { class: "sub-catalog-item", to: A2 }, () => [c2.index ? `${e2 + 1}.${d2 + 1}.${$ + 1}` : null, s2 && h2.icon ? h2.icon({ icon: s2 }) : null, L || "Unknown"]))) : null]))) : null])]);
} }), K = defineClientConfig({ enhance: ({ app: c2 }) => {
  Vt("AutoCatalog", c2) || c2.component("AutoCatalog", (h2) => h$1(D, h2, { icon: ({ icon: f2 }) => h$1(resolveComponent("HopeIcon"), { icon: f2 }) }));
} });
const vars$1 = "";
const externalLinkIcon = "";
const svg = h$1("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h$1("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h$1("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h$1("span", [
      svg,
      h$1("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = {};
const clientConfig4 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h$1(ExternalLinkIcon, { locales }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig5 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse(`{"encrypt":{},"darkmode":"enable","themeColor":{"pink":"#f26d6d","lightBlue":"#07c3f2","orange":"#fc801d","blue":"#087cfa","red":"#fe2857"},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"logo":"/img/logo/logo.svg","repo":"https://github.com/ITTranlationClub/ModernSystemDesignInterview","docsDir":"docs","docsBranch":"main","copyright":"Copyright © 2023-ITTranslationClub","displayFooter":true,"pageInfo":false,"footer":"主题使用 <a target='blank' href='https://theme-hope.vuejs.press/zh/'>vuepress-theme-hope</a>","navbar":[{"text":"开始学习","link":"/guide/01Introduction/01Introduction.html","icon":"start1"},{"text":"面试指导","link":"/guide/02Interviews/01WhatIsInterview.html","icon":"featuresNew"},{"text":"构建块模块","link":"/guide/06BuildingBlocks/01BuildingBlocks.html","icon":"code-box-fill"},{"text":"系统设计模块","link":"/guide/softwareBuild.html","icon":"tools"},{"text":"关于","link":"/guide/about.html","icon":"whats-new"}],"sidebar":{"/guide/":[{"children":["01Introduction","02Course"],"prefix":"01Introduction/","icon":"activity","link":"01Introduction/","text":"导读","collapsible":true},{"children":["01WhatIsInterview","02PrepareSuccess","03PerformWell"],"prefix":"02Interviews/","icon":"contactGroup","link":"02Interviews/","text":"系统设计面试","collapsible":true},{"children":["01Abstractions","02RemotePerformCall","03Consistent","04ErrorModel"],"prefix":"03Abstractions/","icon":"license","link":"03Abstractions/","text":"抽象","collapsible":true},{"children":["01Availability","02Reliability","03Scalability","04Maintainability","05FaultTolerance"],"prefix":"04Nonfunctional/","icon":"tools","link":"04Nonfunctional/","text":"非功能性系统特征","collapsible":true},{"children":["01PutBackEnvelope","02ResourceEstimation"],"prefix":"05BackEnvelope/","icon":"featuresNew","link":"05BackEnvelope/","text":"粗略计算","collapsible":true},{"children":["01BuildingBlocks"],"prefix":"06BuildingBlocks/","icon":"dataMapping","link":"06BuildingBlocks/","text":"构建块","collapsible":true},{"children":["01DomainNameSystem","02DomaimNameSystemWorks"],"prefix":"07DomainName/","icon":"discoverfill","link":"07DomainName/","text":"域名系统","collapsible":true},{"children":["01LoadBalancers","02GlobalLocalBalancers","03LoadBalancersDetails"],"prefix":"08LoadBalancers/","icon":"others1","link":"08LoadBalancers/","text":"负载均衡器","collapsible":true},{"children":["01Databases","02DatabasesTypes","03DataReplication","04DataPartitioning","05TradeOffsDatabases"],"prefix":"09Databases/","icon":"config2","link":"09Databases/","text":"数据库","collapsible":true},{"children":["01KeyValueStore","02DesignKeyValueStore","03ScalabilityReplication","04VersioningDataAchievingConfigurability","05FaultToleranceFailureDetection"],"prefix":"10KeyvalueStore/","icon":"shortcut-fill","link":"10KeyvalueStore/","text":"键值存储","collapsible":true},{"children":["01ContentDeliveryNetwork","02IntroductionCDN","03DesignCDN","04InvestigationCDNPart1","05InvestigationCDNPart2","06EvaluationCDNDesign","07QuizOnCDNDesign"],"prefix":"11ContentDeliveryNetwork/","icon":"start1","link":"11ContentDeliveryNetwork/","text":"内容分发网络","collapsible":true},{"children":["01SystemDesignSequencer","02DesignUniqueIDGenerator","03UniqueIDsCausality"],"prefix":"12Sequencer/","icon":"codestring","link":"12Sequencer/","text":"序列生成器","collapsible":true},{"children":["01DistributedMonitoring","02IntroductionDistributedMonitoring","03PrerequisitesMonitoringSystem"],"prefix":"13DistributedMonitoring/","icon":"changelog","link":"13DistributedMonitoring/","text":"分布式监控","collapsible":true},{"children":["01DesignMonitoringSystem","02DetailedDesignMonitoringSystem","03VisualizeDataMonitoringSystem"],"prefix":"14MonitorServersideErrors/","icon":"install-fill","link":"14MonitorServersideErrors/","text":"监控系统: 服务端错误","collapsible":true},{"children":["01ClientSideErrors","02Design"],"prefix":"15MonitorClientsideErrors/","icon":"restfulFastRequest","link":"15MonitorClientsideErrors/","text":"监控系统: 客户端错误","collapsible":true},{"children":["01SystemDesign","02BackGround","03HighLevelDesign","04DetailedDesign","05Evaluation","06MemcachedVersusRedis"],"prefix":"16DistributeCache/","icon":"code-box-fill","link":"16DistributeCache/","text":"分布式缓存","collapsible":true},{"children":["01SystemDesign","02Requirements","03Considerations","04DesignPart1","05DesignPart2","06Evaluation","07Quiz"],"prefix":"17DistributedMessagingQueue/","icon":"aixin","link":"17DistributedMessagingQueue/","text":"分布式消息队列","collapsible":true},{"children":["01SystemDesign","02Introduction","03Design"],"prefix":"18Pubsub/","icon":"bilibili","link":"18Pubsub/","text":"发布-订阅","collapsible":true},{"children":["01SystemDesign","02Requirements","03Design","04RateLimiterAlgorithms","05Quiz"],"prefix":"19RateLimiter/","icon":"versionCompare","link":"19RateLimiter/","text":"限速器","collapsible":true},{"children":["01SystemDesign","02Requirements","03Design","04DesignConsiderations","05Evaluation","06Quiz"],"prefix":"20BlobStore/","icon":"whats-new","link":"20BlobStore/","text":"Blob Store","collapsible":true},{"children":["01SystemDesign","02Requirements","03Indexing","04Design","05SclingSearchAndIndexing","06Evaluation"],"prefix":"21DistributedSearch/","icon":"teamwork","link":"21DistributedSearch/","text":"分布式搜索","collapsible":true},{"children":["01SystemDesign","02Introduction","03Design"],"prefix":"22DistributedLogging/","icon":"activity","link":"22DistributedLogging/","text":"分布式日志记录","collapsible":true},{"children":["01SystemDesign","02Requirements","03Design","04DesignConsiderations","05Evaluation"],"prefix":"23DistributedTaskScheduler/","icon":"license","link":"23DistributedTaskScheduler/","text":"分布式任务调度","collapsible":true},{"children":["01SystemDesign","02HighLevelDesign","03DetailedDesign","04Quiz"],"prefix":"24ShardedCounters/","icon":"config2","link":"24ShardedCounters/","text":"分片计数器","collapsible":true},{"children":["01WrappingUp","02RESHADEDApproach"],"prefix":"25ConcludingBuildingBlocks/","icon":"codestring","link":"25ConcludingBuildingBlocks/","text":"构建块模块总结","collapsible":true}]}}}}`);
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return {
    ...theme,
    ...(_a2 = theme.locales) == null ? void 0 : _a2[routeLocale]
  };
};
const clientConfig6 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
    {
      setupDevtoolsPlugin({
        // fix recursive reference
        app,
        id: "org.vuejs.vuepress.plugin-theme-data",
        label: "VuePress Theme Data Plugin",
        packageName: "@vuepress/plugin-theme-data",
        homepage: "https://v2.vuepress.vuejs.org",
        logo: "https://v2.vuepress.vuejs.org/images/hero.png",
        componentStateTypes: ["VuePress"]
      }, (api) => {
        api.on.inspectComponent((payload) => {
          payload.instanceData.state.push({
            type: "VuePress",
            key: "themeData",
            editable: false,
            value: themeData2.value
          }, {
            type: "VuePress",
            key: "themeLocaleData",
            editable: false,
            value: themeLocaleData.value
          });
        });
      });
    }
  }
});
const giscus = "";
const i$1 = ["de", "gsw", "en", "es", "fr", "id", "it", "ja", "ko", "pl", "ro", "ru", "tr", "vi", "zh-CN", "zh-TW"], e = { "provider": "Giscus", "lightTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.190/templates/giscus/light.css", "darkTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.190/templates/giscus/dark.css", "repo": "ITTranlationClub/ModernSystemDesignInterview", "repoId": "R_kgDOI7RqFg", "category": "General", "categoryId": "DIC_kwDOI7RqFs4CV3Sg" }, { repo: T$2, repoId: w, category: C$1, categoryId: b$1 } = e;
var z = defineComponent({ name: "GiscusComment", props: { darkmode: Boolean }, setup(s2) {
  const p2 = usePageFrontmatter(), u2 = usePageData(), n2 = ref(false), d2 = computed(() => {
    const t2 = usePageLang().value;
    if (i$1.includes(t2))
      return t2;
    const o2 = t2.split("-")[0];
    return i$1.includes(o2) ? o2 : "en";
  }), m2 = computed(() => {
    const t2 = e.comment !== false, o2 = p2.value.comment;
    return !!o2 || t2 !== false && o2 !== false;
  }), c2 = computed(() => ({ repo: T$2, repoId: w, category: C$1, categoryId: b$1, lang: d2.value, theme: s2.darkmode ? e.darkTheme : e.lightTheme, mapping: e.mapping || "pathname", term: withBase(u2.value.path), inputPosition: e.inputPosition || "top", reactionsEnabled: e.reactionsEnabled === false ? "0" : "1", strict: e.strict === false ? "0" : "1", loading: e.lazyLoading === false ? "eager" : "lazy", emitMetadata: "0" }));
  return onMounted(async () => {
    await __vitePreload(() => import("./giscus-286fb614.js"), true ? [] : void 0), n2.value = true;
  }), () => h$1("div", { class: ["giscus-wrapper", { "input-top": e.inputPosition !== "bottom" }], id: "comment", style: { display: m2.value ? "block" : "none" } }, n2.value ? h$1("giscus-widget", c2.value) : h$1(vt));
} });
const i = { "provider": "Giscus", "lightTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.190/templates/giscus/light.css", "darkTheme": "https://unpkg.com/vuepress-theme-hope@2.0.0-beta.190/templates/giscus/dark.css", "repo": "ITTranlationClub/ModernSystemDesignInterview", "repoId": "R_kgDOI7RqFg", "category": "General", "categoryId": "DIC_kwDOI7RqFs4CV3Sg" }.comment !== false, d = defineComponent({ name: "CommentService", props: { darkmode: Boolean }, setup(e2) {
  const o2 = usePageFrontmatter(), m2 = computed(() => o2.value.comment || i && o2.value.comment !== false);
  return () => h$1(z, { darkmode: e2.darkmode, style: { display: m2.value ? "block" : "none" } });
} });
var l$1 = defineClientConfig({ enhance: ({ app: e2 }) => {
  e2.component("CommentService", d);
} });
const button = "";
const M = 800, u = 2e3, S$1 = { "/": { "copy": "复制代码", "copied": "已复制", "hint": "复制成功" } }, n = false, P = ['.theme-hope-content div[class*="language-"] pre'], m = false;
const l = /* @__PURE__ */ new Map(), T$1 = () => {
  const { copy: C2 } = useClipboard({ legacy: true }), a2 = ne(S$1), g2 = usePageData(), i2 = ee();
  const E = (o2) => {
    if (!o2.hasAttribute("copy-code-registered")) {
      const e2 = document.createElement("button");
      e2.classList.add("copy-code-button"), e2.innerHTML = '<div class="copy-icon" />', e2.setAttribute("aria-label", a2.value.copy), e2.setAttribute("data-copied", a2.value.copied), o2.parentElement && o2.parentElement.insertBefore(e2, o2), o2.setAttribute("copy-code-registered", "");
    }
  }, p2 = () => nextTick().then(() => new Promise((o2) => {
    setTimeout(() => {
      P.forEach((e2) => {
        document.querySelectorAll(e2).forEach(E);
      }), o2();
    }, M);
  })), d2 = (o2, e2, t2) => {
    let { innerText: s2 = "" } = e2;
    /language-(shellscript|shell|bash|sh|zsh)/.test(o2.classList.toString()) && (s2 = s2.replace(/^ *(\$|>) /gm, "")), C2(s2).then(() => {
      t2.classList.add("copied"), clearTimeout(l.get(t2));
      const c2 = setTimeout(() => {
        t2.classList.remove("copied"), t2.blur(), l.delete(t2);
      }, u);
      if (l.set(t2, c2), n)
        ;
    });
  };
  onMounted(() => {
    (!i2.value || m) && p2(), useEventListener("click", (o2) => {
      const e2 = o2.target;
      if (e2.matches('div[class*="language-"] > button.copy')) {
        const t2 = e2.parentElement, s2 = e2.nextElementSibling;
        s2 && d2(t2, s2, e2);
      } else if (e2.matches('div[class*="language-"] div.copy-icon')) {
        const t2 = e2.parentElement, s2 = t2.parentElement, c2 = t2.nextElementSibling;
        c2 && d2(s2, c2, t2);
      }
    }), watch(() => g2.value.path, () => {
      (!i2.value || m) && p2();
    });
  });
};
var Y = defineClientConfig({ setup: () => {
  T$1();
} });
const chart = "";
const parseChartConfig = (config, type) => {
  if (type === "json")
    return JSON.parse(config);
  const exports = {}, module = { exports };
  return eval(config), module.exports;
};
var ChartJS = defineComponent({ name: "ChartJS", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const r2 = ref(), o2 = ref(), t2 = ref(true);
  return onMounted(async () => {
    const [{ default: n2 }] = await Promise.all([__vitePreload(() => import("./auto-9af879db.js"), true ? [] : void 0), new Promise((s2) => setTimeout(s2, 800))]);
    n2.defaults.maintainAspectRatio = false;
    const a2 = parseChartConfig(He(e2.config), e2.type), i2 = o2.value.getContext("2d");
    new n2(i2, a2), t2.value = false;
  }), () => [e2.title ? h$1("div", { class: "chart-title" }, decodeURIComponent(e2.title)) : null, t2.value ? h$1(vt, { class: "chart-loading", height: 192 }) : null, h$1("div", { ref: r2, class: "chart-wrapper", id: e2.id, style: { display: t2.value ? "none" : "block" } }, h$1("canvas", { ref: o2, height: 400 }))];
} });
const codeTabs = "";
const o = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var S = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(t2, { slots: v }) {
  const l2 = ref(t2.active), u2 = ref([]), c2 = () => {
    if (t2.tabId) {
      const { title: e2, id: a2 = e2 } = t2.data[l2.value];
      o.value[t2.tabId] = a2;
    }
  }, b2 = (e2 = l2.value) => {
    l2.value = e2 < u2.value.length - 1 ? e2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p2 = (e2, a2) => {
    if (e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = a2) : e2.key === "ArrowRight" ? (e2.preventDefault(), b2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), f2()), t2.tabId) {
      const { title: d2, id: i2 = d2 } = t2.data[l2.value];
      o.value[t2.tabId] = i2;
    }
  }, m2 = () => {
    if (t2.tabId) {
      const e2 = t2.data.findIndex(({ title: a2, id: d2 = a2 }) => o.value[t2.tabId] === d2);
      if (e2 !== -1)
        return e2;
    }
    return t2.active;
  };
  return onMounted(() => {
    l2.value = m2(), watch(() => o.value[t2.tabId], (e2, a2) => {
      if (t2.tabId && e2 !== a2) {
        const d2 = t2.data.findIndex(({ title: i2, id: r2 = i2 }) => r2 === e2);
        d2 !== -1 && (l2.value = d2);
      }
    });
  }), () => t2.data.length ? h$1("div", { class: "code-tabs" }, [h$1("div", { class: "code-tabs-nav", role: "tablist" }, t2.data.map(({ title: e2 }, a2) => {
    const d2 = a2 === l2.value;
    return h$1("button", { ref: (i2) => {
      i2 && (u2.value[a2] = i2);
    }, class: ["code-tabs-nav-tab", { active: d2 }], role: "tab", "aria-controls": `codetab-${t2.id}-${a2}`, "aria-selected": d2, onClick: () => {
      l2.value = a2, c2();
    }, onKeydown: (i2) => p2(i2, a2) }, e2);
  })), t2.data.map(({ title: e2, id: a2 = e2 }, d2) => {
    var i2;
    const r2 = d2 === l2.value;
    return h$1("div", { class: ["code-tab", { active: r2 }], id: `codetab-${t2.id}-${d2}`, role: "tabpanel", "aria-expanded": r2 }, (i2 = v[`tab${d2}`]) == null ? void 0 : i2.call(v, { title: e2, value: a2, isActive: r2 }));
  })]) : null;
} });
const codeGroup = "";
const c = ({ active: p2 = false }, { slots: u2 }) => {
  var e2;
  return h$1("div", { class: ["code-group-item", { active: p2 }], "aria-selected": p2 }, (e2 = u2.default) == null ? void 0 : e2.call(u2));
};
c.displayName = "CodeGroupItem";
const y$1 = defineComponent({ name: "CodeGroup", setup(p2, { slots: u2 }) {
  const e2 = ref(-1), t2 = ref([]);
  const i2 = (a2 = e2.value) => {
    e2.value = a2 < t2.value.length - 1 ? a2 + 1 : 0, t2.value[e2.value].focus();
  }, f2 = (a2 = e2.value) => {
    e2.value = a2 > 0 ? a2 - 1 : t2.value.length - 1, t2.value[e2.value].focus();
  }, m2 = (a2, o2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), e2.value = o2) : a2.key === "ArrowRight" ? (a2.preventDefault(), i2(o2)) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2(o2));
  };
  return () => {
    var a2;
    const o2 = (((a2 = u2.default) == null ? void 0 : a2.call(u2)) || []).filter((l2) => l2.type.name === "CodeGroupItem").map((l2) => (l2.props === null && (l2.props = {}), l2));
    return o2.length === 0 ? null : (e2.value < 0 || e2.value > o2.length - 1 ? (e2.value = o2.findIndex((l2) => "active" in l2.props), e2.value === -1 && (e2.value = 0)) : o2.forEach((l2, r2) => {
      l2.props.active = r2 === e2.value;
    }), h$1("div", { class: "code-group" }, [h$1("div", { class: "code-group-nav" }, o2.map((l2, r2) => {
      const s2 = r2 === e2.value;
      return h$1("button", { ref: (v) => {
        v && (t2.value[r2] = v);
      }, class: ["code-group-nav-tab", { active: s2 }], "aria-pressed": s2, "aria-expanded": s2, onClick: () => {
        e2.value = r2;
      }, onKeydown: (v) => m2(v, r2) }, l2.props.title);
    })), o2]));
  };
} });
const index$1 = "";
const flowchart = "";
var f = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, F = { ...f, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }, b = { ...f, "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" } } }, y = { ...f, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } }, s = { ant: F, vue: y, pie: b }, g = defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(l2) {
  let o2 = null;
  const p2 = ref(), n2 = ref(true), t2 = ref(1), r2 = computed(() => s[l2.preset] || (console.warn(`[md-enhance:flowchart] Unknown preset: ${l2.preset}`), s.vue)), c2 = (e2) => e2 < 419 ? 0.8 : e2 > 1280 ? 1 : 0.9;
  return onMounted(() => {
    Promise.all([__vitePreload(() => import("./flowchart-806f4464.js"), true ? [] : void 0), new Promise((e2) => setTimeout(e2, 800))]).then(([{ parse: e2 }]) => {
      o2 = e2(He(l2.code)), t2.value = c2(window.innerWidth), n2.value = false, o2.draw(l2.id, { ...r2.value, scale: t2.value });
    }), useEventListener("resize", useDebounceFn(() => {
      if (o2) {
        const e2 = c2(window.innerWidth);
        t2.value !== e2 && (t2.value = e2, o2.draw(l2.id, { ...r2.value, scale: e2 }));
      }
    }, 100));
  }), () => [n2.value ? h$1(vt, { class: "flowchart-loading", height: 192 }) : null, h$1("div", { ref: p2, class: ["flowchart-wrapper", l2.preset], id: l2.id, style: { display: n2.value ? "none" : "block" } })];
} });
const tasklist = "";
const clientConfig9 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", S);
    if (!Vt("CodeGroup", app))
      app.component("CodeGroup", y$1);
    if (!Vt("CodeGroupItem", app))
      app.component("CodeGroupItem", c);
    app.component("FlowChart", g);
  }
});
const photoswipe = "";
const photoSwipe = "";
const T = ".theme-hope-content :not(a) > img:not([no-view])", C = { "/": { "closeTitle": "关闭", "downloadTitle": "下载图片", "fullscreenTitle": "切换全屏", "zoomTitle": "缩放", "arrowPrevTitle": "上一个 (左箭头)", "arrowNextTitle": "下一个 (右箭头)" } }, O = 800, x = {}, A = (e2) => isString$1(e2) ? Array.from(document.querySelectorAll(e2)) : e2.map((t2) => Array.from(document.querySelectorAll(t2))).flat(), p = (e2) => new Promise((t2, n2) => {
  e2.complete ? t2({ src: e2.src, width: e2.naturalWidth, height: e2.naturalHeight, alt: e2.alt }) : (e2.onload = () => t2(p(e2)), e2.onerror = (s2) => n2(s2));
}), H = () => {
  const { isSupported: e2, toggle: t2 } = useFullscreen(), n2 = ne(C), s2 = usePageData(), c2 = () => Promise.all([__vitePreload(() => import("./photoswipe.esm-f18e7329.js"), true ? [] : void 0), nextTick().then(() => new Promise((l2) => setTimeout(l2, O)).then(() => A(T)))]).then(([{ default: l2 }, m2]) => {
    const h2 = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>';
    m2.forEach((d2, v) => {
      const u2 = () => {
        const a2 = Array(m2.length).fill({ html: h2 }), o2 = new l2({ dataSource: a2, preloaderDelay: 0, ...n2.value, ...x, index: v });
        o2.on("uiRegister", () => {
          e2 && o2.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
            t2();
          } }), o2.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (r2, i2) => {
            r2.setAttribute("download", ""), r2.setAttribute("target", "_blank"), r2.setAttribute("rel", "noopener"), i2.on("change", () => {
              r2.href = i2.currSlide.data.src;
            });
          } });
        }), o2.init(), m2.forEach((r2, i2) => {
          p(r2).then((g2) => {
            a2.splice(i2, 1, g2), o2.refreshSlideContent(i2);
          });
        });
      };
      d2.style.cursor = "zoom-in", d2.addEventListener("click", () => {
        u2();
      }), d2.addEventListener("keypress", ({ key: a2 }) => {
        a2 === "Enter" && u2();
      });
    });
  });
  onMounted(() => {
    c2(), watch(() => s2.value.path, () => c2());
  });
};
var I = defineClientConfig({ setup: () => {
  H();
} });
const HopeIcon = (props) => {
  const { icon = "" } = props;
  return isLinkHttp(icon) ? h$1("img", { class: "icon", src: icon, "no-view": "" }) : _e(icon) ? h$1("img", { class: "icon", src: withBase(icon), "no-view": "" }) : h$1(resolveComponent("FontIcon"), props);
};
HopeIcon.displayName = "HopeIcon";
const useAutoLink = (item, preferFull = false) => {
  const router = useRouter();
  const { fullPath, meta, name } = Ht(router, encodeURI(item));
  return {
    text: !preferFull && meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] ? meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] : meta[
      "t"
      /* ArticleInfoType.title */
    ] || item,
    link: name === "404" ? item : fullPath,
    ...meta[
      "i"
      /* ArticleInfoType.icon */
    ] ? { icon: meta[
      "i"
      /* ArticleInfoType.icon */
    ] } : {}
  };
};
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const usePure = () => computed(() => Boolean(useThemeData().value.pure));
const useWindowSize = () => {
  const themeData2 = useThemeData();
  const isMobile = ref(false);
  const isWide = ref(false);
  const windowSizeHandler = () => {
    isMobile.value = window.innerWidth <= (themeData2.value.mobileBreakPoint || 719);
    isWide.value = window.innerWidth >= (themeData2.value.wideBreakPoint || 1440);
  };
  onMounted(() => {
    windowSizeHandler();
    useEventListener("resize", windowSizeHandler, false);
    useEventListener("orientationchange", windowSizeHandler, false);
  });
  return {
    isMobile,
    isWide
  };
};
const useNavigate = () => {
  const router = useRouter();
  const route = useRoute();
  return (url) => {
    if (url)
      if (_e(url)) {
        if (route.path !== url)
          void router.push(url);
      } else if (isLinkHttp(url) || isLinkMailto(url)) {
        if (window)
          window.open(url);
      } else {
        const base = route.path.slice(0, route.path.lastIndexOf("/"));
        void router.push(`${base}/${encodeURI(url)}`);
      }
  };
};
const usePageAuthor = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { author } = frontmatter.value;
    if (author)
      return De(author);
    if (author === false)
      return [];
    return De(themeLocale.value.author, false);
  });
};
const usePageCategory = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => xe(frontmatter.value.category).map((name) => ({
    name,
    // this is a hack
    path: ""
  })));
};
const usePageTag = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => Ie(frontmatter.value.tag).map((name) => ({
    name,
    // this is a hack
    path: ""
  })));
};
const usePageDate = () => {
  const frontmatter = usePageFrontmatter();
  const page2 = usePageData();
  return computed(() => {
    const { date } = frontmatter.value;
    if (date)
      return ot(date);
    const { createdTime } = page2.value.git || {};
    if (createdTime)
      return ot(new Date(createdTime));
    return null;
  });
};
const usePageInfo = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  const author = usePageAuthor();
  const category = usePageCategory();
  const tag = usePageTag();
  const date = usePageDate();
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: page2.value.localizedDate,
    tag: tag.value,
    isOriginal: frontmatter.value.isOriginal || false,
    readingTime: page2.value.readingTime || null,
    pageview: "pageview" in frontmatter.value ? frontmatter.value.pageview : true
  }));
  const items = computed(() => "pageInfo" in frontmatter.value ? frontmatter.value.pageInfo : "pageInfo" in themeLocale.value ? themeLocale.value.pageInfo : null);
  return { info, items };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const footer = "";
const PageFooter = defineComponent({
  name: "PageFooter",
  setup() {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const author = usePageAuthor();
    const enable = computed(() => {
      const { copyright: copyright2, footer: footer2 } = frontmatter.value;
      return footer2 !== false && Boolean(copyright2 || footer2 || themeLocale.value.displayFooter);
    });
    const content = computed(() => {
      const { footer: footer2 } = frontmatter.value;
      return footer2 === false ? false : isString$1(footer2) ? footer2 : themeLocale.value.footer || "";
    });
    const copyright = computed(() => "copyright" in frontmatter.value ? frontmatter.value.copyright : "copyright" in themeLocale.value ? themeLocale.value.copyright : author.value.length ? `Copyright © ${new Date().getFullYear()} ${author.value[0].name}` : false);
    return () => enable.value ? h$1("footer", { class: "footer-wrapper" }, [
      content.value ? h$1("div", { class: "footer", innerHTML: content.value }) : null,
      copyright.value ? h$1("div", {
        class: "copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});
const AutoLink = defineComponent({
  name: "AutoLink",
  inheritAttrs: false,
  props: {
    /**
     * @description Autolink config
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * @description Whether it's active only when exact match
     */
    exact: Boolean,
    /**
     * @description Whether to hide externalLinkIcon
     */
    noExternalLinkIcon: Boolean
  },
  emits: ["focusout"],
  setup(props, { attrs, emit, slots }) {
    const route = useRoute();
    const siteData2 = useSiteData();
    const config2 = toRef(props, "config");
    const hasHttpProtocol = computed(() => isLinkHttp(config2.value.link));
    const hasNonHttpProtocol = computed(() => isLinkMailto(config2.value.link) || isLinkTel(config2.value.link));
    const linkTarget = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.target || (hasHttpProtocol.value ? "_blank" : void 0));
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const renderRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const anchorRel = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : void 0));
    const linkAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      if (props.exact)
        return false;
      const localeKeys = at(siteData2.value.locales);
      return localeKeys.length ? (
        // check all the locales
        localeKeys.every((key) => key !== config2.value.link)
      ) : (
        // check root
        config2.value.link !== "/"
      );
    });
    const isActive = computed(() => renderRouterLink.value ? config2.value.activeMatch ? new RegExp(config2.value.activeMatch).test(route.path) : (
      // if this link is active in subpath
      !shouldBeActiveInSubpath.value ? route.path === config2.value.link : _t(route.path, config2.value.link)
    ) : false);
    return () => {
      var _a2, _b2, _c;
      const { text, icon, link } = config2.value;
      return renderRouterLink.value ? h$1(RouterLink, {
        to: link,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", { active: isActive.value }, attrs["class"]],
        onFocusout: () => emit("focusout")
      }, () => {
        var _a3, _b3, _c2;
        return ((_a3 = slots["default"]) == null ? void 0 : _a3.call(slots)) || [
          ((_b3 = slots["before"]) == null ? void 0 : _b3.call(slots)) || h$1(HopeIcon, { icon }),
          text,
          (_c2 = slots["after"]) == null ? void 0 : _c2.call(slots)
        ];
      }) : h$1("a", {
        href: link,
        rel: anchorRel.value,
        target: linkTarget.value,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", attrs["class"]],
        onFocusout: () => emit("focusout")
      }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
        ((_b2 = slots["before"]) == null ? void 0 : _b2.call(slots)) || h$1(HopeIcon, { icon }),
        text,
        props.noExternalLinkIcon ? null : h$1(ExternalLinkIcon),
        (_c = slots["after"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const dropdownLink = "";
const DropdownLink = defineComponent({
  name: "NavbarDropdownLink",
  props: {
    /**
     * Dropdown config
     *
     * 下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props, { slots }) {
    const page2 = usePageData();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    return () => {
      var _a2;
      return h$1("div", { class: ["dropdown-wrapper", { open: open.value }] }, [
        h$1("button", {
          class: "dropdown-title",
          type: "button",
          "aria-label": dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a2 = slots["title"]) == null ? void 0 : _a2.call(slots)) || h$1("span", { class: "title" }, [
            h$1(HopeIcon, { icon: config2.value.icon }),
            props.config.text
          ]),
          h$1("span", { class: "arrow" }),
          h$1("ul", { class: "nav-dropdown" }, config2.value.children.map((child, index2) => {
            const isLastChild = index2 === config2.value.children.length - 1;
            return h$1("li", { class: "dropdown-item" }, "children" in child ? [
              h$1("h4", { class: "dropdown-subtitle" }, child.link ? h$1(AutoLink, {
                config: child,
                onFocusout: () => {
                  if (
                    // no children
                    child.children.length === 0 && isLastChild
                  )
                    open.value = false;
                }
              }) : h$1("span", child.text)),
              h$1("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild, grandIndex) => h$1("li", { class: "dropdown-subitem" }, h$1(AutoLink, {
                config: grandchild,
                onFocusout: () => {
                  if (
                    // last item of grandchild
                    grandIndex === child.children.length - 1 && isLastChild
                  )
                    open.value = false;
                }
              }))))
            ] : h$1(AutoLink, {
              config: child,
              onFocusout: () => {
                if (isLastChild)
                  open.value = false;
              }
            }));
          }))
        ])
      ]);
    };
  }
});
const I18nIcon = () => h$1(G, { name: "i18n" }, () => [
  h$1("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";
const resolveNavbarItem = (item, prefix = "") => {
  if (isString$1(item))
    return useAutoLink(`${prefix}${item}`);
  if ("children" in item)
    return {
      ...item,
      ...item.link && !isLinkExternal(item.link) ? useAutoLink(`${prefix}${item.link}`) : {},
      children: item.children.map((child) => resolveNavbarItem(child, `${prefix}${item.prefix || ""}`))
    };
  return {
    ...item,
    link: isLinkExternal(item.link) ? item.link : useAutoLink(`${prefix}${item.link}`).link
  };
};
const useNavbarConfig = () => computed(() => (useThemeLocaleData().value.navbar || []).map((item) => resolveNavbarItem(item)));
const useNavbarLanguageDropdown = () => {
  const router = useRouter();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const localePaths = at(siteLocale.value.locales);
    if (localePaths.length < 2)
      return null;
    const { path, fullPath } = router.currentRoute.value;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: "",
      ariaLabel: navbarLocales == null ? void 0 : navbarLocales.selectLangAriaLabel,
      children: localePaths.map((targetLocalePath) => {
        var _a2, _b2, _c;
        const targetSiteLocale = ((_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
        const targetThemeLocale = ((_b2 = themeData2.value.locales) == null ? void 0 : _b2[targetLocalePath]) ?? {};
        const targetLang = targetSiteLocale.lang || "";
        const text = ((_c = targetThemeLocale.navbarLocales) == null ? void 0 : _c.langName) ?? targetLang;
        let link;
        if (targetLang === siteLocale.value.lang) {
          link = path;
        } else {
          const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
          link = // try to link to the corresponding page of current page
          router.getRoutes().some((item) => item.path === targetLocalePage) ? (
            // try to keep current hash across languages
            fullPath.replace(path, targetLocalePage)
          ) : (
            // or fallback to homepage
            targetThemeLocale.home ?? targetLocalePath
          );
        }
        return {
          text,
          link
        };
      })
    };
    return languageDropdown;
  });
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo || null);
  const repoLink2 = computed(() => repo.value ? Le(repo.value) : null);
  const repoType = computed(() => repo.value ? Ne(repo.value) : null);
  const repoLabel = computed(() => repoLink2.value ? themeLocale.value.repoLabel ?? (repoType.value === null ? "Source" : repoType.value) : null);
  return computed(() => {
    if (!repoLink2.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value || "Source",
      label: repoLabel.value,
      link: repoLink2.value
    };
  });
};
defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? h$1("div", { class: "nav-item" }, h$1(DropdownLink, { class: "i18n-dropdown", config: dropdown.value }, {
      title: () => {
        var _a2;
        return h$1(I18nIcon, {
          "aria-label": (_a2 = dropdown.value) == null ? void 0 : _a2.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    })) : null;
  }
});
const navScreenDropdown = "";
const NavScreenDropdown = defineComponent({
  name: "NavScreenDropdown",
  props: {
    /**
     * Navbar Screen Dropdown list config
     *
     * 导航栏下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const page2 = usePageData();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      h$1("button", {
        class: ["nav-screen-dropdown-title", { active: open.value }],
        type: "button",
        "aria-label": dropdownAriaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        h$1("span", { class: "title" }, [
          h$1(HopeIcon, { icon: config2.value.icon }),
          props.config.text
        ]),
        h$1("span", { class: ["arrow", open.value ? "down" : "end"] })
      ]),
      h$1("ul", {
        class: ["nav-screen-dropdown", { hide: !open.value }]
      }, config2.value.children.map((child) => h$1("li", { class: "dropdown-item" }, "children" in child ? [
        h$1("h4", { class: "dropdown-subtitle" }, child.link ? h$1(AutoLink, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config2.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : h$1("span", child.text)),
        h$1("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => h$1("li", { class: "dropdown-subitem" }, h$1(AutoLink, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config2.value.children))
              open.value = false;
          }
        }))))
      ] : h$1(AutoLink, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config2.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});
const navScreenLinks = "";
const NavScreenLinks = defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h$1("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config2) => h$1("div", { class: "navbar-links-item" }, "children" in config2 ? h$1(NavScreenDropdown, { config: config2 }) : h$1(AutoLink, { config: config2 })))) : null;
  }
});
const DarkIcon = () => h$1(G, { name: "dark" }, () => h$1("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
const LightIcon = () => h$1(G, { name: "light" }, () => h$1("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
const AutoIcon = () => h$1(G, { name: "auto" }, () => h$1("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";
const EnterFullScreenIcon = () => h$1(G, { name: "enter-fullscreen" }, () => h$1("path", {
  d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"
}));
EnterFullScreenIcon.displayName = "EnterFullScreenIcon";
const CancelFullScreenIcon = () => h$1(G, { name: "cancel-fullscreen" }, () => h$1("path", {
  d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"
}));
CancelFullScreenIcon.displayName = "CancelFullScreenIcon";
const OutlookIcon = () => h$1(G, { name: "outlook" }, () => [
  h$1("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";
const darkModeSymbol = Symbol.for("darkMode");
const useDarkmode = () => {
  const darkmode = inject(darkModeSymbol);
  if (!darkmode)
    throw new Error("useDarkmode() is called without provider.");
  return darkmode;
};
const injectDarkmode = (app) => {
  const themeData2 = useThemeData();
  const isDarkPreferred = usePreferredDark();
  const status = useStorage("vuepress-theme-hope-scheme", "auto");
  const config2 = computed(() => themeData2.value.darkmode || "switch");
  const isDarkmode = computed(() => {
    const darkmode = config2.value;
    return darkmode === "disable" ? false : (
      // force darkmode
      darkmode === "enable" ? true : (
        // auto
        darkmode === "auto" ? isDarkPreferred.value : (
          // toggle
          darkmode === "toggle" ? status.value === "dark" : (
            // switch
            status.value === "dark" || status.value === "auto" && isDarkPreferred.value
          )
        )
      )
    );
  });
  const canToggle = computed(() => {
    const darkmode = config2.value;
    return darkmode === "switch" || darkmode === "toggle";
  });
  app.provide(darkModeSymbol, {
    canToggle,
    config: config2,
    isDarkmode,
    status
  });
  Object.defineProperties(app.config.globalProperties, {
    $isDarkmode: { get: () => isDarkmode.value }
  });
};
const setupDarkmode = () => {
  const { isDarkmode } = useDarkmode();
  const updateDOM = (isDark = isDarkmode.value) => document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  onMounted(() => {
    watch(isDarkmode, updateDOM, { immediate: true });
  });
};
const appearanceSwitch = "";
const AppearanceSwitch = defineComponent({
  name: "AppearanceSwitch",
  setup() {
    const { config: config2, status } = useDarkmode();
    const toggleDarkMode = () => {
      if (config2.value === "switch")
        status.value = {
          light: "dark",
          dark: "auto",
          auto: "light"
        }[status.value];
      else
        status.value = status.value === "light" ? "dark" : "light";
    };
    return () => h$1("button", {
      id: "appearance-switch",
      onClick: () => toggleDarkMode()
    }, [
      h$1(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      h$1(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      h$1(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});
const AppearanceMode = defineComponent({
  name: "AppearanceMode",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { canToggle } = useDarkmode();
    const locale = computed(() => themeLocale.value.outlookLocales.darkmode);
    return () => canToggle.value ? h$1("div", { class: "appearance-wrapper" }, [
      h$1("label", { class: "appearance-title", for: "appearance-switch" }, locale.value),
      h$1(AppearanceSwitch)
    ]) : null;
  }
});
const themeColorPicker = "";
const ThemeColorPicker = defineComponent({
  name: "ThemeColorPicker",
  props: {
    /**
     * Theme color picker config
     *
     * 主题色选择器配置
     */
    themeColor: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const setThemeColor = (theme = "") => {
      const classes = document.documentElement.classList;
      const themes = at(props.themeColor).map((color) => `theme-${color}`);
      if (!theme) {
        localStorage.removeItem("theme");
        classes.remove(...themes);
        return;
      }
      classes.remove(...themes.filter((themeColorClass) => themeColorClass !== `theme-${theme}`));
      classes.add(`theme-${theme}`);
      localStorage.setItem("theme", theme);
    };
    onMounted(() => {
      const theme = localStorage.getItem("theme");
      if (theme)
        setThemeColor(theme);
    });
    return () => h$1("ul", { id: "theme-color-picker" }, [
      h$1("li", h$1("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      ...Tt(props.themeColor).map(([color, value]) => h$1("li", h$1("span", {
        style: { background: value },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});
const ThemeColor = defineComponent({
  name: "ThemeColor",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = computed(() => themeLocale.value.outlookLocales.themeColor);
    const themeColor = computed(() => {
      const { themeColor: themeColor2 } = themeData2.value;
      return themeColor2 === false ? null : themeColor2;
    });
    return () => themeColor.value ? h$1("div", { class: "theme-color-wrapper" }, [
      h$1("label", { class: "theme-color-title", for: "theme-color-picker" }, locale.value),
      h$1(ThemeColorPicker, { themeColor: themeColor.value })
    ]) : null;
  }
});
const toggleFullScreenButton = "";
const ToggleFullScreenButton = defineComponent({
  name: "ToggleFullScreenButton",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { isSupported, isFullscreen, toggle } = useFullscreen();
    const fullscreenLocale = computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => isSupported ? h$1("div", { class: "full-screen-wrapper" }, [
      h$1("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      h$1("button", {
        class: "full-screen",
        id: "full-screen-switch",
        ariaPressed: isFullscreen.value,
        onClick: () => toggle()
      }, isFullscreen.value ? h$1(CancelFullScreenIcon) : h$1(EnterFullScreenIcon))
    ]) : null;
  }
});
const OutlookSettings = defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen);
    return () => h$1(ClientOnly, () => [
      enableThemeColor.value ? h$1(ThemeColor) : null,
      h$1(AppearanceMode),
      enableFullScreen.value ? h$1(ToggleFullScreenButton) : null
    ]);
  }
});
const navScreen = "";
const NavScreen = defineComponent({
  name: "NavScreen",
  props: {
    /**
     * Whether to show the screen
     *
     * 是否显示
     */
    show: Boolean
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const page2 = usePageData();
    const { isMobile } = useWindowSize();
    const body = ref();
    const isLocked = useScrollLock(body);
    onMounted(() => {
      body.value = document.body;
      watch(isMobile, (value) => {
        if (!value && props.show) {
          isLocked.value = false;
          emit("close");
        }
      });
      watch(() => page2.value.path, () => {
        isLocked.value = false;
        emit("close");
      });
    });
    onUnmounted(() => {
      isLocked.value = false;
    });
    return () => h$1(Transition, {
      name: "fade",
      onEnter: () => {
        isLocked.value = true;
      },
      onAfterLeave: () => {
        isLocked.value = false;
      }
    }, () => {
      var _a2, _b2;
      return props.show ? h$1("div", { id: "nav-screen" }, h$1("div", { class: "container" }, [
        (_a2 = slots["before"]) == null ? void 0 : _a2.call(slots),
        h$1(NavScreenLinks),
        h$1("div", { class: "outlook-wrapper" }, h$1(OutlookSettings)),
        (_b2 = slots["after"]) == null ? void 0 : _b2.call(slots)
      ])) : null;
    });
  }
});
const navbarBrand = "";
const NavbarBrand = defineComponent({
  name: "NavbarBrand",
  setup() {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandTitle = computed(() => siteLocale.value.title);
    const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
    const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
    return () => h$1(RouterLink, { to: siteBrandLink.value, class: "brand" }, () => [
      siteBrandLogo.value ? h$1("img", {
        class: ["logo", { light: Boolean(siteBrandLogoDark.value) }],
        src: siteBrandLogo.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandLogoDark.value ? h$1("img", {
        class: ["logo dark"],
        src: siteBrandLogoDark.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandTitle.value ? h$1("span", {
        class: [
          "site-name",
          {
            "hide-in-pad": siteBrandLogo.value && themeLocale.value.hideSiteNameOnMobile !== false
          }
        ]
      }, siteBrandTitle.value) : null
    ]);
  }
});
const navbarLinks = "";
const NavbarLinks = defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h$1("nav", { class: "nav-links" }, [
      ...navbarConfig.value.map((config2) => h$1("div", { class: "nav-item hide-in-mobile" }, "children" in config2 ? h$1(DropdownLink, { config: config2 }) : h$1(AutoLink, { config: config2 })))
    ]) : null;
  }
});
const repoLink = "";
const RepoLink = defineComponent({
  name: "RepoLink",
  components: { BitbucketIcon: bt, GiteeIcon: yt, GitHubIcon: gt, GitlabIcon: $t, SourceIcon: wt },
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? h$1("div", { class: "nav-item" }, h$1("a", {
      class: "repo-link",
      href: repo.value.link,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": repo.value.label
    }, h$1(resolveComponent(`${repo.value.type}Icon`), {
      style: {
        width: "1.25rem",
        height: "1.25rem",
        verticalAlign: "middle"
      }
    }))) : null;
  }
});
const toggleNavbarButton = "";
const ToggleNavbarButton = ({ active = false }, { emit }) => h$1("button", {
  class: ["toggle-navbar-button", { "is-active": active }],
  "aria-label": "Toggle Navbar",
  "aria-expanded": active,
  "aria-controls": "nav-screen",
  onClick: () => emit("toggle")
}, h$1("span", { class: "button-container" }, [
  h$1("span", { class: "button-top" }),
  h$1("span", { class: "button-middle" }),
  h$1("span", { class: "button-bottom" })
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
const toggleSidebarButton = "";
const ToggleSidebarButton = (_, { emit }) => h$1("button", {
  class: "toggle-sidebar-button",
  title: "Toggle Sidebar",
  onClick: () => emit("toggle")
}, h$1("span", { class: "icon" }));
ToggleSidebarButton.displayName = "ToggleSidebarButton";
ToggleSidebarButton.emits = ["toggle"];
const outlookButton = "";
const OutlookButton = defineComponent({
  name: "OutlookButton",
  setup() {
    const { isSupported } = useFullscreen();
    const themeData2 = useThemeData();
    const pure = usePure();
    const page2 = usePageData();
    const { canToggle } = useDarkmode();
    const open = ref(false);
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen && isSupported);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    return () => canToggle.value || enableFullScreen.value || enableThemeColor.value ? h$1(
      "div",
      { class: "nav-item hide-in-mobile" },
      // only AppearanceSwitch is enabled
      canToggle.value && !enableFullScreen.value && !enableThemeColor.value ? h$1(AppearanceSwitch) : (
        // only FullScreen is enabled
        enableFullScreen.value && !canToggle.value && !enableThemeColor.value ? h$1(ToggleFullScreenButton) : h$1("button", {
          class: ["outlook-button", { open: open.value }],
          tabindex: "-1",
          ariaHidden: true
        }, [
          h$1(OutlookIcon),
          h$1("div", { class: "outlook-dropdown" }, h$1(OutlookSettings))
        ])
      )
    ) : null;
  }
});
const navbar = "";
const Navbar = defineComponent({
  name: "NavBar",
  emits: ["toggleSidebar"],
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const { isMobile } = useWindowSize();
    const showScreen = ref(false);
    const autoHide = computed(() => {
      const { navbarAutoHide = "mobile" } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
    const navbarLayout = computed(() => themeLocale.value.navbarLayout || {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"]
    });
    return () => {
      var _a2, _b2, _c, _d, _e2, _f;
      const map = {
        Brand: h$1(NavbarBrand),
        Language: null,
        Links: h$1(NavbarLinks),
        Repo: h$1(RepoLink),
        Outlook: h$1(OutlookButton),
        Search: Vt("Docsearch") ? h$1(resolveComponent("Docsearch")) : Vt("SearchBox") ? h$1(resolveComponent("SearchBox")) : Vt("SearchBox") ? h$1(resolveComponent("SearchBox")) : null
      };
      return [
        h$1("header", {
          class: [
            "navbar",
            {
              "auto-hide": autoHide.value,
              "hide-icon": themeLocale.value.navbarIcon === false
            }
          ],
          id: "navbar"
        }, [
          h$1("div", { class: "navbar-start" }, [
            // @ts-ignore
            h$1(ToggleSidebarButton, {
              onToggle: () => {
                if (showScreen.value)
                  showScreen.value = false;
                emit("toggleSidebar");
              }
            }),
            (_a2 = slots["startBefore"]) == null ? void 0 : _a2.call(slots),
            ...(navbarLayout.value.start || []).map((item) => map[item]),
            (_b2 = slots["startAfter"]) == null ? void 0 : _b2.call(slots)
          ]),
          h$1("div", { class: "navbar-center" }, [
            (_c = slots["centerBefore"]) == null ? void 0 : _c.call(slots),
            ...(navbarLayout.value.center || []).map((item) => map[item]),
            (_d = slots["centerAfter"]) == null ? void 0 : _d.call(slots)
          ]),
          h$1("div", { class: "navbar-end" }, [
            (_e2 = slots["endBefore"]) == null ? void 0 : _e2.call(slots),
            ...(navbarLayout.value.end || []).map((item) => map[item]),
            (_f = slots["endAfter"]) == null ? void 0 : _f.call(slots),
            h$1(ToggleNavbarButton, {
              active: showScreen.value,
              onToggle: () => {
                showScreen.value = !showScreen.value;
              }
            })
          ])
        ]),
        h$1(NavScreen, {
          show: showScreen.value,
          onClose: () => {
            showScreen.value = false;
          }
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots["screenTop"]) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots["screenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        })
      ];
    };
  }
});
const isActiveSidebarItem = (route, item, exact = false) => {
  if ("activeMatch" in item)
    return new RegExp(item.activeMatch).test(route.path);
  if (Ce(route, item.link))
    return true;
  if (item.children && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
const isMatchedSidebarItem = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isMatchedSidebarItem(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    }) || "prefix" in item && Ce(route, item.prefix);
  return false;
};
const renderItem = (config2, props) => config2.link ? (
  // if the item has link, render it as `<AutoLink>`
  h$1(AutoLink, {
    ...props,
    config: config2
  })
) : (
  // if the item only has text, render it as `<p>`
  h$1("p", props, [h$1(HopeIcon, { icon: config2.icon }), config2.text])
);
const renderChildren$1 = (children) => {
  const route = useRoute();
  if (!children)
    return null;
  return h$1("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
    const active = isActiveSidebarItem(route, child, true);
    return h$1("li", { class: "sidebar-sub-header" }, [
      renderItem(child, {
        class: ["sidebar-link", "heading", { active }]
      }),
      renderChildren$1(child.children)
    ]);
  }));
};
const sidebarData = {};
const resolvePrefix = (prefix = "", path = "") => _e(path) ? path : `${ensureEndingSlash(prefix)}${path}`;
const headerToSidebarItem = (header, headerDepth) => {
  const page2 = usePageData();
  return {
    type: "heading",
    text: header.title,
    link: `${page2.value.path}#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, headerDepth)
  };
};
const headersToSidebarItemChildren = (headers, headerDepth) => headerDepth > 0 ? headers.map((header) => headerToSidebarItem(header, headerDepth - 1)) : [];
const resolveHeadingSidebarItems = (headerDepth) => {
  const page2 = usePageData();
  return headersToSidebarItemChildren(page2.value.headers, headerDepth);
};
const resolveArraySidebarItems = (sidebarConfig, headerDepth, prefix = "") => {
  const page2 = usePageData();
  const handleChildItem = (item, pathPrefix = prefix) => {
    var _a2;
    const childItem = isString$1(item) ? useAutoLink(resolvePrefix(pathPrefix, item)) : item.link ? {
      ...item,
      ...!isLinkExternal(item.link) ? { link: useAutoLink(resolvePrefix(pathPrefix, item.link)).link } : {}
    } : item;
    if ("children" in childItem) {
      const prefix2 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix2] : childItem.children;
      return {
        type: "group",
        ...childItem,
        prefix: prefix2,
        children: children.map((item2) => handleChildItem(item2, prefix2))
      };
    }
    return {
      type: "page",
      ...childItem,
      children: (
        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        childItem.link === page2.value.path ? headersToSidebarItemChildren(
          // skip h1 header
          ((_a2 = page2.value.headers[0]) == null ? void 0 : _a2.level) === 1 ? page2.value.headers[0].children : page2.value.headers,
          headerDepth
        ) : []
      )
    };
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, headerDepth) => {
  const page2 = usePageData();
  const sidebarRoutes = at(sidebarConfig).sort((x2, y2) => y2.length - x2.length);
  for (const base of sidebarRoutes)
    if (_t(decodeURI(page2.value.path), base)) {
      const matchedConfig = sidebarConfig[base];
      return matchedConfig ? resolveArraySidebarItems(matchedConfig === "structure" ? sidebarData[base] : matchedConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : matchedConfig, headerDepth, base) : [];
    }
  console.warn(`${page2.value.path} is missing sidebar config.`);
  return [];
};
const resolveSidebarItems = () => {
  const routeLocale = useRouteLocale();
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarConfig = frontmatter.value.home ? false : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure";
  const headerDepth = frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2;
  return sidebarConfig === false ? [] : sidebarConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : sidebarConfig === "structure" ? resolveArraySidebarItems(sidebarData[routeLocale.value], headerDepth, routeLocale.value) : isArray(sidebarConfig) ? resolveArraySidebarItems(sidebarConfig, headerDepth) : isPlainObject(sidebarConfig) ? resolveMultiSidebarItems(sidebarConfig, headerDepth) : [];
};
const sidebarItemsSymbol = Symbol.for("sidebarItems");
const setupSidebarItems = () => {
  const sidebarItems = computed(() => resolveSidebarItems());
  provide(sidebarItemsSymbol, sidebarItems);
};
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems)
    throw new Error("useSidebarItems() is called without provider.");
  return sidebarItems;
};
const sidebarChild = "";
const SidebarChild = defineComponent({
  name: "SidebarChild",
  props: {
    /**
     * Sidebar item config
     *
     * 侧边栏项目配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    return () => [
      renderItem(props.config, {
        class: [
          "sidebar-link",
          `sidebar-${props.config.type}`,
          { active: isActiveSidebarItem(route, props.config, true) }
        ],
        exact: true
      }),
      renderChildren$1(props.config.children)
    ];
  }
});
const sidebarGroup = "";
const SidebarGroup = defineComponent({
  name: "SidebarGroup",
  props: {
    /**
     * Sidebar group item config
     *
     * 侧边栏分组配置
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * Whether current group is open
     *
     * 当前分组是否展开
     */
    open: {
      type: Boolean,
      required: true
    }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    const route = useRoute();
    const active = computed(() => isActiveSidebarItem(route, props.config));
    const exact = computed(() => isActiveSidebarItem(route, props.config, true));
    return () => {
      const { collapsible, children = [], icon, prefix, link, text } = props.config;
      return h$1("section", { class: "sidebar-group" }, [
        h$1(collapsible ? "button" : "p", {
          class: [
            "sidebar-heading",
            {
              clickable: collapsible || link,
              exact: exact.value,
              active: active.value
            }
          ],
          ...collapsible ? {
            onClick: () => emit("toggle"),
            onKeydown: (event) => {
              if (event.key === "Enter")
                emit("toggle");
            }
          } : {}
        }, [
          // icon
          h$1(HopeIcon, { icon }),
          // title
          link ? h$1(RouterLink, { to: link, class: "title" }, () => text) : h$1("span", { class: "title" }, text),
          // arrow
          collapsible ? h$1("span", { class: ["arrow", props.open ? "down" : "end"] }) : null
        ]),
        props.open || !collapsible ? h$1(SidebarLinks, { key: prefix, config: children }) : null
      ]);
    };
  }
});
const sidebarLinks = "";
const SidebarLinks = defineComponent({
  name: "SidebarLinks",
  props: {
    /**
     * Sidebar links config
     *
     * 侧边栏链接配置
     */
    config: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const openGroupIndex = ref(-1);
    const toggleGroup = (index2) => {
      openGroupIndex.value = index2 === openGroupIndex.value ? -1 : index2;
    };
    watch(() => route.path, () => {
      const index2 = props.config.findIndex((item) => isMatchedSidebarItem(route, item));
      openGroupIndex.value = index2;
    }, { immediate: true, flush: "post" });
    return () => h$1("ul", { class: "sidebar-links" }, props.config.map((config2, index2) => h$1("li", config2.type === "group" ? h$1(SidebarGroup, {
      config: config2,
      open: index2 === openGroupIndex.value,
      onToggle: () => toggleGroup(index2)
    }) : h$1(SidebarChild, { config: config2 }))));
  }
});
const sidebar = "";
const Sidebar = defineComponent({
  name: "SideBar",
  setup(_props, { slots }) {
    const route = useRoute();
    const themeLocale = useThemeLocaleData();
    const sidebarItems = useSidebarItems();
    const sidebar2 = ref();
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-link[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar2.value.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop)
          activeSidebarItem.scrollIntoView(true);
        else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight)
          activeSidebarItem.scrollIntoView(false);
      });
    });
    return () => {
      var _a2, _b2, _c;
      return h$1("aside", {
        class: [
          "sidebar",
          { "hide-icon": themeLocale.value.sidebarIcon === false }
        ],
        id: "sidebar",
        ref: sidebar2
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        ((_b2 = slots["default"]) == null ? void 0 : _b2.call(slots)) || h$1(SidebarLinks, { config: sidebarItems.value }),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const common = "";
const CommonWrapper = defineComponent({
  name: "CommonWrapper",
  props: {
    /**
     * Whether disable navbar
     *
     * 是否禁用导航栏
     */
    noNavbar: Boolean,
    /**
     * Whether disable sidebar
     *
     * 是否禁用侧边栏
     */
    noSidebar: Boolean
  },
  setup(props, { slots }) {
    const router = useRouter();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { isMobile, isWide } = useWindowSize();
    const [isMobileSidebarOpen, toggleMobileSidebar] = useToggle(false);
    const [isDesktopSidebarCollapsed, toggleDesktopSidebar] = useToggle(false);
    const sidebarItems = useSidebarItems();
    const body = ref();
    const isLocked = useScrollLock(body);
    const hideNavbar = ref(false);
    const enableNavbar = computed(() => {
      if (props.noNavbar)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar === false)
        return false;
      return Boolean(page2.value.title || themeLocale.value.logo || themeLocale.value.repo || themeLocale.value.navbar);
    });
    const enableSidebar = computed(() => {
      if (props.noSidebar)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e2) => {
      touchStart.x = e2.changedTouches[0].clientX;
      touchStart.y = e2.changedTouches[0].clientY;
    };
    const onTouchEnd = (e2) => {
      const dx = e2.changedTouches[0].clientX - touchStart.x;
      const dy = e2.changedTouches[0].clientY - touchStart.y;
      if (
        // horizontal swipe
        Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40
      )
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
    };
    const enableToc = computed(() => frontmatter.value.home ? false : frontmatter.value.toc || themeLocale.value.toc !== false && frontmatter.value.toc !== false);
    const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let lastDistance = 0;
    useEventListener("scroll", useThrottleFn(() => {
      const distance = getScrollTop();
      if (distance <= 58 || distance < lastDistance)
        hideNavbar.value = false;
      else if (lastDistance + 200 < distance && !isMobileSidebarOpen.value)
        hideNavbar.value = true;
      lastDistance = distance;
    }, 300, true));
    watch(isMobileSidebarOpen, (value) => {
      isLocked.value = value;
    });
    watch(isMobile, (value) => {
      if (!value)
        toggleMobileSidebar(false);
    });
    onMounted(() => {
      body.value = document.body;
      const unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
      onUnmounted(() => {
        unregisterRouterHook();
      });
    });
    return () => h$1(Vt("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : Rt, () => {
      var _a2;
      return h$1("div", {
        class: [
          "theme-container",
          // classes
          {
            "no-navbar": !enableNavbar.value,
            "no-sidebar": !enableSidebar.value && !(slots["sidebar"] || slots["sidebarTop"] || slots["sidebarBottom"]),
            "has-toc": enableToc.value,
            "hide-navbar": hideNavbar.value,
            "sidebar-collapsed": !isMobile.value && !isWide.value && isDesktopSidebarCollapsed.value,
            "sidebar-open": isMobile.value && isMobileSidebarOpen.value
          },
          frontmatter.value.containerClass || ""
        ],
        onTouchStart,
        onTouchEnd
      }, [
        // navbar
        enableNavbar.value ? h$1(Navbar, { onToggleSidebar: () => toggleMobileSidebar() }, {
          startBefore: () => {
            var _a3;
            return (_a3 = slots["navbarStartBefore"]) == null ? void 0 : _a3.call(slots);
          },
          startAfter: () => {
            var _a3;
            return (_a3 = slots["navbarStartAfter"]) == null ? void 0 : _a3.call(slots);
          },
          centerBefore: () => {
            var _a3;
            return (_a3 = slots["navbarCenterBefore"]) == null ? void 0 : _a3.call(slots);
          },
          centerAfter: () => {
            var _a3;
            return (_a3 = slots["navbarCenterAfter"]) == null ? void 0 : _a3.call(slots);
          },
          endBefore: () => {
            var _a3;
            return (_a3 = slots["navbarEndBefore"]) == null ? void 0 : _a3.call(slots);
          },
          endAfter: () => {
            var _a3;
            return (_a3 = slots["navbarEndAfter"]) == null ? void 0 : _a3.call(slots);
          },
          screenTop: () => {
            var _a3;
            return (_a3 = slots["navScreenTop"]) == null ? void 0 : _a3.call(slots);
          },
          screenBottom: () => {
            var _a3;
            return (_a3 = slots["navScreenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }) : null,
        // sidebar mask
        h$1(Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? h$1("div", {
          class: "sidebar-mask",
          onClick: () => toggleMobileSidebar(false)
        }) : null),
        // toggle sidebar button
        h$1(Transition, { name: "fade" }, () => isMobile.value ? null : h$1("div", {
          class: "toggle-sidebar-wrapper",
          onClick: () => toggleDesktopSidebar()
        }, h$1("span", {
          class: [
            "arrow",
            isDesktopSidebarCollapsed.value ? "end" : "start"
          ]
        }))),
        // sidebar
        h$1(Sidebar, {}, {
          ...slots["sidebar"] ? {
            default: () => {
              var _a3;
              return (_a3 = slots["sidebar"]) == null ? void 0 : _a3.call(slots);
            }
          } : {},
          top: () => {
            var _a3;
            return (_a3 = slots["sidebarTop"]) == null ? void 0 : _a3.call(slots);
          },
          bottom: () => {
            var _a3;
            return (_a3 = slots["sidebarBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }),
        (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots),
        h$1(PageFooter)
      ]);
    });
  }
});
const featurePanel = "";
const FeaturePanel = defineComponent({
  name: "FeaturePanel",
  props: {
    /**
     * Feature config
     */
    items: {
      type: Object,
      default: () => []
    },
    /**
     * Feature header
     */
    header: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    return () => h$1("div", { class: "feature-panel" }, [
      props.header ? h$1("h2", { class: "feature-header" }, props.header) : null,
      props.items.length ? h$1("div", { class: "feature-wrapper" }, props.items.map((feature) => {
        const children = [
          h$1("h3", [
            h$1(HopeIcon, { icon: feature.icon }),
            h$1("span", { innerHTML: feature.title })
          ]),
          h$1("p", { innerHTML: feature.details })
        ];
        return feature.link ? isLinkExternal(feature.link) ? h$1("a", {
          class: "feature-item link",
          href: feature.link,
          role: "navigation",
          "aria-label": feature.title,
          target: "_blank"
        }, children) : h$1(RouterLink, {
          class: "feature-item link",
          to: feature.link,
          role: "navigation",
          "aria-label": feature.title
        }, () => children) : h$1("div", { class: "feature-item" }, children);
      })) : null
    ]);
  }
});
const DropTransition = defineComponent({
  name: "DropTransition",
  props: {
    /**
     * @description Transition type
     */
    type: {
      type: String,
      default: "single"
    },
    /**
     * @description Transition delay
     */
    delay: { type: Number, default: 0 },
    /**
     * @description Transition duration
     */
    duration: { type: Number, default: 0.25 },
    /**
     * @description appear
     */
    appear: Boolean
  },
  setup(props, { slots }) {
    const setStyle = (item) => {
      item.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      item.style.transform = "translateY(-20px)";
      item.style.opacity = "0";
    };
    const unsetStyle = (item) => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    };
    return () => h$1(
      // @ts-ignore
      props.type === "single" ? Transition : TransitionGroup,
      {
        name: "drop",
        appear: props.appear,
        onAppear: setStyle,
        onAfterAppear: unsetStyle,
        onEnter: setStyle,
        onAfterEnter: unsetStyle,
        onBeforeLeave: setStyle
      },
      () => {
        var _a2;
        return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
      }
    );
  }
});
const heroInfo = "";
const HeroInfo = defineComponent({
  name: "HeroInfo",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const heroText = computed(() => {
      if (frontmatter.value.heroText === false)
        return false;
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === false)
        return false;
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = computed(() => {
      if (!frontmatter.value.heroImage)
        return null;
      return withBase(frontmatter.value.heroImage);
    });
    const heroImageDark = computed(() => {
      if (!frontmatter.value.heroImageDark)
        return null;
      return withBase(frontmatter.value.heroImageDark);
    });
    const heroAlt = computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const actions = computed(() => frontmatter.value.actions ?? []);
    return () => {
      var _a2, _b2;
      return h$1("header", { class: "hero-info-wrapper" }, [
        ((_a2 = slots["heroImage"]) == null ? void 0 : _a2.call(slots)) || h$1(DropTransition, { appear: true, type: "group" }, () => [
          heroImage.value ? h$1("img", {
            key: "light",
            class: { light: heroImageDark.value },
            src: heroImage.value,
            alt: heroAlt.value
          }) : null,
          heroImageDark.value ? h$1("img", {
            key: "dark",
            class: "dark",
            src: heroImageDark.value,
            alt: heroAlt.value
          }) : null
        ]),
        ((_b2 = slots["heroInfo"]) == null ? void 0 : _b2.call(slots)) || h$1("div", { class: "hero-info" }, [
          heroText.value ? h$1(DropTransition, { appear: true, delay: 0.04 }, () => h$1("h1", { id: "main-title" }, heroText.value)) : null,
          tagline.value ? h$1(DropTransition, { appear: true, delay: 0.08 }, () => h$1("p", { class: "description" }, tagline.value)) : null,
          actions.value.length ? h$1(DropTransition, { appear: true, delay: 0.12 }, () => h$1("p", { class: "actions" }, actions.value.map((action) => h$1(AutoLink, {
            class: ["action-button", action.type || "default"],
            config: action,
            noExternalLinkIcon: true
          })))) : null
        ])
      ]);
    };
  }
});
const MarkdownContent = ({ custom }) => h$1(Content, { class: ["theme-hope-content", { custom }] });
MarkdownContent.displayName = "MarkdownContent";
MarkdownContent.props = {
  custom: Boolean
};
const homePage = "";
const HomePage = defineComponent({
  name: "HopePage",
  setup(_props, { slots }) {
    const pure = usePure();
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      const { features: features2 } = frontmatter.value;
      if (isArray(features2))
        return features2.some((item) => !("items" in item)) ? [{ items: features2 }] : features2;
      return [];
    });
    return () => {
      var _a2, _b2, _c;
      return h$1("main", {
        class: ["home project", { pure: pure.value }],
        id: "main-content",
        "aria-labelledby": frontmatter.value.heroText === null ? void 0 : "main-title"
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h$1(HeroInfo),
        features.value.map(({ header = "", items }, index2) => h$1(DropTransition, { appear: true, delay: 0.16 + index2 * 0.08 }, () => h$1(FeaturePanel, { header, items }))),
        (_b2 = slots["center"]) == null ? void 0 : _b2.call(slots),
        h$1(DropTransition, { appear: true, delay: 0.16 + features.value.length * 0.08 }, () => h$1(MarkdownContent)),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const getAncestorLinks = (path, routeLocale) => {
  const routePaths = path.replace(routeLocale, "/").split("/");
  const links = [];
  let link = removeEndingSlash(routeLocale);
  routePaths.forEach((element, index2) => {
    if (index2 !== routePaths.length - 1) {
      link += `${element}/`;
      links.push(link);
    } else if (element !== "") {
      link += element;
      links.push(link);
    }
  });
  return links;
};
const breadcrumb = "";
const BreadCrumb = defineComponent({
  name: "BreadCrumb",
  setup() {
    const router = useRouter();
    const page2 = usePageData();
    const routeLocale = useRouteLocale();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const config2 = ref([]);
    const enable = computed(() => {
      return (frontmatter.value.breadcrumb || frontmatter.value.breadcrumb !== false && themeLocale.value.breadcrumb !== false) && config2.value.length > 1;
    });
    const iconEnable = computed(() => frontmatter.value.breadcrumbIcon || frontmatter.value.breadcrumbIcon !== false && themeLocale.value.breadcrumbIcon !== false);
    const getBreadCrumbConfig = () => {
      const routes = router.getRoutes();
      const breadcrumbConfig = getAncestorLinks(page2.value.path, routeLocale.value).map((link) => {
        const route = routes.find((route2) => route2.path === link);
        if (route) {
          const { meta, path } = Ht(router, route.path);
          const title = meta[
            "s"
            /* ArticleInfoType.shortTitle */
          ] || meta[
            "t"
            /* ArticleInfoType.title */
          ];
          if (title)
            return {
              title,
              icon: meta[
                "i"
                /* ArticleInfoType.icon */
              ],
              path
            };
        }
        return null;
      }).filter((item) => item !== null);
      if (breadcrumbConfig.length > 1)
        config2.value = breadcrumbConfig;
    };
    onMounted(() => {
      getBreadCrumbConfig();
      watch(() => page2.value.path, getBreadCrumbConfig);
    });
    return () => h$1("nav", { class: ["breadcrumb", { disable: !enable.value }] }, enable.value ? h$1("ol", {
      vocab: "https://schema.org/",
      typeof: "BreadcrumbList"
    }, config2.value.map((item, index2) => h$1("li", {
      class: { "is-active": config2.value.length - 1 === index2 },
      property: "itemListElement",
      typeof: "ListItem"
    }, [
      h$1(RouterLink, {
        to: item.path,
        property: "item",
        typeof: "WebPage"
      }, () => [
        // icon
        iconEnable.value ? h$1(HopeIcon, { icon: item.icon }) : null,
        // text
        h$1("span", { property: "name" }, item.title || "Unknown")
      ]),
      // meta
      h$1("meta", { property: "position", content: index2 + 1 })
    ]))) : []);
  }
});
const pageNav = "";
const resolveFromFrontmatterConfig = (conf) => {
  if (conf === false)
    return false;
  if (isString$1(conf))
    return useAutoLink(conf, true);
  if (isPlainObject(conf))
    return conf;
  return null;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset2) => {
  const index2 = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index2 !== -1) {
    const targetItem = sidebarItems[index2 + offset2];
    if (!(targetItem == null ? void 0 : targetItem.link))
      return null;
    return targetItem;
  }
  for (const item of sidebarItems)
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset2);
      if (childResult)
        return childResult;
    }
  return null;
};
const PageNav = defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const page2 = usePageData();
    const navigate = useNavigate();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      return prevConfig === false ? null : prevConfig || (themeLocale.value.prevLink === false ? null : resolveFromSidebarItems(sidebarItems.value, page2.value.path, -1));
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      return nextConfig === false ? null : nextConfig || (themeLocale.value.nextLink === false ? null : resolveFromSidebarItems(sidebarItems.value, page2.value.path, 1));
    });
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextNavLink.value) {
            navigate(nextNavLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevNavLink.value) {
            navigate(prevNavLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    return () => prevNavLink.value || nextNavLink.value ? h$1("nav", { class: "page-nav" }, [
      prevNavLink.value ? h$1(AutoLink, { class: "prev", config: prevNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$1("div", { class: "hint" }, [
            h$1("span", { class: "arrow start" }),
            themeLocale.value.metaLocales.prev
          ]),
          h$1("div", { class: "link" }, [
            h$1(HopeIcon, {
              icon: (_a2 = prevNavLink.value) == null ? void 0 : _a2.icon
            }),
            (_b2 = prevNavLink.value) == null ? void 0 : _b2.text
          ])
        ];
      }) : null,
      nextNavLink.value ? h$1(AutoLink, { class: "next", config: nextNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$1("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            h$1("span", { class: "arrow end" })
          ]),
          h$1("div", { class: "link" }, [
            (_a2 = nextNavLink.value) == null ? void 0 : _a2.text,
            h$1(HopeIcon, {
              icon: (_b2 = nextNavLink.value) == null ? void 0 : _b2.icon
            })
          ])
        ];
      }) : null
    ]) : null;
  }
});
const AuthorIcon = () => h$1(G, { name: "author" }, () => h$1("path", {
  d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"
}));
AuthorIcon.displayName = "AuthorIcon";
const CalendarIcon = () => h$1(G, { name: "calendar" }, () => h$1("path", {
  d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"
}));
CalendarIcon.displayName = "CalendarIcon";
const CategoryIcon = () => h$1(G, { name: "category" }, () => h$1("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
const EyeIcon = () => h$1(G, { name: "eye" }, () => h$1("path", {
  d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"
}));
EyeIcon.displayName = "EyeIcon";
const FireIcon = () => h$1(G, { name: "fire" }, () => h$1("path", {
  d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"
}));
FireIcon.displayName = "FireIcon";
const PrintIcon = () => h$1(G, { name: "print" }, () => h$1("path", {
  d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"
}));
PrintIcon.displayName = "PrintIcon";
const TagIcon = () => h$1(G, { name: "tag" }, () => h$1("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
const TimerIcon = () => h$1(G, { name: "timer" }, () => h$1("path", {
  d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"
}));
TimerIcon.displayName = "TimerIcon";
const WordIcon = () => h$1(G, { name: "word" }, () => [
  h$1("path", {
    d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"
  }),
  h$1("path", {
    d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"
  })
]);
WordIcon.displayName = "WordIcon";
const useMetaLocale = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => themeLocale.value.metaLocales);
};
const readingTimeLocales = { "/": { "word": "约 $word 字", "less1Minute": "小于 1 分钟", "time": "大约 $time 分钟" } };
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = Ne(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "" } = themeLocale.value;
    const showEditLink = frontmatter.value.editLink ?? editLink ?? true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page2.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
const useUpdateTime = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
    if (!showLastUpdated)
      return null;
    if (!((_a2 = page2.value.git) == null ? void 0 : _a2.updatedTime))
      return null;
    const updatedDate = new Date((_b2 = page2.value.git) == null ? void 0 : _b2.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2;
    const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
    if (!showContributors)
      return null;
    return ((_a2 = page2.value.git) == null ? void 0 : _a2.contributors) ?? null;
  });
};
const authorInfo = "";
const AuthorInfo = defineComponent({
  name: "AuthorInfo",
  inheritAttrs: false,
  props: {
    /**
     * Author information
     *
     * 作者信息
     */
    author: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.author.length ? h$1("span", {
      class: "page-author-info",
      "aria-label": `${metaLocale.value.author}${props.pure ? "" : "🖊"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$1(AuthorIcon),
      h$1("span", props.author.map((item) => item.url ? h$1("a", {
        class: "page-author-item",
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, item.name) : h$1("span", { class: "page-author-item" }, item.name))),
      h$1("span", {
        property: "author",
        content: props.author.map((item) => item.name).join(", ")
      })
    ]) : null;
  }
});
const categoryInfo = "";
const CategoryInfo = defineComponent({
  name: "CategoryInfo",
  inheritAttrs: false,
  props: {
    /**
     * Category information
     *
     * 分类信息
     */
    category: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && page2.value.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.category.length ? h$1("span", {
      class: "page-category-info",
      "aria-label": `${metaLocale.value.category}${props.pure ? "" : "🌈"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$1(CategoryIcon),
      ...props.category.map(({ name, path }) => h$1("span", {
        class: [
          "page-category-item",
          {
            // TODO: magic number 9 is tricky here
            [`category${fe(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h$1("meta", {
        property: "articleSection",
        content: props.category.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const DateInfo = defineComponent({
  name: "DateInfo",
  inheritAttrs: false,
  props: {
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
      type: Object,
      default: null
    },
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
      type: String,
      default: ""
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const lang = usePageLang();
    const metaLocale = useMetaLocale();
    return () => {
      var _a2, _b2;
      return props.date ? h$1("span", {
        class: "page-date-info",
        "aria-label": `${metaLocale.value.date}${props.pure ? "" : "📅"}`,
        ...props.pure ? {} : { "data-balloon-pos": "down" }
      }, [
        h$1(CalendarIcon),
        h$1("span", h$1(ClientOnly, () => {
          var _a3;
          return props.localizedDate || ((_a3 = props.date.value) == null ? void 0 : _a3.toLocaleDateString(lang.value));
        })),
        h$1("meta", {
          property: "datePublished",
          // ISO Format Date string
          content: ((_b2 = (_a2 = props.date) == null ? void 0 : _a2.value) == null ? void 0 : _b2.toISOString()) || ""
        })
      ]) : null;
    };
  }
});
const originalInfo = "";
const OriginalInfo = defineComponent({
  name: "OriginalInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether the article is original
     *
     * 文章是否是原创
     */
    isOriginal: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.isOriginal ? h$1("span", { class: "page-original-info" }, metaLocale.value.origin) : null;
  }
});
defineComponent({
  name: "PageViewInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether show pageview and it's path
     *
     * 是否显示浏览量以及其路径
     */
    pageview: {
      type: [Boolean, String],
      default: false
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const pageviewElement = ref();
    const pageViews = ref(0);
    useMutationObserver(pageviewElement, () => {
      const count = pageviewElement.value.textContent;
      if (count && !isNaN(Number(count)))
        pageViews.value = Number(count);
    }, { childList: true });
    return () => props.pageview ? h$1("span", {
      class: "page-pageview-info",
      "aria-label": `${metaLocale.value.views}${props.pure ? "" : "🔢"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$1(pageViews.value < 1e3 ? EyeIcon : FireIcon),
      h$1("span", {
        ref: pageviewElement,
        class: "waline-pageview-count",
        id: "ArtalkPV",
        /** visitorID */
        "data-path": isString$1(props.pageview) ? props.pageview : withBase(route.path)
      }, "...")
    ]) : null;
  }
});
const ReadingTimeInfo = defineComponent({
  name: "ReadingTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = ne(readingTimeLocales);
    const readingTime = computed(() => {
      if (!props.readingTime)
        return null;
      const { minutes } = props.readingTime;
      return minutes < 1 ? { text: readingTimeLocale.value.less1Minute, time: "PT1M" } : {
        text: readingTimeLocale.value.time.replace("$time", Math.round(minutes).toString()),
        time: `PT${Math.round(minutes)}M`
      };
    });
    return () => readingTime.value ? h$1("span", {
      class: "page-reading-time-info",
      "aria-label": `${metaLocale.value.readingTime}${props.pure ? "" : "⌛"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$1(TimerIcon),
      h$1("span", readingTime.value.text),
      h$1("meta", {
        property: "timeRequired",
        content: readingTime.value.time
      })
    ]) : null;
  }
});
const tagInfo = "";
const TagInfo = defineComponent({
  name: "TagInfo",
  inheritAttrs: false,
  props: {
    /**
     * Tag information
     *
     * 标签信息
     */
    tag: {
      type: Array,
      default: () => []
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && page2.value.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.tag.length ? h$1("span", {
      class: "page-tag-info",
      "aria-label": `${metaLocale.value.tag}${props.pure ? "" : "🏷"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$1(TagIcon),
      ...props.tag.map(({ name, path }) => h$1("span", {
        class: [
          "page-tag-item",
          {
            // TODO: magic number 9 is tricky here
            [`tag${fe(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h$1("meta", {
        property: "keywords",
        content: props.tag.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const WordInfo = defineComponent({
  name: "ReadTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = ne(readingTimeLocales);
    const words = computed(() => {
      var _a2;
      return (_a2 = props.readingTime) == null ? void 0 : _a2.words.toString();
    });
    const wordText = computed(() => readingTimeLocale.value.word.replace("$word", words.value || ""));
    return () => words.value ? h$1("span", {
      class: "page-word-info",
      "aria-label": `${metaLocale.value.words}${props.pure ? "" : "🔠"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$1(WordIcon),
      h$1("span", wordText.value),
      h$1("meta", {
        property: "wordCount",
        content: words.value
      })
    ]) : null;
  }
});
const pageInfo = "";
const PageInfo = defineComponent({
  name: "PageInfo",
  components: {
    AuthorInfo,
    CategoryInfo,
    DateInfo,
    OriginalInfo,
    PageViewInfo: () => null,
    ReadingTimeInfo,
    TagInfo,
    WordInfo
  },
  props: {
    /**
     * Article information to display
     *
     * 待展示的文章信息
     */
    items: {
      type: [Array, Boolean],
      default: () => [
        "Author",
        "Original",
        "Date",
        "PageView",
        "ReadingTime",
        "Category",
        "Tag"
      ]
    },
    /**
     * Article information
     *
     * 文章信息配置
     */
    info: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const pure = usePure();
    return () => props.items ? h$1("div", { class: "page-info" }, props.items.map((item) => h$1(resolveComponent(`${item}Info`), {
      ...props.info,
      pure: pure.value
    }))) : null;
  }
});
const pageTitle = "";
const PageTitle = defineComponent({
  name: "PageTitle",
  setup() {
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { info, items } = usePageInfo();
    return () => h$1("div", { class: "page-title" }, [
      h$1("h1", [
        themeLocale.value.titleIcon === false ? null : h$1(HopeIcon, { icon: frontmatter.value.icon }),
        page2.value.title
      ]),
      h$1(PageInfo, {
        info: info.value,
        ...items.value === null ? {} : { items: items.value }
      }),
      h$1("hr")
    ]);
  }
});
const EditIcon = () => h$1(G, { name: "edit" }, () => [
  h$1("path", {
    d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
  }),
  h$1("path", {
    d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
  })
]);
EditIcon.displayName = "EditIcon";
const pageMeta = "";
const PageMeta = defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      const { metaLocales } = themeLocale.value;
      return h$1("footer", { class: "page-meta" }, [
        editLink.value ? h$1("div", { class: "meta-item edit-link" }, h$1(AutoLink, { class: "label", config: editLink.value }, { before: () => h$1(EditIcon) })) : null,
        h$1("div", { class: "meta-item git-info" }, [
          updateTime.value ? h$1("div", { class: "update-time" }, [
            h$1("span", { class: "label" }, `${metaLocales.lastUpdated}: `),
            h$1(ClientOnly, () => h$1("span", { class: "info" }, updateTime.value))
          ]) : null,
          contributors.value && contributors.value.length ? h$1("div", { class: "contributors" }, [
            h$1("span", { class: "label" }, `${metaLocales.contributors}: `),
            contributors.value.map(({ email, name }, index2) => [
              h$1("span", { class: "contributor", title: `email: ${email}` }, name),
              index2 !== contributors.value.length - 1 ? "," : ""
            ])
          ]) : null
        ])
      ]);
    };
  }
});
const printButton = "";
const PrintButton = defineComponent({
  name: "PrintButton",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    return () => themeData2.value.print === false ? null : h$1("button", {
      class: "print-button",
      title: themeLocale.value.metaLocales.print,
      onClick: () => {
        window.print();
      }
    }, h$1(PrintIcon));
  }
});
const toc = "";
const renderHeader = ({ title, level, slug }) => h$1(RouterLink, {
  to: `#${slug}`,
  class: ["toc-link", `level${level}`]
}, () => title);
const renderChildren = (headers, headerDepth) => {
  const route = useRoute();
  return headers.length && headerDepth > 0 ? h$1("ul", { class: "toc-list" }, headers.map((header) => [
    h$1("li", {
      class: [
        "toc-item",
        { active: Ce(route, `#${header.slug}`) }
      ]
    }, renderHeader(header)),
    renderChildren(header.children, headerDepth - 1)
  ])) : null;
};
const TOC = defineComponent({
  name: "TOC",
  props: {
    /**
     * TOC items config
     *
     * TOC 项目配置
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Max header nesting depth
     *
     * 最大的标题嵌套深度
     */
    headerDepth: {
      type: Number,
      default: 2
    }
  },
  setup(props, { slots }) {
    const route = useRoute();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const toc2 = ref();
    const scrollTo = (top) => {
      var _a2;
      (_a2 = toc2.value) == null ? void 0 : _a2.scrollTo({ top, behavior: "smooth" });
    };
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        if (toc2.value) {
          const activeTocItem = document.querySelector(`#toc a.toc-link[href$="${hash}"]`);
          if (!activeTocItem)
            return;
          const { top: tocTop, height: tocHeight } = toc2.value.getBoundingClientRect();
          const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
          if (activeTocItemTop < tocTop)
            scrollTo(toc2.value.scrollTop + activeTocItemTop - tocTop);
          else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight)
            scrollTo(toc2.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
        }
      });
    });
    return () => {
      var _a2, _b2;
      const tocHeaders = props.items.length ? renderChildren(props.items, props.headerDepth) : page2.value.headers ? renderChildren(page2.value.headers, props.headerDepth) : null;
      return tocHeaders ? h$1("div", { class: "toc-place-holder" }, [
        h$1("aside", { id: "toc" }, [
          (_a2 = slots["before"]) == null ? void 0 : _a2.call(slots),
          h$1("div", { class: "toc-header" }, [
            metaLocale.value.toc,
            h$1(PrintButton)
          ]),
          h$1("div", { class: "toc-wrapper", ref: toc2 }, tocHeaders),
          (_b2 = slots["after"]) == null ? void 0 : _b2.call(slots)
        ])
      ]) : null;
    };
  }
});
const page = "";
const NormalPage = defineComponent({
  name: "NormalPage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const { isDarkmode } = useDarkmode();
    const themeLocale = useThemeLocaleData();
    const tocEnable = computed(() => frontmatter.value.toc || frontmatter.value.toc !== false && themeLocale.value.toc !== false);
    return () => h$1("main", { class: "page", id: "main-content" }, h$1(Vt("LocalEncrypt") ? resolveComponent("LocalEncrypt") : Rt, () => {
      var _a2, _b2, _c, _d;
      return [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h$1(BreadCrumb),
        h$1(PageTitle),
        tocEnable.value ? h$1(TOC, {
          headerDepth: frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots["tocBefore"]) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots["tocAfter"]) == null ? void 0 : _a3.call(slots);
          }
        }) : null,
        (_b2 = slots["contentBefore"]) == null ? void 0 : _b2.call(slots),
        h$1(MarkdownContent),
        (_c = slots["contentAfter"]) == null ? void 0 : _c.call(slots),
        h$1(PageMeta),
        h$1(PageNav),
        Vt("CommentService") ? h$1(resolveComponent("CommentService"), {
          darkmode: isDarkmode.value
        }) : null,
        (_d = slots["bottom"]) == null ? void 0 : _d.call(slots)
      ];
    }));
  }
});
const skipLink = "";
const SkipLink = defineComponent({
  name: "SkipLink",
  props: {
    /** @description Content ID */
    content: {
      type: String,
      default: "main-content"
    }
  },
  setup(props) {
    const page2 = usePageData();
    const themeLocale = useThemeLocaleData();
    const skipToMainContent = ref();
    const focusMainContent = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    onMounted(() => {
      watch(() => page2.value.path, () => skipToMainContent.value.focus());
    });
    return () => [
      h$1("span", {
        ref: skipToMainContent,
        tabindex: "-1"
      }),
      h$1("a", {
        href: `#${props.content}`,
        class: "skip-link sr-only",
        onClick: focusMainContent
      }, themeLocale.value.routeLocales.skipToContent)
    ];
  }
});
const fadeSlideY = "";
const FadeSlideY = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const { resolve: onBeforeEnter, pending: onBeforeLeave } = useScrollPromise();
    return () => h$1(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a2;
      return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
    });
  }
});
const Layout = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  setup() {
    useThemeLocaleData();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const { isMobile } = useWindowSize();
    const sidebarDisplay = computed(() => "none");
    return () => [
      h$1(SkipLink),
      h$1(CommonWrapper, {}, {
        default: () => frontmatter.value.home ? h$1(HomePage) : h$1(FadeSlideY, () => h$1(NormalPage, { key: page2.value.path })),
        ...sidebarDisplay.value !== "none" ? { navScreenBottom: () => h$1(resolveComponent("BloggerInfo")) } : {},
        ...!isMobile.value && sidebarDisplay.value === "always" ? { sidebar: () => h$1(resolveComponent("BloggerInfo")) } : {}
      })
    ];
  }
});
const notFoundHint = "";
const NotFoundHint = defineComponent({
  name: "NotFoundHint",
  setup() {
    const themeLocale = useThemeLocaleData();
    const getMsg = () => {
      const messages = themeLocale.value.routeLocales["notFoundMsg"];
      return messages[Math.floor(Math.random() * messages.length)];
    };
    return () => h$1("div", { class: "not-found-hint" }, [
      h$1("p", { class: "error-code" }, "404"),
      h$1("h1", { class: "error-title" }, themeLocale.value.routeLocales["notFoundTitle"]),
      h$1("p", { class: "error-hint" }, getMsg())
    ]);
  }
});
const notFound = "";
const NotFound = defineComponent({
  name: "NotFound",
  setup(_props, { slots }) {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const { navigate } = useLink({
      to: themeLocale.value.home ?? routeLocale.value
    });
    return () => [
      h$1(SkipLink),
      h$1(CommonWrapper, { noSidebar: true }, () => {
        var _a2;
        return h$1("main", { class: "page not-found", id: "main-content" }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
          h$1(NotFoundHint),
          h$1("div", { class: "actions" }, [
            h$1("button", {
              class: "action-button",
              onClick: () => {
                window.history.go(-1);
              }
            }, themeLocale.value.routeLocales.back),
            h$1("button", { class: "action-button", onClick: () => navigate() }, themeLocale.value.routeLocales.home)
          ])
        ]);
      })
    ];
  }
});
const index = "";
const clientConfig11 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
    injectDarkmode(app);
    app.component("HopeIcon", HopeIcon);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
  },
  layouts: {
    Layout,
    NotFound
  }
});
const useDocsearchHotkeyListener = (callback) => {
  const remove = useEventListener("keydown", (event) => {
    if (event.key === "k" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      callback();
      remove();
    }
  });
};
const isSpecialClick = (event) => event.button === 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
const useDocsearchShim = () => {
  const router = useRouter();
  return {
    // render the hit component with custom `onClick` handler
    hitComponent: ({ hit, children }) => ({
      type: "a",
      ref: void 0,
      constructor: void 0,
      key: void 0,
      props: {
        href: hit.url,
        // handle `onClick` by `router.push`
        onClick: (event) => {
          if (isSpecialClick(event)) {
            return;
          }
          event.preventDefault();
          router.push(resolveRoutePathFromUrl(hit.url, "/model-system-design/"));
        },
        children
      },
      __v: null
    }),
    // navigation behavior triggered by `onKeyDown` internally
    navigator: {
      // when pressing Enter without metaKey
      navigate: ({ itemUrl }) => {
        router.push(resolveRoutePathFromUrl(itemUrl, "/model-system-design/"));
      }
    },
    // add search debounce
    transformSearchClient: (searchClient) => {
      const searchWithDebounce = r(searchClient.search, 500);
      return {
        ...searchClient,
        search: async (...args) => searchWithDebounce(...args)
      };
    }
  };
};
const getFacetFilters = (rawFacetFilters = [], lang) => [
  `lang:${lang}`,
  ...isArray(rawFacetFilters) ? rawFacetFilters : [rawFacetFilters]
];
const getSearchButtonTemplate = ({ buttonText = "Search", buttonAriaLabel = buttonText } = {}) => `<button type="button" class="DocSearch DocSearch-Button" aria-label="${buttonAriaLabel}"><span class="DocSearch-Button-Container"><svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${buttonText}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"><svg width="15" height="15" class="DocSearch-Control-Key-Icon"><path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path></svg></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`;
const POLL_INTERVAL = 16;
const pollToOpenDocsearch = () => {
  if (document.querySelector(".DocSearch-Modal"))
    return;
  const e2 = new Event("keydown");
  e2.key = "k";
  e2.metaKey = true;
  window.dispatchEvent(e2);
  setTimeout(pollToOpenDocsearch, POLL_INTERVAL);
};
const preconnectToAlgolia = (appId) => {
  const id = "algolia-preconnect";
  const rIC = window.requestIdleCallback || setTimeout;
  rIC(() => {
    if (document.head.querySelector(`#${id}`))
      return;
    const preconnect = document.createElement("link");
    preconnect.id = id;
    preconnect.rel = "preconnect";
    preconnect.href = `https://${appId}-dsn.algolia.net`;
    preconnect.crossOrigin = "";
    document.head.appendChild(preconnect);
  });
};
const optionsDefault = { "appId": "8FRYEU6KK8", "apiKey": "84f513df1e83406ba42179da778d87b4", "indexName": "dromara-fast-request", "locales": { "/": { "placeholder": "搜索文档", "translations": { "button": { "buttonText": "搜索文档" } } }, "/en": { "placeholder": "Search Documentation", "translations": { "button": { "buttonText": "Search Documentation" } } } } };
{
  __vitePreload(() => import("./style-18663bf8.js"), true ? [] : void 0);
  __vitePreload(() => import("./docsearch-cf1488f4.js"), true ? [] : void 0);
}
const Docsearch = defineComponent({
  name: "Docsearch",
  props: {
    containerId: {
      type: String,
      required: false,
      default: "docsearch-container"
    },
    options: {
      type: Object,
      required: false,
      default: () => optionsDefault
    }
  },
  setup(props) {
    const docsearchShim = useDocsearchShim();
    const lang = usePageLang();
    const routeLocale = useRouteLocale();
    const hasInitialized = ref(false);
    const hasTriggered = ref(false);
    const options = computed(() => {
      var _a2;
      return {
        ...props.options,
        ...(_a2 = props.options.locales) == null ? void 0 : _a2[routeLocale.value]
      };
    });
    const initialize = async () => {
      var _a2;
      const { default: docsearch } = await __vitePreload(() => import("./index-fe586050.js"), true ? [] : void 0);
      docsearch({
        ...docsearchShim,
        ...options.value,
        container: `#${props.containerId}`,
        searchParameters: {
          ...options.value.searchParameters,
          facetFilters: getFacetFilters((_a2 = options.value.searchParameters) == null ? void 0 : _a2.facetFilters, lang.value)
        }
      });
      hasInitialized.value = true;
    };
    const trigger = () => {
      if (hasTriggered.value || hasInitialized.value)
        return;
      hasTriggered.value = true;
      initialize();
      pollToOpenDocsearch();
      watch(routeLocale, initialize);
    };
    useDocsearchHotkeyListener(trigger);
    onMounted(() => preconnectToAlgolia(options.value.appId));
    return () => {
      var _a2;
      return [
        h$1("div", {
          id: props.containerId,
          style: { display: hasInitialized.value ? "block" : "none" }
        }),
        hasInitialized.value ? null : h$1("div", {
          onClick: trigger,
          innerHTML: getSearchButtonTemplate((_a2 = options.value.translations) == null ? void 0 : _a2.button)
        })
      ];
    };
  }
});
const clientConfig12 = defineClientConfig({
  enhance({ app }) {
    app.component("Docsearch", Docsearch);
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  K,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  l$1,
  Y,
  clientConfig9,
  I,
  clientConfig11,
  clientConfig12
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "y": "h", "t": "Modern System Design Interview", "i": "modernSystemDesignInterview" }, ["/index.html", "/README.md"]],
  ["v-fc036150", "/guide/about.html", { "y": "a", "t": "" }, ["/guide/about", "/guide/about.md"]],
  ["v-725da8d4", "/guide/01Introduction/01Introduction.html", { "y": "a", "t": "课程简介", "i": "start1" }, ["/guide/01Introduction/01Introduction", "/guide/01Introduction/01Introduction.md"]],
  ["v-6904c258", "/guide/01Introduction/02Course.html", { "y": "a", "t": "课程结构", "i": "config2" }, ["/guide/01Introduction/02Course", "/guide/01Introduction/02Course.md"]],
  ["v-5db34796", "/guide/02Interviews/01WhatIsInterview.html", { "y": "a", "t": "什么是系统设计面试?", "i": "activity" }, ["/guide/02Interviews/01WhatIsInterview", "/guide/02Interviews/01WhatIsInterview.md"]],
  ["v-19841e68", "/guide/02Interviews/02PrepareSuccess.html", { "y": "a", "t": "如何为成功做准备", "i": "codestring" }, ["/guide/02Interviews/02PrepareSuccess", "/guide/02Interviews/02PrepareSuccess.md"]],
  ["v-46818948", "/guide/02Interviews/03PerformWell.html", { "y": "a", "t": "如何表现出色", "i": "teamwork" }, ["/guide/02Interviews/03PerformWell", "/guide/02Interviews/03PerformWell.md"]],
  ["v-1e0f8810", "/guide/03Abstractions/01Abstractions.html", { "y": "a", "t": "为什么抽象很重要", "i": "license" }, ["/guide/03Abstractions/01Abstractions", "/guide/03Abstractions/01Abstractions.md"]],
  ["v-81697716", "/guide/03Abstractions/02RemotePerformCall.html", { "y": "a", "t": "网络抽象:远程过程调用", "i": "license" }, ["/guide/03Abstractions/02RemotePerformCall", "/guide/03Abstractions/02RemotePerformCall.md"]],
  ["v-d4f4285e", "/guide/03Abstractions/03Consistent.html", { "y": "a", "t": "一致性模型", "i": "discoverfill" }, ["/guide/03Abstractions/03Consistent", "/guide/03Abstractions/03Consistent.md"]],
  ["v-2ddacba1", "/guide/03Abstractions/04ErrorModel.html", { "y": "a", "t": "故障模型", "i": "codestring" }, ["/guide/03Abstractions/04ErrorModel", "/guide/03Abstractions/04ErrorModel.md"]],
  ["v-59b84364", "/guide/04Nonfunctional/01Availability.html", { "y": "a", "t": "可用性", "i": "code-box-fill" }, ["/guide/04Nonfunctional/01Availability", "/guide/04Nonfunctional/01Availability.md"]],
  ["v-24081220", "/guide/04Nonfunctional/02Reliability.html", { "y": "a", "t": "可靠性", "i": "versionCompare" }, ["/guide/04Nonfunctional/02Reliability", "/guide/04Nonfunctional/02Reliability.md"]],
  ["v-f8fb7008", "/guide/04Nonfunctional/03Scalability.html", { "y": "a", "t": "可扩展性", "i": "whats-new" }, ["/guide/04Nonfunctional/03Scalability", "/guide/04Nonfunctional/03Scalability.md"]],
  ["v-5abcbb8d", "/guide/04Nonfunctional/04Maintainability.html", { "y": "a", "t": "可维护性", "i": "contactGroup" }, ["/guide/04Nonfunctional/04Maintainability", "/guide/04Nonfunctional/04Maintainability.md"]],
  ["v-dfcab9cc", "/guide/04Nonfunctional/05FaultTolerance.html", { "y": "a", "t": "容错", "i": "featuresNew" }, ["/guide/04Nonfunctional/05FaultTolerance", "/guide/04Nonfunctional/05FaultTolerance.md"]],
  ["v-35cd218a", "/guide/05BackEnvelope/01PutBackEnvelope.html", { "y": "a", "t": "量化概要计算的数字", "i": "teamwork" }, ["/guide/05BackEnvelope/01PutBackEnvelope", "/guide/05BackEnvelope/01PutBackEnvelope.md"]],
  ["v-04c51677", "/guide/05BackEnvelope/02ResourceEstimation.html", { "y": "a", "t": "资源估算示例", "i": "codestring" }, ["/guide/05BackEnvelope/02ResourceEstimation", "/guide/05BackEnvelope/02ResourceEstimation.md"]],
  ["v-c08a47ca", "/guide/06BuildingBlocks/01BuildingBlocks.html", { "y": "a", "t": "现代系统设计的构建块介绍", "i": "faq" }, ["/guide/06BuildingBlocks/01BuildingBlocks", "/guide/06BuildingBlocks/01BuildingBlocks.md"]],
  ["v-09373366", "/guide/07DomainName/01DomainNameSystem.html", { "y": "a", "t": "域名系统(DNS)入门", "i": "license" }, ["/guide/07DomainName/01DomainNameSystem", "/guide/07DomainName/01DomainNameSystem.md"]],
  ["v-44472103", "/guide/07DomainName/02DomaimNameSystemWorks.html", { "y": "a", "t": "DNS如何工作", "i": "tools" }, ["/guide/07DomainName/02DomaimNameSystemWorks", "/guide/07DomainName/02DomaimNameSystemWorks.md"]],
  ["v-c88fa4e2", "/guide/08LoadBalancers/01LoadBalancers.html", { "y": "a", "t": "负载均衡器介绍", "i": "start1" }, ["/guide/08LoadBalancers/01LoadBalancers", "/guide/08LoadBalancers/01LoadBalancers.md"]],
  ["v-7dbc9e54", "/guide/08LoadBalancers/02GlobalLocalBalancers.html", { "y": "a", "t": "全局和本地负载均衡", "i": "activity" }, ["/guide/08LoadBalancers/02GlobalLocalBalancers", "/guide/08LoadBalancers/02GlobalLocalBalancers.md"]],
  ["v-870a4682", "/guide/08LoadBalancers/03LoadBalancersDetails.html", { "y": "a", "t": "负载均衡器的高级细节", "i": "versionCompare" }, ["/guide/08LoadBalancers/03LoadBalancersDetails", "/guide/08LoadBalancers/03LoadBalancersDetails.md"]],
  ["v-037c66e4", "/guide/09Databases/01Databases.html", { "y": "a", "t": "数据库简介", "i": "start1" }, ["/guide/09Databases/01Databases", "/guide/09Databases/01Databases.md"]],
  ["v-c753082c", "/guide/09Databases/02DatabasesTypes.html", { "y": "a", "t": "数据库类型", "i": "versionCompare" }, ["/guide/09Databases/02DatabasesTypes", "/guide/09Databases/02DatabasesTypes.md"]],
  ["v-35edf8a6", "/guide/09Databases/03DataReplication.html", { "y": "a", "t": "数据复制", "i": "buy" }, ["/guide/09Databases/03DataReplication", "/guide/09Databases/03DataReplication.md"]],
  ["v-3c006672", "/guide/09Databases/04DataPartitioning.html", { "y": "a", "t": "数据分片", "i": "changelog" }, ["/guide/09Databases/04DataPartitioning", "/guide/09Databases/04DataPartitioning.md"]],
  ["v-06c04b18", "/guide/09Databases/05TradeOffsDatabases.html", { "y": "a", "t": "数据库中的权衡", "i": "contactGroup" }, ["/guide/09Databases/05TradeOffsDatabases", "/guide/09Databases/05TradeOffsDatabases.md"]],
  ["v-71fd6b54", "/guide/10KeyvalueStore/01KeyValueStore.html", { "y": "a", "t": "系统设计：键值存储", "i": "start1" }, ["/guide/10KeyvalueStore/01KeyValueStore", "/guide/10KeyvalueStore/01KeyValueStore.md"]],
  ["v-7375d8b5", "/guide/10KeyvalueStore/02DesignKeyValueStore.html", { "y": "a", "t": "一个键值存储的设计", "i": "code-box-fill" }, ["/guide/10KeyvalueStore/02DesignKeyValueStore", "/guide/10KeyvalueStore/02DesignKeyValueStore.md"]],
  ["v-ae759124", "/guide/10KeyvalueStore/03ScalabilityReplication.html", { "y": "a", "t": "确保可扩展性和复制", "i": "tools" }, ["/guide/10KeyvalueStore/03ScalabilityReplication", "/guide/10KeyvalueStore/03ScalabilityReplication.md"]],
  ["v-66159619", "/guide/10KeyvalueStore/04VersioningDataAchievingConfigurability.html", { "y": "a", "t": "版本控制数据和实现可配置性", "i": "aixin" }, ["/guide/10KeyvalueStore/04VersioningDataAchievingConfigurability", "/guide/10KeyvalueStore/04VersioningDataAchievingConfigurability.md"]],
  ["v-01a95783", "/guide/10KeyvalueStore/05FaultToleranceFailureDetection.html", { "y": "a", "t": "启用容错和故障检测", "i": "featuresNew" }, ["/guide/10KeyvalueStore/05FaultToleranceFailureDetection", "/guide/10KeyvalueStore/05FaultToleranceFailureDetection.md"]],
  ["v-349e6b55", "/guide/11ContentDeliveryNetwork/01ContentDeliveryNetwork.html", { "y": "a", "t": "系统设计 内容交付网络 (CDN)", "i": "teamwork" }, ["/guide/11ContentDeliveryNetwork/01ContentDeliveryNetwork", "/guide/11ContentDeliveryNetwork/01ContentDeliveryNetwork.md"]],
  ["v-a068d12c", "/guide/11ContentDeliveryNetwork/02IntroductionCDN.html", { "y": "a", "t": "CDN介绍", "i": "restfulFastRequest" }, ["/guide/11ContentDeliveryNetwork/02IntroductionCDN", "/guide/11ContentDeliveryNetwork/02IntroductionCDN.md"]],
  ["v-4298a24f", "/guide/11ContentDeliveryNetwork/03DesignCDN.html", { "y": "a", "t": "CDN设计", "i": "changelog" }, ["/guide/11ContentDeliveryNetwork/03DesignCDN", "/guide/11ContentDeliveryNetwork/03DesignCDN.md"]],
  ["v-63f1600c", "/guide/11ContentDeliveryNetwork/04InvestigationCDNPart1.html", { "y": "a", "t": "CDN深度研究：第一部分", "i": "discoverfill" }, ["/guide/11ContentDeliveryNetwork/04InvestigationCDNPart1", "/guide/11ContentDeliveryNetwork/04InvestigationCDNPart1.md"]],
  ["v-c2116d28", "/guide/11ContentDeliveryNetwork/05InvestigationCDNPart2.html", { "y": "a", "t": "CDN的深入研究：第二部分", "i": "whats-new" }, ["/guide/11ContentDeliveryNetwork/05InvestigationCDNPart2", "/guide/11ContentDeliveryNetwork/05InvestigationCDNPart2.md"]],
  ["v-5db8879c", "/guide/11ContentDeliveryNetwork/06EvaluationCDNDesign.html", { "y": "a", "t": "CDN设计评估", "i": "discoverfill" }, ["/guide/11ContentDeliveryNetwork/06EvaluationCDNDesign", "/guide/11ContentDeliveryNetwork/06EvaluationCDNDesign.md"]],
  ["v-838320ea", "/guide/11ContentDeliveryNetwork/07QuizOnCDNDesign.html", { "y": "a", "t": "CDN设计测试", "i": "changelog" }, ["/guide/11ContentDeliveryNetwork/07QuizOnCDNDesign", "/guide/11ContentDeliveryNetwork/07QuizOnCDNDesign.md"]],
  ["v-c07322be", "/guide/12Sequencer/01SystemDesignSequencer.html", { "y": "a", "t": "系统设计：序列器", "i": "start1" }, ["/guide/12Sequencer/01SystemDesignSequencer", "/guide/12Sequencer/01SystemDesignSequencer.md"]],
  ["v-db59f746", "/guide/12Sequencer/02DesignUniqueIDGenerator.html", { "y": "a", "t": "唯一标识符生成器的设计", "i": "config2" }, ["/guide/12Sequencer/02DesignUniqueIDGenerator", "/guide/12Sequencer/02DesignUniqueIDGenerator.md"]],
  ["v-a11609aa", "/guide/12Sequencer/03UniqueIDsCausality.html", { "y": "a", "t": "使用因果关系生成唯一ID", "i": "dataMapping" }, ["/guide/12Sequencer/03UniqueIDsCausality", "/guide/12Sequencer/03UniqueIDsCausality.md"]],
  ["v-99acaf7e", "/guide/13DistributedMonitoring/01DistributedMonitoring.html", { "y": "a", "t": "系统设计：分布式监控", "i": "teamwork" }, ["/guide/13DistributedMonitoring/01DistributedMonitoring", "/guide/13DistributedMonitoring/01DistributedMonitoring.md"]],
  ["v-0e8622bc", "/guide/13DistributedMonitoring/02IntroductionDistributedMonitoring.html", { "y": "a", "t": "介绍分布式监控", "i": "others1" }, ["/guide/13DistributedMonitoring/02IntroductionDistributedMonitoring", "/guide/13DistributedMonitoring/02IntroductionDistributedMonitoring.md"]],
  ["v-40226b0c", "/guide/13DistributedMonitoring/03PrerequisitesMonitoringSystem.html", { "y": "a", "t": "监控系统的先决条件", "i": "teamwork" }, ["/guide/13DistributedMonitoring/03PrerequisitesMonitoringSystem", "/guide/13DistributedMonitoring/03PrerequisitesMonitoringSystem.md"]],
  ["v-bef102f8", "/guide/14MonitorServersideErrors/01DesignMonitoringSystem.html", { "y": "a", "t": "监控系统的设计", "i": "changelog" }, ["/guide/14MonitorServersideErrors/01DesignMonitoringSystem", "/guide/14MonitorServersideErrors/01DesignMonitoringSystem.md"]],
  ["v-648647da", "/guide/14MonitorServersideErrors/02DetailedDesignMonitoringSystem.html", { "y": "a", "t": "监控系统的详细设计", "i": "code-box-fill" }, ["/guide/14MonitorServersideErrors/02DetailedDesignMonitoringSystem", "/guide/14MonitorServersideErrors/02DetailedDesignMonitoringSystem.md"]],
  ["v-3b91ec34", "/guide/14MonitorServersideErrors/03VisualizeDataMonitoringSystem.html", { "y": "a", "t": "在监控系统中可视化数据", "i": "discoverfill" }, ["/guide/14MonitorServersideErrors/03VisualizeDataMonitoringSystem", "/guide/14MonitorServersideErrors/03VisualizeDataMonitoringSystem.md"]],
  ["v-afe132da", "/guide/15MonitorClientsideErrors/01ClientSideErrors.html", { "y": "a", "t": "专注于监控系统中的客户端错误", "i": "activity" }, ["/guide/15MonitorClientsideErrors/01ClientSideErrors", "/guide/15MonitorClientsideErrors/01ClientSideErrors.md"]],
  ["v-448e713e", "/guide/15MonitorClientsideErrors/02Design.html", { "y": "a", "t": "客户端监控系统设计", "i": "changelog" }, ["/guide/15MonitorClientsideErrors/02Design", "/guide/15MonitorClientsideErrors/02Design.md"]],
  ["v-8cec7528", "/guide/16DistributeCache/01SystemDesign.html", { "y": "a", "t": "系统设计:分布式缓存", "i": "whats-new" }, ["/guide/16DistributeCache/01SystemDesign", "/guide/16DistributeCache/01SystemDesign.md"]],
  ["v-000c5b6a", "/guide/16DistributeCache/02BackGround.html", { "y": "a", "t": "分布式缓存的背景", "i": "versionCompare" }, ["/guide/16DistributeCache/02BackGround", "/guide/16DistributeCache/02BackGround.md"]],
  ["v-6a89698a", "/guide/16DistributeCache/03HighLevelDesign.html", { "y": "a", "t": "分布式缓存的高级设计", "i": "install-fill" }, ["/guide/16DistributeCache/03HighLevelDesign", "/guide/16DistributeCache/03HighLevelDesign.md"]],
  ["v-2e9b2b68", "/guide/16DistributeCache/04DetailedDesign.html", { "y": "a", "t": "分布式缓存的详细设计", "i": "others1" }, ["/guide/16DistributeCache/04DetailedDesign", "/guide/16DistributeCache/04DetailedDesign.md"]],
  ["v-3927b3d9", "/guide/16DistributeCache/05Evaluation.html", { "y": "a", "t": "分布式缓存设计的评估", "i": "shortcut-fill" }, ["/guide/16DistributeCache/05Evaluation", "/guide/16DistributeCache/05Evaluation.md"]],
  ["v-482c88de", "/guide/16DistributeCache/06MemcachedVersusRedis.html", { "y": "a", "t": "Memcached 与 Redis", "i": "teamwork" }, ["/guide/16DistributeCache/06MemcachedVersusRedis", "/guide/16DistributeCache/06MemcachedVersusRedis.md"]],
  ["v-428c72cc", "/guide/17DistributedMessagingQueue/01SystemDesign.html", { "y": "a", "t": "系统设计：分布式消息队列", "i": "start1" }, ["/guide/17DistributedMessagingQueue/01SystemDesign", "/guide/17DistributedMessagingQueue/01SystemDesign.md"]],
  ["v-398f5ed6", "/guide/17DistributedMessagingQueue/02Requirements.html", { "y": "a", "t": "分布式消息队列的设计要求", "i": "codestring" }, ["/guide/17DistributedMessagingQueue/02Requirements", "/guide/17DistributedMessagingQueue/02Requirements.md"]],
  ["v-62e9cbce", "/guide/17DistributedMessagingQueue/03Considerations.html", { "y": "a", "t": "设计分布式消息队列的考虑因素", "i": "versionCompare" }, ["/guide/17DistributedMessagingQueue/03Considerations", "/guide/17DistributedMessagingQueue/03Considerations.md"]],
  ["v-0878b1a4", "/guide/17DistributedMessagingQueue/04DesignPart1.html", { "y": "a", "t": "分布式消息队列的设计：第一部分", "i": "whats-new" }, ["/guide/17DistributedMessagingQueue/04DesignPart1", "/guide/17DistributedMessagingQueue/04DesignPart1.md"]],
  ["v-4e225dce", "/guide/17DistributedMessagingQueue/05DesignPart2.html", { "y": "a", "t": "分布式消息队列的设计:第二部分", "i": "shortcut-fill" }, ["/guide/17DistributedMessagingQueue/05DesignPart2", "/guide/17DistributedMessagingQueue/05DesignPart2.md"]],
  ["v-5697f334", "/guide/17DistributedMessagingQueue/06Evaluation.html", { "y": "a", "t": "分布式消息队列设计评估", "i": "code-box-fill" }, ["/guide/17DistributedMessagingQueue/06Evaluation", "/guide/17DistributedMessagingQueue/06Evaluation.md"]],
  ["v-c2d86268", "/guide/17DistributedMessagingQueue/07Quiz.html", { "y": "a", "t": "关于分布式消息队列设计的测试", "i": "faq" }, ["/guide/17DistributedMessagingQueue/07Quiz", "/guide/17DistributedMessagingQueue/07Quiz.md"]],
  ["v-4fce5cb2", "/guide/18Pubsub/01SystemDesign.html", { "y": "a", "t": "系统设计：发布-订阅(Pub-sub)抽象", "i": "license" }, ["/guide/18Pubsub/01SystemDesign", "/guide/18Pubsub/01SystemDesign.md"]],
  ["v-9dbc20b8", "/guide/18Pubsub/02Introduction.html", { "y": "a", "t": "介绍Pub-sub系统", "i": "start1" }, ["/guide/18Pubsub/02Introduction", "/guide/18Pubsub/02Introduction.md"]],
  ["v-9cbc9cc2", "/guide/18Pubsub/03Design.html", { "y": "a", "t": "设计发布-订阅系统", "i": "tools" }, ["/guide/18Pubsub/03Design", "/guide/18Pubsub/03Design.md"]],
  ["v-3c7a9ce0", "/guide/19RateLimiter/01SystemDesign.html", { "y": "a", "t": "系统设计：速率限制器", "i": "activity" }, ["/guide/19RateLimiter/01SystemDesign", "/guide/19RateLimiter/01SystemDesign.md"]],
  ["v-3c9849cc", "/guide/19RateLimiter/02Requirements.html", { "y": "a", "t": "Rate Limiter的设计要求", "i": "buy" }, ["/guide/19RateLimiter/02Requirements", "/guide/19RateLimiter/02Requirements.md"]],
  ["v-d992f606", "/guide/19RateLimiter/03Design.html", { "y": "a", "t": "一个速率限制器的设计", "i": "license" }, ["/guide/19RateLimiter/03Design", "/guide/19RateLimiter/03Design.md"]],
  ["v-657f25e8", "/guide/19RateLimiter/04RateLimiterAlgorithms.html", { "y": "a", "t": "请求速率限制算法", "i": "tools" }, ["/guide/19RateLimiter/04RateLimiterAlgorithms", "/guide/19RateLimiter/04RateLimiterAlgorithms.md"]],
  ["v-09872d84", "/guide/19RateLimiter/05Quiz.html", { "y": "a", "t": "关于速率限制器设计的测验", "i": "faq" }, ["/guide/19RateLimiter/05Quiz", "/guide/19RateLimiter/05Quiz.md"]],
  ["v-1a60c654", "/guide/20BlobStore/01SystemDesign.html", { "y": "a", "t": "系统设计：Blob 存储", "i": "config2" }, ["/guide/20BlobStore/01SystemDesign", "/guide/20BlobStore/01SystemDesign.md"]],
  ["v-4da53512", "/guide/20BlobStore/02Requirements.html", { "y": "a", "t": "Blob Store设计的要求", "i": "shortcut-fill" }, ["/guide/20BlobStore/02Requirements", "/guide/20BlobStore/02Requirements.md"]],
  ["v-03e2467a", "/guide/20BlobStore/03Design.html", { "y": "a", "t": "设计Blob存储库", "i": "install-fill" }, ["/guide/20BlobStore/03Design", "/guide/20BlobStore/03Design.md"]],
  ["v-21a5098b", "/guide/20BlobStore/04DesignConsiderations.html", { "y": "a", "t": "一个Blob存储的设计考虑", "i": "activity" }, ["/guide/20BlobStore/04DesignConsiderations", "/guide/20BlobStore/04DesignConsiderations.md"]],
  ["v-fc1f447a", "/guide/20BlobStore/05Evaluation.html", { "y": "a", "t": "Blob Store 设计评估", "i": "codestring" }, ["/guide/20BlobStore/05Evaluation", "/guide/20BlobStore/05Evaluation.md"]],
  ["v-28482fe9", "/guide/20BlobStore/06Quiz.html", { "y": "a", "t": "Blob存储设计测试", "i": "youqinglianjie" }, ["/guide/20BlobStore/06Quiz", "/guide/20BlobStore/06Quiz.md"]],
  ["v-697578dc", "/guide/21DistributedSearch/01SystemDesign.html", { "y": "a", "t": "系统设计：分布式搜索", "i": "start1" }, ["/guide/21DistributedSearch/01SystemDesign", "/guide/21DistributedSearch/01SystemDesign.md"]],
  ["v-7769ddd0", "/guide/21DistributedSearch/02Requirements.html", { "y": "a", "t": "分布式搜索系统设计要求", "i": "buy" }, ["/guide/21DistributedSearch/02Requirements", "/guide/21DistributedSearch/02Requirements.md"]],
  ["v-578028f7", "/guide/21DistributedSearch/03Indexing.html", { "y": "a", "t": "分布式搜索中的索引", "i": "discoverfill" }, ["/guide/21DistributedSearch/03Indexing", "/guide/21DistributedSearch/03Indexing.md"]],
  ["v-74e55aa8", "/guide/21DistributedSearch/04Design.html", { "y": "a", "t": "分布式搜索的设计", "i": "install-fill" }, ["/guide/21DistributedSearch/04Design", "/guide/21DistributedSearch/04Design.md"]],
  ["v-8ba8a118", "/guide/21DistributedSearch/05SclingSearchAndIndexing.html", { "y": "a", "t": "扩展搜索和索引", "i": "bilibili" }, ["/guide/21DistributedSearch/05SclingSearchAndIndexing", "/guide/21DistributedSearch/05SclingSearchAndIndexing.md"]],
  ["v-e8493db0", "/guide/21DistributedSearch/06Evaluation.html", { "y": "a", "t": "分布式搜索设计的评估", "i": "dataMapping" }, ["/guide/21DistributedSearch/06Evaluation", "/guide/21DistributedSearch/06Evaluation.md"]],
  ["v-1eb76888", "/guide/23DistributedTaskScheduler/01SystemDesign.html", { "y": "a", "t": "系统设计：分布式任务调度器", "i": "activity" }, ["/guide/23DistributedTaskScheduler/01SystemDesign", "/guide/23DistributedTaskScheduler/01SystemDesign.md"]],
  ["v-4b79e3f8", "/guide/23DistributedTaskScheduler/02Requirements.html", { "y": "a", "t": "分布式任务调度设计的要求", "i": "codestring" }, ["/guide/23DistributedTaskScheduler/02Requirements", "/guide/23DistributedTaskScheduler/02Requirements.md"]],
  ["v-69323029", "/guide/23DistributedTaskScheduler/03Design.html", { "y": "a", "t": "分布式任务调度器设计", "i": "whats-new" }, ["/guide/23DistributedTaskScheduler/03Design", "/guide/23DistributedTaskScheduler/03Design.md"]],
  ["v-77311b1e", "/guide/23DistributedTaskScheduler/04DesignConsiderations.html", { "y": "a", "t": "分布式任务调度器的设计考虑因素", "i": "config2" }, ["/guide/23DistributedTaskScheduler/04DesignConsiderations", "/guide/23DistributedTaskScheduler/04DesignConsiderations.md"]],
  ["v-3acf8e29", "/guide/23DistributedTaskScheduler/05Evaluation.html", { "y": "a", "t": "分布式任务调度器设计的评估", "i": "faq" }, ["/guide/23DistributedTaskScheduler/05Evaluation", "/guide/23DistributedTaskScheduler/05Evaluation.md"]],
  ["v-27fcb824", "/guide/22DistributedLogging/01SystemDesign.html", { "y": "a", "t": "系统设计：分布式日志记录", "i": "buy" }, ["/guide/22DistributedLogging/01SystemDesign", "/guide/22DistributedLogging/01SystemDesign.md"]],
  ["v-ed5f69d4", "/guide/22DistributedLogging/02Introduction.html", { "y": "a", "t": "分布式日志介绍", "i": "tools" }, ["/guide/22DistributedLogging/02Introduction", "/guide/22DistributedLogging/02Introduction.md"]],
  ["v-74ce0a91", "/guide/22DistributedLogging/03Design.html", { "y": "a", "t": "分布式日志服务的设计", "i": "versionCompare" }, ["/guide/22DistributedLogging/03Design", "/guide/22DistributedLogging/03Design.md"]],
  ["v-544df0a2", "/guide/24ShardedCounters/01SystemDesign.html", { "y": "a", "t": "系统设计：分片计数器", "i": "activity" }, ["/guide/24ShardedCounters/01SystemDesign", "/guide/24ShardedCounters/01SystemDesign.md"]],
  ["v-1082d6c4", "/guide/24ShardedCounters/02HighLevelDesign.html", { "y": "a", "t": "分片计数器的高级设计", "i": "youqinglianjie" }, ["/guide/24ShardedCounters/02HighLevelDesign", "/guide/24ShardedCounters/02HighLevelDesign.md"]],
  ["v-415f8abf", "/guide/24ShardedCounters/03DetailedDesign.html", { "y": "a", "t": "分片计数器的详细设计", "i": "aixin" }, ["/guide/24ShardedCounters/03DetailedDesign", "/guide/24ShardedCounters/03DetailedDesign.md"]],
  ["v-61fa2d77", "/guide/24ShardedCounters/04Quiz.html", { "y": "a", "t": "支持插件", "i": "buy" }, ["/guide/24ShardedCounters/04Quiz", "/guide/24ShardedCounters/04Quiz.md"]],
  ["v-3aa109ba", "/guide/25ConcludingBuildingBlocks/01WrappingUp.html", { "y": "a", "t": "总结构建块讨论", "i": "discoverfill" }, ["/guide/25ConcludingBuildingBlocks/01WrappingUp", "/guide/25ConcludingBuildingBlocks/01WrappingUp.md"]],
  ["v-086c64e7", "/guide/25ConcludingBuildingBlocks/02RESHADEDApproach.html", { "y": "a", "t": "系统设计的RESHADED方法", "i": "versionCompare" }, ["/guide/25ConcludingBuildingBlocks/02RESHADEDApproach", "/guide/25ConcludingBuildingBlocks/02RESHADEDApproach.md"]],
  ["v-3706649a", "/404.html", { "y": "p", "t": "" }, ["/404"]],
  ["v-fffb8e28", "/guide/", { "y": "p", "t": "Guide" }, ["/guide/index.html"]],
  ["v-77bcb068", "/guide/01Introduction/", { "y": "p", "t": "01 Introduction" }, ["/guide/01Introduction/index.html"]],
  ["v-02eb52e2", "/guide/02Interviews/", { "y": "p", "t": "02 Interviews" }, ["/guide/02Interviews/index.html"]],
  ["v-afc39cda", "/guide/03Abstractions/", { "y": "p", "t": "03 Abstractions" }, ["/guide/03Abstractions/index.html"]],
  ["v-63c9b5af", "/guide/04Nonfunctional/", { "y": "p", "t": "04 Nonfunctional" }, ["/guide/04Nonfunctional/index.html"]],
  ["v-77dac4c7", "/guide/05BackEnvelope/", { "y": "p", "t": "05 Back Envelope" }, ["/guide/05BackEnvelope/index.html"]],
  ["v-6255d07a", "/guide/06BuildingBlocks/", { "y": "p", "t": "06 Building Blocks" }, ["/guide/06BuildingBlocks/index.html"]],
  ["v-cf990aa6", "/guide/07DomainName/", { "y": "p", "t": "07 Domain Name" }, ["/guide/07DomainName/index.html"]],
  ["v-09414c4c", "/guide/08LoadBalancers/", { "y": "p", "t": "08 Load Balancers" }, ["/guide/08LoadBalancers/index.html"]],
  ["v-ea20e2a8", "/guide/09Databases/", { "y": "p", "t": "09 Databases" }, ["/guide/09Databases/index.html"]],
  ["v-5af2196b", "/guide/10KeyvalueStore/", { "y": "p", "t": "10 Keyvalue Store" }, ["/guide/10KeyvalueStore/index.html"]],
  ["v-2922f4c2", "/guide/11ContentDeliveryNetwork/", { "y": "p", "t": "11 Content Delivery Network" }, ["/guide/11ContentDeliveryNetwork/index.html"]],
  ["v-11e73d6b", "/guide/12Sequencer/", { "y": "p", "t": "12 Sequencer" }, ["/guide/12Sequencer/index.html"]],
  ["v-20ad781c", "/guide/13DistributedMonitoring/", { "y": "p", "t": "13 Distributed Monitoring" }, ["/guide/13DistributedMonitoring/index.html"]],
  ["v-52f6e2c2", "/guide/14MonitorServersideErrors/", { "y": "p", "t": "14 Monitor Serverside Errors" }, ["/guide/14MonitorServersideErrors/index.html"]],
  ["v-76bd1bd0", "/guide/15MonitorClientsideErrors/", { "y": "p", "t": "15 Monitor Clientside Errors" }, ["/guide/15MonitorClientsideErrors/index.html"]],
  ["v-447a5c5f", "/guide/16DistributeCache/", { "y": "p", "t": "16 Distribute Cache" }, ["/guide/16DistributeCache/index.html"]],
  ["v-46a8fdf1", "/guide/17DistributedMessagingQueue/", { "y": "p", "t": "17 Distributed Messaging Queue" }, ["/guide/17DistributedMessagingQueue/index.html"]],
  ["v-1640aed9", "/guide/18Pubsub/", { "y": "p", "t": "18 Pubsub" }, ["/guide/18Pubsub/index.html"]],
  ["v-487c8a8a", "/guide/19RateLimiter/", { "y": "p", "t": "19 Rate Limiter" }, ["/guide/19RateLimiter/index.html"]],
  ["v-2ccf8d96", "/guide/20BlobStore/", { "y": "p", "t": "20 Blob Store" }, ["/guide/20BlobStore/index.html"]],
  ["v-751ffeef", "/guide/21DistributedSearch/", { "y": "p", "t": "21 Distributed Search" }, ["/guide/21DistributedSearch/index.html"]],
  ["v-2a594fe2", "/guide/23DistributedTaskScheduler/", { "y": "p", "t": "23 Distributed Task Scheduler" }, ["/guide/23DistributedTaskScheduler/index.html"]],
  ["v-59fcb4a7", "/guide/22DistributedLogging/", { "y": "p", "t": "22 Distributed Logging" }, ["/guide/22DistributedLogging/index.html"]],
  ["v-4c2140e9", "/guide/24ShardedCounters/", { "y": "p", "t": "24 Sharded Counters" }, ["/guide/24ShardedCounters/index.html"]],
  ["v-346281c4", "/guide/25ConcludingBuildingBlocks/", { "y": "p", "t": "25 Concluding Building Blocks" }, ["/guide/25ConcludingBuildingBlocks/index.html"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout = usePageLayout();
    return () => h$1(layout.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createWebHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/model-system-design/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = ref(router.currentRoute.value.path);
  watch(
    () => router.currentRoute.value.path,
    (value) => routePath.value = value
  );
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  const headTags = ref([]);
  const loadHead = () => {
    head.value.forEach((item) => {
      const tag = queryHeadTag(item);
      if (tag) {
        headTags.value.push(tag);
      }
    });
  };
  const updateHead = () => {
    document.documentElement.lang = lang.value;
    headTags.value.forEach((item) => {
      if (item.parentNode === document.head) {
        document.head.removeChild(item);
      }
    });
    headTags.value.splice(0, headTags.value.length);
    head.value.forEach((item) => {
      const tag = createHeadTag(item);
      if (tag !== null) {
        document.head.appendChild(tag);
        headTags.value.push(tag);
      }
    });
  };
  provide(updateHeadSymbol, updateHead);
  onMounted(() => {
    loadHead();
    updateHead();
    watch(
      () => head.value,
      () => updateHead()
    );
  });
};
var queryHeadTag = ([
  tagName,
  attrs,
  content = ""
]) => {
  const attrsSelector = Object.entries(attrs).map(([key, value]) => {
    if (isString$1(value)) {
      return `[${key}=${JSON.stringify(value)}]`;
    }
    if (value === true) {
      return `[${key}]`;
    }
    return "";
  }).join("");
  const selector = `head > ${tagName}${attrsSelector}`;
  const tags = Array.from(document.querySelectorAll(selector));
  const matchedTag = tags.find((item) => item.innerText === content);
  return matchedTag || null;
};
var createHeadTag = ([
  tagName,
  attrs,
  content
]) => {
  if (!isString$1(tagName)) {
    return null;
  }
  const tag = document.createElement(tagName);
  if (isPlainObject(attrs)) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (isString$1(value)) {
        tag.setAttribute(key, value);
      } else if (value === true) {
        tag.setAttribute(key, "");
      }
    });
  }
  if (isString$1(content)) {
    tag.appendChild(document.createTextNode(content));
  }
  return tag;
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h$1(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h$1(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  const globalComputed = setupGlobalComputed(app, router, clientConfigs);
  {
    const { setupDevtools } = await __vitePreload(() => import("./setupDevtools-X4YFRK4B-57e38825.js"), true ? ["assets/setupDevtools-X4YFRK4B-57e38825.js","assets/framework-03ffdf83.js"] : void 0);
    setupDevtools(app, globalComputed);
  }
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
{
  createVueApp().then(({ app, router }) => {
    router.isReady().then(() => {
      app.mount("#app");
    });
  });
}
export {
  createVueApp
};
