/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = window, e$7 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$4 = Symbol(), n$6 = /* @__PURE__ */ new WeakMap();
let o$5 = class o {
  constructor(t2, e2, n2) {
    if (this._$cssResult$ = true, n2 !== s$4)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s3 = this.t;
    if (e$7 && void 0 === t2) {
      const e2 = void 0 !== s3 && 1 === s3.length;
      e2 && (t2 = n$6.get(s3)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && n$6.set(s3, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$4 = (t2) => new o$5("string" == typeof t2 ? t2 : t2 + "", void 0, s$4), i$4 = (t2, ...e2) => {
  const n2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s3, n3) => e3 + ((t3) => {
    if (true === t3._$cssResult$)
      return t3.cssText;
    if ("number" == typeof t3)
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s3) + t2[n3 + 1], t2[0]);
  return new o$5(n2, t2, s$4);
}, S$2 = (s3, n2) => {
  e$7 ? s3.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((e2) => {
    const n3 = document.createElement("style"), o3 = t$2.litNonce;
    void 0 !== o3 && n3.setAttribute("nonce", o3), n3.textContent = e2.cssText, s3.appendChild(n3);
  });
}, c$2 = e$7 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s3 of t3.cssRules)
    e2 += s3.cssText;
  return r$4(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$3;
const e$6 = window, r$3 = e$6.trustedTypes, h$3 = r$3 ? r$3.emptyScript : "", o$4 = e$6.reactiveElementPolyfillSupport, n$5 = { toAttribute(t2, i3) {
  switch (i3) {
    case Boolean:
      t2 = t2 ? h$3 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i3) {
  let s3 = t2;
  switch (i3) {
    case Boolean:
      s3 = null !== t2;
      break;
    case Number:
      s3 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s3 = JSON.parse(t2);
      } catch (t3) {
        s3 = null;
      }
  }
  return s3;
} }, a$1 = (t2, i3) => i3 !== t2 && (i3 == i3 || t2 == t2), l$3 = { attribute: true, type: String, converter: n$5, reflect: false, hasChanged: a$1 };
let d$1 = class d extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
  }
  static addInitializer(t2) {
    var i3;
    this.finalize(), (null !== (i3 = this.h) && void 0 !== i3 ? i3 : this.h = []).push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i3, s3) => {
      const e2 = this._$Ep(s3, i3);
      void 0 !== e2 && (this._$Ev.set(e2, s3), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i3 = l$3) {
    if (i3.state && (i3.attribute = false), this.finalize(), this.elementProperties.set(t2, i3), !i3.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s3 = "symbol" == typeof t2 ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s3, i3);
      void 0 !== e2 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i3, s3) {
    return { get() {
      return this[i3];
    }, set(e2) {
      const r2 = this[t2];
      this[i3] = e2, this.requestUpdate(t2, r2, s3);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$3;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), void 0 !== t2.h && (this.h = [...t2.h]), this.elementProperties = new Map(t2.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i3 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s3 of i3)
        this.createProperty(s3, t3[s3]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i3) {
    const s3 = [];
    if (Array.isArray(i3)) {
      const e2 = new Set(i3.flat(1 / 0).reverse());
      for (const i4 of e2)
        s3.unshift(c$2(i4));
    } else
      void 0 !== i3 && s3.push(c$2(i3));
    return s3;
  }
  static _$Ep(t2, i3) {
    const s3 = i3.attribute;
    return false === s3 ? void 0 : "string" == typeof s3 ? s3 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  u() {
    var t2;
    this._$E_ = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t2 = this.constructor.h) || void 0 === t2 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i3, s3;
    (null !== (i3 = this._$ES) && void 0 !== i3 ? i3 : this._$ES = []).push(t2), void 0 !== this.renderRoot && this.isConnected && (null === (s3 = t2.hostConnected) || void 0 === s3 || s3.call(t2));
  }
  removeController(t2) {
    var i3;
    null === (i3 = this._$ES) || void 0 === i3 || i3.splice(this._$ES.indexOf(t2) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t2, i3) => {
      this.hasOwnProperty(i3) && (this._$Ei.set(i3, this[i3]), delete this[i3]);
    });
  }
  createRenderRoot() {
    var t2;
    const s3 = null !== (t2 = this.shadowRoot) && void 0 !== t2 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return S$2(s3, this.constructor.elementStyles), s3;
  }
  connectedCallback() {
    var t2;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i3;
      return null === (i3 = t3.hostConnected) || void 0 === i3 ? void 0 : i3.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i3;
      return null === (i3 = t3.hostDisconnected) || void 0 === i3 ? void 0 : i3.call(t3);
    });
  }
  attributeChangedCallback(t2, i3, s3) {
    this._$AK(t2, s3);
  }
  _$EO(t2, i3, s3 = l$3) {
    var e2;
    const r2 = this.constructor._$Ep(t2, s3);
    if (void 0 !== r2 && true === s3.reflect) {
      const h2 = (void 0 !== (null === (e2 = s3.converter) || void 0 === e2 ? void 0 : e2.toAttribute) ? s3.converter : n$5).toAttribute(i3, s3.type);
      this._$El = t2, null == h2 ? this.removeAttribute(r2) : this.setAttribute(r2, h2), this._$El = null;
    }
  }
  _$AK(t2, i3) {
    var s3;
    const e2 = this.constructor, r2 = e2._$Ev.get(t2);
    if (void 0 !== r2 && this._$El !== r2) {
      const t3 = e2.getPropertyOptions(r2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== (null === (s3 = t3.converter) || void 0 === s3 ? void 0 : s3.fromAttribute) ? t3.converter : n$5;
      this._$El = r2, this[r2] = h2.fromAttribute(i3, t3.type), this._$El = null;
    }
  }
  requestUpdate(t2, i3, s3) {
    let e2 = true;
    void 0 !== t2 && (((s3 = s3 || this.constructor.getPropertyOptions(t2)).hasChanged || a$1)(this[t2], i3) ? (this._$AL.has(t2) || this._$AL.set(t2, i3), true === s3.reflect && this._$El !== t2 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s3))) : e2 = false), !this.isUpdatePending && e2 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t3, i4) => this[i4] = t3), this._$Ei = void 0);
    let i3 = false;
    const s3 = this._$AL;
    try {
      i3 = this.shouldUpdate(s3), i3 ? (this.willUpdate(s3), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
        var i4;
        return null === (i4 = t3.hostUpdate) || void 0 === i4 ? void 0 : i4.call(t3);
      }), this.update(s3)) : this._$Ek();
    } catch (t3) {
      throw i3 = false, this._$Ek(), t3;
    }
    i3 && this._$AE(s3);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i3;
    null === (i3 = this._$ES) || void 0 === i3 || i3.forEach((t3) => {
      var i4;
      return null === (i4 = t3.hostUpdated) || void 0 === i4 ? void 0 : i4.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    void 0 !== this._$EC && (this._$EC.forEach((t3, i3) => this._$EO(i3, this[i3], t3)), this._$EC = void 0), this._$Ek();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
d$1.finalized = true, d$1.elementProperties = /* @__PURE__ */ new Map(), d$1.elementStyles = [], d$1.shadowRootOptions = { mode: "open" }, null == o$4 || o$4({ ReactiveElement: d$1 }), (null !== (s$3 = e$6.reactiveElementVersions) && void 0 !== s$3 ? s$3 : e$6.reactiveElementVersions = []).push("1.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;
const i$3 = window, s$2 = i$3.trustedTypes, e$5 = s$2 ? s$2.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, o$3 = `lit$${(Math.random() + "").slice(9)}$`, n$4 = "?" + o$3, l$2 = `<${n$4}>`, h$2 = document, r$2 = (t2 = "") => h$2.createComment(t2), d2 = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, u = Array.isArray, c$1 = (t2) => u(t2) || "function" == typeof (null == t2 ? void 0 : t2[Symbol.iterator]), v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, a = /-->/g, f = />/g, _$1 = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), m = /'/g, p = /"/g, $ = /^(?:script|style|textarea|title)$/i, g = (t2) => (i3, ...s3) => ({ _$litType$: t2, strings: i3, values: s3 }), y = g(1), x = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), T = /* @__PURE__ */ new WeakMap(), A = h$2.createTreeWalker(h$2, 129, null, false), E = (t2, i3) => {
  const s3 = t2.length - 1, n2 = [];
  let h2, r2 = 2 === i3 ? "<svg>" : "", d3 = v;
  for (let i4 = 0; i4 < s3; i4++) {
    const s4 = t2[i4];
    let e2, u3, c2 = -1, g2 = 0;
    for (; g2 < s4.length && (d3.lastIndex = g2, u3 = d3.exec(s4), null !== u3); )
      g2 = d3.lastIndex, d3 === v ? "!--" === u3[1] ? d3 = a : void 0 !== u3[1] ? d3 = f : void 0 !== u3[2] ? ($.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d3 = _$1) : void 0 !== u3[3] && (d3 = _$1) : d3 === _$1 ? ">" === u3[0] ? (d3 = null != h2 ? h2 : v, c2 = -1) : void 0 === u3[1] ? c2 = -2 : (c2 = d3.lastIndex - u3[2].length, e2 = u3[1], d3 = void 0 === u3[3] ? _$1 : '"' === u3[3] ? p : m) : d3 === p || d3 === m ? d3 = _$1 : d3 === a || d3 === f ? d3 = v : (d3 = _$1, h2 = void 0);
    const y2 = d3 === _$1 && t2[i4 + 1].startsWith("/>") ? " " : "";
    r2 += d3 === v ? s4 + l$2 : c2 >= 0 ? (n2.push(e2), s4.slice(0, c2) + "$lit$" + s4.slice(c2) + o$3 + y2) : s4 + o$3 + (-2 === c2 ? (n2.push(void 0), i4) : y2);
  }
  const u2 = r2 + (t2[s3] || "<?>") + (2 === i3 ? "</svg>" : "");
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [void 0 !== e$5 ? e$5.createHTML(u2) : u2, n2];
};
class C {
  constructor({ strings: t2, _$litType$: i3 }, e2) {
    let l2;
    this.parts = [];
    let h2 = 0, d3 = 0;
    const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = E(t2, i3);
    if (this.el = C.createElement(v2, e2), A.currentNode = this.el.content, 2 === i3) {
      const t3 = this.el.content, i4 = t3.firstChild;
      i4.remove(), t3.append(...i4.childNodes);
    }
    for (; null !== (l2 = A.nextNode()) && c2.length < u2; ) {
      if (1 === l2.nodeType) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i4 of l2.getAttributeNames())
            if (i4.endsWith("$lit$") || i4.startsWith(o$3)) {
              const s3 = a2[d3++];
              if (t3.push(i4), void 0 !== s3) {
                const t4 = l2.getAttribute(s3.toLowerCase() + "$lit$").split(o$3), i5 = /([.?@])?(.*)/.exec(s3);
                c2.push({ type: 1, index: h2, name: i5[2], strings: t4, ctor: "." === i5[1] ? M : "?" === i5[1] ? k : "@" === i5[1] ? H : S$1 });
              } else
                c2.push({ type: 6, index: h2 });
            }
          for (const i4 of t3)
            l2.removeAttribute(i4);
        }
        if ($.test(l2.tagName)) {
          const t3 = l2.textContent.split(o$3), i4 = t3.length - 1;
          if (i4 > 0) {
            l2.textContent = s$2 ? s$2.emptyScript : "";
            for (let s3 = 0; s3 < i4; s3++)
              l2.append(t3[s3], r$2()), A.nextNode(), c2.push({ type: 2, index: ++h2 });
            l2.append(t3[i4], r$2());
          }
        }
      } else if (8 === l2.nodeType)
        if (l2.data === n$4)
          c2.push({ type: 2, index: h2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = l2.data.indexOf(o$3, t3 + 1)); )
            c2.push({ type: 7, index: h2 }), t3 += o$3.length - 1;
        }
      h2++;
    }
  }
  static createElement(t2, i3) {
    const s3 = h$2.createElement("template");
    return s3.innerHTML = t2, s3;
  }
}
function P(t2, i3, s3 = t2, e2) {
  var o3, n2, l2, h2;
  if (i3 === x)
    return i3;
  let r2 = void 0 !== e2 ? null === (o3 = s3._$Co) || void 0 === o3 ? void 0 : o3[e2] : s3._$Cl;
  const u2 = d2(i3) ? void 0 : i3._$litDirective$;
  return (null == r2 ? void 0 : r2.constructor) !== u2 && (null === (n2 = null == r2 ? void 0 : r2._$AO) || void 0 === n2 || n2.call(r2, false), void 0 === u2 ? r2 = void 0 : (r2 = new u2(t2), r2._$AT(t2, s3, e2)), void 0 !== e2 ? (null !== (l2 = (h2 = s3)._$Co) && void 0 !== l2 ? l2 : h2._$Co = [])[e2] = r2 : s3._$Cl = r2), void 0 !== r2 && (i3 = P(t2, r2._$AS(t2, i3.values), r2, e2)), i3;
}
class V {
  constructor(t2, i3) {
    this.u = [], this._$AN = void 0, this._$AD = t2, this._$AM = i3;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(t2) {
    var i3;
    const { el: { content: s3 }, parts: e2 } = this._$AD, o3 = (null !== (i3 = null == t2 ? void 0 : t2.creationScope) && void 0 !== i3 ? i3 : h$2).importNode(s3, true);
    A.currentNode = o3;
    let n2 = A.nextNode(), l2 = 0, r2 = 0, d3 = e2[0];
    for (; void 0 !== d3; ) {
      if (l2 === d3.index) {
        let i4;
        2 === d3.type ? i4 = new N(n2, n2.nextSibling, this, t2) : 1 === d3.type ? i4 = new d3.ctor(n2, d3.name, d3.strings, this, t2) : 6 === d3.type && (i4 = new I(n2, this, t2)), this.u.push(i4), d3 = e2[++r2];
      }
      l2 !== (null == d3 ? void 0 : d3.index) && (n2 = A.nextNode(), l2++);
    }
    return o3;
  }
  p(t2) {
    let i3 = 0;
    for (const s3 of this.u)
      void 0 !== s3 && (void 0 !== s3.strings ? (s3._$AI(t2, s3, i3), i3 += s3.strings.length - 2) : s3._$AI(t2[i3])), i3++;
  }
}
class N {
  constructor(t2, i3, s3, e2) {
    var o3;
    this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t2, this._$AB = i3, this._$AM = s3, this.options = e2, this._$Cm = null === (o3 = null == e2 ? void 0 : e2.isConnected) || void 0 === o3 || o3;
  }
  get _$AU() {
    var t2, i3;
    return null !== (i3 = null === (t2 = this._$AM) || void 0 === t2 ? void 0 : t2._$AU) && void 0 !== i3 ? i3 : this._$Cm;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i3 = this._$AM;
    return void 0 !== i3 && 11 === t2.nodeType && (t2 = i3.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i3 = this) {
    t2 = P(this, t2, i3), d2(t2) ? t2 === b || null == t2 || "" === t2 ? (this._$AH !== b && this._$AR(), this._$AH = b) : t2 !== this._$AH && t2 !== x && this.g(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : c$1(t2) ? this.k(t2) : this.g(t2);
  }
  O(t2, i3 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, i3);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  g(t2) {
    this._$AH !== b && d2(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(h$2.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var i3;
    const { values: s3, _$litType$: e2 } = t2, o3 = "number" == typeof e2 ? this._$AC(t2) : (void 0 === e2.el && (e2.el = C.createElement(e2.h, this.options)), e2);
    if ((null === (i3 = this._$AH) || void 0 === i3 ? void 0 : i3._$AD) === o3)
      this._$AH.p(s3);
    else {
      const t3 = new V(o3, this), i4 = t3.v(this.options);
      t3.p(s3), this.T(i4), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i3 = T.get(t2.strings);
    return void 0 === i3 && T.set(t2.strings, i3 = new C(t2)), i3;
  }
  k(t2) {
    u(this._$AH) || (this._$AH = [], this._$AR());
    const i3 = this._$AH;
    let s3, e2 = 0;
    for (const o3 of t2)
      e2 === i3.length ? i3.push(s3 = new N(this.O(r$2()), this.O(r$2()), this, this.options)) : s3 = i3[e2], s3._$AI(o3), e2++;
    e2 < i3.length && (this._$AR(s3 && s3._$AB.nextSibling, e2), i3.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i3) {
    var s3;
    for (null === (s3 = this._$AP) || void 0 === s3 || s3.call(this, false, true, i3); t2 && t2 !== this._$AB; ) {
      const i4 = t2.nextSibling;
      t2.remove(), t2 = i4;
    }
  }
  setConnected(t2) {
    var i3;
    void 0 === this._$AM && (this._$Cm = t2, null === (i3 = this._$AP) || void 0 === i3 || i3.call(this, t2));
  }
}
let S$1 = class S {
  constructor(t2, i3, s3, e2, o3) {
    this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t2, this.name = i3, this._$AM = e2, this.options = o3, s3.length > 2 || "" !== s3[0] || "" !== s3[1] ? (this._$AH = Array(s3.length - 1).fill(new String()), this.strings = s3) : this._$AH = b;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i3 = this, s3, e2) {
    const o3 = this.strings;
    let n2 = false;
    if (void 0 === o3)
      t2 = P(this, t2, i3, 0), n2 = !d2(t2) || t2 !== this._$AH && t2 !== x, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o3[0], l2 = 0; l2 < o3.length - 1; l2++)
        h2 = P(this, e3[s3 + l2], i3, l2), h2 === x && (h2 = this._$AH[l2]), n2 || (n2 = !d2(h2) || h2 !== this._$AH[l2]), h2 === b ? t2 = b : t2 !== b && (t2 += (null != h2 ? h2 : "") + o3[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t2 ? t2 : "");
  }
};
class M extends S$1 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === b ? void 0 : t2;
  }
}
const R = s$2 ? s$2.emptyScript : "";
class k extends S$1 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    t2 && t2 !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
  }
}
class H extends S$1 {
  constructor(t2, i3, s3, e2, o3) {
    super(t2, i3, s3, e2, o3), this.type = 5;
  }
  _$AI(t2, i3 = this) {
    var s3;
    if ((t2 = null !== (s3 = P(this, t2, i3, 0)) && void 0 !== s3 ? s3 : b) === x)
      return;
    const e2 = this._$AH, o3 = t2 === b && e2 !== b || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== b && (e2 === b || o3);
    o3 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i3, s3;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s3 = null === (i3 = this.options) || void 0 === i3 ? void 0 : i3.host) && void 0 !== s3 ? s3 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class I {
  constructor(t2, i3, s3) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s3;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    P(this, t2);
  }
}
const z = i$3.litHtmlPolyfillSupport;
null == z || z(C, N), (null !== (t$1 = i$3.litHtmlVersions) && void 0 !== t$1 ? t$1 : i$3.litHtmlVersions = []).push("2.6.1");
const Z = (t2, i3, s3) => {
  var e2, o3;
  const n2 = null !== (e2 = null == s3 ? void 0 : s3.renderBefore) && void 0 !== e2 ? e2 : i3;
  let l2 = n2._$litPart$;
  if (void 0 === l2) {
    const t3 = null !== (o3 = null == s3 ? void 0 : s3.renderBefore) && void 0 !== o3 ? o3 : null;
    n2._$litPart$ = l2 = new N(i3.insertBefore(r$2(), t3), t3, void 0, null != s3 ? s3 : {});
  }
  return l2._$AI(t2), l2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$1, o$2;
let s$1 = class s extends d$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i3 = super.createRenderRoot();
    return null !== (t2 = (e2 = this.renderOptions).renderBefore) && void 0 !== t2 || (e2.renderBefore = i3.firstChild), i3;
  }
  update(t2) {
    const i3 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = Z(i3, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(false);
  }
  render() {
    return x;
  }
};
s$1.finalized = true, s$1._$litElement$ = true, null === (l$1 = globalThis.litElementHydrateSupport) || void 0 === l$1 || l$1.call(globalThis, { LitElement: s$1 });
const n$3 = globalThis.litElementPolyfillSupport;
null == n$3 || n$3({ LitElement: s$1 });
(null !== (o$2 = globalThis.litElementVersions) && void 0 !== o$2 ? o$2 : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$4 = (e2) => (n2) => "function" == typeof n2 ? ((e3, n3) => (customElements.define(e3, n3), n3))(e2, n2) : ((e3, n3) => {
  const { kind: t2, elements: s3 } = n3;
  return { kind: t2, elements: s3, finisher(n4) {
    customElements.define(e3, n4);
  } };
})(e2, n2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$2 = (i3, e2) => "method" === e2.kind && e2.descriptor && !("value" in e2.descriptor) ? { ...e2, finisher(n2) {
  n2.createProperty(e2.key, i3);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  "function" == typeof e2.initializer && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i3);
} };
function e$3(e2) {
  return (n2, t2) => void 0 !== t2 ? ((i3, e3, n3) => {
    e3.constructor.createProperty(n3, i3);
  })(e2, n2, t2) : i$2(e2, n2);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n$2;
null != (null === (n$2 = window.HTMLSlotElement) || void 0 === n$2 ? void 0 : n$2.prototype.assignedElements) ? (o3, n2) => o3.assignedElements(n2) : (o3, n2) => o3.assignedNodes(n2).filter((o4) => o4.nodeType === Node.ELEMENT_NODE);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$2 = (o3) => void 0 === o3.strings;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e$1 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
let i$1 = class i {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i3) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i3;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s2 = (i3, t2) => {
  var e2, o3;
  const r2 = i3._$AN;
  if (void 0 === r2)
    return false;
  for (const i4 of r2)
    null === (o3 = (e2 = i4)._$AO) || void 0 === o3 || o3.call(e2, t2, false), s2(i4, t2);
  return true;
}, o$1 = (i3) => {
  let t2, e2;
  do {
    if (void 0 === (t2 = i3._$AM))
      break;
    e2 = t2._$AN, e2.delete(i3), i3 = t2;
  } while (0 === (null == e2 ? void 0 : e2.size));
}, r$1 = (i3) => {
  for (let t2; t2 = i3._$AM; i3 = t2) {
    let e2 = t2._$AN;
    if (void 0 === e2)
      t2._$AN = e2 = /* @__PURE__ */ new Set();
    else if (e2.has(i3))
      break;
    e2.add(i3), l(t2);
  }
};
function n$1(i3) {
  void 0 !== this._$AN ? (o$1(this), this._$AM = i3, r$1(this)) : this._$AM = i3;
}
function h$1(i3, t2 = false, e2 = 0) {
  const r2 = this._$AH, n2 = this._$AN;
  if (void 0 !== n2 && 0 !== n2.size)
    if (t2)
      if (Array.isArray(r2))
        for (let i4 = e2; i4 < r2.length; i4++)
          s2(r2[i4], false), o$1(r2[i4]);
      else
        null != r2 && (s2(r2, false), o$1(r2));
    else
      s2(this, i3);
}
const l = (i3) => {
  var t$12, s3, o3, r2;
  i3.type == t.CHILD && (null !== (t$12 = (o3 = i3)._$AP) && void 0 !== t$12 || (o3._$AP = h$1), null !== (s3 = (r2 = i3)._$AQ) && void 0 !== s3 || (r2._$AQ = n$1));
};
class c extends i$1 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i3, t2, e2) {
    super._$AT(i3, t2, e2), r$1(this), this.isConnected = i3._$AU;
  }
  _$AO(i3, t2 = true) {
    var e2, r2;
    i3 !== this.isConnected && (this.isConnected = i3, i3 ? null === (e2 = this.reconnected) || void 0 === e2 || e2.call(this) : null === (r2 = this.disconnected) || void 0 === r2 || r2.call(this)), t2 && (s2(this, i3), o$1(this));
  }
  setValue(t2) {
    if (e$2(this._$Ct))
      this._$Ct._$AI(t2, this);
    else {
      const i3 = [...this._$Ct._$AH];
      i3[this._$Ci] = t2, this._$Ct._$AI(i3, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e = () => new o2();
class o2 {
}
const h = /* @__PURE__ */ new WeakMap(), n = e$1(class extends c {
  render(t2) {
    return b;
  }
  update(t2, [s3]) {
    var e2;
    const o3 = s3 !== this.Y;
    return o3 && void 0 !== this.Y && this.rt(void 0), (o3 || this.lt !== this.ct) && (this.Y = s3, this.dt = null === (e2 = t2.options) || void 0 === e2 ? void 0 : e2.host, this.rt(this.ct = t2.element)), b;
  }
  rt(i3) {
    var t2;
    if ("function" == typeof this.Y) {
      const s3 = null !== (t2 = this.dt) && void 0 !== t2 ? t2 : globalThis;
      let e2 = h.get(s3);
      void 0 === e2 && (e2 = /* @__PURE__ */ new WeakMap(), h.set(s3, e2)), void 0 !== e2.get(this.Y) && this.Y.call(this.dt, void 0), e2.set(this.Y, i3), void 0 !== i3 && this.Y.call(this.dt, i3);
    } else
      this.Y.value = i3;
  }
  get lt() {
    var i3, t2, s3;
    return "function" == typeof this.Y ? null === (t2 = h.get(null !== (i3 = this.dt) && void 0 !== i3 ? i3 : globalThis)) || void 0 === t2 ? void 0 : t2.get(this.Y) : null === (s3 = this.Y) || void 0 === s3 ? void 0 : s3.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
var S2 = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, r = (e2, t2, s3, n2) => {
  for (var a2 = n2 > 1 ? void 0 : n2 ? _(t2, s3) : t2, c2 = e2.length - 1, h2; c2 >= 0; c2--)
    (h2 = e2[c2]) && (a2 = (n2 ? h2(t2, s3, a2) : h2(a2)) || a2);
  return n2 && a2 && S2(t2, s3, a2), a2;
};
let i2 = class extends s$1 {
  constructor() {
    super(), this.GISCUS_SESSION_KEY = "giscus-session", this.GISCUS_DEFAULT_HOST = "https://giscus.app", this.ERROR_SUGGESTION = "Please consider reporting this error at https://github.com/giscus/giscus/issues/new.", this.__session = "", this._iframeRef = e(), this.messageEventHandler = this.handleMessageEvent.bind(this), this.hasLoaded = false, this.host = this.GISCUS_DEFAULT_HOST, this.strict = "0", this.reactionsEnabled = "1", this.emitMetadata = "0", this.inputPosition = "bottom", this.theme = "light", this.lang = "en", this.loading = "eager", this.setupSession(), window.addEventListener("message", this.messageEventHandler);
  }
  get iframeRef() {
    var e2;
    return (e2 = this._iframeRef) == null ? void 0 : e2.value;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("message", this.messageEventHandler);
  }
  _formatError(e2) {
    return `[giscus] An error occurred. Error message: "${e2}".`;
  }
  setupSession() {
    const e2 = location.href, t2 = new URL(e2), s3 = localStorage.getItem(this.GISCUS_SESSION_KEY), n2 = t2.searchParams.get("giscus") || "";
    if (this.__session = "", n2) {
      localStorage.setItem(this.GISCUS_SESSION_KEY, JSON.stringify(n2)), this.__session = n2, t2.searchParams.delete("giscus"), t2.hash = "", history.replaceState(void 0, document.title, t2.toString());
      return;
    }
    if (s3)
      try {
        this.__session = JSON.parse(s3);
      } catch (a2) {
        localStorage.removeItem(this.GISCUS_SESSION_KEY), console.warn(
          `${this._formatError(a2 == null ? void 0 : a2.message)} Session has been cleared.`
        );
      }
  }
  signOut() {
    localStorage.removeItem(this.GISCUS_SESSION_KEY), this.__session = "", this.update(/* @__PURE__ */ new Map());
  }
  handleMessageEvent(e2) {
    if (e2.origin !== this.host)
      return;
    const { data: t2 } = e2;
    if (!(typeof t2 == "object" && t2.giscus))
      return;
    if (this.iframeRef && t2.giscus.resizeHeight && (this.iframeRef.style.height = `${t2.giscus.resizeHeight}px`), t2.giscus.signOut) {
      console.log("[giscus] User has logged out. Session has been cleared."), this.signOut();
      return;
    }
    if (!t2.giscus.error)
      return;
    const s3 = t2.giscus.error;
    if (s3.includes("Bad credentials") || s3.includes("Invalid state value") || s3.includes("State has expired")) {
      if (localStorage.getItem(this.GISCUS_SESSION_KEY) !== null) {
        console.warn(`${this._formatError(s3)} Session has been cleared.`), this.signOut();
        return;
      }
      console.error(
        `${this._formatError(s3)} No session is stored initially. ${this.ERROR_SUGGESTION}`
      );
    }
    if (s3.includes("Discussion not found")) {
      console.warn(
        `[giscus] ${s3}. A new discussion will be created if a comment/reaction is submitted.`
      );
      return;
    }
    console.error(`${this._formatError(s3)} ${this.ERROR_SUGGESTION}`);
  }
  sendMessage(e2) {
    !this.iframeRef || !this.iframeRef.contentWindow || !this.hasLoaded || this.iframeRef.contentWindow.postMessage({ giscus: e2 }, this.host);
  }
  updateConfig() {
    const e2 = {
      setConfig: {
        repo: this.repo,
        repoId: this.repoId,
        category: this.category,
        categoryId: this.categoryId,
        term: this.getTerm(),
        number: +this.getNumber(),
        strict: this.strict === "1",
        reactionsEnabled: this.reactionsEnabled === "1",
        emitMetadata: this.emitMetadata === "1",
        inputPosition: this.inputPosition,
        theme: this.theme,
        lang: this.lang
      }
    };
    this.sendMessage(e2);
  }
  firstUpdated() {
    var e2;
    (e2 = this.iframeRef) == null || e2.addEventListener("load", () => {
      var t2;
      (t2 = this.iframeRef) == null || t2.classList.remove("loading"), this.hasLoaded = true, this.updateConfig();
    });
  }
  requestUpdate(e2, t2, s3) {
    if (!this.hasUpdated || e2 === "host") {
      super.requestUpdate(e2, t2, s3);
      return;
    }
    this.updateConfig();
  }
  getMetaContent(e2, t2 = false) {
    const s3 = t2 ? `meta[property='og:${e2}'],` : "", n2 = document.querySelector(
      s3 + `meta[name='${e2}']`
    );
    return n2 ? n2.content : "";
  }
  _getCleanedUrl() {
    const e2 = new URL(location.href);
    return e2.searchParams.delete("giscus"), e2.hash = "", e2;
  }
  getTerm() {
    switch (this.mapping) {
      case "url":
        return `${this._getCleanedUrl()}`;
      case "title":
        return document.title;
      case "og:title":
        return this.getMetaContent("title", true);
      case "specific":
        return this.term || "";
      case "number":
        return "";
      case "pathname":
      default:
        return location.pathname.length < 2 ? "index" : location.pathname.substring(1).replace(/\.\w+$/, "");
    }
  }
  getNumber() {
    return this.mapping === "number" && this.term || "";
  }
  getIframeSrc() {
    const e2 = this._getCleanedUrl().toString(), t2 = `${e2}${this.id ? "#" + this.id : ""}`, s3 = this.getMetaContent("description", true), n2 = this.getMetaContent("giscus:backlink") || e2, a2 = {
      origin: t2,
      session: this.__session,
      repo: this.repo,
      repoId: this.repoId || "",
      category: this.category || "",
      categoryId: this.categoryId || "",
      term: this.getTerm(),
      number: this.getNumber(),
      strict: this.strict,
      reactionsEnabled: this.reactionsEnabled,
      emitMetadata: this.emitMetadata,
      inputPosition: this.inputPosition,
      theme: this.theme,
      description: s3,
      backLink: n2
    }, c2 = this.host || this.GISCUS_DEFAULT_HOST, h2 = this.lang ? `/${this.lang}` : "", l2 = new URLSearchParams(a2);
    return `${c2}${h2}/widget?${l2}`;
  }
  render() {
    return y`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${n(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `;
  }
};
i2.styles = i$4`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `;
r([
  e$3({ reflect: true })
], i2.prototype, "host", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "repo", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "repoId", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "category", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "categoryId", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "mapping", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "term", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "strict", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "reactionsEnabled", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "emitMetadata", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "inputPosition", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "theme", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "lang", 2);
r([
  e$3({ reflect: true })
], i2.prototype, "loading", 2);
i2 = r([
  e$4("giscus-widget")
], i2);
export {
  i2 as GiscusWidget
};
