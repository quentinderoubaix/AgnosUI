<script lang="ts">
	import {onMount, type Snippet} from 'svelte';
	import 'bootstrap/dist/css/bootstrap.css';
	import '@agnos-ui/core-bootstrap/scss/agnosui.scss';
	import {afterNavigate} from '$app/navigation';

	onMount(() => {
		window.addEventListener('storage', (event) => {
			if (event.key === 'theme') {
				if (event.newValue) {
					document.documentElement.setAttribute('data-bs-theme', event.newValue);
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

<div id="root" class="container p-3">
	{@render children()}
</div>
