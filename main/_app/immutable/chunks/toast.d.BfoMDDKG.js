const t=`import type { Directive, PropsConfig, Widget } from '../../types';
import type { CommonAlertApi, CommonAlertDirectives, CommonAlertProps, CommonAlertState } from '../alert/common';
interface ToastExtraProps {
    /**
     * If \`true\` automatically hides the toast after the delay.
     *
     * @defaultValue \`true\`
     */
    autoHide: boolean;
    /**
     * Delay in milliseconds before hiding the toast.
     *
     * @defaultValue \`5000\`
     */
    delay: number;
}
interface ExtraDirectives {
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
export interface ToastState extends CommonAlertState, ToastExtraProps {
}
export interface ToastProps extends CommonAlertProps, ToastExtraProps {
}
export interface ToastApi extends CommonAlertApi {
}
export interface ToastDirectives extends CommonAlertDirectives, ExtraDirectives {
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
export {};
`;export{t as default};