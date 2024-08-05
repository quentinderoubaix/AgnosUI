<script lang="ts">
	import type {CarouselProps, CarouselApi} from './carousel.gen';
	import {createCarousel} from './carousel.gen';
	import {callWidgetFactory} from '../../config';
	import {type Snippet} from 'svelte';
	import {setCarouselStateContext} from './carousel';

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

	setCarouselStateContext(state);
</script>

<div class="carousel au-carousel" use:carouselDirective>
	{#if state.showNavigationArrows}
		{#if state.canScrollPrev}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="carousel-control-prev" use:slidePrev>
				<span class="carousel-control-prev-icon"></span>
			</button>
		{/if}
		{#if state.canScrollNext}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="carousel-control-next" use:slideNext>
				<span class="carousel-control-next-icon"></span>
			</button>
		{/if}
	{/if}
	{#if state.showNavigationIndicators}
		<div class="carousel-indicators" role="tablist">
			{#each state.slideNodes as { id }, index (id)}
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button use:tabIndicator={{index, id}}></button>
			{/each}
		</div>
	{/if}
	<div class="au-carousel-container">
		{@render children()}
	</div>
	{#if state.includeAnnouncer}
		<div aria-live="polite" aria-atomic="true" class="visually-hidden">
			{state.ariaLiveAnnouncement}
		</div>
	{/if}
</div>
