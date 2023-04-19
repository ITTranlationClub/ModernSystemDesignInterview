import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/19-RateLimiter/howTheTokenBucketAlgorithmWorks.png";
const _imports_1 = "/model-system-design/img/19-RateLimiter/consumesATokenFromTheBucket.png";
const _imports_2 = "/model-system-design/img/19-RateLimiter/TwoMoreRequestWithinSameMinute.png";
const _imports_3 = "/model-system-design/img/19-RateLimiter/QQ截图20230409211051.png";
const _imports_4 = "/model-system-design/img/19-RateLimiter/RefillTheBucketAfterOneMinute.png";
const _imports_5 = "/model-system-design/img/19-RateLimiter/HowTheLeakingBucketAlgorithmWorks.png";
const _imports_6 = "/model-system-design/img/19-RateLimiter/FixedWindowCounterAlgorithm.png";
const _imports_7 = "/model-system-design/img/19-RateLimiter/EdgeCaseProblemInFixedWindow.png";
const _imports_8 = "/model-system-design/img/19-RateLimiter/ANew1.png";
const _imports_9 = "/model-system-design/img/19-RateLimiter/ANew2.png";
const _imports_10 = "/model-system-design/img/19-RateLimiter/ANew3.png";
const _imports_11 = "/model-system-design/img/19-RateLimiter/ANew4.png";
const _imports_12 = "/model-system-design/img/19-RateLimiter/QQ截图20230409211242.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>了解各种请求速率限制算法的工作原理。</p><h2 id="请求速率限制算法" tabindex="-1"><a class="header-anchor" href="#请求速率限制算法" aria-hidden="true">#</a> 请求速率限制算法</h2><p>请求速率限制算法的执行需要高效的算法，每个算法都有其独特的优点和缺点。然而，在特定的时间点上，我们可以根据不同的需要选择使用一个或多个算法的组合。虽然还有其他算法可供选择，但我们将介绍以下流行的算法：</p><ul><li>令牌桶（Token Bucket）</li><li>漏斗（Leaking Bucket）</li><li>固定窗口计数器（Fixed Window Counter）</li><li>滑动窗口日志（Sliding Window Log）</li><li>滑动窗口计数器（Sliding Window Counter）</li></ul><h3 id="令牌桶算法" tabindex="-1"><a class="header-anchor" href="#令牌桶算法" aria-hidden="true">#</a> 令牌桶算法</h3><p>该算法使用一个固定容量的桶的比喻来实现请求速率的限制。该桶定期以恒定的速率填充令牌。令牌可以视为某种特定大小的数据包。因此，每次接收到请求时，算法都会检查桶中是否有令牌。必须至少有一个令牌才能进一步处理请求。</p><p>令牌桶算法的流程如下：</p><p>假设我们有一个预定义的速率限制为 <em>R</em>，桶的总容量为 <em>C</em>。</p><ol><li>该算法在每隔 1/<em>R</em> 秒添加一个新的令牌到桶中。</li><li>当桶中的令牌数等于桶的总容量 <em>C</em> 时，算法会丢弃新的传入令牌。</li><li>如果有 <em>N</em> 个传入请求并且桶中有至少 <em>N</em> 个令牌，则消耗令牌并将请求转发进行进一步处理。</li><li>如果有 <em>N</em> 个传入请求并且桶中的令牌数量较少，则接受的请求数量等于桶中可用令牌的数量。</li></ol><p>下图表示令牌桶算法的工作原理：</p><p><img src="' + _imports_0 + '" alt="" loading="lazy"></p>', 11);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "下面的示例演示了令牌的消耗和速率限制逻辑。在此示例中，桶的容量为三，并以每分钟三个令牌的速率填充。",
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_2,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_3,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_4,
      alt: "",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<h4 id="基本参数" tabindex="-1"><a class="header-anchor" href="#基本参数" aria-hidden="true">#</a> 基本参数</h4><p>我们需要以下必要参数来实施令牌桶算法：</p><ul><li><strong>桶容量（<em>C</em>）：</strong> 桶中最多可以容纳的令牌数。</li><li><strong>速率限制（<em>R</em>）：</strong> 我们要限制的每单位时间的请求数。</li><li><strong>补充速率（1/<em>R</em>）：</strong> 每单位时间放入桶中的令牌数。</li><li><strong>请求计数（<em>N</em>）：</strong> 该参数跟踪传入请求的数量，并将其与桶的容量进行比较。</li></ul><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>在桶中有足够的令牌时，该算法可能会导致突发流量。</li><li>占用的空间相对较小。由于状态受到限制，算法所需的内存很少。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>从实现的角度来看，锁可能需要从桶中取出一个令牌，如果锁上的争用增加，则会增加请求的处理延迟。</li><li>选择必要参数的最佳值是一个难题。</li></ul><h3 id="漏斗算法" tabindex="-1"><a class="header-anchor" href="#漏斗算法" aria-hidden="true">#</a> 漏斗算法</h3><p><strong>漏桶算法</strong>是令牌桶算法的一个变种，有一些细微的修改。该算法使用桶来容纳传入的请求，并以常数输出速率处理它们，而不是使用令牌。该算法使用水桶漏水的类比。同样，在此算法中，请求以变量速率到达。该算法以先进先出（FIFO）顺序以常定速率处理这些请求。</p><p>让我们看一下下面的插图，了解漏桶算法的工作方式：</p><p><img src="' + _imports_5 + '" alt="漏桶算法工作图示" loading="lazy"></p>', 11);
const _hoisted_28 = /* @__PURE__ */ createStaticVNode('<h4 id="基本参数-1" tabindex="-1"><a class="header-anchor" href="#基本参数-1" aria-hidden="true">#</a> 基本参数</h4><p>漏桶算法需要以下参数。</p><ul><li><strong>桶容量（<em>C</em>）：</strong> 它确定了桶的最大容量。当桶达到<em>C</em>最大限制时，算法将丢弃传入的请求。</li><li><strong>流入速率（<em>R_in</em>）：</strong> 此参数显示请求的流入速率。它是一个变量量，取决于应用程序和请求类型的特性。我们使用此参数来找到桶的初始容量。</li><li><strong>流出速率（<em>R_out</em>）：</strong> 它确定每单位时间处理的请求数。</li></ul><h4 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点</h4><ul><li>由于常数的流出速率（<em>R_out</em>），它避免了请求的突发，而不像令牌桶算法。</li><li>该算法还非常节省空间，因为它仅需要三个状态：流入速率（<em>R_in</em>）、流出速率（<em>R_out</em>）和桶容量（<em>C</em>）。</li><li>由于请求以固定速率处理，因此适用于具有稳定出流速率的应用程序。</li></ul><h4 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点</h4><ul><li>一次请求突发可能会填满桶，如果未在指定的时间内处理，则最近的请求可能会受到影响。</li><li>确定最佳桶大小和流出速率是一个挑战。</li></ul><h3 id="固定窗口计数器算法" tabindex="-1"><a class="header-anchor" href="#固定窗口计数器算法" aria-hidden="true">#</a> 固定窗口计数器算法</h3><p>该算法将时间分为称为“窗口”的固定间隔，为每个窗口分配一个计数器。当特定窗口接收到请求时，计数器加一。一旦计数器达到其限制，该窗口内的新请求将被丢弃。</p><p>如下图所示，虚线代表每个窗口中的限制。如果计数器低于限制，则转发请求；否则丢弃请求。</p><p><img src="' + _imports_6 + '" alt="固定窗口计数器算法" loading="lazy"></p>', 11);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "该算法存在一个重大问题。窗口的边缘可能会出现大于允许请求数量的突发请求。在下图中，该系统允许每分钟最多十个请求。但是，在01:30到02:30的一分钟窗口中的请求数量为20个，大于允许的请求数量。",
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_7,
      alt: "固定窗口边缘问题",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createStaticVNode('<h4 id="基本参数-2" tabindex="-1"><a class="header-anchor" href="#基本参数-2" aria-hidden="true">#</a> 基本参数</h4><p>固定窗口计数器算法需要以下参数。</p><ul><li><strong>窗口大小（<em>W</em>）：</strong> 它表示时间窗口的大小。它可以是一分钟、一小时或任何其他合适的时间片。</li><li><strong>速率限制（<em>R</em>）：</strong> 它显示每个时间窗口允许的请求数量。</li><li><strong>请求次数（<em>N</em>）：</strong> 此参数显示每个窗口内的传入请求数量。如果<em>N</em>小于或等于<em>R</em>，则允许传入的请求。</li></ul><h4 id="优点-2" tabindex="-1"><a class="header-anchor" href="#优点-2" aria-hidden="true">#</a> 优点</h4><ul><li>由于请求速率的限制，它也非常节省空间。</li><li>相对于令牌桶样式算法（如果没有足够的令牌，则舍弃新请求），此算法处理新请求。</li></ul><h4 id="缺点-2" tabindex="-1"><a class="header-anchor" href="#缺点-2" aria-hidden="true">#</a> 缺点</h4><ul><li>在窗口边缘处出现一致的请求突发（每个窗口允许的请求数量的两倍），可能会导致性能降低。</li></ul><h3 id="滑动窗口日志算法" tabindex="-1"><a class="header-anchor" href="#滑动窗口日志算法" aria-hidden="true">#</a> 滑动窗口日志算法</h3><p><strong>滑动窗口日志算法</strong>跟踪每个进入的请求。当一个请求到达时，它的到达时间被存储在哈希表（通常称为日志）中。日志根据进来请求的时间戳进行排序。请求的允许取决于日志的大小和到达时间。</p><p>与<strong>固定窗口计数器</strong>算法相比，该算法的主要优点是不会遭受边缘条件的影响。</p><p>让我们看看下面的示例，了解滑动窗口日志算法的工作方式。假设我们在一分钟内的最大速率限制是两个请求。</p><p><img src="' + _imports_8 + '" alt="image1" loading="lazy"></p>', 12);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_9,
      alt: "image2",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_10,
      alt: "image3",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_11,
      alt: "image4",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createStaticVNode('<h4 id="基本参数-3" tabindex="-1"><a class="header-anchor" href="#基本参数-3" aria-hidden="true">#</a> 基本参数</h4><p>实现滑动窗口日志算法需要以下参数：</p><ul><li><strong>日志大小（L）：</strong> 该参数类似于速率限制（R），它确定指定时间范围内允许的请求数量。</li><li><strong>到达时间（T）：</strong> 该参数跟踪进入请求的时间戳并确定它们的计数。</li><li><strong>时间范围（T_{r}）：</strong> 该参数确定时间范围。如果旧请求的时间戳不在此范围内，则删除它们。窗口的起始时间是根据第一个进入请求确定的，并在一分钟后过期。类似地，当到期时间之后的另一个请求到达时，窗口范围将相应更新。</li></ul><h4 id="优点-3" tabindex="-1"><a class="header-anchor" href="#优点-3" aria-hidden="true">#</a> 优点</h4><ul><li>与固定窗口相比，该算法不受边界条件的影响。</li></ul><h4 id="缺点-3" tabindex="-1"><a class="header-anchor" href="#缺点-3" aria-hidden="true">#</a> 缺点</h4><ul><li>它消耗额外的存储空间以存储额外信息，即进来请求的时间戳。</li><li>它保留时间戳以提供动态窗口，即使请求被拒绝。</li></ul><h3 id="滑动窗口计数器算法" tabindex="-1"><a class="header-anchor" href="#滑动窗口计数器算法" aria-hidden="true">#</a> 滑动窗口计数器算法</h3><p>与之前的固定窗口算法不同，<strong>滑动窗口计数器算法</strong>不是基于固定的时间单位限制请求。该算法考虑了固定窗口计数器和滑动窗口日志算法，以使请求的流程更加顺畅。让我们来看一下下图中算法的流程。</p><p><img src="' + _imports_12 + '" alt="image5" loading="lazy"></p>', 10);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在上图中，我们在上一个窗口中有88个请求，当前窗口中有12个请求。我们将速率限制设为每分钟100个请求。此外，滚动窗口与当前窗口重叠15秒。现在假设一个新请求在02:15到达。我们将用下面的数学公式来决定接受或拒绝请求：",
  -1
  /* HOISTED */
);
const _hoisted_67 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.65ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "59.626ex",
  height: "2.347ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 26354.7 1037.2",
  "aria-hidden": "true"
};
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D445",
          d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(759,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44E",
          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(1288,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D461",
          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(1649,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(2392.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msub",
        transform: "translate(3448.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "1D445",
            d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mi",
          transform: "translate(792,-150) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "1D45D",
            d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(4868.5,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(5590.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "28",
          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(5979.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "28",
          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(6368.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D461",
          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(6729.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D456",
          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(7074.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45A",
          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(7952.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(8418.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D453",
          d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(8968.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45F",
          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(9419.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44E",
          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(9948.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45A",
          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(10826.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(11514.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2212",
          d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(12515.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45C",
          d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13000.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D463",
          d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13485.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13951.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45F",
          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14402.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D459",
          d: "M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14700.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44E",
          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(15229.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45D",
          d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(15732.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D461",
          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(16093.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D456",
          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(16438.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45A",
          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(17316.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(17782.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "29",
          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "TeXAtom",
        "data-mjx-texclass": "ORD",
        transform: "translate(18171.1,0)"
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
        transform: "translate(18671.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D461",
          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(19032.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D456",
          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(19377.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45A",
          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(20255.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(20721.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D453",
          d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(21271.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45F",
          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(21722.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44E",
          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(22251.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45A",
          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(23129.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(23595.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "29",
          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(24206.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2B",
          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msub",
        transform: "translate(25206.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "1D445",
            d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mi",
          transform: "translate(792,-150) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "1D450",
            d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
            style: { "stroke-width": "3" }
          })
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_69 = [
  _hoisted_68
];
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("在这里，"),
    /* @__PURE__ */ createBaseVNode("em", null, "R_p"),
    /* @__PURE__ */ createTextVNode("是前一个窗口中的请求数量，即88个。"),
    /* @__PURE__ */ createBaseVNode("em", null, "R_c"),
    /* @__PURE__ */ createTextVNode("是当前窗口中的请求数量，即12个。我们的时间范围在60秒内，重叠时间为15秒。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_71 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.602ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "30.04ex",
  height: "4.638ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1342 13277.9 2050",
  "aria-hidden": "true"
};
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D445",
          d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(759,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44E",
          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(1288,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D461",
          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(1649,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(2392.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(3448.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(4670.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(5393,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "italic",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif",
          "font-style": "italic"
        }, "（")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(6393,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,676)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
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
            transform: "translate(1222.2,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2212",
              d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(2222.4,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "31",
              d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "35",
              d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
              transform: "translate(500,0)",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mn",
          transform: "translate(1331.2,-686)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "31",
            d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
            style: { "stroke-width": "3" }
          }),
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "35",
            d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
            transform: "translate(500,0)",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "3422.4",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(10055.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "italic",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif",
          "font-style": "italic"
        }, "）")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(11277.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2B",
          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(12277.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_73 = [
  _hoisted_72
];
const _hoisted_74 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "16.475ex",
  height: "1.731ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 7282.1 765",
  "aria-hidden": "true"
};
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D445",
          d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(759,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44E",
          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(1288,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D461",
          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(1649,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(2392.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(3448.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "37",
          d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(4726.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3C",
          d: "M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(5782.1,0)"
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
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_76 = [
  _hoisted_75
];
const _hoisted_77 = /* @__PURE__ */ createStaticVNode('<p>由于78小于100，因此允许进入的请求。</p><h4 id="基本参数-4" tabindex="-1"><a class="header-anchor" href="#基本参数-4" aria-hidden="true">#</a> 基本参数</h4><p>该算法相对于上面描述的其他算法更加复杂。它需要以下参数：</p><ul><li><p><strong>速率限制（<em>R</em>）:</strong> 它确定每个窗口允许的最大请求数量。</p></li><li><p><strong>窗口大小（<em>W</em>）:</strong> 此参数表示时间窗口的大小，可以是一分钟、一小时或任何时间切片。</p></li><li><p><strong>前一个窗口中的请求数（<em>R_p</em>）：</strong> 它确定在前一个时间窗口中已接收的请求数总数。</p></li><li><p><strong>当前窗口中的请求数(<em>R_c</em>)</strong> 它表示在当前窗口中接收的请求数。</p></li><li><p><strong>重叠时间（<em>O_t</em>）：</strong> 此参数显示滚动窗口与当前窗口的重叠时间。</p></li></ul><h4 id="优点-4" tabindex="-1"><a class="header-anchor" href="#优点-4" aria-hidden="true">#</a> 优点：</h4><ul><li>该算法也具有空间效率，因为它具有受限状态：当前窗口中的请求数、前一个窗口中的请求数、重叠百分比等等。</li><li>它可以平滑处理请求突发并基于前一个窗口的近似平均值处理它们。</li></ul><h4 id="缺点-4" tabindex="-1"><a class="header-anchor" href="#缺点-4" aria-hidden="true">#</a> 缺点：</h4><ul><li>该算法假定前一个窗口中的请求数是均匀分布的，这可能并不总是可能的。</li></ul><h2 id="速率限制算法的比较" tabindex="-1"><a class="header-anchor" href="#速率限制算法的比较" aria-hidden="true">#</a> 速率限制算法的比较</h2><p>所有速率限制算法的两个主要因素是：</p><ul><li><strong>内存：</strong> 此功能是指算法需要维护的状态数量。例如，如果一个算法需要比另一个算法更少的变量（状态），则它更具空间效率。</li><li><strong>突发：</strong> 这是指单位时间内流量的增加超过定义的限制。</li></ul><p>下表显示了本课程所描述的所有算法的空间效率和流量突发性。</p><table><thead><tr><th>算法</th><th>空间效率</th><th>允许突发？</th></tr></thead><tbody><tr><td>令牌桶</td><td>是</td><td>是，在定义的限制内允许流量突发</td></tr><tr><td>漏桶</td><td>是</td><td>否</td></tr><tr><td>固定窗口计数器</td><td>是</td><td>是，在时间窗口的边缘允许突发，并且可以超过定义的限制</td></tr><tr><td>滑动窗口日志</td><td>否，维护日志需要额外的存储空间。</td><td>否</td></tr><tr><td>滑动窗口计数器</td><td>是，但与其他空间效率较高的算法相比需要更多的空间。</td><td>平滑突发流量</td></tr></tbody></table><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>在本课程中，我们探讨了各种流行的速率限制算法。我们还揭示了这些算法的优缺点。每种算法都可以根据用户选择和使用案例类型进行部署。</p>', 15);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  const _component_mi = resolveComponent("mi");
  const _component_mo = resolveComponent("mo");
  const _component_msub = resolveComponent("msub");
  const _component_mrow = resolveComponent("mrow");
  const _component_math = resolveComponent("math");
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  const _component_mjx_container = resolveComponent("mjx-container");
  const _component_mn = resolveComponent("mn");
  const _component_mfrac = resolveComponent("mfrac");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("令牌桶算法的工作原理")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_12,
    _hoisted_13,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("一开始，桶中有三个令牌。一分钟内到达一个请求，会消耗桶中的一个令牌")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_14,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("在同一分钟内，又有两个请求到达并消耗剩余的两个令牌")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_15,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("在同一分钟内，又有一个（第四个）请求到达。因为桶中没有令牌了，所以拒绝该请求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_16,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("一分钟后重新填充桶")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_17,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("漏桶算法的工作原理")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_28,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("固定窗口计数器算法：丢弃超出限制的请求")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_39,
    _hoisted_40,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("固定窗口计数器算法的边缘情况问题。在01:30到02:30的一分钟内的请求数量超过了预定义的每分钟10个请求的限制")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_41,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("一个新请求在01:00到达。它的到达时间被添加到日志中，请求被接受。时间窗口标记为01:00到02:00")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_53,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("另一个请求在01:20到达，它的时间戳被添加到日志中。由于日志大小小于最大速率限制，所以允许它")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_54,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("第三个请求在01:45到达，它的时间戳被添加到日志中。该算法拒绝该请求，因为日志大小达到了最大限制三个")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_55,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("在02:25时有一个新请求，我们从那里开始新的窗口。我们在日志中保留最后一个窗口（从01:25到02:25）。过时的数据从日志中删除，并相应地减小大小")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_56,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("滑动窗口计数器算法，绿色阴影区域显示1分钟的滚动窗口")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_66,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_67, _hoisted_69)),
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
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("R")
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
                    createTextVNode("t")
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
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("=")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_msub, null, {
                  default: withCtx(() => [
                    createVNode(_component_mi, null, {
                      default: withCtx(() => [
                        createTextVNode("R")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mi, null, {
                      default: withCtx(() => [
                        createTextVNode("p")
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
                    createTextVNode("∗")
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
                createVNode(_component_mo, { stretchy: "false" }, {
                  default: withCtx(() => [
                    createTextVNode("(")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("t")
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
                    createTextVNode("m")
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
                    createTextVNode("f")
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
                    createTextVNode("a")
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
                    createTextVNode("e")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("−")
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
                    createTextVNode("v")
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
                    createTextVNode("r")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("l")
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
                    createTextVNode("p")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("t")
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
                    createTextVNode("m")
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
                createVNode(_component_mo, { stretchy: "false" }, {
                  default: withCtx(() => [
                    createTextVNode(")")
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
                    createTextVNode("t")
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
                    createTextVNode("m")
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
                    createTextVNode("f")
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
                    createTextVNode("a")
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
                    createTextVNode("e")
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
                    createTextVNode("+")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_msub, null, {
                  default: withCtx(() => [
                    createVNode(_component_mi, null, {
                      default: withCtx(() => [
                        createTextVNode("R")
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
    _hoisted_70,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_71, _hoisted_73)),
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
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("R")
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
                    createTextVNode("t")
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
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("=")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("88")
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
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("（")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("60")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mo, null, {
                          default: withCtx(() => [
                            createTextVNode("−")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("15")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("15")
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
                    createTextVNode("）")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("+")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("12")
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
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_74, _hoisted_76)),
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
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("R")
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
                    createTextVNode("t")
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
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("=")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("78")
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
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("100")
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
    _hoisted_77
  ]);
}
const _04RateLimiterAlgorithms_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "04RateLimiterAlgorithms.html.vue"]]);
export {
  _04RateLimiterAlgorithms_html as default
};
