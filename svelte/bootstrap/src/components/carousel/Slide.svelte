<script lang="ts">
	import {generateId} from '@agnos-ui/svelte-headless/utils/id';
	import type {Snippet} from 'svelte';
	import {getCarouselStateContext} from './carousel';

	let {id = generateId(), children}: {children: Snippet; id?: string} = $props();

	const carouselState = getCarouselStateContext();
</script>

<div class="au-carousel-slide" {id} aria-hidden={carouselState.selectedSlideId !== id || undefined}>
	{@render children()}
</div>
