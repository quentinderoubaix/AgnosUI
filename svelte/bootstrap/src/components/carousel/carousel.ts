// context
import {getContext, setContext} from 'svelte';
import type {CarouselState} from './carousel.gen';

const contextInjectionKey = Symbol('carousel-api');

/**
 * Sets the Carousel State in the context.
 *
 * @param carouselState - The Accordion API to be set in the context.
 */
export function setCarouselStateContext(carouselState: CarouselState) {
	setContext(contextInjectionKey, carouselState);
}

/**
 * Retrieves the Carousel State from the Svelte context.
 *
 * @returns The Carousel State instance.
 */
export function getCarouselStateContext(): CarouselState {
	return getContext(contextInjectionKey);
}
