<script lang="ts">
	import type {CarouselProps, CarouselApi} from './carousel.gen';
	import {createCarousel} from './carousel.gen';
	import {callWidgetFactory} from '../../config';
	import type {Snippet} from 'svelte';

	let {children, ...props}: Partial<CarouselProps> & {children: Snippet} = $props();

	const {
		directives: {carouselDirective, slidePrev, slideNext, tabIndicator},
		api: carouselApi,
		state,
	} = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'collapse',
		get props() {
			return {...props};
		},
		enablePatchChanged: true,
	});
	export const api: CarouselApi = carouselApi;
</script>

<div class="carousel au-carousel" use:carouselDirective>
	{#if state.showNavigationArrows}
		{#if state.canScrollPrev}
			<button class="carousel-control-prev" use:slidePrev>
				<span class="carousel-control-prev-icon"></span>
			</button>
		{/if}
		{#if state.canScrollNext}
			<button class="carousel-control-next" use:slideNext>
				<span class="carousel-control-next-icon"></span>
			</button>
		{/if}
	{/if}
	{#if state.showNavigationIndicators}
		<div class="carousel-indicators" role="tablist">
			{#each state.slideNodes as { id }, index}
				<button use:tabIndicator={{index, id}}></button>
			{/each}
		</div>
	{/if}
	<div class="au-carousel-container">
		{@render children()}
	</div>
</div>
