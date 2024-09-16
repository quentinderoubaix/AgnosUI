const n=`import type { TransitionFn } from './baseTransitions';
export interface SimpleClassTransitionConfig {
    /**
     * a list of classes to add to the collapsable element while transitioning
     */
    animationPendingClasses?: string[];
    /**
     * a list of classes to add to the collapsable element while transitioning towards the show state
     */
    animationPendingShowClasses?: string[];
    /**
     * a list of classes to add to the collapsable element while transitioning towards the hide state
     */
    animationPendingHideClasses?: string[];
    /**
     * the list of classes to add to the element when shown
     */
    showClasses?: string[];
    /**
     * the list of classes to add to the element when hidden
     */
    hideClasses?: string[];
}
export interface SimpleClassTransitionContext {
    /**
     * \`true\` is the transition has started
     */
    started?: boolean;
}
/**
 * Create a transition based on css classes to attach.
 *
 * The config includes the classes that will be attached / removed depending on the transition state.
 * \`animationPendingClasses\` are the classes attached when the transition is in a pending state
 * \`animationPendingShowClasses\` and \`animationPendingHideClasses\` are attached when transitionning towards one direction
 * \`showClasses\` and \`hideClasses\` are attached when the transition has reached the show or hide state respectively
 *
 * @param config - the transition config
 * @returns the simple class transition
 */
export declare const createSimpleClassTransition: (config: SimpleClassTransitionConfig) => TransitionFn;
`;export{n as default};