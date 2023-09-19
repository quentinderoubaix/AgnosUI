const t=`<script lang="ts" context="module">
	import type {AlertProps as Props, AlertSlots as Slots, WidgetPropsEvents, WidgetPropsProps} from '@agnos-ui/svelte-headless';
	import {Slot, callWidgetFactory, createAlert, createEventDispatcher} from '@agnos-ui/svelte-headless';
	import AlertDefaultStructure from './AlertDefaultStructure.svelte';

	const defaultConfig: Partial<Props> = {
		slotStructure: AlertDefaultStructure,
	};
<\/script>

<script lang="ts">
	type $$Props = WidgetPropsProps<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Events = WidgetPropsEvents<Props>;
	type $$Slots = Slots; // eslint-disable-line @typescript-eslint/no-unused-vars
	const dispatch = createEventDispatcher<$$Events>();
	const widget = callWidgetFactory(createAlert, 'alert', $$slots, defaultConfig);
	export let visible: boolean | undefined = undefined;
	export const api = widget.api;

	widget.patch({
		onShown: () => dispatch('shown'),
		onHidden: () => dispatch('hidden'),
		onVisibleChange: (event) => {
			visible = event;
			dispatch('visibleChange', event);
		},
	});
	const {
		stores: {slotStructure$, hidden$},
		directives: {transitionDirective},
		state$,
	} = widget;

	$: widget.patchChangedProps($$props);

	$: slotContext = {widget, state: $state$};
<\/script>

{#if !$hidden$}
	<div class="au-alert d-flex alert w-100 alert-{$state$.type} {$state$.className}" role="alert" use:transitionDirective>
		<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
			<slot slot="slot" name="structure" let:props {...props} />
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
	</div>
{/if}
`;export{t as default};
