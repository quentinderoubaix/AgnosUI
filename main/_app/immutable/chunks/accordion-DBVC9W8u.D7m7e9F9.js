const n=`import { getAccordionDefaultConfig as getAccordionDefaultConfig$1, createAccordionItem as createAccordionItem$1, factoryCreateAccordion } from "@agnos-ui/core/components/accordion";
import { c as collapseVerticalTransition } from "./collapse-CVjUhnIz.js";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
const defaultConfigExtraProps = {
  itemStructure: void 0
};
const defaultConfigItemExtraProps = {
  structure: void 0,
  children: void 0,
  header: void 0
};
const defaultPropsWithoutOverride = {
  ...getAccordionDefaultConfig$1(),
  ...defaultConfigExtraProps
};
const accordionItemDefaultConfig = {
  animated: false,
  transition: collapseVerticalTransition,
  destroyOnHide: false,
  onShown: () => {
  },
  onHidden: () => {
  },
  onVisibleChange: () => {
  },
  visible: false,
  disabled: false,
  id: "",
  headerClassName: "",
  buttonClassName: "",
  bodyContainerClassName: "",
  bodyClassName: "",
  headingTag: "",
  className: "",
  structure: void 0,
  children: void 0,
  header: void 0
};
const accordionItemProps = Object.keys(accordionItemDefaultConfig);
const createAccordionItem = extendWidgetProps(createAccordionItem$1, defaultConfigItemExtraProps);
const coreOverride = {
  itemTransition: collapseVerticalTransition
};
function getAccordionDefaultConfig() {
  return { ...defaultPropsWithoutOverride, ...coreOverride };
}
const createAccordion = factoryCreateAccordion(
  createAccordionItem,
  accordionItemProps,
  getAccordionDefaultConfig()
);
export {
  createAccordion as a,
  createAccordionItem as c,
  getAccordionDefaultConfig as g
};
`;export{n as default};