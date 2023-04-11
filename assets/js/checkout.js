!(function (t) {
  'function' == typeof define && define.amd ? define(t) : t();
})(function () {
  'use strict';
  function t(t, e, n) {
    t.addEventListener(e, n, !1);
  }
  var e =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  (function () {
    function t() {
      (t = function () {}), Ln.Symbol || (Ln.Symbol = jn);
    }
    function n() {
      t();
      var e = Ln.Symbol.iterator;
      e || (e = Ln.Symbol.iterator = Ln.Symbol('iterator')),
        'function' != typeof Array.prototype[e] &&
          Pn(Array.prototype, e, {
            configurable: !0,
            writable: !0,
            value: function () {
              return o(this);
            },
          }),
        (n = function () {});
    }
    function o(t) {
      var e = 0;
      return r(function () {
        return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
      });
    }
    function r(t) {
      return (
        n(),
        (t = { next: t }),
        (t[Ln.Symbol.iterator] = function () {
          return this;
        }),
        t
      );
    }
    function i(t) {
      n();
      var e = t[Symbol.iterator];
      return e ? e.call(t) : o(t);
    }
    function a(t) {
      for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
      return n;
    }
    function s() {
      (this.f = !1),
        (this.b = null),
        (this.ca = void 0),
        (this.a = 1),
        (this.F = 0),
        (this.c = null);
    }
    function l(t) {
      if (t.f) throw new TypeError('Generator is already running');
      t.f = !0;
    }
    function c(t, e) {
      (t.c = { Ia: e, Ma: !0 }), (t.a = t.F);
    }
    function u(t, e) {
      return (t.a = 3), { value: e };
    }
    function h(t) {
      (this.a = new s()), (this.b = t);
    }
    function d(t, e) {
      l(t.a);
      var n = t.a.b;
      return n
        ? f(
            t,
            'return' in n
              ? n.return
              : function (t) {
                  return { value: t, done: !0 };
                },
            e,
            t.a.return,
          )
        : (t.a.return(e), p(t));
    }
    function f(t, e, n, o) {
      try {
        var r = e.call(t.a.b, n);
        if (!(r instanceof Object))
          throw new TypeError('Iterator result ' + r + ' is not an object');
        if (!r.done) return (t.a.f = !1), r;
        var i = r.value;
      } catch (e) {
        return (t.a.b = null), c(t.a, e), p(t);
      }
      return (t.a.b = null), o.call(t.a, i), p(t);
    }
    function p(t) {
      for (; t.a.a; )
        try {
          var e = t.b(t.a);
          if (e) return (t.a.f = !1), { value: e.value, done: !1 };
        } catch (e) {
          (t.a.ca = void 0), c(t.a, e);
        }
      if (((t.a.f = !1), t.a.c)) {
        if (((e = t.a.c), (t.a.c = null), e.Ma)) throw e.Ia;
        return { value: e.return, done: !0 };
      }
      return { value: void 0, done: !0 };
    }
    function m(t) {
      (this.next = function (e) {
        return (
          l(t.a),
          t.a.b ? (e = f(t, t.a.b.next, e, t.a.u)) : (t.a.u(e), (e = p(t))),
          e
        );
      }),
        (this.throw = function (e) {
          return (
            l(t.a),
            t.a.b ? (e = f(t, t.a.b.throw, e, t.a.u)) : (c(t.a, e), (e = p(t))),
            e
          );
        }),
        (this.return = function (e) {
          return d(t, e);
        }),
        n(),
        (this[Symbol.iterator] = function () {
          return this;
        });
    }
    function _(t, e) {
      return (e = new m(new h(e))), In && In(e, t.prototype), e;
    }
    function y() {}
    function v(t, e) {
      return function () {
        t.apply(e, arguments);
      };
    }
    function g(t) {
      if (!(this instanceof g))
        throw new TypeError('Promises must be constructed via new');
      if ('function' != typeof t) throw new TypeError('not a function');
      (this.I = 0),
        (this.ra = !1),
        (this.w = void 0),
        (this.S = []),
        S(t, this);
    }
    function b(t, e) {
      for (; 3 === t.I; ) t = t.w;
      0 === t.I
        ? t.S.push(e)
        : ((t.ra = !0),
          Bn(function () {
            var n = 1 === t.I ? e.Oa : e.Pa;
            if (null === n) (1 === t.I ? w : E)(e.na, t.w);
            else {
              try {
                var o = n(t.w);
              } catch (t) {
                return void E(e.na, t);
              }
              w(e.na, o);
            }
          }));
    }
    function w(t, e) {
      try {
        if (e === t)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (e && ('object' == typeof e || 'function' == typeof e)) {
          var n = e.then;
          if (e instanceof g) return (t.I = 3), (t.w = e), void N(t);
          if ('function' == typeof n) return void S(v(n, e), t);
        }
        (t.I = 1), (t.w = e), N(t);
      } catch (e) {
        E(t, e);
      }
    }
    function E(t, e) {
      (t.I = 2), (t.w = e), N(t);
    }
    function N(t) {
      2 === t.I &&
        0 === t.S.length &&
        Bn(function () {
          t.ra ||
            ('undefined' != typeof console &&
              console &&
              console.warn('Possible Unhandled Promise Rejection:', t.w));
        });
      for (var e = 0, n = t.S.length; e < n; e++) b(t, t.S[e]);
      t.S = null;
    }
    function C(t, e, n) {
      (this.Oa = 'function' == typeof t ? t : null),
        (this.Pa = 'function' == typeof e ? e : null),
        (this.na = n);
    }
    function S(t, e) {
      var n = !1;
      try {
        t(
          function (t) {
            n || ((n = !0), w(e, t));
          },
          function (t) {
            n || ((n = !0), E(e, t));
          },
        );
      } catch (t) {
        n || ((n = !0), E(e, t));
      }
    }
    function T(t) {
      return new g(function (e, n) {
        function o(t, a) {
          try {
            if (a && ('object' == typeof a || 'function' == typeof a)) {
              var s = a.then;
              if ('function' == typeof s)
                return void s.call(
                  a,
                  function (e) {
                    o(t, e);
                  },
                  n,
                );
            }
            (r[t] = a), 0 == --i && e(r);
          } catch (t) {
            n(t);
          }
        }
        if (!t || void 0 === t.length)
          throw new TypeError('Promise.all accepts an array');
        var r = Array.prototype.slice.call(t);
        if (0 === r.length) return e([]);
        for (var i = r.length, a = 0; a < r.length; a++) o(a, r[a]);
      });
    }
    function O(t) {
      return t && 'object' == typeof t && t.constructor === g
        ? t
        : new g(function (e) {
            e(t);
          });
    }
    function D(t) {
      return new g(function (e, n) {
        n(t);
      });
    }
    function M(t) {
      return new g(function (e, n) {
        for (var o = 0, r = t.length; o < r; o++) t[o].then(e, n);
      });
    }
    function A() {
      (this.ua = this.root = null),
        (this.ba = !1),
        (this.M =
          this.Z =
          this.ja =
          this.assignedSlot =
          this.assignedNodes =
          this.R =
            null),
        (this.childNodes =
          this.nextSibling =
          this.previousSibling =
          this.lastChild =
          this.firstChild =
          this.parentNode =
          this.U =
            void 0),
        (this.pa = this.qa = !1),
        (this.X = {});
    }
    function x(t) {
      return t.__shady || (t.__shady = new A()), t.__shady;
    }
    function k(t) {
      return t && t.__shady;
    }
    function L(t) {
      return (t = k(t)) && void 0 !== t.firstChild;
    }
    function P(t) {
      return 'ShadyRoot' === t.Ca;
    }
    function j(t) {
      return (t = (t = k(t)) && t.root) && Wt(t);
    }
    function R(t) {
      io.push(t), (oo.textContent = ro++);
    }
    function H(t, e) {
      for (; e; ) {
        if (e == t) return !0;
        e = e.__shady_parentNode;
      }
      return !1;
    }
    function F(t) {
      for (var e = t.length - 1; 0 <= e; e--) {
        var n = t[e],
          o = n.getAttribute('id') || n.getAttribute('name');
        o && 'length' !== o && isNaN(o) && (t[o] = n);
      }
      return (
        (t.item = function (e) {
          return t[e];
        }),
        (t.namedItem = function (e) {
          if ('length' !== e && isNaN(e) && t[e]) return t[e];
          for (var n = i(t), o = n.next(); !o.done; o = n.next())
            if (
              ((o = o.value).getAttribute('id') || o.getAttribute('name')) == e
            )
              return o;
          return null;
        }),
        t
      );
    }
    function I(t, e, n, o) {
      n = void 0 === n ? '' : n;
      for (var r in e) {
        var i = e[r];
        if (!(o && 0 <= o.indexOf(r))) {
          i.configurable = !0;
          var a = n + r;
          if (i.value) t[a] = i.value;
          else
            try {
              Object.defineProperty(t, a, i);
            } catch (t) {}
        }
      }
    }
    function q(t) {
      var e = {};
      return (
        Object.getOwnPropertyNames(t).forEach(function (n) {
          e[n] = Object.getOwnPropertyDescriptor(t, n);
        }),
        e
      );
    }
    function B(t) {
      ao || ((ao = !0), R(U)), lo.push(t);
    }
    function U() {
      ao = !1;
      for (var t = !!lo.length; lo.length; ) lo.shift()();
      return t;
    }
    function W() {
      (this.a = !1),
        (this.addedNodes = []),
        (this.removedNodes = []),
        (this.aa = new Set());
    }
    function V(t) {
      t.a ||
        ((t.a = !0),
        R(function () {
          t.flush();
        }));
    }
    function G(t, e) {
      var n = x(t);
      n.R || (n.R = new W()), n.R.aa.add(e);
      var o = n.R;
      return {
        Ba: e,
        N: o,
        Da: t,
        takeRecords: function () {
          return o.takeRecords();
        },
      };
    }
    function K(t) {
      var e = t && t.N;
      e && (e.aa.delete(t.Ba), e.aa.size || (x(t.Da).R = null));
    }
    function $(t, e) {
      var n = e.getRootNode();
      return t
        .map(function (t) {
          var e = n === t.target.getRootNode();
          if (e && t.addedNodes) {
            if (
              (e = Array.from(t.addedNodes).filter(function (t) {
                return n === t.getRootNode();
              })).length
            )
              return (
                (t = Object.create(t)),
                Object.defineProperty(t, 'addedNodes', {
                  value: e,
                  configurable: !0,
                }),
                t
              );
          } else if (e) return t;
        })
        .filter(function (t) {
          return t;
        });
    }
    function X(t) {
      switch (t) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case ' ':
          return '&nbsp;';
      }
    }
    function z(t) {
      for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = !0;
      return e;
    }
    function J(t, e) {
      'template' === t.localName && (t = t.content);
      for (
        var n = '',
          o = e ? e(t) : t.childNodes,
          r = 0,
          i = o.length,
          a = void 0;
        r < i && (a = o[r]);
        r++
      ) {
        t: {
          var s = a,
            l = t,
            c = e;
          switch (s.nodeType) {
            case Node.ELEMENT_NODE:
              for (
                var u, h = '<' + (l = s.localName), d = s.attributes, f = 0;
                (u = d[f]);
                f++
              )
                h += ' ' + u.name + '="' + u.value.replace(uo, X) + '"';
              (h += '>'), (s = fo[l] ? h : h + J(s, c) + '</' + l + '>');
              break t;
            case Node.TEXT_NODE:
              (s = s.data), (s = l && po[l.localName] ? s : s.replace(ho, X));
              break t;
            case Node.COMMENT_NODE:
              s = '\x3c!--' + s.data + '--\x3e';
              break t;
            default:
              throw (window.console.error(s), Error('not implemented'));
          }
        }
        n += s;
      }
      return n;
    }
    function Y(t) {
      yo[t] = function (e) {
        return e['__shady_native_' + t];
      };
    }
    function Z(t, e) {
      I(t, e, '__shady_native_');
      for (var n in e) Y(n);
    }
    function Q(t, e) {
      e = void 0 === e ? [] : e;
      for (var n = 0; n < e.length; n++) {
        var o = e[n],
          r = Object.getOwnPropertyDescriptor(t, o);
        r &&
          (Object.defineProperty(t, '__shady_native_' + o, r),
          r.value ? _o[o] || (_o[o] = r.value) : Y(o));
      }
    }
    function tt(t) {
      for (var e; (e = t.__shady_native_firstChild); )
        t.__shady_native_removeChild(e);
    }
    function et(t) {
      return t instanceof Node ? t.__shady_getRootNode() : t;
    }
    function nt(t, e) {
      var n = [],
        o = t;
      for (t = et(t); o; )
        n.push(o),
          (o = o.__shady_assignedSlot
            ? o.__shady_assignedSlot
            : o.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
              o.host &&
              (e || o !== t)
            ? o.host
            : o.__shady_parentNode);
      return n[n.length - 1] === document && n.push(window), n;
    }
    function ot(t) {
      return (
        t.__composedPath || (t.__composedPath = nt(t.target, !0)),
        t.__composedPath
      );
    }
    function rt(t, e) {
      if (!P) return t;
      t = nt(t, !0);
      for (var n, o, r = 0, i = void 0, a = void 0; r < e.length; r++)
        if (
          ((n = e[r]),
          (o = et(n)) !== i && ((a = t.indexOf(o)), (i = o)),
          !P(o) || -1 < a)
        )
          return n;
    }
    function it(t) {
      function e(e, n) {
        return (e = new t(e, n)), (e.__composed = n && !!n.composed), e;
      }
      return (e.__proto__ = t), (e.prototype = t.prototype), e;
    }
    function at(t) {
      return t.__target !== t.target || t.__relatedTarget !== t.relatedTarget;
    }
    function st(t, e, n) {
      if ((n = e.__handlers && e.__handlers[t.type] && e.__handlers[t.type][n]))
        for (
          var o, r = 0;
          (o = n[r]) &&
          (!at(t) || t.target !== t.relatedTarget) &&
          (o.call(e, t), !t.__immediatePropagationStopped);
          r++
        );
    }
    function lt(t) {
      var e = t.composedPath();
      Object.defineProperty(t, 'currentTarget', {
        get: function () {
          return o;
        },
        configurable: !0,
      });
      for (var n = e.length - 1; 0 <= n; n--) {
        var o = e[n];
        if ((st(t, o, 'capture'), t.ha)) return;
      }
      Object.defineProperty(t, 'eventPhase', {
        get: function () {
          return Event.AT_TARGET;
        },
      });
      var r;
      for (n = 0; n < e.length; n++) {
        var i = k((o = e[n]));
        if (
          ((i = i && i.root),
          (0 === n || (i && i === r)) &&
            (st(t, o, 'bubble'),
            o !== window && (r = o.__shady_getRootNode()),
            t.ha))
        )
          break;
      }
    }
    function ct(t, e, n, o, r, i) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a],
          l = s.type,
          c = s.capture,
          u = s.once,
          h = s.passive;
        if (e === s.node && n === l && o === c && r === u && i === h) return a;
      }
      return -1;
    }
    function ut(t, e, n) {
      if (e) {
        var o = typeof e;
        if (
          ('function' === o || 'object' === o) &&
          ('object' !== o ||
            (e.handleEvent && 'function' == typeof e.handleEvent))
        ) {
          if (ko[t]) return this.__shady_native_addEventListener(t, e, n);
          if (n && 'object' == typeof n)
            var r = !!n.capture,
              i = !!n.once,
              a = !!n.passive;
          else (r = !!n), (a = i = !1);
          var s = (n && n.ia) || this,
            l = e[Mo];
          if (l) {
            if (-1 < ct(l, s, t, r, i, a)) return;
          } else e[Mo] = [];
          (l = function (r) {
            if (
              (i && this.__shady_removeEventListener(t, e, n),
              r.__target || dt(r),
              s !== this)
            ) {
              var a = Object.getOwnPropertyDescriptor(r, 'currentTarget');
              Object.defineProperty(r, 'currentTarget', {
                get: function () {
                  return s;
                },
                configurable: !0,
              });
            }
            if (
              ((r.__previousCurrentTarget = r.currentTarget),
              (!P(s) || -1 != r.composedPath().indexOf(s)) &&
                (r.composed || -1 < r.composedPath().indexOf(s)))
            )
              if (at(r) && r.target === r.relatedTarget)
                r.eventPhase === Event.BUBBLING_PHASE &&
                  r.stopImmediatePropagation();
              else if (
                r.eventPhase === Event.CAPTURING_PHASE ||
                r.bubbles ||
                r.target === s ||
                s instanceof Window
              ) {
                var l =
                  'function' === o
                    ? e.call(s, r)
                    : e.handleEvent && e.handleEvent(r);
                return (
                  s !== this &&
                    (a
                      ? (Object.defineProperty(r, 'currentTarget', a),
                        (a = null))
                      : delete r.currentTarget),
                  l
                );
              }
          }),
            e[Mo].push({
              node: s,
              type: t,
              capture: r,
              once: i,
              passive: a,
              Za: l,
            }),
            Lo[t]
              ? ((this.__handlers = this.__handlers || {}),
                (this.__handlers[t] = this.__handlers[t] || {
                  capture: [],
                  bubble: [],
                }),
                this.__handlers[t][r ? 'capture' : 'bubble'].push(l))
              : this.__shady_native_addEventListener(t, l, n);
        }
      }
    }
    function ht(t, e, n) {
      if (e) {
        if (ko[t]) return this.__shady_native_removeEventListener(t, e, n);
        if (n && 'object' == typeof n)
          var o = !!n.capture,
            r = !!n.once,
            i = !!n.passive;
        else (o = !!n), (i = r = !1);
        var a = (n && n.ia) || this,
          s = void 0,
          l = null;
        try {
          l = e[Mo];
        } catch (t) {}
        l &&
          -1 < (r = ct(l, a, t, o, r, i)) &&
          ((s = l.splice(r, 1)[0].Za), l.length || (e[Mo] = void 0)),
          this.__shady_native_removeEventListener(t, s || e, n),
          s &&
            Lo[t] &&
            this.__handlers &&
            this.__handlers[t] &&
            ((t = this.__handlers[t][o ? 'capture' : 'bubble']),
            -1 < (s = t.indexOf(s)) && t.splice(s, 1));
      }
    }
    function dt(t) {
      if (
        ((t.__target = t.target), (t.__relatedTarget = t.relatedTarget), Qn.D)
      ) {
        var e = Object.getPrototypeOf(t);
        if (!Object.hasOwnProperty(e, '__shady_patchedProto')) {
          var n = Object.create(e);
          (n.__shady_sourceProto = e), I(n, Po), (e.__shady_patchedProto = n);
        }
        t.__proto__ = e.__shady_patchedProto;
      } else I(t, Po);
    }
    function ft(t, e) {
      return { index: t, V: [], $: e };
    }
    function pt(t, e, n, o) {
      var r = 0,
        i = 0,
        a = 0,
        s = 0,
        l = Math.min(e - r, o - i);
      if (0 == r && 0 == i)
        t: {
          for (a = 0; a < l; a++) if (t[a] !== n[a]) break t;
          a = l;
        }
      if (e == t.length && o == n.length) {
        s = t.length;
        for (var c = n.length, u = 0; u < l - a && mt(t[--s], n[--c]); ) u++;
        s = u;
      }
      if (((r += a), (i += a), (e -= s), (o -= s), 0 == e - r && 0 == o - i))
        return [];
      if (r == e) {
        for (e = ft(r, 0); i < o; ) e.V.push(n[i++]);
        return [e];
      }
      if (i == o) return [ft(r, e - r)];
      for (
        o = o - (a = i) + 1, s = e - (l = r) + 1, e = Array(o), c = 0;
        c < o;
        c++
      )
        (e[c] = Array(s)), (e[c][0] = c);
      for (c = 0; c < s; c++) e[0][c] = c;
      for (c = 1; c < o; c++)
        for (u = 1; u < s; u++)
          if (t[l + u - 1] === n[a + c - 1]) e[c][u] = e[c - 1][u - 1];
          else {
            var h = e[c - 1][u] + 1,
              d = e[c][u - 1] + 1;
            e[c][u] = h < d ? h : d;
          }
      for (
        l = e.length - 1, a = e[0].length - 1, o = e[l][a], t = [];
        0 < l || 0 < a;

      )
        0 == l
          ? (t.push(2), a--)
          : 0 == a
          ? (t.push(3), l--)
          : ((s = e[l - 1][a - 1]),
            (c = e[l - 1][a]),
            (u = e[l][a - 1]),
            (h = c < u ? (c < s ? c : s) : u < s ? u : s),
            h == s
              ? (s == o ? t.push(0) : (t.push(1), (o = s)), l--, a--)
              : h == c
              ? (t.push(3), l--, (o = c))
              : (t.push(2), a--, (o = u)));
      for (t.reverse(), e = void 0, l = [], a = 0; a < t.length; a++)
        switch (t[a]) {
          case 0:
            e && (l.push(e), (e = void 0)), r++, i++;
            break;
          case 1:
            e || (e = ft(r, 0)), e.$++, r++, e.V.push(n[i]), i++;
            break;
          case 2:
            e || (e = ft(r, 0)), e.$++, r++;
            break;
          case 3:
            e || (e = ft(r, 0)), e.V.push(n[i]), i++;
        }
      return e && l.push(e), l;
    }
    function mt(t, e) {
      return t === e;
    }
    function _t(t, e, n) {
      Oo(t), (n = n || null);
      var o = x(t),
        r = x(e),
        i = n ? x(n) : null;
      (o.previousSibling = n ? i.previousSibling : e.__shady_lastChild),
        (i = k(o.previousSibling)) && (i.nextSibling = t),
        (i = k((o.nextSibling = n))) && (i.previousSibling = t),
        (o.parentNode = e),
        n
          ? n === r.firstChild && (r.firstChild = t)
          : ((r.lastChild = t), r.firstChild || (r.firstChild = t)),
        (r.childNodes = null);
    }
    function yt(t, e, n) {
      Do(e);
      var o = x(e);
      if (
        (void 0 !== o.firstChild && (o.childNodes = null),
        t.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
      ) {
        o = t.__shady_childNodes;
        for (var r = 0; r < o.length; r++) _t(o[r], e, n);
        (e = void 0 !== (t = x(t)).firstChild ? null : void 0),
          (t.firstChild = t.lastChild = e),
          (t.childNodes = e);
      } else _t(t, e, n);
    }
    function vt(t, e) {
      var n = x(t);
      t === (e = x(e)).firstChild && (e.firstChild = n.nextSibling),
        t === e.lastChild && (e.lastChild = n.previousSibling),
        (t = n.previousSibling);
      var o = n.nextSibling;
      t && (x(t).nextSibling = o),
        o && (x(o).previousSibling = t),
        (n.parentNode = n.previousSibling = n.nextSibling = void 0),
        void 0 !== e.childNodes && (e.childNodes = null);
    }
    function gt(t) {
      var e = x(t);
      if (void 0 === e.firstChild) {
        e.childNodes = null;
        var n = (e.firstChild = t.__shady_native_firstChild || null);
        for (
          e.lastChild = t.__shady_native_lastChild || null,
            Do(t),
            e = n,
            n = void 0;
          e;
          e = e.__shady_native_nextSibling
        ) {
          var o = x(e);
          (o.parentNode = t),
            (o.nextSibling = e.__shady_native_nextSibling || null),
            (o.previousSibling = n || null),
            (n = e),
            Oo(e);
        }
      }
    }
    function bt() {
      return (
        Io || (Io = window.ShadyCSS && window.ShadyCSS.ScopingShim), Io || null
      );
    }
    function wt(t, e) {
      var n = bt();
      n && n.unscopeNode(t, e);
    }
    function Et(t, e) {
      var n = bt();
      if (!n) return !0;
      if (t.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        (n = !0), (t = t.__shady_childNodes);
        for (var o = 0; n && o < t.length; o++) n = n && Et(t[o], e);
        return n;
      }
      return t.nodeType !== Node.ELEMENT_NODE || n.currentScopeForNode(t) === e;
    }
    function Nt(t) {
      if (t.nodeType !== Node.ELEMENT_NODE) return '';
      var e = bt();
      return e ? e.currentScopeForNode(t) : '';
    }
    function Ct(t, e) {
      if (t) {
        t.nodeType === Node.ELEMENT_NODE && e(t), (t = t.__shady_childNodes);
        for (var n, o = 0; o < t.length; o++)
          (n = t[o]).nodeType === Node.ELEMENT_NODE && Ct(n, e);
      }
    }
    function St(t) {
      for (var e; (e = t.__shady_firstChild); ) t.__shady_removeChild(e);
    }
    function Tt(t) {
      var e = k(t);
      if (e && void 0 !== e.U)
        for (
          var n = 0, o = (e = t.__shady_childNodes).length, r = void 0;
          n < o && (r = e[n]);
          n++
        )
          Tt(r);
      (t = k(t)) && (t.U = void 0);
    }
    function Ot(t) {
      var e = t;
      return (
        t &&
          'slot' === t.localName &&
          (e =
            (e = (e = k(t)) && e.M) && e.length
              ? e[0]
              : Ot(t.__shady_nextSibling)),
        e
      );
    }
    function Dt(t, e, n) {
      (t = (t = k(t)) && t.R) &&
        (e && t.addedNodes.push(e), n && t.removedNodes.push(n), V(t));
    }
    function Mt(t, e, n) {
      var o = [];
      return At(t.__shady_childNodes, e, n, o), o;
    }
    function At(t, e, n, o) {
      for (var r = 0, i = t.length, a = void 0; r < i && (a = t[r]); r++) {
        var s;
        if ((s = a.nodeType === Node.ELEMENT_NODE)) {
          var l = e,
            c = n,
            u = o,
            h = l((s = a));
          h && u.push(s),
            c && c(h)
              ? (s = h)
              : (At(s.__shady_childNodes, l, c, u), (s = void 0));
        }
        if (s) break;
      }
    }
    function xt(t, e) {
      I(t, Qo, e),
        I(t, Jo, e),
        I(t, Zo, e),
        I(t, Go, e),
        Qn.T && !e ? (I(t, Vo, e), I(t, zo, e)) : Qn.D || (I(t, Co), I(t, No));
    }
    function kt(t) {
      var e = [];
      do {
        e.unshift(t);
      } while ((t = t.__shady_parentNode));
      return e;
    }
    function Lt(t, e, n) {
      if (t !== tr) throw new TypeError('Illegal constructor');
      if (
        ((this.Ca = 'ShadyRoot'),
        (this.host = e),
        (this.mode = n && n.mode),
        gt(e),
        (t = x(e)),
        (t.root = this),
        (t.ua = 'closed' !== this.mode ? this : null),
        (t = x(this)),
        (t.firstChild =
          t.lastChild =
          t.parentNode =
          t.nextSibling =
          t.previousSibling =
            null),
        (t.childNodes = []),
        (this.f = this.O = !1),
        (this.c = this.b = this.a = null),
        Qn.preferPerformance)
      )
        for (; (t = e.__shady_native_firstChild); )
          e.__shady_native_removeChild(t);
      else Pt(this);
    }
    function Pt(t) {
      t.O ||
        ((t.O = !0),
        B(function () {
          var e = jt(t);
          e && e._renderRoot();
        }));
    }
    function jt(t) {
      for (var e; t; ) {
        t.O && (e = t);
        t: {
          var n = t;
          if (((t = n.host.__shady_getRootNode()), P(t))) {
            n = n.host.__shady_childNodes;
            for (var o = 0; o < n.length; o++)
              if ('slot' == n[o].localName) break t;
          }
          t = void 0;
        }
      }
      return e;
    }
    function Rt(t, e, n) {
      var o = x(e),
        r = o.Z;
      (o.Z = null),
        n || (n = (t = t.b[e.__shady_slot || '__catchall']) && t[0]),
        n
          ? (x(n).assignedNodes.push(e), (o.assignedSlot = n))
          : (o.assignedSlot = void 0),
        r !== o.assignedSlot && o.assignedSlot && (x(o.assignedSlot).ba = !0);
    }
    function Ht(t, e, n) {
      for (var o = 0, r = void 0; o < n.length && (r = n[o]); o++)
        if ('slot' == r.localName) {
          var i = k(r).assignedNodes;
          i && i.length && Ht(t, e, i);
        } else e.push(n[o]);
    }
    function Ft(t, e) {
      e.__shady_native_dispatchEvent(new Event('slotchange')),
        (e = k(e)).assignedSlot && Ft(t, e.assignedSlot);
    }
    function It(t) {
      if (t.c && t.c.length) {
        for (var e, n = t.c, o = 0; o < n.length; o++) {
          var r = n[o];
          gt(r), gt(r.__shady_parentNode);
          var i = qt(r);
          t.b[i]
            ? ((e = e || {}), (e[i] = !0), t.b[i].push(r))
            : (t.b[i] = [r]),
            t.a.push(r);
        }
        if (e) for (var a in e) t.b[a] = Bt(t.b[a]);
        t.c = [];
      }
    }
    function qt(t) {
      var e = t.name || t.getAttribute('name') || '__catchall';
      return (t.Aa = e);
    }
    function Bt(t) {
      return t.sort(function (t, e) {
        t = kt(t);
        for (var n = kt(e), o = 0; o < t.length; o++) {
          e = t[o];
          var r = n[o];
          if (e !== r)
            return (
              (t = Array.from(e.__shady_parentNode.__shady_childNodes)).indexOf(
                e,
              ) - t.indexOf(r)
            );
        }
      });
    }
    function Ut(t, e) {
      if (t.a) {
        It(t);
        var n,
          o = t.b;
        for (n in o)
          for (var r = o[n], i = 0; i < r.length; i++) {
            var a = r[i];
            if (H(e, a)) {
              r.splice(i, 1);
              var s = t.a.indexOf(a);
              if ((0 <= s && t.a.splice(s, 1), i--, (a = k(a)), (s = a.M)))
                for (var l = 0; l < s.length; l++) {
                  var c = s[l],
                    u = c.__shady_native_parentNode;
                  u && u.__shady_native_removeChild(c);
                }
              (a.M = []), (a.assignedNodes = []), (s = !0);
            }
          }
        return s;
      }
    }
    function Wt(t) {
      return It(t), !(!t.a || !t.a.length);
    }
    function Vt(t) {
      if (((t = t.__shady_getRootNode()), P(t))) return t;
    }
    function Gt(t) {
      this.node = t;
    }
    function Kt(t) {
      if (P(t) || t instanceof Gt) return t;
      var e = ir.get(t);
      return e || ((e = new Gt(t)), ir.set(t, e)), e;
    }
    function $t(t, e) {
      if ('slot' === e) (t = t.__shady_parentNode), j(t) && Pt(k(t).root);
      else if ('slot' === t.localName && 'name' === e && (e = Vt(t))) {
        if (e.a) {
          It(e);
          var n = t.Aa,
            o = qt(t);
          if (o !== n) {
            var r = (n = e.b[n]).indexOf(t);
            0 <= r && n.splice(r, 1),
              (n = e.b[o] || (e.b[o] = [])).push(t),
              1 < n.length && (e.b[o] = Bt(n));
          }
        }
        Pt(e);
      }
    }
    function Xt(t) {
      var e,
        n = t ? null : yr,
        o = {};
      for (e in _r)
        (o.fa = window[e] && window[e].prototype),
          _r[e].forEach(
            (function (e) {
              return function (o) {
                return e.fa && o && I(e.fa, o, t, n);
              };
            })(o),
          ),
          (o = { fa: o.fa });
    }
    function zt(t) {
      var e = gr.has(t);
      return (t = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t)), !e && t;
    }
    function Jt(t) {
      var e = t.isConnected;
      if (void 0 !== e) return e;
      for (; t && !(t.__CE_isImportDocument || t instanceof Document); )
        t =
          t.parentNode ||
          (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
      return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
    }
    function Yt(t, e) {
      for (; e && e !== t && !e.nextSibling; ) e = e.parentNode;
      return e && e !== t ? e.nextSibling : null;
    }
    function Zt(t, e, n) {
      n = void 0 === n ? new Set() : n;
      for (var o = t; o; ) {
        if (o.nodeType === Node.ELEMENT_NODE) {
          var r = o;
          e(r);
          var i = r.localName;
          if ('link' === i && 'import' === r.getAttribute('rel')) {
            if ((o = r.import) instanceof Node && !n.has(o))
              for (n.add(o), o = o.firstChild; o; o = o.nextSibling)
                Zt(o, e, n);
            o = Yt(t, r);
            continue;
          }
          if ('template' === i) {
            o = Yt(t, r);
            continue;
          }
          if ((r = r.__CE_shadowRoot))
            for (r = r.firstChild; r; r = r.nextSibling) Zt(r, e, n);
        }
        o = o.firstChild ? o.firstChild : Yt(t, o);
      }
    }
    function Qt(t, e, n) {
      t[e] = n;
    }
    function te() {
      (this.a = new Map()), (this.u = new Map()), (this.f = []), (this.c = !1);
    }
    function ee(t, e, n) {
      t.a.set(e, n), t.u.set(n.constructorFunction, n);
    }
    function ne(t, e) {
      (t.c = !0), t.f.push(e);
    }
    function oe(t, e) {
      t.c &&
        Zt(e, function (e) {
          return t.b(e);
        });
    }
    function re(t, e) {
      var n = [];
      for (
        Zt(e, function (t) {
          return n.push(t);
        }),
          e = 0;
        e < n.length;
        e++
      ) {
        var o = n[e];
        1 === o.__CE_state ? t.connectedCallback(o) : se(t, o);
      }
    }
    function ie(t, e) {
      var n = [];
      for (
        Zt(e, function (t) {
          return n.push(t);
        }),
          e = 0;
        e < n.length;
        e++
      ) {
        var o = n[e];
        1 === o.__CE_state && t.disconnectedCallback(o);
      }
    }
    function ae(t, e, n) {
      var o = (n = void 0 === n ? {} : n).Ya || new Set(),
        r =
          n.ga ||
          function (e) {
            return se(t, e);
          },
        i = [];
      if (
        (Zt(
          e,
          function (e) {
            if ('link' === e.localName && 'import' === e.getAttribute('rel')) {
              var n = e.import;
              n instanceof Node &&
                ((n.__CE_isImportDocument = !0), (n.__CE_hasRegistry = !0)),
                n && 'complete' === n.readyState
                  ? (n.__CE_documentLoadHandled = !0)
                  : e.addEventListener('load', function () {
                      var n = e.import;
                      if (!n.__CE_documentLoadHandled) {
                        n.__CE_documentLoadHandled = !0;
                        var i = new Set(o);
                        i.delete(n), ae(t, n, { Ya: i, ga: r });
                      }
                    });
            } else i.push(e);
          },
          o,
        ),
        t.c)
      )
        for (e = 0; e < i.length; e++) t.b(i[e]);
      for (e = 0; e < i.length; e++) r(i[e]);
    }
    function se(t, e) {
      if (void 0 === e.__CE_state) {
        var n = e.ownerDocument;
        if (
          (n.defaultView || (n.__CE_isImportDocument && n.__CE_hasRegistry)) &&
          (n = t.a.get(e.localName))
        ) {
          n.constructionStack.push(e);
          var o = n.constructorFunction;
          try {
            try {
              if (new o() !== e)
                throw Error(
                  'The custom element constructor did not produce the element being upgraded.',
                );
            } finally {
              n.constructionStack.pop();
            }
          } catch (t) {
            throw ((e.__CE_state = 2), t);
          }
          if (
            ((e.__CE_state = 1),
            (e.__CE_definition = n),
            n.attributeChangedCallback)
          )
            for (n = n.observedAttributes, o = 0; o < n.length; o++) {
              var r = n[o],
                i = e.getAttribute(r);
              null !== i && t.attributeChangedCallback(e, r, null, i, null);
            }
          Jt(e) && t.connectedCallback(e);
        }
      }
    }
    function le(t) {
      var e = document;
      (this.b = t),
        (this.a = e),
        (this.N = void 0),
        ae(this.b, this.a),
        'loading' === this.a.readyState &&
          ((this.N = new MutationObserver(this.c.bind(this))),
          this.N.observe(this.a, { childList: !0, subtree: !0 }));
    }
    function ce(t) {
      t.N && t.N.disconnect();
    }
    function ue() {
      var t = this;
      (this.a = this.w = void 0),
        (this.b = new Promise(function (e) {
          (t.a = e), t.w && e(t.w);
        }));
    }
    function he(t) {
      (this.c = !1),
        (this.a = t),
        (this.F = new Map()),
        (this.f = function (t) {
          return t();
        }),
        (this.b = !1),
        (this.u = []),
        (this.ca = new le(t));
    }
    function de(t, e, n) {
      function o(e) {
        return function (n) {
          for (var o = [], r = 0; r < arguments.length; ++r)
            o[r] = arguments[r];
          r = [];
          for (var i = [], a = 0; a < o.length; a++) {
            var s = o[a];
            if (
              (s instanceof Element && Jt(s) && i.push(s),
              s instanceof DocumentFragment)
            )
              for (s = s.firstChild; s; s = s.nextSibling) r.push(s);
            else r.push(s);
          }
          for (e.apply(this, o), o = 0; o < i.length; o++) ie(t, i[o]);
          if (Jt(this))
            for (o = 0; o < r.length; o++)
              (i = r[o]) instanceof Element && re(t, i);
        };
      }
      void 0 !== n.ea && (e.prepend = o(n.ea)),
        void 0 !== n.append && (e.append = o(n.append));
    }
    function fe(t) {
      function e(e) {
        return function (n) {
          for (var o = [], r = 0; r < arguments.length; ++r)
            o[r] = arguments[r];
          r = [];
          for (var i = [], a = 0; a < o.length; a++) {
            var s = o[a];
            if (
              (s instanceof Element && Jt(s) && i.push(s),
              s instanceof DocumentFragment)
            )
              for (s = s.firstChild; s; s = s.nextSibling) r.push(s);
            else r.push(s);
          }
          for (e.apply(this, o), o = 0; o < i.length; o++) ie(t, i[o]);
          if (Jt(this))
            for (o = 0; o < r.length; o++)
              (i = r[o]) instanceof Element && re(t, i);
        };
      }
      var n = Element.prototype;
      void 0 !== Gr && (n.before = e(Gr)),
        void 0 !== Gr && (n.after = e(Kr)),
        void 0 !== $r &&
          Qt(n, 'replaceWith', function (e) {
            for (var n = [], o = 0; o < arguments.length; ++o)
              n[o] = arguments[o];
            o = [];
            for (var r = [], i = 0; i < n.length; i++) {
              var a = n[i];
              if (
                (a instanceof Element && Jt(a) && r.push(a),
                a instanceof DocumentFragment)
              )
                for (a = a.firstChild; a; a = a.nextSibling) o.push(a);
              else o.push(a);
            }
            for (i = Jt(this), $r.apply(this, n), n = 0; n < r.length; n++)
              ie(t, r[n]);
            if (i)
              for (ie(t, this), n = 0; n < o.length; n++)
                (r = o[n]) instanceof Element && re(t, r);
          }),
        void 0 !== Xr &&
          Qt(n, 'remove', function () {
            var e = Jt(this);
            Xr.call(this), e && ie(t, this);
          });
    }
    function pe() {
      (this.end = this.start = 0),
        (this.rules = this.parent = this.previous = null),
        (this.cssText = this.parsedCssText = ''),
        (this.atRule = !1),
        (this.type = 0),
        (this.parsedSelector = this.selector = this.keyframesName = '');
    }
    function me(t) {
      var e = _e,
        n = (t = t.replace(ci, '').replace(ui, '')),
        o = new pe();
      (o.start = 0), (o.end = n.length);
      for (var r = o, i = 0, a = n.length; i < a; i++)
        if ('{' === n[i]) {
          r.rules || (r.rules = []);
          var s = r,
            l = s.rules[s.rules.length - 1] || null;
          ((r = new pe()).start = i + 1),
            (r.parent = s),
            (r.previous = l),
            s.rules.push(r);
        } else '}' === n[i] && ((r.end = i + 1), (r = r.parent || o));
      return e(o, t);
    }
    function _e(t, e) {
      var n = e.substring(t.start, t.end - 1);
      if (
        ((t.parsedCssText = t.cssText = n.trim()),
        t.parent &&
          ((n = e.substring(
            t.previous ? t.previous.end : t.parent.start,
            t.start - 1,
          )),
          (n = ye(n)),
          (n = n.replace(_i, ' ')),
          (n = n.substring(n.lastIndexOf(';') + 1)),
          (n = t.parsedSelector = t.selector = n.trim()),
          (t.atRule = 0 === n.indexOf('@')),
          t.atRule
            ? 0 === n.indexOf('@media')
              ? (t.type = si)
              : n.match(mi) &&
                ((t.type = ai), (t.keyframesName = t.selector.split(_i).pop()))
            : (t.type = 0 === n.indexOf('--') ? li : ii)),
        (n = t.rules))
      )
        for (var o = 0, r = n.length, i = void 0; o < r && (i = n[o]); o++)
          _e(i, e);
      return t;
    }
    function ye(t) {
      return t.replace(/\\([0-9a-f]{1,6})\s/gi, function (t, e) {
        for (e = 6 - (t = e).length; e--; ) t = '0' + t;
        return '\\' + t;
      });
    }
    function ve(t, e, n) {
      n = void 0 === n ? '' : n;
      var o = '';
      if (t.cssText || t.rules) {
        var r,
          i = t.rules;
        if (
          ((r = i) &&
            ((r = i[0]),
            (r = !(r && r.selector && 0 === r.selector.indexOf('--')))),
          r)
        ) {
          r = 0;
          for (var a = i.length, s = void 0; r < a && (s = i[r]); r++)
            o = ve(s, e, o);
        } else
          e
            ? (e = t.cssText)
            : ((e = t.cssText),
              (e = e.replace(hi, '').replace(di, '')),
              (e = e.replace(fi, '').replace(pi, ''))),
            (o = e.trim()) && (o = '  ' + o + '\n');
      }
      return (
        o &&
          (t.selector && (n += t.selector + ' {\n'),
          (n += o),
          t.selector && (n += '}\n\n')),
        n
      );
    }
    function ge(t) {
      oi =
        (!t || !t.shimcssproperties) &&
        (yi ||
          !(
            navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) ||
            !window.CSS ||
            !CSS.supports ||
            !CSS.supports('box-shadow', '0 0 0 var(--foo)')
          ));
    }
    function be(t, e) {
      return t
        ? ('string' == typeof t && (t = me(t)), e && Ne(t, e), ve(t, gi))
        : '';
    }
    function we(t) {
      return (
        !t.__cssRules && t.textContent && (t.__cssRules = me(t.textContent)),
        t.__cssRules || null
      );
    }
    function Ee(t) {
      return !!t.parent && t.parent.type === ai;
    }
    function Ne(t, e, n, o) {
      if (t) {
        var r = !1,
          i = t.type;
        if (o && i === si) {
          var a = t.selector.match(Si);
          a && (window.matchMedia(a[1]).matches || (r = !0));
        }
        if (
          (i === ii ? e(t) : n && i === ai ? n(t) : i === li && (r = !0),
          (t = t.rules) && !r)
        )
          for (r = 0, i = t.length, a = void 0; r < i && (a = t[r]); r++)
            Ne(a, e, n, o);
      }
    }
    function Ce(t, e, n, o) {
      var r = document.createElement('style');
      return (
        e && r.setAttribute('scope', e), (r.textContent = t), Te(r, n, o), r
      );
    }
    function Se(t) {
      t = document.createComment(' Shady DOM styles for ' + t + ' ');
      var e = document.head;
      return (
        e.insertBefore(t, (Di ? Di.nextSibling : null) || e.firstChild),
        (Di = t)
      );
    }
    function Te(t, e, n) {
      (e = e || document.head).insertBefore(
        t,
        (n && n.nextSibling) || e.firstChild,
      ),
        Di
          ? t.compareDocumentPosition(Di) ===
              Node.DOCUMENT_POSITION_PRECEDING && (Di = t)
          : (Di = t);
    }
    function Oe(t, e) {
      for (var n = 0, o = t.length; e < o; e++)
        if ('(' === t[e]) n++;
        else if (')' === t[e] && 0 == --n) return e;
      return -1;
    }
    function De(t, e) {
      var n = t.indexOf('var(');
      if (-1 === n) return e(t, '', '', '');
      var o = Oe(t, n + 3),
        r = t.substring(n + 4, o);
      return (
        (n = t.substring(0, n)),
        (t = De(t.substring(o + 1), e)),
        (o = r.indexOf(',')),
        -1 === o
          ? e(n, r.trim(), '', t)
          : e(n, r.substring(0, o).trim(), r.substring(o + 1).trim(), t)
      );
    }
    function Me(t, e) {
      yi
        ? t.setAttribute('class', e)
        : window.ShadyDOM.nativeMethods.setAttribute.call(t, 'class', e);
    }
    function Ae(t) {
      var e = t.localName,
        n = '';
      return (
        e
          ? -1 < e.indexOf('-') ||
            ((n = e), (e = (t.getAttribute && t.getAttribute('is')) || ''))
          : ((e = t.is), (n = t.extends)),
        { is: e, W: n }
      );
    }
    function xe(t) {
      for (var e = [], n = '', o = 0; 0 <= o && o < t.length; o++)
        if ('(' === t[o]) {
          var r = Oe(t, o);
          (n += t.slice(o, r + 1)), (o = r);
        } else ',' === t[o] ? (e.push(n), (n = '')) : (n += t[o]);
      return n && e.push(n), e;
    }
    function ke(t) {
      if (void 0 !== bi) return bi;
      if (void 0 === t.__cssBuild) {
        var e = t.getAttribute('css-build');
        if (e) t.__cssBuild = e;
        else {
          if (
            '' !==
            (e =
              (e =
                'template' === t.localName
                  ? t.content.firstChild
                  : t.firstChild) instanceof Comment &&
              'css-build' === (e = e.textContent.trim().split(':'))[0]
                ? e[1]
                : '')
          ) {
            var n =
              'template' === t.localName ? t.content.firstChild : t.firstChild;
            n.parentNode.removeChild(n);
          }
          t.__cssBuild = e;
        }
      }
      return t.__cssBuild || '';
    }
    function Le(t) {
      return (
        !('' === (t = void 0 === t ? '' : t) || !gi) &&
        (yi ? 'shadow' === t : 'shady' === t)
      );
    }
    function Pe() {}
    function je(t, e) {
      Re(Fi, t, function (t) {
        He(t, e || '');
      });
    }
    function Re(t, e, n) {
      e.nodeType === Node.ELEMENT_NODE && n(e);
      var o;
      if (
        (o =
          'template' === e.localName
            ? (e.content || e._content || e).childNodes
            : e.children || e.childNodes)
      )
        for (e = 0; e < o.length; e++) Re(t, o[e], n);
    }
    function He(t, e, n) {
      if (e)
        if (t.classList)
          n
            ? (t.classList.remove('style-scope'), t.classList.remove(e))
            : (t.classList.add('style-scope'), t.classList.add(e));
        else if (t.getAttribute) {
          var o = t.getAttribute('class');
          n
            ? o && ((e = o.replace('style-scope', '').replace(e, '')), Me(t, e))
            : Me(t, (o ? o + ' ' : '') + 'style-scope ' + e);
        }
    }
    function Fe(t, e, n) {
      Re(Fi, t, function (t) {
        He(t, e, !0), He(t, n);
      });
    }
    function Ie(t, e) {
      Re(Fi, t, function (t) {
        He(t, e || '', !0);
      });
    }
    function qe(t, e, n, o, r) {
      var i = Fi;
      return (
        '' === (r = void 0 === r ? '' : r) &&
          (yi || 'shady' === (void 0 === o ? '' : o)
            ? (r = be(e, n))
            : ((t = Ae(t)), (r = Be(i, e, t.is, t.W, n) + '\n\n'))),
        r.trim()
      );
    }
    function Be(t, e, n, o, r) {
      var i = Ue(n, o);
      return (
        (n = n ? '.' + n : ''),
        be(e, function (e) {
          e.c || ((e.selector = e.C = We(t, e, t.b, n, i)), (e.c = !0)),
            r && r(e, n, i);
        })
      );
    }
    function Ue(t, e) {
      return e ? '[is=' + t + ']' : t;
    }
    function We(t, e, n, o, r) {
      var i = xe(e.selector);
      if (!Ee(e)) {
        e = 0;
        for (var a = i.length, s = void 0; e < a && (s = i[e]); e++)
          i[e] = n.call(t, s, o, r);
      }
      return i
        .filter(function (t) {
          return !!t;
        })
        .join(',');
    }
    function Ve(t) {
      return t.replace(Ai, function (t, e, n) {
        return (
          -1 < n.indexOf('+')
            ? (n = n.replace(/\+/g, '___'))
            : -1 < n.indexOf('___') && (n = n.replace(/___/g, '+')),
          ':' + e + '(' + n + ')'
        );
      });
    }
    function Ge(t) {
      for (var e, n = []; (e = t.match(Hi)); ) {
        var o = e.index,
          r = Oe(t, o);
        if (-1 === r) throw Error(e.input + " selector missing ')'");
        (e = t.slice(o, r + 1)), (t = t.replace(e, '')), n.push(e);
      }
      return { oa: t, matches: n };
    }
    function Ke(t, e) {
      var n = t.split('');
      return e.reduce(function (t, e, o) {
        return t + e + n[o + 1];
      }, n[0]);
    }
    function $e(t, e, n, o) {
      var r = t.indexOf('::slotted');
      if (
        (0 <= t.indexOf(':host')
          ? (t = ze(t, o))
          : 0 !== r && (t = n ? Xe(t, n) : t),
        (n = !1),
        0 <= r && ((e = ''), (n = !0)),
        n)
      ) {
        var i = !0;
        n &&
          (t = t.replace(ji, function (t, e) {
            return ' > ' + e;
          }));
      }
      return (
        (t = t.replace(Ri, function (t, e, n) {
          return '[dir="' + n + '"] ' + e + ', ' + e + '[dir="' + n + '"]';
        })),
        { value: t, Ga: e, stop: i }
      );
    }
    function Xe(t, e) {
      t = t.split(/(\[.+?\])/);
      for (var n = [], o = 0; o < t.length; o++)
        if (1 == o % 2) n.push(t[o]);
        else {
          var r = t[o];
          ('' === r && o === t.length - 1) ||
            ((r = r.split(':')), (r[0] += e), n.push(r.join(':')));
        }
      return n.join('');
    }
    function ze(t, e) {
      var n = t.match(Pi);
      return (n = (n && n[2].trim()) || '')
        ? n[0].match(ki)
          ? t.replace(Pi, function (t, n, o) {
              return e + o;
            })
          : n.split(ki)[0] === e
          ? n
          : 'should_not_match'
        : t.replace(':host', e);
    }
    function Je(t) {
      ':root' === t.selector && (t.selector = 'html');
    }
    function Ye(t, e, n, o, r) {
      (this.L = t || null),
        (this.b = e || null),
        (this.ma = n || []),
        (this.G = null),
        (this.cssBuild = r || ''),
        (this.W = o || ''),
        (this.a = this.H = this.K = null);
    }
    function Ze(t) {
      return t ? t.__styleInfo : null;
    }
    function Qe(t, e) {
      return (t.__styleInfo = e);
    }
    function tn(t) {
      var e =
        this.matches ||
        this.matchesSelector ||
        this.mozMatchesSelector ||
        this.msMatchesSelector ||
        this.oMatchesSelector ||
        this.webkitMatchesSelector;
      return e && e.call(this, t);
    }
    function en() {}
    function nn(t) {
      var e = {},
        n = [],
        o = 0;
      Ne(
        t,
        function (t) {
          on(t), (t.index = o++), (t = t.A.cssText);
          for (var n; (n = Ni.exec(t)); ) {
            var r = n[1];
            ':' !== n[2] && (e[r] = !0);
          }
        },
        function (t) {
          n.push(t);
        },
      ),
        (t.b = n),
        (t = []);
      for (var r in e) t.push(r);
      return t;
    }
    function on(t) {
      if (!t.A) {
        var e = {},
          n = {};
        rn(t, n) && ((e.J = n), (t.rules = null)),
          (e.cssText = t.parsedCssText.replace(Ti, '').replace(wi, '')),
          (t.A = e);
      }
    }
    function rn(t, e) {
      var n = t.A;
      if (!n) {
        n = t.parsedCssText;
        for (var o; (t = wi.exec(n)); )
          ('inherit' === (o = (t[2] || t[3]).trim()) && 'unset' === o) ||
            (e[t[1].trim()] = o),
            (o = !0);
        return o;
      }
      if (n.J) return Object.assign(e, n.J), !0;
    }
    function an(t, e, n) {
      return (
        e &&
          (e =
            0 <= e.indexOf(';')
              ? sn(t, e, n)
              : De(e, function (e, o, r, i) {
                  return o
                    ? ((o = an(t, n[o], n)) && 'initial' !== o
                        ? 'apply-shim-inherit' === o && (o = 'inherit')
                        : (o = an(t, n[r] || r, n) || r),
                      e + (o || '') + i)
                    : e + i;
                })),
        (e && e.trim()) || ''
      );
    }
    function sn(t, e, n) {
      e = e.split(';');
      for (var o, r, i = 0; i < e.length; i++)
        if ((o = e[i])) {
          if (((Ei.lastIndex = 0), (r = Ei.exec(o)))) o = an(t, n[r[1]], n);
          else if (-1 !== (r = o.indexOf(':'))) {
            var a = o.substring(r);
            (a = an(t, (a = a.trim()), n) || a), (o = o.substring(0, r) + a);
          }
          e[i] =
            o && o.lastIndexOf(';') === o.length - 1 ? o.slice(0, -1) : o || '';
        }
      return e.join(';');
    }
    function ln(t, e) {
      var n = {},
        o = [];
      return (
        Ne(
          t,
          function (t) {
            t.A || on(t);
            var r = t.C || t.parsedSelector;
            e &&
              t.A.J &&
              r &&
              tn.call(e, r) &&
              (rn(t, n),
              (t = t.index),
              (r = parseInt(t / 32, 10)),
              (o[r] = (o[r] || 0) | (1 << t % 32)));
          },
          null,
          !0,
        ),
        { J: n, key: o }
      );
    }
    function cn(t, e, n, o) {
      if ((e.A || on(e), e.A.J)) {
        var r = Ae(t);
        (t = r.is), (r = r.W), (r = t ? Ue(t, r) : 'html');
        var i = e.parsedSelector,
          a = ':host > *' === i || 'html' === i,
          s = 0 === i.indexOf(':host') && !a;
        'shady' === n &&
          ((a = i === r + ' > *.' + r || -1 !== i.indexOf('html')),
          (s = !a && 0 === i.indexOf(r))),
          (a || s) &&
            ((n = r),
            s &&
              (e.C || (e.C = We(Fi, e, Fi.b, t ? '.' + t : '', r)),
              (n = e.C || r)),
            o({ oa: n, Na: s, $a: a }));
      }
    }
    function un(t, e, n) {
      var o = {},
        r = {};
      return (
        Ne(
          e,
          function (e) {
            cn(t, e, n, function (n) {
              tn.call(t._element || t, n.oa) && (n.Na ? rn(e, o) : rn(e, r));
            });
          },
          null,
          !0,
        ),
        { Sa: r, La: o }
      );
    }
    function hn(t, e, n, o) {
      var r = Ae(e),
        i = Ue(r.is, r.W),
        a = new RegExp(
          '(?:^|[^.#[:])' +
            (e.extends ? '\\' + i.slice(0, -1) + '\\]' : i) +
            '($|[.:[\\s>+~])',
        ),
        s = Ze(e);
      (r = s.L), (s = s.cssBuild);
      var l = dn(r, o);
      return qe(
        e,
        r,
        function (e) {
          var r = '';
          if (
            (e.A || on(e),
            e.A.cssText && (r = sn(t, e.A.cssText, n)),
            (e.cssText = r),
            !yi && !Ee(e) && e.cssText)
          ) {
            var s = (r = e.cssText);
            if ((null == e.sa && (e.sa = Ci.test(r)), e.sa))
              if (null == e.da) {
                e.da = [];
                for (var c in l)
                  (s = l[c]), (s = s(r)), r !== s && ((r = s), e.da.push(c));
              } else {
                for (c = 0; c < e.da.length; ++c) (s = l[e.da[c]]), (r = s(r));
                s = r;
              }
            (e.cssText = s), (e.C = e.C || e.selector), (r = '.' + o), (s = 0);
            for (
              var u = (c = xe(e.C)).length, h = void 0;
              s < u && (h = c[s]);
              s++
            )
              c[s] = h.match(a) ? h.replace(i, r) : r + ' ' + h;
            e.selector = c.join(',');
          }
        },
        s,
      );
    }
    function dn(t, e) {
      t = t.b;
      var n = {};
      if (!yi && t)
        for (var o = 0, r = t[o]; o < t.length; r = t[++o]) {
          var i = r,
            a = e;
          (i.f = new RegExp('\\b' + i.keyframesName + '(?!\\B|-)', 'g')),
            (i.a = i.keyframesName + '-' + a),
            (i.C = i.C || i.selector),
            (i.selector = i.C.replace(i.keyframesName, i.a)),
            (n[r.keyframesName] = fn(r));
        }
      return n;
    }
    function fn(t) {
      return function (e) {
        return e.replace(t.f, t.a);
      };
    }
    function pn(t, e) {
      var n = qi,
        o = we(t);
      t.textContent = be(o, function (t) {
        var o = (t.cssText = t.parsedCssText);
        t.A &&
          t.A.cssText &&
          ((o = o.replace(hi, '').replace(di, '')), (t.cssText = sn(n, o, e)));
      });
    }
    function mn() {
      this.cache = {};
    }
    function _n() {}
    function yn(t) {
      return (t = (
        t.classList && t.classList.value
          ? t.classList.value
          : t.getAttribute('class') || ''
      ).match(Vi))
        ? t[1]
        : '';
    }
    function vn(t) {
      var e = Mi(t).getRootNode();
      return e === t || e === t.ownerDocument
        ? ''
        : (t = e.host)
        ? Ae(t).is
        : '';
    }
    function gn(t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e];
        if (n.target !== document.documentElement && n.target !== document.head)
          for (var o = 0; o < n.addedNodes.length; o++) {
            var r = n.addedNodes[o];
            if (r.nodeType === Node.ELEMENT_NODE) {
              var i = r.getRootNode(),
                a = yn(r);
              if (
                a &&
                i === r.ownerDocument &&
                (('style' !== r.localName && 'template' !== r.localName) ||
                  '' === ke(r))
              )
                Ie(r, a);
              else if (i instanceof ShadowRoot)
                for (
                  (i = vn(r)) !== a && Fe(r, a, i),
                    r = window.ShadyDOM.nativeMethods.querySelectorAll.call(
                      r,
                      ':not(.' + Fi.a + ')',
                    ),
                    a = 0;
                  a < r.length;
                  a++
                ) {
                  var s = vn((i = r[a]));
                  s && He(i, s);
                }
            }
          }
      }
    }
    function bn(t) {
      (t = zi[t]) &&
        ((t._applyShimCurrentVersion = t._applyShimCurrentVersion || 0),
        (t._applyShimValidatingVersion = t._applyShimValidatingVersion || 0),
        (t._applyShimNextVersion = (t._applyShimNextVersion || 0) + 1));
    }
    function wn(t) {
      return t._applyShimCurrentVersion === t._applyShimNextVersion;
    }
    function En(t) {
      (t._applyShimValidatingVersion = t._applyShimNextVersion),
        t._validating ||
          ((t._validating = !0),
          Ji.then(function () {
            (t._applyShimCurrentVersion = t._applyShimNextVersion),
              (t._validating = !1);
          }));
    }
    function Nn() {
      (this.F = {}), (this.c = document.documentElement);
      var t = new pe();
      (t.rules = []),
        (this.f = Qe(this.c, new Ye(t))),
        (this.u = !1),
        (this.b = this.a = null);
    }
    function Cn(t) {
      var e = Ae(t),
        n = e.is;
      e = e.W;
      var o = Bi[n] || null,
        r = zi[n];
      if (r) {
        n = r._styleAst;
        var i = r.a;
        return (r = ke(r)), (e = new Ye(n, o, i, e, r)), Qe(t, e), e;
      }
    }
    function Sn(t) {
      !t.b &&
        window.ShadyCSS &&
        window.ShadyCSS.CustomStyleInterface &&
        ((t.b = window.ShadyCSS.CustomStyleInterface),
        (t.b.transformCallback = function (e) {
          t.va(e);
        }),
        (t.b.validateCallback = function () {
          requestAnimationFrame(function () {
            (t.b.enqueued || t.u) && t.flushCustomStyles();
          });
        }));
    }
    function Tn(t) {
      !t.a &&
        window.ShadyCSS &&
        window.ShadyCSS.ApplyShim &&
        ((t.a = window.ShadyCSS.ApplyShim), (t.a.invalidCallback = bn)),
        Sn(t);
    }
    function On(t, e, n) {
      var o = Ae(e).is;
      if (n.G) {
        var r,
          i = n.G;
        for (r in i)
          null === r ? e.style.removeProperty(r) : e.style.setProperty(r, i[r]);
      }
      (!(i = zi[o]) && e !== t.c) ||
        (i && '' !== ke(i)) ||
        !i ||
        !i._style ||
        wn(i) ||
        ((wn(i) || i._applyShimValidatingVersion !== i._applyShimNextVersion) &&
          (Tn(t),
          t.a && t.a.transformRules(i._styleAst, o),
          (i._style.textContent = qe(e, n.L)),
          En(i)),
        yi &&
          (t = e.shadowRoot) &&
          (t = t.querySelector('style')) &&
          (t.textContent = qe(e, n.L)),
        (n.L = i._styleAst));
    }
    function Dn(t, e) {
      return (e = Mi(e).getRootNode().host)
        ? Ze(e) || Cn(e)
          ? e
          : Dn(t, e)
        : t.c;
    }
    function Mn(t, e, n) {
      var o = Dn(t, e),
        r = Ze(o),
        i = r.K;
      o === t.c || i || (Mn(t, o, r), (i = r.K)),
        (t = Object.create(i || null)),
        (o = un(e, n.L, n.cssBuild)),
        (e = ln(r.L, e).J),
        Object.assign(t, o.La, e, o.Sa),
        (e = n.G);
      for (var a in e) ((r = e[a]) || 0 === r) && (t[a] = r);
      for (a = qi, e = Object.getOwnPropertyNames(t), r = 0; r < e.length; r++)
        (o = e[r]), (t[o] = an(a, t[o], t));
      n.K = t;
    }
    function An() {
      window.HTMLTemplateElement.bootstrap &&
        window.HTMLTemplateElement.bootstrap(window.document),
        aa && aa(),
        (ia = !0),
        (window.WebComponents.ready = !0),
        document.dispatchEvent(
          new CustomEvent('WebComponentsReady', { bubbles: !0 }),
        );
    }
    var xn,
      kn,
      Ln =
        'undefined' != typeof window && window === this
          ? this
          : void 0 !== e && null != e
          ? e
          : this,
      Pn =
        'function' == typeof Object.defineProperties
          ? Object.defineProperty
          : function (t, e, n) {
              t != Array.prototype && t != Object.prototype && (t[e] = n.value);
            },
      jn = (function () {
        var t = 0;
        return function (e) {
          return 'jscomp_symbol_' + (e || '') + t++;
        };
      })();
    if ('function' == typeof Object.setPrototypeOf) kn = Object.setPrototypeOf;
    else {
      var Rn;
      t: {
        var Hn = { Fa: !0 },
          Fn = {};
        try {
          (Fn.__proto__ = Hn), (Rn = Fn.Fa);
          break t;
        } catch (t) {}
        Rn = !1;
      }
      kn = Rn
        ? function (t, e) {
            if (((t.__proto__ = e), t.__proto__ !== e))
              throw new TypeError(t + ' is not extensible');
            return t;
          }
        : null;
    }
    var In = kn;
    (s.prototype.u = function (t) {
      this.ca = t;
    }),
      (s.prototype.return = function (t) {
        (this.c = { return: t }), (this.a = this.F);
      }),
      (function () {
        if (
          !(function () {
            var t = document.createEvent('Event');
            return (
              t.initEvent('foo', !0, !0), t.preventDefault(), t.defaultPrevented
            );
          })()
        ) {
          var t = Event.prototype.preventDefault;
          Event.prototype.preventDefault = function () {
            this.cancelable &&
              (t.call(this),
              Object.defineProperty(this, 'defaultPrevented', {
                get: function () {
                  return !0;
                },
                configurable: !0,
              }));
          };
        }
        var e = /Trident/.test(navigator.userAgent);
        if (
          ((!window.CustomEvent ||
            (e && 'function' != typeof window.CustomEvent)) &&
            ((window.CustomEvent = function (t, e) {
              e = e || {};
              var n = document.createEvent('CustomEvent');
              return (
                n.initCustomEvent(t, !!e.bubbles, !!e.cancelable, e.detail), n
              );
            }),
            (window.CustomEvent.prototype = window.Event.prototype)),
          !window.Event || (e && 'function' != typeof window.Event))
        ) {
          var n = window.Event;
          if (
            ((window.Event = function (t, e) {
              e = e || {};
              var n = document.createEvent('Event');
              return n.initEvent(t, !!e.bubbles, !!e.cancelable), n;
            }),
            n)
          )
            for (var o in n) window.Event[o] = n[o];
          window.Event.prototype = n.prototype;
        }
        if (
          !window.MouseEvent ||
          (e && 'function' != typeof window.MouseEvent)
        ) {
          if (
            ((e = window.MouseEvent),
            (window.MouseEvent = function (t, e) {
              e = e || {};
              var n = document.createEvent('MouseEvent');
              return (
                n.initMouseEvent(
                  t,
                  !!e.bubbles,
                  !!e.cancelable,
                  e.view || window,
                  e.detail,
                  e.screenX,
                  e.screenY,
                  e.clientX,
                  e.clientY,
                  e.ctrlKey,
                  e.altKey,
                  e.shiftKey,
                  e.metaKey,
                  e.button,
                  e.relatedTarget,
                ),
                n
              );
            }),
            e)
          )
            for (o in e) window.MouseEvent[o] = e[o];
          window.MouseEvent.prototype = e.prototype;
        }
        Array.from ||
          (Array.from = function (t) {
            return [].slice.call(t);
          }),
          Object.assign ||
            (Object.assign = function (t, e) {
              for (
                var n, o = [].slice.call(arguments, 1), r = 0;
                r < o.length;
                r++
              )
                if ((n = o[r]))
                  for (
                    var i = t, a = n, s = Object.getOwnPropertyNames(a), l = 0;
                    l < s.length;
                    l++
                  )
                    (n = s[l]), (i[n] = a[n]);
              return t;
            });
      })(window.WebComponents),
      (function () {
        function t() {}
        function e(t, e) {
          if (!t.childNodes.length) return [];
          switch (t.nodeType) {
            case Node.DOCUMENT_NODE:
              return m.call(t, e);
            case Node.DOCUMENT_FRAGMENT_NODE:
              return _.call(t, e);
            default:
              return p.call(t, e);
          }
        }
        var n = 'undefined' == typeof HTMLTemplateElement,
          o = !(
            document.createDocumentFragment().cloneNode() instanceof
            DocumentFragment
          ),
          r = !1;
        /Trident/.test(navigator.userAgent) &&
          (function () {
            function t(t, e) {
              if (t instanceof DocumentFragment)
                for (var o; (o = t.firstChild); ) n.call(this, o, e);
              else n.call(this, t, e);
              return t;
            }
            r = !0;
            var e = Node.prototype.cloneNode;
            (Node.prototype.cloneNode = function (t) {
              return (
                (t = e.call(this, t)),
                this instanceof DocumentFragment &&
                  (t.__proto__ = DocumentFragment.prototype),
                t
              );
            }),
              (DocumentFragment.prototype.querySelectorAll =
                HTMLElement.prototype.querySelectorAll),
              (DocumentFragment.prototype.querySelector =
                HTMLElement.prototype.querySelector),
              Object.defineProperties(DocumentFragment.prototype, {
                nodeType: {
                  get: function () {
                    return Node.DOCUMENT_FRAGMENT_NODE;
                  },
                  configurable: !0,
                },
                localName: { get: function () {}, configurable: !0 },
                nodeName: {
                  get: function () {
                    return '#document-fragment';
                  },
                  configurable: !0,
                },
              });
            var n = Node.prototype.insertBefore;
            Node.prototype.insertBefore = t;
            var o = Node.prototype.appendChild;
            Node.prototype.appendChild = function (e) {
              return (
                e instanceof DocumentFragment
                  ? t.call(this, e, null)
                  : o.call(this, e),
                e
              );
            };
            var i = Node.prototype.removeChild,
              a = Node.prototype.replaceChild;
            (Node.prototype.replaceChild = function (e, n) {
              return (
                e instanceof DocumentFragment
                  ? (t.call(this, e, n), i.call(this, n))
                  : a.call(this, e, n),
                n
              );
            }),
              (Document.prototype.createDocumentFragment = function () {
                var t = this.createElement('df');
                return (t.__proto__ = DocumentFragment.prototype), t;
              });
            var s = Document.prototype.importNode;
            Document.prototype.importNode = function (t, e) {
              return (
                (e = s.call(this, t, e || !1)),
                t instanceof DocumentFragment &&
                  (e.__proto__ = DocumentFragment.prototype),
                e
              );
            };
          })();
        var i = Node.prototype.cloneNode,
          a = Document.prototype.createElement,
          s = Document.prototype.importNode,
          l = Node.prototype.removeChild,
          c = Node.prototype.appendChild,
          u = Node.prototype.replaceChild,
          h = DOMParser.prototype.parseFromString,
          d = Object.getOwnPropertyDescriptor(
            window.HTMLElement.prototype,
            'innerHTML',
          ) || {
            get: function () {
              return this.innerHTML;
            },
            set: function (t) {
              this.innerHTML = t;
            },
          },
          f = Object.getOwnPropertyDescriptor(
            window.Node.prototype,
            'childNodes',
          ) || {
            get: function () {
              return this.childNodes;
            },
          },
          p = Element.prototype.querySelectorAll,
          m = Document.prototype.querySelectorAll,
          _ = DocumentFragment.prototype.querySelectorAll,
          y = (function () {
            if (!n) {
              var t = document.createElement('template'),
                e = document.createElement('template');
              return (
                e.content.appendChild(document.createElement('div')),
                t.content.appendChild(e),
                0 === (t = t.cloneNode(!0)).content.childNodes.length ||
                  0 === t.content.firstChild.content.childNodes.length ||
                  o
              );
            }
          })();
        if (n) {
          var v = document.implementation.createHTMLDocument('template'),
            g = !0,
            b = document.createElement('style');
          b.textContent = 'template{display:none;}';
          var w = document.head;
          w.insertBefore(b, w.firstElementChild),
            (t.prototype = Object.create(HTMLElement.prototype));
          var E = !document.createElement('div').hasOwnProperty('innerHTML');
          t.P = function (e) {
            if (
              !e.content &&
              e.namespaceURI === document.documentElement.namespaceURI
            ) {
              e.content = v.createDocumentFragment();
              for (var n; (n = e.firstChild); ) c.call(e.content, n);
              if (E) e.__proto__ = t.prototype;
              else if (
                ((e.cloneNode = function (e) {
                  return t.b(this, e);
                }),
                g)
              )
                try {
                  C(e), S(e);
                } catch (t) {
                  g = !1;
                }
              t.a(e.content);
            }
          };
          var N = {
              option: ['select'],
              thead: ['table'],
              col: ['colgroup', 'table'],
              tr: ['tbody', 'table'],
              th: ['tr', 'tbody', 'table'],
              td: ['tr', 'tbody', 'table'],
            },
            C = function (e) {
              Object.defineProperty(e, 'innerHTML', {
                get: function () {
                  return M(this);
                },
                set: function (e) {
                  var n =
                    N[
                      (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i.exec(e) || [
                        '',
                        '',
                      ])[1].toLowerCase()
                    ];
                  if (n)
                    for (var o = 0; o < n.length; o++)
                      e = '<' + n[o] + '>' + e + '</' + n[o] + '>';
                  for (v.body.innerHTML = e, t.a(v); this.content.firstChild; )
                    l.call(this.content, this.content.firstChild);
                  if (((e = v.body), n))
                    for (o = 0; o < n.length; o++) e = e.lastChild;
                  for (; e.firstChild; ) c.call(this.content, e.firstChild);
                },
                configurable: !0,
              });
            },
            S = function (t) {
              Object.defineProperty(t, 'outerHTML', {
                get: function () {
                  return '<template>' + this.innerHTML + '</template>';
                },
                set: function (t) {
                  if (!this.parentNode)
                    throw Error(
                      "Failed to set the 'outerHTML' property on 'Element': This element has no parent node.",
                    );
                  for (
                    v.body.innerHTML = t,
                      t = this.ownerDocument.createDocumentFragment();
                    v.body.firstChild;

                  )
                    c.call(t, v.body.firstChild);
                  u.call(this.parentNode, t, this);
                },
                configurable: !0,
              });
            };
          C(t.prototype),
            S(t.prototype),
            (t.a = function (n) {
              for (
                var o, r = 0, i = (n = e(n, 'template')).length;
                r < i && (o = n[r]);
                r++
              )
                t.P(o);
            }),
            document.addEventListener('DOMContentLoaded', function () {
              t.a(document);
            }),
            (Document.prototype.createElement = function () {
              var e = a.apply(this, arguments);
              return 'template' === e.localName && t.P(e), e;
            }),
            (DOMParser.prototype.parseFromString = function () {
              var e = h.apply(this, arguments);
              return t.a(e), e;
            }),
            Object.defineProperty(HTMLElement.prototype, 'innerHTML', {
              get: function () {
                return M(this);
              },
              set: function (e) {
                d.set.call(this, e), t.a(this);
              },
              configurable: !0,
              enumerable: !0,
            });
          var T = function (t) {
              switch (t) {
                case '&':
                  return '&amp;';
                case '<':
                  return '&lt;';
                case '>':
                  return '&gt;';
                case '"':
                  return '&quot;';
                case ' ':
                  return '&nbsp;';
              }
            },
            O = (b = function (t) {
              for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = !0;
              return e;
            })(
              'area base br col command embed hr img input keygen link meta param source track wbr'.split(
                ' ',
              ),
            ),
            D = b(
              'style script xmp iframe noembed noframes plaintext noscript'.split(
                ' ',
              ),
            ),
            M = function (t, e) {
              'template' === t.localName && (t = t.content);
              for (
                var n,
                  o = '',
                  r = e ? e(t) : f.get.call(t),
                  i = 0,
                  a = r.length;
                i < a && (n = r[i]);
                i++
              ) {
                t: {
                  var s = n,
                    l = t,
                    c = e;
                  switch (s.nodeType) {
                    case Node.ELEMENT_NODE:
                      for (
                        var u = s.localName,
                          h = '<' + u,
                          d = s.attributes,
                          p = 0;
                        (l = d[p]);
                        p++
                      )
                        h +=
                          ' ' +
                          l.name +
                          '="' +
                          l.value.replace(/[&\u00A0"]/g, T) +
                          '"';
                      (h += '>'), (s = O[u] ? h : h + M(s, c) + '</' + u + '>');
                      break t;
                    case Node.TEXT_NODE:
                      (s = s.data),
                        (s =
                          l && D[l.localName]
                            ? s
                            : s.replace(/[&\u00A0<>]/g, T));
                      break t;
                    case Node.COMMENT_NODE:
                      s = '\x3c!--' + s.data + '--\x3e';
                      break t;
                    default:
                      throw (window.console.error(s), Error('not implemented'));
                  }
                }
                o += s;
              }
              return o;
            };
        }
        if (n || y) {
          t.b = function (t, e) {
            var n = i.call(t, !1);
            return (
              this.P && this.P(n),
              e &&
                (c.call(n.content, i.call(t.content, !0)),
                A(n.content, t.content)),
              n
            );
          };
          var A = function (n, o) {
              if (o.querySelectorAll && 0 !== (o = e(o, 'template')).length)
                for (
                  var r, i, a = 0, s = (n = e(n, 'template')).length;
                  a < s;
                  a++
                )
                  (i = o[a]),
                    (r = n[a]),
                    t && t.P && t.P(i),
                    u.call(r.parentNode, x.call(i, !0), r);
            },
            x = (Node.prototype.cloneNode = function (e) {
              if (!r && o && this instanceof DocumentFragment) {
                if (!e) return this.ownerDocument.createDocumentFragment();
                var n = k.call(this.ownerDocument, this, !0);
              } else
                n =
                  this.nodeType === Node.ELEMENT_NODE &&
                  'template' === this.localName &&
                  this.namespaceURI == document.documentElement.namespaceURI
                    ? t.b(this, e)
                    : i.call(this, e);
              return e && A(n, this), n;
            }),
            k = (Document.prototype.importNode = function (n, o) {
              if (((o = o || !1), 'template' === n.localName)) return t.b(n, o);
              var r = s.call(this, n, o);
              if (o) {
                A(r, n),
                  (n = e(
                    r,
                    'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]',
                  ));
                for (var i, l = 0; l < n.length; l++) {
                  (i = n[l]),
                    ((o = a.call(document, 'script')).textContent =
                      i.textContent);
                  for (var c, h = i.attributes, d = 0; d < h.length; d++)
                    (c = h[d]), o.setAttribute(c.name, c.value);
                  u.call(i.parentNode, o, i);
                }
              }
              return r;
            });
        }
        n && (window.HTMLTemplateElement = t);
      })();
    var qn = setTimeout;
    (g.prototype.catch = function (t) {
      return this.then(null, t);
    }),
      (g.prototype.then = function (t, e) {
        var n = new this.constructor(y);
        return b(this, new C(t, e, n)), n;
      }),
      (g.prototype.finally = function (t) {
        var e = this.constructor;
        return this.then(
          function (n) {
            return e.resolve(t()).then(function () {
              return n;
            });
          },
          function (n) {
            return e.resolve(t()).then(function () {
              return e.reject(n);
            });
          },
        );
      });
    var Bn =
      ('function' == typeof setImmediate &&
        function (t) {
          setImmediate(t);
        }) ||
      function (t) {
        qn(t, 0);
      };
    if (!window.Promise) {
      (window.Promise = g),
        (g.prototype.then = g.prototype.then),
        (g.all = T),
        (g.race = M),
        (g.resolve = O),
        (g.reject = D);
      var Un = document.createTextNode(''),
        Wn = [];
      new MutationObserver(function () {
        for (var t = Wn.length, e = 0; e < t; e++) Wn[e]();
        Wn.splice(0, t);
      }).observe(Un, { characterData: !0 }),
        (Bn = function (t) {
          Wn.push(t), (Un.textContent = 0 < Un.textContent.length ? '' : 'a');
        });
    }
    !(function (t, n) {
      if (!(n in t)) {
        var o = typeof e == typeof o ? window : e,
          r = 0,
          i = '' + Math.random(),
          a = '__symbol@@' + i,
          s = t.getOwnPropertyNames,
          l = t.getOwnPropertyDescriptor,
          c = t.create,
          u = t.keys,
          h = t.freeze || t,
          d = t.defineProperty,
          f = t.defineProperties,
          p = l(t, 'getOwnPropertyNames'),
          m = t.prototype,
          _ = m.hasOwnProperty,
          y = m.propertyIsEnumerable,
          v = m.toString,
          g = function (t, e, n) {
            _.call(t, a) ||
              d(t, a, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: {},
              }),
              (t[a]['@@' + e] = n);
          },
          b = function (t, e) {
            var n = c(t);
            return (
              s(e).forEach(function (t) {
                C.call(e, t) && A(n, t, e[t]);
              }),
              n
            );
          },
          w = function () {},
          E = function (t) {
            return t != a && !_.call(O, t);
          },
          N = function (t) {
            return t != a && _.call(O, t);
          },
          C = function (t) {
            var e = '' + t;
            return N(e)
              ? _.call(this, e) && this[a]['@@' + e]
              : y.call(this, t);
          },
          S = function (e) {
            return (
              d(m, e, {
                enumerable: !1,
                configurable: !0,
                get: w,
                set: function (t) {
                  k(this, e, {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  }),
                    g(this, e, !0);
                },
              }),
              h((O[e] = d(t(e), 'constructor', D)))
            );
          },
          T = function (t) {
            if (this && this !== o)
              throw new TypeError('Symbol is not a constructor');
            return S('__symbol:'.concat(t || '', i, ++r));
          },
          O = c(null),
          D = { value: T },
          M = function (t) {
            return O[t];
          },
          A = function (t, e, n) {
            var o = '' + e;
            if (N(o)) {
              if (((e = k), n.enumerable)) {
                var r = c(n);
                r.enumerable = !1;
              } else r = n;
              e(t, o, r), g(t, o, !!n.enumerable);
            } else d(t, e, n);
            return t;
          },
          x = function (t) {
            return s(t).filter(N).map(M);
          };
        (p.value = A),
          d(t, 'defineProperty', p),
          (p.value = x),
          d(t, n, p),
          (p.value = function (t) {
            return s(t).filter(E);
          }),
          d(t, 'getOwnPropertyNames', p),
          (p.value = function (t, e) {
            var n = x(e);
            return (
              n.length
                ? u(e)
                    .concat(n)
                    .forEach(function (n) {
                      C.call(e, n) && A(t, n, e[n]);
                    })
                : f(t, e),
              t
            );
          }),
          d(t, 'defineProperties', p),
          (p.value = C),
          d(m, 'propertyIsEnumerable', p),
          (p.value = T),
          d(o, 'Symbol', p),
          (p.value = function (t) {
            return (
              (t = '__symbol:'.concat('__symbol:', t, i)), t in m ? O[t] : S(t)
            );
          }),
          d(T, 'for', p),
          (p.value = function (t) {
            if (E(t)) throw new TypeError(t + ' is not a symbol');
            return _.call(O, t) ? t.slice(20, -i.length) : void 0;
          }),
          d(T, 'keyFor', p),
          (p.value = function (t, e) {
            var n = l(t, e);
            return n && N(e) && (n.enumerable = C.call(t, e)), n;
          }),
          d(t, 'getOwnPropertyDescriptor', p),
          (p.value = function (t, e) {
            return 1 === arguments.length ? c(t) : b(t, e);
          }),
          d(t, 'create', p),
          (p.value = function () {
            var t = v.call(this);
            return '[object String]' === t && N(this) ? '[object Symbol]' : t;
          }),
          d(m, 'toString', p);
        try {
          var k =
            c(
              d({}, '__symbol:', {
                get: function () {
                  return d(this, '__symbol:', { value: !1 })['__symbol:'];
                },
              }),
            )['__symbol:'] || d;
        } catch (t) {
          k = function (t, e, n) {
            var o = l(m, e);
            delete m[e], d(t, e, n), d(m, e, o);
          };
        }
      }
    })(Object, 'getOwnPropertySymbols'),
      (function (t) {
        var e,
          n = t.defineProperty,
          o = t.prototype,
          r = o.toString;
        'iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag'
          .split(' ')
          .forEach(function (i) {
            if (!(i in Symbol))
              switch ((n(Symbol, i, { value: Symbol(i) }), i)) {
                case 'toStringTag':
                  ((e = t.getOwnPropertyDescriptor(o, 'toString')).value =
                    function () {
                      var t = r.call(this),
                        e = this[Symbol.toStringTag];
                      return void 0 === e ? t : '[object ' + e + ']';
                    }),
                    n(o, 'toString', e);
              }
          });
      })(Object, Symbol),
      (function (t, e, n) {
        function o() {
          return this;
        }
        e[t] ||
          (e[t] = function () {
            var e = 0,
              n = this,
              r = {
                next: function () {
                  var t = n.length <= e;
                  return t ? { done: t } : { done: t, value: n[e++] };
                },
              };
            return (r[t] = o), r;
          }),
          n[t] ||
            (n[t] = function () {
              var e = String.fromCodePoint,
                n = this,
                r = 0,
                i = n.length,
                a = {
                  next: function () {
                    var t = i <= r,
                      o = t ? '' : e(n.codePointAt(r));
                    return (
                      (r += o.length), t ? { done: t } : { done: t, value: o }
                    );
                  },
                };
              return (a[t] = o), a;
            });
      })(Symbol.iterator, Array.prototype, String.prototype);
    var Vn = Object.prototype.toString;
    (Object.prototype.toString = function () {
      return void 0 === this
        ? '[object Undefined]'
        : null === this
        ? '[object Null]'
        : Vn.call(this);
    }),
      (Object.keys = function (t) {
        return Object.getOwnPropertyNames(t).filter(function (e) {
          return (e = Object.getOwnPropertyDescriptor(t, e)) && e.enumerable;
        });
      });
    var Gn = window.Symbol.iterator;
    (String.prototype[Gn] && String.prototype.codePointAt) ||
      (String.prototype[Gn] = function t() {
        var e,
          n = this;
        return _(t, function (t) {
          if ((1 == t.a && (e = 0), 3 != t.a))
            return (
              e < n.length ? (t = u(t, n[e])) : ((t.a = 0), (t = void 0)), t
            );
          e++, (t.a = 2);
        });
      }),
      Set.prototype[Gn] ||
        (Set.prototype[Gn] = function t() {
          var e,
            n,
            o = this;
          return _(t, function (t) {
            if (
              (1 == t.a &&
                ((e = []),
                o.forEach(function (t) {
                  e.push(t);
                }),
                (n = 0)),
              3 != t.a)
            )
              return (
                n < e.length ? (t = u(t, e[n])) : ((t.a = 0), (t = void 0)), t
              );
            n++, (t.a = 2);
          });
        }),
      Map.prototype[Gn] ||
        (Map.prototype[Gn] = function t() {
          var e,
            n,
            o = this;
          return _(t, function (t) {
            if (
              (1 == t.a &&
                ((e = []),
                o.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                (n = 0)),
              3 != t.a)
            )
              return (
                n < e.length ? (t = u(t, e[n])) : ((t.a = 0), (t = void 0)), t
              );
            n++, (t.a = 2);
          });
        }),
      (window.WebComponents = window.WebComponents || { flags: {} });
    var Kn = document.querySelector('script[src*="webcomponents-bundle"]'),
      $n = {};
    if (!$n.noOpts) {
      if (
        (location.search
          .slice(1)
          .split('&')
          .forEach(function (t) {
            var e;
            (t = t.split('='))[0] &&
              (e = t[0].match(/wc-(.+)/)) &&
              ($n[e[1]] = t[1] || !0);
          }),
        Kn)
      )
        for (var Xn = 0, zn = void 0; (zn = Kn.attributes[Xn]); Xn++)
          'src' !== zn.name && ($n[zn.name] = zn.value || !0);
      if ($n.log && $n.log.split) {
        var Jn = $n.log.split(',');
        ($n.log = {}),
          Jn.forEach(function (t) {
            $n.log[t] = !0;
          });
      } else $n.log = {};
    }
    window.WebComponents.flags = $n;
    var Yn = $n.shadydom;
    Yn &&
      ((window.ShadyDOM = window.ShadyDOM || {}), (window.ShadyDOM.force = Yn));
    var Zn = $n.register || $n.ce;
    Zn && window.customElements && (window.customElements.forcePolyfill = Zn),
      (A.prototype.toJSON = function () {
        return {};
      });
    var Qn = window.ShadyDOM || {};
    Qn.Ka = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var to = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild');
    (Qn.D = !!(to && to.configurable && to.get)),
      (Qn.la = Qn.force || !Qn.Ka),
      (Qn.T = Qn.noPatch || !1),
      (Qn.ta = Qn.preferPerformance);
    var eo = Element.prototype,
      no =
        eo.matches ||
        eo.matchesSelector ||
        eo.mozMatchesSelector ||
        eo.msMatchesSelector ||
        eo.oMatchesSelector ||
        eo.webkitMatchesSelector,
      oo = document.createTextNode(''),
      ro = 0,
      io = [];
    new MutationObserver(function () {
      for (; io.length; )
        try {
          io.shift()();
        } catch (t) {
          throw ((oo.textContent = ro++), t);
        }
    }).observe(oo, { characterData: !0 });
    var ao,
      so = !!document.contains,
      lo = [];
    (U.list = lo),
      (W.prototype.flush = function () {
        if (this.a) {
          this.a = !1;
          var t = this.takeRecords();
          t.length &&
            this.aa.forEach(function (e) {
              e(t);
            });
        }
      }),
      (W.prototype.takeRecords = function () {
        if (this.addedNodes.length || this.removedNodes.length) {
          var t = [
            { addedNodes: this.addedNodes, removedNodes: this.removedNodes },
          ];
          return (this.addedNodes = []), (this.removedNodes = []), t;
        }
        return [];
      });
    var co,
      uo = /[&\u00A0"]/g,
      ho = /[&\u00A0<>]/g,
      fo = z(
        'area base br col command embed hr img input keygen link meta param source track wbr'.split(
          ' ',
        ),
      ),
      po = z(
        'style script xmp iframe noembed noframes plaintext noscript'.split(
          ' ',
        ),
      ),
      mo = Qn.D,
      _o = {
        querySelector: function (t) {
          return this.__shady_native_querySelector(t);
        },
        querySelectorAll: function (t) {
          return this.__shady_native_querySelectorAll(t);
        },
      },
      yo = {},
      vo = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      go = document.createTreeWalker(
        document,
        NodeFilter.SHOW_ELEMENT,
        null,
        !1,
      ),
      bo = document.implementation.createHTMLDocument('inert'),
      wo = [
        'firstElementChild',
        'lastElementChild',
        'children',
        'childElementCount',
      ],
      Eo = ['querySelector', 'querySelectorAll'],
      No = q({
        get childNodes() {
          return this.__shady_childNodes;
        },
        get firstChild() {
          return this.__shady_firstChild;
        },
        get lastChild() {
          return this.__shady_lastChild;
        },
        get textContent() {
          return this.__shady_textContent;
        },
        set textContent(t) {
          this.__shady_textContent = t;
        },
        get childElementCount() {
          return this.__shady_childElementCount;
        },
        get children() {
          return this.__shady_children;
        },
        get firstElementChild() {
          return this.__shady_firstElementChild;
        },
        get lastElementChild() {
          return this.__shady_lastElementChild;
        },
        get innerHTML() {
          return this.__shady_innerHTML;
        },
        set innerHTML(t) {
          return (this.__shady_innerHTML = t);
        },
        get shadowRoot() {
          return this.__shady_shadowRoot;
        },
      }),
      Co = q({
        get parentElement() {
          return this.__shady_parentElement;
        },
        get parentNode() {
          return this.__shady_parentNode;
        },
        get nextSibling() {
          return this.__shady_nextSibling;
        },
        get previousSibling() {
          return this.__shady_previousSibling;
        },
        get nextElementSibling() {
          return this.__shady_nextElementSibling;
        },
        get previousElementSibling() {
          return this.__shady_previousElementSibling;
        },
        get className() {
          return this.__shady_className;
        },
        set className(t) {
          return (this.__shady_className = t);
        },
      });
    for (co in No) No[co].enumerable = !1;
    for (var So in Co) Co[So].enumerable = !1;
    var To = Qn.D || Qn.T,
      Oo = To
        ? function () {}
        : function (t) {
            var e = x(t);
            e.qa || ((e.qa = !0), I(t, Co));
          },
      Do = To
        ? function () {}
        : function (t) {
            var e = x(t);
            e.pa || ((e.pa = !0), I(t, No));
          },
      Mo = '__eventWrappers' + Date.now(),
      Ao = (function () {
        var t = Object.getOwnPropertyDescriptor(Event.prototype, 'composed');
        return t
          ? function (e) {
              return t.get.call(e);
            }
          : null;
      })(),
      xo = {
        blur: !0,
        focus: !0,
        focusin: !0,
        focusout: !0,
        click: !0,
        dblclick: !0,
        mousedown: !0,
        mouseenter: !0,
        mouseleave: !0,
        mousemove: !0,
        mouseout: !0,
        mouseover: !0,
        mouseup: !0,
        wheel: !0,
        beforeinput: !0,
        input: !0,
        keydown: !0,
        keyup: !0,
        compositionstart: !0,
        compositionupdate: !0,
        compositionend: !0,
        touchstart: !0,
        touchend: !0,
        touchmove: !0,
        touchcancel: !0,
        pointerover: !0,
        pointerenter: !0,
        pointerdown: !0,
        pointermove: !0,
        pointerup: !0,
        pointercancel: !0,
        pointerout: !0,
        pointerleave: !0,
        gotpointercapture: !0,
        lostpointercapture: !0,
        dragstart: !0,
        drag: !0,
        dragenter: !0,
        dragleave: !0,
        dragover: !0,
        drop: !0,
        dragend: !0,
        DOMActivate: !0,
        DOMFocusIn: !0,
        DOMFocusOut: !0,
        keypress: !0,
      },
      ko = {
        DOMAttrModified: !0,
        DOMAttributeNameChanged: !0,
        DOMCharacterDataModified: !0,
        DOMElementNameChanged: !0,
        DOMNodeInserted: !0,
        DOMNodeInsertedIntoDocument: !0,
        DOMNodeRemoved: !0,
        DOMNodeRemovedFromDocument: !0,
        DOMSubtreeModified: !0,
      },
      Lo = { focus: !0, blur: !0 },
      Po = q({
        get composed() {
          return (
            void 0 === this.__composed &&
              (Ao
                ? (this.__composed =
                    'focusin' === this.type ||
                    'focusout' === this.type ||
                    Ao(this))
                : !1 !== this.isTrusted && (this.__composed = xo[this.type])),
            this.__composed || !1
          );
        },
        composedPath: function () {
          return (
            this.__composedPath ||
              (this.__composedPath = nt(this.__target, this.composed)),
            this.__composedPath
          );
        },
        get target() {
          return rt(
            this.currentTarget || this.__previousCurrentTarget,
            this.composedPath(),
          );
        },
        get relatedTarget() {
          return this.__relatedTarget
            ? (this.__relatedTargetComposedPath ||
                (this.__relatedTargetComposedPath = nt(
                  this.__relatedTarget,
                  !0,
                )),
              rt(
                this.currentTarget || this.__previousCurrentTarget,
                this.__relatedTargetComposedPath,
              ))
            : null;
        },
        stopPropagation: function () {
          Event.prototype.stopPropagation.call(this), (this.ha = !0);
        },
        stopImmediatePropagation: function () {
          Event.prototype.stopImmediatePropagation.call(this),
            (this.ha = this.__immediatePropagationStopped = !0);
        },
      }),
      jo = it(Event),
      Ro = it(CustomEvent),
      Ho = it(MouseEvent),
      Fo = Object.getOwnPropertyNames(Document.prototype).filter(function (t) {
        return 'on' === t.substring(0, 2);
      }),
      Io = null,
      qo = window.document,
      Bo = Qn.ta,
      Uo = Object.getOwnPropertyDescriptor(Node.prototype, 'isConnected'),
      Wo = Uo && Uo.get,
      Vo = q({
        get parentNode() {
          var t = k(this);
          return (
            (t = t && t.parentNode),
            void 0 !== t ? t : this.__shady_native_parentNode
          );
        },
        get firstChild() {
          var t = k(this);
          return (
            (t = t && t.firstChild),
            void 0 !== t ? t : this.__shady_native_firstChild
          );
        },
        get lastChild() {
          var t = k(this);
          return (
            (t = t && t.lastChild),
            void 0 !== t ? t : this.__shady_native_lastChild
          );
        },
        get nextSibling() {
          var t = k(this);
          return (
            (t = t && t.nextSibling),
            void 0 !== t ? t : this.__shady_native_nextSibling
          );
        },
        get previousSibling() {
          var t = k(this);
          return (
            (t = t && t.previousSibling),
            void 0 !== t ? t : this.__shady_native_previousSibling
          );
        },
        get childNodes() {
          if (L(this)) {
            var t = k(this);
            if (!t.childNodes) {
              t.childNodes = [];
              for (
                var e = this.__shady_firstChild;
                e;
                e = e.__shady_nextSibling
              )
                t.childNodes.push(e);
            }
            var n = t.childNodes;
          } else n = this.__shady_native_childNodes;
          return (
            (n.item = function (t) {
              return n[t];
            }),
            n
          );
        },
        get parentElement() {
          var t = k(this);
          return (
            (t = t && t.parentNode) &&
              t.nodeType !== Node.ELEMENT_NODE &&
              (t = null),
            void 0 !== t ? t : this.__shady_native_parentElement
          );
        },
        get isConnected() {
          if (Wo && Wo.call(this)) return !0;
          if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
          var t = this.ownerDocument;
          if (so) {
            if (t.__shady_native_contains(this)) return !0;
          } else if (
            t.documentElement &&
            t.documentElement.__shady_native_contains(this)
          )
            return !0;
          for (t = this; t && !(t instanceof Document); )
            t = t.__shady_parentNode || (P(t) ? t.host : void 0);
          return !!(t && t instanceof Document);
        },
        get textContent() {
          if (L(this)) {
            for (
              var t, e = [], n = 0, o = this.__shady_childNodes;
              (t = o[n]);
              n++
            )
              t.nodeType !== Node.COMMENT_NODE && e.push(t.__shady_textContent);
            return e.join('');
          }
          return this.__shady_native_textContent;
        },
        set textContent(t) {
          switch (((void 0 !== t && null !== t) || (t = ''), this.nodeType)) {
            case Node.ELEMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
              if (!L(this) && Qn.D) {
                var e = this.__shady_firstChild;
                (e != this.__shady_lastChild ||
                  (e && e.nodeType != Node.TEXT_NODE)) &&
                  St(this),
                  (this.__shady_native_textContent = t);
              } else
                St(this),
                  (0 < t.length || this.nodeType === Node.ELEMENT_NODE) &&
                    this.__shady_insertBefore(document.createTextNode(t));
              break;
            default:
              this.nodeValue = t;
          }
        },
        insertBefore: function (t, e) {
          if (this.ownerDocument !== qo && t.ownerDocument !== qo)
            return this.__shady_native_insertBefore(t, e), t;
          if (t === this)
            throw Error(
              "Failed to execute 'appendChild' on 'Node': The new child element contains the parent.",
            );
          if (e) {
            var n = k(e);
            if (
              (void 0 !== (n = n && n.parentNode) && n !== this) ||
              (void 0 === n && e.__shady_native_parentNode !== this)
            )
              throw Error(
                "Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.",
              );
          }
          if (e === t) return t;
          var o = [],
            r = (n = Vt(this)) ? n.host.localName : Nt(this),
            s = t.__shady_parentNode;
          if (s) {
            var l = Nt(t);
            s.__shady_removeChild(t, !!n || !Vt(t));
          }
          s = !0;
          var c = !((Bo && void 0 !== t.__noInsertionPoint) || Et(t, r)),
            u =
              n &&
              !t.__noInsertionPoint &&
              (!Bo || t.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
          return (
            (u || c) &&
              (c && (l = l || Nt(t)),
              Ct(t, function (t) {
                if ((u && 'slot' === t.localName && o.push(t), c)) {
                  var e = l;
                  bt() && (e && wt(t, e), (e = bt()) && e.scopeNode(t, r));
                }
              })),
            ('slot' === this.localName || o.length) &&
              (o.length &&
                ((n.c = n.c || []),
                (n.a = n.a || []),
                (n.b = n.b || {}),
                n.c.push.apply(n.c, o instanceof Array ? o : a(i(o)))),
              n && Pt(n)),
            L(this) &&
              (yt(t, this, e),
              (n = k(this)),
              j(this) ? (Pt(n.root), (s = !1)) : n.root && (s = !1)),
            s
              ? ((n = P(this) ? this.host : this),
                e
                  ? ((e = Ot(e)), n.__shady_native_insertBefore(t, e))
                  : n.__shady_native_appendChild(t))
              : t.ownerDocument !== this.ownerDocument &&
                this.ownerDocument.adoptNode(t),
            Dt(this, t),
            t
          );
        },
        appendChild: function (t) {
          return this.__shady_insertBefore(t);
        },
        removeChild: function (t, e) {
          if (((e = void 0 !== e && e), this.ownerDocument !== qo))
            return this.__shady_native_removeChild(t);
          if (t.__shady_parentNode !== this)
            throw Error(
              'The node to be removed is not a child of this node: ' + t,
            );
          var n = Vt(t),
            o = k(this);
          if (L(this) && (vt(t, this), j(this))) {
            Pt(o.root);
            var r = !0;
          }
          if (bt() && !e && n) {
            var i = Nt(t);
            Ct(t, function (t) {
              wt(t, i);
            });
          }
          if ((Tt(t), n)) {
            var a = this && 'slot' === this.localName;
            a && (r = !0), ((e = Ut(n, t)) || a) && Pt(n);
          }
          return (
            r ||
              ((r = P(this) ? this.host : this),
              ((!o.root && 'slot' !== t.localName) ||
                r === t.__shady_native_parentNode) &&
                r.__shady_native_removeChild(t)),
            Dt(this, null, t),
            t
          );
        },
        replaceChild: function (t, e) {
          return (
            this.__shady_insertBefore(t, e), this.__shady_removeChild(e), t
          );
        },
        cloneNode: function (t) {
          if ('template' == this.localName)
            return this.__shady_native_cloneNode(t);
          var e = this.__shady_native_cloneNode(!1);
          if (t && e.nodeType !== Node.ATTRIBUTE_NODE) {
            t = this.__shady_childNodes;
            for (var n, o = 0; o < t.length; o++)
              (n = t[o].__shady_cloneNode(!0)), e.__shady_appendChild(n);
          }
          return e;
        },
        getRootNode: function (t) {
          if (this && this.nodeType) {
            var e = x(this),
              n = e.U;
            return (
              void 0 === n &&
                (P(this)
                  ? ((n = this), (e.U = n))
                  : ((n = (n = this.__shady_parentNode)
                      ? n.__shady_getRootNode(t)
                      : this),
                    document.documentElement.__shady_native_contains(this) &&
                      (e.U = n))),
              n
            );
          }
        },
        contains: function (t) {
          return H(this, t);
        },
      }),
      Go = q({
        get firstElementChild() {
          var t = k(this);
          if (t && void 0 !== t.firstChild) {
            for (
              t = this.__shady_firstChild;
              t && t.nodeType !== Node.ELEMENT_NODE;

            )
              t = t.__shady_nextSibling;
            return t;
          }
          return this.__shady_native_firstElementChild;
        },
        get lastElementChild() {
          var t = k(this);
          if (t && void 0 !== t.lastChild) {
            for (
              t = this.__shady_lastChild;
              t && t.nodeType !== Node.ELEMENT_NODE;

            )
              t = t.__shady_previousSibling;
            return t;
          }
          return this.__shady_native_lastElementChild;
        },
        get children() {
          return L(this)
            ? F(
                Array.prototype.filter.call(
                  this.__shady_childNodes,
                  function (t) {
                    return t.nodeType === Node.ELEMENT_NODE;
                  },
                ),
              )
            : this.__shady_native_children;
        },
        get childElementCount() {
          var t = this.__shady_children;
          return t ? t.length : 0;
        },
      }),
      Ko = q({
        querySelector: function (t) {
          return (
            Mt(
              this,
              function (e) {
                return no.call(e, t);
              },
              function (t) {
                return !!t;
              },
            )[0] || null
          );
        },
        querySelectorAll: function (t, e) {
          if (e) {
            e = Array.prototype.slice.call(
              this.__shady_native_querySelectorAll(t),
            );
            var n = this.__shady_getRootNode();
            return e.filter(function (t) {
              return t.__shady_getRootNode() == n;
            });
          }
          return Mt(this, function (e) {
            return no.call(e, t);
          });
        },
      }),
      $o = Qn.ta ? Object.assign({}, Go) : Go;
    Object.assign(Go, Ko);
    var Xo,
      zo = q({
        getElementById: function (t) {
          return '' === t
            ? null
            : Mt(
                this,
                function (e) {
                  return e.id == t;
                },
                function (t) {
                  return !!t;
                },
              )[0] || null;
        },
      }),
      Jo = q({
        get activeElement() {
          var t = Qn.D
            ? document.__shady_native_activeElement
            : document.activeElement;
          if (!t || !t.nodeType) return null;
          var e = !!P(this);
          if (
            !(
              this === document ||
              (e && this.host !== t && this.host.__shady_native_contains(t))
            )
          )
            return null;
          for (e = Vt(t); e && e !== this; ) (t = e.host), (e = Vt(t));
          return this === document ? (e ? null : t) : e === this ? t : null;
        },
      }),
      Yo = document.implementation.createHTMLDocument('inert'),
      Zo = q({
        get innerHTML() {
          return L(this)
            ? J(
                'template' === this.localName ? this.content : this,
                function (t) {
                  return t.__shady_childNodes;
                },
              )
            : this.__shady_native_innerHTML;
        },
        set innerHTML(t) {
          if ('template' === this.localName) this.__shady_native_innerHTML = t;
          else {
            St(this);
            var e = this.localName || 'div';
            for (
              e =
                this.namespaceURI && this.namespaceURI !== Yo.namespaceURI
                  ? Yo.createElementNS(this.namespaceURI, e)
                  : Yo.createElement(e),
                Qn.D ? (e.__shady_native_innerHTML = t) : (e.innerHTML = t);
              (t = e.__shady_firstChild);

            )
              this.__shady_insertBefore(t);
          }
        },
      }),
      Qo = q({
        addEventListener: function (t, e, n) {
          'object' != typeof n && (n = { capture: !!n }),
            (n.ia = this),
            this.host.__shady_addEventListener(t, e, n);
        },
        removeEventListener: function (t, e, n) {
          'object' != typeof n && (n = { capture: !!n }),
            (n.ia = this),
            this.host.__shady_removeEventListener(t, e, n);
        },
      }),
      tr = {},
      er = Qn.deferConnectionCallbacks && 'loading' === document.readyState;
    if (
      ((Lt.prototype.Y = function () {
        var t = jt(this);
        t && t.O && t._renderRoot();
      }),
      (Lt.prototype._renderRoot = function () {
        var t = er;
        if (((er = !0), (this.O = !1), this.a)) {
          It(this);
          for (var e, n = 0; n < this.a.length; n++) {
            var o = k((e = this.a[n])),
              r = o.assignedNodes;
            if (((o.assignedNodes = []), (o.M = []), (o.ja = r)))
              for (o = 0; o < r.length; o++) {
                var i = k(r[o]);
                (i.Z = i.assignedSlot),
                  i.assignedSlot === e && (i.assignedSlot = null);
              }
          }
          for (n = this.host.__shady_firstChild; n; n = n.__shady_nextSibling)
            Rt(this, n);
          for (n = 0; n < this.a.length; n++) {
            if (((e = this.a[n]), !(r = k(e)).assignedNodes.length))
              for (o = e.__shady_firstChild; o; o = o.__shady_nextSibling)
                Rt(this, o, e);
            if (
              ((o = (o = k(e.__shady_parentNode)) && o.root) &&
                (Wt(o) || o.O) &&
                o._renderRoot(),
              Ht(this, r.M, r.assignedNodes),
              (o = r.ja))
            ) {
              for (i = 0; i < o.length; i++) k(o[i]).Z = null;
              (r.ja = null), o.length > r.assignedNodes.length && (r.ba = !0);
            }
            r.ba && ((r.ba = !1), Ft(this, e));
          }
          for (e = this.a, n = [], r = 0; r < e.length; r++)
            (o = e[r].__shady_parentNode),
              ((i = k(o)) && i.root) || !(0 > n.indexOf(o)) || n.push(o);
          for (e = 0; e < n.length; e++) {
            (r = (i = n[e]) === this ? this.host : i),
              (o = []),
              (i = i.__shady_childNodes);
            for (var a = 0; a < i.length; a++) {
              var s = i[a];
              if ('slot' == s.localName) {
                s = k(s).M;
                for (var l = 0; l < s.length; l++) o.push(s[l]);
              } else o.push(s);
            }
            (i = Array.prototype.slice.call(r.__shady_native_childNodes)),
              (a = pt(o, o.length, i, i.length)),
              (l = s = 0);
            for (var c = void 0; s < a.length && (c = a[s]); s++) {
              for (var u = 0, h = void 0; u < c.V.length && (h = c.V[u]); u++)
                h.__shady_native_parentNode === r &&
                  r.__shady_native_removeChild(h),
                  i.splice(c.index + l, 1);
              l -= c.$;
            }
            for (l = 0, c = void 0; l < a.length && (c = a[l]); l++)
              for (s = i[c.index], u = c.index; u < c.index + c.$; u++)
                (h = o[u]),
                  r.__shady_native_insertBefore(h, s),
                  i.splice(u, 0, h);
          }
        }
        if (!Qn.preferPerformance && !this.f)
          for (
            n = this.host.__shady_childNodes, e = 0, r = n.length;
            e < r;
            e++
          )
            (o = n[e]),
              (i = k(o)),
              o.__shady_native_parentNode !== this.host ||
                ('slot' !== o.localName && i.assignedSlot) ||
                this.host.__shady_native_removeChild(o);
        (this.f = !0), (er = t), Xo && Xo();
      }),
      (function (t) {
        (t.__proto__ = DocumentFragment.prototype),
          xt(t, '__shady_'),
          xt(t),
          Object.defineProperties(t, {
            nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 },
            nodeName: { value: '#document-fragment', configurable: !0 },
            nodeValue: { value: null, configurable: !0 },
          }),
          ['localName', 'namespaceURI', 'prefix'].forEach(function (e) {
            Object.defineProperty(t, e, { value: void 0, configurable: !0 });
          }),
          ['ownerDocument', 'baseURI', 'isConnected'].forEach(function (e) {
            Object.defineProperty(t, e, {
              get: function () {
                return this.host[e];
              },
              configurable: !0,
            });
          });
      })(Lt.prototype),
      window.customElements && Qn.la && !Qn.preferPerformance)
    ) {
      var nr = new Map();
      (Xo = function () {
        var t = [];
        nr.forEach(function (e, n) {
          t.push([n, e]);
        }),
          nr.clear();
        for (var e = 0; e < t.length; e++) {
          var n = t[e][0];
          t[e][1] ? n.ya() : n.za();
        }
      }),
        er &&
          document.addEventListener(
            'readystatechange',
            function () {
              (er = !1), Xo();
            },
            { once: !0 },
          );
      var or = function (t, e, n) {
          var o = 0,
            r = '__isConnected' + o++;
          return (
            (e || n) &&
              ((t.prototype.connectedCallback = t.prototype.ya =
                function () {
                  er
                    ? nr.set(this, !0)
                    : this[r] || ((this[r] = !0), e && e.call(this));
                }),
              (t.prototype.disconnectedCallback = t.prototype.za =
                function () {
                  er
                    ? this.isConnected || nr.set(this, !1)
                    : this[r] && ((this[r] = !1), n && n.call(this));
                })),
            t
          );
        },
        rr = window.customElements.define;
      Object.defineProperty(window.CustomElementRegistry.prototype, 'define', {
        value: function (t, e) {
          var n = e.prototype.connectedCallback,
            o = e.prototype.disconnectedCallback;
          rr.call(window.customElements, t, or(e, n, o)),
            (e.prototype.connectedCallback = n),
            (e.prototype.disconnectedCallback = o);
        },
      });
    }
    ((xn = Gt.prototype).addEventListener = function (t, e, n) {
      return this.node.__shady_addEventListener(t, e, n);
    }),
      (xn.removeEventListener = function (t, e, n) {
        return this.node.__shady_removeEventListener(t, e, n);
      }),
      (xn.appendChild = function (t) {
        return this.node.__shady_appendChild(t);
      }),
      (xn.insertBefore = function (t, e) {
        return this.node.__shady_insertBefore(t, e);
      }),
      (xn.removeChild = function (t) {
        return this.node.__shady_removeChild(t);
      }),
      (xn.replaceChild = function (t, e) {
        return this.node.__shady_replaceChild(t, e);
      }),
      (xn.cloneNode = function (t) {
        return this.node.__shady_cloneNode(t);
      }),
      (xn.getRootNode = function (t) {
        return this.node.__shady_getRootNode(t);
      }),
      (xn.contains = function (t) {
        return this.node.__shady_contains(t);
      }),
      (xn.dispatchEvent = function (t) {
        return this.node.__shady_dispatchEvent(t);
      }),
      (xn.setAttribute = function (t, e) {
        this.node.__shady_setAttribute(t, e);
      }),
      (xn.getAttribute = function (t) {
        return this.node.__shady_native_getAttribute(t);
      }),
      (xn.hasAttribute = function (t) {
        return this.node.__shady_native_hasAttribute(t);
      }),
      (xn.removeAttribute = function (t) {
        this.node.__shady_removeAttribute(t);
      }),
      (xn.attachShadow = function (t) {
        return this.node.__shady_attachShadow(t);
      }),
      (xn.focus = function () {
        this.node.__shady_native_focus();
      }),
      (xn.blur = function () {
        this.node.__shady_blur();
      }),
      (xn.importNode = function (t, e) {
        if (this.node.nodeType === Node.DOCUMENT_NODE)
          return this.node.__shady_importNode(t, e);
      }),
      (xn.getElementById = function (t) {
        if (this.node.nodeType === Node.DOCUMENT_NODE)
          return this.node.__shady_getElementById(t);
      }),
      (xn.querySelector = function (t) {
        return this.node.__shady_querySelector(t);
      }),
      (xn.querySelectorAll = function (t, e) {
        return this.node.__shady_querySelectorAll(t, e);
      }),
      (xn.assignedNodes = function (t) {
        if ('slot' === this.node.localName)
          return this.node.__shady_assignedNodes(t);
      }),
      Ln.Object.defineProperties(Gt.prototype, {
        activeElement: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            if (P(this.node) || this.node.nodeType === Node.DOCUMENT_NODE)
              return this.node.__shady_activeElement;
          },
        },
        _activeElement: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.activeElement;
          },
        },
        host: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            if (P(this.node)) return this.node.host;
          },
        },
        parentNode: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_parentNode;
          },
        },
        firstChild: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_firstChild;
          },
        },
        lastChild: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_lastChild;
          },
        },
        nextSibling: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_nextSibling;
          },
        },
        previousSibling: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_previousSibling;
          },
        },
        childNodes: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_childNodes;
          },
        },
        parentElement: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_parentElement;
          },
        },
        firstElementChild: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_firstElementChild;
          },
        },
        lastElementChild: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_lastElementChild;
          },
        },
        nextElementSibling: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_nextElementSibling;
          },
        },
        previousElementSibling: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_previousElementSibling;
          },
        },
        children: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_children;
          },
        },
        childElementCount: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_childElementCount;
          },
        },
        shadowRoot: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_shadowRoot;
          },
        },
        assignedSlot: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_assignedSlot;
          },
        },
        isConnected: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_isConnected;
          },
        },
        innerHTML: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_innerHTML;
          },
          set: function (t) {
            this.node.__shady_innerHTML = t;
          },
        },
        textContent: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_textContent;
          },
          set: function (t) {
            this.node.__shady_textContent = t;
          },
        },
        slot: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.node.__shady_slot;
          },
          set: function (t) {
            this.node.__shady_slot = t;
          },
        },
      }),
      Fo.forEach(function (t) {
        Object.defineProperty(Gt.prototype, t, {
          get: function () {
            return this.node['__shady_' + t];
          },
          set: function (e) {
            this.node['__shady_' + t] = e;
          },
          configurable: !0,
        });
      });
    var ir = new WeakMap(),
      ar = q({
        dispatchEvent: function (t) {
          return U(), this.__shady_native_dispatchEvent(t);
        },
        addEventListener: ut,
        removeEventListener: ht,
      }),
      sr = q({
        get assignedSlot() {
          var t = this.__shady_parentNode;
          return (
            (t = t && t.__shady_shadowRoot) && t.Y(),
            ((t = k(this)) && t.assignedSlot) || null
          );
        },
      }),
      lr = window.document,
      cr = q({
        get previousElementSibling() {
          var t = k(this);
          if (t && void 0 !== t.previousSibling) {
            for (
              t = this.__shady_previousSibling;
              t && t.nodeType !== Node.ELEMENT_NODE;

            )
              t = t.__shady_previousSibling;
            return t;
          }
          return this.__shady_native_previousElementSibling;
        },
        get nextElementSibling() {
          var t = k(this);
          if (t && void 0 !== t.nextSibling) {
            for (
              t = this.__shady_nextSibling;
              t && t.nodeType !== Node.ELEMENT_NODE;

            )
              t = t.__shady_nextSibling;
            return t;
          }
          return this.__shady_native_nextElementSibling;
        },
        get slot() {
          return this.getAttribute('slot');
        },
        set slot(t) {
          this.__shady_setAttribute('slot', t);
        },
        get shadowRoot() {
          var t = k(this);
          return (t && t.ua) || null;
        },
        get className() {
          return this.getAttribute('class') || '';
        },
        set className(t) {
          this.__shady_setAttribute('class', t);
        },
        setAttribute: function (t, e) {
          if (this.ownerDocument !== lr) this.__shady_native_setAttribute(t, e);
          else {
            var n;
            (n = bt()) && 'class' === t
              ? (n.setElementClass(this, e), (n = !0))
              : (n = !1),
              n || (this.__shady_native_setAttribute(t, e), $t(this, t));
          }
        },
        removeAttribute: function (t) {
          this.__shady_native_removeAttribute(t), $t(this, t);
        },
        attachShadow: function (t) {
          if (!this) throw Error('Must provide a host.');
          if (!t) throw Error('Not enough arguments.');
          return new Lt(tr, this, t);
        },
      }),
      ur = q({
        blur: function () {
          var t = k(this);
          (t = (t = t && t.root) && t.activeElement)
            ? t.__shady_blur()
            : this.__shady_native_blur();
        },
      });
    Fo.forEach(function (t) {
      ur[t] = {
        set: function (e) {
          var n = x(this),
            o = t.substring(2);
          n.X[t] && this.removeEventListener(o, n.X[t]),
            this.__shady_addEventListener(o, e),
            (n.X[t] = e);
        },
        get: function () {
          var e = k(this);
          return e && e.X[t];
        },
        configurable: !0,
      };
    });
    var hr = q({
        assignedNodes: function (t) {
          if ('slot' === this.localName) {
            var e = this.__shady_getRootNode();
            return (
              e && P(e) && e.Y(),
              (e = k(this))
                ? (t && t.flatten ? e.M : e.assignedNodes) || []
                : []
            );
          }
        },
      }),
      dr = window.document,
      fr = q({
        importNode: function (t, e) {
          if (t.ownerDocument !== dr || 'template' === t.localName)
            return this.__shady_native_importNode(t, e);
          var n = this.__shady_native_importNode(t, !1);
          if (e) {
            (t = t.__shady_childNodes), (e = 0);
            for (var o; e < t.length; e++)
              (o = this.__shady_importNode(t[e], !0)), n.__shady_appendChild(o);
          }
          return n;
        },
      }),
      pr = q({
        addEventListener: ut.bind(window),
        removeEventListener: ht.bind(window),
      }),
      mr = {};
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'parentElement') &&
      (mr.parentElement = Vo.parentElement),
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'contains') &&
        (mr.contains = Vo.contains),
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'children') &&
        (mr.children = Go.children),
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML') &&
        (mr.innerHTML = Zo.innerHTML),
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'className') &&
        (mr.className = cr.className);
    var _r = {
        EventTarget: [ar],
        Node: [Vo, window.EventTarget ? null : ar],
        Text: [sr],
        Element: [
          cr,
          Go,
          sr,
          !Qn.D || 'innerHTML' in Element.prototype ? Zo : null,
          window.HTMLSlotElement ? null : hr,
        ],
        HTMLElement: [ur, mr],
        HTMLSlotElement: [hr],
        DocumentFragment: [$o, zo],
        Document: [fr, $o, zo, Jo],
        Window: [pr],
      },
      yr = Qn.D ? null : ['innerHTML', 'textContent'];
    if (Qn.la) {
      var vr = {
        inUse: Qn.la,
        patch: function (t) {
          return Do(t), Oo(t), t;
        },
        isShadyRoot: P,
        enqueue: B,
        flush: U,
        settings: Qn,
        filterMutations: $,
        observeChildren: G,
        unobserveChildren: K,
        deferConnectionCallbacks: Qn.deferConnectionCallbacks,
        preferPerformance: Qn.preferPerformance,
        handlesDynamicScoping: !0,
        wrap: Qn.T
          ? Kt
          : function (t) {
              return t;
            },
        Wrapper: Gt,
        composedPath: ot,
        noPatch: Qn.T,
        nativeMethods: _o,
        nativeTree: yo,
      };
      (window.ShadyDOM = vr),
        (function () {
          var t = ['dispatchEvent', 'addEventListener', 'removeEventListener'];
          window.EventTarget
            ? Q(window.EventTarget.prototype, t)
            : (Q(Node.prototype, t), Q(Window.prototype, t)),
            mo
              ? Q(
                  Node.prototype,
                  'parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent'.split(
                    ' ',
                  ),
                )
              : Z(Node.prototype, {
                  parentNode: {
                    get: function () {
                      return (vo.currentNode = this), vo.parentNode();
                    },
                  },
                  firstChild: {
                    get: function () {
                      return (vo.currentNode = this), vo.firstChild();
                    },
                  },
                  lastChild: {
                    get: function () {
                      return (vo.currentNode = this), vo.lastChild();
                    },
                  },
                  previousSibling: {
                    get: function () {
                      return (vo.currentNode = this), vo.previousSibling();
                    },
                  },
                  nextSibling: {
                    get: function () {
                      return (vo.currentNode = this), vo.nextSibling();
                    },
                  },
                  childNodes: {
                    get: function () {
                      var t = [];
                      vo.currentNode = this;
                      for (var e = vo.firstChild(); e; )
                        t.push(e), (e = vo.nextSibling());
                      return t;
                    },
                  },
                  parentElement: {
                    get: function () {
                      return (go.currentNode = this), go.parentNode();
                    },
                  },
                  textContent: {
                    get: function () {
                      switch (this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                          for (
                            var t,
                              e = document.createTreeWalker(
                                this,
                                NodeFilter.SHOW_TEXT,
                                null,
                                !1,
                              ),
                              n = '';
                            (t = e.nextNode());

                          )
                            n += t.nodeValue;
                          return n;
                        default:
                          return this.nodeValue;
                      }
                    },
                    set: function (t) {
                      switch (
                        ((void 0 !== t && null !== t) || (t = ''),
                        this.nodeType)
                      ) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                          tt(this),
                            (0 < t.length ||
                              this.nodeType === Node.ELEMENT_NODE) &&
                              this.__shady_native_insertBefore(
                                document.createTextNode(t),
                                void 0,
                              );
                          break;
                        default:
                          this.nodeValue = t;
                      }
                    },
                  },
                }),
            Q(
              Node.prototype,
              'appendChild insertBefore removeChild replaceChild cloneNode contains'.split(
                ' ',
              ),
            ),
            (t = {
              firstElementChild: {
                get: function () {
                  return (go.currentNode = this), go.firstChild();
                },
              },
              lastElementChild: {
                get: function () {
                  return (go.currentNode = this), go.lastChild();
                },
              },
              children: {
                get: function () {
                  var t = [];
                  go.currentNode = this;
                  for (var e = go.firstChild(); e; )
                    t.push(e), (e = go.nextSibling());
                  return F(t);
                },
              },
              childElementCount: {
                get: function () {
                  return this.children ? this.children.length : 0;
                },
              },
            }),
            mo
              ? (Q(Element.prototype, wo),
                Q(Element.prototype, [
                  'previousElementSibling',
                  'nextElementSibling',
                  'innerHTML',
                ]),
                Object.getOwnPropertyDescriptor(
                  HTMLElement.prototype,
                  'children',
                ) && Q(HTMLElement.prototype, ['children']),
                Object.getOwnPropertyDescriptor(
                  HTMLElement.prototype,
                  'innerHTML',
                ) && Q(HTMLElement.prototype, ['innerHTML']))
              : (Z(Element.prototype, t),
                Z(Element.prototype, {
                  previousElementSibling: {
                    get: function () {
                      return (go.currentNode = this), go.previousSibling();
                    },
                  },
                  nextElementSibling: {
                    get: function () {
                      return (go.currentNode = this), go.nextSibling();
                    },
                  },
                  innerHTML: {
                    get: function () {
                      return J(this, function (t) {
                        return t.__shady_native_childNodes;
                      });
                    },
                    set: function (t) {
                      var e =
                        'template' === this.localName ? this.content : this;
                      tt(e);
                      var n = this.localName || 'div';
                      for (
                        (n =
                          this.namespaceURI &&
                          this.namespaceURI !== bo.namespaceURI
                            ? bo.createElementNS(this.namespaceURI, n)
                            : bo.createElement(n)).innerHTML = t,
                          t = 'template' === this.localName ? n.content : n;
                        (n = t.__shady_native_firstChild);

                      )
                        e.__shady_native_insertBefore(n, void 0);
                    },
                  },
                })),
            Q(
              Element.prototype,
              'setAttribute getAttribute hasAttribute removeAttribute focus blur'.split(
                ' ',
              ),
            ),
            Q(Element.prototype, Eo),
            Q(HTMLElement.prototype, ['focus', 'blur', 'contains']),
            mo &&
              Q(HTMLElement.prototype, [
                'parentElement',
                'children',
                'innerHTML',
              ]),
            window.HTMLTemplateElement &&
              Q(window.HTMLTemplateElement.prototype, ['innerHTML']),
            mo
              ? Q(DocumentFragment.prototype, wo)
              : Z(DocumentFragment.prototype, t),
            Q(DocumentFragment.prototype, Eo),
            mo
              ? (Q(Document.prototype, wo),
                Q(Document.prototype, ['activeElement']))
              : Z(Document.prototype, t),
            Q(Document.prototype, ['importNode', 'getElementById']),
            Q(Document.prototype, Eo);
        })(),
        Xt('__shady_'),
        Object.defineProperty(document, '_activeElement', Jo.activeElement),
        I(Window.prototype, pr, '__shady_'),
        Qn.T ||
          (Xt(),
          (function () {
            if (
              !Ao &&
              Object.getOwnPropertyDescriptor(Event.prototype, 'isTrusted')
            ) {
              var t = function () {
                var t = new MouseEvent('click', {
                  bubbles: !0,
                  cancelable: !0,
                  composed: !0,
                });
                this.__shady_dispatchEvent(t);
              };
              Element.prototype.click
                ? (Element.prototype.click = t)
                : HTMLElement.prototype.click &&
                  (HTMLElement.prototype.click = t);
            }
          })()),
        (function () {
          for (var t in Lo)
            window.__shady_native_addEventListener(
              t,
              function (t) {
                t.__target || (dt(t), lt(t));
              },
              !0,
            );
        })(),
        (window.Event = jo),
        (window.CustomEvent = Ro),
        (window.MouseEvent = Ho),
        (window.ShadowRoot = Lt);
    }
    var gr = new Set(
      'annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'.split(
        ' ',
      ),
    );
    (te.prototype.b = function (t) {
      if (this.c && !t.__CE_patched) {
        t.__CE_patched = !0;
        for (var e = 0; e < this.f.length; e++) this.f[e](t);
      }
    }),
      (te.prototype.connectedCallback = function (t) {
        var e = t.__CE_definition;
        e.connectedCallback && e.connectedCallback.call(t);
      }),
      (te.prototype.disconnectedCallback = function (t) {
        var e = t.__CE_definition;
        e.disconnectedCallback && e.disconnectedCallback.call(t);
      }),
      (te.prototype.attributeChangedCallback = function (t, e, n, o, r) {
        var i = t.__CE_definition;
        i.attributeChangedCallback &&
          -1 < i.observedAttributes.indexOf(e) &&
          i.attributeChangedCallback.call(t, e, n, o, r);
      }),
      (le.prototype.c = function (t) {
        var e = this.a.readyState;
        for (
          ('interactive' !== e && 'complete' !== e) || ce(this), e = 0;
          e < t.length;
          e++
        )
          for (var n = t[e].addedNodes, o = 0; o < n.length; o++)
            ae(this.b, n[o]);
      }),
      (ue.prototype.resolve = function (t) {
        if (this.w) throw Error('Already resolved.');
        (this.w = t), this.a && this.a(t);
      }),
      ((xn = he.prototype).wa = function (t, e) {
        var n = this;
        if (!(e instanceof Function))
          throw new TypeError('Custom element constructors must be functions.');
        if (!zt(t))
          throw new SyntaxError("The element name '" + t + "' is not valid.");
        if (this.a.a.get(t))
          throw Error(
            "A custom element with name '" + t + "' has already been defined.",
          );
        if (this.c) throw Error('A custom element is already being defined.');
        this.c = !0;
        try {
          var o = function (t) {
              var e = r[t];
              if (void 0 !== e && !(e instanceof Function))
                throw Error("The '" + t + "' callback must be a function.");
              return e;
            },
            r = e.prototype;
          if (!(r instanceof Object))
            throw new TypeError(
              "The custom element constructor's prototype is not an object.",
            );
          var i = o('connectedCallback'),
            a = o('disconnectedCallback'),
            s = o('adoptedCallback'),
            l = o('attributeChangedCallback'),
            c = e.observedAttributes || [];
        } catch (t) {
          return;
        } finally {
          this.c = !1;
        }
        (e = {
          localName: t,
          constructorFunction: e,
          connectedCallback: i,
          disconnectedCallback: a,
          adoptedCallback: s,
          attributeChangedCallback: l,
          observedAttributes: c,
          constructionStack: [],
        }),
          ee(this.a, t, e),
          this.u.push(e),
          this.b ||
            ((this.b = !0),
            this.f(function () {
              return n.Y();
            }));
      }),
      (xn.ga = function (t) {
        ae(this.a, t);
      }),
      (xn.Y = function () {
        var t = this;
        if (!1 !== this.b) {
          this.b = !1;
          for (var e = this.u, n = [], o = new Map(), r = 0; r < e.length; r++)
            o.set(e[r].localName, []);
          for (
            ae(this.a, document, {
              ga: function (e) {
                if (void 0 === e.__CE_state) {
                  var r = e.localName,
                    i = o.get(r);
                  i ? i.push(e) : t.a.a.get(r) && n.push(e);
                }
              },
            }),
              r = 0;
            r < n.length;
            r++
          )
            se(this.a, n[r]);
          for (; 0 < e.length; ) {
            var i = e.shift();
            (r = i.localName), (i = o.get(i.localName));
            for (var a = 0; a < i.length; a++) se(this.a, i[a]);
            (r = this.F.get(r)) && r.resolve(void 0);
          }
        }
      }),
      (xn.get = function (t) {
        if ((t = this.a.a.get(t))) return t.constructorFunction;
      }),
      (xn.xa = function (t) {
        if (!zt(t))
          return Promise.reject(
            new SyntaxError("'" + t + "' is not a valid custom element name."),
          );
        var e = this.F.get(t);
        return e
          ? e.b
          : ((e = new ue()),
            this.F.set(t, e),
            this.a.a.get(t) &&
              !this.u.some(function (e) {
                return e.localName === t;
              }) &&
              e.resolve(void 0),
            e.b);
      }),
      (xn.Qa = function (t) {
        ce(this.ca);
        var e = this.f;
        this.f = function (n) {
          return t(function () {
            return e(n);
          });
        };
      }),
      (window.CustomElementRegistry = he),
      (he.prototype.define = he.prototype.wa),
      (he.prototype.upgrade = he.prototype.ga),
      (he.prototype.get = he.prototype.get),
      (he.prototype.whenDefined = he.prototype.xa),
      (he.prototype.polyfillWrapFlushCallback = he.prototype.Qa);
    var br = window.Document.prototype.createElement,
      wr = window.Document.prototype.createElementNS,
      Er = window.Document.prototype.importNode,
      Nr = window.Document.prototype.prepend,
      Cr = window.Document.prototype.append,
      Sr = window.DocumentFragment.prototype.prepend,
      Tr = window.DocumentFragment.prototype.append,
      Or = window.Node.prototype.cloneNode,
      Dr = window.Node.prototype.appendChild,
      Mr = window.Node.prototype.insertBefore,
      Ar = window.Node.prototype.removeChild,
      xr = window.Node.prototype.replaceChild,
      kr = Object.getOwnPropertyDescriptor(
        window.Node.prototype,
        'textContent',
      ),
      Lr = window.Element.prototype.attachShadow,
      Pr = Object.getOwnPropertyDescriptor(
        window.Element.prototype,
        'innerHTML',
      ),
      jr = window.Element.prototype.getAttribute,
      Rr = window.Element.prototype.setAttribute,
      Hr = window.Element.prototype.removeAttribute,
      Fr = window.Element.prototype.getAttributeNS,
      Ir = window.Element.prototype.setAttributeNS,
      qr = window.Element.prototype.removeAttributeNS,
      Br = window.Element.prototype.insertAdjacentElement,
      Ur = window.Element.prototype.insertAdjacentHTML,
      Wr = window.Element.prototype.prepend,
      Vr = window.Element.prototype.append,
      Gr = window.Element.prototype.before,
      Kr = window.Element.prototype.after,
      $r = window.Element.prototype.replaceWith,
      Xr = window.Element.prototype.remove,
      zr = window.HTMLElement,
      Jr = Object.getOwnPropertyDescriptor(
        window.HTMLElement.prototype,
        'innerHTML',
      ),
      Yr = window.HTMLElement.prototype.insertAdjacentElement,
      Zr = window.HTMLElement.prototype.insertAdjacentHTML,
      Qr = new (function () {})(),
      ti = window.customElements;
    if (
      !ti ||
      ti.forcePolyfill ||
      'function' != typeof ti.define ||
      'function' != typeof ti.get
    ) {
      var ei = new te();
      !(function () {
        var t = ei;
        window.HTMLElement = (function () {
          function e() {
            var e = this.constructor,
              n = t.u.get(e);
            if (!n)
              throw Error(
                'The custom element being constructed was not registered with `customElements`.',
              );
            var o = n.constructionStack;
            if (0 === o.length)
              return (
                (o = br.call(document, n.localName)),
                Object.setPrototypeOf(o, e.prototype),
                (o.__CE_state = 1),
                (o.__CE_definition = n),
                t.b(o),
                o
              );
            var r = o[(n = o.length - 1)];
            if (r === Qr)
              throw Error(
                'The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.',
              );
            return (
              (o[n] = Qr), Object.setPrototypeOf(r, e.prototype), t.b(r), r
            );
          }
          return (
            (e.prototype = zr.prototype),
            Object.defineProperty(e.prototype, 'constructor', {
              writable: !0,
              configurable: !0,
              enumerable: !1,
              value: e,
            }),
            e
          );
        })();
      })(),
        (function () {
          var t = ei;
          Qt(Document.prototype, 'createElement', function (e) {
            if (this.__CE_hasRegistry) {
              var n = t.a.get(e);
              if (n) return new n.constructorFunction();
            }
            return (e = br.call(this, e)), t.b(e), e;
          }),
            Qt(Document.prototype, 'importNode', function (e, n) {
              return (
                (e = Er.call(this, e, !!n)),
                this.__CE_hasRegistry ? ae(t, e) : oe(t, e),
                e
              );
            }),
            Qt(Document.prototype, 'createElementNS', function (e, n) {
              if (
                this.__CE_hasRegistry &&
                (null === e || 'http://www.w3.org/1999/xhtml' === e)
              ) {
                var o = t.a.get(n);
                if (o) return new o.constructorFunction();
              }
              return (e = wr.call(this, e, n)), t.b(e), e;
            }),
            de(t, Document.prototype, { ea: Nr, append: Cr });
        })(),
        de(ei, DocumentFragment.prototype, { ea: Sr, append: Tr }),
        (function () {
          function t(t, n) {
            Object.defineProperty(t, 'textContent', {
              enumerable: n.enumerable,
              configurable: !0,
              get: n.get,
              set: function (t) {
                if (this.nodeType === Node.TEXT_NODE) n.set.call(this, t);
                else {
                  var o = void 0;
                  if (this.firstChild) {
                    var r = this.childNodes,
                      i = r.length;
                    if (0 < i && Jt(this)) {
                      o = Array(i);
                      for (var a = 0; a < i; a++) o[a] = r[a];
                    }
                  }
                  if ((n.set.call(this, t), o))
                    for (t = 0; t < o.length; t++) ie(e, o[t]);
                }
              },
            });
          }
          var e = ei;
          Qt(Node.prototype, 'insertBefore', function (t, n) {
            if (t instanceof DocumentFragment) {
              var o = Array.prototype.slice.apply(t.childNodes);
              if (((t = Mr.call(this, t, n)), Jt(this)))
                for (n = 0; n < o.length; n++) re(e, o[n]);
              return t;
            }
            return (
              (o = Jt(t)),
              (n = Mr.call(this, t, n)),
              o && ie(e, t),
              Jt(this) && re(e, t),
              n
            );
          }),
            Qt(Node.prototype, 'appendChild', function (t) {
              if (t instanceof DocumentFragment) {
                var n = Array.prototype.slice.apply(t.childNodes);
                if (((t = Dr.call(this, t)), Jt(this)))
                  for (var o = 0; o < n.length; o++) re(e, n[o]);
                return t;
              }
              return (
                (n = Jt(t)),
                (o = Dr.call(this, t)),
                n && ie(e, t),
                Jt(this) && re(e, t),
                o
              );
            }),
            Qt(Node.prototype, 'cloneNode', function (t) {
              return (
                (t = Or.call(this, !!t)),
                this.ownerDocument.__CE_hasRegistry ? ae(e, t) : oe(e, t),
                t
              );
            }),
            Qt(Node.prototype, 'removeChild', function (t) {
              var n = Jt(t),
                o = Ar.call(this, t);
              return n && ie(e, t), o;
            }),
            Qt(Node.prototype, 'replaceChild', function (t, n) {
              if (t instanceof DocumentFragment) {
                var o = Array.prototype.slice.apply(t.childNodes);
                if (((t = xr.call(this, t, n)), Jt(this)))
                  for (ie(e, n), n = 0; n < o.length; n++) re(e, o[n]);
                return t;
              }
              o = Jt(t);
              var r = xr.call(this, t, n),
                i = Jt(this);
              return i && ie(e, n), o && ie(e, t), i && re(e, t), r;
            }),
            kr && kr.get
              ? t(Node.prototype, kr)
              : ne(e, function (e) {
                  t(e, {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                      for (var t = [], e = 0; e < this.childNodes.length; e++)
                        t.push(this.childNodes[e].textContent);
                      return t.join('');
                    },
                    set: function (t) {
                      for (; this.firstChild; ) Ar.call(this, this.firstChild);
                      Dr.call(this, document.createTextNode(t));
                    },
                  });
                });
        })(),
        (function () {
          function t(t, e) {
            Object.defineProperty(t, 'innerHTML', {
              enumerable: e.enumerable,
              configurable: !0,
              get: e.get,
              set: function (t) {
                var n = this,
                  r = void 0;
                if (
                  (Jt(this) &&
                    ((r = []),
                    Zt(this, function (t) {
                      t !== n && r.push(t);
                    })),
                  e.set.call(this, t),
                  r)
                )
                  for (var i = 0; i < r.length; i++) {
                    var a = r[i];
                    1 === a.__CE_state && o.disconnectedCallback(a);
                  }
                return (
                  this.ownerDocument.__CE_hasRegistry
                    ? ae(o, this)
                    : oe(o, this),
                  t
                );
              },
            });
          }
          function e(t, e) {
            Qt(t, 'insertAdjacentElement', function (t, n) {
              var r = Jt(n);
              return (
                (t = e.call(this, t, n)), r && ie(o, n), Jt(t) && re(o, n), t
              );
            });
          }
          function n(t, e) {
            function n(t, e) {
              for (var n = []; t !== e; t = t.nextSibling) n.push(t);
              for (e = 0; e < n.length; e++) ae(o, n[e]);
            }
            Qt(t, 'insertAdjacentHTML', function (t, o) {
              if ('beforebegin' === (t = t.toLowerCase())) {
                var r = this.previousSibling;
                e.call(this, t, o), n(r || this.parentNode.firstChild, this);
              } else if ('afterbegin' === t)
                (r = this.firstChild),
                  e.call(this, t, o),
                  n(this.firstChild, r);
              else if ('beforeend' === t)
                (r = this.lastChild),
                  e.call(this, t, o),
                  n(r || this.firstChild, null);
              else {
                if ('afterend' !== t)
                  throw new SyntaxError(
                    'The value provided (' +
                      String(t) +
                      ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.",
                  );
                (r = this.nextSibling),
                  e.call(this, t, o),
                  n(this.nextSibling, r);
              }
            });
          }
          var o = ei;
          Lr &&
            Qt(Element.prototype, 'attachShadow', function (t) {
              return (this.__CE_shadowRoot = t = Lr.call(this, t));
            }),
            Pr && Pr.get
              ? t(Element.prototype, Pr)
              : Jr && Jr.get
              ? t(HTMLElement.prototype, Jr)
              : ne(o, function (e) {
                  t(e, {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                      return Or.call(this, !0).innerHTML;
                    },
                    set: function (t) {
                      var e = 'template' === this.localName,
                        n = e ? this.content : this,
                        o = wr.call(
                          document,
                          this.namespaceURI,
                          this.localName,
                        );
                      for (o.innerHTML = t; 0 < n.childNodes.length; )
                        Ar.call(n, n.childNodes[0]);
                      for (t = e ? o.content : o; 0 < t.childNodes.length; )
                        Dr.call(n, t.childNodes[0]);
                    },
                  });
                }),
            Qt(Element.prototype, 'setAttribute', function (t, e) {
              if (1 !== this.__CE_state) return Rr.call(this, t, e);
              var n = jr.call(this, t);
              Rr.call(this, t, e),
                (e = jr.call(this, t)),
                o.attributeChangedCallback(this, t, n, e, null);
            }),
            Qt(Element.prototype, 'setAttributeNS', function (t, e, n) {
              if (1 !== this.__CE_state) return Ir.call(this, t, e, n);
              var r = Fr.call(this, t, e);
              Ir.call(this, t, e, n),
                (n = Fr.call(this, t, e)),
                o.attributeChangedCallback(this, e, r, n, t);
            }),
            Qt(Element.prototype, 'removeAttribute', function (t) {
              if (1 !== this.__CE_state) return Hr.call(this, t);
              var e = jr.call(this, t);
              Hr.call(this, t),
                null !== e &&
                  o.attributeChangedCallback(this, t, e, null, null);
            }),
            Qt(Element.prototype, 'removeAttributeNS', function (t, e) {
              if (1 !== this.__CE_state) return qr.call(this, t, e);
              var n = Fr.call(this, t, e);
              qr.call(this, t, e);
              var r = Fr.call(this, t, e);
              n !== r && o.attributeChangedCallback(this, e, n, r, t);
            }),
            Yr
              ? e(HTMLElement.prototype, Yr)
              : Br
              ? e(Element.prototype, Br)
              : console.warn(
                  'Custom Elements: `Element#insertAdjacentElement` was not patched.',
                ),
            Zr
              ? n(HTMLElement.prototype, Zr)
              : Ur
              ? n(Element.prototype, Ur)
              : console.warn(
                  'Custom Elements: `Element#insertAdjacentHTML` was not patched.',
                ),
            de(o, Element.prototype, { ea: Wr, append: Vr }),
            fe(o);
        })(),
        (document.__CE_hasRegistry = !0);
      var ni = new he(ei);
      Object.defineProperty(window, 'customElements', {
        configurable: !0,
        enumerable: !0,
        value: ni,
      });
    }
    var oi,
      ri,
      ii = 1,
      ai = 7,
      si = 4,
      li = 1e3,
      ci = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
      ui = /@import[^;]*;/gim,
      hi = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      di = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      fi = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      pi = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      mi = /^@[^\s]*keyframes/,
      _i = /\s+/g,
      yi = !(window.ShadyDOM && window.ShadyDOM.inUse);
    window.ShadyCSS &&
      void 0 !== window.ShadyCSS.cssBuild &&
      (ri = window.ShadyCSS.cssBuild);
    var vi = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
      ? (oi = window.ShadyCSS.nativeCss)
      : window.ShadyCSS
      ? (ge(window.ShadyCSS), (window.ShadyCSS = void 0))
      : ge(window.WebComponents && window.WebComponents.flags);
    var gi = oi,
      bi = ri,
      wi =
        /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      Ei = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      Ni = /(--[\w-]+)\s*([:,;)]|$)/gi,
      Ci = /(animation\s*:)|(animation-name\s*:)/,
      Si = /@media\s(.*)/,
      Ti = /\{[^}]*\}/g,
      Oi = new Set(),
      Di = null,
      Mi =
        (window.ShadyDOM && window.ShadyDOM.wrap) ||
        function (t) {
          return t;
        };
    (Pe.prototype.b = function (t, e, n) {
      var o = !1;
      t = t.trim();
      var r = Ai.test(t);
      r &&
        ((t = t.replace(Ai, function (t, e, n) {
          return ':' + e + '(' + n.replace(/\s/g, '') + ')';
        })),
        (t = Ve(t)));
      var i = Hi.test(t);
      if (i) {
        var a = Ge(t);
        (t = a.oa), (a = a.matches);
      }
      return (
        (t = t.replace(Li, ':host $1')),
        (t = t.replace(xi, function (t, r, i) {
          return (
            o ||
              ((t = $e(i, r, e, n)),
              (o = o || t.stop),
              (r = t.Ga),
              (i = t.value)),
            r + i
          );
        })),
        i && (t = Ke(t, a)),
        r && (t = Ve(t)),
        t
      );
    }),
      (Pe.prototype.c = function (t) {
        return t.match(':host')
          ? ''
          : t.match('::slotted')
          ? this.b(t, ':not(.style-scope)')
          : Xe(t.trim(), ':not(.style-scope)');
      }),
      Ln.Object.defineProperties(Pe.prototype, {
        a: {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return 'style-scope';
          },
        },
      });
    var Ai = /:(nth[-\w]+)\(([^)]+)\)/,
      xi = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      ki = /[[.:#*]/,
      Li = /^(::slotted)/,
      Pi = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      ji = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      Ri = /(.*):dir\((?:(ltr|rtl))\)/,
      Hi = /:(?:matches|any|-(?:webkit|moz)-any)/,
      Fi = new Pe();
    (Ye.prototype.c = function () {
      return this.L;
    }),
      (Ye.prototype._getStyleRules = Ye.prototype.c);
    var Ii = navigator.userAgent.match('Trident');
    Ln.Object.defineProperties(en.prototype, {
      a: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return 'x-scope';
        },
      },
    });
    var qi = new en(),
      Bi = {},
      Ui = window.customElements;
    if (Ui && !yi && !vi) {
      var Wi = Ui.define;
      Ui.define = function (t, e, n) {
        Bi[t] || (Bi[t] = Se(t)), Wi.call(Ui, t, e, n);
      };
    }
    mn.prototype.store = function (t, e, n, o) {
      var r = this.cache[t] || [];
      r.push({ J: e, styleElement: n, H: o }),
        100 < r.length && r.shift(),
        (this.cache[t] = r);
    };
    var Vi = new RegExp(Fi.a + '\\s*([^\\s]*)');
    if (!(yi || (window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping))) {
      var Gi = new MutationObserver(gn),
        Ki = function (t) {
          Gi.observe(t, { childList: !0, subtree: !0 });
        };
      if (
        window.customElements &&
        !window.customElements.polyfillWrapFlushCallback
      )
        Ki(document);
      else {
        var $i = function () {
          Ki(document.body);
        };
        window.HTMLImports
          ? window.HTMLImports.whenReady($i)
          : requestAnimationFrame(function () {
              if ('loading' === document.readyState) {
                var t = function () {
                  $i(), document.removeEventListener('readystatechange', t);
                };
                document.addEventListener('readystatechange', t);
              } else $i();
            });
      }
      _n = function () {
        gn(Gi.takeRecords());
      };
    }
    var Xi = _n,
      zi = {},
      Ji = Promise.resolve(),
      Yi = {},
      Zi = new mn();
    ((xn = Nn.prototype).flush = function () {
      Xi();
    }),
      (xn.Ja = function (t) {
        return we(t);
      }),
      (xn.Wa = function (t) {
        return be(t);
      }),
      (xn.prepareTemplate = function (t, e, n) {
        this.prepareTemplateDom(t, e), this.prepareTemplateStyles(t, e, n);
      }),
      (xn.prepareTemplateStyles = function (t, e, n) {
        if (!t._prepared && !vi) {
          yi || Bi[e] || (Bi[e] = Se(e)),
            (t._prepared = !0),
            (t.name = e),
            (t.extends = n),
            (zi[e] = t);
          var o = ke(t),
            r = Le(o);
          n = { is: e, extends: n };
          for (
            var i = [], a = t.content.querySelectorAll('style'), s = 0;
            s < a.length;
            s++
          ) {
            var l = a[s];
            if (l.hasAttribute('shady-unscoped')) {
              if (!yi) {
                var c = l.textContent;
                Oi.has(c) ||
                  (Oi.add(c),
                  (c = l.cloneNode(!0)),
                  document.head.appendChild(c)),
                  l.parentNode.removeChild(l);
              }
            } else i.push(l.textContent), l.parentNode.removeChild(l);
          }
          (i = i.join('').trim() + (Yi[e] || '')),
            Tn(this),
            r ||
              ((a = !o) &&
                ((a = Ei.test(i) || wi.test(i)),
                (Ei.lastIndex = 0),
                (wi.lastIndex = 0)),
              (s = me(i)),
              a && gi && this.a && this.a.transformRules(s, e),
              (t._styleAst = s)),
            (a = []),
            gi || (a = nn(t._styleAst)),
            (a.length && !gi) ||
              ((s = yi ? t.content : null),
              (e = Bi[e] || null),
              (o = qe(n, t._styleAst, null, o, r ? i : '')),
              (o = o.length ? Ce(o, n.is, s, e) : null),
              (t._style = o)),
            (t.a = a);
        }
      }),
      (xn.Ra = function (t, e) {
        Yi[e] = t.join(' ');
      }),
      (xn.prepareTemplateDom = function (t, e) {
        if (!vi) {
          var n = ke(t);
          yi ||
            'shady' === n ||
            t._domPrepared ||
            ((t._domPrepared = !0), je(t.content, e));
        }
      }),
      (xn.flushCustomStyles = function () {
        if (!vi && (Tn(this), this.b)) {
          var t = this.b.processStyles();
          if (this.b.enqueued && !Le(this.f.cssBuild)) {
            if (gi) {
              if (!this.f.cssBuild)
                for (var e = 0; e < t.length; e++) {
                  var n = this.b.getStyleForCustomStyle(t[e]);
                  if (n && gi && this.a) {
                    var o = we(n);
                    Tn(this), this.a.transformRules(o), (n.textContent = be(o));
                  }
                }
            } else {
              for (Mn(this, this.c, this.f), e = 0; e < t.length; e++)
                (n = this.b.getStyleForCustomStyle(t[e])) && pn(n, this.f.K);
              this.u && this.styleDocument();
            }
            this.b.enqueued = !1;
          }
        }
      }),
      (xn.styleElement = function (t, e) {
        if (vi) {
          if (e) {
            Ze(t) || Qe(t, new Ye(null));
            var n = Ze(t);
            (n.G = n.G || {}), Object.assign(n.G, e), On(this, t, n);
          }
        } else if ((n = Ze(t) || Cn(t)))
          if (
            (t !== this.c && (this.u = !0),
            e && ((n.G = n.G || {}), Object.assign(n.G, e)),
            gi)
          )
            On(this, t, n);
          else if ((this.flush(), Mn(this, t, n), n.ma && n.ma.length)) {
            e = Ae(t).is;
            var o;
            t: {
              if ((o = Zi.cache[e]))
                for (var r = o.length - 1; 0 <= r; r--) {
                  var i = o[r];
                  e: {
                    for (var a = n.ma, s = 0; s < a.length; s++) {
                      var l = a[s];
                      if (i.J[l] !== n.K[l]) {
                        a = !1;
                        break e;
                      }
                    }
                    a = !0;
                  }
                  if (a) {
                    o = i;
                    break t;
                  }
                }
              o = void 0;
            }
            (a = o ? o.styleElement : null),
              (r = n.H),
              (i = o && o.H) ||
                ((i = this.F[e] = (this.F[e] || 0) + 1), (i = e + '-' + i)),
              (n.H = i),
              (i = n.H),
              (s = qi),
              (s = a ? a.textContent || '' : hn(s, t, n.K, i));
            var c = (l = Ze(t)).a;
            c &&
              !yi &&
              c !== a &&
              0 >= --c._useCount &&
              c.parentNode &&
              c.parentNode.removeChild(c),
              yi
                ? l.a
                  ? ((l.a.textContent = s), (a = l.a))
                  : s && (a = Ce(s, i, t.shadowRoot, l.b))
                : a
                ? a.parentNode ||
                  (Ii && -1 < s.indexOf('@media') && (a.textContent = s),
                  Te(a, null, l.b))
                : s && (a = Ce(s, i, null, l.b)),
              a &&
                ((a._useCount = a._useCount || 0),
                l.a != a && a._useCount++,
                (l.a = a)),
              (i = a),
              yi ||
                ((a = n.H),
                (l = s = t.getAttribute('class') || ''),
                r &&
                  (l = s.replace(
                    new RegExp('\\s*x-scope\\s*' + r + '\\s*', 'g'),
                    ' ',
                  )),
                (l += (l ? ' ' : '') + 'x-scope ' + a),
                s !== l && Me(t, l)),
              o || Zi.store(e, n.K, i, n.H);
          }
      }),
      (xn.styleDocument = function (t) {
        this.styleSubtree(this.c, t);
      }),
      (xn.styleSubtree = function (t, e) {
        var n = Mi(t),
          o = n.shadowRoot;
        if (
          ((o || t === this.c) && this.styleElement(t, e),
          (t = o && (o.children || o.childNodes)))
        )
          for (n = 0; n < t.length; n++) this.styleSubtree(t[n]);
        else if ((n = n.children || n.childNodes))
          for (t = 0; t < n.length; t++) this.styleSubtree(n[t]);
      }),
      (xn.va = function (t) {
        var e = this,
          n = ke(t);
        if ((n !== this.f.cssBuild && (this.f.cssBuild = n), !Le(n))) {
          var o = we(t);
          Ne(o, function (t) {
            if (yi) Je(t);
            else {
              var o = Fi;
              (t.selector = t.parsedSelector),
                Je(t),
                (t.selector = t.C = We(o, t, o.c, void 0, void 0));
            }
            gi && '' === n && (Tn(e), e.a && e.a.transformRule(t));
          }),
            gi ? (t.textContent = be(o)) : this.f.L.rules.push(o);
        }
      }),
      (xn.getComputedStyleValue = function (t, e) {
        var n;
        return (
          gi || (n = (Ze(t) || Ze(Dn(this, t))).K[e]),
          (n = n || window.getComputedStyle(t).getPropertyValue(e))
            ? n.trim()
            : ''
        );
      }),
      (xn.Va = function (t, e) {
        var n = Mi(t).getRootNode();
        if (((e = e ? e.split(/\s/) : []), !(n = n.host && n.host.localName))) {
          var o = t.getAttribute('class');
          if (o) {
            o = o.split(/\s/);
            for (var r = 0; r < o.length; r++)
              if (o[r] === Fi.a) {
                n = o[r + 1];
                break;
              }
          }
        }
        n && e.push(Fi.a, n),
          gi || ((n = Ze(t)) && n.H && e.push(qi.a, n.H)),
          Me(t, e.join(' '));
      }),
      (xn.Ea = function (t) {
        return Ze(t);
      }),
      (xn.Ua = function (t, e) {
        He(t, e);
      }),
      (xn.Xa = function (t, e) {
        He(t, e, !0);
      }),
      (xn.Ta = function (t) {
        return vn(t);
      }),
      (xn.Ha = function (t) {
        return yn(t);
      }),
      (Nn.prototype.flush = Nn.prototype.flush),
      (Nn.prototype.prepareTemplate = Nn.prototype.prepareTemplate),
      (Nn.prototype.styleElement = Nn.prototype.styleElement),
      (Nn.prototype.styleDocument = Nn.prototype.styleDocument),
      (Nn.prototype.styleSubtree = Nn.prototype.styleSubtree),
      (Nn.prototype.getComputedStyleValue = Nn.prototype.getComputedStyleValue),
      (Nn.prototype.setElementClass = Nn.prototype.Va),
      (Nn.prototype._styleInfoForNode = Nn.prototype.Ea),
      (Nn.prototype.transformCustomStyleForDocument = Nn.prototype.va),
      (Nn.prototype.getStyleAst = Nn.prototype.Ja),
      (Nn.prototype.styleAstToString = Nn.prototype.Wa),
      (Nn.prototype.flushCustomStyles = Nn.prototype.flushCustomStyles),
      (Nn.prototype.scopeNode = Nn.prototype.Ua),
      (Nn.prototype.unscopeNode = Nn.prototype.Xa),
      (Nn.prototype.scopeForNode = Nn.prototype.Ta),
      (Nn.prototype.currentScopeForNode = Nn.prototype.Ha),
      (Nn.prototype.prepareAdoptedCssText = Nn.prototype.Ra),
      Object.defineProperties(Nn.prototype, {
        nativeShadow: {
          get: function () {
            return yi;
          },
        },
        nativeCss: {
          get: function () {
            return gi;
          },
        },
      });
    var Qi,
      ta,
      ea = new Nn();
    window.ShadyCSS &&
      ((Qi = window.ShadyCSS.ApplyShim),
      (ta = window.ShadyCSS.CustomStyleInterface)),
      (window.ShadyCSS = {
        ScopingShim: ea,
        prepareTemplate: function (t, e, n) {
          ea.flushCustomStyles(), ea.prepareTemplate(t, e, n);
        },
        prepareTemplateDom: function (t, e) {
          ea.prepareTemplateDom(t, e);
        },
        prepareTemplateStyles: function (t, e, n) {
          ea.flushCustomStyles(), ea.prepareTemplateStyles(t, e, n);
        },
        styleSubtree: function (t, e) {
          ea.flushCustomStyles(), ea.styleSubtree(t, e);
        },
        styleElement: function (t) {
          ea.flushCustomStyles(), ea.styleElement(t);
        },
        styleDocument: function (t) {
          ea.flushCustomStyles(), ea.styleDocument(t);
        },
        flushCustomStyles: function () {
          ea.flushCustomStyles();
        },
        getComputedStyleValue: function (t, e) {
          return ea.getComputedStyleValue(t, e);
        },
        nativeCss: gi,
        nativeShadow: yi,
        cssBuild: bi,
        disableRuntime: vi,
      }),
      Qi && (window.ShadyCSS.ApplyShim = Qi),
      ta && (window.ShadyCSS.CustomStyleInterface = ta),
      (function (t) {
        function e(t) {
          return '' == t && (i.call(this), (this.i = !0)), t.toLowerCase();
        }
        function n(t) {
          var e = t.charCodeAt(0);
          return 32 < e && 127 > e && -1 == [34, 35, 60, 62, 63, 96].indexOf(e)
            ? t
            : encodeURIComponent(t);
        }
        function o(t) {
          var e = t.charCodeAt(0);
          return 32 < e && 127 > e && -1 == [34, 35, 60, 62, 96].indexOf(e)
            ? t
            : encodeURIComponent(t);
        }
        function r(t, r, a) {
          var s = r || 'scheme start',
            l = 0,
            f = '',
            p = !1,
            m = !1;
          t: for (; (void 0 != t[l - 1] || 0 == l) && !this.i; ) {
            var _ = t[l];
            switch (s) {
              case 'scheme start':
                if (!_ || !h.test(_)) {
                  if (r) break t;
                  (f = ''), (s = 'no scheme');
                  continue;
                }
                (f += _.toLowerCase()), (s = 'scheme');
                break;
              case 'scheme':
                if (_ && d.test(_)) f += _.toLowerCase();
                else {
                  if (':' != _) {
                    if (r) break t;
                    (f = ''), (l = 0), (s = 'no scheme');
                    continue;
                  }
                  if (((this.h = f), (f = ''), r)) break t;
                  void 0 !== c[this.h] && (this.B = !0),
                    (s =
                      'file' == this.h
                        ? 'relative'
                        : this.B && a && a.h == this.h
                        ? 'relative or authority'
                        : this.B
                        ? 'authority first slash'
                        : 'scheme data');
                }
                break;
              case 'scheme data':
                '?' == _
                  ? ((this.o = '?'), (s = 'query'))
                  : '#' == _
                  ? ((this.v = '#'), (s = 'fragment'))
                  : void 0 != _ &&
                    '\t' != _ &&
                    '\n' != _ &&
                    '\r' != _ &&
                    (this.ka += n(_));
                break;
              case 'no scheme':
                if (a && void 0 !== c[a.h]) {
                  s = 'relative';
                  continue;
                }
                i.call(this), (this.i = !0);
                break;
              case 'relative or authority':
                if ('/' != _ || '/' != t[l + 1]) {
                  s = 'relative';
                  continue;
                }
                s = 'authority ignore slashes';
                break;
              case 'relative':
                if (
                  ((this.B = !0),
                  'file' != this.h && (this.h = a.h),
                  void 0 == _)
                ) {
                  (this.j = a.j),
                    (this.m = a.m),
                    (this.l = a.l.slice()),
                    (this.o = a.o),
                    (this.s = a.s),
                    (this.g = a.g);
                  break t;
                }
                if ('/' == _ || '\\' == _) s = 'relative slash';
                else if ('?' == _)
                  (this.j = a.j),
                    (this.m = a.m),
                    (this.l = a.l.slice()),
                    (this.o = '?'),
                    (this.s = a.s),
                    (this.g = a.g),
                    (s = 'query');
                else {
                  if ('#' != _) {
                    s = t[l + 1];
                    var y = t[l + 2];
                    ('file' != this.h ||
                      !h.test(_) ||
                      (':' != s && '|' != s) ||
                      (void 0 != y &&
                        '/' != y &&
                        '\\' != y &&
                        '?' != y &&
                        '#' != y)) &&
                      ((this.j = a.j),
                      (this.m = a.m),
                      (this.s = a.s),
                      (this.g = a.g),
                      (this.l = a.l.slice()),
                      this.l.pop()),
                      (s = 'relative path');
                    continue;
                  }
                  (this.j = a.j),
                    (this.m = a.m),
                    (this.l = a.l.slice()),
                    (this.o = a.o),
                    (this.v = '#'),
                    (this.s = a.s),
                    (this.g = a.g),
                    (s = 'fragment');
                }
                break;
              case 'relative slash':
                if ('/' != _ && '\\' != _) {
                  'file' != this.h &&
                    ((this.j = a.j),
                    (this.m = a.m),
                    (this.s = a.s),
                    (this.g = a.g)),
                    (s = 'relative path');
                  continue;
                }
                s = 'file' == this.h ? 'file host' : 'authority ignore slashes';
                break;
              case 'authority first slash':
                if ('/' != _) {
                  s = 'authority ignore slashes';
                  continue;
                }
                s = 'authority second slash';
                break;
              case 'authority second slash':
                if (((s = 'authority ignore slashes'), '/' != _)) continue;
                break;
              case 'authority ignore slashes':
                if ('/' != _ && '\\' != _) {
                  s = 'authority';
                  continue;
                }
                break;
              case 'authority':
                if ('@' == _) {
                  for (p && (f += '%40'), p = !0, _ = 0; _ < f.length; _++)
                    '\t' == (y = f[_]) ||
                      '\n' == y ||
                      '\r' == y ||
                      (':' == y && null === this.g
                        ? (this.g = '')
                        : ((y = n(y)),
                          null !== this.g ? (this.g += y) : (this.s += y)));
                  f = '';
                } else {
                  if (
                    void 0 == _ ||
                    '/' == _ ||
                    '\\' == _ ||
                    '?' == _ ||
                    '#' == _
                  ) {
                    (l -= f.length), (f = ''), (s = 'host');
                    continue;
                  }
                  f += _;
                }
                break;
              case 'file host':
                if (
                  void 0 == _ ||
                  '/' == _ ||
                  '\\' == _ ||
                  '?' == _ ||
                  '#' == _
                ) {
                  2 != f.length || !h.test(f[0]) || (':' != f[1] && '|' != f[1])
                    ? (0 != f.length && ((this.j = e.call(this, f)), (f = '')),
                      (s = 'relative path start'))
                    : (s = 'relative path');
                  continue;
                }
                '\t' == _ || '\n' == _ || '\r' == _ || (f += _);
                break;
              case 'host':
              case 'hostname':
                if (':' != _ || m) {
                  if (
                    void 0 == _ ||
                    '/' == _ ||
                    '\\' == _ ||
                    '?' == _ ||
                    '#' == _
                  ) {
                    if (
                      ((this.j = e.call(this, f)),
                      (f = ''),
                      (s = 'relative path start'),
                      r)
                    )
                      break t;
                    continue;
                  }
                  '\t' != _ &&
                    '\n' != _ &&
                    '\r' != _ &&
                    ('[' == _ ? (m = !0) : ']' == _ && (m = !1), (f += _));
                } else if (
                  ((this.j = e.call(this, f)),
                  (f = ''),
                  (s = 'port'),
                  'hostname' == r)
                )
                  break t;
                break;
              case 'port':
                if (/[0-9]/.test(_)) f += _;
                else {
                  if (
                    void 0 == _ ||
                    '/' == _ ||
                    '\\' == _ ||
                    '?' == _ ||
                    '#' == _ ||
                    r
                  ) {
                    if (
                      ('' != f &&
                        ((f = parseInt(f, 10)) != c[this.h] &&
                          (this.m = f + ''),
                        (f = '')),
                      r)
                    )
                      break t;
                    s = 'relative path start';
                    continue;
                  }
                  '\t' == _ ||
                    '\n' == _ ||
                    '\r' == _ ||
                    (i.call(this), (this.i = !0));
                }
                break;
              case 'relative path start':
                if (((s = 'relative path'), '/' != _ && '\\' != _)) continue;
                break;
              case 'relative path':
                void 0 != _ &&
                '/' != _ &&
                '\\' != _ &&
                (r || ('?' != _ && '#' != _))
                  ? '\t' != _ && '\n' != _ && '\r' != _ && (f += n(_))
                  : ((y = u[f.toLowerCase()]) && (f = y),
                    '..' == f
                      ? (this.l.pop(), '/' != _ && '\\' != _ && this.l.push(''))
                      : '.' == f && '/' != _ && '\\' != _
                      ? this.l.push('')
                      : '.' != f &&
                        ('file' == this.h &&
                          0 == this.l.length &&
                          2 == f.length &&
                          h.test(f[0]) &&
                          '|' == f[1] &&
                          (f = f[0] + ':'),
                        this.l.push(f)),
                    (f = ''),
                    '?' == _
                      ? ((this.o = '?'), (s = 'query'))
                      : '#' == _ && ((this.v = '#'), (s = 'fragment')));
                break;
              case 'query':
                r || '#' != _
                  ? void 0 != _ &&
                    '\t' != _ &&
                    '\n' != _ &&
                    '\r' != _ &&
                    (this.o += o(_))
                  : ((this.v = '#'), (s = 'fragment'));
                break;
              case 'fragment':
                void 0 != _ &&
                  '\t' != _ &&
                  '\n' != _ &&
                  '\r' != _ &&
                  (this.v += _);
            }
            l++;
          }
        }
        function i() {
          (this.s = this.ka = this.h = ''),
            (this.g = null),
            (this.m = this.j = ''),
            (this.l = []),
            (this.v = this.o = ''),
            (this.B = this.i = !1);
        }
        function a(t, e) {
          void 0 === e || e instanceof a || (e = new a(String(e))),
            (this.a = t),
            i.call(this),
            (t = this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '')),
            r.call(this, t, null, e);
        }
        var s = !1;
        try {
          var l = new URL('b', 'http://a');
          (l.pathname = 'c%20d'), (s = 'http://a/c%20d' === l.href);
        } catch (t) {}
        if (!s) {
          var c = Object.create(null);
          (c.ftp = 21),
            (c.file = 0),
            (c.gopher = 70),
            (c.http = 80),
            (c.https = 443),
            (c.ws = 80),
            (c.wss = 443);
          var u = Object.create(null);
          (u['%2e'] = '.'),
            (u['.%2e'] = '..'),
            (u['%2e.'] = '..'),
            (u['%2e%2e'] = '..');
          var h = /[a-zA-Z]/,
            d = /[a-zA-Z0-9\+\-\.]/;
          a.prototype = {
            toString: function () {
              return this.href;
            },
            get href() {
              if (this.i) return this.a;
              var t = '';
              return (
                ('' == this.s && null == this.g) ||
                  (t = this.s + (null != this.g ? ':' + this.g : '') + '@'),
                this.protocol +
                  (this.B ? '//' + t + this.host : '') +
                  this.pathname +
                  this.o +
                  this.v
              );
            },
            set href(t) {
              i.call(this), r.call(this, t);
            },
            get protocol() {
              return this.h + ':';
            },
            set protocol(t) {
              this.i || r.call(this, t + ':', 'scheme start');
            },
            get host() {
              return this.i ? '' : this.m ? this.j + ':' + this.m : this.j;
            },
            set host(t) {
              !this.i && this.B && r.call(this, t, 'host');
            },
            get hostname() {
              return this.j;
            },
            set hostname(t) {
              !this.i && this.B && r.call(this, t, 'hostname');
            },
            get port() {
              return this.m;
            },
            set port(t) {
              !this.i && this.B && r.call(this, t, 'port');
            },
            get pathname() {
              return this.i ? '' : this.B ? '/' + this.l.join('/') : this.ka;
            },
            set pathname(t) {
              !this.i &&
                this.B &&
                ((this.l = []), r.call(this, t, 'relative path start'));
            },
            get search() {
              return this.i || !this.o || '?' == this.o ? '' : this.o;
            },
            set search(t) {
              !this.i &&
                this.B &&
                ((this.o = '?'),
                '?' == t[0] && (t = t.slice(1)),
                r.call(this, t, 'query'));
            },
            get hash() {
              return this.i || !this.v || '#' == this.v ? '' : this.v;
            },
            set hash(t) {
              this.i ||
                (t
                  ? ((this.v = '#'),
                    '#' == t[0] && (t = t.slice(1)),
                    r.call(this, t, 'fragment'))
                  : (this.v = ''));
            },
            get origin() {
              var t;
              if (this.i || !this.h) return '';
              switch (this.h) {
                case 'data':
                case 'file':
                case 'javascript':
                case 'mailto':
                  return 'null';
              }
              return (t = this.host) ? this.h + '://' + t : '';
            },
          };
          var f = t.URL;
          f &&
            ((a.createObjectURL = function (t) {
              return f.createObjectURL.apply(f, arguments);
            }),
            (a.revokeObjectURL = function (t) {
              f.revokeObjectURL(t);
            })),
            (t.URL = a);
        }
      })(window),
      Object.getOwnPropertyDescriptor(Node.prototype, 'baseURI') ||
        Object.defineProperty(Node.prototype, 'baseURI', {
          get: function () {
            var t = (this.ownerDocument || this).querySelector('base[href]');
            return (t && t.href) || window.location.href;
          },
          configurable: !0,
          enumerable: !0,
        });
    var na = document.createElement('style');
    na.textContent =
      'body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n';
    var oa = document.querySelector('head');
    oa.insertBefore(na, oa.firstChild);
    var ra = window.customElements,
      ia = !1,
      aa = null;
    ra.polyfillWrapFlushCallback &&
      ra.polyfillWrapFlushCallback(function (t) {
        (aa = t), ia && t();
      }),
      'complete' !== document.readyState
        ? (window.addEventListener('load', An),
          window.addEventListener('DOMContentLoaded', function () {
            window.removeEventListener('load', An), An();
          }))
        : An();
  }.call(e));
  let n = {
      loader: `.lds-ring div {\n      box-sizing: border-box;\n      display: block;\n      position: absolute;\n      width: 45px;\n      height: 45px;\n      margin: 6px;\n      border: 4px solid #fff;\n      border-radius: 50%;\n      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n      border-color: #fff transparent transparent transparent;\n      z-index: :9999999999999999999999999999999999;\n    }\n    .lds-ring div:nth-child(1) {\n      animation-delay: -0.45s;\n    }\n    .lds-ring div:nth-child(2) {\n      animation-delay: -0.3s;\n    }\n    .lds-ring div:nth-child(3) {\n      animation-delay: -0.15s;\n    }\n    @keyframes lds-ring {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n\n    .iframe_style {\n      visibility: visible;\n      position: fixed;\n      left: 0px;\n      top: 0px;\n      width: 100% ;\n      height: 100% ;\n      z-index: 2147483647;\n      padding: 0px;\n      // margin: 0px ;\n      border: 0 px none transparent;\n      //background-color: rgba(0, 0, 0, 0.4);\n      // background: rgba(73, 82, 84, 0.7);\n      overflow: hidden auto;\n      transition: transform translate(-50 px) 0.7 s;\n      transform: translateX(0 px);\n      -webkit-tap-highlight-color: transparent;\n    }\n      .loader{\n            width: 50px;\n        height: 50px;\n        z-index: 77777777777777777777777;\n        //background: rgba(0, 0, 0, 0.4);\n        top: 50%;\n        left: 50%;\n        position: fixed;\n        //display:flex ;\n        justify-content: center;\n        align-items: center;\n    }`,
      iframe: `visibility: visible;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    z-index: 2147483647;\n    padding: 0px;\n    // margin: 0px ;\n    border: 0px none transparent;\n    // background-color: rgba(0, 0, 0, 0.4);\n    overflow: hidden auto;\n    transition:transform translate(-50px) 0.7s;\n    transform: translateX(0px);\n    -webkit-tap-highlight-color: transparent;`,
      button: `\t  cursor:pointer;\n    color: #fff;\n\t  // border-radius: 50px;\n    padding: 15px;\n    width: 200px;\n    transition: background-color 0.5s ease;\n    border:solid 2px;\n    margin:2px 0;`,
    },
    o = () => {
      let t = document.createElement('style');
      t.type = 'text/css';
      t.innerHTML = n.loader;
      document.querySelector('head').appendChild(t);
      let e = document.createElement('div');
      e.setAttribute('class', 'loader-kkiapay loader');
      e.setAttribute('id', 'unique');
      let o = document.createElement('div');
      o.setAttribute('class', 'red');
      e.appendChild(o);
      let r = document.createElement('div');
      r.setAttribute('class', 'lds-ring');
      for (let t = 0; t < 4; t++) {
        let t = document.createElement('div');
        r.appendChild(t);
      }
      o.appendChild(r);
      let i = document.createElement('div');
      let a = document.createElement('div');
      a.setAttribute('class', 'iframe_style');
      e.appendChild(o);
      i.appendChild(e);
      i.appendChild(a);
      i.setAttribute('style', 'display:none');
      i.setAttribute('class', 'kkiapay-container');
      document.querySelector('body').appendChild(i);
    };
  var r = '';
  class i extends HTMLElement {
    constructor() {
      super(),
        this.attachShadow({ mode: 'open' }),
        (this.attrs = this.attributes),
        (this.shadowRoot.innerHTML = `\n            <style>\n            .lds-ring div {\n                    box-sizing: border-box;\n                    display: block;\n                    position: absolute;\n                    width: 45px;\n                    height: 45px;\n                    margin: 6px;\n                    border: 4px solid #fff;\n                    border-radius: 50% ;\n                    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n                    border-color: #fff transparent transparent transparent;\n                    z-index: 9999999999999999999999999999999999;\n                }\n                .lds-ring div:nth-child(1) {\n                    animation-delay: -0.45s;\n                }\n                .lds-ring div:nth-child(2) {\n                    animation-delay: -0.3s;\n                }\n                .lds-ring div:nth-child(3) {\n                    animation-delay: -0.15s;\n                }\n            @keyframes lds-ring {\n                    0% {\n                        transform: rotate(0deg);\n                    }\n                    100% {\n                        transform: rotate(360deg);\n                    }\n                }\n\n                .loader {\n                    // width: 100vw ;\n                    // height: 100vh ;\n                    //z-index: -1;\n                    //background: rgba(0, 0, 0, 0.4);\n                    // background:transparent;\n                    top: 50%;\n                    left: 50%;\n                    position: fixed;\n                    display:none;\n                    justify-content: center;\n                    align-items: center;\n\n             width: 50px;\n            height: 50px;\n            z-index: 7777777777;\n                }\n                button{\n                    cursor: pointer;\n                    color: white;\n                    padding: 15px;\n                    width: 200px;\n                    transition: background 0.5s ease 0s;\n                    margin: 2px 0px;\n                }\n\n                button:hover{\n                    background:white;\n                }\n\n                .iframe_style{\n                    visibility: visible;\n                    position: fixed;\n                    left: 0px;\n                    top: 0px;\n                    width: 100% ;\n                    height: 100% ;\n                    z-index: 2147483647;\n                    padding: 0px;\n                    // margin:0px;\n                    border: 0px none transparent;\n                    background-color: rgba(0, 0, 0, 0.1);\n                    overflow: hidden auto;\n                    transition: transform translate(-50px) 0.7s;\n                    transform: translateX(0px);\n                    -webkit-tap-highlight-color: transparent;\n                }\n            </style>\n        `);
    }
    connectedCallback() {
      let t = this;
      i.bindEvent(window, 'message', function (e) {
        'close' === e.data &&
          setTimeout(() => {
            t.shadowRoot
              .querySelector('iframe')
              .setAttribute('style', 'display:none');
          }, 1e3),
          'status' === e.data.status &&
            setTimeout(() => {
              t.shadowRoot
                .querySelector('iframe')
                .setAttribute('style', 'display:none');
              window.location.href = e.data.callback;
            }, 1e3),
          'loaded' == e.data &&
            t.shadowRoot
              .querySelector('.loader')
              .setAttribute('style', 'display:none');
      });
      let e = document.createElement('button');
      this.setButtonStyle(e),
        (e.innerText = 'Pay Now'),
        e.addEventListener('click', this.sendEvent.bind(this)),
        this.setButtonBehaviour(e),
        this.shadowRoot.appendChild(e);
      let n = i.formatAttributes(this.attrs);
      console.log(n);
      btoa(JSON.stringify(n));
      this.createIframe('https://widget.kkiapay.me'), this.setLoader();
    }
    setButtonStyle(t) {
      this.getAttribute('theme') && '' != this.getAttribute('theme')
        ? ((t.style.background = this.getAttribute('theme')),
          (t.style.border = `2px solid ${this.getAttribute('theme')}`))
        : ((t.style.background = '#E30E25'),
          (t.style.border = `2px solid #E30E25`));
    }
    sendEvent() {
      let t = this.shadowRoot.querySelector('iframe');
      t.removeAttribute('style'),
        this.shadowRoot
          .querySelector('.loader')
          .setAttribute('style', 'display:block');
      let e = i.formatAttributes(this.attrs);
      setTimeout(() => {
        t.contentWindow.postMessage({ keys: e }, '*');
      }, 3e3);
    }
    static formatAttributes(t) {
      let e = {},
        n = {};
      for (const o in t)
        if (t.hasOwnProperty(o)) {
          const r = t[o];
          let i = r.name,
            a = r.value;
          if (i.includes('.')) {
            e[i] = a;
            let t = i.split('.')[0].split('-')[1];
            n[t] = {};
          } else e[i] = a;
        }
      for (const t in e)
        if (e.hasOwnProperty(t)) {
          const o = e[t];
          if (t.includes('.')) {
            let e = t.split('.')[0].split('-')[1];
            n[e][t] = o;
          } else n[t] = o;
        }
      return n;
    }
    setButtonBehaviour(t) {
      this.hasAttribute('theme') && '' != this.getAttribute('theme')
        ? (t.addEventListener('mouseenter', (t) => {
            t.srcElement.style.setProperty('background', 'white');
            t.srcElement.style.setProperty('color', this.getAttribute('theme'));
          }),
          t.addEventListener('mouseleave', (t) => {
            t.srcElement.style.setProperty(
              'background',
              this.getAttribute('theme'),
            );
            t.srcElement.style.setProperty('color', 'white');
          }))
        : (t.addEventListener('mouseenter', (t) => {
            t.srcElement.style.setProperty('background', 'white');
            t.srcElement.style.setProperty('color', '#E30E25');
          }),
          t.addEventListener('mouseleave', (t) => {
            t.srcElement.style.setProperty('background', '#E30E25');
            t.srcElement.style.setProperty('color', 'white');
          }));
    }
    createIframe(t) {
      let e = document.createElement('iframe'),
        n = document.createElement('div');
      e.setAttribute('src', t),
        e.setAttribute('class', 'iframe_style'),
        e.setAttribute('style', 'display:none'),
        n.appendChild(e),
        this.shadowRoot.appendChild(e);
    }
    static bindEvent(t, e, n) {
      t.addEventListener(e, n, !1);
    }
    setLoader() {
      let t = document.createElement('div');
      t.setAttribute('class', 'loader'), t.setAttribute('id', 'unique');
      let e = document.createElement('div');
      e.setAttribute('class', 'red'), t.appendChild(e);
      let n = document.createElement('div');
      n.setAttribute('class', 'lds-ring');
      for (let t = 0; t < 4; t++) {
        let t = document.createElement('div');
        n.appendChild(t);
      }
      e.appendChild(n), t.appendChild(e), this.shadowRoot.appendChild(t);
    }
  }
  document.currentScript.getAttribute('key');
  const a = document.querySelectorAll('.kkiapay-button'),
    s = document.currentScript.attributes,
    l = i.formatAttributes(s);
  o(),
    (function (e, n, o) {
      for (var r = 0, i = e.length; r < i; r++) {
        const i = document.createElement('iframe');
        i.setAttribute('class', 'iframe_style'),
          i.setAttribute('id', 'kkiapay_iframe'),
          i.setAttribute('style', 'display:none'),
          i.setAttribute('src', 'https://widget.kkiapay.me');
        const a = e[r];
        a.appendChild(i),
          e[r].addEventListener(n, o, !1),
          t(window, 'message', function (t) {
            console.log(t),
              'close' === t.data &&
                setTimeout(() => {
                  i.setAttribute('style', 'display:none');
                }, 1e3),
              'loaded' == t.data &&
                document
                  .querySelector('.kkiapay-container')
                  .setAttribute('style', 'display:none');
          });
      }
    })(a, 'click', (t) => {
      const e = t.srcElement.querySelector('#kkiapay_iframe');
      e.removeAttribute('style');
      const n = document.querySelector('.kkiapay-container');
      n.setAttribute('style', 'display:flex');
      setTimeout(() => {
        e.contentWindow.postMessage({ keys: l }, '*');
      }, 1e3);
      t.preventDefault();
    }),
    t(window, 'message', function (t) {
      let e = document.querySelector('#kkiapay_iframe');
      'close' === t.data &&
        setTimeout(() => {
          e.setAttribute('style', 'display:none');
          document.querySelector('.kkiapay-container');
        }, 1e3),
        'status' === t.data.status &&
          setTimeout(() => {
            window.location.href = t.data.callback || l.callback;
            e.setAttribute('style', 'display:none');
            document.querySelector('.kkiapay-container');
          }, 1e3),
        'loaded' == t.data &&
          document
            .querySelector('.kkiapay-container')
            .setAttribute('style', 'display:none');
    }),
    (window.openKkiapayWidget = (t) => {
      const e = document.querySelector('#kkiapay_iframe');
      r = t.callback;
      e.removeAttribute('style');
      const n = document.querySelector('.kkiapay-container');
      n.setAttribute('style', 'display:flex');
      setTimeout(() => {
        e.contentWindow.postMessage({ keys: t }, '*');
      }, 1e3);
    }),
    (function () {
      let t = document.createElement('iframe'),
        e = document.createElement('div');
      (t.src = 'https://widget.kkiapay.me'),
        t.setAttribute('class', 'iframe_style'),
        (t.id = 'kkiapay_iframe'),
        (t.style = 'display:none'),
        e.appendChild(t),
        document.body.appendChild(t);
    })(),
    customElements.define('kkiapay-widget', i);
});
