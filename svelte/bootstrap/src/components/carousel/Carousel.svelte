<script lang="ts">
	import type {CarouselProps, CarouselApi} from './carousel.gen';
	import {createCarousel} from './carousel.gen';
	import {callWidgetFactory} from '../../config';

	let props: Partial<CarouselProps> = $props();

	const photos = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

	const {
		directives: {carouselDirective},
		api: carouselApi,
		state,
	} = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'collapse',
		props,
		enablePatchChanged: true,
	});
	export const api: CarouselApi = carouselApi;
	const onpointerdown = (event: PointerEvent) => event.preventDefault();
</script>

<div class="carousel slide overflow-hidden" use:carouselDirective>
	<div class="carousel-indicators" role="tablist">
		{#each photos as _, index}
			<button {onpointerdown} class:active={state.selectedScrollSnap === index} role="tab" onclick={() => api.select(index)} data-bs-target></button>
		{/each}
	</div>
	<div class="d-flex w-100 carousel-container">
		{#each photos as photo}
			<div class="flex-shrink-0 flex-grow-0 position-relative user-select-none" style="flex-basis: 100%">
				<img class="w-100" alt="random picsum" src={photo} />
				<div class="carousel-caption d-none d-md-block">
					<h5>First slide label</h5>
					<p>Some representative placeholder content for the first slide.</p>
				</div>
			</div>
		{/each}
	</div>
	<button class="carousel-control-prev" onclick={api.prev} {onpointerdown}>
		<span class="carousel-control-prev-icon"></span>
	</button>
	<button class="carousel-control-next" onclick={api.next} {onpointerdown}>
		<span class="carousel-control-next-icon"></span>
	</button>
</div>
