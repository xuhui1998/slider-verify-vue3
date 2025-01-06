import { defineComponent as P, mergeModels as L, computed as X, useModel as I, ref as o, onMounted as W, onUnmounted as $, openBlock as x, createElementBlock as C, createElementVNode as f, normalizeClass as k, normalizeStyle as r, toDisplayString as F, createCommentVNode as R } from "vue";
const N = "data:image/svg+xml,%3csvg%20t='1735183612108'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='1450'%20width='200'%20height='200'%3e%3cpath%20d='M505.6%20121.6l396.8%20339.2c32%2025.6%2032%2070.4%200%2096l-396.8%20339.2c-25.6%2025.6-70.4%2019.2-89.6-6.4l0%200c-25.6-25.6-19.2-70.4%206.4-89.6L768%20512%20422.4%20217.6C396.8%20198.4%20390.4%20153.6%20416%20128l0%200C441.6%20102.4%20480%2096%20505.6%20121.6z'%20fill='%2332363999'%20p-id='1451'%3e%3c/path%3e%3cpath%20d='M204.8%20121.6l396.8%20339.2c32%2025.6%2032%2070.4%200%2096l-396.8%20339.2c-25.6%2025.6-70.4%2019.2-89.6-6.4l0%200c-25.6-25.6-19.2-70.4%206.4-89.6L460.8%20512%20115.2%20217.6C89.6%20198.4%2089.6%20153.6%20108.8%20128l0%200C134.4%20102.4%20172.8%2096%20204.8%20121.6z'%20fill='%2332363999'%20p-id='1452'%3e%3c/path%3e%3c/svg%3e", O = "data:image/svg+xml,%3csvg%20t='1735183685296'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='2434'%20width='200'%20height='200'%3e%3cpath%20d='M913.017%20237.02c-25.311-25.312-66.349-25.312-91.66%200l-412.475%20412.474-206.237-206.237c-25.312-25.312-66.35-25.312-91.661%200s-25.312%2066.35%200%2091.66l252.067%20252.067c0.729%200.73%201.439%201.402%202.134%202.029%2025.434%2023.257%2064.913%2022.585%2089.527-2.029l458.303-458.303c25.313-25.312%2025.313-66.35%200.001-91.661z'%20fill='%2332363999'%20p-id='2435'%3e%3c/path%3e%3c/svg%3e", U = { class: "slider-wrapper" }, j = ["src"], q = ["src"], A = /* @__PURE__ */ P({
  name: "SliderVerify",
  __name: "index",
  props: /* @__PURE__ */ L({
    size: { default: "medium" },
    width: {},
    sliderTip: { default: "请按住滑块拖动" },
    successTip: { default: "验证通过" },
    fillColor: { default: "#79ce8e" },
    sliderColor: { default: "#f2f2f2" },
    icons: { default: () => [N, O] }
  }, {
    modelValue: { default: !1, type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ L(["onSuccess", "onFail", "onDrag", "onDragEnd"], ["update:modelValue"]),
  setup(l, { expose: h, emit: c }) {
    const s = l, n = c, V = X(() => s.width ? typeof s.width == "number" ? `${s.width}px` : s.width : "100%"), i = I(l, "modelValue"), a = o(), g = o({
      borderRadius: "4px 0 0 4px"
    }), w = o(s.sliderTip), t = o(0), d = o(!1), z = o(0), E = o(0), M = {
      mini: 24,
      small: 28,
      medium: 32,
      large: 36
    }, u = {
      mini: 12,
      small: 13,
      medium: 14,
      large: 14
    }, v = (e) => {
      if (d.value) {
        n("onDrag");
        const p = e.clientX - z.value, b = E.value + p;
        if (a.value) {
          const B = a.value.getBoundingClientRect(), D = M[s.size], y = B.width - D, T = 0;
          b >= D ? g.value = { borderRadius: "4px" } : g.value = { borderRadius: "4px 0 0 4px" }, t.value >= y ? (t.value = y, i.value = !0, d.value = !1, w.value = s.successTip, n("onSuccess", !0)) : (i.value = !1, t.value = 0, n("onFail", !1)), t.value = Math.max(
            T,
            Math.min(y, b)
          );
        }
      }
    }, m = () => {
      d.value = !1, n("onDragEnd");
      const e = a.value.getBoundingClientRect();
      if (a.value) {
        const p = M[s.size];
        t.value < e.width - p && (t.value = 0);
      }
      document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", m);
    }, S = (e) => {
      i.value || (d.value = !0, z.value = e.clientX, E.value = t.value, document.addEventListener("mousemove", v), document.addEventListener("mouseup", m));
    }, _ = () => {
      t.value = 0, i.value = !1, w.value = s.sliderTip;
    };
    return W(() => {
      document.addEventListener("mousemove", v), document.addEventListener("mouseup", m);
    }), $(() => {
      document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", m);
    }), h({
      onReset: _,
      modelValue: i.value,
      sliderContainer: a
    }), (e, p) => (x(), C("div", U, [
      f("div", {
        ref_key: "sliderContainer",
        ref: a,
        class: k(["slider-container", `slider-container-${e.size}`]),
        style: r({ width: V.value, backgroundColor: e.sliderColor })
      }, [
        f("div", {
          class: "slider-fill",
          style: r({ width: t.value + "px", backgroundColor: e.fillColor })
        }, null, 4),
        f("div", {
          class: k(["slider-tips", { success: i.value }])
        }, F(w.value), 3),
        f("div", {
          class: "slider-thumb",
          style: r({ left: `${t.value}px`, ...g.value }),
          onMousedown: S
        }, [
          i.value ? R("", !0) : (x(), C("img", {
            key: 0,
            src: e.icons[0],
            class: "slider-icon",
            style: r({
              width: u[e.size] + "px",
              height: u[e.size] + "px"
            })
          }, null, 12, j)),
          i.value ? (x(), C("img", {
            key: 1,
            src: e.icons[1],
            class: "slider-icon",
            style: r({
              width: u[e.size] + "px",
              height: u[e.size] + "px"
            })
          }, null, 12, q)) : R("", !0)
        ], 36)
      ], 6)
    ]));
  }
}), G = (l, h) => {
  const c = l.__vccOpts || l;
  for (const [s, n] of h)
    c[s] = n;
  return c;
}, H = /* @__PURE__ */ G(A, [["__scopeId", "data-v-31802bc4"]]), J = function(l) {
  l.component("SliderVerify", H);
}, Q = { install: J };
export {
  H as SliderVerify,
  Q as default
};
