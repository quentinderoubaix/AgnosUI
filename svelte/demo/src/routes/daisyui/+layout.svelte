<script lang="ts">
	import {onMount, type Snippet} from 'svelte';
	import './app.css';
	import {afterNavigate} from '$app/navigation';

	onMount(() => {
		window.addEventListener('storage', (event) => {
			if (event.key === 'theme') {
				if (event.newValue) {
					document.documentElement.setAttribute('data-theme', event.newValue);
				}
			}
		});
	});

	afterNavigate(() => {
		if (window.parent) {
			window.parent.postMessage({type: 'sampleload'});
		}
	});

	let {children}: {children: Snippet} = $props();
</script>

<div id="root" class="container mx-auto p-3">
	{@render children()}
</div>
