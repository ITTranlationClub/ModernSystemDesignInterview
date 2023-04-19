import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, $ as createBaseVNode, a2 as createStaticVNode, a1 as createTextVNode } from "./framework-03ffdf83.js";
const _imports_0 = "/model-system-design/img/05-Back-of-the-envelopeCalculations/搜狗截图20230406180650.png";
const _imports_1 = "/model-system-design/img/05-Back-of-the-envelopeCalculations/搜狗截图20230406180846.png";
const _imports_2 = "/model-system-design/img/05-Back-of-the-envelopeCalculations/搜狗截图20230406180903.png";
const _imports_3 = "/model-system-design/img/05-Back-of-the-envelopeCalculations/搜狗截图20230406180916.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>试试手头的一些估算计算。</p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>现在我们已经打下了资源估算的基础，让我们利用我们的背景知识来估算服务器、存储和带宽等资源。下面，我们考虑一个场景和一个服务，做出假设，并根据这些假设进行估算。让我们马上开始吧！</p><h2 id="需要的服务器数量" tabindex="-1"><a class="header-anchor" href="#需要的服务器数量" aria-hidden="true">#</a> 需要的服务器数量</h2><p>让我们对类似Twitter的服务做出以下假设。</p><p><strong>假设:</strong></p><ul><li>每天有5亿活跃用户(DAU)。</li><li>每个用户平均每天发出20个请求。</li><li>还记得单个服务器可以处理8000个RPS。</li></ul><h4 align="center">估算需要的服务器数量</h4><p><img src="' + _imports_0 + '" alt="搜狗截图20230406180650" loading="lazy"></p>', 9);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "系统每秒流量数:",
  -1
  /* HOISTED */
);
const _hoisted_11 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.059ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "46.1ex",
  height: "5.285ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1426 20376 2336",
  "aria-hidden": "true"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mfrac" }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,676)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "日")
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
            }, "活")
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
            }, "用")
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
            }, "户")
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(4222.2,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4944.4,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "每")
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5944.4,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "日")
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6944.4,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "请")
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(7944.4,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "求")
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8944.4,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "数")
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(3192.2,-710)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("text", {
              "data-variant": "normal",
              transform: "scale(1,-1)",
              "font-size": "884px",
              "font-family": "serif"
            }, "每")
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
            }, "日")
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
            }, "秒")
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
            }, "数")
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "10144.4",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(10662.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(11718,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,676)"
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
            transform: "translate(1500,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D440",
              d: "M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(2773.2,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(3495.4,0)"
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
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mn",
          transform: "translate(1217.7,-686)"
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
          }),
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "34",
            d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
            transform: "translate(1000,0)",
            style: { "stroke-width": "3" }
          }),
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "30",
            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
            transform: "translate(1500,0)",
            style: { "stroke-width": "3" }
          }),
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "30",
            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
            transform: "translate(2000,0)",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "4695.4",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(16931.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(17987,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
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
        "data-mml-node": "mi",
        transform: "translate(19487,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D43E",
          d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "所需服务器数量:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.016ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "40.324ex",
  height: "5.319ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1460 17823.1 2351",
  "aria-hidden": "true"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mfrac" }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,710)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D441",
              d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(888,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D462",
              d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1460,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45A",
              d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2338,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D44F",
              d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2767,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3233,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3684,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D442",
              d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4447,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4997,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D445",
              d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5756,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6222,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45E",
              d: "M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6682,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D462",
              d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(7254,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(7720,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8189,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D461",
              d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8550,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "TeXAtom",
            "data-mjx-texclass": "ORD",
            transform: "translate(9019,0)"
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
            transform: "translate(9519,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(9988,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(10454,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D450",
              d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(2586.5,-686)"
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
            transform: "translate(759,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D443",
              d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1510,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2155,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45C",
              d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2640,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3190,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3835,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4301,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4752,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D463",
              d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5237,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5703,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "11087",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(11604.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(12660.6,0)"
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
              "data-c": "31",
              d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
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
            "data-mml-node": "mi",
            transform: "translate(1500,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D43E",
              d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(720,-686)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "38",
              d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(500,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D43E",
              d: "M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "2589",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(15767.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2248",
          d: "M55 319Q55 360 72 393T114 444T163 472T205 482Q207 482 213 482T223 483Q262 483 296 468T393 413L443 381Q502 346 553 346Q609 346 649 375T694 454Q694 465 698 474T708 483Q722 483 722 452Q722 386 675 338T555 289Q514 289 468 310T388 357T308 404T224 426Q164 426 125 393T83 318Q81 289 69 289Q55 289 55 319ZM55 85Q55 126 72 159T114 210T163 238T205 248Q207 248 213 248T223 249Q262 249 296 234T393 179L443 147Q502 112 553 112Q609 112 649 141T694 220Q694 249 708 249T722 217Q722 153 675 104T555 55Q514 55 468 76T388 123T308 170T224 192Q164 192 125 159T83 84Q80 55 69 55Q55 55 55 85Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(16823.1,0)"
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
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = [
  _hoisted_16
];
const _hoisted_18 = /* @__PURE__ */ createStaticVNode("<p>事实上，上面的数字看起来不对。</p><p>如果我们只需要15台商用服务器来服务5亿活跃用户，那么为什么大型服务在数据中心中使用数百万台服务器呢？</p><p>主要原因是RPS不足以估算提供服务所需的服务器数量。</p><p>此外，我们在上面的计算中做出了一些基本假设。其中一个假设是一个请求仅由一个服务器处理。</p><p>实际上，请求经过网站服务器，并可能与应用服务器进行交互，可能还从存储服务器请求数据。</p><p>每个服务器处理每个请求所需的时间可能不同。</p><p>此外，每个请求可能因数据中心、应用程序和请求本身的状态而得到不同的处理。请记住，我们有各种服务器用于在数据中心内提供各种服务。</p><p><strong>我们已经确定了以下事实：</strong></p><ol><li>由于许多因素，例如每个服务的设计不同、具有不同的扇出规则和硬件、服务器的职责随时间变化等等，因此找到准确的容量估算是具有挑战性的。</li><li>在设计级别上，粗略的估算是合适的，因为目的是得出所需资源的合理上限。我们还可以使用排队理论和运营研究的高级方法来作出更好的估算。然而，在面试或初始设计时使用这样的策略是不合适的。现实系统使用各种方法（初步计算、模拟、原型制作和监测）逐步改进它们的初始（可能松散的）估算。</li></ol><p>因此，我们通过描述服务器在给定日期处理多少客户端来近似服务器数量:</p>", 10);
const _hoisted_28 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.016ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "30.292ex",
  height: "5.165ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1392 13389 2283",
  "aria-hidden": "true"
};
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mfrac" }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,676)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D441",
              d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(888,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D462",
              d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1460,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45A",
              d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2338,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D44F",
              d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2767,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3233,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3684,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D442",
              d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4447,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4997,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D437",
              d: "M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5825,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D44E",
              d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6354,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D456",
              d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6699,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D459",
              d: "M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6997,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D466",
              d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(7487,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D434",
              d: "M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8237,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D450",
              d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8670,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D461",
              d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(9031,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D456",
              d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(9376,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D463",
              d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(9861,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(10327,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D448",
              d: "M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(11094,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(11563,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(12029,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(12480,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(3079,-686)"
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
            transform: "translate(759,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D443",
              d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1510,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2155,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45C",
              d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2640,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3190,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D434",
              d: "M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3940,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4585,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5051,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5502,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D463",
              d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5987,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D456",
              d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6332,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D450",
              d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6765,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "13149",
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
const _hoisted_30 = [
  _hoisted_29
];
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "为了得到更好的近似值，让我们做出以下两个假设：",
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我们假设服务的每个日活跃用户(DAU)每天只发送一个请求。",
  -1
  /* HOISTED */
);
const _hoisted_33 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.016ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "62.214ex",
  height: "5.319ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1460 27498.6 2351",
  "aria-hidden": "true"
};
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mfrac" }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,676)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D441",
              d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(888,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D462",
              d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1460,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45A",
              d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2338,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D44F",
              d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2767,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3233,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3684,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D442",
              d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4447,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4997,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D437",
              d: "M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5825,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D44E",
              d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6354,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D456",
              d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6699,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D459",
              d: "M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6997,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D466",
              d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(7487,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D434",
              d: "M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8237,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D450",
              d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8670,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D461",
              d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(9031,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D456",
              d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(9376,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D463",
              d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(9861,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(10327,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D448",
              d: "M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(11094,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(11563,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(12029,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(12480,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(3242.5,-686)"
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
            transform: "translate(759,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D443",
              d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1510,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2155,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45C",
              d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2640,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3190,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D434",
              d: "M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3940,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4585,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5051,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5502,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D463",
              d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5987,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6453,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "13149",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(13666.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(14722.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,710)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D441",
              d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(888,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D462",
              d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1460,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45A",
              d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2338,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D44F",
              d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2767,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3233,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3684,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D442",
              d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4447,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4997,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D445",
              d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5756,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6222,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45E",
              d: "M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6682,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D462",
              d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(7254,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(7720,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8189,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D461",
              d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8550,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "TeXAtom",
            "data-mjx-texclass": "ORD",
            transform: "translate(9019,0)"
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
            transform: "translate(9519,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D451",
              d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(10039,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D44E",
              d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(10568,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D466",
              d: "M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(2672,-686)"
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
            transform: "translate(759,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D443",
              d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1510,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2155,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45C",
              d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2640,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3190,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3835,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4301,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4752,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D463",
              d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5237,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5703,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "11258",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(26220.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "28",
          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(26609.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(27109.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "29",
          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_35 = [
  _hoisted_34
];
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "我们假设整个服务的所有用户的请求都在一天中的特定时间同时到达服务。我们使用此假设来获取峰值负载的容量估算。要做得更好，我们需要请求和响应分布，这可能在原型制作时可用。我们可以假设分布遵循特定类型的分布，例如泊松分布。通过将DAU作为特定秒的峰值负载的代理，我们避免了找到请求和响应的到达率的困难。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "因此，DAU将成为每秒请求的数量。我们已经有了服务器的RPS值，因此方程（1）变为：",
  -1
  /* HOISTED */
);
const _hoisted_38 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.016ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "29.258ex",
  height: "5.319ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1460 12932 2351",
  "aria-hidden": "true"
};
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mfrac" }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,710)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D441",
              d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(888,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D462",
              d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1460,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45A",
              d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2338,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D44F",
              d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2767,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3233,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3684,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D442",
              d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4447,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4997,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D445",
              d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5756,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6222,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45E",
              d: "M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6682,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D462",
              d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(7254,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(7720,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8189,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D461",
              d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8550,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "TeXAtom",
            "data-mjx-texclass": "ORD",
            transform: "translate(9019,0)"
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
            transform: "translate(9519,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(9988,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(10454,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D450",
              d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(10887,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45C",
              d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(11372,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45B",
              d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(11972,0)"
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
          transform: "translate(3389,-686)"
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
            transform: "translate(759,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D443",
              d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1510,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2155,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45C",
              d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2640,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3190,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3835,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4301,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4752,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D463",
              d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5237,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5703,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "12692",
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
const _hoisted_40 = [
  _hoisted_39
];
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "通过在上面的方程中插入值，我们得到了以下服务器数量：",
  -1
  /* HOISTED */
);
const _hoisted_42 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.016ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "47.715ex",
  height: "5.319ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1460 21090.1 2351",
  "aria-hidden": "true"
};
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mfrac" }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,710)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D441",
              d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(888,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D462",
              d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1460,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45A",
              d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2338,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D44F",
              d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2767,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3233,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3684,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D442",
              d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4447,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4997,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D445",
              d: "M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5756,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6222,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45E",
              d: "M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(6682,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D462",
              d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(7254,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(7720,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8189,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D461",
              d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(8550,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "TeXAtom",
            "data-mjx-texclass": "ORD",
            transform: "translate(9019,0)"
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
            transform: "translate(9519,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D460",
              d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(9988,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(10454,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D450",
              d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(10887,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45C",
              d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(11372,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45B",
              d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(11972,0)"
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
          transform: "translate(3389,-686)"
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
            transform: "translate(759,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D443",
              d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1510,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2155,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45C",
              d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2640,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D453",
              d: "M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3190,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D446",
              d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3835,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4301,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(4752,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D463",
              d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5237,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D452",
              d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(5703,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45F",
              d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "12692",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(13209.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(14265.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,676)"
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
            transform: "translate(1500,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D440",
              d: "M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mn",
          transform: "translate(495.5,-686)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "38",
            d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
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
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "2751",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(17534.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(18590.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "36",
          d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          transform: "translate(1500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "30",
          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
          transform: "translate(2000,0)",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_44 = [
  _hoisted_43
];
const _hoisted_45 = /* @__PURE__ */ createStaticVNode('<div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>注意：</strong> 我们的计算是基于一种可能不能给我们服务器数量的紧密界限的近似方法，但它仍然是现实的。</p><p>因此，在解决设计问题时，我们使用这种方法来估算服务器数量。</p><p>简单来说，上面给出的方程假定一个服务器可以每秒处理8000个用户。我们在本课程的其他部分中也使用这个参考值。</p></div><h2 id="存储需求" tabindex="-1"><a class="header-anchor" href="#存储需求" aria-hidden="true">#</a> 存储需求</h2><p>在这个部分中，我们尝试通过使用Twitter作为例子来理解如何进行存储估计。我们估计Twitter在一年内发布新推文所需的存储空间。让我们从以下假设开始：</p><ul><li>我们拥有250M日活跃用户。</li><li>每个用户每天发布三条推文。</li><li>十分之十的推文包含图像，而百分之五的推文包含视频。任何包含视频的推文将不包含图片，反之亦然。</li><li>假设平均而言，一个图像大小为200KB，一个视频大小为3MB。</li><li>推文文本及其元数据在数据库中需要总共250字节的存储空间。</li></ul><p>因此，会需要以下存储空间：</p><h4 align="center">估算存储需求</h4><p><img src="' + _imports_1 + '" alt="搜狗截图20230406180846" loading="lazy"></p>', 7);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "每日推文量:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_53 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "19.994ex",
  height: "2.185ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -883.9 8837.6 965.9",
  "aria-hidden": "true"
};
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
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
        transform: "translate(1500,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D440",
          d: "M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(2773.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(3495.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "33",
          d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(4273.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(5329,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "37",
          d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
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
        transform: "translate(6829,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D465",
          d: "M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msup",
        transform: "translate(7401,0)"
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
          "data-mml-node": "mn",
          transform: "translate(1033,413) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "36",
            d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
            style: { "stroke-width": "3" }
          })
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_55 = [
  _hoisted_54
];
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "每天所需推文存储空间:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_57 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "27.695ex",
  height: "2.185ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -883.9 12241 965.9",
  "aria-hidden": "true"
};
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "37",
          d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
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
        transform: "translate(1722.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msup",
        transform: "translate(2444.4,0)"
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
          "data-mml-node": "mn",
          transform: "translate(1033,413) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "36",
            d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(4103.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(4825.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
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
        transform: "translate(6325.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(7362.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(8418,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "37",
          d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(1500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
          transform: "translate(1778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(10696,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D43A",
          d: "M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(11482,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_59 = [
  _hoisted_58
];
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "每天所需的图片存储空间:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_61 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.602ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "35.399ex",
  height: "5.086ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1540 15646.4 2248",
  "aria-hidden": "true"
};
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mfrac" }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,676)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "37",
              d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "35",
              d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
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
            transform: "translate(1722.2,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "msup",
            transform: "translate(2444.4,0)"
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
              "data-mml-node": "mn",
              transform: "translate(1033,393.1) scale(0.707)"
            }, [
              /* @__PURE__ */ createBaseVNode("path", {
                "data-c": "36",
                d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
                style: { "stroke-width": "3" }
              })
            ])
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(4103.2,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(4825.4,0)"
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
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mn",
          transform: "translate(2382.7,-686)"
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
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "6025.4",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(6487.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(7209.9,0)"
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
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(8932.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msup",
        transform: "translate(9654.3,0)"
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
          "data-mml-node": "mn",
          transform: "translate(1033,413) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "33",
            d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(11090.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(12127.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(13183.4,0)"
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
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14183.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D447",
          d: "M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14887.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_63 = [
  _hoisted_62
];
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "每天所需视频存储空间:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_65 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.602ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "34.897ex",
  height: "5.086ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1540 15424.4 2248",
  "aria-hidden": "true"
};
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mfrac" }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,676)"
        }, [
          /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mn" }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "37",
              d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "35",
              d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
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
            transform: "translate(1722.2,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "msup",
            transform: "translate(2444.4,0)"
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
              "data-mml-node": "mn",
              transform: "translate(1033,393.1) scale(0.707)"
            }, [
              /* @__PURE__ */ createBaseVNode("path", {
                "data-c": "36",
                d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
                style: { "stroke-width": "3" }
              })
            ])
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mo",
            transform: "translate(4103.2,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2217",
              d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(4825.4,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "35",
              d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mn",
          transform: "translate(2132.7,-686)"
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
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "5525.4",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(5987.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(6709.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "33",
          d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(7432.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msup",
        transform: "translate(8154.3,0)"
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
          "data-mml-node": "mn",
          transform: "translate(1033,413) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "36",
            d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(9590.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(10627.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(11683.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(1500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
          transform: "translate(1778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13961.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D447",
          d: "M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14665.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = [
  _hoisted_66
];
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "每天所需的总存储空间:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_69 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "38.883ex",
  height: "1.731ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 17186.4 765",
  "aria-hidden": "true"
};
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
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
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          transform: "translate(1278,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "37",
          d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
          transform: "translate(1778,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
          transform: "translate(2278,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(2778,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D447",
          d: "M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(3482,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(4463.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2B",
          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(5463.4,0)"
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
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(6463.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D447",
          d: "M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(7167.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(8148.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2B",
          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(9148.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(1500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
          transform: "translate(1778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(11426.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D447",
          d: "M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(12130.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(13167.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2248",
          d: "M55 319Q55 360 72 393T114 444T163 472T205 482Q207 482 213 482T223 483Q262 483 296 468T393 413L443 381Q502 346 553 346Q609 346 649 375T694 454Q694 465 698 474T708 483Q722 483 722 452Q722 386 675 338T555 289Q514 289 468 310T388 357T308 404T224 426Q164 426 125 393T83 318Q81 289 69 289Q55 289 55 319ZM55 85Q55 126 72 159T114 210T163 238T205 248Q207 248 213 248T223 249Q262 249 296 234T393 179L443 147Q502 112 553 112Q609 112 649 141T694 220Q694 249 708 249T722 217Q722 153 675 104T555 55Q514 55 468 76T388 123T308 170T224 192Q164 192 125 159T83 84Q80 55 69 55Q55 55 55 85Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(14223.4,0)"
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
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(15723.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D447",
          d: "M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(16427.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_71 = [
  _hoisted_70
];
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "每年所需存储空间:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_73 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "23.821ex",
  height: "1.731ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 10529 765",
  "aria-hidden": "true"
};
const _hoisted_74 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(3944.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D447",
          d: "M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(4648.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(5685.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(6741,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "34",
          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "36",
          d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "37",
          d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
          transform: "translate(1278,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          transform: "translate(1778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(9019,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D443",
          d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(9770,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D435",
          d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_75 = [
  _hoisted_74
];
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_2,
      alt: "搜狗截图20230406180903",
      loading: "lazy"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "带宽需求",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#带宽需求",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 带宽需求")
  ],
  -1
  /* HOISTED */
);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "为了估算服务的带宽需求，我们采用以下步骤：",
  -1
  /* HOISTED */
);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "估算服务每天接收的数据量。"),
    /* @__PURE__ */ createBaseVNode("li", null, "估算服务每天发出的数据量。"),
    /* @__PURE__ */ createBaseVNode("li", null, "通过将输入和输出数据除以一天的秒数来估算以Gbps（千兆比特每秒）为单位的带宽。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "进入流量:"),
    /* @__PURE__ */ createTextVNode(" 让我们继续使用Twitter的前一个例子，这需要每天128 TB的存储空间。因此，进入流量应支持以下每秒带宽：")
  ],
  -1
  /* HOISTED */
);
const _hoisted_81 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.602ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "24.403ex",
  height: "5.086ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1540 10786 2248",
  "aria-hidden": "true"
};
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mfrac" }, [
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
              "data-c": "32",
              d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
              transform: "translate(500,0)",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "38",
              d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
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
            "data-mml-node": "msup",
            transform: "translate(2444.4,0)"
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
              "data-mml-node": "mn",
              transform: "translate(1033,393.1) scale(0.707)"
            }, [
              /* @__PURE__ */ createBaseVNode("path", {
                "data-c": "31",
                d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                style: { "stroke-width": "3" }
              })
            ])
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mn",
            transform: "translate(3881,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "32",
              d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mn",
          transform: "translate(1160.5,-686)"
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
          }),
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "34",
            d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
            transform: "translate(1000,0)",
            style: { "stroke-width": "3" }
          }),
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "30",
            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
            transform: "translate(1500,0)",
            style: { "stroke-width": "3" }
          }),
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "30",
            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
            transform: "translate(2000,0)",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "4581",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(5043.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(5765.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(6543.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2248",
          d: "M55 319Q55 360 72 393T114 444T163 472T205 482Q207 482 213 482T223 483Q262 483 296 468T393 413L443 381Q502 346 553 346Q609 346 649 375T694 454Q694 465 698 474T708 483Q722 483 722 452Q722 386 675 338T555 289Q514 289 468 310T388 357T308 404T224 426Q164 426 125 393T83 318Q81 289 69 289Q55 289 55 319ZM55 85Q55 126 72 159T114 210T163 238T205 248Q207 248 213 248T223 249Q262 249 296 234T393 179L443 147Q502 112 553 112Q609 112 649 141T694 220Q694 249 708 249T722 217Q722 153 675 104T555 55Q514 55 468 76T388 123T308 170T224 192Q164 192 125 159T83 84Q80 55 69 55Q55 55 55 85Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(7599,0)"
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
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(8599,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D43A",
          d: "M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(9385,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44F",
          d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(9814,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45D",
          d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(10317,0)"
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
const _hoisted_83 = [
  _hoisted_82
];
const _hoisted_84 = /* @__PURE__ */ createStaticVNode('<div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>注意：</strong> 我们乘以8是为了将字节（B）转换为比特（b），因为带宽是以每秒比特为单位进行度量的。</p></div><p><strong>输出流量：</strong></p><p>假设单个用户每天查看50条推文。</p><p>在保持五分之一和十分之十的视频和图像比例的情况下，对于这50条推文，有2.5条将包含视频内容，而五条将包含图片。</p><p>考虑到每天有2.5亿活跃用户，我们得到以下估计：</p><h4 id="估算带宽需求" tabindex="-1"><a class="header-anchor" href="#估算带宽需求" aria-hidden="true">#</a> 估算带宽需求</h4><p><img src="' + _imports_3 + '" alt="搜狗截图20230406180916" loading="lazy"></p>', 7);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "每日推文查看量:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_92 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "29.968ex",
  height: "1.756ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -694 13246 776",
  "aria-hidden": "true"
};
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
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
        transform: "translate(1500,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D440",
          d: "M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(2773.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(3495.4,0)"
      }, [
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
        "data-mml-node": "mi",
        transform: "translate(4495.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D461",
          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(4856.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D464",
          d: "M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(5572.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(6038.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D452",
          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(6504.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D461",
          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(6865.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D460",
          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(7612.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(8668,0)"
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
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
          transform: "translate(1278,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(10446,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44F",
          d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(10875,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D456",
          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(11220,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D459",
          d: "M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(11518,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D459",
          d: "M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(11816,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D456",
          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(12161,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45C",
          d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(12646,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45B",
          d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_94 = [
  _hoisted_93
];
const _hoisted_95 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "每秒推文查看量:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_96 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.602ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "23.151ex",
  height: "4.701ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1370 10232.6 2078",
  "aria-hidden": "true"
};
const _hoisted_97 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    transform: "scale(1,-1)"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "math" }, [
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mfrac" }, [
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
              "data-c": "32",
              d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
              transform: "translate(500,0)",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "2E",
              d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
              transform: "translate(1000,0)",
              style: { "stroke-width": "3" }
            }),
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "35",
              d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
              transform: "translate(1278,0)",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(1778,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D44F",
              d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2207,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D456",
              d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2552,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D459",
              d: "M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(2850,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D459",
              d: "M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3148,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D456",
              d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3493,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45C",
              d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
              style: { "stroke-width": "3" }
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", {
            "data-mml-node": "mi",
            transform: "translate(3978,0)"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "data-c": "1D45B",
              d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
              style: { "stroke-width": "3" }
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mn",
          transform: "translate(1259,-686)"
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
          }),
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "34",
            d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
            transform: "translate(1000,0)",
            style: { "stroke-width": "3" }
          }),
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "30",
            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
            transform: "translate(1500,0)",
            style: { "stroke-width": "3" }
          }),
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "30",
            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
            transform: "translate(2000,0)",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "4778",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(5295.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(6351.6,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "34",
          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
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
        transform: "translate(8073.8,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msup",
        transform: "translate(8796,0)"
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
          "data-mml-node": "mn",
          transform: "translate(1033,413) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "33",
            d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
            style: { "stroke-width": "3" }
          })
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_98 = [
  _hoisted_97
];
const _hoisted_99 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "每秒推文所用带宽(一篇推文等于250字节):")
  ],
  -1
  /* HOISTED */
);
const _hoisted_100 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "32.064ex",
  height: "2.437ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -883.2 14172.4 1077.2",
  "aria-hidden": "true"
};
const _hoisted_101 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "34",
          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
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
        "data-mml-node": "msup",
        transform: "translate(2444.4,0)"
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
          "data-mml-node": "mn",
          transform: "translate(1033,413) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "33",
            d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(4103.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(4825.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
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
        transform: "translate(6547.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(7269.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(7769.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44F",
          d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(8198.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D456",
          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(8543.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D461",
          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(8904.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D460",
          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(9651.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2248",
          d: "M55 319Q55 360 72 393T114 444T163 472T205 482Q207 482 213 482T223 483Q262 483 296 468T393 413L443 381Q502 346 553 346Q609 346 649 375T694 454Q694 465 698 474T708 483Q722 483 722 452Q722 386 675 338T555 289Q514 289 468 310T388 357T308 404T224 426Q164 426 125 393T83 318Q81 289 69 289Q55 289 55 319ZM55 85Q55 126 72 159T114 210T163 238T205 248Q207 248 213 248T223 249Q262 249 296 234T393 179L443 147Q502 112 553 112Q609 112 649 141T694 220Q694 249 708 249T722 217Q722 153 675 104T555 55Q514 55 468 76T388 123T308 170T224 192Q164 192 125 159T83 84Q80 55 69 55Q55 55 55 85Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(10707.4,0)"
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
          "data-c": "33",
          d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
          transform: "translate(778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(11985.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D43A",
          d: "M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(12771.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44F",
          d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13200.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45D",
          d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13703.4,0)"
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
const _hoisted_102 = [
  _hoisted_101
];
const _hoisted_103 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "10%图片每秒所用带宽:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_104 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.602ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "45.108ex",
  height: "4.638ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1342 19937.9 2050",
  "aria-hidden": "true"
};
const _hoisted_105 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "34",
          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
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
        "data-mml-node": "msup",
        transform: "translate(2444.4,0)"
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
          "data-mml-node": "mn",
          transform: "translate(1033,413) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "33",
            d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(4103.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(4825.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mn",
          transform: "translate(470,676)"
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
          "data-mml-node": "mn",
          transform: "translate(220,-686)"
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
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "1700",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(6987.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(7709.9,0)"
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
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(9432.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msup",
        transform: "translate(10154.3,0)"
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
          "data-mml-node": "mn",
          transform: "translate(1033,413) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "33",
            d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(11813.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(12535.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13035.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44F",
          d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13464.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D456",
          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13809.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D461",
          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14170.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D460",
          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(14917.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(15972.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "33",
          d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          transform: "translate(1278,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(17750.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D43A",
          d: "M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(18536.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44F",
          d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(18965.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45D",
          d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(19468.9,0)"
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
const _hoisted_106 = [
  _hoisted_105
];
const _hoisted_107 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "5%视频推文所用带宽:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_108 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.602ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "42.217ex",
  height: "4.638ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1342 18659.9 2050",
  "aria-hidden": "true"
};
const _hoisted_109 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "34",
          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
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
        "data-mml-node": "msup",
        transform: "translate(2444.4,0)"
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
          "data-mml-node": "mn",
          transform: "translate(1033,413) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "33",
            d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(4103.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mfrac",
        transform: "translate(4825.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mn",
          transform: "translate(720,676)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "35",
            d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
            style: { "stroke-width": "3" }
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mn",
          transform: "translate(220,-686)"
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
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "1700",
          height: "60",
          x: "120",
          y: "220"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(6987.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(7709.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "33",
          d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(8432.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "msup",
        transform: "translate(9154.3,0)"
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
          "data-mml-node": "mn",
          transform: "translate(1033,413) scale(0.707)"
        }, [
          /* @__PURE__ */ createBaseVNode("path", {
            "data-c": "36",
            d: "M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",
            style: { "stroke-width": "3" }
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(10813.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2217",
          d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(11535.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "38",
          d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(12035.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44F",
          d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(12464.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D456",
          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(12809.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D461",
          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(13170.3,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D460",
          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(13917.1,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(14972.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "37",
          d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "34",
          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(16472.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D43A",
          d: "M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(17258.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44F",
          d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(17687.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45D",
          d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(18190.9,0)"
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
const _hoisted_110 = [
  _hoisted_109
];
const _hoisted_111 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "所需总输出流量为:",
  -1
  /* HOISTED */
);
const _hoisted_112 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "28.958ex",
  height: "2.034ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -705 12799.4 899",
  "aria-hidden": "true"
};
const _hoisted_113 = /* @__PURE__ */ createBaseVNode(
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
          "data-c": "33",
          d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
          transform: "translate(778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(1500.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2B",
          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(2500.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "33",
          d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "32",
          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
          transform: "translate(1278,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(4500.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2B",
          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(5500.9,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "37",
          d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "34",
          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(7278.7,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2248",
          d: "M55 319Q55 360 72 393T114 444T163 472T205 482Q207 482 213 482T223 483Q262 483 296 468T393 413L443 381Q502 346 553 346Q609 346 649 375T694 454Q694 465 698 474T708 483Q722 483 722 452Q722 386 675 338T555 289Q514 289 468 310T388 357T308 404T224 426Q164 426 125 393T83 318Q81 289 69 289Q55 289 55 319ZM55 85Q55 126 72 159T114 210T163 238T205 248Q207 248 213 248T223 249Q262 249 296 234T393 179L443 147Q502 112 553 112Q609 112 649 141T694 220Q694 249 708 249T722 217Q722 153 675 104T555 55Q514 55 468 76T388 123T308 170T224 192Q164 192 125 159T83 84Q80 55 69 55Q55 55 55 85Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(8334.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "31",
          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "39",
          d: "M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z",
          transform: "translate(500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "37",
          d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(1500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
          transform: "translate(1778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(10612.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D43A",
          d: "M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(11398.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44F",
          d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(11827.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45D",
          d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(12330.4,0)"
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
const _hoisted_114 = [
  _hoisted_113
];
const _hoisted_115 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "假设上传内容未压缩, Twitter 所需总流量为:",
  -1
  /* HOISTED */
);
const _hoisted_116 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.452ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "38.509ex",
  height: "2.149ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 17021 950",
  "aria-hidden": "true"
};
const _hoisted_117 = /* @__PURE__ */ createBaseVNode(
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
        }, "总")
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
        }, "输")
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
        }, "入")
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
        }, "流")
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
        }, "量")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(5222.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2B",
          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(6222.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "总")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(7222.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "输")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(8222.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "出")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(9222.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "流")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(10222.4,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "量")
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mo",
        transform: "translate(11500.2,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "3D",
          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mn",
        transform: "translate(12556,0)"
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
          "data-c": "39",
          d: "M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z",
          transform: "translate(1000,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "2E",
          d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
          transform: "translate(1500,0)",
          style: { "stroke-width": "3" }
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "35",
          d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
          transform: "translate(1778,0)",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(14834,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D43A",
          d: "M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(15620,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D44F",
          d: "M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(16049,0)"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "data-c": "1D45D",
          d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
          style: { "stroke-width": "3" }
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        "data-mml-node": "mi",
        transform: "translate(16552,0)"
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
const _hoisted_118 = [
  _hoisted_117
];
const _hoisted_119 = /* @__PURE__ */ createStaticVNode('<h1 id="twitter所需总带宽计算" tabindex="-1"><a class="header-anchor" href="#twitter所需总带宽计算" aria-hidden="true">#</a> Twitter所需总带宽计算</h1><p>Twitter是一个全球知名的社交平台，每天有数以百万计的用户通过该平台发送消息、图片、视频等信息。</p><p>因此，高速、稳定的网络带宽对于Twitter来说至关重要。</p><p>我们可以通过简单的计算来确定Twitter所需的总带宽：</p><p>假设：</p><ul><li>每个用户每天平均发送10条消息</li><li>平均每条消息大小为100 KB</li><li>Twitter的用户数量为1.2亿</li></ul><p>计算方式：</p><p>每天总共发送的数据量 = 每个用户发送的消息数量 x 平均每条消息大小 x 用户数量</p><p>每天总共发送的数据量 = 10 x 100KB x 1.2亿</p><p>每天总共发送的数据量 = 1.2 x 10^11 KB</p><p>每天总共发送的数据量 = 1.2 x 10^13 B</p><p>每秒钟总共发送的数据量 = 每天总共发送的数据量 / 每天的秒数</p><p>每秒钟总共发送的数据量 = 1.2 x 10^13 B / (24 x 60 x 60 s)</p><p>每秒钟总共发送的数据量 = 139.44 MB/s</p><p>因此，Twitter每秒钟所需的总带宽为139.44 MB/s。</p><p>此外，由于用户数量和视频等富媒体信息的增长，这个数字可能还会增加。因此，Twitter需要不断优化网络架构，以确保稳定的带宽，并为用户提供最佳体验。</p>', 16);
function _sfc_render(_ctx, _cache) {
  const _component_center = resolveComponent("center");
  const _component_mi = resolveComponent("mi");
  const _component_mo = resolveComponent("mo");
  const _component_mrow = resolveComponent("mrow");
  const _component_mfrac = resolveComponent("mfrac");
  const _component_mn = resolveComponent("mn");
  const _component_math = resolveComponent("math");
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  const _component_mjx_container = resolveComponent("mjx-container");
  const _component_msup = resolveComponent("msup");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("详细计算如下")
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_10,
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          display: "true",
          style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_11, _hoisted_13)),
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
                    createVNode(_component_mfrac, null, {
                      default: withCtx(() => [
                        createVNode(_component_mrow, null, {
                          default: withCtx(() => [
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("日")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("活")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("用")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("户")
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
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("每")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("日")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("请")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("求")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("数")
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
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("每")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("日")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("秒")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, { mathvariant: "normal" }, {
                              default: withCtx(() => [
                                createTextVNode("数")
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
                    createVNode(_component_mfrac, null, {
                      default: withCtx(() => [
                        createVNode(_component_mrow, null, {
                          default: withCtx(() => [
                            createVNode(_component_mn, null, {
                              default: withCtx(() => [
                                createTextVNode("500")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, null, {
                              default: withCtx(() => [
                                createTextVNode("M")
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
                                createTextVNode("20")
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
                            createTextVNode("86400")
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
                        createTextVNode("115")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mi, null, {
                      default: withCtx(() => [
                        createTextVNode("K")
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
      _hoisted_14
    ]),
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_15, _hoisted_17)),
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("N")
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
                            createTextVNode("m")
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
                            createTextVNode("O")
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
                            createTextVNode("R")
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
                            createTextVNode("q")
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
                            createTextVNode("e")
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
                            createTextVNode("t")
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
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mrow, null, {
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
                            createTextVNode("P")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("S")
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
                            createTextVNode("f")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("S")
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("115")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("K")
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
                            createTextVNode("8")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("K")
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
                    createTextVNode("15")
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
    _hoisted_18,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_28, _hoisted_30)),
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("N")
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
                            createTextVNode("m")
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
                            createTextVNode("O")
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
                            createTextVNode("D")
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
                            createTextVNode("i")
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
                            createTextVNode("y")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("A")
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
                            createTextVNode("U")
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
                    }),
                    createVNode(_component_mrow, null, {
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
                            createTextVNode("P")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("S")
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
                            createTextVNode("f")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("A")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("S")
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
                            createTextVNode("v")
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
                            createTextVNode("c")
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
    _hoisted_31,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        _hoisted_32,
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          display: "true",
          style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_33, _hoisted_35)),
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
                    createVNode(_component_mfrac, null, {
                      default: withCtx(() => [
                        createVNode(_component_mrow, null, {
                          default: withCtx(() => [
                            createVNode(_component_mi, null, {
                              default: withCtx(() => [
                                createTextVNode("N")
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
                                createTextVNode("m")
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
                                createTextVNode("O")
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
                                createTextVNode("D")
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
                                createTextVNode("i")
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
                                createTextVNode("y")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, null, {
                              default: withCtx(() => [
                                createTextVNode("A")
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
                                createTextVNode("U")
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
                        }),
                        createVNode(_component_mrow, null, {
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
                                createTextVNode("P")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, null, {
                              default: withCtx(() => [
                                createTextVNode("S")
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
                                createTextVNode("f")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, null, {
                              default: withCtx(() => [
                                createTextVNode("A")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, null, {
                              default: withCtx(() => [
                                createTextVNode("S")
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
                    createVNode(_component_mfrac, null, {
                      default: withCtx(() => [
                        createVNode(_component_mrow, null, {
                          default: withCtx(() => [
                            createVNode(_component_mi, null, {
                              default: withCtx(() => [
                                createTextVNode("N")
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
                                createTextVNode("m")
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
                                createTextVNode("O")
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
                                createTextVNode("R")
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
                                createTextVNode("q")
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
                                createTextVNode("e")
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
                                createTextVNode("t")
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
                                createTextVNode("d")
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
                                createTextVNode("y")
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
                            createVNode(_component_mi, null, {
                              default: withCtx(() => [
                                createTextVNode("R")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, null, {
                              default: withCtx(() => [
                                createTextVNode("P")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, null, {
                              default: withCtx(() => [
                                createTextVNode("S")
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
                                createTextVNode("f")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mi, null, {
                              default: withCtx(() => [
                                createTextVNode("S")
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
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        })
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
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("1")
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
      _hoisted_36
    ]),
    _hoisted_37,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_38, _hoisted_40)),
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("N")
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
                            createTextVNode("m")
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
                            createTextVNode("O")
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
                            createTextVNode("R")
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
                            createTextVNode("q")
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
                            createTextVNode("e")
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
                            createTextVNode("t")
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
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mrow, null, {
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
                            createTextVNode("P")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("S")
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
                            createTextVNode("f")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("S")
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
    _hoisted_41,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_42, _hoisted_44)),
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("N")
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
                            createTextVNode("m")
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
                            createTextVNode("O")
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
                            createTextVNode("R")
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
                            createTextVNode("q")
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
                            createTextVNode("e")
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
                            createTextVNode("t")
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
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mrow, null, {
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
                            createTextVNode("P")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("S")
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
                            createTextVNode("f")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("S")
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("500")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, null, {
                          default: withCtx(() => [
                            createTextVNode("M")
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
                        createTextVNode("8000")
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
                    createTextVNode("62500")
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
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("类似于Twitter服务所需的服务器数量")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_45,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("展示详细计算")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_52,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_53, _hoisted_55)),
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
                    createTextVNode("250")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("M")
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
                    createTextVNode("3")
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
                    createTextVNode("750")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("x")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_msup, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("10")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("6")
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
    _hoisted_56,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_57, _hoisted_59)),
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
                    createTextVNode("750")
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
                createVNode(_component_msup, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("10")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("6")
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
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("250")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("B")
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
                    createTextVNode("187.5")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("G")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("B")
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
    _hoisted_60,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_61, _hoisted_63)),
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("750")
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
                        createVNode(_component_msup, null, {
                          default: withCtx(() => [
                            createVNode(_component_mn, null, {
                              default: withCtx(() => [
                                createTextVNode("10")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mn, null, {
                              default: withCtx(() => [
                                createTextVNode("6")
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
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("10")
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
                        createTextVNode("100")
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
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("200")
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
                createVNode(_component_msup, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("10")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("3")
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
                    createTextVNode("B")
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
                    createTextVNode("15")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("T")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("B")
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
    _hoisted_64,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_65, _hoisted_67)),
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("750")
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
                        createVNode(_component_msup, null, {
                          default: withCtx(() => [
                            createVNode(_component_mn, null, {
                              default: withCtx(() => [
                                createTextVNode("10")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_mn, null, {
                              default: withCtx(() => [
                                createTextVNode("6")
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
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("5")
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
                        createTextVNode("100")
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
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("3")
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
                createVNode(_component_msup, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("10")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("6")
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
                    createTextVNode("B")
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
                    createTextVNode("112.5")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("T")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("B")
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
    _hoisted_68,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_69, _hoisted_71)),
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
                    createTextVNode("0.1875")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("T")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("B")
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
                    createTextVNode("15")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("T")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("B")
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
                    createTextVNode("112.5")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("T")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("B")
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
                    createTextVNode("128")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("T")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("B")
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
    _hoisted_72,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_73, _hoisted_75)),
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
                    createTextVNode("128")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("T")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("B")
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
                    createTextVNode("46.72")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("P")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("B")
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
    _hoisted_76,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("Twitter在一年内需要的总存储空间")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_77,
    _hoisted_78,
    _hoisted_79,
    _hoisted_80,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_81, _hoisted_83)),
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("128")
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
                        createVNode(_component_msup, null, {
                          default: withCtx(() => [
                            createVNode(_component_mn, null, {
                              default: withCtx(() => [
                                createTextVNode("10")
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
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("2")
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
                        createTextVNode("86400")
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
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("8")
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
                    createTextVNode("12")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("G")
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
    _hoisted_84,
    createVNode(_component_center, null, {
      default: withCtx(() => [
        createTextVNode("显示详细计算")
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_91,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_92, _hoisted_94)),
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
                    createTextVNode("250")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("M")
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
                    createTextVNode("50")
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
                    createTextVNode("w")
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
                    createTextVNode("e")
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
                    createTextVNode("s")
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
                    createTextVNode("12.5")
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
                    createTextVNode("l")
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
                    createTextVNode("i")
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
    _hoisted_95,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_96, _hoisted_98)),
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mrow, null, {
                      default: withCtx(() => [
                        createVNode(_component_mn, null, {
                          default: withCtx(() => [
                            createTextVNode("12.5")
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
                            createTextVNode("l")
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
                            createTextVNode("i")
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
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("86400")
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
                    createTextVNode("145")
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
                createVNode(_component_msup, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("10")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("3")
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
    _hoisted_99,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_100, _hoisted_102)),
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
                    createTextVNode("145")
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
                createVNode(_component_msup, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("10")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("3")
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
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("250")
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
                    createTextVNode("8")
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
                    createTextVNode("t")
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
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("≈")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("0.3")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("G")
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
    _hoisted_103,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_104, _hoisted_106)),
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
                    createTextVNode("145")
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
                createVNode(_component_msup, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("10")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("3")
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("10")
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
                }),
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("∗")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_msup, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("10")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("3")
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
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("8")
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
                    createTextVNode("t")
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
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("=")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("23.2")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("G")
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
    _hoisted_107,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_108, _hoisted_110)),
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
                    createTextVNode("145")
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
                createVNode(_component_msup, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("10")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("3")
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
                createVNode(_component_mfrac, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("5")
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
                    createTextVNode("3")
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
                createVNode(_component_msup, null, {
                  default: withCtx(() => [
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("10")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mn, null, {
                      default: withCtx(() => [
                        createTextVNode("6")
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
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("8")
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
                    createTextVNode("t")
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
                createVNode(_component_mo, null, {
                  default: withCtx(() => [
                    createTextVNode("=")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mn, null, {
                  default: withCtx(() => [
                    createTextVNode("174")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("G")
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
    _hoisted_111,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_112, _hoisted_114)),
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
                    createTextVNode("0.3")
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
                    createTextVNode("23.2")
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
                    createTextVNode("174")
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
                    createTextVNode("197.5")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("G")
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
    _hoisted_115,
    createVNode(_component_mjx_container, {
      class: "MathJax",
      jax: "SVG",
      display: "true",
      style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("svg", _hoisted_116, _hoisted_118)),
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
                    createTextVNode("总")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("输")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("入")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("流")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("量")
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
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("总")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("输")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("出")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("流")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("量")
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
                    createTextVNode("209.5")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, null, {
                  default: withCtx(() => [
                    createTextVNode("G")
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
    _hoisted_119
  ]);
}
const _02ResourceEstimation_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "02ResourceEstimation.html.vue"]]);
export {
  _02ResourceEstimation_html as default
};