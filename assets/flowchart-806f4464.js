function _i(G) {
  return G && G.__esModule && Object.prototype.hasOwnProperty.call(G, "default") ? G.default : G;
}
var De = {}, wi = { get exports() {
  return De;
}, set exports(G) {
  De = G;
} };
(function(G, m) {
  (function(g, w) {
    G.exports = w();
  })(window, function() {
    return function(g) {
      var w = {};
      function O(k) {
        if (w[k])
          return w[k].exports;
        var x = w[k] = { i: k, l: false, exports: {} };
        return g[k].call(x.exports, x, x.exports, O), x.l = true, x.exports;
      }
      return O.m = g, O.c = w, O.d = function(k, x, h) {
        O.o(k, x) || Object.defineProperty(k, x, { enumerable: true, get: h });
      }, O.r = function(k) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(k, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(k, "__esModule", { value: true });
      }, O.t = function(k, x) {
        if (1 & x && (k = O(k)), 8 & x || 4 & x && typeof k == "object" && k && k.__esModule)
          return k;
        var h = /* @__PURE__ */ Object.create(null);
        if (O.r(h), Object.defineProperty(h, "default", { enumerable: true, value: k }), 2 & x && typeof k != "string")
          for (var a in k)
            O.d(h, a, function(B) {
              return k[B];
            }.bind(null, a));
        return h;
      }, O.n = function(k) {
        var x = k && k.__esModule ? function() {
          return k.default;
        } : function() {
          return k;
        };
        return O.d(x, "a", x), x;
      }, O.o = function(k, x) {
        return Object.prototype.hasOwnProperty.call(k, x);
      }, O.p = "", O(O.s = 1);
    }([function(g, w, O) {
      var k, x;
      k = [O(2)], (x = function(h) {
        function a(t) {
          if (a.is(t, "function"))
            return B ? t() : h.on("raphael.DOMload", t);
          if (a.is(t, dt))
            return a._engine.create[K](a, t.splice(0, 3 + a.is(t[0], ut))).add(t);
          var e = Array.prototype.slice.call(arguments, 0);
          if (a.is(e[e.length - 1], "function")) {
            var i = e.pop();
            return B ? i.call(a._engine.create[K](a, e)) : h.on("raphael.DOMload", function() {
              i.call(a._engine.create[K](a, e));
            });
          }
          return a._engine.create[K](a, arguments);
        }
        a.version = "2.3.0", a.eve = h;
        var B, q, ot = /[, ]+/, P = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 }, vt = /\{(\d+)\}/g, Q = "hasOwnProperty", H = { doc: document, win: window }, wt = { was: Object.prototype[Q].call(H.win, "Raphael"), is: H.win.Raphael }, At = function() {
          this.ca = this.customAttributes = {};
        }, K = "apply", Y = "concat", ht = "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch, tt = "", D = " ", L = String, J = "split", X = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](D), gt = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" }, nt = L.prototype.toLowerCase, U = Math, rt = U.max, et = U.min, xt = U.abs, Lt = U.pow, Et = U.PI, ut = "number", dt = "array", Tt = Object.prototype.toString, c = (a._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), o = { NaN: 1, Infinity: 1, "-Infinity": 1 }, s = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, u = U.round, y = parseFloat, _ = parseInt, b = L.prototype.toUpperCase, M = a._availableAttrs = { "arrow-end": "none", "arrow-start": "none", blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", "letter-spacing": 0, opacity: 1, path: "M0,0", r: 0, rx: 0, ry: 0, src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", transform: "", width: 0, x: 0, y: 0, class: "" }, C = a._availableAnimAttrs = { blur: ut, "clip-rect": "csv", cx: ut, cy: ut, fill: "colour", "fill-opacity": ut, "font-size": ut, height: ut, opacity: ut, path: "path", r: ut, rx: ut, ry: ut, stroke: "colour", "stroke-opacity": ut, "stroke-width": ut, transform: "transform", width: ut, x: ut, y: ut }, $ = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, Z = { hs: 1, rg: 1 }, it = /,?([achlmqrstvxz]),?/gi, ft = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, yt = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, pt = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, kt = (a._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}), Bt = function(t, e) {
          return y(t) - y(e);
        }, bt = function(t) {
          return t;
        }, at = a._rectPath = function(t, e, i, r, n) {
          return n ? [["M", t + n, e], ["l", i - 2 * n, 0], ["a", n, n, 0, 0, 1, n, n], ["l", 0, r - 2 * n], ["a", n, n, 0, 0, 1, -n, n], ["l", 2 * n - i, 0], ["a", n, n, 0, 0, 1, -n, -n], ["l", 0, 2 * n - r], ["a", n, n, 0, 0, 1, n, -n], ["z"]] : [["M", t, e], ["l", i, 0], ["l", 0, r], ["l", -i, 0], ["z"]];
        }, St = function(t, e, i, r) {
          return r == null && (r = i), [["M", t, e], ["m", 0, -r], ["a", i, r, 0, 1, 1, 0, 2 * r], ["a", i, r, 0, 1, 1, 0, -2 * r], ["z"]];
        }, Mt = a._getPath = { path: function(t) {
          return t.attr("path");
        }, circle: function(t) {
          var e = t.attrs;
          return St(e.cx, e.cy, e.r);
        }, ellipse: function(t) {
          var e = t.attrs;
          return St(e.cx, e.cy, e.rx, e.ry);
        }, rect: function(t) {
          var e = t.attrs;
          return at(e.x, e.y, e.width, e.height, e.r);
        }, image: function(t) {
          var e = t.attrs;
          return at(e.x, e.y, e.width, e.height);
        }, text: function(t) {
          var e = t._getBBox();
          return at(e.x, e.y, e.width, e.height);
        }, set: function(t) {
          var e = t._getBBox();
          return at(e.x, e.y, e.width, e.height);
        } }, Pt = a.mapPath = function(t, e) {
          if (!e)
            return t;
          var i, r, n, l, p, f, d;
          for (n = 0, p = (t = _e(t)).length; n < p; n++)
            for (l = 1, f = (d = t[n]).length; l < f; l += 2)
              i = e.x(d[l], d[l + 1]), r = e.y(d[l], d[l + 1]), d[l] = i, d[l + 1] = r;
          return t;
        };
        if (a._g = H, a.type = H.win.SVGAngle || H.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", a.type == "VML") {
          var Ct, It = H.doc.createElement("div");
          if (It.innerHTML = '<v:shape adj="1"/>', (Ct = It.firstChild).style.behavior = "url(#default#VML)", !Ct || typeof Ct.adj != "object")
            return a.type = tt;
          It = null;
        }
        function Xt(t) {
          if (typeof t == "function" || Object(t) !== t)
            return t;
          var e = new t.constructor();
          for (var i in t)
            t[Q](i) && (e[i] = Xt(t[i]));
          return e;
        }
        a.svg = !(a.vml = a.type == "VML"), a._Paper = At, a.fn = q = At.prototype = a.prototype, a._id = 0, a.is = function(t, e) {
          return (e = nt.call(e)) == "finite" ? !o[Q](+t) : e == "array" ? t instanceof Array : e == "null" && t === null || e == typeof t && t !== null || e == "object" && t === Object(t) || e == "array" && Array.isArray && Array.isArray(t) || Tt.call(t).slice(8, -1).toLowerCase() == e;
        }, a.angle = function(t, e, i, r, n, l) {
          if (n == null) {
            var p = t - i, f = e - r;
            return p || f ? (180 + 180 * U.atan2(-f, -p) / Et + 360) % 360 : 0;
          }
          return a.angle(t, e, n, l) - a.angle(i, r, n, l);
        }, a.rad = function(t) {
          return t % 360 * Et / 180;
        }, a.deg = function(t) {
          return Math.round(180 * t / Et % 360 * 1e3) / 1e3;
        }, a.snapTo = function(t, e, i) {
          if (i = a.is(i, "finite") ? i : 10, a.is(t, dt)) {
            for (var r = t.length; r--; )
              if (xt(t[r] - e) <= i)
                return t[r];
          } else {
            var n = e % (t = +t);
            if (n < i)
              return e - n;
            if (n > t - i)
              return e - n + t;
          }
          return e;
        };
        var Gt, ye;
        a.createUUID = (Gt = /[xy]/g, ye = function(t) {
          var e = 16 * U.random() | 0;
          return (t == "x" ? e : 3 & e | 8).toString(16);
        }, function() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(Gt, ye).toUpperCase();
        }), a.setWindow = function(t) {
          h("raphael.setWindow", a, H.win, t), H.win = t, H.doc = H.win.document, a._engine.initWin && a._engine.initWin(H.win);
        };
        var Ut = function(t) {
          if (a.vml) {
            var e, i = /^\s+|\s+$/g;
            try {
              var r = new ActiveXObject("htmlfile");
              r.write("<body>"), r.close(), e = r.body;
            } catch {
              e = createPopup().document.body;
            }
            var n = e.createTextRange();
            Ut = Ft(function(p) {
              try {
                e.style.color = L(p).replace(i, tt);
                var f = n.queryCommandValue("ForeColor");
                return "#" + ("000000" + (f = (255 & f) << 16 | 65280 & f | (16711680 & f) >>> 16).toString(16)).slice(-6);
              } catch {
                return "none";
              }
            });
          } else {
            var l = H.doc.createElement("i");
            l.title = "Raphaël Colour Picker", l.style.display = "none", H.doc.body.appendChild(l), Ut = Ft(function(p) {
              return l.style.color = p, H.doc.defaultView.getComputedStyle(l, tt).getPropertyValue("color");
            });
          }
          return Ut(t);
        }, ne = function() {
          return "hsb(" + [this.h, this.s, this.b] + ")";
        }, se = function() {
          return "hsl(" + [this.h, this.s, this.l] + ")";
        }, me = function() {
          return this.hex;
        }, oe = function(t, e, i) {
          if (e == null && a.is(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, e = t.g, t = t.r), e == null && a.is(t, "string")) {
            var r = a.getRGB(t);
            t = r.r, e = r.g, i = r.b;
          }
          return (t > 1 || e > 1 || i > 1) && (t /= 255, e /= 255, i /= 255), [t, e, i];
        }, Be = function(t, e, i, r) {
          var n = { r: t *= 255, g: e *= 255, b: i *= 255, hex: a.rgb(t, e, i), toString: me };
          return a.is(r, "finite") && (n.opacity = r), n;
        };
        function Ft(t, e, i) {
          return function r() {
            var n = Array.prototype.slice.call(arguments, 0), l = n.join("␀"), p = r.cache = r.cache || {}, f = r.count = r.count || [];
            return p[Q](l) ? (function(d, v) {
              for (var E = 0, N = d.length; E < N; E++)
                if (d[E] === v)
                  return d.push(d.splice(E, 1)[0]);
            }(f, l), i ? i(p[l]) : p[l]) : (f.length >= 1e3 && delete p[f.shift()], f.push(l), p[l] = t[K](e, n), i ? i(p[l]) : p[l]);
          };
        }
        a.color = function(t) {
          var e;
          return a.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = a.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : a.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = a.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (a.is(t, "string") && (t = a.getRGB(t)), a.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = a.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = a.rgb2hsb(t), t.v = e.b) : (t = { hex: "none" }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = me, t;
        }, a.hsb2rgb = function(t, e, i, r) {
          var n, l, p, f, d;
          return this.is(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, r = t.o, t = t.h), f = (d = i * e) * (1 - xt((t = (t *= 360) % 360 / 60) % 2 - 1)), n = l = p = i - d, Be(n += [d, f, 0, 0, f, d][t = ~~t], l += [f, d, d, f, 0, 0][t], p += [0, 0, f, d, d, f][t], r);
        }, a.hsl2rgb = function(t, e, i, r) {
          var n, l, p, f, d;
          return this.is(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || i > 1) && (t /= 360, e /= 100, i /= 100), f = (d = 2 * e * (i < 0.5 ? i : 1 - i)) * (1 - xt((t = (t *= 360) % 360 / 60) % 2 - 1)), n = l = p = i - d / 2, Be(n += [d, f, 0, 0, f, d][t = ~~t], l += [f, d, d, f, 0, 0][t], p += [0, 0, f, d, d, f][t], r);
        }, a.rgb2hsb = function(t, e, i) {
          var r, n;
          return t = (i = oe(t, e, i))[0], e = i[1], i = i[2], { h: (((n = (r = rt(t, e, i)) - et(t, e, i)) == 0 ? null : r == t ? (e - i) / n : r == e ? (i - t) / n + 2 : (t - e) / n + 4) + 360) % 6 * 60 / 360, s: n == 0 ? 0 : n / r, b: r, toString: ne };
        }, a.rgb2hsl = function(t, e, i) {
          var r, n, l, p;
          return t = (i = oe(t, e, i))[0], e = i[1], i = i[2], r = ((n = rt(t, e, i)) + (l = et(t, e, i))) / 2, { h: (((p = n - l) == 0 ? null : n == t ? (e - i) / p : n == e ? (i - t) / p + 2 : (t - e) / p + 4) + 360) % 6 * 60 / 360, s: p == 0 ? 0 : r < 0.5 ? p / (2 * r) : p / (2 - 2 * r), l: r, toString: se };
        }, a._path2string = function() {
          return this.join(",").replace(it, "$1");
        }, a._preload = function(t, e) {
          var i = H.doc.createElement("img");
          i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() {
            e.call(this), this.onload = null, H.doc.body.removeChild(this);
          }, i.onerror = function() {
            H.doc.body.removeChild(this);
          }, H.doc.body.appendChild(i), i.src = t;
        };
        function Ht() {
          return this.hex;
        }
        function ae(t, e) {
          for (var i = [], r = 0, n = t.length; n - 2 * !e > r; r += 2) {
            var l = [{ x: +t[r - 2], y: +t[r - 1] }, { x: +t[r], y: +t[r + 1] }, { x: +t[r + 2], y: +t[r + 3] }, { x: +t[r + 4], y: +t[r + 5] }];
            e ? r ? n - 4 == r ? l[3] = { x: +t[0], y: +t[1] } : n - 2 == r && (l[2] = { x: +t[0], y: +t[1] }, l[3] = { x: +t[2], y: +t[3] }) : l[0] = { x: +t[n - 2], y: +t[n - 1] } : n - 4 == r ? l[3] = l[2] : r || (l[0] = { x: +t[r], y: +t[r + 1] }), i.push(["C", (-l[0].x + 6 * l[1].x + l[2].x) / 6, (-l[0].y + 6 * l[1].y + l[2].y) / 6, (l[1].x + 6 * l[2].x - l[3].x) / 6, (l[1].y + 6 * l[2].y - l[3].y) / 6, l[2].x, l[2].y]);
          }
          return i;
        }
        a.getRGB = Ft(function(t) {
          if (!t || (t = L(t)).indexOf("-") + 1)
            return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Ht };
          if (t == "none")
            return { r: -1, g: -1, b: -1, hex: "none", toString: Ht };
          !Z[Q](t.toLowerCase().substring(0, 2)) && t.charAt() != "#" && (t = Ut(t));
          var e, i, r, n, l, p, f = t.match(c);
          return f ? (f[2] && (r = _(f[2].substring(5), 16), i = _(f[2].substring(3, 5), 16), e = _(f[2].substring(1, 3), 16)), f[3] && (r = _((l = f[3].charAt(3)) + l, 16), i = _((l = f[3].charAt(2)) + l, 16), e = _((l = f[3].charAt(1)) + l, 16)), f[4] && (p = f[4][J]($), e = y(p[0]), p[0].slice(-1) == "%" && (e *= 2.55), i = y(p[1]), p[1].slice(-1) == "%" && (i *= 2.55), r = y(p[2]), p[2].slice(-1) == "%" && (r *= 2.55), f[1].toLowerCase().slice(0, 4) == "rgba" && (n = y(p[3])), p[3] && p[3].slice(-1) == "%" && (n /= 100)), f[5] ? (p = f[5][J]($), e = y(p[0]), p[0].slice(-1) == "%" && (e *= 2.55), i = y(p[1]), p[1].slice(-1) == "%" && (i *= 2.55), r = y(p[2]), p[2].slice(-1) == "%" && (r *= 2.55), (p[0].slice(-3) == "deg" || p[0].slice(-1) == "°") && (e /= 360), f[1].toLowerCase().slice(0, 4) == "hsba" && (n = y(p[3])), p[3] && p[3].slice(-1) == "%" && (n /= 100), a.hsb2rgb(e, i, r, n)) : f[6] ? (p = f[6][J]($), e = y(p[0]), p[0].slice(-1) == "%" && (e *= 2.55), i = y(p[1]), p[1].slice(-1) == "%" && (i *= 2.55), r = y(p[2]), p[2].slice(-1) == "%" && (r *= 2.55), (p[0].slice(-3) == "deg" || p[0].slice(-1) == "°") && (e /= 360), f[1].toLowerCase().slice(0, 4) == "hsla" && (n = y(p[3])), p[3] && p[3].slice(-1) == "%" && (n /= 100), a.hsl2rgb(e, i, r, n)) : ((f = { r: e, g: i, b: r, toString: Ht }).hex = "#" + (16777216 | r | i << 8 | e << 16).toString(16).slice(1), a.is(n, "finite") && (f.opacity = n), f)) : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Ht };
        }, a), a.hsb = Ft(function(t, e, i) {
          return a.hsb2rgb(t, e, i).hex;
        }), a.hsl = Ft(function(t, e, i) {
          return a.hsl2rgb(t, e, i).hex;
        }), a.rgb = Ft(function(t, e, i) {
          function r(n) {
            return n + 0.5 | 0;
          }
          return "#" + (16777216 | r(i) | r(e) << 8 | r(t) << 16).toString(16).slice(1);
        }), a.getColor = function(t) {
          var e = this.getColor.start = this.getColor.start || { h: 0, s: 1, b: t || 0.75 }, i = this.hsb2rgb(e.h, e.s, e.b);
          return e.h += 0.075, e.h > 1 && (e.h = 0, e.s -= 0.2, e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })), i.hex;
        }, a.getColor.reset = function() {
          delete this.start;
        }, a.parsePathString = function(t) {
          if (!t)
            return null;
          var e = Yt(t);
          if (e.arr)
            return Nt(e.arr);
          var i = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 }, r = [];
          return a.is(t, dt) && a.is(t[0], dt) && (r = Nt(t)), r.length || L(t).replace(ft, function(n, l, p) {
            var f = [], d = l.toLowerCase();
            if (p.replace(pt, function(v, E) {
              E && f.push(+E);
            }), d == "m" && f.length > 2 && (r.push([l][Y](f.splice(0, 2))), d = "l", l = l == "m" ? "l" : "L"), d == "r")
              r.push([l][Y](f));
            else
              for (; f.length >= i[d] && (r.push([l][Y](f.splice(0, i[d]))), i[d]); )
                ;
          }), r.toString = a._path2string, e.arr = Nt(r), r;
        }, a.parseTransformString = Ft(function(t) {
          if (!t)
            return null;
          var e = [];
          return a.is(t, dt) && a.is(t[0], dt) && (e = Nt(t)), e.length || L(t).replace(yt, function(i, r, n) {
            var l = [];
            nt.call(r), n.replace(pt, function(p, f) {
              f && l.push(+f);
            }), e.push([r][Y](l));
          }), e.toString = a._path2string, e;
        }, this, function(t) {
          if (!t)
            return t;
          for (var e = [], i = 0; i < t.length; i++) {
            for (var r = [], n = 0; n < t[i].length; n++)
              r.push(t[i][n]);
            e.push(r);
          }
          return e;
        });
        var Yt = function(t) {
          var e = Yt.ps = Yt.ps || {};
          return e[t] ? e[t].sleep = 100 : e[t] = { sleep: 100 }, setTimeout(function() {
            for (var i in e)
              e[Q](i) && i != t && (e[i].sleep--, !e[i].sleep && delete e[i]);
          }), e[t];
        };
        function he(t, e, i, r, n) {
          return t * (t * (-3 * e + 9 * i - 9 * r + 3 * n) + 6 * e - 12 * i + 6 * r) - 3 * e + 3 * i;
        }
        function $t(t, e, i, r, n, l, p, f, d) {
          d == null && (d = 1);
          for (var v = (d = d > 1 ? 1 : d < 0 ? 0 : d) / 2, E = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816], N = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472], S = 0, A = 0; A < 12; A++) {
            var z = v * E[A] + v, R = he(z, t, i, n, p), F = he(z, e, r, l, f), T = R * R + F * F;
            S += N[A] * U.sqrt(T);
          }
          return v * S;
        }
        function ve(t, e, i, r, n, l, p, f) {
          if (!(rt(t, i) < et(n, p) || et(t, i) > rt(n, p) || rt(e, r) < et(l, f) || et(e, r) > rt(l, f))) {
            var d = (t - i) * (l - f) - (e - r) * (n - p);
            if (d) {
              var v = ((t * r - e * i) * (n - p) - (t - i) * (n * f - l * p)) / d, E = ((t * r - e * i) * (l - f) - (e - r) * (n * f - l * p)) / d, N = +v.toFixed(2), S = +E.toFixed(2);
              if (!(N < +et(t, i).toFixed(2) || N > +rt(t, i).toFixed(2) || N < +et(n, p).toFixed(2) || N > +rt(n, p).toFixed(2) || S < +et(e, r).toFixed(2) || S > +rt(e, r).toFixed(2) || S < +et(l, f).toFixed(2) || S > +rt(l, f).toFixed(2)))
                return { x: v, y: E };
            }
          }
        }
        function le(t, e, i) {
          var r = a.bezierBBox(t), n = a.bezierBBox(e);
          if (!a.isBBoxIntersect(r, n))
            return i ? 0 : [];
          for (var l = $t.apply(0, t), p = $t.apply(0, e), f = rt(~~(l / 5), 1), d = rt(~~(p / 5), 1), v = [], E = [], N = {}, S = i ? 0 : [], A = 0; A < f + 1; A++) {
            var z = a.findDotsAtSegment.apply(a, t.concat(A / f));
            v.push({ x: z.x, y: z.y, t: A / f });
          }
          for (A = 0; A < d + 1; A++)
            z = a.findDotsAtSegment.apply(a, e.concat(A / d)), E.push({ x: z.x, y: z.y, t: A / d });
          for (A = 0; A < f; A++)
            for (var R = 0; R < d; R++) {
              var F = v[A], T = v[A + 1], W = E[R], I = E[R + 1], V = xt(T.x - F.x) < 1e-3 ? "y" : "x", j = xt(I.x - W.x) < 1e-3 ? "y" : "x", lt = ve(F.x, F.y, T.x, T.y, W.x, W.y, I.x, I.y);
              if (lt) {
                if (N[lt.x.toFixed(4)] == lt.y.toFixed(4))
                  continue;
                N[lt.x.toFixed(4)] = lt.y.toFixed(4);
                var st = F.t + xt((lt[V] - F[V]) / (T[V] - F[V])) * (T.t - F.t), ct = W.t + xt((lt[j] - W[j]) / (I[j] - W[j])) * (I.t - W.t);
                st >= 0 && st <= 1.001 && ct >= 0 && ct <= 1.001 && (i ? S++ : S.push({ x: lt.x, y: lt.y, t1: et(st, 1), t2: et(ct, 1) }));
              }
            }
          return S;
        }
        function be(t, e, i) {
          t = a._path2curve(t), e = a._path2curve(e);
          for (var r, n, l, p, f, d, v, E, N, S, A = i ? 0 : [], z = 0, R = t.length; z < R; z++) {
            var F = t[z];
            if (F[0] == "M")
              r = f = F[1], n = d = F[2];
            else {
              F[0] == "C" ? (N = [r, n].concat(F.slice(1)), r = N[6], n = N[7]) : (N = [r, n, r, n, f, d, f, d], r = f, n = d);
              for (var T = 0, W = e.length; T < W; T++) {
                var I = e[T];
                if (I[0] == "M")
                  l = v = I[1], p = E = I[2];
                else {
                  I[0] == "C" ? (S = [l, p].concat(I.slice(1)), l = S[6], p = S[7]) : (S = [l, p, l, p, v, E, v, E], l = v, p = E);
                  var V = le(N, S, i);
                  if (i)
                    A += V;
                  else {
                    for (var j = 0, lt = V.length; j < lt; j++)
                      V[j].segment1 = z, V[j].segment2 = T, V[j].bez1 = N, V[j].bez2 = S;
                    A = A.concat(V);
                  }
                }
              }
            }
          }
          return A;
        }
        a.findDotsAtSegment = function(t, e, i, r, n, l, p, f, d) {
          var v = 1 - d, E = Lt(v, 3), N = Lt(v, 2), S = d * d, A = S * d, z = E * t + 3 * N * d * i + 3 * v * d * d * n + A * p, R = E * e + 3 * N * d * r + 3 * v * d * d * l + A * f, F = t + 2 * d * (i - t) + S * (n - 2 * i + t), T = e + 2 * d * (r - e) + S * (l - 2 * r + e), W = i + 2 * d * (n - i) + S * (p - 2 * n + i), I = r + 2 * d * (l - r) + S * (f - 2 * l + r), V = v * t + d * i, j = v * e + d * r, lt = v * n + d * p, st = v * l + d * f, ct = 90 - 180 * U.atan2(F - W, T - I) / Et;
          return (F > W || T < I) && (ct += 180), { x: z, y: R, m: { x: F, y: T }, n: { x: W, y: I }, start: { x: V, y: j }, end: { x: lt, y: st }, alpha: ct };
        }, a.bezierBBox = function(t, e, i, r, n, l, p, f) {
          a.is(t, "array") || (t = [t, e, i, r, n, l, p, f]);
          var d = Ae.apply(null, t);
          return { x: d.min.x, y: d.min.y, x2: d.max.x, y2: d.max.y, width: d.max.x - d.min.x, height: d.max.y - d.min.y };
        }, a.isPointInsideBBox = function(t, e, i) {
          return e >= t.x && e <= t.x2 && i >= t.y && i <= t.y2;
        }, a.isBBoxIntersect = function(t, e) {
          var i = a.isPointInsideBBox;
          return i(e, t.x, t.y) || i(e, t.x2, t.y) || i(e, t.x, t.y2) || i(e, t.x2, t.y2) || i(t, e.x, e.y) || i(t, e.x2, e.y) || i(t, e.x, e.y2) || i(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y);
        }, a.pathIntersection = function(t, e) {
          return be(t, e);
        }, a.pathIntersectionNumber = function(t, e) {
          return be(t, e, 1);
        }, a.isPointInsidePath = function(t, e, i) {
          var r = a.pathBBox(t);
          return a.isPointInsideBBox(r, e, i) && be(t, [["M", e, i], ["H", r.x2 + 10]], 1) % 2 == 1;
        }, a._removedFactory = function(t) {
          return function() {
            h("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t);
          };
        };
        var Qt = a.pathBBox = function(t) {
          var e = Yt(t);
          if (e.bbox)
            return Xt(e.bbox);
          if (!t)
            return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
          for (var i, r = 0, n = 0, l = [], p = [], f = 0, d = (t = _e(t)).length; f < d; f++)
            if ((i = t[f])[0] == "M")
              r = i[1], n = i[2], l.push(r), p.push(n);
            else {
              var v = Ae(r, n, i[1], i[2], i[3], i[4], i[5], i[6]);
              l = l[Y](v.min.x, v.max.x), p = p[Y](v.min.y, v.max.y), r = i[5], n = i[6];
            }
          var E = et[K](0, l), N = et[K](0, p), S = rt[K](0, l), A = rt[K](0, p), z = S - E, R = A - N, F = { x: E, y: N, x2: S, y2: A, width: z, height: R, cx: E + z / 2, cy: N + R / 2 };
          return e.bbox = Xt(F), F;
        }, Nt = function(t) {
          var e = Xt(t);
          return e.toString = a._path2string, e;
        }, qe = a._pathToRelative = function(t) {
          var e = Yt(t);
          if (e.rel)
            return Nt(e.rel);
          a.is(t, dt) && a.is(t && t[0], dt) || (t = a.parsePathString(t));
          var i = [], r = 0, n = 0, l = 0, p = 0, f = 0;
          t[0][0] == "M" && (l = r = t[0][1], p = n = t[0][2], f++, i.push(["M", r, n]));
          for (var d = f, v = t.length; d < v; d++) {
            var E = i[d] = [], N = t[d];
            if (N[0] != nt.call(N[0]))
              switch (E[0] = nt.call(N[0]), E[0]) {
                case "a":
                  E[1] = N[1], E[2] = N[2], E[3] = N[3], E[4] = N[4], E[5] = N[5], E[6] = +(N[6] - r).toFixed(3), E[7] = +(N[7] - n).toFixed(3);
                  break;
                case "v":
                  E[1] = +(N[1] - n).toFixed(3);
                  break;
                case "m":
                  l = N[1], p = N[2];
                default:
                  for (var S = 1, A = N.length; S < A; S++)
                    E[S] = +(N[S] - (S % 2 ? r : n)).toFixed(3);
              }
            else {
              E = i[d] = [], N[0] == "m" && (l = N[1] + r, p = N[2] + n);
              for (var z = 0, R = N.length; z < R; z++)
                i[d][z] = N[z];
            }
            var F = i[d].length;
            switch (i[d][0]) {
              case "z":
                r = l, n = p;
                break;
              case "h":
                r += +i[d][F - 1];
                break;
              case "v":
                n += +i[d][F - 1];
                break;
              default:
                r += +i[d][F - 2], n += +i[d][F - 1];
            }
          }
          return i.toString = a._path2string, e.rel = Nt(i), i;
        }, ce = a._pathToAbsolute = function(t) {
          var e = Yt(t);
          if (e.abs)
            return Nt(e.abs);
          if (a.is(t, dt) && a.is(t && t[0], dt) || (t = a.parsePathString(t)), !t || !t.length)
            return [["M", 0, 0]];
          var i = [], r = 0, n = 0, l = 0, p = 0, f = 0;
          t[0][0] == "M" && (l = r = +t[0][1], p = n = +t[0][2], f++, i[0] = ["M", r, n]);
          for (var d, v, E = t.length == 3 && t[0][0] == "M" && t[1][0].toUpperCase() == "R" && t[2][0].toUpperCase() == "Z", N = f, S = t.length; N < S; N++) {
            if (i.push(d = []), (v = t[N])[0] != b.call(v[0]))
              switch (d[0] = b.call(v[0]), d[0]) {
                case "A":
                  d[1] = v[1], d[2] = v[2], d[3] = v[3], d[4] = v[4], d[5] = v[5], d[6] = +(v[6] + r), d[7] = +(v[7] + n);
                  break;
                case "V":
                  d[1] = +v[1] + n;
                  break;
                case "H":
                  d[1] = +v[1] + r;
                  break;
                case "R":
                  for (var A = [r, n][Y](v.slice(1)), z = 2, R = A.length; z < R; z++)
                    A[z] = +A[z] + r, A[++z] = +A[z] + n;
                  i.pop(), i = i[Y](ae(A, E));
                  break;
                case "M":
                  l = +v[1] + r, p = +v[2] + n;
                default:
                  for (z = 1, R = v.length; z < R; z++)
                    d[z] = +v[z] + (z % 2 ? r : n);
              }
            else if (v[0] == "R")
              A = [r, n][Y](v.slice(1)), i.pop(), i = i[Y](ae(A, E)), d = ["R"][Y](v.slice(-2));
            else
              for (var F = 0, T = v.length; F < T; F++)
                d[F] = v[F];
            switch (d[0]) {
              case "Z":
                r = l, n = p;
                break;
              case "H":
                r = d[1];
                break;
              case "V":
                n = d[1];
                break;
              case "M":
                l = d[d.length - 2], p = d[d.length - 1];
              default:
                r = d[d.length - 2], n = d[d.length - 1];
            }
          }
          return i.toString = a._path2string, e.abs = Nt(i), i;
        }, ue = function(t, e, i, r) {
          return [t, e, i, r, i, r];
        }, Zt = function(t, e, i, r, n, l) {
          return [1 / 3 * t + 2 / 3 * i, 1 / 3 * e + 2 / 3 * r, 1 / 3 * n + 2 / 3 * i, 1 / 3 * l + 2 / 3 * r, n, l];
        }, Ce = function(t, e, i, r, n, l, p, f, d, v) {
          var E, N = 120 * Et / 180, S = Et / 180 * (+n || 0), A = [], z = Ft(function(li, ci, Se) {
            return { x: li * U.cos(Se) - ci * U.sin(Se), y: li * U.sin(Se) + ci * U.cos(Se) };
          });
          if (v)
            st = v[0], ct = v[1], j = v[2], lt = v[3];
          else {
            t = (E = z(t, e, -S)).x, e = E.y, f = (E = z(f, d, -S)).x, d = E.y;
            var R = (t - f) / 2, F = (e - d) / 2, T = R * R / (i * i) + F * F / (r * r);
            T > 1 && (i *= T = U.sqrt(T), r *= T);
            var W = i * i, I = r * r, V = (l == p ? -1 : 1) * U.sqrt(xt((W * I - W * F * F - I * R * R) / (W * F * F + I * R * R))), j = V * i * F / r + (t + f) / 2, lt = V * -r * R / i + (e + d) / 2, st = U.asin(((e - lt) / r).toFixed(9)), ct = U.asin(((d - lt) / r).toFixed(9));
            (st = t < j ? Et - st : st) < 0 && (st = 2 * Et + st), (ct = f < j ? Et - ct : ct) < 0 && (ct = 2 * Et + ct), p && st > ct && (st -= 2 * Et), !p && ct > st && (ct -= 2 * Et);
          }
          var pe = ct - st;
          if (xt(pe) > N) {
            var Le = ct, Rt = f, Dt = d;
            ct = st + N * (p && ct > st ? 1 : -1), f = j + i * U.cos(ct), d = lt + r * U.sin(ct), A = Ce(f, d, i, r, n, 0, p, Rt, Dt, [ct, Le, j, lt]);
          }
          pe = ct - st;
          var de = U.cos(st), ge = U.sin(st), Te = U.cos(ct), qt = U.sin(ct), ie = U.tan(pe / 4), Me = 4 / 3 * i * ie, ni = 4 / 3 * r * ie, si = [t, e], xe = [t + Me * ge, e - ni * de], oi = [f + Me * qt, d - ni * Te], ai = [f, d];
          if (xe[0] = 2 * si[0] - xe[0], xe[1] = 2 * si[1] - xe[1], v)
            return [xe, oi, ai][Y](A);
          for (var hi = [], Wt = 0, bi = (A = [xe, oi, ai][Y](A).join()[J](",")).length; Wt < bi; Wt++)
            hi[Wt] = Wt % 2 ? z(A[Wt - 1], A[Wt], S).y : z(A[Wt], A[Wt + 1], S).x;
          return hi;
        }, Kt = function(t, e, i, r, n, l, p, f, d) {
          var v = 1 - d;
          return { x: Lt(v, 3) * t + 3 * Lt(v, 2) * d * i + 3 * v * d * d * n + Lt(d, 3) * p, y: Lt(v, 3) * e + 3 * Lt(v, 2) * d * r + 3 * v * d * d * l + Lt(d, 3) * f };
        }, Ae = Ft(function(t, e, i, r, n, l, p, f) {
          var d, v = n - 2 * i + t - (p - 2 * n + i), E = 2 * (i - t) - 2 * (n - i), N = t - i, S = (-E + U.sqrt(E * E - 4 * v * N)) / 2 / v, A = (-E - U.sqrt(E * E - 4 * v * N)) / 2 / v, z = [e, f], R = [t, p];
          return xt(S) > "1e12" && (S = 0.5), xt(A) > "1e12" && (A = 0.5), S > 0 && S < 1 && (d = Kt(t, e, i, r, n, l, p, f, S), R.push(d.x), z.push(d.y)), A > 0 && A < 1 && (d = Kt(t, e, i, r, n, l, p, f, A), R.push(d.x), z.push(d.y)), v = l - 2 * r + e - (f - 2 * l + r), N = e - r, S = (-(E = 2 * (r - e) - 2 * (l - r)) + U.sqrt(E * E - 4 * v * N)) / 2 / v, A = (-E - U.sqrt(E * E - 4 * v * N)) / 2 / v, xt(S) > "1e12" && (S = 0.5), xt(A) > "1e12" && (A = 0.5), S > 0 && S < 1 && (d = Kt(t, e, i, r, n, l, p, f, S), R.push(d.x), z.push(d.y)), A > 0 && A < 1 && (d = Kt(t, e, i, r, n, l, p, f, A), R.push(d.x), z.push(d.y)), { min: { x: et[K](0, R), y: et[K](0, z) }, max: { x: rt[K](0, R), y: rt[K](0, z) } };
        }), _e = a._path2curve = Ft(function(t, e) {
          var i = !e && Yt(t);
          if (!e && i.curve)
            return Nt(i.curve);
          for (var r = ce(t), n = e && ce(e), l = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, p = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, f = function(V, j, lt) {
            var st, ct;
            if (!V)
              return ["C", j.x, j.y, j.x, j.y, j.x, j.y];
            switch (!(V[0] in { T: 1, Q: 1 }) && (j.qx = j.qy = null), V[0]) {
              case "M":
                j.X = V[1], j.Y = V[2];
                break;
              case "A":
                V = ["C"][Y](Ce[K](0, [j.x, j.y][Y](V.slice(1))));
                break;
              case "S":
                lt == "C" || lt == "S" ? (st = 2 * j.x - j.bx, ct = 2 * j.y - j.by) : (st = j.x, ct = j.y), V = ["C", st, ct][Y](V.slice(1));
                break;
              case "T":
                lt == "Q" || lt == "T" ? (j.qx = 2 * j.x - j.qx, j.qy = 2 * j.y - j.qy) : (j.qx = j.x, j.qy = j.y), V = ["C"][Y](Zt(j.x, j.y, j.qx, j.qy, V[1], V[2]));
                break;
              case "Q":
                j.qx = V[1], j.qy = V[2], V = ["C"][Y](Zt(j.x, j.y, V[1], V[2], V[3], V[4]));
                break;
              case "L":
                V = ["C"][Y](ue(j.x, j.y, V[1], V[2]));
                break;
              case "H":
                V = ["C"][Y](ue(j.x, j.y, V[1], j.y));
                break;
              case "V":
                V = ["C"][Y](ue(j.x, j.y, j.x, V[1]));
                break;
              case "Z":
                V = ["C"][Y](ue(j.x, j.y, j.X, j.Y));
            }
            return V;
          }, d = function(V, j) {
            if (V[j].length > 7) {
              V[j].shift();
              for (var lt = V[j]; lt.length; )
                E[j] = "A", n && (N[j] = "A"), V.splice(j++, 0, ["C"][Y](lt.splice(0, 6)));
              V.splice(j, 1), R = rt(r.length, n && n.length || 0);
            }
          }, v = function(V, j, lt, st, ct) {
            V && j && V[ct][0] == "M" && j[ct][0] != "M" && (j.splice(ct, 0, ["M", st.x, st.y]), lt.bx = 0, lt.by = 0, lt.x = V[ct][1], lt.y = V[ct][2], R = rt(r.length, n && n.length || 0));
          }, E = [], N = [], S = "", A = "", z = 0, R = rt(r.length, n && n.length || 0); z < R; z++) {
            r[z] && (S = r[z][0]), S != "C" && (E[z] = S, z && (A = E[z - 1])), r[z] = f(r[z], l, A), E[z] != "A" && S == "C" && (E[z] = "C"), d(r, z), n && (n[z] && (S = n[z][0]), S != "C" && (N[z] = S, z && (A = N[z - 1])), n[z] = f(n[z], p, A), N[z] != "A" && S == "C" && (N[z] = "C"), d(n, z)), v(r, n, l, p, z), v(n, r, p, l, z);
            var F = r[z], T = n && n[z], W = F.length, I = n && T.length;
            l.x = F[W - 2], l.y = F[W - 1], l.bx = y(F[W - 4]) || l.x, l.by = y(F[W - 3]) || l.y, p.bx = n && (y(T[I - 4]) || p.x), p.by = n && (y(T[I - 3]) || p.y), p.x = n && T[I - 2], p.y = n && T[I - 1];
          }
          return n || (i.curve = Nt(r)), n ? [r, n] : r;
        }, null, Nt), Ee = (a._parseDots = Ft(function(t) {
          for (var e = [], i = 0, r = t.length; i < r; i++) {
            var n = {}, l = t[i].match(/^([^:]*):?([\d\.]*)/);
            if (n.color = a.getRGB(l[1]), n.color.error)
              return null;
            n.opacity = n.color.opacity, n.color = n.color.hex, l[2] && (n.offset = l[2] + "%"), e.push(n);
          }
          for (i = 1, r = e.length - 1; i < r; i++)
            if (!e[i].offset) {
              for (var p = y(e[i - 1].offset || 0), f = 0, d = i + 1; d < r; d++)
                if (e[d].offset) {
                  f = e[d].offset;
                  break;
                }
              f || (f = 100, d = r);
              for (var v = ((f = y(f)) - p) / (d - i + 1); i < d; i++)
                p += v, e[i].offset = p + "%";
            }
          return e;
        }), a._tear = function(t, e) {
          t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next);
        }), fi = (a._tofront = function(t, e) {
          e.top !== t && (Ee(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t);
        }, a._toback = function(t, e) {
          e.bottom !== t && (Ee(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t);
        }, a._insertafter = function(t, e, i) {
          Ee(t, i), e == i.top && (i.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t;
        }, a._insertbefore = function(t, e, i) {
          Ee(t, i), e == i.bottom && (i.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e;
        }, a.toMatrix = function(t, e) {
          var i = Qt(t), r = { _: { transform: tt }, getBBox: function() {
            return i;
          } };
          return Ge(r, e), r.matrix;
        }), Ge = (a.transformPath = function(t, e) {
          return Pt(t, fi(t, e));
        }, a._extractTransform = function(t, e) {
          if (e == null)
            return t._.transform;
          e = L(e).replace(/\.{3}|\u2026/g, t._.transform || tt);
          var i, r, n = a.parseTransformString(e), l = 0, p = 1, f = 1, d = t._, v = new te();
          if (d.transform = n || [], n)
            for (var E = 0, N = n.length; E < N; E++) {
              var S, A, z, R, F, T = n[E], W = T.length, I = L(T[0]).toLowerCase(), V = T[0] != I, j = V ? v.invert() : 0;
              I == "t" && W == 3 ? V ? (S = j.x(0, 0), A = j.y(0, 0), z = j.x(T[1], T[2]), R = j.y(T[1], T[2]), v.translate(z - S, R - A)) : v.translate(T[1], T[2]) : I == "r" ? W == 2 ? (F = F || t.getBBox(1), v.rotate(T[1], F.x + F.width / 2, F.y + F.height / 2), l += T[1]) : W == 4 && (V ? (z = j.x(T[2], T[3]), R = j.y(T[2], T[3]), v.rotate(T[1], z, R)) : v.rotate(T[1], T[2], T[3]), l += T[1]) : I == "s" ? W == 2 || W == 3 ? (F = F || t.getBBox(1), v.scale(T[1], T[W - 1], F.x + F.width / 2, F.y + F.height / 2), p *= T[1], f *= T[W - 1]) : W == 5 && (V ? (z = j.x(T[3], T[4]), R = j.y(T[3], T[4]), v.scale(T[1], T[2], z, R)) : v.scale(T[1], T[2], T[3], T[4]), p *= T[1], f *= T[2]) : I == "m" && W == 7 && v.add(T[1], T[2], T[3], T[4], T[5], T[6]), d.dirtyT = 1, t.matrix = v;
            }
          t.matrix = v, d.sx = p, d.sy = f, d.deg = l, d.dx = i = v.e, d.dy = r = v.f, p == 1 && f == 1 && !l && d.bbox ? (d.bbox.x += +i, d.bbox.y += +r) : d.dirtyT = 1;
        }), Ue = function(t) {
          var e = t[0];
          switch (e.toLowerCase()) {
            case "t":
              return [e, 0, 0];
            case "m":
              return [e, 1, 0, 0, 1, 0, 0];
            case "r":
              return t.length == 4 ? [e, 0, t[2], t[3]] : [e, 0];
            case "s":
              return t.length == 5 ? [e, 1, 1, t[3], t[4]] : t.length == 3 ? [e, 1, 1] : [e, 1];
          }
        }, pi = a._equaliseTransform = function(t, e) {
          e = L(e).replace(/\.{3}|\u2026/g, t), t = a.parseTransformString(t) || [], e = a.parseTransformString(e) || [];
          for (var i, r, n, l, p = rt(t.length, e.length), f = [], d = [], v = 0; v < p; v++) {
            if (n = t[v] || Ue(e[v]), l = e[v] || Ue(n), n[0] != l[0] || n[0].toLowerCase() == "r" && (n[2] != l[2] || n[3] != l[3]) || n[0].toLowerCase() == "s" && (n[3] != l[3] || n[4] != l[4]))
              return;
            for (f[v] = [], d[v] = [], i = 0, r = rt(n.length, l.length); i < r; i++)
              i in n && (f[v][i] = n[i]), i in l && (d[v][i] = l[i]);
          }
          return { from: f, to: d };
        };
        function te(t, e, i, r, n, l) {
          t != null ? (this.a = +t, this.b = +e, this.c = +i, this.d = +r, this.e = +n, this.f = +l) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0);
        }
        a._getContainer = function(t, e, i, r) {
          var n;
          if ((n = r != null || a.is(t, "object") ? t : H.doc.getElementById(t)) != null)
            return n.tagName ? e == null ? { container: n, width: n.style.pixelWidth || n.offsetWidth, height: n.style.pixelHeight || n.offsetHeight } : { container: n, width: e, height: i } : { container: 1, x: t, y: e, width: i, height: r };
        }, a.pathToRelative = qe, a._engine = {}, a.path2curve = _e, a.matrix = function(t, e, i, r, n, l) {
          return new te(t, e, i, r, n, l);
        }, function(t) {
          function e(r) {
            return r[0] * r[0] + r[1] * r[1];
          }
          function i(r) {
            var n = U.sqrt(e(r));
            r[0] && (r[0] /= n), r[1] && (r[1] /= n);
          }
          t.add = function(r, n, l, p, f, d) {
            var v, E, N, S, A = [[], [], []], z = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], R = [[r, l, f], [n, p, d], [0, 0, 1]];
            for (r && r instanceof te && (R = [[r.a, r.c, r.e], [r.b, r.d, r.f], [0, 0, 1]]), v = 0; v < 3; v++)
              for (E = 0; E < 3; E++) {
                for (S = 0, N = 0; N < 3; N++)
                  S += z[v][N] * R[N][E];
                A[v][E] = S;
              }
            this.a = A[0][0], this.b = A[1][0], this.c = A[0][1], this.d = A[1][1], this.e = A[0][2], this.f = A[1][2];
          }, t.invert = function() {
            var r = this, n = r.a * r.d - r.b * r.c;
            return new te(r.d / n, -r.b / n, -r.c / n, r.a / n, (r.c * r.f - r.d * r.e) / n, (r.b * r.e - r.a * r.f) / n);
          }, t.clone = function() {
            return new te(this.a, this.b, this.c, this.d, this.e, this.f);
          }, t.translate = function(r, n) {
            this.add(1, 0, 0, 1, r, n);
          }, t.scale = function(r, n, l, p) {
            n == null && (n = r), (l || p) && this.add(1, 0, 0, 1, l, p), this.add(r, 0, 0, n, 0, 0), (l || p) && this.add(1, 0, 0, 1, -l, -p);
          }, t.rotate = function(r, n, l) {
            r = a.rad(r), n = n || 0, l = l || 0;
            var p = +U.cos(r).toFixed(9), f = +U.sin(r).toFixed(9);
            this.add(p, f, -f, p, n, l), this.add(1, 0, 0, 1, -n, -l);
          }, t.x = function(r, n) {
            return r * this.a + n * this.c + this.e;
          }, t.y = function(r, n) {
            return r * this.b + n * this.d + this.f;
          }, t.get = function(r) {
            return +this[L.fromCharCode(97 + r)].toFixed(4);
          }, t.toString = function() {
            return a.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
          }, t.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
          }, t.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)];
          }, t.split = function() {
            var r = {};
            r.dx = this.e, r.dy = this.f;
            var n = [[this.a, this.c], [this.b, this.d]];
            r.scalex = U.sqrt(e(n[0])), i(n[0]), r.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * r.shear, n[1][1] - n[0][1] * r.shear], r.scaley = U.sqrt(e(n[1])), i(n[1]), r.shear /= r.scaley;
            var l = -n[0][1], p = n[1][1];
            return p < 0 ? (r.rotate = a.deg(U.acos(p)), l < 0 && (r.rotate = 360 - r.rotate)) : r.rotate = a.deg(U.asin(l)), r.isSimple = !(+r.shear.toFixed(9) || r.scalex.toFixed(9) != r.scaley.toFixed(9) && r.rotate), r.isSuperSimple = !+r.shear.toFixed(9) && r.scalex.toFixed(9) == r.scaley.toFixed(9) && !r.rotate, r.noRotation = !+r.shear.toFixed(9) && !r.rotate, r;
          }, t.toTransformString = function(r) {
            var n = r || this[J]();
            return n.isSimple ? (n.scalex = +n.scalex.toFixed(4), n.scaley = +n.scaley.toFixed(4), n.rotate = +n.rotate.toFixed(4), (n.dx || n.dy ? "t" + [n.dx, n.dy] : tt) + (n.scalex != 1 || n.scaley != 1 ? "s" + [n.scalex, n.scaley, 0, 0] : tt) + (n.rotate ? "r" + [n.rotate, 0, 0] : tt)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
          };
        }(te.prototype);
        for (var di = function() {
          this.returnValue = false;
        }, gi = function() {
          return this.originalEvent.preventDefault();
        }, xi = function() {
          this.cancelBubble = true;
        }, yi = function() {
          return this.originalEvent.stopPropagation();
        }, He = function(t) {
          var e = H.doc.documentElement.scrollTop || H.doc.body.scrollTop, i = H.doc.documentElement.scrollLeft || H.doc.body.scrollLeft;
          return { x: t.clientX + i, y: t.clientY + e };
        }, mi = H.doc.addEventListener ? function(t, e, i, r) {
          var n = function(p) {
            var f = He(p);
            return i.call(r, p, f.x, f.y);
          };
          if (t.addEventListener(e, n, false), ht && gt[e]) {
            var l = function(p) {
              for (var f = He(p), d = p, v = 0, E = p.targetTouches && p.targetTouches.length; v < E; v++)
                if (p.targetTouches[v].target == t) {
                  (p = p.targetTouches[v]).originalEvent = d, p.preventDefault = gi, p.stopPropagation = yi;
                  break;
                }
              return i.call(r, p, f.x, f.y);
            };
            t.addEventListener(gt[e], l, false);
          }
          return function() {
            return t.removeEventListener(e, n, false), ht && gt[e] && t.removeEventListener(gt[e], l, false), true;
          };
        } : H.doc.attachEvent ? function(t, e, i, r) {
          var n = function(l) {
            l = l || H.win.event;
            var p = H.doc.documentElement.scrollTop || H.doc.body.scrollTop, f = H.doc.documentElement.scrollLeft || H.doc.body.scrollLeft, d = l.clientX + f, v = l.clientY + p;
            return l.preventDefault = l.preventDefault || di, l.stopPropagation = l.stopPropagation || xi, i.call(r, l, d, v);
          };
          return t.attachEvent("on" + e, n), function() {
            return t.detachEvent("on" + e, n), true;
          };
        } : void 0, Jt = [], Oe = function(t) {
          for (var e, i = t.clientX, r = t.clientY, n = H.doc.documentElement.scrollTop || H.doc.body.scrollTop, l = H.doc.documentElement.scrollLeft || H.doc.body.scrollLeft, p = Jt.length; p--; ) {
            if (e = Jt[p], ht && t.touches) {
              for (var f, d = t.touches.length; d--; )
                if ((f = t.touches[d]).identifier == e.el._drag.id) {
                  i = f.clientX, r = f.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                  break;
                }
            } else
              t.preventDefault();
            var v, E = e.el.node, N = E.nextSibling, S = E.parentNode, A = E.style.display;
            H.win.opera && S.removeChild(E), E.style.display = "none", v = e.el.paper.getElementByPoint(i, r), E.style.display = A, H.win.opera && (N ? S.insertBefore(E, N) : S.appendChild(E)), v && h("raphael.drag.over." + e.el.id, e.el, v), i += l, r += n, h("raphael.drag.move." + e.el.id, e.move_scope || e.el, i - e.el._drag.x, r - e.el._drag.y, i, r, t);
          }
        }, Xe = function(t) {
          a.unmousemove(Oe).unmouseup(Xe);
          for (var e, i = Jt.length; i--; )
            (e = Jt[i]).el._drag = {}, h("raphael.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, t);
          Jt = [];
        }, _t = a.el = {}, Qe = X.length; Qe--; )
          (function(t) {
            a[t] = _t[t] = function(e, i) {
              return a.is(e, "function") && (this.events = this.events || [], this.events.push({ name: t, f: e, unbind: mi(this.shape || this.node || H.doc, t, e, i || this) })), this;
            }, a["un" + t] = _t["un" + t] = function(e) {
              for (var i = this.events || [], r = i.length; r--; )
                i[r].name != t || !a.is(e, "undefined") && i[r].f != e || (i[r].unbind(), i.splice(r, 1), !i.length && delete this.events);
              return this;
            };
          })(X[Qe]);
        _t.data = function(t, e) {
          var i = kt[this.id] = kt[this.id] || {};
          if (arguments.length == 0)
            return i;
          if (arguments.length == 1) {
            if (a.is(t, "object")) {
              for (var r in t)
                t[Q](r) && this.data(r, t[r]);
              return this;
            }
            return h("raphael.data.get." + this.id, this, i[t], t), i[t];
          }
          return i[t] = e, h("raphael.data.set." + this.id, this, e, t), this;
        }, _t.removeData = function(t) {
          return t == null ? delete kt[this.id] : kt[this.id] && delete kt[this.id][t], this;
        }, _t.getData = function() {
          return Xt(kt[this.id] || {});
        }, _t.hover = function(t, e, i, r) {
          return this.mouseover(t, i).mouseout(e, r || i);
        }, _t.unhover = function(t, e) {
          return this.unmouseover(t).unmouseout(e);
        };
        var fe = [];
        _t.drag = function(t, e, i, r, n, l) {
          function p(f) {
            (f.originalEvent || f).preventDefault();
            var d = f.clientX, v = f.clientY, E = H.doc.documentElement.scrollTop || H.doc.body.scrollTop, N = H.doc.documentElement.scrollLeft || H.doc.body.scrollLeft;
            if (this._drag.id = f.identifier, ht && f.touches) {
              for (var S, A = f.touches.length; A--; )
                if (S = f.touches[A], this._drag.id = S.identifier, S.identifier == this._drag.id) {
                  d = S.clientX, v = S.clientY;
                  break;
                }
            }
            this._drag.x = d + N, this._drag.y = v + E, !Jt.length && a.mousemove(Oe).mouseup(Xe), Jt.push({ el: this, move_scope: r, start_scope: n, end_scope: l }), e && h.on("raphael.drag.start." + this.id, e), t && h.on("raphael.drag.move." + this.id, t), i && h.on("raphael.drag.end." + this.id, i), h("raphael.drag.start." + this.id, n || r || this, this._drag.x, this._drag.y, f);
          }
          return this._drag = {}, fe.push({ el: this, start: p }), this.mousedown(p), this;
        }, _t.onDragOver = function(t) {
          t ? h.on("raphael.drag.over." + this.id, t) : h.unbind("raphael.drag.over." + this.id);
        }, _t.undrag = function() {
          for (var t = fe.length; t--; )
            fe[t].el == this && (this.unmousedown(fe[t].start), fe.splice(t, 1), h.unbind("raphael.drag.*." + this.id));
          !fe.length && a.unmousemove(Oe).unmouseup(Xe), Jt = [];
        }, q.circle = function(t, e, i) {
          var r = a._engine.circle(this, t || 0, e || 0, i || 0);
          return this.__set__ && this.__set__.push(r), r;
        }, q.rect = function(t, e, i, r, n) {
          var l = a._engine.rect(this, t || 0, e || 0, i || 0, r || 0, n || 0);
          return this.__set__ && this.__set__.push(l), l;
        }, q.ellipse = function(t, e, i, r) {
          var n = a._engine.ellipse(this, t || 0, e || 0, i || 0, r || 0);
          return this.__set__ && this.__set__.push(n), n;
        }, q.path = function(t) {
          t && !a.is(t, "string") && !a.is(t[0], dt) && (t += tt);
          var e = a._engine.path(a.format[K](a, arguments), this);
          return this.__set__ && this.__set__.push(e), e;
        }, q.image = function(t, e, i, r, n) {
          var l = a._engine.image(this, t || "about:blank", e || 0, i || 0, r || 0, n || 0);
          return this.__set__ && this.__set__.push(l), l;
        }, q.text = function(t, e, i) {
          var r = a._engine.text(this, t || 0, e || 0, L(i));
          return this.__set__ && this.__set__.push(r), r;
        }, q.set = function(t) {
          !a.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
          var e = new ke(t);
          return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e;
        }, q.setStart = function(t) {
          this.__set__ = t || this.set();
        }, q.setFinish = function(t) {
          var e = this.__set__;
          return delete this.__set__, e;
        }, q.getSize = function() {
          var t = this.canvas.parentNode;
          return { width: t.offsetWidth, height: t.offsetHeight };
        }, q.setSize = function(t, e) {
          return a._engine.setSize.call(this, t, e);
        }, q.setViewBox = function(t, e, i, r, n) {
          return a._engine.setViewBox.call(this, t, e, i, r, n);
        }, q.top = q.bottom = null, q.raphael = a;
        function Ze() {
          return this.x + D + this.y + D + this.width + " × " + this.height;
        }
        q.getElementByPoint = function(t, e) {
          var i, r, n, l, p, f, d, v = this.canvas, E = H.doc.elementFromPoint(t, e);
          if (H.win.opera && E.tagName == "svg") {
            var N = (r = (i = v).getBoundingClientRect(), n = i.ownerDocument, l = n.body, p = n.documentElement, f = p.clientTop || l.clientTop || 0, d = p.clientLeft || l.clientLeft || 0, { y: r.top + (H.win.pageYOffset || p.scrollTop || l.scrollTop) - f, x: r.left + (H.win.pageXOffset || p.scrollLeft || l.scrollLeft) - d }), S = v.createSVGRect();
            S.x = t - N.x, S.y = e - N.y, S.width = S.height = 1;
            var A = v.getIntersectionList(S, null);
            A.length && (E = A[A.length - 1]);
          }
          if (!E)
            return null;
          for (; E.parentNode && E != v.parentNode && !E.raphael; )
            E = E.parentNode;
          return E == this.canvas.parentNode && (E = v), E = E && E.raphael ? this.getById(E.raphaelid) : null;
        }, q.getElementsByBBox = function(t) {
          var e = this.set();
          return this.forEach(function(i) {
            a.isBBoxIntersect(i.getBBox(), t) && e.push(i);
          }), e;
        }, q.getById = function(t) {
          for (var e = this.bottom; e; ) {
            if (e.id == t)
              return e;
            e = e.next;
          }
          return null;
        }, q.forEach = function(t, e) {
          for (var i = this.bottom; i; ) {
            if (t.call(e, i) === false)
              return this;
            i = i.next;
          }
          return this;
        }, q.getElementsByPoint = function(t, e) {
          var i = this.set();
          return this.forEach(function(r) {
            r.isPointInside(t, e) && i.push(r);
          }), i;
        }, _t.isPointInside = function(t, e) {
          var i = this.realPath = Mt[this.type](this);
          return this.attr("transform") && this.attr("transform").length && (i = a.transformPath(i, this.attr("transform"))), a.isPointInsidePath(i, t, e);
        }, _t.getBBox = function(t) {
          if (this.removed)
            return {};
          var e = this._;
          return t ? (!e.dirty && e.bboxwt || (this.realPath = Mt[this.type](this), e.bboxwt = Qt(this.realPath), e.bboxwt.toString = Ze, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = Mt[this.type](this)), e.bbox = Qt(Pt(this.realPath, this.matrix)), e.bbox.toString = Ze, e.dirty = e.dirtyT = 0), e.bbox);
        }, _t.clone = function() {
          if (this.removed)
            return null;
          var t = this.paper[this.type]().attr(this.attr());
          return this.__set__ && this.__set__.push(t), t;
        }, _t.glow = function(t) {
          if (this.type == "text")
            return null;
          var e = { width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1), fill: t.fill || false, opacity: t.opacity == null ? 0.5 : t.opacity, offsetx: t.offsetx || 0, offsety: t.offsety || 0, color: t.color || "#000" }, i = e.width / 2, r = this.paper, n = r.set(), l = this.realPath || Mt[this.type](this);
          l = this.matrix ? Pt(l, this.matrix) : l;
          for (var p = 1; p < i + 1; p++)
            n.push(r.path(l).attr({ stroke: e.color, fill: e.fill ? e.color : "none", "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-width": +(e.width / i * p).toFixed(3), opacity: +(e.opacity / i).toFixed(3) }));
          return n.insertBefore(this).translate(e.offsetx, e.offsety);
        };
        var Ne = function(t, e, i, r, n, l, p, f, d) {
          return d == null ? $t(t, e, i, r, n, l, p, f) : a.findDotsAtSegment(t, e, i, r, n, l, p, f, function(v, E, N, S, A, z, R, F, T) {
            if (!(T < 0 || $t(v, E, N, S, A, z, R, F) < T)) {
              var W, I = 0.5, V = 1 - I;
              for (W = $t(v, E, N, S, A, z, R, F, V); xt(W - T) > 0.01; )
                W = $t(v, E, N, S, A, z, R, F, V += (W < T ? 1 : -1) * (I /= 2));
              return V;
            }
          }(t, e, i, r, n, l, p, f, d));
        }, Re = function(t, e) {
          return function(i, r, n) {
            for (var l, p, f, d, v, E = "", N = {}, S = 0, A = 0, z = (i = _e(i)).length; A < z; A++) {
              if ((f = i[A])[0] == "M")
                l = +f[1], p = +f[2];
              else {
                if (S + (d = Ne(l, p, f[1], f[2], f[3], f[4], f[5], f[6])) > r) {
                  if (e && !N.start) {
                    if (E += ["C" + (v = Ne(l, p, f[1], f[2], f[3], f[4], f[5], f[6], r - S)).start.x, v.start.y, v.m.x, v.m.y, v.x, v.y], n)
                      return E;
                    N.start = E, E = ["M" + v.x, v.y + "C" + v.n.x, v.n.y, v.end.x, v.end.y, f[5], f[6]].join(), S += d, l = +f[5], p = +f[6];
                    continue;
                  }
                  if (!t && !e)
                    return { x: (v = Ne(l, p, f[1], f[2], f[3], f[4], f[5], f[6], r - S)).x, y: v.y, alpha: v.alpha };
                }
                S += d, l = +f[5], p = +f[6];
              }
              E += f.shift() + f;
            }
            return N.end = E, (v = t ? S : e ? N : a.findDotsAtSegment(l, p, f[0], f[1], f[2], f[3], f[4], f[5], 1)).alpha && (v = { x: v.x, y: v.y, alpha: v.alpha }), v;
          };
        }, Je = Re(1), We = Re(), Ie = Re(0, 1);
        a.getTotalLength = Je, a.getPointAtLength = We, a.getSubpath = function(t, e, i) {
          if (this.getTotalLength(t) - i < 1e-6)
            return Ie(t, e).end;
          var r = Ie(t, i, 1);
          return e ? Ie(r, e).end : r;
        }, _t.getTotalLength = function() {
          var t = this.getPath();
          if (t)
            return this.node.getTotalLength ? this.node.getTotalLength() : Je(t);
        }, _t.getPointAtLength = function(t) {
          var e = this.getPath();
          if (e)
            return We(e, t);
        }, _t.getPath = function() {
          var t, e = a._getPath[this.type];
          if (this.type != "text" && this.type != "set")
            return e && (t = e(this)), t;
        }, _t.getSubpath = function(t, e) {
          var i = this.getPath();
          if (i)
            return a.getSubpath(i, t, e);
        };
        var jt = a.easing_formulas = { linear: function(t) {
          return t;
        }, "<": function(t) {
          return Lt(t, 1.7);
        }, ">": function(t) {
          return Lt(t, 0.48);
        }, "<>": function(t) {
          var e = 0.48 - t / 1.04, i = U.sqrt(0.1734 + e * e), r = i - e, n = -i - e, l = Lt(xt(r), 1 / 3) * (r < 0 ? -1 : 1) + Lt(xt(n), 1 / 3) * (n < 0 ? -1 : 1) + 0.5;
          return 3 * (1 - l) * l * l + l * l * l;
        }, backIn: function(t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e);
        }, backOut: function(t) {
          var e = 1.70158;
          return (t -= 1) * t * ((e + 1) * t + e) + 1;
        }, elastic: function(t) {
          return t == !!t ? t : Lt(2, -10 * t) * U.sin(2 * Et * (t - 0.075) / 0.3) + 1;
        }, bounce: function(t) {
          var e = 7.5625, i = 2.75;
          return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + 0.75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + 0.9375 : e * (t -= 2.625 / i) * t + 0.984375;
        } };
        jt.easeIn = jt["ease-in"] = jt["<"], jt.easeOut = jt["ease-out"] = jt[">"], jt.easeInOut = jt["ease-in-out"] = jt["<>"], jt["back-in"] = jt.backIn, jt["back-out"] = jt.backOut;
        var mt = [], Ke = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
          setTimeout(t, 16);
        }, je = function() {
          for (var t = +new Date(), e = 0; e < mt.length; e++) {
            var i = mt[e];
            if (!i.el.removed && !i.paused) {
              var r, n, l = t - i.start, p = i.ms, f = i.easing, d = i.from, v = i.diff, E = i.to, N = (i.t, i.el), S = {}, A = {};
              if (i.initstatus ? (l = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * p, i.status = i.initstatus, delete i.initstatus, i.stop && mt.splice(e--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (l / p)) / i.anim.top, !(l < 0))
                if (l < p) {
                  var z = f(l / p);
                  for (var R in d)
                    if (d[Q](R)) {
                      switch (C[R]) {
                        case ut:
                          r = +d[R] + z * p * v[R];
                          break;
                        case "colour":
                          r = "rgb(" + [Ye(u(d[R].r + z * p * v[R].r)), Ye(u(d[R].g + z * p * v[R].g)), Ye(u(d[R].b + z * p * v[R].b))].join(",") + ")";
                          break;
                        case "path":
                          r = [];
                          for (var F = 0, T = d[R].length; F < T; F++) {
                            r[F] = [d[R][F][0]];
                            for (var W = 1, I = d[R][F].length; W < I; W++)
                              r[F][W] = +d[R][F][W] + z * p * v[R][F][W];
                            r[F] = r[F].join(D);
                          }
                          r = r.join(D);
                          break;
                        case "transform":
                          if (v[R].real)
                            for (r = [], F = 0, T = d[R].length; F < T; F++)
                              for (r[F] = [d[R][F][0]], W = 1, I = d[R][F].length; W < I; W++)
                                r[F][W] = d[R][F][W] + z * p * v[R][F][W];
                          else {
                            var V = function(lt) {
                              return +d[R][lt] + z * p * v[R][lt];
                            };
                            r = [["m", V(0), V(1), V(2), V(3), V(4), V(5)]];
                          }
                          break;
                        case "csv":
                          if (R == "clip-rect")
                            for (r = [], F = 4; F--; )
                              r[F] = +d[R][F] + z * p * v[R][F];
                          break;
                        default:
                          var j = [][Y](d[R]);
                          for (r = [], F = N.paper.customAttributes[R].length; F--; )
                            r[F] = +j[F] + z * p * v[R][F];
                      }
                      S[R] = r;
                    }
                  N.attr(S), function(lt, st, ct) {
                    setTimeout(function() {
                      h("raphael.anim.frame." + lt, st, ct);
                    });
                  }(N.id, N, i.anim);
                } else {
                  if (function(lt, st, ct) {
                    setTimeout(function() {
                      h("raphael.anim.frame." + st.id, st, ct), h("raphael.anim.finish." + st.id, st, ct), a.is(lt, "function") && lt.call(st);
                    });
                  }(i.callback, N, i.anim), N.attr(E), mt.splice(e--, 1), i.repeat > 1 && !i.next) {
                    for (n in E)
                      E[Q](n) && (A[n] = i.totalOrigin[n]);
                    i.el.attr(A), we(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1);
                  }
                  i.next && !i.stop && we(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat);
                }
            }
          }
          mt.length && Ke(je);
        }, Ye = function(t) {
          return t > 255 ? 255 : t < 0 ? 0 : t;
        };
        function vi(t, e, i, r, n, l) {
          var p = 3 * e, f = 3 * (r - e) - p, d = 1 - p - f, v = 3 * i, E = 3 * (n - i) - v, N = 1 - v - E;
          function S(A) {
            return ((d * A + f) * A + p) * A;
          }
          return function(A, z) {
            var R = function(F, T) {
              var W, I, V, j, lt, st;
              for (V = F, st = 0; st < 8; st++) {
                if (j = S(V) - F, xt(j) < T)
                  return V;
                if (xt(lt = (3 * d * V + 2 * f) * V + p) < 1e-6)
                  break;
                V -= j / lt;
              }
              if (I = 1, (V = F) < (W = 0))
                return W;
              if (V > I)
                return I;
              for (; W < I; ) {
                if (j = S(V), xt(j - F) < T)
                  return V;
                F > j ? W = V : I = V, V = (I - W) / 2 + W;
              }
              return V;
            }(A, z);
            return ((N * R + E) * R + v) * R;
          }(t, 1 / (200 * l));
        }
        function Vt(t, e) {
          var i = [], r = {};
          if (this.ms = e, this.times = 1, t) {
            for (var n in t)
              t[Q](n) && (r[y(n)] = t[n], i.push(y(n)));
            i.sort(Bt);
          }
          this.anim = r, this.top = i[i.length - 1], this.percents = i;
        }
        function we(t, e, i, r, n, l) {
          i = y(i);
          var p, f, d, v, E, N, S = t.ms, A = {}, z = {}, R = {};
          if (r)
            for (T = 0, W = mt.length; T < W; T++) {
              var F = mt[T];
              if (F.el.id == e.id && F.anim == t) {
                F.percent != i ? (mt.splice(T, 1), d = 1) : f = F, e.attr(F.totalOrigin);
                break;
              }
            }
          else
            r = +z;
          for (var T = 0, W = t.percents.length; T < W; T++) {
            if (t.percents[T] == i || t.percents[T] > r * t.top) {
              i = t.percents[T], E = t.percents[T - 1] || 0, S = S / t.top * (i - E), v = t.percents[T + 1], p = t.anim[i];
              break;
            }
            r && e.attr(t.anim[t.percents[T]]);
          }
          if (p) {
            if (f)
              f.initstatus = r, f.start = new Date() - f.ms * r;
            else {
              for (var I in p)
                if (p[Q](I) && (C[Q](I) || e.paper.customAttributes[Q](I)))
                  switch (A[I] = e.attr(I), A[I] == null && (A[I] = M[I]), z[I] = p[I], C[I]) {
                    case ut:
                      R[I] = (z[I] - A[I]) / S;
                      break;
                    case "colour":
                      A[I] = a.getRGB(A[I]);
                      var V = a.getRGB(z[I]);
                      R[I] = { r: (V.r - A[I].r) / S, g: (V.g - A[I].g) / S, b: (V.b - A[I].b) / S };
                      break;
                    case "path":
                      var j = _e(A[I], z[I]), lt = j[1];
                      for (A[I] = j[0], R[I] = [], T = 0, W = A[I].length; T < W; T++) {
                        R[I][T] = [0];
                        for (var st = 1, ct = A[I][T].length; st < ct; st++)
                          R[I][T][st] = (lt[T][st] - A[I][T][st]) / S;
                      }
                      break;
                    case "transform":
                      var pe = e._, Le = pi(pe[I], z[I]);
                      if (Le)
                        for (A[I] = Le.from, z[I] = Le.to, R[I] = [], R[I].real = true, T = 0, W = A[I].length; T < W; T++)
                          for (R[I][T] = [A[I][T][0]], st = 1, ct = A[I][T].length; st < ct; st++)
                            R[I][T][st] = (z[I][T][st] - A[I][T][st]) / S;
                      else {
                        var Rt = e.matrix || new te(), Dt = { _: { transform: pe.transform }, getBBox: function() {
                          return e.getBBox(1);
                        } };
                        A[I] = [Rt.a, Rt.b, Rt.c, Rt.d, Rt.e, Rt.f], Ge(Dt, z[I]), z[I] = Dt._.transform, R[I] = [(Dt.matrix.a - Rt.a) / S, (Dt.matrix.b - Rt.b) / S, (Dt.matrix.c - Rt.c) / S, (Dt.matrix.d - Rt.d) / S, (Dt.matrix.e - Rt.e) / S, (Dt.matrix.f - Rt.f) / S];
                      }
                      break;
                    case "csv":
                      var de = L(p[I])[J](ot), ge = L(A[I])[J](ot);
                      if (I == "clip-rect")
                        for (A[I] = ge, R[I] = [], T = ge.length; T--; )
                          R[I][T] = (de[T] - A[I][T]) / S;
                      z[I] = de;
                      break;
                    default:
                      for (de = [][Y](p[I]), ge = [][Y](A[I]), R[I] = [], T = e.paper.customAttributes[I].length; T--; )
                        R[I][T] = ((de[T] || 0) - (ge[T] || 0)) / S;
                  }
              var Te = p.easing, qt = a.easing_formulas[Te];
              if (!qt)
                if ((qt = L(Te).match(s)) && qt.length == 5) {
                  var ie = qt;
                  qt = function(Me) {
                    return vi(Me, +ie[1], +ie[2], +ie[3], +ie[4], S);
                  };
                } else
                  qt = bt;
              if (F = { anim: t, percent: i, timestamp: N = p.start || t.start || +new Date(), start: N + (t.del || 0), status: 0, initstatus: r || 0, stop: false, ms: S, easing: qt, from: A, diff: R, to: z, el: e, callback: p.callback, prev: E, next: v, repeat: l || t.times, origin: e.attr(), totalOrigin: n }, mt.push(F), r && !f && !d && (F.stop = true, F.start = new Date() - S * r, mt.length == 1))
                return je();
              d && (F.start = new Date() - F.ms * r), mt.length == 1 && Ke(je);
            }
            h("raphael.anim.start." + e.id, e, t);
          }
        }
        function ti(t) {
          for (var e = 0; e < mt.length; e++)
            mt[e].el.paper == t && mt.splice(e--, 1);
        }
        _t.animateWith = function(t, e, i, r, n, l) {
          if (this.removed)
            return l && l.call(this), this;
          var p = i instanceof Vt ? i : a.animation(i, r, n, l);
          we(p, this, p.percents[0], null, this.attr());
          for (var f = 0, d = mt.length; f < d; f++)
            if (mt[f].anim == e && mt[f].el == t) {
              mt[d - 1].start = mt[f].start;
              break;
            }
          return this;
        }, _t.onAnimation = function(t) {
          return t ? h.on("raphael.anim.frame." + this.id, t) : h.unbind("raphael.anim.frame." + this.id), this;
        }, Vt.prototype.delay = function(t) {
          var e = new Vt(this.anim, this.ms);
          return e.times = this.times, e.del = +t || 0, e;
        }, Vt.prototype.repeat = function(t) {
          var e = new Vt(this.anim, this.ms);
          return e.del = this.del, e.times = U.floor(rt(t, 0)) || 1, e;
        }, a.animation = function(t, e, i, r) {
          if (t instanceof Vt)
            return t;
          !a.is(i, "function") && i || (r = r || i || null, i = null), t = Object(t), e = +e || 0;
          var n, l, p = {};
          for (l in t)
            t[Q](l) && y(l) != l && y(l) + "%" != l && (n = true, p[l] = t[l]);
          if (n)
            return i && (p.easing = i), r && (p.callback = r), new Vt({ 100: p }, e);
          if (r) {
            var f = 0;
            for (var d in t) {
              var v = _(d);
              t[Q](d) && v > f && (f = v);
            }
            !t[f += "%"].callback && (t[f].callback = r);
          }
          return new Vt(t, e);
        }, _t.animate = function(t, e, i, r) {
          if (this.removed)
            return r && r.call(this), this;
          var n = t instanceof Vt ? t : a.animation(t, e, i, r);
          return we(n, this, n.percents[0], null, this.attr()), this;
        }, _t.setTime = function(t, e) {
          return t && e != null && this.status(t, et(e, t.ms) / t.ms), this;
        }, _t.status = function(t, e) {
          var i, r, n = [], l = 0;
          if (e != null)
            return we(t, this, -1, et(e, 1)), this;
          for (i = mt.length; l < i; l++)
            if ((r = mt[l]).el.id == this.id && (!t || r.anim == t)) {
              if (t)
                return r.status;
              n.push({ anim: r.anim, status: r.status });
            }
          return t ? 0 : n;
        }, _t.pause = function(t) {
          for (var e = 0; e < mt.length; e++)
            mt[e].el.id != this.id || t && mt[e].anim != t || h("raphael.anim.pause." + this.id, this, mt[e].anim) !== false && (mt[e].paused = true);
          return this;
        }, _t.resume = function(t) {
          for (var e = 0; e < mt.length; e++)
            if (mt[e].el.id == this.id && (!t || mt[e].anim == t)) {
              var i = mt[e];
              h("raphael.anim.resume." + this.id, this, i.anim) !== false && (delete i.paused, this.status(i.anim, i.status));
            }
          return this;
        }, _t.stop = function(t) {
          for (var e = 0; e < mt.length; e++)
            mt[e].el.id != this.id || t && mt[e].anim != t || h("raphael.anim.stop." + this.id, this, mt[e].anim) !== false && mt.splice(e--, 1);
          return this;
        }, h.on("raphael.remove", ti), h.on("raphael.clear", ti), _t.toString = function() {
          return "Raphaël’s object";
        };
        var ei, ii, ee, ri, ke = function(t) {
          if (this.items = [], this.length = 0, this.type = "set", t)
            for (var e = 0, i = t.length; e < i; e++)
              !t[e] || t[e].constructor != _t.constructor && t[e].constructor != ke || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++);
        }, Ot = ke.prototype;
        for (var $e in Ot.push = function() {
          for (var t, e, i = 0, r = arguments.length; i < r; i++)
            !(t = arguments[i]) || t.constructor != _t.constructor && t.constructor != ke || (this[e = this.items.length] = this.items[e] = t, this.length++);
          return this;
        }, Ot.pop = function() {
          return this.length && delete this[this.length--], this.items.pop();
        }, Ot.forEach = function(t, e) {
          for (var i = 0, r = this.items.length; i < r; i++)
            if (t.call(e, this.items[i], i) === false)
              return this;
          return this;
        }, _t)
          _t[Q]($e) && (Ot[$e] = function(t) {
            return function() {
              var e = arguments;
              return this.forEach(function(i) {
                i[t][K](i, e);
              });
            };
          }($e));
        return Ot.attr = function(t, e) {
          if (t && a.is(t, dt) && a.is(t[0], "object"))
            for (var i = 0, r = t.length; i < r; i++)
              this.items[i].attr(t[i]);
          else
            for (var n = 0, l = this.items.length; n < l; n++)
              this.items[n].attr(t, e);
          return this;
        }, Ot.clear = function() {
          for (; this.length; )
            this.pop();
        }, Ot.splice = function(t, e, i) {
          t = t < 0 ? rt(this.length + t, 0) : t, e = rt(0, et(this.length - t, e));
          var r, n = [], l = [], p = [];
          for (r = 2; r < arguments.length; r++)
            p.push(arguments[r]);
          for (r = 0; r < e; r++)
            l.push(this[t + r]);
          for (; r < this.length - t; r++)
            n.push(this[t + r]);
          var f = p.length;
          for (r = 0; r < f + n.length; r++)
            this.items[t + r] = this[t + r] = r < f ? p[r] : n[r - f];
          for (r = this.items.length = this.length -= e - f; this[r]; )
            delete this[r++];
          return new ke(l);
        }, Ot.exclude = function(t) {
          for (var e = 0, i = this.length; e < i; e++)
            if (this[e] == t)
              return this.splice(e, 1), true;
        }, Ot.animate = function(t, e, i, r) {
          (a.is(i, "function") || !i) && (r = i || null);
          var n, l, p = this.items.length, f = p, d = this;
          if (!p)
            return this;
          r && (l = function() {
            !--p && r.call(d);
          }), i = a.is(i, "string") ? i : l;
          var v = a.animation(t, e, i, l);
          for (n = this.items[--f].animate(v); f--; )
            this.items[f] && !this.items[f].removed && this.items[f].animateWith(n, v, v), this.items[f] && !this.items[f].removed || p--;
          return this;
        }, Ot.insertAfter = function(t) {
          for (var e = this.items.length; e--; )
            this.items[e].insertAfter(t);
          return this;
        }, Ot.getBBox = function() {
          for (var t = [], e = [], i = [], r = [], n = this.items.length; n--; )
            if (!this.items[n].removed) {
              var l = this.items[n].getBBox();
              t.push(l.x), e.push(l.y), i.push(l.x + l.width), r.push(l.y + l.height);
            }
          return { x: t = et[K](0, t), y: e = et[K](0, e), x2: i = rt[K](0, i), y2: r = rt[K](0, r), width: i - t, height: r - e };
        }, Ot.clone = function(t) {
          t = this.paper.set();
          for (var e = 0, i = this.items.length; e < i; e++)
            t.push(this.items[e].clone());
          return t;
        }, Ot.toString = function() {
          return "Raphaël‘s set";
        }, Ot.glow = function(t) {
          var e = this.paper.set();
          return this.forEach(function(i, r) {
            var n = i.glow(t);
            n != null && n.forEach(function(l, p) {
              e.push(l);
            });
          }), e;
        }, Ot.isPointInside = function(t, e) {
          var i = false;
          return this.forEach(function(r) {
            if (r.isPointInside(t, e))
              return i = true, false;
          }), i;
        }, a.registerFont = function(t) {
          if (!t.face)
            return t;
          this.fonts = this.fonts || {};
          var e = { w: t.w, face: {}, glyphs: {} }, i = t.face["font-family"];
          for (var r in t.face)
            t.face[Q](r) && (e.face[r] = t.face[r]);
          if (this.fonts[i] ? this.fonts[i].push(e) : this.fonts[i] = [e], !t.svg) {
            for (var n in e.face["units-per-em"] = _(t.face["units-per-em"], 10), t.glyphs)
              if (t.glyphs[Q](n)) {
                var l = t.glyphs[n];
                if (e.glyphs[n] = { w: l.w, k: {}, d: l.d && "M" + l.d.replace(/[mlcxtrv]/g, function(f) {
                  return { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[f] || "M";
                }) + "z" }, l.k)
                  for (var p in l.k)
                    l[Q](p) && (e.glyphs[n].k[p] = l.k[p]);
              }
          }
          return t;
        }, q.getFont = function(t, e, i, r) {
          if (r = r || "normal", i = i || "normal", e = +e || { normal: 400, bold: 700, lighter: 300, bolder: 800 }[e] || 400, a.fonts) {
            var n, l = a.fonts[t];
            if (!l) {
              var p = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, tt) + "(\\s|$)", "i");
              for (var f in a.fonts)
                if (a.fonts[Q](f) && p.test(f)) {
                  l = a.fonts[f];
                  break;
                }
            }
            if (l)
              for (var d = 0, v = l.length; d < v && ((n = l[d]).face["font-weight"] != e || n.face["font-style"] != i && n.face["font-style"] || n.face["font-stretch"] != r); d++)
                ;
            return n;
          }
        }, q.print = function(t, e, i, r, n, l, p, f) {
          l = l || "middle", p = rt(et(p || 0, 1), -1), f = rt(et(f || 1, 3), 1);
          var d, v = L(i)[J](tt), E = 0, N = 0, S = tt;
          if (a.is(r, "string") && (r = this.getFont(r)), r) {
            d = (n || 16) / r.face["units-per-em"];
            for (var A = r.face.bbox[J](ot), z = +A[0], R = A[3] - A[1], F = 0, T = +A[1] + (l == "baseline" ? R + +r.face.descent : R / 2), W = 0, I = v.length; W < I; W++) {
              if (v[W] == `
`)
                E = 0, j = 0, N = 0, F += R * f;
              else {
                var V = N && r.glyphs[v[W - 1]] || {}, j = r.glyphs[v[W]];
                E += N ? (V.w || r.w) + (V.k && V.k[v[W]] || 0) + r.w * p : 0, N = 1;
              }
              j && j.d && (S += a.transformPath(j.d, ["t", E * d, F * d, "s", d, d, z, T, "t", (t - z) / d, (e - T) / d]));
            }
          }
          return this.path(S).attr({ fill: "#000", stroke: "none" });
        }, q.add = function(t) {
          if (a.is(t, "array"))
            for (var e, i = this.set(), r = 0, n = t.length; r < n; r++)
              e = t[r] || {}, P[Q](e.type) && i.push(this[e.type]().attr(e));
          return i;
        }, a.format = function(t, e) {
          var i = a.is(e, dt) ? [0][Y](e) : arguments;
          return t && a.is(t, "string") && i.length - 1 && (t = t.replace(vt, function(r, n) {
            return i[++n] == null ? tt : i[n];
          })), t || tt;
        }, a.fullfill = (ei = /\{([^\}]+)\}/g, ii = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(t, e) {
          return String(t).replace(ei, function(i, r) {
            return function(n, l, p) {
              var f = p;
              return l.replace(ii, function(d, v, E, N, S) {
                v = v || N, f && (v in f && (f = f[v]), typeof f == "function" && S && (f = f()));
              }), f = (f == null || f == p ? n : f) + "";
            }(i, r, e);
          });
        }), a.ninja = function() {
          if (wt.was)
            H.win.Raphael = wt.is;
          else {
            window.Raphael = void 0;
            try {
              delete window.Raphael;
            } catch {
            }
          }
          return a;
        }, a.st = Ot, h.on("raphael.DOMload", function() {
          B = true;
        }), (ee = document).readyState == null && ee.addEventListener && (ee.addEventListener("DOMContentLoaded", ri = function() {
          ee.removeEventListener("DOMContentLoaded", ri, false), ee.readyState = "complete";
        }, false), ee.readyState = "loading"), function t() {
          /in/.test(ee.readyState) ? setTimeout(t, 9) : a.eve("raphael.DOMload");
        }(), a;
      }.apply(w, k)) === void 0 || (g.exports = x);
    }, function(g, w, O) {
      var k, x;
      k = [O(0), O(3), O(4)], (x = function(h) {
        return h;
      }.apply(w, k)) === void 0 || (g.exports = x);
    }, function(g, w, O) {
      var k, x, h, a, B, q, ot, P, vt, Q, H, wt, At, K;
      a = "hasOwnProperty", B = /[\.\/]/, q = /\s*,\s*/, ot = function(Y, ht) {
        return Y - ht;
      }, P = { n: {} }, vt = function() {
        for (var Y = 0, ht = this.length; Y < ht; Y++)
          if (this[Y] !== void 0)
            return this[Y];
      }, Q = function() {
        for (var Y = this.length; --Y; )
          if (this[Y] !== void 0)
            return this[Y];
      }, H = Object.prototype.toString, wt = String, At = Array.isArray || function(Y) {
        return Y instanceof Array || H.call(Y) == "[object Array]";
      }, (K = function(Y, ht) {
        var tt, D = h, L = Array.prototype.slice.call(arguments, 2), J = K.listeners(Y), X = 0, gt = [], nt = {}, U = [], rt = x;
        U.firstDefined = vt, U.lastDefined = Q, x = Y, h = 0;
        for (var et = 0, xt = J.length; et < xt; et++)
          "zIndex" in J[et] && (gt.push(J[et].zIndex), J[et].zIndex < 0 && (nt[J[et].zIndex] = J[et]));
        for (gt.sort(ot); gt[X] < 0; )
          if (tt = nt[gt[X++]], U.push(tt.apply(ht, L)), h)
            return h = D, U;
        for (et = 0; et < xt; et++)
          if ("zIndex" in (tt = J[et]))
            if (tt.zIndex == gt[X]) {
              if (U.push(tt.apply(ht, L)), h)
                break;
              do
                if ((tt = nt[gt[++X]]) && U.push(tt.apply(ht, L)), h)
                  break;
              while (tt);
            } else
              nt[tt.zIndex] = tt;
          else if (U.push(tt.apply(ht, L)), h)
            break;
        return h = D, x = rt, U;
      })._events = P, K.listeners = function(Y) {
        var ht, tt, D, L, J, X, gt, nt, U = At(Y) ? Y : Y.split(B), rt = P, et = [rt], xt = [];
        for (L = 0, J = U.length; L < J; L++) {
          for (nt = [], X = 0, gt = et.length; X < gt; X++)
            for (tt = [(rt = et[X].n)[U[L]], rt["*"]], D = 2; D--; )
              (ht = tt[D]) && (nt.push(ht), xt = xt.concat(ht.f || []));
          et = nt;
        }
        return xt;
      }, K.separator = function(Y) {
        Y ? (Y = "[" + (Y = wt(Y).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", B = new RegExp(Y)) : B = /[\.\/]/;
      }, K.on = function(Y, ht) {
        if (typeof ht != "function")
          return function() {
          };
        for (var tt = At(Y) ? At(Y[0]) ? Y : [Y] : wt(Y).split(q), D = 0, L = tt.length; D < L; D++)
          (function(J) {
            for (var X, gt = At(J) ? J : wt(J).split(B), nt = P, U = 0, rt = gt.length; U < rt; U++)
              nt = (nt = nt.n).hasOwnProperty(gt[U]) && nt[gt[U]] || (nt[gt[U]] = { n: {} });
            for (nt.f = nt.f || [], U = 0, rt = nt.f.length; U < rt; U++)
              if (nt.f[U] == ht) {
                X = true;
                break;
              }
            !X && nt.f.push(ht);
          })(tt[D]);
        return function(J) {
          +J == +J && (ht.zIndex = +J);
        };
      }, K.f = function(Y) {
        var ht = [].slice.call(arguments, 1);
        return function() {
          K.apply(null, [Y, null].concat(ht).concat([].slice.call(arguments, 0)));
        };
      }, K.stop = function() {
        h = 1;
      }, K.nt = function(Y) {
        var ht = At(x) ? x.join(".") : x;
        return Y ? new RegExp("(?:\\.|\\/|^)" + Y + "(?:\\.|\\/|$)").test(ht) : ht;
      }, K.nts = function() {
        return At(x) ? x : x.split(B);
      }, K.off = K.unbind = function(Y, ht) {
        if (Y) {
          var tt = At(Y) ? At(Y[0]) ? Y : [Y] : wt(Y).split(q);
          if (tt.length > 1)
            for (var D = 0, L = tt.length; D < L; D++)
              K.off(tt[D], ht);
          else {
            tt = At(Y) ? Y : wt(Y).split(B);
            var J, X, gt, nt, U, rt = [P];
            for (D = 0, L = tt.length; D < L; D++)
              for (nt = 0; nt < rt.length; nt += gt.length - 2) {
                if (gt = [nt, 1], J = rt[nt].n, tt[D] != "*")
                  J[tt[D]] && gt.push(J[tt[D]]);
                else
                  for (X in J)
                    J[a](X) && gt.push(J[X]);
                rt.splice.apply(rt, gt);
              }
            for (D = 0, L = rt.length; D < L; D++)
              for (J = rt[D]; J.n; ) {
                if (ht) {
                  if (J.f) {
                    for (nt = 0, U = J.f.length; nt < U; nt++)
                      if (J.f[nt] == ht) {
                        J.f.splice(nt, 1);
                        break;
                      }
                    !J.f.length && delete J.f;
                  }
                  for (X in J.n)
                    if (J.n[a](X) && J.n[X].f) {
                      var et = J.n[X].f;
                      for (nt = 0, U = et.length; nt < U; nt++)
                        if (et[nt] == ht) {
                          et.splice(nt, 1);
                          break;
                        }
                      !et.length && delete J.n[X].f;
                    }
                } else
                  for (X in delete J.f, J.n)
                    J.n[a](X) && J.n[X].f && delete J.n[X].f;
                J = J.n;
              }
          }
        } else
          K._events = P = { n: {} };
      }, K.once = function(Y, ht) {
        var tt = function() {
          return K.off(Y, tt), ht.apply(this, arguments);
        };
        return K.on(Y, tt);
      }, K.version = "0.5.0", K.toString = function() {
        return "You are running Eve 0.5.0";
      }, g.exports ? g.exports = K : (k = function() {
        return K;
      }.apply(w, [])) === void 0 || (g.exports = k);
    }, function(g, w, O) {
      var k, x;
      k = [O(0)], (x = function(h) {
        if (!h || h.svg) {
          var a = "hasOwnProperty", B = String, q = parseFloat, ot = parseInt, P = Math, vt = P.max, Q = P.abs, H = P.pow, wt = /[, ]+/, At = h.eve, K = "", Y = " ", ht = "http://www.w3.org/1999/xlink", tt = { block: "M5,0 0,2.5 5,5z", classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z", diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z", open: "M6,1 1,3.5 6,6", oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z" }, D = {};
          h.toString = function() {
            return `Your browser supports SVG.
You are running Raphaël ` + this.version;
          };
          var L = function(c, o) {
            if (o)
              for (var s in typeof c == "string" && (c = L(c)), o)
                o[a](s) && (s.substring(0, 6) == "xlink:" ? c.setAttributeNS(ht, s.substring(6), B(o[s])) : c.setAttribute(s, B(o[s])));
            else
              (c = h._g.doc.createElementNS("http://www.w3.org/2000/svg", c)).style && (c.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
            return c;
          }, J = function(c, o) {
            var s = "linear", u = c.id + o, y = 0.5, _ = 0.5, b = c.node, M = c.paper, C = b.style, $ = h._g.doc.getElementById(u);
            if (!$) {
              if (o = (o = B(o).replace(h._radial_gradient, function(Bt, bt, at) {
                if (s = "radial", bt && at) {
                  y = q(bt);
                  var St = 2 * ((_ = q(at)) > 0.5) - 1;
                  H(y - 0.5, 2) + H(_ - 0.5, 2) > 0.25 && (_ = P.sqrt(0.25 - H(y - 0.5, 2)) * St + 0.5) && _ != 0.5 && (_ = _.toFixed(5) - 1e-5 * St);
                }
                return K;
              })).split(/\s*\-\s*/), s == "linear") {
                var Z = o.shift();
                if (Z = -q(Z), isNaN(Z))
                  return null;
                var it = [0, 0, P.cos(h.rad(Z)), P.sin(h.rad(Z))], ft = 1 / (vt(Q(it[2]), Q(it[3])) || 1);
                it[2] *= ft, it[3] *= ft, it[2] < 0 && (it[0] = -it[2], it[2] = 0), it[3] < 0 && (it[1] = -it[3], it[3] = 0);
              }
              var yt = h._parseDots(o);
              if (!yt)
                return null;
              if (u = u.replace(/[\(\)\s,\xb0#]/g, "_"), c.gradient && u != c.gradient.id && (M.defs.removeChild(c.gradient), delete c.gradient), !c.gradient) {
                $ = L(s + "Gradient", { id: u }), c.gradient = $, L($, s == "radial" ? { fx: y, fy: _ } : { x1: it[0], y1: it[1], x2: it[2], y2: it[3], gradientTransform: c.matrix.invert() }), M.defs.appendChild($);
                for (var pt = 0, kt = yt.length; pt < kt; pt++)
                  $.appendChild(L("stop", { offset: yt[pt].offset ? yt[pt].offset : pt ? "100%" : "0%", "stop-color": yt[pt].color || "#fff", "stop-opacity": isFinite(yt[pt].opacity) ? yt[pt].opacity : 1 }));
              }
            }
            return L(b, { fill: X(u), opacity: 1, "fill-opacity": 1 }), C.fill = K, C.opacity = 1, C.fillOpacity = 1, 1;
          }, X = function(c) {
            if ((o = document.documentMode) && (o === 9 || o === 10))
              return "url('#" + c + "')";
            var o, s = document.location;
            return "url('" + (s.protocol + "//" + s.host + s.pathname + s.search) + "#" + c + "')";
          }, gt = function(c) {
            var o = c.getBBox(1);
            L(c.pattern, { patternTransform: c.matrix.invert() + " translate(" + o.x + "," + o.y + ")" });
          }, nt = function(c, o, s) {
            if (c.type == "path") {
              for (var u, y, _, b, M, C = B(o).toLowerCase().split("-"), $ = c.paper, Z = s ? "end" : "start", it = c.node, ft = c.attrs, yt = ft["stroke-width"], pt = C.length, kt = "classic", Bt = 3, bt = 3, at = 5; pt--; )
                switch (C[pt]) {
                  case "block":
                  case "classic":
                  case "oval":
                  case "diamond":
                  case "open":
                  case "none":
                    kt = C[pt];
                    break;
                  case "wide":
                    bt = 5;
                    break;
                  case "narrow":
                    bt = 2;
                    break;
                  case "long":
                    Bt = 5;
                    break;
                  case "short":
                    Bt = 2;
                }
              if (kt == "open" ? (Bt += 2, bt += 2, at += 2, _ = 1, b = s ? 4 : 1, M = { fill: "none", stroke: ft.stroke }) : (b = _ = Bt / 2, M = { fill: ft.stroke, stroke: "none" }), c._.arrows ? s ? (c._.arrows.endPath && D[c._.arrows.endPath]--, c._.arrows.endMarker && D[c._.arrows.endMarker]--) : (c._.arrows.startPath && D[c._.arrows.startPath]--, c._.arrows.startMarker && D[c._.arrows.startMarker]--) : c._.arrows = {}, kt != "none") {
                var St = "raphael-marker-" + kt, Mt = "raphael-marker-" + Z + kt + Bt + bt + "-obj" + c.id;
                h._g.doc.getElementById(St) ? D[St]++ : ($.defs.appendChild(L(L("path"), { "stroke-linecap": "round", d: tt[kt], id: St })), D[St] = 1);
                var Pt, Ct = h._g.doc.getElementById(Mt);
                Ct ? (D[Mt]++, Pt = Ct.getElementsByTagName("use")[0]) : (Ct = L(L("marker"), { id: Mt, markerHeight: bt, markerWidth: Bt, orient: "auto", refX: b, refY: bt / 2 }), Pt = L(L("use"), { "xlink:href": "#" + St, transform: (s ? "rotate(180 " + Bt / 2 + " " + bt / 2 + ") " : K) + "scale(" + Bt / at + "," + bt / at + ")", "stroke-width": (1 / ((Bt / at + bt / at) / 2)).toFixed(4) }), Ct.appendChild(Pt), $.defs.appendChild(Ct), D[Mt] = 1), L(Pt, M);
                var It = _ * (kt != "diamond" && kt != "oval");
                s ? (u = c._.arrows.startdx * yt || 0, y = h.getTotalLength(ft.path) - It * yt) : (u = It * yt, y = h.getTotalLength(ft.path) - (c._.arrows.enddx * yt || 0)), (M = {})["marker-" + Z] = "url(#" + Mt + ")", (y || u) && (M.d = h.getSubpath(ft.path, u, y)), L(it, M), c._.arrows[Z + "Path"] = St, c._.arrows[Z + "Marker"] = Mt, c._.arrows[Z + "dx"] = It, c._.arrows[Z + "Type"] = kt, c._.arrows[Z + "String"] = o;
              } else
                s ? (u = c._.arrows.startdx * yt || 0, y = h.getTotalLength(ft.path) - u) : (u = 0, y = h.getTotalLength(ft.path) - (c._.arrows.enddx * yt || 0)), c._.arrows[Z + "Path"] && L(it, { d: h.getSubpath(ft.path, u, y) }), delete c._.arrows[Z + "Path"], delete c._.arrows[Z + "Marker"], delete c._.arrows[Z + "dx"], delete c._.arrows[Z + "Type"], delete c._.arrows[Z + "String"];
              for (M in D)
                if (D[a](M) && !D[M]) {
                  var Xt = h._g.doc.getElementById(M);
                  Xt && Xt.parentNode.removeChild(Xt);
                }
            }
          }, U = { "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] }, rt = function(c, o, s) {
            if (o = U[B(o).toLowerCase()]) {
              for (var u = c.attrs["stroke-width"] || "1", y = { round: u, square: u, butt: 0 }[c.attrs["stroke-linecap"] || s["stroke-linecap"]] || 0, _ = [], b = o.length; b--; )
                _[b] = o[b] * u + (b % 2 ? 1 : -1) * y;
              L(c.node, { "stroke-dasharray": _.join(",") });
            } else
              L(c.node, { "stroke-dasharray": "none" });
          }, et = function(c, o) {
            var s = c.node, u = c.attrs, y = s.style.visibility;
            for (var _ in s.style.visibility = "hidden", o)
              if (o[a](_)) {
                if (!h._availableAttrs[a](_))
                  continue;
                var b = o[_];
                switch (u[_] = b, _) {
                  case "blur":
                    c.blur(b);
                    break;
                  case "title":
                    var M = s.getElementsByTagName("title");
                    if (M.length && (M = M[0]))
                      M.firstChild.nodeValue = b;
                    else {
                      M = L("title");
                      var C = h._g.doc.createTextNode(b);
                      M.appendChild(C), s.appendChild(M);
                    }
                    break;
                  case "href":
                  case "target":
                    var $ = s.parentNode;
                    if ($.tagName.toLowerCase() != "a") {
                      var Z = L("a");
                      $.insertBefore(Z, s), Z.appendChild(s), $ = Z;
                    }
                    _ == "target" ? $.setAttributeNS(ht, "show", b == "blank" ? "new" : b) : $.setAttributeNS(ht, _, b);
                    break;
                  case "cursor":
                    s.style.cursor = b;
                    break;
                  case "transform":
                    c.transform(b);
                    break;
                  case "arrow-start":
                    nt(c, b);
                    break;
                  case "arrow-end":
                    nt(c, b, 1);
                    break;
                  case "clip-rect":
                    var it = B(b).split(wt);
                    if (it.length == 4) {
                      c.clip && c.clip.parentNode.parentNode.removeChild(c.clip.parentNode);
                      var ft = L("clipPath"), yt = L("rect");
                      ft.id = h.createUUID(), L(yt, { x: it[0], y: it[1], width: it[2], height: it[3] }), ft.appendChild(yt), c.paper.defs.appendChild(ft), L(s, { "clip-path": "url(#" + ft.id + ")" }), c.clip = yt;
                    }
                    if (!b) {
                      var pt = s.getAttribute("clip-path");
                      if (pt) {
                        var kt = h._g.doc.getElementById(pt.replace(/(^url\(#|\)$)/g, K));
                        kt && kt.parentNode.removeChild(kt), L(s, { "clip-path": K }), delete c.clip;
                      }
                    }
                    break;
                  case "path":
                    c.type == "path" && (L(s, { d: b ? u.path = h._pathToAbsolute(b) : "M0,0" }), c._.dirty = 1, c._.arrows && ("startString" in c._.arrows && nt(c, c._.arrows.startString), "endString" in c._.arrows && nt(c, c._.arrows.endString, 1)));
                    break;
                  case "width":
                    if (s.setAttribute(_, b), c._.dirty = 1, !u.fx)
                      break;
                    _ = "x", b = u.x;
                  case "x":
                    u.fx && (b = -u.x - (u.width || 0));
                  case "rx":
                    if (_ == "rx" && c.type == "rect")
                      break;
                  case "cx":
                    s.setAttribute(_, b), c.pattern && gt(c), c._.dirty = 1;
                    break;
                  case "height":
                    if (s.setAttribute(_, b), c._.dirty = 1, !u.fy)
                      break;
                    _ = "y", b = u.y;
                  case "y":
                    u.fy && (b = -u.y - (u.height || 0));
                  case "ry":
                    if (_ == "ry" && c.type == "rect")
                      break;
                  case "cy":
                    s.setAttribute(_, b), c.pattern && gt(c), c._.dirty = 1;
                    break;
                  case "r":
                    c.type == "rect" ? L(s, { rx: b, ry: b }) : s.setAttribute(_, b), c._.dirty = 1;
                    break;
                  case "src":
                    c.type == "image" && s.setAttributeNS(ht, "href", b);
                    break;
                  case "stroke-width":
                    c._.sx == 1 && c._.sy == 1 || (b /= vt(Q(c._.sx), Q(c._.sy)) || 1), s.setAttribute(_, b), u["stroke-dasharray"] && rt(c, u["stroke-dasharray"], o), c._.arrows && ("startString" in c._.arrows && nt(c, c._.arrows.startString), "endString" in c._.arrows && nt(c, c._.arrows.endString, 1));
                    break;
                  case "stroke-dasharray":
                    rt(c, b, o);
                    break;
                  case "fill":
                    var Bt = B(b).match(h._ISURL);
                    if (Bt) {
                      ft = L("pattern");
                      var bt = L("image");
                      ft.id = h.createUUID(), L(ft, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 }), L(bt, { x: 0, y: 0, "xlink:href": Bt[1] }), ft.appendChild(bt), function(Ct) {
                        h._preload(Bt[1], function() {
                          var It = this.offsetWidth, Xt = this.offsetHeight;
                          L(Ct, { width: It, height: Xt }), L(bt, { width: It, height: Xt });
                        });
                      }(ft), c.paper.defs.appendChild(ft), L(s, { fill: "url(#" + ft.id + ")" }), c.pattern = ft, c.pattern && gt(c);
                      break;
                    }
                    var at = h.getRGB(b);
                    if (at.error) {
                      if ((c.type == "circle" || c.type == "ellipse" || B(b).charAt() != "r") && J(c, b)) {
                        if ("opacity" in u || "fill-opacity" in u) {
                          var St = h._g.doc.getElementById(s.getAttribute("fill").replace(/^url\(#|\)$/g, K));
                          if (St) {
                            var Mt = St.getElementsByTagName("stop");
                            L(Mt[Mt.length - 1], { "stop-opacity": ("opacity" in u ? u.opacity : 1) * ("fill-opacity" in u ? u["fill-opacity"] : 1) });
                          }
                        }
                        u.gradient = b, u.fill = "none";
                        break;
                      }
                    } else
                      delete o.gradient, delete u.gradient, !h.is(u.opacity, "undefined") && h.is(o.opacity, "undefined") && L(s, { opacity: u.opacity }), !h.is(u["fill-opacity"], "undefined") && h.is(o["fill-opacity"], "undefined") && L(s, { "fill-opacity": u["fill-opacity"] });
                    at[a]("opacity") && L(s, { "fill-opacity": at.opacity > 1 ? at.opacity / 100 : at.opacity });
                  case "stroke":
                    at = h.getRGB(b), s.setAttribute(_, at.hex), _ == "stroke" && at[a]("opacity") && L(s, { "stroke-opacity": at.opacity > 1 ? at.opacity / 100 : at.opacity }), _ == "stroke" && c._.arrows && ("startString" in c._.arrows && nt(c, c._.arrows.startString), "endString" in c._.arrows && nt(c, c._.arrows.endString, 1));
                    break;
                  case "gradient":
                    (c.type == "circle" || c.type == "ellipse" || B(b).charAt() != "r") && J(c, b);
                    break;
                  case "opacity":
                    u.gradient && !u[a]("stroke-opacity") && L(s, { "stroke-opacity": b > 1 ? b / 100 : b });
                  case "fill-opacity":
                    if (u.gradient) {
                      (St = h._g.doc.getElementById(s.getAttribute("fill").replace(/^url\(#|\)$/g, K))) && (Mt = St.getElementsByTagName("stop"), L(Mt[Mt.length - 1], { "stop-opacity": b }));
                      break;
                    }
                  default:
                    _ == "font-size" && (b = ot(b, 10) + "px");
                    var Pt = _.replace(/(\-.)/g, function(Ct) {
                      return Ct.substring(1).toUpperCase();
                    });
                    s.style[Pt] = b, c._.dirty = 1, s.setAttribute(_, b);
                }
              }
            xt(c, o), s.style.visibility = y;
          }, xt = function(c, o) {
            if (c.type == "text" && (o[a]("text") || o[a]("font") || o[a]("font-size") || o[a]("x") || o[a]("y"))) {
              var s = c.attrs, u = c.node, y = u.firstChild ? ot(h._g.doc.defaultView.getComputedStyle(u.firstChild, K).getPropertyValue("font-size"), 10) : 10;
              if (o[a]("text")) {
                for (s.text = o.text; u.firstChild; )
                  u.removeChild(u.firstChild);
                for (var _, b = B(o.text).split(`
`), M = [], C = 0, $ = b.length; C < $; C++)
                  _ = L("tspan"), C && L(_, { dy: 1.2 * y, x: s.x }), _.appendChild(h._g.doc.createTextNode(b[C])), u.appendChild(_), M[C] = _;
              } else
                for (C = 0, $ = (M = u.getElementsByTagName("tspan")).length; C < $; C++)
                  C ? L(M[C], { dy: 1.2 * y, x: s.x }) : L(M[0], { dy: 0 });
              L(u, { x: s.x, y: s.y }), c._.dirty = 1;
              var Z = c._getBBox(), it = s.y - (Z.y + Z.height / 2);
              it && h.is(it, "finite") && L(M[0], { dy: it });
            }
          }, Lt = function(c) {
            return c.parentNode && c.parentNode.tagName.toLowerCase() === "a" ? c.parentNode : c;
          }, Et = function(c, o) {
            this[0] = this.node = c, c.raphael = true, this.id = ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5), c.raphaelid = this.id, this.matrix = h.matrix(), this.realPath = null, this.paper = o, this.attrs = this.attrs || {}, this._ = { transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1 }, !o.bottom && (o.bottom = this), this.prev = o.top, o.top && (o.top.next = this), o.top = this, this.next = null;
          }, ut = h.el;
          Et.prototype = ut, ut.constructor = Et, h._engine.path = function(c, o) {
            var s = L("path");
            o.canvas && o.canvas.appendChild(s);
            var u = new Et(s, o);
            return u.type = "path", et(u, { fill: "none", stroke: "#000", path: c }), u;
          }, ut.rotate = function(c, o, s) {
            if (this.removed)
              return this;
            if ((c = B(c).split(wt)).length - 1 && (o = q(c[1]), s = q(c[2])), c = q(c[0]), s == null && (o = s), o == null || s == null) {
              var u = this.getBBox(1);
              o = u.x + u.width / 2, s = u.y + u.height / 2;
            }
            return this.transform(this._.transform.concat([["r", c, o, s]])), this;
          }, ut.scale = function(c, o, s, u) {
            if (this.removed)
              return this;
            if ((c = B(c).split(wt)).length - 1 && (o = q(c[1]), s = q(c[2]), u = q(c[3])), c = q(c[0]), o == null && (o = c), u == null && (s = u), s == null || u == null)
              var y = this.getBBox(1);
            return s = s ?? y.x + y.width / 2, u = u ?? y.y + y.height / 2, this.transform(this._.transform.concat([["s", c, o, s, u]])), this;
          }, ut.translate = function(c, o) {
            return this.removed ? this : ((c = B(c).split(wt)).length - 1 && (o = q(c[1])), c = q(c[0]) || 0, o = +o || 0, this.transform(this._.transform.concat([["t", c, o]])), this);
          }, ut.transform = function(c) {
            var o = this._;
            if (c == null)
              return o.transform;
            if (h._extractTransform(this, c), this.clip && L(this.clip, { transform: this.matrix.invert() }), this.pattern && gt(this), this.node && L(this.node, { transform: this.matrix }), o.sx != 1 || o.sy != 1) {
              var s = this.attrs[a]("stroke-width") ? this.attrs["stroke-width"] : 1;
              this.attr({ "stroke-width": s });
            }
            return this;
          }, ut.hide = function() {
            return this.removed || (this.node.style.display = "none"), this;
          }, ut.show = function() {
            return this.removed || (this.node.style.display = ""), this;
          }, ut.remove = function() {
            var c = Lt(this.node);
            if (!this.removed && c.parentNode) {
              var o = this.paper;
              for (var s in o.__set__ && o.__set__.exclude(this), At.unbind("raphael.*.*." + this.id), this.gradient && o.defs.removeChild(this.gradient), h._tear(this, o), c.parentNode.removeChild(c), this.removeData(), this)
                this[s] = typeof this[s] == "function" ? h._removedFactory(s) : null;
              this.removed = true;
            }
          }, ut._getBBox = function() {
            if (this.node.style.display == "none") {
              this.show();
              var c = true;
            }
            var o, s = false;
            this.paper.canvas.parentElement ? o = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (o = this.paper.canvas.parentNode.style), o && o.display == "none" && (s = true, o.display = "");
            var u = {};
            try {
              u = this.node.getBBox();
            } catch {
              u = { x: this.node.clientLeft, y: this.node.clientTop, width: this.node.clientWidth, height: this.node.clientHeight };
            } finally {
              u = u || {}, s && (o.display = "none");
            }
            return c && this.hide(), u;
          }, ut.attr = function(c, o) {
            if (this.removed)
              return this;
            if (c == null) {
              var s = {};
              for (var u in this.attrs)
                this.attrs[a](u) && (s[u] = this.attrs[u]);
              return s.gradient && s.fill == "none" && (s.fill = s.gradient) && delete s.gradient, s.transform = this._.transform, s;
            }
            if (o == null && h.is(c, "string")) {
              if (c == "fill" && this.attrs.fill == "none" && this.attrs.gradient)
                return this.attrs.gradient;
              if (c == "transform")
                return this._.transform;
              for (var y = c.split(wt), _ = {}, b = 0, M = y.length; b < M; b++)
                (c = y[b]) in this.attrs ? _[c] = this.attrs[c] : h.is(this.paper.customAttributes[c], "function") ? _[c] = this.paper.customAttributes[c].def : _[c] = h._availableAttrs[c];
              return M - 1 ? _ : _[y[0]];
            }
            if (o == null && h.is(c, "array")) {
              for (_ = {}, b = 0, M = c.length; b < M; b++)
                _[c[b]] = this.attr(c[b]);
              return _;
            }
            if (o != null) {
              var C = {};
              C[c] = o;
            } else
              c != null && h.is(c, "object") && (C = c);
            for (var $ in C)
              At("raphael.attr." + $ + "." + this.id, this, C[$]);
            for ($ in this.paper.customAttributes)
              if (this.paper.customAttributes[a]($) && C[a]($) && h.is(this.paper.customAttributes[$], "function")) {
                var Z = this.paper.customAttributes[$].apply(this, [].concat(C[$]));
                for (var it in this.attrs[$] = C[$], Z)
                  Z[a](it) && (C[it] = Z[it]);
              }
            return et(this, C), this;
          }, ut.toFront = function() {
            if (this.removed)
              return this;
            var c = Lt(this.node);
            c.parentNode.appendChild(c);
            var o = this.paper;
            return o.top != this && h._tofront(this, o), this;
          }, ut.toBack = function() {
            if (this.removed)
              return this;
            var c = Lt(this.node), o = c.parentNode;
            return o.insertBefore(c, o.firstChild), h._toback(this, this.paper), this.paper, this;
          }, ut.insertAfter = function(c) {
            if (this.removed || !c)
              return this;
            var o = Lt(this.node), s = Lt(c.node || c[c.length - 1].node);
            return s.nextSibling ? s.parentNode.insertBefore(o, s.nextSibling) : s.parentNode.appendChild(o), h._insertafter(this, c, this.paper), this;
          }, ut.insertBefore = function(c) {
            if (this.removed || !c)
              return this;
            var o = Lt(this.node), s = Lt(c.node || c[0].node);
            return s.parentNode.insertBefore(o, s), h._insertbefore(this, c, this.paper), this;
          }, ut.blur = function(c) {
            var o = this;
            if (+c != 0) {
              var s = L("filter"), u = L("feGaussianBlur");
              o.attrs.blur = c, s.id = h.createUUID(), L(u, { stdDeviation: +c || 1.5 }), s.appendChild(u), o.paper.defs.appendChild(s), o._blur = s, L(o.node, { filter: "url(#" + s.id + ")" });
            } else
              o._blur && (o._blur.parentNode.removeChild(o._blur), delete o._blur, delete o.attrs.blur), o.node.removeAttribute("filter");
            return o;
          }, h._engine.circle = function(c, o, s, u) {
            var y = L("circle");
            c.canvas && c.canvas.appendChild(y);
            var _ = new Et(y, c);
            return _.attrs = { cx: o, cy: s, r: u, fill: "none", stroke: "#000" }, _.type = "circle", L(y, _.attrs), _;
          }, h._engine.rect = function(c, o, s, u, y, _) {
            var b = L("rect");
            c.canvas && c.canvas.appendChild(b);
            var M = new Et(b, c);
            return M.attrs = { x: o, y: s, width: u, height: y, rx: _ || 0, ry: _ || 0, fill: "none", stroke: "#000" }, M.type = "rect", L(b, M.attrs), M;
          }, h._engine.ellipse = function(c, o, s, u, y) {
            var _ = L("ellipse");
            c.canvas && c.canvas.appendChild(_);
            var b = new Et(_, c);
            return b.attrs = { cx: o, cy: s, rx: u, ry: y, fill: "none", stroke: "#000" }, b.type = "ellipse", L(_, b.attrs), b;
          }, h._engine.image = function(c, o, s, u, y, _) {
            var b = L("image");
            L(b, { x: s, y: u, width: y, height: _, preserveAspectRatio: "none" }), b.setAttributeNS(ht, "href", o), c.canvas && c.canvas.appendChild(b);
            var M = new Et(b, c);
            return M.attrs = { x: s, y: u, width: y, height: _, src: o }, M.type = "image", M;
          }, h._engine.text = function(c, o, s, u) {
            var y = L("text");
            c.canvas && c.canvas.appendChild(y);
            var _ = new Et(y, c);
            return _.attrs = { x: o, y: s, "text-anchor": "middle", text: u, "font-family": h._availableAttrs["font-family"], "font-size": h._availableAttrs["font-size"], stroke: "none", fill: "#000" }, _.type = "text", et(_, _.attrs), _;
          }, h._engine.setSize = function(c, o) {
            return this.width = c || this.width, this.height = o || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this;
          }, h._engine.create = function() {
            var c = h._getContainer.apply(0, arguments), o = c && c.container;
            if (!o)
              throw new Error("SVG container not found.");
            var s, u = c.x, y = c.y, _ = c.width, b = c.height, M = L("svg"), C = "overflow:hidden;";
            return u = u || 0, y = y || 0, L(M, { height: b = b || 342, version: 1.1, width: _ = _ || 512, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }), o == 1 ? (M.style.cssText = C + "position:absolute;left:" + u + "px;top:" + y + "px", h._g.doc.body.appendChild(M), s = 1) : (M.style.cssText = C + "position:relative", o.firstChild ? o.insertBefore(M, o.firstChild) : o.appendChild(M)), (o = new h._Paper()).width = _, o.height = b, o.canvas = M, o.clear(), o._left = o._top = 0, s && (o.renderfix = function() {
            }), o.renderfix(), o;
          }, h._engine.setViewBox = function(c, o, s, u, y) {
            At("raphael.setViewBox", this, this._viewBox, [c, o, s, u, y]);
            var _, b, M = this.getSize(), C = vt(s / M.width, u / M.height), $ = this.top, Z = y ? "xMidYMid meet" : "xMinYMin";
            for (c == null ? (this._vbSize && (C = 1), delete this._vbSize, _ = "0 0 " + this.width + Y + this.height) : (this._vbSize = C, _ = c + Y + o + Y + s + Y + u), L(this.canvas, { viewBox: _, preserveAspectRatio: Z }); C && $; )
              b = "stroke-width" in $.attrs ? $.attrs["stroke-width"] : 1, $.attr({ "stroke-width": b }), $._.dirty = 1, $._.dirtyT = 1, $ = $.prev;
            return this._viewBox = [c, o, s, u, !!y], this;
          }, h.prototype.renderfix = function() {
            var c, o = this.canvas, s = o.style;
            try {
              c = o.getScreenCTM() || o.createSVGMatrix();
            } catch {
              c = o.createSVGMatrix();
            }
            var u = -c.e % 1, y = -c.f % 1;
            (u || y) && (u && (this._left = (this._left + u) % 1, s.left = this._left + "px"), y && (this._top = (this._top + y) % 1, s.top = this._top + "px"));
          }, h.prototype.clear = function() {
            h.eve("raphael.clear", this);
            for (var c = this.canvas; c.firstChild; )
              c.removeChild(c.firstChild);
            this.bottom = this.top = null, (this.desc = L("desc")).appendChild(h._g.doc.createTextNode("Created with Raphaël " + h.version)), c.appendChild(this.desc), c.appendChild(this.defs = L("defs"));
          }, h.prototype.remove = function() {
            for (var c in At("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this)
              this[c] = typeof this[c] == "function" ? h._removedFactory(c) : null;
          };
          var dt = h.st;
          for (var Tt in ut)
            ut[a](Tt) && !dt[a](Tt) && (dt[Tt] = function(c) {
              return function() {
                var o = arguments;
                return this.forEach(function(s) {
                  s[c].apply(s, o);
                });
              };
            }(Tt));
        }
      }.apply(w, k)) === void 0 || (g.exports = x);
    }, function(g, w, O) {
      var k, x;
      k = [O(0)], (x = function(h) {
        if (!h || h.vml) {
          var a = "hasOwnProperty", B = String, q = parseFloat, ot = Math, P = ot.round, vt = ot.max, Q = ot.min, H = ot.abs, wt = /[, ]+/, At = h.eve, K = " ", Y = "", ht = { M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x" }, tt = /([clmz]),?([^clmz]*)/gi, D = / progid:\S+Blur\([^\)]+\)/g, L = /-?[^,\s-]+/g, J = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)", X = 21600, gt = { path: 1, rect: 1, image: 1 }, nt = { circle: 1, ellipse: 1 }, U = function(o, s, u) {
            var y = h.matrix();
            return y.rotate(-o, 0.5, 0.5), { dx: y.x(s, u), dy: y.y(s, u) };
          }, rt = function(o, s, u, y, _, b) {
            var M = o._, C = o.matrix, $ = M.fillpos, Z = o.node, it = Z.style, ft = 1, yt = "", pt = X / s, kt = X / u;
            if (it.visibility = "hidden", s && u) {
              if (Z.coordsize = H(pt) + K + H(kt), it.rotation = b * (s * u < 0 ? -1 : 1), b) {
                var Bt = U(b, y, _);
                y = Bt.dx, _ = Bt.dy;
              }
              if (s < 0 && (yt += "x"), u < 0 && (yt += " y") && (ft = -1), it.flip = yt, Z.coordorigin = y * -pt + K + _ * -kt, $ || M.fillsize) {
                var bt = Z.getElementsByTagName("fill");
                bt = bt && bt[0], Z.removeChild(bt), $ && (Bt = U(b, C.x($[0], $[1]), C.y($[0], $[1])), bt.position = Bt.dx * ft + K + Bt.dy * ft), M.fillsize && (bt.size = M.fillsize[0] * H(s) + K + M.fillsize[1] * H(u)), Z.appendChild(bt);
              }
              it.visibility = "visible";
            }
          };
          h.toString = function() {
            return `Your browser doesn’t support SVG. Falling down to VML.
You are running Raphaël ` + this.version;
          };
          var et, xt = function(o, s, u) {
            for (var y = B(s).toLowerCase().split("-"), _ = u ? "end" : "start", b = y.length, M = "classic", C = "medium", $ = "medium"; b--; )
              switch (y[b]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                  M = y[b];
                  break;
                case "wide":
                case "narrow":
                  $ = y[b];
                  break;
                case "long":
                case "short":
                  C = y[b];
              }
            var Z = o.node.getElementsByTagName("stroke")[0];
            Z[_ + "arrow"] = M, Z[_ + "arrowlength"] = C, Z[_ + "arrowwidth"] = $;
          }, Lt = function(o, s) {
            o.attrs = o.attrs || {};
            var u = o.node, y = o.attrs, _ = u.style, b = gt[o.type] && (s.x != y.x || s.y != y.y || s.width != y.width || s.height != y.height || s.cx != y.cx || s.cy != y.cy || s.rx != y.rx || s.ry != y.ry || s.r != y.r), M = nt[o.type] && (y.cx != s.cx || y.cy != s.cy || y.r != s.r || y.rx != s.rx || y.ry != s.ry), C = o;
            for (var $ in s)
              s[a]($) && (y[$] = s[$]);
            if (b && (y.path = h._getPath[o.type](o), o._.dirty = 1), s.href && (u.href = s.href), s.title && (u.title = s.title), s.target && (u.target = s.target), s.cursor && (_.cursor = s.cursor), "blur" in s && o.blur(s.blur), (s.path && o.type == "path" || b) && (u.path = function(Ft) {
              var Ht = /[ahqstv]/gi, ae = h._pathToAbsolute;
              if (B(Ft).match(Ht) && (ae = h._path2curve), Ht = /[clmz]/g, ae == h._pathToAbsolute && !B(Ft).match(Ht)) {
                var Yt = B(Ft).replace(tt, function(qe, ce, ue) {
                  var Zt = [], Ce = ce.toLowerCase() == "m", Kt = ht[ce];
                  return ue.replace(L, function(Ae) {
                    Ce && Zt.length == 2 && (Kt += Zt + ht[ce == "m" ? "l" : "L"], Zt = []), Zt.push(P(Ae * X));
                  }), Kt + Zt;
                });
                return Yt;
              }
              var he, $t, ve = ae(Ft);
              Yt = [];
              for (var le = 0, be = ve.length; le < be; le++) {
                he = ve[le], ($t = ve[le][0].toLowerCase()) == "z" && ($t = "x");
                for (var Qt = 1, Nt = he.length; Qt < Nt; Qt++)
                  $t += P(he[Qt] * X) + (Qt != Nt - 1 ? "," : Y);
                Yt.push($t);
              }
              return Yt.join(K);
            }(~B(y.path).toLowerCase().indexOf("r") ? h._pathToAbsolute(y.path) : y.path), o._.dirty = 1, o.type == "image" && (o._.fillpos = [y.x, y.y], o._.fillsize = [y.width, y.height], rt(o, 1, 1, 0, 0, 0))), "transform" in s && o.transform(s.transform), M) {
              var Z = +y.cx, it = +y.cy, ft = +y.rx || +y.r || 0, yt = +y.ry || +y.r || 0;
              u.path = h.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", P((Z - ft) * X), P((it - yt) * X), P((Z + ft) * X), P((it + yt) * X), P(Z * X)), o._.dirty = 1;
            }
            if ("clip-rect" in s) {
              var pt = B(s["clip-rect"]).split(wt);
              if (pt.length == 4) {
                pt[2] = +pt[2] + +pt[0], pt[3] = +pt[3] + +pt[1];
                var kt = u.clipRect || h._g.doc.createElement("div"), Bt = kt.style;
                Bt.clip = h.format("rect({1}px {2}px {3}px {0}px)", pt), u.clipRect || (Bt.position = "absolute", Bt.top = 0, Bt.left = 0, Bt.width = o.paper.width + "px", Bt.height = o.paper.height + "px", u.parentNode.insertBefore(kt, u), kt.appendChild(u), u.clipRect = kt);
              }
              s["clip-rect"] || u.clipRect && (u.clipRect.style.clip = "auto");
            }
            if (o.textpath) {
              var bt = o.textpath.style;
              s.font && (bt.font = s.font), s["font-family"] && (bt.fontFamily = '"' + s["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, Y) + '"'), s["font-size"] && (bt.fontSize = s["font-size"]), s["font-weight"] && (bt.fontWeight = s["font-weight"]), s["font-style"] && (bt.fontStyle = s["font-style"]);
            }
            if ("arrow-start" in s && xt(C, s["arrow-start"]), "arrow-end" in s && xt(C, s["arrow-end"], 1), s.opacity != null || s.fill != null || s.src != null || s.stroke != null || s["stroke-width"] != null || s["stroke-opacity"] != null || s["fill-opacity"] != null || s["stroke-dasharray"] != null || s["stroke-miterlimit"] != null || s["stroke-linejoin"] != null || s["stroke-linecap"] != null) {
              var at = u.getElementsByTagName("fill");
              if (!(at = at && at[0]) && (at = et("fill")), o.type == "image" && s.src && (at.src = s.src), s.fill && (at.on = true), at.on != null && s.fill != "none" && s.fill !== null || (at.on = false), at.on && s.fill) {
                var St = B(s.fill).match(h._ISURL);
                if (St) {
                  at.parentNode == u && u.removeChild(at), at.rotate = true, at.src = St[1], at.type = "tile";
                  var Mt = o.getBBox(1);
                  at.position = Mt.x + K + Mt.y, o._.fillpos = [Mt.x, Mt.y], h._preload(St[1], function() {
                    o._.fillsize = [this.offsetWidth, this.offsetHeight];
                  });
                } else
                  at.color = h.getRGB(s.fill).hex, at.src = Y, at.type = "solid", h.getRGB(s.fill).error && (C.type in { circle: 1, ellipse: 1 } || B(s.fill).charAt() != "r") && Et(C, s.fill, at) && (y.fill = "none", y.gradient = s.fill, at.rotate = false);
              }
              if ("fill-opacity" in s || "opacity" in s) {
                var Pt = ((+y["fill-opacity"] + 1 || 2) - 1) * ((+y.opacity + 1 || 2) - 1) * ((+h.getRGB(s.fill).o + 1 || 2) - 1);
                Pt = Q(vt(Pt, 0), 1), at.opacity = Pt, at.src && (at.color = "none");
              }
              u.appendChild(at);
              var Ct = u.getElementsByTagName("stroke") && u.getElementsByTagName("stroke")[0], It = false;
              !Ct && (It = Ct = et("stroke")), (s.stroke && s.stroke != "none" || s["stroke-width"] || s["stroke-opacity"] != null || s["stroke-dasharray"] || s["stroke-miterlimit"] || s["stroke-linejoin"] || s["stroke-linecap"]) && (Ct.on = true), (s.stroke == "none" || s.stroke === null || Ct.on == null || s.stroke == 0 || s["stroke-width"] == 0) && (Ct.on = false);
              var Xt = h.getRGB(s.stroke);
              Ct.on && s.stroke && (Ct.color = Xt.hex), Pt = ((+y["stroke-opacity"] + 1 || 2) - 1) * ((+y.opacity + 1 || 2) - 1) * ((+Xt.o + 1 || 2) - 1);
              var Gt = 0.75 * (q(s["stroke-width"]) || 1);
              if (Pt = Q(vt(Pt, 0), 1), s["stroke-width"] == null && (Gt = y["stroke-width"]), s["stroke-width"] && (Ct.weight = Gt), Gt && Gt < 1 && (Pt *= Gt) && (Ct.weight = 1), Ct.opacity = Pt, s["stroke-linejoin"] && (Ct.joinstyle = s["stroke-linejoin"] || "miter"), Ct.miterlimit = s["stroke-miterlimit"] || 8, s["stroke-linecap"] && (Ct.endcap = s["stroke-linecap"] == "butt" ? "flat" : s["stroke-linecap"] == "square" ? "square" : "round"), "stroke-dasharray" in s) {
                var ye = { "-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot" };
                Ct.dashstyle = ye[a](s["stroke-dasharray"]) ? ye[s["stroke-dasharray"]] : Y;
              }
              It && u.appendChild(Ct);
            }
            if (C.type == "text") {
              C.paper.canvas.style.display = Y;
              var Ut = C.paper.span, ne = y.font && y.font.match(/\d+(?:\.\d*)?(?=px)/);
              _ = Ut.style, y.font && (_.font = y.font), y["font-family"] && (_.fontFamily = y["font-family"]), y["font-weight"] && (_.fontWeight = y["font-weight"]), y["font-style"] && (_.fontStyle = y["font-style"]), ne = q(y["font-size"] || ne && ne[0]) || 10, _.fontSize = 100 * ne + "px", C.textpath.string && (Ut.innerHTML = B(C.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
              var se = Ut.getBoundingClientRect();
              C.W = y.w = (se.right - se.left) / 100, C.H = y.h = (se.bottom - se.top) / 100, C.X = y.x, C.Y = y.y + C.H / 2, ("x" in s || "y" in s) && (C.path.v = h.format("m{0},{1}l{2},{1}", P(y.x * X), P(y.y * X), P(y.x * X) + 1));
              for (var me = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], oe = 0, Be = me.length; oe < Be; oe++)
                if (me[oe] in s) {
                  C._.dirty = 1;
                  break;
                }
              switch (y["text-anchor"]) {
                case "start":
                  C.textpath.style["v-text-align"] = "left", C.bbx = C.W / 2;
                  break;
                case "end":
                  C.textpath.style["v-text-align"] = "right", C.bbx = -C.W / 2;
                  break;
                default:
                  C.textpath.style["v-text-align"] = "center", C.bbx = 0;
              }
              C.textpath.style["v-text-kern"] = true;
            }
          }, Et = function(o, s, u) {
            o.attrs = o.attrs || {}, o.attrs;
            var y = Math.pow, _ = "linear", b = ".5 .5";
            if (o.attrs.gradient = s, s = (s = B(s).replace(h._radial_gradient, function(ft, yt, pt) {
              return _ = "radial", yt && pt && (yt = q(yt), pt = q(pt), y(yt - 0.5, 2) + y(pt - 0.5, 2) > 0.25 && (pt = ot.sqrt(0.25 - y(yt - 0.5, 2)) * (2 * (pt > 0.5) - 1) + 0.5), b = yt + K + pt), Y;
            })).split(/\s*\-\s*/), _ == "linear") {
              var M = s.shift();
              if (M = -q(M), isNaN(M))
                return null;
            }
            var C = h._parseDots(s);
            if (!C)
              return null;
            if (o = o.shape || o.node, C.length) {
              o.removeChild(u), u.on = true, u.method = "none", u.color = C[0].color, u.color2 = C[C.length - 1].color;
              for (var $ = [], Z = 0, it = C.length; Z < it; Z++)
                C[Z].offset && $.push(C[Z].offset + K + C[Z].color);
              u.colors = $.length ? $.join() : "0% " + u.color, _ == "radial" ? (u.type = "gradientTitle", u.focus = "100%", u.focussize = "0 0", u.focusposition = b, u.angle = 0) : (u.type = "gradient", u.angle = (270 - M) % 360), o.appendChild(u);
            }
            return 1;
          }, ut = function(o, s) {
            this[0] = this.node = o, o.raphael = true, this.id = h._oid++, o.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = s, this.matrix = h.matrix(), this._ = { transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1 }, !s.bottom && (s.bottom = this), this.prev = s.top, s.top && (s.top.next = this), s.top = this, this.next = null;
          }, dt = h.el;
          ut.prototype = dt, dt.constructor = ut, dt.transform = function(o) {
            if (o == null)
              return this._.transform;
            var s, u = this.paper._viewBoxShift, y = u ? "s" + [u.scale, u.scale] + "-1-1t" + [u.dx, u.dy] : Y;
            u && (s = o = B(o).replace(/\.{3}|\u2026/g, this._.transform || Y)), h._extractTransform(this, y + o);
            var _, b = this.matrix.clone(), M = this.skew, C = this.node, $ = ~B(this.attrs.fill).indexOf("-"), Z = !B(this.attrs.fill).indexOf("url(");
            if (b.translate(1, 1), Z || $ || this.type == "image")
              if (M.matrix = "1 0 0 1", M.offset = "0 0", _ = b.split(), $ && _.noRotation || !_.isSimple) {
                C.style.filter = b.toFilter();
                var it = this.getBBox(), ft = this.getBBox(1), yt = it.x - ft.x, pt = it.y - ft.y;
                C.coordorigin = yt * -X + K + pt * -X, rt(this, 1, 1, yt, pt, 0);
              } else
                C.style.filter = Y, rt(this, _.scalex, _.scaley, _.dx, _.dy, _.rotate);
            else
              C.style.filter = Y, M.matrix = B(b), M.offset = b.offset();
            return s !== null && (this._.transform = s, h._extractTransform(this, s)), this;
          }, dt.rotate = function(o, s, u) {
            if (this.removed)
              return this;
            if (o != null) {
              if ((o = B(o).split(wt)).length - 1 && (s = q(o[1]), u = q(o[2])), o = q(o[0]), u == null && (s = u), s == null || u == null) {
                var y = this.getBBox(1);
                s = y.x + y.width / 2, u = y.y + y.height / 2;
              }
              return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", o, s, u]])), this;
            }
          }, dt.translate = function(o, s) {
            return this.removed ? this : ((o = B(o).split(wt)).length - 1 && (s = q(o[1])), o = q(o[0]) || 0, s = +s || 0, this._.bbox && (this._.bbox.x += o, this._.bbox.y += s), this.transform(this._.transform.concat([["t", o, s]])), this);
          }, dt.scale = function(o, s, u, y) {
            if (this.removed)
              return this;
            if ((o = B(o).split(wt)).length - 1 && (s = q(o[1]), u = q(o[2]), y = q(o[3]), isNaN(u) && (u = null), isNaN(y) && (y = null)), o = q(o[0]), s == null && (s = o), y == null && (u = y), u == null || y == null)
              var _ = this.getBBox(1);
            return u = u ?? _.x + _.width / 2, y = y ?? _.y + _.height / 2, this.transform(this._.transform.concat([["s", o, s, u, y]])), this._.dirtyT = 1, this;
          }, dt.hide = function() {
            return !this.removed && (this.node.style.display = "none"), this;
          }, dt.show = function() {
            return !this.removed && (this.node.style.display = Y), this;
          }, dt.auxGetBBox = h.el.getBBox, dt.getBBox = function() {
            var o = this.auxGetBBox();
            if (this.paper && this.paper._viewBoxShift) {
              var s = {}, u = 1 / this.paper._viewBoxShift.scale;
              return s.x = o.x - this.paper._viewBoxShift.dx, s.x *= u, s.y = o.y - this.paper._viewBoxShift.dy, s.y *= u, s.width = o.width * u, s.height = o.height * u, s.x2 = s.x + s.width, s.y2 = s.y + s.height, s;
            }
            return o;
          }, dt._getBBox = function() {
            return this.removed ? {} : { x: this.X + (this.bbx || 0) - this.W / 2, y: this.Y - this.H, width: this.W, height: this.H };
          }, dt.remove = function() {
            if (!this.removed && this.node.parentNode) {
              for (var o in this.paper.__set__ && this.paper.__set__.exclude(this), h.eve.unbind("raphael.*.*." + this.id), h._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape), this)
                this[o] = typeof this[o] == "function" ? h._removedFactory(o) : null;
              this.removed = true;
            }
          }, dt.attr = function(o, s) {
            if (this.removed)
              return this;
            if (o == null) {
              var u = {};
              for (var y in this.attrs)
                this.attrs[a](y) && (u[y] = this.attrs[y]);
              return u.gradient && u.fill == "none" && (u.fill = u.gradient) && delete u.gradient, u.transform = this._.transform, u;
            }
            if (s == null && h.is(o, "string")) {
              if (o == "fill" && this.attrs.fill == "none" && this.attrs.gradient)
                return this.attrs.gradient;
              for (var _ = o.split(wt), b = {}, M = 0, C = _.length; M < C; M++)
                (o = _[M]) in this.attrs ? b[o] = this.attrs[o] : h.is(this.paper.customAttributes[o], "function") ? b[o] = this.paper.customAttributes[o].def : b[o] = h._availableAttrs[o];
              return C - 1 ? b : b[_[0]];
            }
            if (this.attrs && s == null && h.is(o, "array")) {
              for (b = {}, M = 0, C = o.length; M < C; M++)
                b[o[M]] = this.attr(o[M]);
              return b;
            }
            var $;
            for (var Z in s != null && (($ = {})[o] = s), s == null && h.is(o, "object") && ($ = o), $)
              At("raphael.attr." + Z + "." + this.id, this, $[Z]);
            if ($) {
              for (Z in this.paper.customAttributes)
                if (this.paper.customAttributes[a](Z) && $[a](Z) && h.is(this.paper.customAttributes[Z], "function")) {
                  var it = this.paper.customAttributes[Z].apply(this, [].concat($[Z]));
                  for (var ft in this.attrs[Z] = $[Z], it)
                    it[a](ft) && ($[ft] = it[ft]);
                }
              $.text && this.type == "text" && (this.textpath.string = $.text), Lt(this, $);
            }
            return this;
          }, dt.toFront = function() {
            return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && h._tofront(this, this.paper), this;
          }, dt.toBack = function() {
            return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), h._toback(this, this.paper)), this);
          }, dt.insertAfter = function(o) {
            return this.removed ? this : (o.constructor == h.st.constructor && (o = o[o.length - 1]), o.node.nextSibling ? o.node.parentNode.insertBefore(this.node, o.node.nextSibling) : o.node.parentNode.appendChild(this.node), h._insertafter(this, o, this.paper), this);
          }, dt.insertBefore = function(o) {
            return this.removed ? this : (o.constructor == h.st.constructor && (o = o[0]), o.node.parentNode.insertBefore(this.node, o.node), h._insertbefore(this, o, this.paper), this);
          }, dt.blur = function(o) {
            var s = this.node.runtimeStyle, u = s.filter;
            return u = u.replace(D, Y), +o != 0 ? (this.attrs.blur = o, s.filter = u + K + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+o || 1.5) + ")", s.margin = h.format("-{0}px 0 0 -{0}px", P(+o || 1.5))) : (s.filter = u, s.margin = 0, delete this.attrs.blur), this;
          }, h._engine.path = function(o, s) {
            var u = et("shape");
            u.style.cssText = J, u.coordsize = X + K + X, u.coordorigin = s.coordorigin;
            var y = new ut(u, s), _ = { fill: "none", stroke: "#000" };
            o && (_.path = o), y.type = "path", y.path = [], y.Path = Y, Lt(y, _), s.canvas && s.canvas.appendChild(u);
            var b = et("skew");
            return b.on = true, u.appendChild(b), y.skew = b, y.transform(Y), y;
          }, h._engine.rect = function(o, s, u, y, _, b) {
            var M = h._rectPath(s, u, y, _, b), C = o.path(M), $ = C.attrs;
            return C.X = $.x = s, C.Y = $.y = u, C.W = $.width = y, C.H = $.height = _, $.r = b, $.path = M, C.type = "rect", C;
          }, h._engine.ellipse = function(o, s, u, y, _) {
            var b = o.path();
            return b.attrs, b.X = s - y, b.Y = u - _, b.W = 2 * y, b.H = 2 * _, b.type = "ellipse", Lt(b, { cx: s, cy: u, rx: y, ry: _ }), b;
          }, h._engine.circle = function(o, s, u, y) {
            var _ = o.path();
            return _.attrs, _.X = s - y, _.Y = u - y, _.W = _.H = 2 * y, _.type = "circle", Lt(_, { cx: s, cy: u, r: y }), _;
          }, h._engine.image = function(o, s, u, y, _, b) {
            var M = h._rectPath(u, y, _, b), C = o.path(M).attr({ stroke: "none" }), $ = C.attrs, Z = C.node, it = Z.getElementsByTagName("fill")[0];
            return $.src = s, C.X = $.x = u, C.Y = $.y = y, C.W = $.width = _, C.H = $.height = b, $.path = M, C.type = "image", it.parentNode == Z && Z.removeChild(it), it.rotate = true, it.src = s, it.type = "tile", C._.fillpos = [u, y], C._.fillsize = [_, b], Z.appendChild(it), rt(C, 1, 1, 0, 0, 0), C;
          }, h._engine.text = function(o, s, u, y) {
            var _ = et("shape"), b = et("path"), M = et("textpath");
            s = s || 0, u = u || 0, y = y || "", b.v = h.format("m{0},{1}l{2},{1}", P(s * X), P(u * X), P(s * X) + 1), b.textpathok = true, M.string = B(y), M.on = true, _.style.cssText = J, _.coordsize = X + K + X, _.coordorigin = "0 0";
            var C = new ut(_, o), $ = { fill: "#000", stroke: "none", font: h._availableAttrs.font, text: y };
            C.shape = _, C.path = b, C.textpath = M, C.type = "text", C.attrs.text = B(y), C.attrs.x = s, C.attrs.y = u, C.attrs.w = 1, C.attrs.h = 1, Lt(C, $), _.appendChild(M), _.appendChild(b), o.canvas.appendChild(_);
            var Z = et("skew");
            return Z.on = true, _.appendChild(Z), C.skew = Z, C.transform(Y), C;
          }, h._engine.setSize = function(o, s) {
            var u = this.canvas.style;
            return this.width = o, this.height = s, o == +o && (o += "px"), s == +s && (s += "px"), u.width = o, u.height = s, u.clip = "rect(0 " + o + " " + s + " 0)", this._viewBox && h._engine.setViewBox.apply(this, this._viewBox), this;
          }, h._engine.setViewBox = function(o, s, u, y, _) {
            h.eve("raphael.setViewBox", this, this._viewBox, [o, s, u, y, _]);
            var b, M, C = this.getSize(), $ = C.width, Z = C.height;
            return _ && (u * (b = Z / y) < $ && (o -= ($ - u * b) / 2 / b), y * (M = $ / u) < Z && (s -= (Z - y * M) / 2 / M)), this._viewBox = [o, s, u, y, !!_], this._viewBoxShift = { dx: -o, dy: -s, scale: C }, this.forEach(function(it) {
              it.transform("...");
            }), this;
          }, h._engine.initWin = function(o) {
            var s = o.document;
            s.styleSheets.length < 31 ? s.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : s.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
            try {
              !s.namespaces.rvml && s.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), et = function(u) {
                return s.createElement("<rvml:" + u + ' class="rvml">');
              };
            } catch {
              et = function(y) {
                return s.createElement("<" + y + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
              };
            }
          }, h._engine.initWin(h._g.win), h._engine.create = function() {
            var o = h._getContainer.apply(0, arguments), s = o.container, u = o.height, y = o.width, _ = o.x, b = o.y;
            if (!s)
              throw new Error("VML container not found.");
            var M = new h._Paper(), C = M.canvas = h._g.doc.createElement("div"), $ = C.style;
            return _ = _ || 0, b = b || 0, y = y || 512, u = u || 342, M.width = y, M.height = u, y == +y && (y += "px"), u == +u && (u += "px"), M.coordsize = 216e5 + K + 216e5, M.coordorigin = "0 0", M.span = h._g.doc.createElement("span"), M.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", C.appendChild(M.span), $.cssText = h.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", y, u), s == 1 ? (h._g.doc.body.appendChild(C), $.left = _ + "px", $.top = b + "px", $.position = "absolute") : s.firstChild ? s.insertBefore(C, s.firstChild) : s.appendChild(C), M.renderfix = function() {
            }, M;
          }, h.prototype.clear = function() {
            h.eve("raphael.clear", this), this.canvas.innerHTML = Y, this.span = h._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null;
          }, h.prototype.remove = function() {
            for (var o in h.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas), this)
              this[o] = typeof this[o] == "function" ? h._removedFactory(o) : null;
            return true;
          };
          var Tt = h.st;
          for (var c in dt)
            dt[a](c) && !Tt[a](c) && (Tt[c] = function(o) {
              return function() {
                var s = arguments;
                return this.forEach(function(u) {
                  u[o].apply(u, s);
                });
              };
            }(c));
        }
      }.apply(w, k)) === void 0 || (g.exports = x);
    }]);
  });
})(wi);
var ki = _i(De);
const Li = { x: 0, y: 0, "text-margin": 10, "font-size": 14, "font-color": "black", "line-width": 3, "line-length": 50, "line-color": "black", "element-color": "black", fill: "white", "yes-text": "yes", "no-text": "no", "arrow-end": "block", class: "flowchart", scale: 1, symbols: { start: {}, end: {}, condition: {}, inputoutput: {}, operation: {}, subroutine: {}, parallel: {} } }, Bi = (G, m, g, w, O, k, x, h) => {
  const a = { x: null, y: null, onLine1: false, onLine2: false }, B = (h - k) * (g - G) - (x - O) * (w - m);
  if (B === 0)
    return a;
  const q = m - k, ot = G - O, P = (x - O) * q - (h - k) * ot, vt = (g - G) * q - (w - m) * ot, Q = P / B, H = vt / B;
  return a.x = G + Q * (g - G), a.y = m + Q * (w - m), Q > 0 && Q < 1 && (a.onLine1 = true), H > 0 && H < 1 && (a.onLine2 = true), a;
}, ui = (G, m, g) => {
  let w = "M{0},{1}";
  for (let B = 2; B < 2 * g.length + 2; B += 2)
    w += ` L{${B}},{${B + 1}}`;
  const O = [m.x, m.y];
  for (let B = 0; B < g.length; B++)
    O.push(g[B].x, g[B].y);
  const k = G.paper.path(w, O);
  k.attr("stroke", G.options["element-color"]), k.attr("stroke-width", G.options["line-width"]);
  const x = G.options.font, h = G.options["font-family"], a = G.options["font-weight"];
  return x && k.attr({ font: x }), h && k.attr({ "font-family": h }), a && k.attr({ "font-weight": a }), k;
}, zt = (G, m, g, w) => {
  let O = "M{0},{1}";
  for (let q = 2; q < 2 * g.length + 2; q += 2)
    O += ` L{${q}},{${q + 1}}`;
  const k = [m.x, m.y];
  for (let q = 0; q < g.length; q++)
    k.push(g[q].x, g[q].y);
  const x = G.paper.path(O, k);
  x.attr({ stroke: G.options["line-color"], "stroke-width": G.options["line-width"], "arrow-end": G.options["arrow-end"] });
  const h = G.options.font, a = G.options["font-family"], B = G.options["font-weight"];
  if (h && x.attr({ font: h }), a && x.attr({ "font-family": a }), B && x.attr({ "font-weight": B }), w) {
    const q = G.paper.text(0, 0, w);
    let ot = "start", P = false;
    const vt = g[0];
    m.y === vt.y && (P = true);
    let Q = 0, H = 0;
    Q = m.x, H = m.y, P ? (m.x > vt.x ? (Q -= G.options["text-margin"] / 2, ot = "end") : Q += G.options["text-margin"] / 2, H -= G.options["text-margin"]) : (Q += G.options["text-margin"] / 2, H += G.options["text-margin"], m.y > vt.y && (H -= G.options["text-margin"] * 2)), q.attr({ "text-anchor": ot, "font-size": G.options["font-size"], fill: G.options["font-color"], x: Q, y: H }), h && q.attr({ font: h }), a && q.attr({ "font-family": a }), B && q.attr({ "font-weight": B });
  }
  return x;
};
class re {
  constructor(m, g, w) {
    this.leftLines = [], this.rightLines = [], this.topLines = [], this.bottomLines = [], this.chart = m, this.group = this.chart.paper.set(), this.symbol = w, this.connectedTo = [], this.symbolType = g.symbolType, this.flowstate = g.flowstate || "future", this.lineStyle = g.lineStyle ?? {}, this.key = g.key ?? "", this.next_direction = g.next && g.direction_next ? g.direction_next : void 0, this.text = this.chart.paper.text(0, 0, g.text || ""), g.key && (this.text.node.id = `${g.key}t`), this.text.node.setAttribute("class", `${this.getAttr("class")}t`), this.text.attr({ "text-anchor": "start", x: this.getAttr("text-margin"), fill: this.getAttr("font-color"), "font-size": this.getAttr("font-size") });
    const O = this.getAttr("font"), k = this.getAttr("font-family"), x = this.getAttr("font-weight");
    O && this.text.attr({ font: O }), k && this.text.attr({ "font-family": k }), x && this.text.attr({ "font-weight": x }), g.link && this.text.attr("href", g.link), g.target && this.text.attr("target", g.target), g.function && (this.text.attr({ cursor: "pointer" }), this.text.node.addEventListener("click", (a) => {
      window[g.function](a, g);
    }, false));
    const h = this.getAttr("maxWidth");
    if (h) {
      const a = g.text.split(" ");
      let B = "";
      for (let q = 0; q < a.length; q++) {
        const ot = a[q];
        this.text.attr("text", B + " " + ot), this.text.getBBox().width > h ? B += `
${ot}` : B += ` ${ot}`;
      }
      this.text.attr("text", B.substring(1));
    }
    if (this.group.push(this.text), w) {
      const a = this.getAttr("text-margin");
      w.attr({ fill: this.getAttr("fill"), stroke: this.getAttr("element-color"), "stroke-width": this.getAttr("line-width"), width: this.text.getBBox().width + 2 * a, height: this.text.getBBox().height + 2 * a }), g.link && w.attr("href", g.link), g.target && w.attr("target", g.target), w.node.setAttribute("class", this.getAttr("class")), g.function && (w.node.addEventListener("click", (B) => {
        window[g.function](B, g);
      }, false), w.attr({ cursor: "pointer" })), g.key && (w.node.id = g.key), this.group.push(w), w.insertBefore(this.text), this.text.attr({ y: w.getBBox().height / 2 }), this.initialize();
    }
  }
  getAttr(m) {
    if (!this.chart)
      return;
    const g = this.chart.options ? this.chart.options[m] : void 0, w = this.chart.options.symbols ? this.chart.options.symbols[this.symbolType][m] : void 0;
    if (this.chart.options.flowstate && this.chart.options.flowstate[this.flowstate]) {
      const O = this.chart.options.flowstate[this.flowstate][m];
      if (O)
        return O;
    }
    return w || g;
  }
  initialize() {
    this.group.transform(`t${this.getAttr("line-width")},${this.getAttr("line-width")}`), this.width = this.group.getBBox().width, this.height = this.group.getBBox().height;
  }
  getCenter() {
    return { x: this.getX() + this.width / 2, y: this.getY() + this.height / 2 };
  }
  getX() {
    return this.group.getBBox().x;
  }
  getY() {
    return this.group.getBBox().y;
  }
  shiftX(m) {
    this.group.transform(`t${this.getX() + m},${this.getY()}`);
  }
  setX(m) {
    this.group.transform(`t${m},${this.getY()}`);
  }
  shiftY(m) {
    this.group.transform(`$t${this.getX()},${this.getY() + m}`);
  }
  setY(m) {
    this.group.transform(`t${this.getX()},${m}`);
  }
  getTop() {
    const m = this.getY();
    return { x: this.getX() + this.width / 2, y: m };
  }
  getBottom() {
    const m = this.getY() + this.height;
    return { x: this.getX() + this.width / 2, y: m };
  }
  getLeft() {
    const m = this.getY() + this.group.getBBox().height / 2;
    return { x: this.getX(), y: m };
  }
  getRight() {
    const m = this.getY() + this.group.getBBox().height / 2;
    return { x: this.getX() + this.group.getBBox().width, y: m };
  }
  render() {
    if (this.next) {
      const m = this.getAttr("line-length");
      if (this.next_direction === "right") {
        const g = this.getRight();
        if (!this.next.isPositioned) {
          this.next.setY(g.y - this.next.height / 2), this.next.shiftX(this.group.getBBox().x + this.width + m);
          const w = () => {
            let O = false, k;
            for (let x = 0; x < this.chart.symbols.length; x++) {
              k = this.chart.symbols[x];
              const h = Math.abs(k.getCenter().x - this.next.getCenter().x);
              if (k.getCenter().y > this.next.getCenter().y && h <= this.next.width / 2) {
                O = true;
                break;
              }
            }
            if (O) {
              if (this.next.symbolType === "end")
                return;
              this.next.setX(k.getX() + k.width + m), w();
            }
          };
          w(), this.next.isPositioned = true, this.next.render();
        }
      } else if (this.next_direction === "left") {
        const g = this.getLeft();
        if (!this.next.isPositioned) {
          this.next.setY(g.y - this.next.height / 2), this.next.shiftX(-(this.group.getBBox().x + this.width + m));
          const w = () => {
            let O = false, k;
            for (let x = 0; x < this.chart.symbols.length; x++) {
              k = this.chart.symbols[x];
              const h = Math.abs(k.getCenter().x - this.next.getCenter().x);
              if (k.getCenter().y > this.next.getCenter().y && h <= this.next.width / 2) {
                O = true;
                break;
              }
            }
            if (O) {
              if (this.next.symbolType === "end")
                return;
              this.next.setX(k.getX() + k.width + m), w();
            }
          };
          w(), this.next.isPositioned = true, this.next.render();
        }
      } else {
        const g = this.getBottom();
        this.next.isPositioned || (this.next.shiftY(this.getY() + this.height + m), this.next.setX(g.x - this.next.width / 2), this.next.isPositioned = true, this.next.render());
      }
    }
  }
  renderLines() {
    this.next && (this.next_direction ? this.drawLineTo(this.next, this.getAttr("arrow-text") || "", this.next_direction) : this.drawLineTo(this.next, this.getAttr("arrow-text") || ""));
  }
  drawLineTo(m, g, w) {
    this.connectedTo.indexOf(m) < 0 && this.connectedTo.push(m);
    const O = this.getCenter().x, k = this.getCenter().y, x = this.getRight(), h = this.getBottom(), a = this.getTop(), B = this.getLeft(), q = m.getCenter().x, ot = m.getCenter().y, P = m.getTop(), vt = m.getRight(), Q = m.getLeft(), H = O === q, wt = k === ot, At = k < ot, K = k > ot || this === m, Y = O > q, ht = O < q;
    let tt = 0, D;
    const L = this.getAttr("line-length"), J = this.getAttr("line-width");
    if ((!w || w === "bottom") && H && At) {
      if (m.topLines.length === 0 && this.bottomLines.length === 0)
        D = zt(this.chart, h, [P], g);
      else {
        const X = Math.max(m.topLines.length, this.bottomLines.length) * 10;
        D = zt(this.chart, h, [{ x: P.x, y: P.y - X }, { x: P.x, y: P.y }], g);
      }
      this.bottomLines.push(D), m.topLines.push(D), this.bottomStart = true, m.topEnd = true, tt = h.x;
    } else if ((!w || w === "right") && wt && ht) {
      if (m.leftLines.length === 0 && this.rightLines.length === 0)
        D = zt(this.chart, x, [Q], g);
      else {
        const X = Math.max(m.leftLines.length, this.rightLines.length) * 10;
        D = zt(this.chart, x, [{ x: x.x, y: x.y - X }, { x: x.x, y: Q.y - X }, { x: Q.x, y: Q.y - X }, { x: Q.x, y: Q.y }], g);
      }
      this.rightLines.push(D), m.leftLines.push(D), this.rightStart = true, m.leftEnd = true, tt = Q.x;
    } else if ((!w || w === "left") && wt && Y) {
      if (m.rightLines.length === 0 && this.leftLines.length === 0)
        D = zt(this.chart, B, [vt], g);
      else {
        const X = Math.max(m.rightLines.length, this.leftLines.length) * 10;
        D = zt(this.chart, x, [{ x: x.x, y: x.y - X }, { x: x.x, y: vt.y - X }, { x: vt.x, y: vt.y - X }, { x: vt.x, y: vt.y }], g);
      }
      this.leftLines.push(D), m.rightLines.push(D), this.leftStart = true, m.rightEnd = true, tt = vt.x;
    } else if ((!w || w === "right") && H && K) {
      const X = Math.max(m.topLines.length, this.rightLines.length) * 10;
      D = zt(this.chart, x, [{ x: x.x + L / 2, y: x.y - X }, { x: x.x + L / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.rightLines.push(D), m.topLines.push(D), this.rightStart = true, m.topEnd = true, tt = x.x + L / 2;
    } else if ((!w || w === "right") && H && At) {
      const X = Math.max(m.topLines.length, this.rightLines.length) * 10;
      D = zt(this.chart, x, [{ x: x.x + L / 2, y: x.y - X }, { x: x.x + L / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.rightLines.push(D), m.topLines.push(D), this.rightStart = true, m.topEnd = true, tt = x.x + L / 2;
    } else if ((!w || w === "bottom") && Y) {
      const X = Math.max(m.topLines.length, this.bottomLines.length) * 10;
      this.leftEnd && K ? D = zt(this.chart, h, [{ x: h.x, y: h.y + L / 2 - X }, { x: h.x + (h.x - P.x) / 2, y: h.y + L / 2 - X }, { x: h.x + (h.x - P.x) / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g) : D = zt(this.chart, h, [{ x: h.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.bottomLines.push(D), m.topLines.push(D), this.bottomStart = true, m.topEnd = true, tt = h.x + (h.x - P.x) / 2;
    } else if ((!w || w === "bottom") && ht && At) {
      const X = Math.max(m.topLines.length, this.bottomLines.length) * 10;
      D = zt(this.chart, h, [{ x: h.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.bottomLines.push(D), m.topLines.push(D), this.bottomStart = true, m.topEnd = true, tt = h.x, P.x > tt && (tt = P.x);
    } else if ((!w || w === "bottom") && ht) {
      const X = Math.max(m.topLines.length, this.bottomLines.length) * 10;
      D = zt(this.chart, h, [{ x: h.x, y: h.y + L / 2 - X }, { x: h.x + (h.x - P.x) / 2, y: h.y + L / 2 - X }, { x: h.x + (h.x - P.x) / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.bottomLines.push(D), m.topLines.push(D), this.bottomStart = true, m.topEnd = true, tt = h.x + (h.x - P.x) / 2;
    } else if (w && w === "right" && Y) {
      const X = Math.max(m.topLines.length, this.rightLines.length) * 10;
      D = zt(this.chart, x, [{ x: x.x + L / 2, y: x.y }, { x: x.x + L / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.rightLines.push(D), m.topLines.push(D), this.rightStart = true, m.topEnd = true, tt = x.x + L / 2;
    } else if (w && w === "right" && ht) {
      const X = Math.max(m.topLines.length, this.rightLines.length) * 10;
      D = zt(this.chart, x, [{ x: P.x, y: x.y - X }, { x: P.x, y: P.y - X }], g), this.rightLines.push(D), m.topLines.push(D), this.rightStart = true, m.topEnd = true, tt = x.x + L / 2;
    } else if (w && w === "bottom" && H && K) {
      const X = Math.max(m.topLines.length, this.bottomLines.length) * 10;
      D = zt(this.chart, h, [{ x: h.x, y: h.y + L / 2 - X }, { x: x.x + L / 2, y: h.y + L / 2 - X }, { x: x.x + L / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.bottomLines.push(D), m.topLines.push(D), this.bottomStart = true, m.topEnd = true, tt = h.x + L / 2;
    } else if (w === "left" && H && K) {
      let X = B.x - L / 2;
      Q.x < B.x && (X = Q.x - L / 2);
      const gt = Math.max(m.topLines.length, this.leftLines.length) * 10;
      D = zt(this.chart, B, [{ x: X, y: B.y - gt }, { x: X, y: P.y - L / 2 - gt }, { x: P.x, y: P.y - L / 2 - gt }, { x: P.x, y: P.y }], g), this.leftLines.push(D), m.topLines.push(D), this.leftStart = true, m.topEnd = true, tt = B.x;
    } else if (w === "left") {
      const X = Math.max(m.topLines.length, this.leftLines.length) * 10;
      D = zt(this.chart, B, [{ x: P.x + (B.x - P.x) / 2, y: B.y }, { x: P.x + (B.x - P.x) / 2, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.leftLines.push(D), m.topLines.push(D), this.leftStart = true, m.topEnd = true, tt = B.x;
    } else if (w === "top") {
      const X = Math.max(m.topLines.length, this.topLines.length) * 10;
      D = zt(this.chart, a, [{ x: a.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y - L / 2 - X }, { x: P.x, y: P.y }], g), this.topLines.push(D), m.topLines.push(D), this.topStart = true, m.topEnd = true, tt = a.x;
    }
    if (this.lineStyle[m.key] && D && D.attr(this.lineStyle[m.key]), D) {
      for (let X = 0, gt = this.chart.lines.length; X < gt; X++) {
        const nt = this.chart.lines[X].attr("path"), U = D.attr("path");
        for (let rt = 0, et = nt.length - 1; rt < et; rt++) {
          const xt = [];
          xt.push(["M", nt[rt][1], nt[rt][2]]), xt.push(["L", nt[rt + 1][1], nt[rt + 1][2]]);
          const Lt = xt[0][1], Et = xt[0][2], ut = xt[1][1], dt = xt[1][2];
          for (let Tt = 0, c = U.length - 1; Tt < c; Tt++) {
            const o = [];
            o.push(["M", U[Tt][1], U[Tt][2]]), o.push(["L", U[Tt + 1][1], U[Tt + 1][2]]);
            const s = o[0][1], u = o[0][2], y = o[1][1], _ = o[1][2], b = Bi(Lt, Et, ut, dt, s, u, y, _);
            if (b.onLine1 && b.onLine2) {
              let M;
              u === _ ? s > y ? (M = ["L", b.x + J * 2, u], U.splice(Tt + 1, 0, M), M = ["C", b.x + J * 2, u, b.x, u - J * 4, b.x - J * 2, u], U.splice(Tt + 2, 0, M), D.attr("path", U)) : (M = ["L", b.x - J * 2, u], U.splice(Tt + 1, 0, M), M = ["C", b.x - J * 2, u, b.x, u - J * 4, b.x + J * 2, u], U.splice(Tt + 2, 0, M), D.attr("path", U)) : u > _ ? (M = ["L", s, b.y + J * 2], U.splice(Tt + 1, 0, M), M = ["C", s, b.y + J * 2, s + J * 4, b.y, s, b.y - J * 2], U.splice(Tt + 2, 0, M), D.attr("path", U)) : (M = ["L", s, b.y - J * 2], U.splice(Tt + 1, 0, M), M = ["C", s, b.y - J * 2, s + J * 4, b.y, s, b.y + J * 2], U.splice(Tt + 2, 0, M), D.attr("path", U)), Tt += 2;
            }
          }
        }
      }
      this.chart.lines.push(D), (this.chart.minXFromSymbols === void 0 || this.chart.minXFromSymbols > B.x) && (this.chart.minXFromSymbols = B.x);
    }
    (!this.chart.maxXFromLine || this.chart.maxXFromLine && tt > this.chart.maxXFromLine) && (this.chart.maxXFromLine = tt);
  }
}
class Pe extends re {
  constructor(m, g = {}) {
    super(m, g), this.yes_annotation = g.yes_annotation, this.no_annotation = g.no_annotation, this.textMargin = this.getAttr("text-margin"), this.params = g.params || {};
    let { direction_yes: w, direction_no: O } = g;
    !O && w === "right" ? O = "bottom" : !w && O === "bottom" && (w = "right"), this.yes_direction = w || "bottom", this.no_direction = O || "right", this.text.attr({ x: this.textMargin * 2 });
    let k = this.text.getBBox().width + 3 * this.textMargin;
    k += k / 2;
    let x = this.text.getBBox().height + 2 * this.textMargin;
    x += x / 2, x = Math.max(k * 0.5, x);
    const h = k / 4, a = x / 4;
    this.text.attr({ x: h + this.textMargin / 2 });
    const B = { x: h, y: a }, q = [{ x: h - k / 4, y: a + x / 4 }, { x: h - k / 4 + k / 2, y: a + x / 4 + x / 2 }, { x: h - k / 4 + k, y: a + x / 4 }, { x: h - k / 4 + k / 2, y: a + x / 4 - x / 2 }, { x: h - k / 4, y: a + x / 4 }], ot = ui(m, B, q);
    ot.attr({ stroke: this.getAttr("element-color"), "stroke-width": this.getAttr("line-width"), fill: this.getAttr("fill") }), g.link && ot.attr("href", g.link), g.target && ot.attr("target", g.target), g.key && (ot.node.id = g.key), ot.node.setAttribute("class", this.getAttr("class")), this.text.attr({ y: ot.getBBox().height / 2 }), this.group.push(ot), ot.insertBefore(this.text), this.initialize();
  }
  render() {
    this.yes_direction && (this[`${this.yes_direction}_symbol`] = this.yes_symbol), this.no_direction && (this[`${this.no_direction}_symbol`] = this.no_symbol);
    const m = this.getAttr("line-length");
    if (this.bottom_symbol) {
      const g = this.getBottom();
      this.bottom_symbol.isPositioned || (this.bottom_symbol.shiftY(this.getY() + this.height + m), this.bottom_symbol.setX(g.x - this.bottom_symbol.width / 2), this.bottom_symbol.isPositioned = true, this.bottom_symbol.render());
    }
    if (this.right_symbol) {
      const g = this.getRight();
      if (!this.right_symbol.isPositioned) {
        this.right_symbol.setY(g.y - this.right_symbol.height / 2), this.right_symbol.shiftX(this.group.getBBox().x + this.width + m);
        const w = () => {
          let O = false, k;
          for (let x = 0; x < this.chart.symbols.length; x++)
            if (k = this.chart.symbols[x], !this.params["align-next"] || this.params["align-next"] !== "no") {
              const h = Math.abs(k.getCenter().x - this.right_symbol.getCenter().x);
              if (k.getCenter().y > this.right_symbol.getCenter().y && h <= this.right_symbol.width / 2) {
                O = true;
                break;
              }
            }
          if (O) {
            if (this.right_symbol.symbolType === "end")
              return;
            this.right_symbol.setX(k.getX() + k.width + m), w();
          }
        };
        w(), this.right_symbol.isPositioned = true, this.right_symbol.render();
      }
    }
    if (this.left_symbol) {
      const g = this.getLeft();
      if (!this.left_symbol.isPositioned) {
        this.left_symbol.setY(g.y - this.left_symbol.height / 2), this.left_symbol.shiftX(-(this.group.getBBox().x + this.width + m));
        const w = () => {
          let O = false, k;
          for (let x = 0; x < this.chart.symbols.length; x++)
            if (k = this.chart.symbols[x], !this.params["align-next"] || this.params["align-next"] !== "no") {
              const h = Math.abs(k.getCenter().x - this.left_symbol.getCenter().x);
              if (k.getCenter().y > this.left_symbol.getCenter().y && h <= this.left_symbol.width / 2) {
                O = true;
                break;
              }
            }
          if (O) {
            if (this.left_symbol.symbolType === "end")
              return;
            this.left_symbol.setX(k.getX() + k.width + m), w();
          }
        };
        w(), this.left_symbol.isPositioned = true, this.left_symbol.render();
      }
    }
  }
  renderLines() {
    this.yes_symbol && this.drawLineTo(this.yes_symbol, this.yes_annotation || this.getAttr("yes-text"), this.yes_direction), this.no_symbol && this.drawLineTo(this.no_symbol, this.no_annotation || this.getAttr("no-text"), this.no_direction);
  }
}
class Ci extends re {
  constructor(m, g = {}) {
    const w = m.paper.rect(0, 0, 0, 0, 20);
    super(m, { text: "End", ...g }, w);
  }
}
class Ai extends re {
  constructor(m, g = {}) {
    super(m, g), this.textMargin = this.getAttr("text-margin"), this.text.attr({ x: this.textMargin * 3 });
    const w = this.text.getBBox().width + 4 * this.textMargin, O = this.text.getBBox().height + 2 * this.textMargin, k = this.textMargin, x = O / 2, h = { x: k, y: x }, a = [{ x: k - this.textMargin, y: O }, { x: k - this.textMargin + w, y: O }, { x: k - this.textMargin + w + 2 * this.textMargin, y: 0 }, { x: k - this.textMargin + 2 * this.textMargin, y: 0 }, { x: k, y: x }], B = ui(m, h, a);
    B.attr({ stroke: this.getAttr("element-color"), "stroke-width": this.getAttr("line-width"), fill: this.getAttr("fill") }), g.link && B.attr("href", g.link), g.target && B.attr("target", g.target), g.key && (B.node.id = g.key), B.node.setAttribute("class", this.getAttr("class")), this.text.attr({ y: B.getBBox().height / 2 }), this.group.push(B), B.insertBefore(this.text), this.initialize();
  }
  getLeft() {
    const m = this.getY() + this.group.getBBox().height / 2;
    return { x: this.getX() + this.textMargin, y: m };
  }
  getRight() {
    const m = this.getY() + this.group.getBBox().height / 2;
    return { x: this.getX() + this.group.getBBox().width - this.textMargin, y: m };
  }
}
class Ei extends re {
  constructor(m, g = {}) {
    const w = m.paper.rect(0, 0, 0, 0, 0);
    super(m, { text: "End", ...g }, w);
  }
}
class ze extends re {
  constructor(m, g = {}) {
    const w = m.paper.rect(0, 0, 0, 0);
    super(m, g, w), this.textMargin = this.getAttr("text-margin"), this.path1_direction = "bottom", this.path2_direction = "right", this.path3_direction = "top", this.params = g.params || {}, g.direction_next === "path1" && !g[g.direction_next] && g.next && (g[g.direction_next] = g.next), g.direction_next === "path2" && !g[g.direction_next] && g.next && (g[g.direction_next] = g.next), g.direction_next === "path3" && !g[g.direction_next] && g.next && (g[g.direction_next] = g.next), g.path1 && g.direction_path1 && g.path2 && !g.direction_path2 && g.path3 && !g.direction_path3 ? g.direction_path1 === "right" ? (this.path2_direction = "bottom", this.path1_direction = "right", this.path3_direction = "top") : g.direction_path1 === "top" ? (this.path2_direction = "right", this.path1_direction = "top", this.path3_direction = "bottom") : g.direction_path1 === "left" ? (this.path2_direction = "right", this.path1_direction = "left", this.path3_direction = "bottom") : (this.path2_direction = "right", this.path1_direction = "bottom", this.path3_direction = "top") : g.path1 && !g.direction_path1 && g.path2 && g.direction_path2 && g.path3 && !g.direction_path3 ? g.direction_path2 === "right" ? (this.path1_direction = "bottom", this.path2_direction = "right", this.path3_direction = "top") : g.direction_path2 === "left" ? (this.path1_direction = "bottom", this.path2_direction = "left", this.path3_direction = "right") : (this.path1_direction = "right", this.path2_direction = "bottom", this.path3_direction = "top") : g.path1 && !g.direction_path1 && g.path2 && !g.direction_path2 && g.path3 && g.direction_path3 ? g.direction_path2 === "right" ? (this.path1_direction = "bottom", this.path2_direction = "top", this.path3_direction = "right") : g.direction_path2 === "left" ? (this.path1_direction = "bottom", this.path2_direction = "right", this.path3_direction = "left") : (this.path1_direction = "right", this.path2_direction = "bottom", this.path3_direction = "top") : (this.path1_direction = g.direction_path1, this.path2_direction = g.direction_path2, this.path3_direction = g.direction_path3), this.path1_direction = this.path1_direction || "bottom", this.path2_direction = this.path2_direction || "right", this.path3_direction = this.path3_direction || "top", this.initialize();
  }
  render() {
    this.path1_direction && (this[this.path1_direction + "_symbol"] = this.path1_symbol), this.path2_direction && (this[this.path2_direction + "_symbol"] = this.path2_symbol), this.path3_direction && (this[this.path3_direction + "_symbol"] = this.path3_symbol);
    const m = this.getAttr("line-length");
    if (this.bottom_symbol) {
      const g = this.getBottom();
      this.bottom_symbol.isPositioned || (this.bottom_symbol.shiftY(this.getY() + this.height + m), this.bottom_symbol.setX(g.x - this.bottom_symbol.width / 2), this.bottom_symbol.isPositioned = true, this.bottom_symbol.render());
    }
    if (this.top_symbol) {
      const g = this.getTop();
      this.top_symbol.isPositioned || (this.top_symbol.shiftY(this.getY() - this.top_symbol.height - m), this.top_symbol.setX(g.x + this.top_symbol.width), this.top_symbol.isPositioned = true, this.top_symbol.render());
    }
    if (this.left_symbol) {
      const g = this.getLeft();
      if (!this.left_symbol.isPositioned) {
        this.left_symbol.setY(g.y - this.left_symbol.height / 2), this.left_symbol.shiftX(-(this.group.getBBox().x + this.width + m));
        const w = () => {
          let O = false, k;
          for (let x = 0; x < this.chart.symbols.length; x++)
            if (k = this.chart.symbols[x], !this.params["align-next"] || this.params["align-next"] !== "no") {
              const h = Math.abs(k.getCenter().x - this.left_symbol.getCenter().x);
              if (k.getCenter().y > this.left_symbol.getCenter().y && h <= this.left_symbol.width / 2) {
                O = true;
                break;
              }
            }
          if (O) {
            if (this.left_symbol.symbolType === "end")
              return;
            this.left_symbol.setX(k.getX() + k.width + m), w();
          }
        };
        w(), this.left_symbol.isPositioned = true, this.left_symbol.render();
      }
    }
    if (this.right_symbol) {
      const g = this.getRight();
      if (!this.right_symbol.isPositioned) {
        this.right_symbol.setY(g.y - this.right_symbol.height / 2), this.right_symbol.shiftX(this.group.getBBox().x + this.width + m);
        const w = () => {
          let O = false, k;
          for (let x = 0; x < this.chart.symbols.length; x++)
            if (k = this.chart.symbols[x], !this.params["align-next"] || this.params["align-next"] !== "no") {
              const h = Math.abs(k.getCenter().x - this.right_symbol.getCenter().x);
              if (k.getCenter().y > this.right_symbol.getCenter().y && h <= this.right_symbol.width / 2) {
                O = true;
                break;
              }
            }
          if (O) {
            if (this.right_symbol.symbolType === "end")
              return;
            this.right_symbol.setX(k.getX() + k.width + m), w();
          }
        };
        w(), this.right_symbol.isPositioned = true, this.right_symbol.render();
      }
    }
  }
  renderLines() {
    this.path1_symbol && this.drawLineTo(this.path1_symbol, "", this.path1_direction), this.path2_symbol && this.drawLineTo(this.path2_symbol, "", this.path2_direction), this.path3_symbol && this.drawLineTo(this.path3_symbol, "", this.path3_direction);
  }
}
class Ti extends re {
  constructor(m, g = {}) {
    const w = m.paper.rect(0, 0, 0, 0, 20);
    g.text = g.text || "Start", super(m, g, w);
  }
}
class Mi extends re {
  constructor(m, g = {}) {
    const w = m.paper.rect(0, 0, 0, 0);
    super(m, g, w), w.attr({ width: this.text.getBBox().width + 4 * this.getAttr("text-margin") }), this.text.attr({ x: 2 * this.getAttr("text-margin") });
    const O = m.paper.rect(0, 0, 0, 0);
    O.attr({ x: this.getAttr("text-margin"), stroke: this.getAttr("element-color"), "stroke-width": this.getAttr("line-width"), width: this.text.getBBox().width + 2 * this.getAttr("text-margin"), height: this.text.getBBox().height + 2 * this.getAttr("text-margin"), fill: this.getAttr("fill") }), g.key && (O.node.id = g.key + "i");
    const k = this.getAttr("font"), x = this.getAttr("font-family"), h = this.getAttr("font-weight");
    k && O.attr({ font: k }), x && O.attr({ "font-family": x }), h && O.attr({ "font-weight": h }), g.link && O.attr("href", g.link), g.target && O.attr("target", g.target), this.group.push(O), O.insertBefore(this.text), this.initialize();
  }
}
const Ve = (G, ...m) => {
  if (m.length === 0)
    return G;
  const g = m.shift();
  return Object.keys(g).forEach((w) => {
    typeof G[w] == "object" && !Array.isArray(G[w]) && typeof g[w] == "object" && !Array.isArray(g[w]) ? Ve(G[w], g[w]) : typeof g[w] == "object" ? Array.isArray(g[w]) ? G[w] = [...g[w]] : G[w] = { ...g[w] } : G[w] = g[w];
  }), Ve(G, ...m);
};
class Si {
  constructor(m, g) {
    this.symbols = [], this.lines = [], this.start = null, this.minXFromSymbols = 0, this.maxXFromLine = 0, this.paper = new ki(m), this.options = Ve(g, Li);
  }
  handle(m) {
    return this.symbols.indexOf(m) <= -1 && this.symbols.push(m), m instanceof Pe ? (m.yes = (g) => (m.yes_symbol = g, m.no_symbol && (m.pathOk = true), this.handle(g)), m.no = (g) => (m.no_symbol = g, m.yes_symbol && (m.pathOk = true), this.handle(g))) : m instanceof ze ? (m.path1 = (g) => (m.path1_symbol = g, m.path2_symbol && (m.pathOk = true), this.handle(g)), m.path2 = (g) => (m.path2_symbol = g, m.path3_symbol && (m.pathOk = true), this.handle(g)), m.path3 = (g) => (m.path3_symbol = g, m.path1_symbol && (m.pathOk = true), this.handle(g))) : m.then = (g) => (m.next = g, m.pathOk = true, this.handle(g)), m;
  }
  startWith(m) {
    return this.start = m, this.handle(m);
  }
  render() {
    let m = 0, g = 0, w = 0, O = 0, k = 0, x = 0, h;
    this.symbols.forEach((Q) => {
      Q.width > m && (m = Q.width), Q.height > g && (g = Q.height);
    }), this.symbols.forEach((Q) => {
      Q.shiftX(this.options.x + (m - Q.width) / 2 + this.options["line-width"]), Q.shiftY(this.options.y + (g - Q.height) / 2 + this.options["line-width"]);
    }), this.start.render(), this.symbols.forEach((Q) => {
      Q.renderLines();
    }), w = this.maxXFromLine;
    let a, B;
    this.symbols.forEach((Q) => {
      const H = Q.getX();
      a = H + Q.width, B = Q.getY() + Q.height, H < k && (k = H), a > w && (w = a), B > O && (O = B);
    });
    for (let Q = 0; Q < this.lines.length; Q++) {
      h = this.lines[Q].getBBox(), a = h.x, B = h.y;
      const H = h.x2, wt = h.y2;
      a < k && (k = a), B < x && (x = B), H > w && (w = H), wt > O && (O = wt);
    }
    const q = this.options.scale, ot = this.options["line-width"];
    this.minXFromSymbols < k && (k = this.minXFromSymbols), k < 0 && (k -= ot), x < 0 && (x -= ot);
    const P = w + ot - k, vt = O + ot - x;
    this.paper.setSize(P * q, vt * q), this.paper.setViewBox(k, x, P, vt, true);
  }
  clean() {
    if (this.paper) {
      const m = this.paper.canvas;
      m.parentNode && m.parentNode.removeChild(m);
    }
  }
}
const Pi = () => ({ symbols: {}, start: null, diagram: null, draw(G, m = {}) {
  this.diagram && this.diagram.clean();
  const g = new Si(G, m);
  this.diagram = g;
  const w = {}, O = (x) => {
    if (w[x.key])
      return w[x.key];
    switch (x.symbolType) {
      case "start":
        w[x.key] = new Ti(g, x);
        break;
      case "end":
        w[x.key] = new Ci(g, x);
        break;
      case "operation":
        w[x.key] = new Ei(g, x);
        break;
      case "inputoutput":
        w[x.key] = new Ai(g, x);
        break;
      case "subroutine":
        w[x.key] = new Mi(g, x);
        break;
      case "condition":
        w[x.key] = new Pe(g, x);
        break;
      case "parallel":
        w[x.key] = new ze(g, x);
        break;
      default:
        throw new Error(`Unknown symbol type ${x.symbolType}!`);
    }
    return w[x.key];
  }, k = (x, h, a) => {
    const B = O(x);
    return this.start === x ? g.startWith(B) : h && a && !h.pathOk && (h instanceof Pe ? (a.yes === x && h.yes(B), a.no === x && h.no(B)) : h instanceof ze ? (a.path1 === x && h.path1(B), a.path2 === x && h.path2(B), a.path3 === x && h.path3(B)) : h.then(B)), B.pathOk || (B instanceof Pe ? (x.yes && k(x.yes, B, x), x.no && k(x.no, B, x)) : B instanceof ze ? (x.path1 && k(x.path1, B, x), x.path2 && k(x.path2, B, x), x.path3 && k(x.path3, B, x)) : x.next && k(x.next, B, x)), B;
  };
  k(this.start), g.render();
}, clean() {
  var G;
  (G = this.diagram) == null || G.clean();
}, options() {
  var G;
  return ((G = this.diagram) == null ? void 0 : G.options) || {};
} }), zi = (G) => {
  const m = [];
  let g = 0;
  for (let w = 1, { length: O } = G; w < O; w++)
    if (G[w] === `
` && G[w - 1] !== "\\") {
      const k = G.substring(g, w);
      g = w + 1, m.push(k.replace(/\\\n/g, `
`));
    }
  g < G.length && m.push(G.substr(g));
  for (let w = 1, { length: O } = m; w < O; ) {
    const k = m[w];
    k.indexOf("->") < 0 && k.indexOf("=>") < 0 && k.indexOf("@>") < 0 ? (m[w - 1] += `
${k}`, m.splice(w, 1), O--) : w++;
  }
  return m;
}, Fi = (G) => {
  const m = G.indexOf("(") + 1, g = G.indexOf(")");
  return m >= 0 && g >= 0 ? G.substring(m, g) : "{}";
}, Oi = (G) => {
  const m = G.indexOf("(") + 1, g = G.indexOf(")");
  return m >= 0 && g >= 0 ? G.substring(m, g) : "";
}, Fe = (G, m) => {
  const g = G.indexOf("(") + 1, w = G.indexOf(")");
  return g >= 0 && w >= 0 ? m.symbols[G.substring(0, g - 1)] : m.symbols[G];
}, Xi = (G) => {
  const m = G.indexOf("(") + 1, g = G.indexOf(")");
  let w = G.substring(m, g);
  w.indexOf(",") > 0 && (w = w.substring(0, w.indexOf(",")));
  const O = w.split("@");
  return O.length > 1 && m >= 0 && g >= 0 ? O[1] : "";
}, Ni = (G = "") => {
  const m = Pi(), g = zi(G.trim());
  for (; g.length > 0; ) {
    let O = g.splice(0, 1)[0].trim();
    if (O.indexOf("=>") >= 0) {
      const k = O.split("=>"), x = { key: k[0].replace(/\(.*\)/, ""), symbolType: k[1], text: null, link: null, target: null, flowstate: null, function: null, lineStyle: {}, params: {} }, h = k[0].match(/\((.*)\)/);
      if (h && h.length > 1) {
        const a = h[1].split(",");
        for (let B = 0; B < a.length; B++) {
          const q = a[B].split("=");
          q.length == 2 && (x.params[q[0]] = q[1]);
        }
      }
      var w;
      if (x.symbolType.indexOf(": ") >= 0 && (w = x.symbolType.split(": "), x.symbolType = w.shift(), x.text = w.join(": ")), x.text && x.text.indexOf(":$") >= 0 ? (w = x.text.split(":$"), x.text = w.shift(), x.function = w.join(":$")) : x.symbolType.indexOf(":$") >= 0 ? (w = x.symbolType.split(":$"), x.symbolType = w.shift(), x.function = w.join(":$")) : x.text && x.text.indexOf(":>") >= 0 ? (w = x.text.split(":>"), x.text = w.shift(), x.link = w.join(":>")) : x.symbolType.indexOf(":>") >= 0 && (w = x.symbolType.split(":>"), x.symbolType = w.shift(), x.link = w.join(":>")), x.symbolType.indexOf(`
`) >= 0 && (x.symbolType = x.symbolType.split(`
`)[0]), x.link) {
        const a = x.link.indexOf("[") + 1, B = x.link.indexOf("]");
        a >= 0 && B >= 0 && (x.target = x.link.substring(a, B), x.link = x.link.substring(0, a - 1));
      }
      if (x.text && x.text.indexOf("|") >= 0) {
        const a = x.text.split("|");
        x.flowstate = a.pop().trim(), x.text = a.join("|");
      }
      m.symbols[x.key] = x;
    } else if (O.indexOf("->") >= 0) {
      let k = Xi(O);
      k && (O = O.replace("@" + k, ""));
      const x = O.split("->");
      for (let h = 0, a = x.length; h < a; h++) {
        let B = x[h];
        const q = Oi(B);
        (q === "true" || q === "false") && (B = B.replace("true", "yes"), B = B.replace("false", "no"));
        let ot = ((Q) => {
          let H = "next";
          const wt = Q.indexOf("(") + 1, At = Q.indexOf(")");
          return wt >= 0 && At >= 0 && (H = B.substring(wt, At), H.indexOf(",") < 0 && H !== "yes" && H !== "no" && (H = `next, ${H}`)), H;
        })(B);
        const P = Fe(B, m);
        let vt = null;
        if (ot.indexOf(",") >= 0) {
          const Q = ot.split(",");
          ot = Q[0], vt = Q[1].trim();
        }
        if (k && (ot == "yes" || ot == "true" ? P.yes_annotation = k : P.no_annotation = k, k = null), m.start || (m.start = P), h + 1 < a) {
          const Q = x[h + 1];
          P[ot] = Fe(Q, m), P["direction_" + ot] = vt, vt = null;
        }
      }
    } else if (O.indexOf("@>") >= 0) {
      const k = O.split("@>");
      for (let x = 0, h = k.length; x < h; x++)
        if (x + 1 !== h) {
          const a = Fe(k[x], m), B = Fe(k[x + 1], m);
          a.lineStyle[B.key] = JSON.parse(Fi(k[x + 1]));
        }
    }
  }
  return m;
};
export {
  Ni as parse
};
