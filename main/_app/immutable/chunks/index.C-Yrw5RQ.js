const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const accordion = require("./accordion-D03Fo-V5.cjs");
const alert = require("./alert-B9JCvO-j.cjs");
const modal = require("./modal-BrIlqxN8.cjs");
const progressbar = require("./progressbar-I6Jvhy5T.cjs");
const toast = require("./toast-kMbwghA_.cjs");
const collapse = require("./collapse-sUYbZqEx.cjs");
const fade = require("./fade-CJ0jXGio.cjs");
const accordion$1 = require("@agnos-ui/core/components/accordion");
const alert$1 = require("@agnos-ui/core/components/alert");
const modal$1 = require("@agnos-ui/core/components/modal");
const pagination = require("@agnos-ui/core/components/pagination");
const progressbar$1 = require("@agnos-ui/core/components/progressbar");
const rating = require("@agnos-ui/core/components/rating");
const select = require("@agnos-ui/core/components/select");
const slider = require("@agnos-ui/core/components/slider");
const toast$1 = require("@agnos-ui/core/components/toast");
exports.createAccordion = accordion.createAccordion;
exports.getAccordionDefaultConfig = accordion.getAccordionDefaultConfig;
exports.createAlert = alert.createAlert;
exports.getAlertDefaultConfig = alert.getAlertDefaultConfig;
exports.createModal = modal.createModal;
exports.getModalDefaultConfig = modal.getModalDefaultConfig;
exports.createProgressbar = progressbar.createProgressbar;
exports.getProgressbarDefaultConfig = progressbar.getProgressbarDefaultConfig;
exports.createToast = toast.createToast;
exports.getToastDefaultConfig = toast.getToastDefaultConfig;
exports.collapseHorizontalTransition = collapse.collapseHorizontalTransition;
exports.collapseVerticalTransition = collapse.collapseVerticalTransition;
exports.fadeTransition = fade.fadeTransition;
Object.keys(accordion$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => accordion$1[k]
    });
});
Object.keys(alert$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => alert$1[k]
    });
});
Object.keys(modal$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => modal$1[k]
    });
});
Object.keys(pagination).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => pagination[k]
    });
});
Object.keys(progressbar$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => progressbar$1[k]
    });
});
Object.keys(rating).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => rating[k]
    });
});
Object.keys(select).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => select[k]
    });
});
Object.keys(slider).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => slider[k]
    });
});
Object.keys(toast$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => toast$1[k]
    });
});
`;export{e as default};
