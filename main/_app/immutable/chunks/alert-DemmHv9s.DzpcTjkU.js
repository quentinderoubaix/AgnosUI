const t=`import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useWidgetWithConfig } from "./generated/config.js";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import { forwardRef, useImperativeHandle } from "react";
import { createAlert as createAlert$1 } from "@agnos-ui/core-bootstrap/components/alert";
const createAlert = createAlert$1;
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { className: "alert-body", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }),
  slotContext.state.dismissible ? /* @__PURE__ */ jsx("button", { type: "button", className: "btn-close", onClick: slotContext.widget.api.close, "aria-label": slotContext.state.ariaCloseButtonLabel }) : null
] });
const defaultConfig = {
  slotStructure: DefaultSlotStructure
};
const Alert = forwardRef(function Alert2(props, ref) {
  const [state, widget] = useWidgetWithConfig(createAlert, props, "alert", { ...defaultConfig, slotDefault: props.children });
  const refTransition = useDirective(widget.directives.transitionDirective);
  useImperativeHandle(ref, () => widget.api, []);
  const slotContext = {
    state,
    widget
  };
  return /* @__PURE__ */ jsx(Fragment, { children: state.hidden ? null : /* @__PURE__ */ jsx(
    "div",
    {
      className: \`au-alert alert alert-\${state.type} \${state.className} \${state.dismissible ? "alert-dismissible" : ""}\`,
      role: "alert",
      ...refTransition,
      children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStructure, props: slotContext })
    }
  ) });
});
export {
  Alert as A,
  createAlert as c
};
`;export{t as default};