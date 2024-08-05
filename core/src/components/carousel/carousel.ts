import {stateStores, writablesForProps} from '../../utils/stores';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '../../types';
import {browserDirective} from '../../utils/directive';
import type {EmblaCarouselType} from 'embla-carousel';
import EmblaCarousel from 'embla-carousel';
import {writable} from '@amadeus-it-group/tansu';

export interface CarouselProps {}

export interface CarouselState {
	/**
	 * is the carousel currently scrolling
	 */
	scrolling: boolean;
	/**
	 * slides in view
	 */
	slidesInView: number[];
	/**
	 * can carousel scroll to previous slide
	 */
	canScrollPrev: boolean;
	/**
	 * can carousel scroll to next slide
	 */
	canScrollNext: boolean;
	/**
	 * selected scroll snap
	 */
	selectedScrollSnap: number;
}

export interface CarouselApi {
	/**
	 * Scroll to the previous snap point if possible.
	 */
	scrollPrev: () => void;
	/**
	 * Scroll to the next snap point if possible.
	 */
	scrollNext: () => void;
	/**
	 * Scroll to a snap point by index
	 * @param index the snap point index
	 */
	scrollTo: (index: number) => void;
}

export interface CarouselDirectives {
	/**
	 * the embla directive
	 */
	emblaDirective: Directive;
}

export type CarouselWidget = Widget<CarouselProps, CarouselState, CarouselApi, object, CarouselDirectives>;

const defaultConfig: CarouselProps = {
	options: {},
};

/**
 * Retrieve a shallow copy of the default Carousel config
 * @returns the default Carousel config
 */
export function getCarouselDefaultConfig(): CarouselProps {
	return {...defaultConfig};
}

const configValidator: ConfigValidator<CarouselProps> = {};

/**
 * Create an CarouselWidget with given config props
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
export function createCarousel(config?: PropsConfig<CarouselWidget>): CarouselWidget {
	const [{...stateProps}, patch] = writablesForProps(defaultConfig, config, configValidator);
	let emblaApi: EmblaCarouselType | undefined;

	const scrolling$ = writable(false);
	const slidesInView$ = writable([] as number[]);
	const canScrollPrev$ = writable(false);
	const canScrollNext$ = writable(false);
	const selectedScrollSnap$ = writable(0);

	return {
		...stateStores({
			scrolling$,
			slidesInView$,
			canScrollNext$,
			canScrollPrev$,
			selectedScrollSnap$,
			...stateProps,
		}),
		patch,
		api: {
			scrollPrev: () => {
				emblaApi?.scrollPrev?.();
			},
			scrollNext: () => {
				emblaApi?.scrollNext?.();
			},
			scrollTo: (index: number) => {
				emblaApi?.scrollTo?.(index);
			},
		},
		directives: {
			emblaDirective: browserDirective((element: HTMLElement) => {
				// TODO throw an ugly ERROR
				emblaApi?.destroy();
				emblaApi = EmblaCarousel(element);
				emblaApi.on('scroll', () => {
					scrolling$.set(true);
				});
				emblaApi.on('settle', () => {
					scrolling$.set(false);
				});
				emblaApi.on('slidesInView', (api) => {
					slidesInView$.set(api.slidesInView());
				});
				emblaApi.on('select', (api) => {
					canScrollNext$.set(api.canScrollNext());
					canScrollPrev$.set(api.canScrollPrev());
					selectedScrollSnap$.set(api.selectedScrollSnap());
				});
				canScrollNext$.set(emblaApi.canScrollNext());
				canScrollPrev$.set(emblaApi.canScrollPrev());
				return {
					destroy: () => {
						emblaApi?.destroy();
						emblaApi = undefined;
					},
				};
			}),
		},
		actions: {},
	};
}
