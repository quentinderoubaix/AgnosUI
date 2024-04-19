const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const generated_config = require("./generated/config.cjs");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const rating = require("@agnos-ui/core-bootstrap/components/rating");
require("@agnos-ui/react-headless/components/rating");
const createRating = rating.createRating;
function Star({ star, state, directive: directive$1 }) {
  const arg = { index: star.index };
  return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "visually-hidden", children: [
      "(",
      star.index < state.visibleRating ? "*" : " ",
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { ...directive.useDirective(directive$1, arg), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotStar, props: star }) })
  ] }, star.index);
}
function Rating(props) {
  const [state, widget] = generated_config.useWidgetWithConfig(createRating, props, "rating");
  const {
    directives: { containerDirective, starDirective }
  } = widget;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.useClassDirective("d-inline-flex"), containerDirective]), children: state.stars.map((star) => /* @__PURE__ */ jsxRuntime.jsx(Star, { star, state, directive: starDirective }, star.index)) });
}
exports.Rating = Rating;
exports.createRating = createRating;
`;export{e as default};