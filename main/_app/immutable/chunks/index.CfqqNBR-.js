const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const accordion = require("./accordion-CxT3atuW.cjs");
const alert = require("./alert-LKMMYmg_.cjs");
const collapse = require("./collapse-BpPYsx89.cjs");
const modal = require("./modal-DpMvOtL2.cjs");
const pagination = require("./pagination-b4pKj3Kx.cjs");
const progressbar = require("./progressbar-JO1ey9mx.cjs");
const rating = require("./rating-eI8T0zvS.cjs");
const select = require("./select-XHUAqTDw.cjs");
const slider = require("./slider-BUQne5aJ.cjs");
const toast = require("./toast-E1DM85iZ.cjs");
const types = require("@agnos-ui/react-headless/types");
const slot = require("@agnos-ui/react-headless/slot");
const config = require("@agnos-ui/react-headless/config");
const generated_config = require("./generated/config.cjs");
const widget = require("@agnos-ui/react-headless/utils/widget");
const stores = require("@agnos-ui/react-headless/utils/stores");
const portal = require("@agnos-ui/react-headless/utils/portal");
const directive = require("@agnos-ui/react-headless/utils/directive");
const writables = require("@agnos-ui/react-headless/utils/writables");
const siblingsInert = require("@agnos-ui/react-headless/services/siblingsInert");
const resizeObserver = require("@agnos-ui/react-headless/services/resizeObserver");
const portal$1 = require("@agnos-ui/react-headless/services/portal");
const navManager = require("@agnos-ui/react-headless/services/navManager");
const matchMedia = require("@agnos-ui/react-headless/services/matchMedia");
const intersection = require("@agnos-ui/react-headless/services/intersection");
const hash = require("@agnos-ui/react-headless/services/hash");
const focustrack = require("@agnos-ui/react-headless/services/focustrack");
const floatingUI = require("@agnos-ui/react-headless/services/floatingUI");
const extendWidget = require("@agnos-ui/react-headless/services/extendWidget");
const simpleClassTransition = require("@agnos-ui/react-headless/services/transitions/simpleClassTransition");
const cssTransitions = require("@agnos-ui/react-headless/services/transitions/cssTransitions");
const collapse$1 = require("@agnos-ui/react-headless/services/transitions/collapse");
const baseTransitions = require("@agnos-ui/react-headless/services/transitions/baseTransitions");
const transitions = require("@agnos-ui/core-bootstrap/services/transitions");
exports.Accordion = accordion.Accordion;
exports.AccordionItem = accordion.AccordionItem;
exports.AccordionItemDefaultSlotStructure = accordion.AccordionItemDefaultSlotStructure;
exports.createAccordion = accordion.export_createAccordion;
exports.createAccordionItem = accordion.export_createAccordionItem;
exports.factoryCreateAccordion = accordion.export_factoryCreateAccordion;
exports.getAccordionDefaultConfig = accordion.export_getAccordionDefaultConfig;
exports.Alert = alert.Alert;
exports.AlertDefaultSlotStructure = alert.AlertDefaultSlotStructure;
exports.createAlert = alert.export_createAlert;
exports.getAlertDefaultConfig = alert.export_getAlertDefaultConfig;
exports.Collapse = collapse.Collapse;
exports.createCollapse = collapse.export_createCollapse;
exports.getCollapseDefaultConfig = collapse.export_getCollapseDefaultConfig;
exports.Modal = modal.Modal;
exports.ModalDefaultSlotHeader = modal.ModalDefaultSlotHeader;
exports.ModalDefaultSlotStructure = modal.ModalDefaultSlotStructure;
exports.createModal = modal.export_createModal;
exports.getModalDefaultConfig = modal.export_getModalDefaultConfig;
exports.modalCloseButtonClick = modal.export_modalCloseButtonClick;
exports.modalOutsideClick = modal.export_modalOutsideClick;
exports.openModal = modal.openModal;
exports.NavButton = pagination.NavButton;
exports.PageItem = pagination.PageItem;
exports.Pagination = pagination.Pagination;
exports.PaginationDefaultSlotPages = pagination.PaginationDefaultSlotPages;
exports.PaginationDefaultSlotStructure = pagination.PaginationDefaultSlotStructure;
exports.createPagination = pagination.export_createPagination;
exports.getPaginationDefaultConfig = pagination.export_getPaginationDefaultConfig;
exports.Progressbar = progressbar.Progressbar;
exports.ProgressbarDefaultSlotStructure = progressbar.ProgressbarDefaultSlotStructure;
exports.createProgressbar = progressbar.export_createProgressbar;
exports.getProgressbarDefaultConfig = progressbar.export_getProgressbarDefaultConfig;
exports.Rating = rating.Rating;
exports.createRating = rating.export_createRating;
exports.getRatingDefaultConfig = rating.export_getRatingDefaultConfig;
exports.Select = select.Select;
exports.createSelect = select.export_createSelect;
exports.getSelectDefaultConfig = select.export_getSelectDefaultConfig;
exports.Slider = slider.Slider;
exports.SliderDefaultSlotHandle = slider.SliderDefaultSlotHandle;
exports.SliderDefaultSlotStructure = slider.SliderDefaultSlotStructure;
exports.createSlider = slider.export_createSlider;
exports.getSliderDefaultConfig = slider.export_getSliderDefaultConfig;
exports.Toast = toast.Toast;
exports.ToastDefaultSlotStructure = toast.ToastDefaultSlotStructure;
exports.createToast = toast.export_createToast;
exports.getToastDefaultConfig = toast.export_getToastDefaultConfig;
exports.WidgetsDefaultConfig = generated_config.WidgetsDefaultConfig;
exports.useWidgetContext = generated_config.useWidgetContext;
exports.useWidgetWithConfig = generated_config.useWidgetWithConfig;
exports.widgetsConfigContext = generated_config.widgetsConfigContext;
Object.keys(types).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => types[k]
  });
});
Object.keys(slot).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => slot[k]
  });
});
Object.keys(config).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => config[k]
  });
});
Object.keys(widget).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => widget[k]
  });
});
Object.keys(stores).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => stores[k]
  });
});
Object.keys(portal).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => portal[k]
  });
});
Object.keys(directive).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => directive[k]
  });
});
Object.keys(writables).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => writables[k]
  });
});
Object.keys(siblingsInert).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => siblingsInert[k]
  });
});
Object.keys(resizeObserver).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => resizeObserver[k]
  });
});
Object.keys(portal$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => portal$1[k]
  });
});
Object.keys(navManager).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => navManager[k]
  });
});
Object.keys(matchMedia).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => matchMedia[k]
  });
});
Object.keys(intersection).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => intersection[k]
  });
});
Object.keys(hash).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => hash[k]
  });
});
Object.keys(focustrack).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => focustrack[k]
  });
});
Object.keys(floatingUI).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => floatingUI[k]
  });
});
Object.keys(extendWidget).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => extendWidget[k]
  });
});
Object.keys(simpleClassTransition).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => simpleClassTransition[k]
  });
});
Object.keys(cssTransitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => cssTransitions[k]
  });
});
Object.keys(collapse$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => collapse$1[k]
  });
});
Object.keys(baseTransitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => baseTransitions[k]
  });
});
Object.keys(transitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => transitions[k]
  });
});
`;export{e as default};