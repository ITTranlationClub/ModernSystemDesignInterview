import { _ as _export_sfc, B as resolveComponent, Y as openBlock, Z as createElementBlock, a0 as createVNode, a3 as withCtx } from "./framework-03ffdf83.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_HopeIcon = resolveComponent("HopeIcon");
  const _component_AutoCatalog = resolveComponent("AutoCatalog");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_AutoCatalog, null, {
      icon: withCtx(({ icon }) => [
        createVNode(_component_HopeIcon, { icon }, null, 8, ["icon"])
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
