import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx, a2 as createStaticVNode, a1 as createTextVNode, $ as createBaseVNode } from "./framework-03ffdf83.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p><strong>本节目标:</strong> 了解可维护性、掌握衡量标准并理解其与可靠性之间的关系。</p><h2 id="什么是可维护性" tabindex="-1"><a class="header-anchor" href="#什么是可维护性" aria-hidden="true">#</a> 什么是可维护性？</h2><p>完成系统开发/部署工作后，主要任务变为 <strong>通过查找和修复错误、添加新功能、保持系统平台更新以及确保系统平稳运行来保持系统的正常运行</strong>。</p><p>定义系统设计这方面的特征的指标是 <strong>可维护性</strong>。我们可以将可维护性的概念进一步划分为三个基本方面：</p><ol><li><strong>可操作性</strong>：保证系统在正常情况下能够顺利运行后，衡量在出现故障时能够达到正常状态的难易程度。</li><li><strong>清晰度</strong>：这是指代码的简单性。代码库越简单，就越容易理解和维护，反之亦然。</li><li><strong>可修改性</strong>：指系统能够毫不费力地集成修改后的、新的和不可预见的功能的能力。</li></ol><h3 id="衡量可维护性" tabindex="-1"><a class="header-anchor" href="#衡量可维护性" aria-hidden="true">#</a> 衡量可维护性</h3><p><strong>可维护性</strong>, <code>M</code>, 是服务在故障发生的指定时间内恢复其功能的概率。<code>M</code>衡量服务恢复正常运行状态的便捷程度。</p><p>例如，假设某个组件定义半小时的可维护性值为 95%。在这种情况下，组件在半小时内恢复到完全激活状态的概率是 0.95。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>注意：</strong> 可维护性是对系统在运行时进行维修和修改能力的表达。</p></div><p>使用（平均修复时间）MTTR 作为衡量<code>M</code>的标准。</p>', 10);
const _hoisted_11 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-2.059ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "28.899ex",
  height: "5.285ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1426 12773.6 2336",
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
      /* @__PURE__ */ createBaseVNode("g", { "data-mml-node": "mi" }, [
        /* @__PURE__ */ createBaseVNode("text", {
          "data-variant": "normal",
          transform: "scale(1,-1)",
          "font-size": "884px",
          "font-family": "serif"
        }, "平")
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
        }, "均")
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
        }, "修")
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
        }, "复")
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
        }, "时")
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
        }, "间")
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
          transform: "translate(220,676)"
        }, [
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
            }, "维")
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
            }, "护")
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
            }, "时")
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
            }, "间")
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", {
          "data-mml-node": "mrow",
          transform: "translate(220,-710)"
        }, [
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
            }, "维")
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
            }, "护")
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
            }, "次")
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
            }, "数")
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "5200",
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
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<p>换句话说，MTTR 是修复和恢复故障组件所需的平均时间。我们的目标是尽可能降低 MTTR 值。</p><h3 id="可维护性和可靠性" tabindex="-1"><a class="header-anchor" href="#可维护性和可靠性" aria-hidden="true">#</a> 可维护性和可靠性</h3><p>可维护性是可靠性的一种更具体的表达。</p><p>它们之间的唯一区别是关注的变量不同。</p><ul><li><p>可维护性是指 <code>time-to-repair</code>，</p></li><li><p>可靠性是指两者<code>time-to-repair</code>和<code>time-to-failure</code>。</p></li></ul><p>对可维护性和可靠性分析可以帮助我们了解可用性、停机时间和正常运行时间。</p>', 6);
function _sfc_render(_ctx, _cache) {
  const _component_mi = resolveComponent("mi");
  const _component_mo = resolveComponent("mo");
  const _component_mrow = resolveComponent("mrow");
  const _component_mfrac = resolveComponent("mfrac");
  const _component_math = resolveComponent("math");
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  const _component_mjx_container = resolveComponent("mjx-container");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
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
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("平")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("均")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("修")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_mi, { mathvariant: "normal" }, {
                  default: withCtx(() => [
                    createTextVNode("复")
                  ]),
                  _: 1
                  /* STABLE */
                }),
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
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("总")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("维")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("护")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
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
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_mrow, null, {
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
                            createTextVNode("维")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("护")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_mi, { mathvariant: "normal" }, {
                          default: withCtx(() => [
                            createTextVNode("次")
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
    _hoisted_14
  ]);
}
const _04Maintainability_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "04Maintainability.html.vue"]]);
export {
  _04Maintainability_html as default
};
