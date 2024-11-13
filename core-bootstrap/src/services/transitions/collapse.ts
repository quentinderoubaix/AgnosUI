import type {TransitionFn} from '@agnos-ui/core/services/transitions/baseTransitions';

import {isBrowserHTMLElement} from '@agnos-ui/core/utils/directive';
import {addClasses, reflow, removeClasses} from '@agnos-ui/core/utils/dom';
import {createCSSTransition} from '@agnos-ui/core/services/transitions/cssTransitions';

/**
 * Represents the context for a collapsible element.
 */
export interface CollapseContext {
	/**
	 * the maximum size of the collapseable content.
	 */
	maxSize?: string;
	/**
	 * the minimum size of the collapseable content
	 */
	minSize?: string;
}

/**
 * Configuration options for the collapse transition.
 */
export interface CollapseConfig {
	/**
	 * the direction in which the collapsing is performed
	 */
	dimension?: 'width' | 'height';
	/**
	 * the list of classes to add to the collapsable element when shown
	 */
	showClasses?: string[];
	/**
	 * the list of classes to add to the collapsable element when collapsed
	 */
	hideClasses?: string[];
	/**
	 * the list of classes to add to the collapsable element while transitioning
	 */
	animationPendingClasses?: string[];
}

/**
 * Create a collapse transition.
 *
 * The transition attaches / removes classes during the different states of the collapse transition.
 * It also updates the dimension value when reaching a non-pending state.
 *
 * @param config - the collapse config
 * @param config.dimension - the dimension, `height` or `width`, on which the collapse applies
 * @param config.showClasses - the classes to attach when the element is fully visible
 * @param config.hideClasses - the classes to attach when the element is fully collapsed
 * @param config.animationPendingClasses - the classes to attach when the transition is pending
 * @returns the collapse transition
 */
export const createCollapseTransition = ({
	dimension = 'height',
	showClasses,
	hideClasses,
	animationPendingClasses,
}: CollapseConfig = {}): TransitionFn =>
	createCSSTransition((element, direction, animated, context: CollapseContext) => {
		if (animated && isBrowserHTMLElement(element)) {
			let {maxSize, minSize} = context;

			if (!maxSize) {
				// measure the element in its show state
				removeClasses(element, animationPendingClasses);
				removeClasses(element, hideClasses);
				addClasses(element, showClasses);
				maxSize = element.getBoundingClientRect()[dimension] + 'px';
				context.maxSize = maxSize;
			}

			if (!minSize) {
				// measure the element in its hide state
				removeClasses(element, animationPendingClasses);
				removeClasses(element, showClasses);
				addClasses(element, hideClasses);
				minSize = element.getBoundingClientRect()[dimension] + 'px';
				context.minSize = minSize;
			}

			removeClasses(element, showClasses);
			removeClasses(element, hideClasses);

			const values = direction === 'show' ? [minSize, maxSize] : [maxSize, minSize];
			element.style[dimension] = values[0];
			reflow(element); // explicitly applies the initial state
			addClasses(element, animationPendingClasses);
			reflow(element);
			element.style[dimension] = values[1];
		} else {
			removeClasses(element, direction === 'show' ? hideClasses : showClasses);
		}
		return () => {
			removeClasses(element, animationPendingClasses);
			addClasses(element, direction === 'show' ? showClasses : hideClasses);
			element.style[dimension] = '';
		};
	});

const verticalConfig: CollapseConfig = {
	dimension: 'height',
	hideClasses: ['collapse'],
	showClasses: ['collapse', 'show'],
	animationPendingClasses: ['collapsing'],
};
const horizontalConfig: CollapseConfig = {
	dimension: 'width',
	hideClasses: ['collapse', 'collapse-horizontal'],
	showClasses: ['collapse', 'collapse-horizontal', 'show'],
	animationPendingClasses: ['collapsing', 'collapse-horizontal'],
};

/**
 * A transition function that handles vertical collapse animations.
 *
 * This function is created using the `createCollapseTransition` utility with
 * a vertical configuration. It is intended to be used for animating the
 * collapsing and expanding of vertical elements.
 */
export const collapseVerticalTransition: TransitionFn = createCollapseTransition(verticalConfig);
/**
 * A transition function for collapsing elements horizontally.
 *
 * This function is created using the `createCollapseTransition` utility
 * and is configured with `horizontalConfig`.
 */
export const collapseHorizontalTransition: TransitionFn = createCollapseTransition(horizontalConfig);
