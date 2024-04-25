const e=`import type { SliderActions, SliderApi, SliderDirectives, SliderHandle, SliderProps as CoreProps, SliderState as CoreState } from '@agnos-ui/core/components/slider';
import { type ExtendWidgetAdaptSlotWidgetProps } from '@agnos-ui/core/services/extendWidget';
import type { SlotContent, Widget, WidgetFactory, WidgetSlotContext } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/components/slider';
export type SliderContext = WidgetSlotContext<SliderWidget>;
export type SliderSlotLabelContext = SliderContext & {
    value: number;
};
export type SliderSlotHandleContext = SliderContext & {
    item: SliderHandle;
};
interface SliderExtraProps {
    /**
     * Slot to change the default display of the slider
     */
    slotStructure: SlotContent<SliderContext>;
    /**
     * Slot to change the default labels of the slider
     */
    slotLabel: SlotContent<SliderSlotLabelContext>;
    /**
     *  Slot to change the handlers
     */
    slotHandle: SlotContent<SliderSlotHandleContext>;
}
export interface SliderState extends ExtendWidgetAdaptSlotWidgetProps<CoreState, SliderExtraProps, object> {
}
export interface SliderProps extends ExtendWidgetAdaptSlotWidgetProps<CoreProps, SliderExtraProps, object> {
}
export type SliderWidget = Widget<SliderProps, SliderState, SliderApi, SliderActions, SliderDirectives>;
/**
 * Retrieve a shallow copy of the default Slider config
 * @returns the default Slider config
 */
export declare function getSliderDefaultConfig(): SliderProps;
/**
 * Create a Slider with given config props
 * @param config - an optional progressbar config
 * @returns a SliderWidget
 */
export declare const createSlider: WidgetFactory<SliderWidget>;
`;export{e as default};
