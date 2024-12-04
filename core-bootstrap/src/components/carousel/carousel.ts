import type {Directive, PropsConfig, Widget, WidgetFactory} from '@agnos-ui/core/types';
import type {CarouselProps as CoreProps, CarouselState} from '@agnos-ui/core/components/carousel';
import {createCarousel as createCoreCarousel} from '@agnos-ui/core/components/carousel';

export * from '@agnos-ui/core/components/carousel';

/**
 * Represents the properties for the carousel component.
 */
export interface CarouselProps extends Omit<CoreProps, 'align' | 'axis' | 'container' | 'containScroll' | 'plugins'> {}

/**
 * Represents the API for a carousel component.
 */
export interface CarouselApi {
	/**
	 * Select previous slide.
	 */
	prev: () => void;
	/**
	 * Select next slide.
	 */
	next: () => void;
	/**
	 * Select slide
	 * @param index the snap point index
	 * @param jump scroll instantly
	 */
	select: (index: number, jump?: boolean) => void;
}

/**
 * Represents the directives for a carousel component.
 */
export interface CarouselDirectives {
	/**
	 * TODO
	 */
	carouselDirective: Directive;
}
/**
 * Represents a carousel widget with specific properties, state, API, and directives.
 */
export type CarouselWidget = Widget<CarouselProps, CarouselState, CarouselApi, CarouselDirectives>;

const defaultConfigCarousel: CarouselProps = {
	direction: 'ltr',
	dragFree: false,
	dragThreshold: 10,
	duration: 25,
	inViewThreshold: 0,
	loop: false,
	skipSnaps: false,
};

/**
 * Retrieve a shallow copy of the default Carousel config
 * @returns the default Carousel config
 */
export function getCarouselDefaultConfig(): CarouselProps {
	return {
		...defaultConfigCarousel,
	};
}

/**
 * Create a Carousel with given config props
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
export const createCarousel: WidgetFactory<CarouselWidget> = (config?: PropsConfig<CarouselProps>) => {
	const coreWidget = createCoreCarousel({
		...(config ?? {}),
		props: {
			...(config?.props ?? {}),
			container: '.carousel-container',
		},
	});
	return {
		stores: coreWidget.stores,
		state$: coreWidget.state$,
		patch: coreWidget.patch,
		api: {
			prev: coreWidget.api.scrollPrev,
			next: coreWidget.api.scrollNext,
			select: coreWidget.api.scrollTo,
		},
		directives: {
			carouselDirective: coreWidget.directives.emblaDirective,
		},
	};
};
