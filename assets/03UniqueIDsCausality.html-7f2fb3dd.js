import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/12-Sequencer/QQ截图20230408193535.png";
const _imports_1 = "/model-system-design/img/12-Sequencer/QQ截图20230408193603.png";
const _imports_2 = "/model-system-design/img/12-Sequencer/QQ截图20230408193616.png";
const _imports_3 = "/model-system-design/img/12-Sequencer/QQ截图20230408193626.png";
const _imports_4 = "/model-system-design/img/12-Sequencer/QQ截图20230408193641.png";
const _imports_5 = "/model-system-design/img/12-Sequencer/QQ截图20230408193833.png";
const _imports_6 = "/model-system-design/img/12-Sequencer/QQ截图20230408193845.png";
const _imports_7 = "/model-system-design/img/12-Sequencer/QQ截图20230414161227.png";
const _imports_8 = "/model-system-design/img/12-Sequencer/QQ截图20230414161250.png";
const _imports_9 = "/model-system-design/img/12-Sequencer/QQ截图20230414161304.png";
const _imports_10 = "/model-system-design/img/12-Sequencer/QQ截图20230414161319.png";
const _imports_11 = "/model-system-design/img/12-Sequencer/QQ截图20230414161336.png";
const _imports_12 = "/model-system-design/img/12-Sequencer/QQ截图20230414161611.png";
const _imports_13 = "/model-system-design/img/12-Sequencer/QQ截图20230414161623.png";
const _imports_14 = "/model-system-design/img/12-Sequencer/QQ截图20230414161642.png";
const _imports_15 = "/model-system-design/img/12-Sequencer/QQ截图20230414161658.png";
const _imports_16 = "/model-system-design/img/12-Sequencer/QQ截图20230414161715.png";
const _imports_17 = "/model-system-design/img/12-Sequencer/QQ截图20230414161733.png";
const _imports_18 = "/model-system-design/img/12-Sequencer/QQ截图20230414161756.png";
const _imports_19 = "/model-system-design/img/12-Sequencer/QQ截图20230414161817.png";
const _imports_20 = "/model-system-design/img/12-Sequencer/QQ截图20230414161830.png";
const _imports_21 = "/model-system-design/img/12-Sequencer/QQ截图20230414161844.png";
const _imports_22 = "/model-system-design/img/12-Sequencer/QQ截图20230414161859.png";
const _imports_23 = "/model-system-design/img/12-Sequencer/QQ截图20230414161912.png";
const _imports_24 = "/model-system-design/img/12-Sequencer/QQ截图20230414161924.png";
const _imports_25 = "/model-system-design/img/12-Sequencer/QQ截图20230414161936.png";
const _imports_26 = "/model-system-design/img/12-Sequencer/QQ截图20230414162343.png";
const _imports_27 = "/model-system-design/img/12-Sequencer/QQ截图20230414162357.png";
const _imports_28 = "/model-system-design/img/12-Sequencer/QQ截图20230414162410.png";
const _imports_29 = "/model-system-design/img/12-Sequencer/QQ截图20230414162422.png";
const _imports_30 = "/model-system-design/img/12-Sequencer/QQ截图20230414162435.png";
const _imports_31 = "/model-system-design/img/12-Sequencer/QQ截图20230414162625.png";
const _imports_32 = "/model-system-design/img/12-Sequencer/QQ截图20230414162635.png";
const _imports_33 = "/model-system-design/img/12-Sequencer/QQ截图20230414162652.png";
const _imports_34 = "/model-system-design/img/12-Sequencer/QQ截图20230414162702.png";
const _imports_35 = "/model-system-design/img/12-Sequencer/QQ截图20230414162714.png";
const _imports_36 = "/model-system-design/img/12-Sequencer/QQ截图20230414162844.png";
const _imports_37 = "/model-system-design/img/12-Sequencer/QQ截图20230414162859.png";
const _imports_38 = "/model-system-design/img/12-Sequencer/QQ截图20230408193948.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>学习如何使用时间生成唯一ID并保持事件的因果关系。</p><h2 id="因果关系" tabindex="-1"><a class="header-anchor" href="#因果关系" aria-hidden="true">#</a> 因果关系</h2><p>在 <code>上一节课程</code> 中，我们生成了唯一ID来区分各种事件。除了对事件有唯一标识符之外，我们还对找到这些事件的顺序感兴趣。</p><p>让我们考虑一个例子，Peter和John是两个Twitter用户。</p><p>John发表了一条评论（事件A），Peter回复了John的评论（事件B）。</p><p>事件B依赖于事件A，不能在事件A之前发生。这些事件在这里并不是同时发生的。</p><p>我们还可以有并发事件 - 即独立发生的两个事件。</p><p>例如，如果Peter和John在两个不同的推文上发表评论，则它们之间没有发生关系或因果关系。</p><p>识别一个事件对另一个事件的依赖性是必要的，但对于并发事件则不是。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>上述场景也可以通过分配唯一ID并使用社交图形来编码事件之间的依赖关系来处理。</p><p>我们也可以使用单独的时间数据结构和简单的唯一ID。</p><p>然而，我们希望唯一ID能够双重作用 - 提供唯一标识并帮助事件的因果关系。</p></div><p>以下幻灯片提供了并发事件和非并发事件的可视化效果。</p><p><img src="' + _imports_0 + '" alt="QQ截图20230408193535" loading="lazy"></p><p><img src="' + _imports_1 + '" alt="QQ截图20230408193603" loading="lazy"></p><p><img src="' + _imports_2 + '" alt="QQ截图20230408193616" loading="lazy"></p><p><img src="' + _imports_3 + '" alt="QQ截图20230408193626" loading="lazy"></p><p><img src="' + _imports_4 + '" alt="QQ截图20230408193641" loading="lazy"></p><p>某些应用程序需要事件具有唯一标识符并携带任何相关因果信息。</p><p>一个例子是为写入键值存储的并发写入分配标识符以实现最后写入赢策略。</p><p>我们可以使用逻辑时钟或物理时钟来推断因果关系。一些系统具有额外的要求，我们希望事件标识符的因果关系与墙钟时间相匹配。一个例子是遵守欧洲MiFID法规的金融应用程序。MiFID要求时钟与UTC的差距在100微秒以内，以便在高交易量/高速度市场交易期间检测异常。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>逻辑时钟或物理时钟涉及许多微妙之处。我们可以参考下面标题为“分布式系统中的时间”的文本来刷新我们的时间概念。</p></div><p>我们使用时间来确定我们生活中事件的顺序。例如，如果Sam在早上6点洗澡，早上7点吃早餐，我们可以通过每个事件的时间戳确定Sam在早餐前洗了澡。因此，时间戳可用于保持因果关系。</p><h3 id="分布式系统中的时间" tabindex="-1"><a class="header-anchor" href="#分布式系统中的时间" aria-hidden="true">#</a> 分布式系统中的时间</h3><h4 id="物理时钟" tabindex="-1"><a class="header-anchor" href="#物理时钟" aria-hidden="true">#</a> 物理时钟</h4><p>计算机通常有两种类型的物理时钟：日历时钟和单调计数器。</p><p>日历时钟</p><ul><li>与单调计数器相比，日历时钟通常具有较低的分辨率。</li><li>网络时间协议（NTP）可以将时钟向前或向后移动，因此它并不总是单调的。</li><li>它可能包含或不包含闰秒。</li></ul><h5 id="单调计数器" tabindex="-1"><a class="header-anchor" href="#单调计数器" aria-hidden="true">#</a> 单调计数器</h5><ul><li>单调计数器通常比日历时钟具有更高的分辨率。</li><li>单调计数器应该用于两个事件之间的持续时间而不是时间。</li><li>这些在不同节点之间没有意义。例如，即使在具有多个处理器的同一服务器上，每个处理器可能都有不同的计数器。应用程序在使用来自不同处理器的计数器时需要小心。</li><li>NTP可能会调整它而不违反单调性。</li><li>NTP只能将计数器变化速率加快或减慢0.05％。</li></ul><h4 id="时钟漂移的原因" tabindex="-1"><a class="header-anchor" href="#时钟漂移的原因" aria-hidden="true">#</a> 时钟漂移的原因</h4><p>物理时钟随着时间的推移会漂移，原因有很多：</p><ul><li>温度差异</li><li>设备的老化</li><li>制造缺陷</li><li>虚拟时钟</li></ul><p>例如，时钟漂移200百万分之一的服务器意味着每30秒同步一次时钟，会有6毫秒的漂移，或每24小时重新同步一次，会有17秒的漂移。</p><p>一项研究显示，在公共互联网上，NTP无法获得比35毫秒更好的时钟精度，当网络拥塞时，精度可能会飙升到1秒。否则，NTP使用多个时间服务器并且丢弃异常值。</p><h3 id="折衷-复杂性和成本与时钟精度之间的平衡" tabindex="-1"><a class="header-anchor" href="#折衷-复杂性和成本与时钟精度之间的平衡" aria-hidden="true">#</a> 折衷：复杂性和成本与时钟精度之间的平衡</h3><p>通过使用GPS和原子钟、谨慎的部署和监控，可以保持时钟漂移始终很小。然而，这样的系统会带来额外的成本，并增加系统的复杂性。</p><h3 id="逻辑时钟" tabindex="-1"><a class="header-anchor" href="#逻辑时钟" aria-hidden="true">#</a> 逻辑时钟</h3><ul><li>Lamport 时钟为我们提供了 happened-before 关系。如果事件 A 在事件 B 之前发生，那么 A 的时钟值将小于 B 的时钟值。需要注意的是，对于来自任何两个服务器的两个事件的任何两个时钟值，我们不能比较它们来推断 happened-before 关系，因为这两个事件可以是并发的（意味着没有因果关系）。</li><li>我们可以使用向量时钟来使用时钟值推断 happened-before 关系。为此，我们需要为向量中的每个参与实体提供一个计数器。</li><li>我们应该注意，happened-before 可能不意味着两个事件之间有因果关系。可能的情况是一个事件发生在另一个事件之前。通常，我们需要在 happened-before 机制的基础上添加应用程序级别的上下文来推断真实的因果关系。</li></ul><h3 id="使用unix时间戳" tabindex="-1"><a class="header-anchor" href="#使用unix时间戳" aria-hidden="true">#</a> 使用UNIX时间戳</h3><p>UNIX 时间戳的粒度为毫秒，可以用于区分不同的事件。我们有一个生成单个时间戳的 <strong>ID 生成服务器</strong> 。将任何生成唯一 ID 的请求路由到该服务器，它返回一个时间戳，然后返回一个唯一 ID。生成毫秒级 ID 的能力使我们可以每秒生成一千个标识符。这意味着我们可以在一天内获得</p>', 39);
const _hoisted_40 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "73.193ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 32351.2 1000",
  "aria-hidden": "true"
};
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "34",
          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(1000,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "28",
          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(1389,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "210E",
          d: "M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(1965,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45C",
          d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(2450,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D462",
          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(3022,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45F",
          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(3473,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "29",
          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(4084.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(4806.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "36",
          d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(5806.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "28",
          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(6195.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45A",
          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(7073.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D456",
          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(7418.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45B",
          d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "TeXAtom",
        "data-mjx-texclass": "ORD",
        transform: "translate(8018.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mo" }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "2F",
            d: "M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(8518.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "210E",
          d: "M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(9094.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45C",
          d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(9579.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D462",
          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(10151.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45F",
          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(10602.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "29",
          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(11213.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(11935.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "36",
          d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(12935.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "28",
          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13324.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D460",
          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13793.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14259.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D450",
          d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "TeXAtom",
        "data-mjx-texclass": "ORD",
        transform: "translate(14692.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mo" }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "2F",
            d: "M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(15192.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45A",
          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(16070.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D456",
          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(16415.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45B",
          d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(17015.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "29",
          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(17627.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(18349.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          transform: "translate(1500,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(20349.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "28",
          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(20738.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D43C",
          d: "M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(21242.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D437",
          d: "M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "TeXAtom",
        "data-mjx-texclass": "ORD",
        transform: "translate(22070.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mo" }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "2F",
            d: "M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(22570.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D460",
          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(23039.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(23505.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D450",
          d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(23938.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "29",
          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(24605.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(25660.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "36",
          d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(26660.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2C",
          d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(27105.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "34",
          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(28605.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2C",
          d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(29050.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(30550.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D43C",
          d: "M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(31054.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D437",
          d: "M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(31882.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D460",
          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_42 = [
  _hoisted_41
];
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "不到十亿个。",
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们的系统在生成 ID 方面表现良好，但它提出了一个关键问题。",
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "ID 生成服务器是单点故障（SPOF），我们需要处理它。",
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "为了迎合 SPOF，我们可以添加更多的服务器。每个服务器为每毫秒生成一个唯一的 ID。",
  -1
  /* HOISTED */
);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "为了使整个标识符在系统中唯一，我们将服务器 ID 与 UNIX 时间戳结合起来。然后，我们添加负载均衡器以更有效地分配流量。",
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "使用 UNIX 时间戳生成唯一 ID 的设计如下图所示：",
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_5,
      alt: "QQ截图20230408193833",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createStaticVNode('<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><p>该方法简单、可扩展且易于实现。它还使多个服务器能够处理并发请求。</p><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><p>对于两个并发事件，返回相同的时间戳并分配相同的ID。这样，ID不再是唯一的。</p><h2 id="每种方法实现的要求" tabindex="-1"><a class="header-anchor" href="#每种方法实现的要求" aria-hidden="true">#</a> 每种方法实现的要求</h2><table><thead><tr><th></th><th><strong>唯一性</strong></th><th><strong>可扩展性</strong></th><th><strong>可用性</strong></th><th><strong>64位数值ID</strong></th><th><strong>维护因果关系</strong></th></tr></thead><tbody><tr><td><strong>使用UUID</strong></td><td>✖️</td><td>✔️</td><td>✔️</td><td>✖️</td><td>✖️</td></tr><tr><td><strong>使用数据库</strong></td><td>✖️</td><td>✖️</td><td>✔️</td><td>✔️</td><td>✖️</td></tr><tr><td><strong>使用范围处理器</strong></td><td>✔️</td><td>✔️</td><td>✔️</td><td>✔️</td><td>✖️</td></tr><tr><td><strong>使用UNIX时间戳</strong></td><td>✖️</td><td><strong>弱</strong></td><td>✔️</td><td>✔️</td><td><strong>弱</strong></td></tr></tbody></table><h2 id="twitter-snowflake" tabindex="-1"><a class="header-anchor" href="#twitter-snowflake" aria-hidden="true">#</a> Twitter Snowflake</h2><p>让我们尝试高效使用时间。我们可以使用一些位来存储时间，并将其余位用于其他信息。位的划分概述如下：</p><p><img src="' + _imports_6 + '" alt="QQ截图20230408193845" loading="lazy"></p><p>Twitter Snowflake位划分的概述</p><p>位划分的解释如下：</p><ul><li><p><strong>符号位</strong>：分配一个单个位作为符号位，其值始终为零。这使得整个数字为正数。这样做有助于确保使用这些标识符的任何编程环境将其解释为正整数。</p></li><li><p>时间戳：分配41位用于毫秒。将使用Twitter Snowflake默认时期。它的值为 1288834974657，相当于UTC时间2010年11月4日01:42:54。我们可以在系统部署时启动我们自己的时期，比如2022年1月1日午夜可以作为从零开始的时期。耗尽此范围的最大时间如下所示：</p></li></ul>', 12);
const _hoisted_62 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.602ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "50.18ex",
  height: "5.036ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1517.7 22179.4 2225.7",
  "aria-hidden": "true"
};
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "时")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(1000,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "间")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(2000,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "耗")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(3000,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "尽")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(4000,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "范")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(5000,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "围")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(6277.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(7333.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(3976.1,676)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "msup" }, [
            /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
              /* @__PURE__ */ createBaseVNode("path", {
                "data-c": "32",
                d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                style: { "stroke-width": "3" }
              })
            ]),
            /* @__PURE__ */ createBaseVNode("g", {
              "data-mml-node": "TeXAtom",
              transform: "translate(533,363) scale(0.707)",
              "data-mjx-texclass": "ORD"
            }, [
              /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
                /* @__PURE__ */ createBaseVNode("path", {
                  "data-c": "34",
                  d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
                  style: { "stroke-width": "3" }
                }),
                /* @__PURE__ */ createBaseVNode("path", {
                  "data-c": "31",
                  d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                  transform: "translate(500,0)",
                  style: { "stroke-width": "3" }
                })
              ])
            ])
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1290.1,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D456",
              d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1635.1,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D451",
              d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,-686)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "33",
              d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "36",
              d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
              transform: "translate(500,0)",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "35",
              d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
              transform: "translate(1000,0)",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(1722.2,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(2444.4,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "32",
              d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "34",
              d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
              transform: "translate(500,0)",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(3666.7,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(4388.9,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "36",
              d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "30",
              d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
              transform: "translate(500,0)",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(5611.1,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(6333.3,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "31",
              d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "30",
              d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
              transform: "translate(500,0)",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "30",
              d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
              transform: "translate(1000,0)",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "30",
              d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
              transform: "translate(1500,0)",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8333.3,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D456",
              d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8678.3,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D451",
              d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(9198.3,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "9867.3",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(17718.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2248",
          d: "M55 319Q55 360 72 393T114 444T163 472T205 482Q207 482 213 482T223 483Q262 483 296 468T393 413L443 381Q502 346 553 346Q609 346 649 375T694 454Q694 465 698 474T708 483Q722 483 722 452Q722 386 675 338T555 289Q514 289 468 310T388 357T308 404T224 426Q164 426 125 393T83 318Q81 289 69 289Q55 289 55 319ZM55 85Q55 126 72 159T114 210T163 238T205 248Q207 248 213 248T223 249Q262 249 296 234T393 179L443 147Q502 112 553 112Q609 112 649 141T694 220Q694 249 708 249T722 217Q722 153 675 104T555 55Q514 55 468 76T388 123T308 170T224 192Q164 192 125 159T83 84Q80 55 69 55Q55 55 55 85Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(18774.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "36",
          d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "39",
          d: "M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(19774.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D466",
          d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(20264.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(20730.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44E",
          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(21259.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45F",
          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(21710.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D460",
          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_64 = [
  _hoisted_63
];
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "以上计算为我们提供了69年的时间，然后我们需要一种新算法来生成ID。正如我们之前所看到的，如果我们每秒可以生成1,000个标识符，那么我们无法获得每天10亿个标识符的目标。虽然现在，在Snowflake提案中，当我们使用工作器ID和机器本地序列号时，我们有充足的标识符可用。",
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "工作器编号：工作器编号为10位。它为我们提供了 = 1,024个工作者ID。为其事件创建唯一ID的服务器将附加其ID。"),
    /* @__PURE__ */ createBaseVNode("li", null, "序列号：序列号为12位。对于服务器上生成的每个ID，序列号增加1。这为我们提供了= 4,096个唯一序列号。当它达到4,096时，我们将其重置为零。此数字添加了一层以避免重复。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "以下幻灯片展示了时间戳转换为UTC的过程。",
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_7,
      alt: "QQ截图20230414161227",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_8,
      alt: "QQ截图20230414161250",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_9,
      alt: "QQ截图20230414161304",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_10,
      alt: "QQ截图20230414161319",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_11,
      alt: "QQ截图20230414161336",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_73 = /* @__PURE__ */ createStaticVNode('<h3 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点</h3><p>Twitter Snowflake将时间戳作为第一个组件。因此，它们可以按时间排序。ID生成器也具有高可用性。</p><h3 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点</h3><p>在“死亡期间”生成的ID是一个问题。死亡期间是指没有向服务器发出生成ID的请求的时间段。这些ID将被浪费，因为它们占用了标识符空间。可能唯一的范围会比预期提前耗尽，并在全局用户ID集中创建间隙。</p><div class="hint-container danger"><p class="hint-container-title">警告</p><h6 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h6><p>你能在上面显示的设计中找到另一个缺点吗？</p><h6 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h6><p>物理时钟不可靠。对于这样的时钟，误差可能为每天17秒。如果我们在服务器上使用这些测量时间，时间会漂移。</p><p>考虑到单个服务器，我们不会受到时间漂移的影响，因为所有交易都落在单个服务器上。但是在分布式环境中，时钟不会保持同步。</p><p>由于测量准确时间的不可靠性，无论我们如何经常互相同步这些时钟或使用准确测量方法同步其他时钟，分布式系统中涉及的各种时钟之间始终会存在<strong>偏差</strong>。</p></div><p>该系统的另一个弱点是其对时间的依赖性。 NTP可能会影响此系统的工作。如果其中一台服务器上的时钟向前漂移了两秒钟，其他服务器将落后两秒钟。</p><p>NTP时钟会识别它并重新校准其时钟。现在，所有服务器将对齐。但是，在那个漂移过程中，可能已经生成了一些尚未发生的时间的ID，现在我们将具有具有相同时间戳的可能非并发事件对。</p><p>最后，我们事件的因果关系将无法得到维护。</p><p>拥有准确时间仍然是一个问题。我们可以使用微秒甚至纳秒分辨率读取机器的时钟。即使使用了这种细粒度的测量，<strong>NTP</strong>的风险仍然存在。由于我们不能依赖物理时钟，让我们将逻辑时钟投入使用。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>网络时间协议（NTP）是用于计算机系统之间基于分组交换的可变延迟数据网络上的时钟同步的网络协议。</p><p>NTP旨在使所有参与计算机与世界协调时间（UTC）在几毫秒之内同步。它减轻了变量网络延迟的影响。</p></div><p>以下表格概述了使用不同设计方法实现的要求。</p><h2 id="每种方法实现的要求-1" tabindex="-1"><a class="header-anchor" href="#每种方法实现的要求-1" aria-hidden="true">#</a> 每种方法实现的要求</h2><table><thead><tr><th></th><th><strong>唯一的</strong></th><th><strong>可扩展的</strong></th><th><strong>可用的</strong></th><th><strong>64位数字ID</strong></th><th><strong>因果关系维护</strong></th></tr></thead><tbody><tr><td><strong>使用UUID</strong></td><td>✖️</td><td>✔️</td><td>✔️</td><td>✖️</td><td>✖️</td></tr><tr><td><strong>使用数据库</strong></td><td>✖️</td><td>✖️</td><td>✔️</td><td>✔️</td><td>✖️</td></tr><tr><td><strong>使用范围处理程序</strong></td><td>✔️</td><td>✔️</td><td>✔️</td><td>✔️</td><td>✖️</td></tr><tr><td><strong>使用UNIX时间戳</strong></td><td>✖️</td><td><strong>薄弱</strong></td><td>✔️</td><td>✔️</td><td><strong>薄弱</strong></td></tr><tr><td><strong>使用Twitter Snowflake</strong></td><td>✔️</td><td>✔️</td><td>✔️</td><td>✔️</td><td><strong>薄弱</strong></td></tr></tbody></table><h2 id="使用逻辑时钟" tabindex="-1"><a class="header-anchor" href="#使用逻辑时钟" aria-hidden="true">#</a> 使用逻辑时钟</h2><p>我们可以利用逻辑时钟（Lamport和向量时钟），需要对事件进行单调递增的标识符。</p><h3 id="lamport时钟" tabindex="-1"><a class="header-anchor" href="#lamport时钟" aria-hidden="true">#</a> Lamport时钟</h3><p>在<strong>Lamport时钟</strong>中，每个节点都有其计数器。系统的所有节点都配备了数字计数器，在首次激活时从零开始。在执行事件之前，数字计数器会递增1。从此事件发送到另一个节点的消息具有计数器值。当另一个节点接收消息时，它首先通过取其时钟值的最大值来更新其逻辑时钟。然后，它获取发送的计数器值并执行消息。</p><p>Lamport时钟使用“发生在”关系提供唯一的部分事件排序。我们还可以通过标记唯一的节点/进程标识符来获得事件的总排序，尽管这种排序不是唯一的，而且会随节点标识符的不同分配而改变。但是，我们应该注意到Lamport时钟不能让我们在全局级别推断因果关系。这意味着我们不能仅仅比较任何服务器上的两个时钟值以推断“发生在”关系。向量时钟克服了这个缺点。</p><h3 id="向量时钟" tabindex="-1"><a class="header-anchor" href="#向量时钟" aria-hidden="true">#</a> 向量时钟</h3><p>向量时钟维护因果历史记录，即事件之间的“发生在”关系的所有信息。因此，我们必须选择一种高效的数据结构来捕获每个事件的因果历史记录。</p><p>考虑下面显示的设计。我们将通过连接相关信息（如Twitter snowflake）来生成我们的ID，并将其分为以下部分：</p><ul><li><strong>符号位</strong>：一个单一的位分配为符号位，其值始终为零。</li><li><strong>向量时钟</strong>：这是53位，是每个节点的计数器。</li><li><strong>工作器编号</strong>：这是10位。它给我们1,024个工作者ID（2^{10}）。</li></ul><p>以下幻灯片展示了使用向量时钟生成唯一ID的过程，其中节点A、B和C驻留在数据中心.</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在以下幻灯片中，为了便于理解，我们没有将数据转换为位。我们将使用以下模式生成唯一ID：</p></div><div class="language-text" data-ext="text"><pre class="language-text"><code>[vector-clock][worker-id]\n</code></pre></div><p><img src="' + _imports_12 + '" alt="QQ截图20230414161611" loading="lazy"></p><p>当前没有任何事件正在进行</p><p><img src="' + _imports_13 + '" alt="QQ截图20230414161623" loading="lazy"></p><p>A1的唯一ID：[1,0,0][A]</p><p><img src="' + _imports_14 + '" alt="QQ截图20230414161642" loading="lazy"></p><p>C1的唯一ID：[0,0,1][C]</p><p><img src="' + _imports_15 + '" alt="QQ截图20230414161658" loading="lazy"></p><p>B1的唯一ID：[1,1,0][B]</p><p><img src="' + _imports_16 + '" alt="QQ截图20230414161715" loading="lazy"></p><p>不需要分配新的ID</p><p><img src="' + _imports_17 + '" alt="QQ截图20230414161733" loading="lazy"></p><p>C2的唯一ID：[0,0,2][C]</p><p><img src="' + _imports_18 + '" alt="QQ截图20230414161756" loading="lazy"></p><p>B2的唯一ID：[1,2,0][B]</p><p><img src="' + _imports_19 + '" alt="QQ截图20230414161817" loading="lazy"></p><p>A2的唯一ID：[2,0,0][A]</p><p><img src="' + _imports_20 + '" alt="QQ截图20230414161830" loading="lazy"></p><p>C3的唯一ID：[0,0,3][C]</p><p><img src="' + _imports_21 + '" alt="QQ截图20230414161844" loading="lazy"></p><p>不需要分配新的ID</p><p><img src="' + _imports_22 + '" alt="QQ截图20230414161859" loading="lazy"></p><p>C4的唯一ID：[1,1,4][C]</p><p><img src="' + _imports_23 + '" alt="QQ截图20230414161912" loading="lazy"></p><p>C5的唯一ID：[1,1,5][C]</p><p><img src="' + _imports_24 + '" alt="QQ截图20230414161924" loading="lazy"></p><p>A3的唯一ID：[3,1,5][A]</p><p><img src="' + _imports_25 + '" alt="QQ截图20230414161936" loading="lazy"></p><p>不需要分配新的ID</p><p>使用向量时钟的方法有效。然而，为了完全捕捉因果关系，向量时钟的大小必须至少为户端，这种信息使ID长度显著增加，使其难以处理、存储、使用和扩展。<em>n</em>个节点。</p><p>因此，当参与节点的总数巨大时，向量时钟需要大量的存储空间。现在有些系统，比如Web应用，将每个浏览器都视为系统的客户端，这种信息使ID长度显著增加，使其难以处理、存储、使用和扩展。</p><h2 id="每种方法实现的要求-2" tabindex="-1"><a class="header-anchor" href="#每种方法实现的要求-2" aria-hidden="true">#</a> 每种方法实现的要求</h2><table><thead><tr><th></th><th><strong>唯一</strong></th><th><strong>可扩展</strong></th><th><strong>可用</strong></th><th><strong>64位数字ID</strong></th><th><strong>保持因果关系</strong></th></tr></thead><tbody><tr><td><strong>使用UUID</strong></td><td>✖️</td><td>✔️</td><td>✔️</td><td>✖️</td><td>✖️</td></tr><tr><td><strong>使用数据库</strong></td><td>✖️</td><td>✖️</td><td>✔️</td><td>✔️</td><td>✖️</td></tr><tr><td><strong>使用范围处理器</strong></td><td>✔️</td><td>✔️</td><td>✔️</td><td>✔️</td><td>✖️</td></tr><tr><td><strong>使用UNIX时间戳</strong></td><td>✖️</td><td><strong>较弱</strong></td><td>✔️</td><td>✔️</td><td><strong>较弱</strong></td></tr><tr><td><strong>使用Twitter雪花算法</strong></td><td>✔️</td><td>✔️</td><td>✔️</td><td>✔️</td><td><strong>较弱</strong></td></tr><tr><td><strong>使用向量时钟</strong></td><td>✔️</td><td><strong>较弱</strong></td><td>✔️</td><td><strong>可超过</strong></td><td>✔️</td></tr></tbody></table><div class="hint-container danger"><p class="hint-container-title">警告</p><h6 id="问题-1" tabindex="-1"><a class="header-anchor" href="#问题-1" aria-hidden="true">#</a> 问题</h6><p>全局时钟会帮助解决我们的问题吗？</p><p>答案</p><p>由于我们没有全局时钟，即使每个节点可以为发生的事件分配唯一的时间戳，这些时间戳也来自以不同速率运行的时钟。</p><p>这将使比较它们更加困难，它们也不会是唯一的。然而，如果我们有一个全局时钟，可以在请求时给我们时间，并且始终准确，那么我们可以保持事件的因果关系，以及唯一的ID。</p><p>这样的时钟将非常有价值，但在分布式系统中处理时间是棘手的。</p></div><h2 id="truetime-api" tabindex="-1"><a class="header-anchor" href="#truetime-api" aria-hidden="true">#</a> TrueTime API</h2><p>Google的TrueTime API在Spanner中是一个有趣的选择。</p><p>它不是返回一个特定的时间戳，而是报告一个时间间隔。</p><p>当询问当前时间时，我们会得到两个值：最早和最晚的时间戳。这些是可能的最早和最晚的时间戳。</p><p>根据其不确定性计算，时钟知道实际当前时间在该区间内的某个位置。区间的宽度取决于许多因素，包括本地石英钟最后一次与更精确的时钟源进行同步的时间有多长。</p><p>Google在每个数据中心部署GPS接收器或原子钟，并在约7毫秒内将时钟同步。这使得Spanner将时钟不确定性降至最低。区间的不确定性表示为epsilon。</p><p>以下幻灯片解释了TrueTime的时间主服务器如何与多个数据中心中的GPS和原子钟配合工作。</p><p><img src="' + _imports_26 + '" alt="QQ截图20230414162343" loading="lazy"></p><p>在每个数据中心中，我们都有时间处理程序。GPS时间主机附有GPS接收器，其中一些带有原子钟</p><p><img src="' + _imports_27 + '" alt="QQ截图20230414162357" loading="lazy"></p><p>客户端需要TrueTime</p><p><img src="' + _imports_28 + '" alt="QQ截图20230414162410" loading="lazy"></p><p>客户端运行一个守护程序。该守护程序联系大多数GPS时间主机，有时会联系原子钟时间主机以获得不同时间参考的冗余性</p><p><img src="' + _imports_29 + '" alt="QQ截图20230414162422" loading="lazy"></p><p>我们运行 Marzullo 算法，交叉时间间隔以确定时间参考。API给出从最早到最晚的时间间隔</p><p><img src="' + _imports_30 + '" alt="QQ截图20230414162435" loading="lazy"></p><p>时间参考将以加/减epsilon的形式表示给定的区间</p><p>以下幻灯片解释了当客户端请求给出TrueTime时如何计算时间。</p><p><img src="' + _imports_31 + '" alt="QQ截图20230414162625" loading="lazy"></p><p>在客户端请求TrueTime之前</p><p><img src="' + _imports_32 + '" alt="QQ截图20230414162635" loading="lazy"></p><p>计算时间零的epsilon</p><p><img src="' + _imports_33 + '" alt="QQ截图20230414162652" loading="lazy"></p><p>我们假设时钟最多每秒漂移200微秒。这意味着在30秒内我们将大约增加6毫秒（ms）到epsilon的值</p><p><img src="' + _imports_34 + '" alt="QQ截图20230414162702" loading="lazy"></p><p>计算30秒时的epsilon</p><p><img src="' + _imports_35 + '" alt="QQ截图20230414162714" loading="lazy"></p><p>在接下来的30秒中，我们与时间主机通信，计算参考不确定性，并且它以每秒200微秒的速率增加</p><p><img src="' + _imports_36 + '" alt="QQ截图20230414162844" loading="lazy"></p><p>计算60秒时的epsilon</p><p><img src="' + _imports_37 + '" alt="QQ截图20230414162859" loading="lazy"></p><p>同样，计算出的参考不确定性以每秒200微秒的速率增加。</p><p>Spanner 保证两个置信区间不重叠,即:</p>', 91);
const _hoisted_164 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.72ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "29.429ex",
  height: "2.34ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -716 13007.5 1034.2",
  "aria-hidden": "true"
};
const _hoisted_165 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "msub" }, [
        /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "1D434",
            d: "M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "TeXAtom",
          transform: "translate(783,-176.7) scale(0.707)",
          "data-mjx-texclass": "ORD"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "起")
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1000,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "点")
          ])
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(2525,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3C",
          d: "M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msub",
        transform: "translate(3580.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "1D434",
            d: "M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "TeXAtom",
          transform: "translate(783,-176.7) scale(0.707)",
          "data-mjx-texclass": "ORD"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "终")
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1000,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "点")
          ])
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(6105.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3C",
          d: "M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msub",
        transform: "translate(7161.5,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "1D435",
            d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "TeXAtom",
          transform: "translate(792,-176.7) scale(0.707)",
          "data-mjx-texclass": "ORD"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "起")
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1000,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "点")
          ])
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(9695.5,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3C",
          d: "M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msub",
        transform: "translate(10751.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "1D435",
            d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "TeXAtom",
          transform: "translate(792,-176.7) scale(0.707)",
          "data-mjx-texclass": "ORD"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "终")
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1000,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "点")
          ])
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_166 = [
  _hoisted_165
];
const _hoisted_167 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "那么B肯定发生在A之后。",
  -1
  /* HOISTED */
);
const _hoisted_168 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们使用 TrueTime 区间生成我们的唯一ID。假设最早的区间为, 最晚的区间为, 不确定性为ε。我们在我们的唯一ID中使用毫秒 作为时间戳。",
  -1
  /* HOISTED */
);
const _hoisted_169 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, "时间戳：时间戳为41位。我们使用 T_{E} 作为时间戳。")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, "不确定性：不确定性为4位。由于最大不确定性被声称为 6-10 毫秒，我们将使用四位来存储它。")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, "工作器编号：这是10位。它给了我们 2^{10} = 1,024个工作器ID。")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, "序列号：这是8位。对于在服务器上生成的每个ID，序列号增加1。它给了我们 = 256种组合。当它达到256时，我们将其重置为零。")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_170 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_38,
      alt: "QQ截图20230408193948",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_171 = /* @__PURE__ */ createStaticVNode('<h3 id="优点-2" tabindex="-1"><a class="header-anchor" href="#优点-2" aria-hidden="true">#</a> 优点</h3><p>TrueTime 满足所有要求。我们能够生成全局唯一的64位标识符。事件的因果关系得到保持。该方法可扩展且高度可用。</p><h3 id="缺点-2" tabindex="-1"><a class="header-anchor" href="#缺点-2" aria-hidden="true">#</a> 缺点</h3><p>如果两个区间重叠，那么我们不确定A和B的顺序。它们可能是并发事件，但不能给出100％的保证。此外，Spanner是昂贵的，因为它确保高数据库一致性。类似Spanner系统的成本也很高，由于其复杂的基础设施需求和监控。</p><p>更新后的表格提供了生成唯一ID的不同系统设计之间的比较。</p><h2 id="各种方法满足的需求" tabindex="-1"><a class="header-anchor" href="#各种方法满足的需求" aria-hidden="true">#</a> 各种方法满足的需求</h2><table><thead><tr><th></th><th><strong>唯一性</strong></th><th><strong>可扩展性</strong></th><th><strong>可用性</strong></th><th><strong>64位数值ID</strong></th><th><strong>保持因果关系</strong></th></tr></thead><tbody><tr><td><strong>使用UUID</strong></td><td>✖️</td><td>✔️</td><td>✔️</td><td>✖️</td><td>✖️</td></tr><tr><td><strong>使用数据库</strong></td><td>✖️</td><td>✖️</td><td>✔️</td><td>✔️</td><td>✖️</td></tr><tr><td><strong>使用范围处理程序</strong></td><td>✔️</td><td>✔️</td><td>✔️</td><td>✔️</td><td>✖️</td></tr><tr><td><strong>使用UNIX时间戳</strong></td><td>✖️</td><td><strong>较弱</strong></td><td>✔️</td><td>✔️</td><td><strong>较弱</strong></td></tr><tr><td><strong>使用Twitter雪花算法</strong></td><td>✔️</td><td>✔️</td><td>✔️</td><td>✔️</td><td><strong>较弱</strong></td></tr><tr><td><strong>使用向量时钟</strong></td><td>✔️</td><td><strong>较弱</strong></td><td>✔️</td><td><strong>可能超出范围</strong></td><td>✔️</td></tr><tr><td><strong>使用TrueTime</strong></td><td>✔️</td><td>✔️</td><td>✔️</td><td>✔️</td><td>✔️</td></tr></tbody></table><h2 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要" aria-hidden="true">#</a> 摘要</h2><ul><li><p>我们想避免重复的标识符。考虑如果生成重复的付款或采购订单会发生什么。</p></li><li><p>UUID提供了关于密钥非冲突的概率保证。要确定地获得非冲突保证可能需要在不同的分布式实体或存储之间达成共识并从复制的存储中读取。</p></li><li><p>随着键长变大，在数据库中更新元组的速度往往会变慢。因此，标识符应该足够大但不要太大。</p></li><li><p>通常，不希望任何人能够猜测下一个ID。否则，可能会发生不良的数据泄露，并且组织的竞争对手可能会通过简单地查看订单ID来了解一天处理了多少订单。将几个随机数添加到标识符的位中使其难以猜测，尽管这会带来性能成本。</p></li><li><p>如果不想将ID与时间相关联，则可以使用简单的计数器来生成唯一的ID。获取时间戳比简单计数器更慢。</p></li><li><p>如果不想将ID与时间相关联，则可以使用简单的计数器来生成唯一的ID。获取时间戳比简单计数器更慢，但这需要我们持久地存储生成的ID。计数器需要存储在数据库中。存储带有自己的问题。这包括多个并发写操作对数据库产生不可承受的压力，以及数据库成为单点故障的风险。</p></li><li><p>对于一些分布式数据库，如Spanner，生成单调递增或递减的ID可能会对性能造成负面影响。Google报告称：“事实上，使用单调递增（或递减）值作为行键不符合Spanner的最佳实践，因为它会在数据库中创建热点，导致性能降低。”</p></li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>全局排序事件是一个昂贵的过程。在集中式数据库中快速且简单的功能（基于自动递增的ID）在分布式版本中由于某些基本约束（如共识在远程实体之间很困难）变得缓慢和复杂。</p><p>例如，Spanner是一个地理分布式数据库，报告称“如果对单元格（单行中的一个列）进行读取-更新事务的延迟为10毫秒（ms），则序列值发出的最大理论频率为每秒100次。这个最大值适用于整个数据库，无论客户端应用实例的数量或数据库中的节点数量如何。这是因为单个节点始终管理单个行。”如果我们能够在全局排序和无间隔标识符的要求上妥协，我们将能够在较短时间内获得许多标识符，即更好的性能。</p></div>', 10);
function _sfc_render(_ctx, _cache) {
  const _component_mn = resolveComponent("mn");
  const _component_mo = resolveComponent("mo");
  const _component_mi = resolveComponent("mi");
  const _component_mrow = resolveComponent("mrow");
  const _component_math = resolveComponent("math");
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  const _component_mjx_container = resolveComponent("mjx-container");
  const _component_center = resolveComponent("center");
  const _component_msup = resolveComponent("msup");
  const _component_mfrac = resolveComponent("mfrac");
  const _component_msub = resolveComponent("msub");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_40, _hoisted_42)),
        createVNode(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx(() => [
            createVNode(_component_math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              display: "block"
            }, {
              default: withCtx(() => [
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("24")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, { stretchy: "false" }, {
                  default: withCtx(() => [
                    createTextVNode("(")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("h")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("o")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("u")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("r")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, { stretchy: "false" }, {
                  default: withCtx(() => [
                    createTextVNode(")")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("∗")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("60")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, { stretchy: "false" }, {
                  default: withCtx(() => [
                    createTextVNode("(")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("m")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("i")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("n")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mrow, { "data-mjx-texclass": "ORD" }, {
                  default: withCtx(() => [
                    createVNode(_component_mo, null, {
                      default: withCtx(() => [
                        createTextVNode("/")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("h")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("o")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("u")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("r")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, { stretchy: "false" }, {
                  default: withCtx(() => [
                    createTextVNode(")")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("∗")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("60")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, { stretchy: "false" }, {
                  default: withCtx(() => [
                    createTextVNode("(")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("s")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("e")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("c")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mrow, { "data-mjx-texclass": "ORD" }, {
                  default: withCtx(() => [
                    createVNode(_component_mo, null, {
                      default: withCtx(() => [
                        createTextVNode("/")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("m")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("i")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("n")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, { stretchy: "false" }, {
                  default: withCtx(() => [
                    createTextVNode(")")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("∗")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("1000")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, { stretchy: "false" }, {
                  default: withCtx(() => [
                    createTextVNode("(")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("I")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("D")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mrow, { "data-mjx-texclass": "ORD" }, {
                  default: withCtx(() => [
                    createVNode(_component_mo, null, {
                      default: withCtx(() => [
                        createTextVNode("/")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("s")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("e")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("c")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, { stretchy: "false" }, {
                  default: withCtx(() => [
                    createTextVNode(")")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("=")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("86")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode(",")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("400")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode(",")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("000")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("I")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("D")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("s")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_43,
    _hoisted_44,
    _hoisted_45,
    _hoisted_46,
    _hoisted_47,
    _hoisted_48,
    _hoisted_49,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("使用时间戳作为ID")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_50,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_62, _hoisted_64)),
        createVNode(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx(() => [
            createVNode(_component_math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              display: "block"
            }, {
              default: withCtx(() => [
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("时")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("间")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("耗")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("尽")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("范")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("围")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("=")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_msup, null, {
                          default: withCtx(() => [
                            createVNode(_component_mn, null, {
                              default: withCtx(() => [
                                createTextVNode("2")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mrow, { "data-mjx-texclass": "ORD" }, {
                              default: withCtx(() => [
                                createVNode(_component_mn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("41")
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("i")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("d")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("365")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mo, null, {
                          default: withCtx(() => [
                            createTextVNode("∗")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("24")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mo, null, {
                          default: withCtx(() => [
                            createTextVNode("∗")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("60")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mo, null, {
                          default: withCtx(() => [
                            createTextVNode("∗")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("1000")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("i")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("d")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("s")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("≈")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("69")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("y")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("e")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("a")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("r")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("s")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_65,
    _hoisted_66,
    _hoisted_67,
    _hoisted_68,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("位的划分概述")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_69,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("将时间转换为UTC")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_70,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("将位转换为十进制")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_71,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("将十进制转换为epoch")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_72,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("将毫秒转换为UTC")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_73,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_164, _hoisted_166)),
        createVNode(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "block",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
        }, {
          default: withCtx(() => [
            createVNode(_component_math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              display: "block"
            }, {
              default: withCtx(() => [
                createVNode(_component_msub, null, {
                  default: withCtx(() => [
                    createVNode(_component_mi, null, {
                      default: withCtx(() => [
                        createTextVNode("A")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mrow, { "data-mjx-texclass": "ORD" }, {
                      default: withCtx(() => [
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("起")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("点")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("<")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_msub, null, {
                  default: withCtx(() => [
                    createVNode(_component_mi, null, {
                      default: withCtx(() => [
                        createTextVNode("A")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mrow, { "data-mjx-texclass": "ORD" }, {
                      default: withCtx(() => [
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("终")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("点")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("<")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_msub, null, {
                  default: withCtx(() => [
                    createVNode(_component_mi, null, {
                      default: withCtx(() => [
                        createTextVNode("B")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mrow, { "data-mjx-texclass": "ORD" }, {
                      default: withCtx(() => [
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("起")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("点")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("<")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_msub, null, {
                  default: withCtx(() => [
                    createVNode(_component_mi, null, {
                      default: withCtx(() => [
                        createTextVNode("B")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mrow, { "data-mjx-texclass": "ORD" }, {
                      default: withCtx(() => [
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("终")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("点")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_167,
    _hoisted_168,
    _hoisted_169,
    _hoisted_170,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("节点B使用 TrueTime 为其事件生成唯一ID")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_171
  ]);
}
const _03UniqueIDsCausality_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "03UniqueIDsCausality.html.vue"]]);
export {
  _03UniqueIDsCausality_html as default
};
