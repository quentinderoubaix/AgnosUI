<script lang="ts">
	import type {AccordionItemApi, AccordionItemContext, AccordionItemProps, AccordionItemWidget} from './accordion';
	import type {WidgetFactory} from '@agnos-ui/svelte-headless/types';
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import {callWidgetFactory} from '../../config';
	import {onMount} from 'svelte';
	import ItemDefaultStructure from './ItemDefaultStructure.svelte';
	import {getAccordionApi} from './accordion';

	const accordionApi = getAccordionApi();
	const {registerItem} = accordionApi;

	const id = $props.id();
	let {visible = $bindable(), ...props}: Partial<AccordionItemProps> = $props();
	const widget = callWidgetFactory({
		factory: registerItem as WidgetFactory<AccordionItemWidget>,
		get props() {
			return {...props, visible};
		},
		enablePatchChanged: true,
		defaultConfig: {structure, id},
		events: {
			onVisibleChange: (event) => {
				visible = event;
			},
		},
	});
	const {
		state,
		directives: {itemDirective},
	} = widget;
	export const api: AccordionItemApi = widget.api;

	onMount(() => {
		widget.api.initDone();
	});
</script>

{#snippet structure(props: AccordionItemContext)}
	<ItemDefaultStructure {...props} />
{/snippet}

<div class="accordion-item" use:itemDirective>
	<Slot content={state.structure} props={widget} />
</div>
