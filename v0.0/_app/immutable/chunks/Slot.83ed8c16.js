const t=`import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Component } from 'react';
const slotWrapperCache = new WeakMap();
const slotWrapperFactory = (slotContent) => {
    const SlotWrapper = (props) => _jsx(_Fragment, { children: slotContent(props) });
    return SlotWrapper;
};
const slotWrapper = (slotContent) => {
    let res = slotWrapperCache.get(slotContent);
    if (!res) {
        res = slotWrapperFactory(slotContent);
        slotWrapperCache.set(slotContent, res);
    }
    return res;
};
/* eslint-disable-next-line @typescript-eslint/ban-types */
const isReactComponent = (item) => item.prototype instanceof Component;
export const Slot = ({ slotContent, props }) => {
    const isFunction = typeof slotContent === 'function';
    if (isFunction) {
        const SlotComponent = isReactComponent(slotContent) ? slotContent : slotWrapper(slotContent);
        return _jsx(SlotComponent, { ...props });
    }
    return _jsx(_Fragment, { children: slotContent });
};
`;export{t as default};
