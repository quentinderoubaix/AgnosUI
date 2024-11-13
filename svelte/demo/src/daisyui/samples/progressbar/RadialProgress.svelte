<script lang="ts">
	import {createProgressbar, type ProgressbarProps} from '@agnos-ui/svelte-headless/components/progressbar';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {className, ...props}: Partial<ProgressbarProps> & {className: string} = $props();

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

	const percentFormat = new Intl.NumberFormat('default', {
		style: 'percent',
		minimumFractionDigits: 0,
		maximumFractionDigits: 1,
	});
</script>

<div use:ariaDirective class="radial-progress {className}" style="--thickness: 0.4rem; --value:{state.percentage};">
	{percentFormat.format(state.percentage / 100)}
</div>
