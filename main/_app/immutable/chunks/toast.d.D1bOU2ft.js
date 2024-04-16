const t=`import type { ExtendWidgetAdaptSlotWidgetProps, ExtendWidgetInterfaces } from '../../services/extendWidget';
import type { Directive, PropsConfig, Widget, WidgetSlotContext } from '../../types';
import type { CommonAlertApi, CommonAlertDirectives, CommonAlertProps, CommonAlertState } from '../alert/common';
export type ToastContext = WidgetSlotContext<ToastWidget>;
export interface ToastExtraProps {
    /**
     * If \`true\` automatically hides the toast after the delay.
     */
    autoHide: boolean;
    /**
     * Delay in milliseconds before hiding the toast.
     */
    delay: number;
}
export interface ExtraDirectives {
    /**
     * Directive that handles the autohide of the toast component
     */
    autoHideDirective: Directive;
    /**
     * Directive that adds all the necessary attributes to the body
     */
    bodyDirective: Directive;
    /**
     * Directive that adds all the necessary attributes to the close button depending on the presence of the header
     */
    closeButtonDirective: Directive;
}
export interface ToastState extends ExtendWidgetAdaptSlotWidgetProps<CommonAlertState, ToastExtraProps, ExtraDirectives> {
}
export interface ToastProps extends ExtendWidgetAdaptSlotWidgetProps<CommonAlertProps, ToastExtraProps, ExtraDirectives> {
}
export interface ToastApi extends CommonAlertApi {
}
export interface ToastDirectives extends ExtendWidgetInterfaces<CommonAlertDirectives, ExtraDirectives> {
}
export type ToastWidget = Widget<ToastProps, ToastState, ToastApi, object, ToastDirectives>;
/**
 * Retrieve a shallow copy of the default toast config
 * @returns the default toast config
 */
export declare function getToastDefaultConfig(): ToastProps;
/**
 * Create a ToastWidget with given config props
 * @param config - an optional toast config
 * @returns a ToastWidget
 */
export declare function createToast(config?: PropsConfig<ToastProps>): ToastWidget;
`;export{t as default};