import { defineComponent as B, mergeModels as b, computed as T, useModel as P, ref as o, onMounted as X, onUnmounted as I, openBlock as y, createElementBlock as C, createElementVNode as p, normalizeClass as k, normalizeStyle as r, toDisplayString as W, createCommentVNode as R } from "vue";
const $ = "data:image/svg+xml,%3csvg%20t='1735183612108'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='1450'%20width='200'%20height='200'%3e%3cpath%20d='M505.6%20121.6l396.8%20339.2c32%2025.6%2032%2070.4%200%2096l-396.8%20339.2c-25.6%2025.6-70.4%2019.2-89.6-6.4l0%200c-25.6-25.6-19.2-70.4%206.4-89.6L768%20512%20422.4%20217.6C396.8%20198.4%20390.4%20153.6%20416%20128l0%200C441.6%20102.4%20480%2096%20505.6%20121.6z'%20fill='%2332363999'%20p-id='1451'%3e%3c/path%3e%3cpath%20d='M204.8%20121.6l396.8%20339.2c32%2025.6%2032%2070.4%200%2096l-396.8%20339.2c-25.6%2025.6-70.4%2019.2-89.6-6.4l0%200c-25.6-25.6-19.2-70.4%206.4-89.6L460.8%20512%20115.2%20217.6C89.6%20198.4%2089.6%20153.6%20108.8%20128l0%200C134.4%20102.4%20172.8%2096%20204.8%20121.6z'%20fill='%2332363999'%20p-id='1452'%3e%3c/path%3e%3c/svg%3e", F = "data:image/svg+xml,%3csvg%20t='1735183685296'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='2434'%20width='200'%20height='200'%3e%3cpath%20d='M913.017%20237.02c-25.311-25.312-66.349-25.312-91.66%200l-412.475%20412.474-206.237-206.237c-25.312-25.312-66.35-25.312-91.661%200s-25.312%2066.35%200%2091.66l252.067%20252.067c0.729%200.73%201.439%201.402%202.134%202.029%2025.434%2023.257%2064.913%2022.585%2089.527-2.029l458.303-458.303c25.313-25.312%2025.313-66.35%200.001-91.661z'%20fill='%2332363999'%20p-id='2435'%3e%3c/path%3e%3c/svg%3e", N = { class: "slider-wrapper" }, O = ["src"], U = ["src"], j = /* @__PURE__ */ B({
  name: "SliderVerify",
  __name: "index",
  props: /* @__PURE__ */ b({
    size: { default: "medium" },
    width: {},
    sliderTip: { default: "请按住滑块拖动" },
    successTip: { default: "验证通过" },
    fillColor: { default: "#79ce8e" },
    sliderColor: { default: "#f2f2f2" },
    icons: { default: () => [$, F] }
  }, {
    modelValue: { default: !1, type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ b(["onSuccess", "onFail", "onDrag", "onDragEnd"], ["update:modelValue"]),
  setup(i, { emit: f }) {
    const s = i, l = f, h = T(() => s.width ? typeof s.width == "number" ? `${s.width}px` : s.width : "100%"), n = P(i, "modelValue"), a = o(), g = o({
      borderRadius: "4px 0 0 4px"
    }), x = o(s.sliderTip), t = o(0), c = o(!1), z = o(0), E = o(0), M = {
      mini: 24,
      small: 28,
      medium: 32,
      large: 36
    }, d = {
      mini: 12,
      small: 13,
      medium: 14,
      large: 14
    }, u = (e) => {
      if (c.value) {
        l("onDrag");
        const v = e.clientX - z.value, D = E.value + v;
        if (a.value) {
          const V = a.value.getBoundingClientRect(), L = M[s.size], w = V.width - L, _ = 0;
          D >= L ? g.value = { borderRadius: "4px" } : g.value = { borderRadius: "4px 0 0 4px" }, t.value >= w ? (t.value = w, n.value = !0, c.value = !1, x.value = s.successTip, l("onSuccess", !0)) : (n.value = !1, t.value = 0, l("onFail", !1)), t.value = Math.max(
            _,
            Math.min(w, D)
          );
        }
      }
    }, m = () => {
      c.value = !1, l("onDragEnd");
      const e = a.value.getBoundingClientRect();
      if (a.value) {
        const v = M[s.size];
        t.value < e.width - v && (t.value = 0);
      }
      document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", m);
    }, S = (e) => {
      n.value || (c.value = !0, z.value = e.clientX, E.value = t.value, document.addEventListener("mousemove", u), document.addEventListener("mouseup", m));
    };
    return X(() => {
      document.addEventListener("mousemove", u), document.addEventListener("mouseup", m);
    }), I(() => {
      document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", m);
    }), (e, v) => (y(), C("div", N, [
      p("div", {
        ref_key: "sliderContainer",
        ref: a,
        class: k(["slider-container", `slider-container-${e.size}`]),
        style: r({ width: h.value, backgroundColor: e.sliderColor })
      }, [
        p("div", {
          class: "slider-fill",
          style: r({ width: t.value + "px", backgroundColor: e.fillColor })
        }, null, 4),
        p("div", {
          class: k(["slider-tips", { success: n.value }])
        }, W(x.value), 3),
        p("div", {
          class: "slider-thumb",
          style: r({ left: `${t.value}px`, ...g.value }),
          onMousedown: S
        }, [
          n.value ? R("", !0) : (y(), C("img", {
            key: 0,
            src: e.icons[0],
            class: "slider-icon",
            style: r({
              width: d[e.size] + "px",
              height: d[e.size] + "px"
            })
          }, null, 12, O)),
          n.value ? (y(), C("img", {
            key: 1,
            src: e.icons[1],
            class: "slider-icon",
            style: r({
              width: d[e.size] + "px",
              height: d[e.size] + "px"
            })
          }, null, 12, U)) : R("", !0)
        ], 36)
      ], 6)
    ]));
  }
}), q = (i, f) => {
  const s = i.__vccOpts || i;
  for (const [l, h] of f)
    s[l] = h;
  return s;
}, A = /* @__PURE__ */ q(j, [["__scopeId", "data-v-e1e73996"]]), G = function(i) {
  i.component("SliderVerify", A);
}, J = { install: G };
export {
  A as SliderVerify,
  J as default
};
