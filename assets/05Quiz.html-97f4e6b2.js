import { _ as _export_sfc, Y as openBlock, Z as createElementBlock, a2 as createStaticVNode } from "./framework-03ffdf83.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>测试你对与速率限制相关概念的了解。</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p>1、以下哪种算法用于平滑窗口边缘处传入请求的峰值？ A) 访问令牌桶算法<br> B) 滑动窗口日志算法<br> C) 固定窗口计数器算法<br> D) 以上都不是</p><p>2、假设采用速率为每分钟100个请求的软限流方法，允许超限5%。在限制时间内，客户端已经发送了第104个请求。但是，没有资源可用来提供服务。对于这个传入请求，系统应该怎么处理？<br> A) 抛弃请求并向客户端发送错误响应 B) 将请求加入队列并等待资源变得可用</p><p>3、假设服务所有者向数据库添加了其他规则。因此，缓存中的数据将过期。在这种情况下，哪些组件负责更新缓存？<br> A) 请求处理器<br> B) 决策者<br> C) 限流规则检索器<br> D) 以上都不是</p><p>4、一个客户端以6Mbps（兆位每秒）的速率向服务器发送18MB的数据。假设服务器以4Mbps的速率处理数据。如果在服务器端使用漏桶算法，则队列必须有多少容量才不会丢弃任何数据？<br> A) 6MB<br> B) 9MB<br> C) 3MB<br> D) 7MB</p></div>', 2);
const _hoisted_3 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_3);
}
const _05Quiz_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "05Quiz.html.vue"]]);
export {
  _05Quiz_html as default
};
