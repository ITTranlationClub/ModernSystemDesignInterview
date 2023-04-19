import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, $ as createBaseVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/09-Databases/QQ截图20230407115228.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>学习何时使用水平分片而不是垂直分片，反之亦然。</p><h2 id="哪种数据库分片方法最好" tabindex="-1"><a class="header-anchor" href="#哪种数据库分片方法最好" aria-hidden="true">#</a> 哪种数据库分片方法最好？</h2><p>水平和垂直分片都涉及向我们的计算基础设施添加资源。</p><p>我们的业务利益相关者必须决定哪种适合我们的组织。</p><p>我们必须根据我们的组织和业务的增长，防止停机时间并减少延迟来相应地扩展我们的资源。</p><p>我们可以通过对 CPU、物理内存需求、硬盘调整和网络带宽的组合进行调整来扩展这些资源。</p><p>以下部分解释了不分片与分片的利弊。</p><h3 id="集中式数据库的优缺点" tabindex="-1"><a class="header-anchor" href="#集中式数据库的优缺点" aria-hidden="true">#</a> 集中式数据库的优缺点</h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>对集中式数据库进行数据维护，如更新和备份，很容易。</li><li>集中式数据库比分布式数据库提供更强的一致性和 ACID 事务。</li><li>对于最终程序员来说，集中式数据库提供了更简单的编程模型。</li><li>对于业务而言，拥有较少的数据可存储在单个节点上更为高效。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>当每秒访问集中式数据库的查询数量接近单节点极限时，集中式数据库会变慢，导致终端用户延迟较高。</li><li>集中式数据库具有单点故障。因此，其无法访问的概率要高得多。</li></ul><h3 id="分布式数据库的优缺点" tabindex="-1"><a class="header-anchor" href="#分布式数据库的优缺点" aria-hidden="true">#</a> 分布式数据库的优缺点</h3><h4 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点</h4><ul><li>从分布式数据库检索数据很快很容易，因为数据是从最近的数据库分片或经常使用的数据库分片中检索的。</li><li>不同的<strong>分布透明级别</strong>的数据可以存储在不同的地方。</li><li>由查询组成的密集事务可以分成多个优化的子查询，这些子查询可以以并行方式处理。</li></ul><h4 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点</h4><ul><li>有时需要从多个站点获取数据，这需要比预期更长的时间。</li><li>关系在不同节点之间垂直或水平分割。因此，如联接等操作需要仔细提取数据以重建完整的关系。这些操作可能变得更加昂贵和复杂。</li><li>在分布式数据库中维护数据的一致性很难，并且需要额外的措施。</li><li>分布式数据库中的更新和备份需要时间来同步数据。</li></ul><h3 id="分布式数据库中的查询优化和处理速度" tabindex="-1"><a class="header-anchor" href="#分布式数据库中的查询优化和处理速度" aria-hidden="true">#</a> 分布式数据库中的查询优化和处理速度</h3><p>分布式数据库中的事务取决于查询类型、涉及的站点（分片）数量、通信速度和其他因素，如底层硬件和使用的数据库类型。</p><p>然而，作为一个例子，假设一个查询访问三个表，<code>Store</code>、<code>Product</code>和<code>Sales</code>，这些表存储在不同的站点上。</p><p>每个表中的属性数量如下图所示：</p><p><img src="' + _imports_0 + '" alt="QQ截图20230407115228" loading="lazy"></p><p>由三个表组成的数据库模式：Store、Product和Sales</p><p>假设这两个表在不同的站点上的分布如下：</p><ul><li><code>Store</code>表在A站点上存储了10,000个元组。</li><li><code>Product</code>表在B站点上存储了100,000个元组。</li><li><code>Sales</code>表在A站点上存储了一百万个元组。</li></ul><p>现在，假设我们需要处理以下查询：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">Select</span> Store_key <span class="token keyword">from</span> <span class="token punctuation">(</span>Store <span class="token keyword">JOIN</span> Sales <span class="token keyword">JOIN</span> Product<span class="token punctuation">)</span>\n<span class="token keyword">where</span> Region<span class="token operator">=</span> <span class="token string">&#39;East&#39;</span> <span class="token operator">AND</span> Brand<span class="token operator">=</span><span class="token string">&#39;Wolf&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><p>上面的查询在<code>Store</code>、<code>Sales</code>和<code>Product</code>表上执行联接操作，并从联接操作结果生成的表中检索<code>Store_key</code>值。</p><p>接下来，假设每个存储的元组长度为200位，即25字节。此外，某些中间结果的估计基数如下：</p><ul><li><code>Wolf</code>品牌的数量为10。</li><li><code>East</code>地区的商店数量为100,000。</li></ul><p>通信假设如下：</p><ul><li>数据速率== 50M位/秒</li><li>访问延迟== 0.1秒</li></ul><h4 id="参数假设" tabindex="-1"><a class="header-anchor" href="#参数假设" aria-hidden="true">#</a> 参数假设</h4><p>在使用不同的方法处理查询之前，让我们定义一些参数：</p><p>a = 总访问延迟</p><p>b = 数据速率</p><p>v = 总数据量</p><p>现在，根据以下公式计算总通信时间:</p>', 38);
const _hoisted_39 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.577ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "10.665ex",
  height: "4.109ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1119 4714 1816",
  "aria-hidden": "true"
};
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "1D447",
          d: "M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(981.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(2037.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44E",
          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(2788.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2B",
          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(3789,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mi",
          transform: "translate(220,676)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "1D463",
            d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mi",
          transform: "translate(248,-686)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "1D44F",
            d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "685",
          height: "60",
          x: "120",
          y: "220"
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = [
  _hoisted_40
];
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "让我们尝试以下可能的方法来执行查询。",
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "h4",
  {
    id: "可能的方法",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#可能的方法",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 可能的方法")
  ],
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "将Product表移动到A站点并在A站点上处理查询。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_45 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.991ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "38.282ex",
  height: "5.027ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1342 16920.7 2222",
  "aria-hidden": "true"
};
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "1D447",
          d: "M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(981.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(2037.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          transform: "translate(778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(3537.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2B",
          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(4538,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,676)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
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
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(1500,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2C",
              d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(1944.7,0)"
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
            "data-mml-node": "mo",
            transform: "translate(3666.9,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(4389.1,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "32",
              d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
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
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(719.9,-686)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "35",
              d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
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
            transform: "translate(1000,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2C",
              d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(1444.7,0)"
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
            "data-mml-node": "mo",
            transform: "translate(2944.7,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2C",
              d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(3389.3,0)"
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
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "6089.1",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(11144.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(12200.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
          transform: "translate(778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13478.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D460",
          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13947.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14413.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D450",
          d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14846.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45C",
          d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(15331.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45B",
          d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(15931.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D451",
          d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(16451.7,0)"
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
const _hoisted_47 = [
  _hoisted_46
];
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "这里，0.1是A站点上表的访问延迟，100,000是Product表中的元组 数量。对于所有以下计算，200和50,000,000的数字是相同的。",
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "将Store和Sales移动到B站点并在B站点上处理查询：")
  ],
  -1
  /* HOISTED */
);
const _hoisted_50 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.991ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "52.739ex",
  height: "5.294ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1460 23310.4 2340",
  "aria-hidden": "true"
};
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "1D447",
          d: "M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(981.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(2037.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          transform: "translate(778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(3537.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2B",
          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(4538,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,710)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mo" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "28",
              d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(389,0)"
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
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(1389,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2C",
              d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(1833.7,0)"
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
            "data-mml-node": "mo",
            transform: "translate(3555.9,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2B",
              d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(4556.1,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "31",
              d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(5056.1,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2C",
              d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(5500.8,0)"
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
            "data-mml-node": "mo",
            transform: "translate(7000.8,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2C",
              d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(7445.4,0)"
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
            "data-mml-node": "mo",
            transform: "translate(8945.4,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "29",
              d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(9556.7,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(10278.9,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "32",
              d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
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
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(3664.8,-686)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "35",
              d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
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
            transform: "translate(1000,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2C",
              d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(1444.7,0)"
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
            "data-mml-node": "mo",
            transform: "translate(2944.7,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2C",
              d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(3389.3,0)"
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
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "11978.9",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(17034.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(18090.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "34",
          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          transform: "translate(778,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "34",
          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
          transform: "translate(1278,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(19868.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D460",
          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(20337.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(20803.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D450",
          d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(21236.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45C",
          d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(21721.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45B",
          d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(22321.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D451",
          d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(22841.4,0)"
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
const _hoisted_52 = [
  _hoisted_51
];
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "这里，0.2是Store和Product表的访问延迟。10,000和1,000,000是Store和Product表中的元组数量。",
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "将Brand在B站点限制为Wolf（称为选择），并将结果移动到A站点：")
  ],
  -1
  /* HOISTED */
);
const _hoisted_55 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.991ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "37.314ex",
  height: "5.027ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1342 16492.9 2222",
  "aria-hidden": "true"
};
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "1D447",
          d: "M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(981.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(2037.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          transform: "translate(778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(3537.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2B",
          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(4538,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(942.4,676)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
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
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(1222.2,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(1944.4,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "32",
              d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
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
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,-686)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "35",
              d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
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
            transform: "translate(1000,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2C",
              d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(1444.7,0)"
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
            "data-mml-node": "mo",
            transform: "translate(2944.7,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2C",
              d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(3389.3,0)"
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
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "5089.3",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(10145.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2248",
          d: "M55 319Q55 360 72 393T114 444T163 472T205 482Q207 482 213 482T223 483Q262 483 296 468T393 413L443 381Q502 346 553 346Q609 346 649 375T694 454Q694 465 698 474T708 483Q722 483 722 452Q722 386 675 338T555 289Q514 289 468 310T388 357T308 404T224 426Q164 426 125 393T83 318Q81 289 69 289Q55 289 55 319ZM55 85Q55 126 72 159T114 210T163 238T205 248Q207 248 213 248T223 249Q262 249 296 234T393 179L443 147Q502 112 553 112Q609 112 649 141T694 220Q694 249 708 249T722 217Q722 153 675 104T555 55Q514 55 468 76T388 123T308 170T224 192Q164 192 125 159T83 84Q80 55 69 55Q55 55 55 85Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(11200.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          transform: "translate(778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(12478.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D460",
          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(12947.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13413.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D450",
          d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13846.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45C",
          d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14331.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D462",
          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14903.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45B",
          d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(15503.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D451",
          d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(16023.9,0)"
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
const _hoisted_57 = [
  _hoisted_56
];
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "这里，0.1是Product表的访问延迟。Wolf品牌的数量为10，因此是元组数。",
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "当我们比较这三种方法时，第三种方法提供了最小的延迟（0.1秒）。该示例显示，仔细的查询优化在分布式数据库中也至关重要。",
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "结论",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#结论",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 结论")
  ],
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "数据分布（垂直和水平分片）跨多个节点旨在改善以下功能，考虑到查询已经优化：",
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "可靠性（容错）"),
    /* @__PURE__ */ createBaseVNode("li", null, "性能"),
    /* @__PURE__ */ createBaseVNode("li", null, "平衡的存储容量和成本")
  ],
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "集中式和分布式数据库都有其优缺点。我们应该根据应用程序的需求选择它们。",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_mi = resolveComponent("mi");
  const _component_mo = resolveComponent("mo");
  const _component_mfrac = resolveComponent("mfrac");
  const _component_math = resolveComponent("math");
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  const _component_mjx_container = resolveComponent("mjx-container");
  const _component_mn = resolveComponent("mn");
  const _component_mrow = resolveComponent("mrow");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_39, _hoisted_41)),
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
                    createTextVNode("T")
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
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("a")
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mi, null, {
                      default: withCtx(() => [
                        createTextVNode("v")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mi, null, {
                      default: withCtx(() => [
                        createTextVNode("b")
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
    _hoisted_42,
    _hoisted_43,
    _hoisted_44,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_45, _hoisted_47)),
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
                    createTextVNode("T")
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
                    createTextVNode("0.1")
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("100")
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
                        createVNode(_component_mo, null, {
                          default: withCtx(() => [
                            createTextVNode("∗")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("200")
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
                            createTextVNode("50")
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
                    createTextVNode("=")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("0.5")
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
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("o")
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
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_48,
    _hoisted_49,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_50, _hoisted_52)),
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
                    createTextVNode("T")
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
                    createTextVNode("0.2")
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mo, { stretchy: "false" }, {
                          default: withCtx(() => [
                            createTextVNode("(")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("10")
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
                        createVNode(_component_mo, null, {
                          default: withCtx(() => [
                            createTextVNode("+")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("1")
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
                            createTextVNode("200")
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
                            createTextVNode("50")
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
                    createTextVNode("=")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("4.24")
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
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("o")
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
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_53,
    _hoisted_54,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_55, _hoisted_57)),
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
                    createTextVNode("T")
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
                    createTextVNode("0.1")
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("10")
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
                            createTextVNode("200")
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
                            createTextVNode("50")
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
                    createTextVNode("0.1")
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
                    createTextVNode("n")
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
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_58,
    _hoisted_59,
    _hoisted_60,
    _hoisted_61,
    _hoisted_62,
    _hoisted_63
  ]);
}
const _05TradeOffsDatabases_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "05TradeOffsDatabases.html.vue"]]);
export {
  _05TradeOffsDatabases_html as default
};
