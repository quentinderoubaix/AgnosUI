<script lang="ts">
	import {createCarousel} from '@agnos-ui/svelte-headless/components/carousel';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	type Item = $$Generic; // eslint-disable-line no-undef

	export let items: Item[];
	export let withNavArrows = false;
	export let withNavIndicators = false;

	const {
		stores: {canScrollNext$, canScrollPrev$, selectedScrollSnap$},
		directives: {emblaDirective},
		api: {scrollNext, scrollPrev, scrollTo},
	} = callWidgetFactory({
		factory: createCarousel,
		widgetName: 'carousel',
		$$props: {},
	});
</script>

<div class="overflow-hidden relative" use:emblaDirective>
	<div class="flex">
		{#each items as item}
			<div class="basis-full min-w-0 shrink-0 grow-0">
				<slot prop={item} />
			</div>
		{/each}
	</div>
	{#if withNavArrows}
		<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
			<button class="btn btn-circle" disabled={!$canScrollPrev$} on:click={scrollPrev}>❮</button>
			<button class="btn btn-circle" disabled={!$canScrollNext$} on:click={scrollNext}>❯</button>
		</div>
	{/if}
</div>
{#if withNavIndicators}
	<div class="flex w-full justify-center gap-2 py-2">
		{#each items as _, index}
			<button class="btn btn-xs" class:btn-active={$selectedScrollSnap$ === index} on:click={() => scrollTo(index)}>{index + 1}</button>
		{/each}
	</div>
{/if}
