<script lang="ts">
	import {createProgressbar, type ProgressbarProps} from '@agnos-ui/svelte-headless/components/progressbar';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {className, ...props}: Partial<Omit<ProgressbarProps, 'min'>> & {className?: string} = $props();

	const {
		state,
		directives: {ariaDirective},
	} = callWidgetFactory({
		factory: createProgressbar,
		widgetName: 'progressbar',
		get props() {
			return {...props};
		},
		enablePatchChanged: true,
	});
</script>

<progress use:ariaDirective class="progress {className}" value={state.value} max={state.max}></progress>
