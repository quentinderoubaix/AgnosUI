const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const pagination = require("@agnos-ui/core/components/pagination");
Object.keys(pagination).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => pagination[k]
  });
});
`;export{e as default};