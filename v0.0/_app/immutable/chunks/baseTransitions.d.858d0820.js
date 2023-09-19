const n=`import type { PropsConfig } from '../services';
import type { Directive, Widget } from '../types';
/**
 * Function that implements a transition.
 */
export type TransitionFn = (
/**
 * Element on which the transition should be applied.
 */
element: HTMLElement, 
/**
 * Whether the element should be shown or hidden.
 */
direction: 'show' | 'hide', 
/**
 * Whether the transition should be animated.
 */
animation: boolean, 
/**
 * Signal allowing to stop the transition while running.
 */
signal: AbortSignal, 
/**
 * Context of the current transition. It is reused between calls if the previous transition was stopped while running on the same element.
 */
context: object) => Promise<void>;
export interface TransitionProps {
    /**
     * Transition to be called.
     */
    transition: TransitionFn;
    /**
     * Whether the element should be visible when the transition is completed.
     */
    visible: boolean;
    /**
     * Whether the transition should be animated.
     */
    animation: boolean;
    /**
     * If the element is initially visible, whether the element should be animated when first displayed.
     */
    animationOnInit: boolean;
    /**
     * Whether initialization is finished. It determines which setting between {@link TransitionProps.animation}
     * and {@link TransitionProps.animationOnInit} is used to enable or disable animations.
     * @remarks
     * If it is \`true\`, initialization is considered finished, and {@link TransitionProps.animationOnInit} is no longer used.
     * Otherwise, initialization is considered unfinished and {@link TransitionProps.animationOnInit} is used instead of {@link TransitionProps.animation}.
     * If it is \`null\`, it will be set to \`true\` automatically when the directive is called with a DOM element.
     * If it is \`false\`, it will not be updated automatically.
     */
    initDone: boolean | null;
    /**
     * Function to be called when the transition is completed and the element is visible.
     */
    onShown: () => void;
    /**
     * Function to be called when the transition is completed and the element is not visible.
     */
    onHidden: () => void;
    /**
     * Function to be called when the visible property changes.
     *
     * @param visible - new value of the visible propery
     */
    onVisibleChange: (visible: boolean) => void;
}
/**
 * Transition state.
 */
export interface TransitionState {
    /**
     * Whether the element is visible or will be visible when the transition is completed.
     */
    visible: boolean;
    /**
     * Whether the element to be animated is present in the DOM.
     */
    elementPresent: boolean;
    /**
     * Reference to the DOM element.
     */
    element: HTMLElement | null;
    /**
     * Whether a transition is currently running.
     */
    transitioning: boolean;
    /**
     * Equals: {@link TransitionState.visible | visible} && ! {@link TransitionState.transitioning | transitioning}
     */
    shown: boolean;
    /**
     * Equals: ! {@link TransitionState.visible | visible} && ! {@link TransitionState.transitioning | transitioning}
     */
    hidden: boolean;
}
export interface TransitionApi {
    /**
     * Runs the transition to show the element. It is equivalent to {@link TransitionApi.toggle | toggle} with true as the first parameter.
     *
     * @param animation - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animation | animation } property is used.
     *
     * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
     * already running, the promise never completes.
     */
    show: (animation?: boolean) => Promise<void>;
    /**
     * Runs the transition to hide the element. It is equivalent to {@link TransitionApi.toggle | toggle} with false as the first parameter.
     *
     * @param animation - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animation | animation } property is used.
     *
     * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
     * already running, the promise never completes.
     */
    hide: (animation?: boolean) => Promise<void>;
    /**
     * Runs the transition to show or hide the element depending on the first parameter.
     *
     * @param visible - whether the element should be made visible or not. If the parameter is not defined, the opposite of the current {@link TransitionProps.visible | visible } property is used.
     * @param animation - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animation | animation } property is used.
     *
     * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
     * already running, the promise never completes.
     */
    toggle: (visible?: boolean, animation?: boolean) => Promise<void>;
}
export interface TransitionDirectives {
    /**
     * the transition directive
     */
    directive: Directive<void | Partial<TransitionProps>>;
}
export type TransitionWidget = Widget<TransitionProps, TransitionState, TransitionApi, object, TransitionDirectives>;
export declare const noAnimation: TransitionFn;
export declare const createTransition: (config?: PropsConfig<TransitionProps>) => TransitionWidget;
`;export{n as default};
