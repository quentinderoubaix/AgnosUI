<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getAccordionDefaultConfig} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import sample from '@agnos-ui/samples/bootstrap/accordion/playground';
	import doc from '@agnos-ui/generated/doc/api.json?accordion&extractApi';
	import type {PropsValues} from '@agnos-ui/common/propsValues';
	interface Props {
		listPropsValues?: {[key in keyof ReturnType<typeof getAccordionDefaultConfig>]?: PropsValues[]};
	}

	let {
		listPropsValues = {
			onItemShown: ['noop', 'log'],
			onItemHidden: ['noop', 'log'],
			itemTransition: ['collapse', 'fade'],
		},
	}: Props = $props();
</script>

<Playground {sample} config={getAccordionDefaultConfig()} {doc} {listPropsValues} />
