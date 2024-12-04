import type {ConfigValidator, SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';
import type {CarouselProps as CoreProps, CarouselState as CoreState, CarouselApi, CarouselDirectives} from '@agnos-ui/core/components/carousel';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {createCarousel as createCoreCarousel} from '@agnos-ui/core/components/carousel';
import {typeBoolean} from '@agnos-ui/core/utils/writables';

export * from '@agnos-ui/core/components/carousel';

/**
 * Represents the context for a Carousel slide.
 */
export interface SlideContext extends WidgetSlotContext<CarouselWidget> {
	/**
	 * index of the slide
	 */
	index: number;
}

interface CarouselExtraProps {
	/**
	 * If `true`, 'previous' and 'next' navigation arrows will be visible on the slide.
	 */
	showNavigationArrows: boolean;
	/**
	 * If `true`, navigation indicators at the bottom of the slide will be visible.
	 */
	showNavigationIndicators: boolean;
	/**
	 * Template for the Carousel.
	 */
	slide: SlotContent<CarouselContext>;
}
interface FilteredCarouselProps extends Omit<CoreProps, 'align' | 'axis' | 'container' | 'containScroll'> {}

/**
 * Represents the properties for the carousel component.
 */
export interface CarouselProps extends FilteredCarouselProps, CarouselExtraProps {}

/**
 * Represents the state of a carousel component.
 */
export interface CarouselState extends CoreState, CarouselExtraProps {}

/**
 * Represents a carousel widget with specific properties, state, API, and directives.
 */
export type CarouselWidget = Widget<CarouselProps, CarouselState, CarouselApi, CarouselDirectives>;

const defaultConfigExtraProps: CarouselExtraProps = {
	showNavigationArrows: true,
	showNavigationIndicators: true,
};
const extraPropsValidator: ConfigValidator<CarouselExtraProps> = {
	showNavigationArrows: typeBoolean,
	showNavigationIndicators: typeBoolean,
};

const defaultConfigCarousel: Omit<CoreProps, 'align' | 'axis' | 'container' | 'containScroll'> = {
	direction: 'ltr',
	dragFree: false,
	dragThreshold: 10,
	duration: 25,
	inViewThreshold: 0,
	loop: false,
	plugins: [],
	skipSnaps: false,
};

/**
 * Retrieve a shallow copy of the default Carousel config
 * @returns the default Carousel config
 */
export function getCarouselDefaultConfig(): CarouselProps {
	return {
		...defaultConfigCarousel,
		...defaultConfigExtraProps,
	};
}

/**
 * Create a Carousel with given config props
 * @param config - an optional carousel config
 * @returns a CarouselWidget
 */
export const createCarousel: WidgetFactory<CarouselWidget> = extendWidgetProps(createCoreCarousel, defaultConfigExtraProps, extraPropsValidator);
