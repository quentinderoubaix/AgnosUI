<script lang="ts">
	import Markdown from '$lib/markdown/Markdown.svelte';
	import Alert from '../../../../../../../svelte/demo/src/daisyui/samples/alert/Alert.svelte';
	import ApiCode from '$lib/api/render/ApiCode.svelte';
	import ApiHeading from '$lib/api/render/ApiHeading.svelte';
	import ApiParagraph from '$lib/api/render/ApiParagraph.svelte';
	import Svg from '$lib/layout/Svg.svelte';
	import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg?raw';
	import Header from '$lib/layout/Header.svelte';
	import ApiSection from '$lib/api/render/ApiSection.svelte';
	import {selectedPackageType$} from '$lib/stores';
	import type {PageData} from './$types';

	let {data}: {data: PageData} = $props();

	const overrideRenderers = {
		heading: ApiHeading,
		paragraph: ApiParagraph,
		code: ApiCode,
		section: ApiSection,
	} as any;
</script>

<Header title={data.title} cssFramework={$selectedPackageType$} />
<Alert className="alert-info mb-4" visible dismissible={false}>
	<div class="flex items-center gap-2">
		<Svg svg={biInfoCircleFill} className="icon-16" />
		<div class="text-lg">
			All following symbols can be imported from <strong class="text-wrap">{data.import}</strong>
		</div>
	</div>
</Alert>
{#each data.content as { source, name }, i (name)}
	{#if i !== 0}
		<hr />
	{/if}
	<Markdown {source} {overrideRenderers} apiSymbol={name} />
{/each}
