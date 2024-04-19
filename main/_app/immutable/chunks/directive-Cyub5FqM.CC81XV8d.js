const e=`import { bindDirective, classDirective, attributesData, mergeDirectives } from "@agnos-ui/core/utils/directive";
import { writable } from "@amadeus-it-group/tansu";
import { BROWSER } from "esm-env";
import { useMemo, useRef, useCallback } from "react";
const useClassDirective = (className) => {
  const { directive, className$ } = useMemo(() => {
    const className$2 = writable("");
    return { directive: bindDirective(classDirective, className$2), className$: className$2 };
  }, []);
  className$.set(className);
  return directive;
};
const attributesMap = /* @__PURE__ */ new Map([
  ["tabindex", "tabIndex"],
  ["for", "htmlFor"]
]);
const booleanAttributes = /* @__PURE__ */ new Set([
  "inert",
  "allowFullScreen",
  "async",
  "autoPlay",
  "controls",
  "default",
  "defer",
  "disabled",
  "disablePictureInPicture",
  "disableRemotePlayback",
  "formNoValidate",
  "hidden",
  "loop",
  "noModule",
  "noValidate",
  "open",
  "playsInline",
  "readOnly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  "itemScope"
]);
function directiveAttributes(...directives) {
  const reactAttributes = {};
  const { attributes, style, classNames } = attributesData(...directives);
  for (const [name, value] of Object.entries(attributes)) {
    reactAttributes[attributesMap.get(name) ?? name] = booleanAttributes.has(name) ? true : value;
  }
  if (classNames == null ? void 0 : classNames.length) {
    reactAttributes.className = classNames.join(" ");
  }
  if (Object.keys(style).length) {
    reactAttributes.style = style;
  }
  return reactAttributes;
}
const ssrAttributes = BROWSER ? () => ({}) : directiveAttributes;
const useDirective = BROWSER ? (directive, args) => {
  var _a, _b;
  const instance = useRef();
  const propsRef = useRef();
  const ref = useCallback(
    (element) => {
      var _a2, _b2;
      (_b2 = (_a2 = instance.current) == null ? void 0 : _a2.destroy) == null ? void 0 : _b2.call(_a2);
      instance.current = void 0;
      if (element) {
        instance.current = directive(element, propsRef.current);
      }
    },
    [directive]
  );
  propsRef.current = args;
  (_b = (_a = instance.current) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a, args);
  return { ref };
} : (directive, args) => ssrAttributes([directive, args]);
const useDirectives = (directives, args) => {
  const mergedDirectives = useMemo(() => mergeDirectives(...directives), directives);
  return useDirective(mergedDirectives, args);
};
export {
  useDirective as a,
  useDirectives as b,
  directiveAttributes as d,
  ssrAttributes as s,
  useClassDirective as u
};
`;export{e as default};