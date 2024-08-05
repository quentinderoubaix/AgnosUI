import {stateStores, writablesForProps} from '../../utils/stores';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '../../types';
import {bindDirective, browserDirective} from '../../utils/directive';
import type {EmblaCarouselType, EmblaPluginType, EmblaPluginsType} from 'embla-carousel';
import EmblaCarousel from 'embla-carousel';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import {createTypeEnum, typeArray, typeBoolean, typeNumber, typeStringOrNull} from '../../utils/writables';

/**
 * Represents the Embla carousel options
 */
interface EmblaOptions {
	/**
	 * Align the slides relative to the carousel viewport
	 * @defaultValue `'center'`
	 */
	align: 'start' | 'center' | 'end';
	/**
	 * Choose scroll axis between `x` and `y`
	 * @defaultValue `'x'`
	 */
	axis: 'x' | 'y';
	/**
	 * Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.
	 */
	container: string | null;
	/**
	 * Clear leading and trailing empty space that causes excessive scrolling
	 * @defaultValue `'trimSnaps'`
	 */
	containScroll: false | 'trimSnaps' | 'keepSnaps';
	/**
	 * Choose content direction between `ltr` and `rtl`
	 * @defaultValue `'ltr'`
	 */
	direction: 'ltr' | 'rtl';
	/**
	 * Enables momentum scrolling
	 * @defaultValue `false`
	 */
	dragFree: boolean;
	/**
	 * Drag threshold in pixels
	 * @defaultValue `10`
	 */
	dragThreshold: number;
	/**
	 * Set scroll duration when triggered by any of the API methods
	 * @defaultValue `25`
	 */
	duration: number;
	/**
	 * Intersetion Observer threshold applied to compute slidesInView
	 * @defaultValue `0`
	 */
	inViewThreshold: number;
	/**
	 * Enables infinite looping
	 * @defaultValue `false`
	 */
	loop: boolean;
	/**
	 * Allow the carousel to skip scroll snaps if it's dragged vigorously
	 * @defaultValue `false`
	 */
	skipSnaps: boolean;
}

/**
 * Represents the properties for the carousel component.
 */
export interface CarouselProps extends EmblaOptions {
	/**
	 * Plugins to extend the carousel with additional features
	 * @defaultValue `[]`
	 */
	plugins: EmblaPluginType[];
}

/**
 * Represents the state of a carousel component.
 */
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
	/**
	 * all slides nodes inside the carousel container
	 */
	slideNodes: HTMLElement[];
}

/**
 * Represents the API for a carousel component.
 */
export interface CarouselApi {
	/**
	 * Scroll to the previous snap point if possible.
	 * @param jump scroll instantly
	 */
	scrollPrev: (jump?: boolean) => void;
	/**
	 * Scroll to the next snap point if possible.
	 * @param jump scroll instantly
	 */
	scrollNext: (jump?: boolean) => void;
	/**
	 * Scroll to a snap point by index
	 * @param index the snap point index
	 * @param jump scroll instantly
	 */
	scrollTo: (index: number, jump?: boolean) => void;
	/**
	 * Retrieve the enabled plugins
	 */
	plugins: () => EmblaPluginsType | undefined;
}

/**
 * Represents the directives for a carousel component.
 */
export interface CarouselDirectives {
	/**
	 * the carousel directive
	 */
	carouselDirective: Directive;
}
/**
 * Represents a carousel widget with specific properties, state, API, and directives.
 */
export type CarouselWidget = Widget<CarouselProps, CarouselState, CarouselApi, CarouselDirectives>;

const defaultConfig: CarouselProps = {
	align: 'center',
	axis: 'x',
	container: null,
	containScroll: 'trimSnaps',
	direction: 'ltr',
	dragFree: false,
	dragThreshold: 10,
	duration: 25,
	inViewThreshold: 0,
	loop: false,
	skipSnaps: false,
	plugins: [],
};

/**
 * Retrieve a shallow copy of the default Carousel config
 * @returns the default Carousel config
 */
export function getCarouselDefaultConfig(): CarouselProps {
	return {...defaultConfig};
}

const configValidator: ConfigValidator<CarouselProps> = {
	dragFree: typeBoolean,
	plugins: typeArray,
	align: createTypeEnum(['start', 'center', 'end']),
	axis: createTypeEnum(['x', 'y']),
	container: typeStringOrNull,
	containScroll: createTypeEnum([false, 'trimSnaps', 'keepSnaps']),
	direction: createTypeEnum(['ltr', 'rtl']),
	dragThreshold: typeNumber,
	duration: typeNumber,
	inViewThreshold: typeNumber,
	loop: typeBoolean,
	skipSnaps: typeBoolean,
};

/**
 * An Embla Carousel widget factory.
 *
 * @internal
 * @param options$ - the store of Embla options
 * @param plugins$ - the store of Embla plugins
 * @returns the Embla carousel widget
 */
export function createEmblaCarousel(
	options$: ReadableSignal<Partial<EmblaOptions>>,
	plugins$?: ReadableSignal<EmblaPluginType[]>,
): {
	directive: Directive;
	stores: {
		scrolling$: ReadableSignal<boolean>;
		slidesInView$: ReadableSignal<number[]>;
		canScrollPrev$: ReadableSignal<boolean>;
		canScrollNext$: ReadableSignal<boolean>;
		selectedScrollSnap$: ReadableSignal<number>;
		slideNodes$: ReadableSignal<HTMLElement[]>;
	};
	api: CarouselApi;
} {
	let emblaApi: EmblaCarouselType | undefined;

	const scrolling$ = writable(false);
	const slidesInView$ = writable<number[]>([]);
	const canScrollPrev$ = writable(false);
	const canScrollNext$ = writable(false);
	const selectedScrollSnap$ = writable(0);
	const slideNodes$ = writable<HTMLElement[]>([]);

	const directiveArgs$ = computed(() => ({
		options: options$(),
		plugins: plugins$ ? plugins$() : [],
	}));

	return {
		directive: bindDirective(
			browserDirective((element: HTMLElement, {options, plugins}: {options: Partial<EmblaOptions>; plugins: EmblaPluginType[]}) => {
				if (emblaApi) {
					throw new Error('Only one Embla directive can be attached per carousel widget !');
				}
				emblaApi = EmblaCarousel(element, options, plugins);
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
				emblaApi.on('reInit', (api) => {
					canScrollNext$.set(api.canScrollNext());
					canScrollPrev$.set(api.canScrollPrev());
					scrolling$.set(false);
					selectedScrollSnap$.set(api.selectedScrollSnap());
					slideNodes$.set(api.slideNodes());
				});
				emblaApi.on('slidesChanged', (api) => {
					slideNodes$.set(api.slideNodes());
				});
				canScrollNext$.set(emblaApi.canScrollNext());
				canScrollPrev$.set(emblaApi.canScrollPrev());
				slideNodes$.set(emblaApi.slideNodes());
				return {
					update: ({options, plugins}: {options: Partial<EmblaOptions>; plugins: EmblaPluginType[]}) => {
						emblaApi!.reInit(options, plugins);
					},
					destroy: () => {
						emblaApi?.destroy();
						emblaApi = undefined;
					},
				};
			}),
			directiveArgs$,
		),
		stores: {
			scrolling$,
			slidesInView$,
			canScrollPrev$,
			canScrollNext$,
			selectedScrollSnap$,
			slideNodes$,
		},
		api: {
			scrollPrev: (jump?: boolean) => {
				emblaApi?.scrollPrev?.(jump);
			},
			scrollNext: (jump?: boolean) => {
				emblaApi?.scrollNext?.(jump);
			},
			scrollTo: (index: number, jump?: boolean) => {
				emblaApi?.scrollTo?.(index, jump);
			},
			plugins: () => emblaApi?.plugins(),
		},
	};
}

/**
 * Create an CarouselWidget with given config props
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
export function createCarousel(config?: PropsConfig<CarouselProps>): CarouselWidget {
	const [
		{
			align$,
			axis$,
			container$,
			containScroll$,
			direction$,
			dragFree$,
			dragThreshold$,
			duration$,
			inViewThreshold$,
			loop$,
			skipSnaps$,
			plugins$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultConfig, config, configValidator);

	const emblaOptions$ = computed(() => ({
		align: align$(),
		axis: axis$(),
		container: container$(),
		containScroll: containScroll$(),
		direction: direction$(),
		dragFree: dragFree$(),
		dragThreshold: dragThreshold$(),
		duration: duration$(),
		inViewThreshold: inViewThreshold$(),
		loop: loop$(),
		skipSnaps: skipSnaps$(),
	}));

	const emblaCarousel = createEmblaCarousel(emblaOptions$, plugins$);

	return {
		...stateStores({
			...emblaCarousel.stores,
			...stateProps,
		}),
		patch,
		api: emblaCarousel.api,
		directives: {
			carouselDirective: emblaCarousel.directive,
		},
	};
}
