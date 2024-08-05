import type {ConfigValidator, Directive, PropsConfig, Widget, WidgetFactory} from '@agnos-ui/core/types';
import {
	type CarouselProps as CoreProps,
	type CarouselState as CoreState,
	type CarouselApi,
	type CarouselDirectives as CoreDirectives,
	createEmblaCarousel,
} from '@agnos-ui/core/components/carousel';
import {typeArray, typeBoolean, typeFunction, typeNumber, typeString} from '@agnos-ui/core/utils/writables';
import {stateStores, writablesForProps} from '@agnos-ui/core/utils/stores';
import {computed, type ReadableSignal} from '@amadeus-it-group/tansu';
import {createAttributesDirective, mergeDirectives} from '@agnos-ui/core/utils/directive';

export * from '@agnos-ui/core/components/carousel';

interface ExtraCarouselPropsState {
	/**
	 * If `true`, 'previous' and 'next' navigation arrows will be visible on the slide.
	 */
	showNavigationArrows: boolean;
	/**
	 * If `true`, navigation indicators at the bottom of the slide will be visible.
	 */
	showNavigationIndicators: boolean;
	/**
	 * Include announcer
	 */
	includeAnnouncer: boolean;
}

interface CarouselExtraProps extends ExtraCarouselPropsState {
	/**
	 * Aria label for previous button
	 */
	ariaPrevLabel: string;
	/**
	 * Aria label for next button
	 */
	ariaNextLabel: string;
	/**
	 * Aria label for navigation indicators
	 */
	ariaIndicatorLabel: (index: number) => string;
	/**
	 * Function to announce the current item with an aria live region
	 */
	ariaLiveAnnounceFn: (index: number) => string;
}

/**
 * Represents the properties for the carousel component.
 */
export interface CarouselProps extends Omit<CoreProps, 'align' | 'axis' | 'container' | 'containScroll' | 'direction'>, CarouselExtraProps {}

/**
 * Represents the state of a carousel component.
 */
export interface CarouselState extends CoreState, ExtraCarouselPropsState {
	/**
	 * Aria live attribute for announcer
	 */
	ariaLiveAnnouncement: string;
	/**
	 * The selected slide id
	 */
	selectedSlideId: string;
}

/**
 * Represents the directives for a carousel component.
 */
export interface CarouselDirectives extends CoreDirectives {
	/**
	 * A directive to be applied to a navigation button allowing to slide to the previous slide.
	 */
	slidePrev: Directive;
	/**
	 * A directive to be applied to a navigation button allowing to slide to the next slide.
	 */
	slideNext: Directive;
	/**
	 * A directive to be applied to a navigation indicator allowing to slide to the corresponding slide.
	 */
	tabIndicator: Directive<{index: number; id: string}>;
}

/**
 * Represents a carousel widget with specific properties, state, API, and directives.
 */
export type CarouselWidget = Widget<CarouselProps, CarouselState, CarouselApi, CarouselDirectives>;

const defaultConfig: CarouselProps = {
	dragFree: false,
	dragThreshold: 10,
	duration: 25,
	inViewThreshold: 0,
	loop: false,
	plugins: [],
	skipSnaps: false,
	showNavigationArrows: true,
	showNavigationIndicators: true,
	ariaPrevLabel: 'Select previous slide',
	ariaNextLabel: 'Select next slide',
	ariaIndicatorLabel: (index: number) => `Select slide ${index + 1}`,
	ariaLiveAnnounceFn: (index: number) => `Slide ${index + 1}`,
	includeAnnouncer: true,
};

const configValidator: ConfigValidator<CarouselProps> = {
	dragFree: typeBoolean,
	dragThreshold: typeNumber,
	duration: typeNumber,
	inViewThreshold: typeNumber,
	loop: typeBoolean,
	plugins: typeArray,
	skipSnaps: typeBoolean,
	showNavigationArrows: typeBoolean,
	showNavigationIndicators: typeBoolean,
	ariaPrevLabel: typeString,
	ariaNextLabel: typeString,
	ariaIndicatorLabel: typeFunction,
	ariaLiveAnnounceFn: typeFunction,
	includeAnnouncer: typeBoolean,
};

/**
 * Retrieve a shallow copy of the default Carousel config
 * @returns the default Carousel config
 */
export function getCarouselDefaultConfig(): CarouselProps {
	return {
		...defaultConfig,
	};
}

/**
 * Create a Carousel with given config props
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
export const createCarousel: WidgetFactory<CarouselWidget> = (config?: PropsConfig<CarouselProps>) => {
	const [
		{
			dragFree$,
			dragThreshold$,
			duration$,
			inViewThreshold$,
			loop$,
			skipSnaps$,
			plugins$,
			ariaPrevLabel$,
			ariaNextLabel$,
			ariaIndicatorLabel$,
			ariaLiveAnnounceFn$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultConfig, config, configValidator);

	const emblaOptions$ = computed(() => ({
		dragFree: dragFree$(),
		dragThreshold: dragThreshold$(),
		duration: duration$(),
		inViewThreshold: inViewThreshold$(),
		loop: loop$(),
		skipSnaps: skipSnaps$(),
		container: '.au-carousel-container',
	}));

	const emblaCarousel = createEmblaCarousel(emblaOptions$, plugins$);

	const ariaLiveAnnouncement$ = computed(() => ariaLiveAnnounceFn$()(emblaCarousel.stores.selectedScrollSnap$()));
	const selectedSlideId$ = computed(() => emblaCarousel.stores.slideNodes$()[emblaCarousel.stores.selectedScrollSnap$()]?.id);

	return {
		...stateStores({
			...emblaCarousel.stores,
			...stateProps,
			ariaLiveAnnouncement$,
			selectedSlideId$,
		}),
		patch,
		api: emblaCarousel.api,
		directives: {
			carouselDirective: mergeDirectives(
				emblaCarousel.directive,
				createAttributesDirective(() => ({
					attributes: {
						role: 'group',
						'aria-activedescendant': selectedSlideId$,
					},
				})),
			),
			slidePrev: createAttributesDirective(() => ({
				attributes: {
					'aria-label': ariaPrevLabel$,
				},
				events: {
					click: () => emblaCarousel.api.scrollPrev(),
					pointerdown: (e) => e.preventDefault(),
				},
			})),
			slideNext: createAttributesDirective(() => ({
				attributes: {
					'aria-label': ariaNextLabel$,
				},
				events: {
					click: () => emblaCarousel.api.scrollNext(),
					pointerdown: (e) => e.preventDefault(),
				},
			})),
			tabIndicator: createAttributesDirective((slide$: ReadableSignal<{id: string; index: number}>) => ({
				events: {
					click: () => emblaCarousel.api.scrollTo(slide$().index),
					pointerdown: (e) => e.preventDefault(),
				},
				attributes: {
					'aria-label': computed(() => ariaIndicatorLabel$()(slide$().index)),
					'aria-selected': computed(() => (slide$().index === emblaCarousel.stores.selectedScrollSnap$() ? 'true' : undefined)),
					'aria-controls': computed(() => slide$().id),
					role: 'tab',
					['data-bs-target']: '',
				},
				classNames: {
					active: computed(() => slide$().index === emblaCarousel.stores.selectedScrollSnap$()),
				},
			})),
		},
	};
};
