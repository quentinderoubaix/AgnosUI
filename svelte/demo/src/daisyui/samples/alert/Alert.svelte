<script lang="ts">
	import {createSimpleClassTransition} from '@agnos-ui/svelte-headless/services/transitions/simpleClassTransition';
	import {createTransition} from '@agnos-ui/svelte-headless/services/transitions/baseTransitions';
	import closeIconSvg from '@agnos-ui/common/samples/common/close_icon.svg?raw';
	import type {Snippet} from 'svelte';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	interface Props {
		children: Snippet;
		visible?: boolean;
		dismissible?: boolean;
		ariaCloseButtonLabel?: string;
		type?: 'info' | 'success' | 'error' | 'warning';
	}

	let {visible = $bindable(), dismissible = true, ariaCloseButtonLabel = 'Close', children, type = 'success'}: Props = $props();

	const alertWidget = callWidgetFactory({
		factory: createTransition,
		get props() {
			return {visible};
		},
		enablePatchChanged: true,
		defaultConfig: {
			transition: createSimpleClassTransition({
				showClasses: ['transition-opacity'],
				hideClasses: ['opacity-0'],
				animationPendingHideClasses: ['opacity-0', 'transition-opacity'],
			}),
		},
		events: {
			onVisibleChange: (v) => (visible = v),
		},
	});
</script>

{#if !alertWidget.state.hidden}
	<div role="alert" class="flex alert alert-{type}" use:alertWidget.directives.directive>
		{@render children()}
		{#if dismissible}
			<button class="btn btn-sm btn-circle btn-ghost ms-auto" onclick={() => alertWidget.api.hide()} aria-label={ariaCloseButtonLabel}>
				{@html closeIconSvg}
			</button>
		{/if}
	</div>
{/if}
