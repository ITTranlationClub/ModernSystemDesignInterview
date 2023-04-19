import{_ as e,X as n,Y as i,a1 as s}from"./framework-370f8292.js";const d={},l=s(`<h1 id="分片计数器设计测试" tabindex="-1"><a class="header-anchor" href="#分片计数器设计测试" aria-hidden="true">#</a> 分片计数器设计测试</h1><p>通过一项问答测试，测试您对与分片计数器相关的概念的理解。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、如果我们的系统为拥有一百万个关注者的用户创建一个只有几个片的计数器，会出现什么问题？
   A）高读争用 
   B）高写争用
   C）用户面临读取请求延迟
   D）用户对所喜欢的帖子快速响应

2、（选择所有符合条件的选项）如果片段是按顺序（顺序）选择而不是随机选择的，可能会出现什么问题？
   A）写入请求队列增加 
   B）最大片段利用率降低
   C）一个一个选择片段需要更多时间 
   D）用户将不能得到快速响应。

3、（选择所有符合条件的选项）哪种情况需要更多的分片计数器来处理 YouTube 上的流量？
   A）由数百万个订阅者发布的视频
   B）长时间内只有少量点赞的视频 
   C）有数百万次播放但只有少数踩的视频
   D）由少数订阅者发布的长视频
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[l];function c(r,v){return n(),i("div",null,a)}const t=e(d,[["render",c],["__file","04Quiz.html.vue"]]);export{t as default};
