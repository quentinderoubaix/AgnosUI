<script lang="ts">
	import {generateId} from '@agnos-ui/svelte-headless/utils/id';
	import type {Snippet} from 'svelte';

	let {id = generateId(), children}: {children: Snippet; id: string} = $props();
</script>

<div class="au-carousel-slide" {id}>
	{@render children()}
</div>
