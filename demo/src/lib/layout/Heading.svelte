<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import Svg from './Svg.svelte';
	import link from 'bootstrap-icons/icons/link-45deg.svg?raw';
	import {selectedFramework$} from '$lib/stores';

	export let depth: 1 | 2 | 3 | 4 | 5 | 6;
	export let text: string;
	export let id: string = text.toLowerCase().replace(/\s/g, '-').trim();
	export let headerClassName: string = '';
</script>

{#if depth > 1}
	<svelte:element this={'h' + depth} {id} class={`${headerClassName} text-primary-emphasis ${depth > 1 ? 'mt-2' : ''}`}>
		{text}
		<a class="anchor-link" href="#{id}" aria-label="link to {text}"><Svg className="icon-24 align-middle" svg={link} /></a>
	</svelte:element>
{:else}
	<Header title={text} selectedFramework={$selectedFramework$} />
{/if}

<style lang="scss">
	.anchor-link {
		text-decoration: none;
		opacity: 0;
		transition: opacity 0.15s ease-in-out;

		&:focus,
		&:hover,
		:hover > &,
		:target > & {
			opacity: 1;
		}
	}
</style>
