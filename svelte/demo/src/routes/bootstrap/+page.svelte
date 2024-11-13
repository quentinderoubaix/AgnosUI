<script lang="ts">
	import {base} from '$app/paths';
	import type {PageServerData} from './$types';

	let {data}: {data: PageServerData} = $props();

	import '@agnos-ui/common/samples/links.scss';
</script>

<h3>Samples:</h3>
<div class="sample-links">
	{#each data.components as url}
		<div><a href="{base}/bootstrap/{url}">{url}</a></div>
	{/each}
</div>
