<script lang="ts">
	import {createSlider, type SliderProps} from '@agnos-ui/svelte-headless/components/slider';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	type $$Props = Partial<Pick<SliderProps, 'min' | 'max' | 'values' | 'stepSize' | 'className'>>;

	export let values: number[] | undefined = undefined;

	const widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		$$props,
		events: {
			onValuesChange: (value: number[]) => {
				values = value;
			},
		},
	});
	const {
		stores: {min$, max$, stepSize$, sortedHandles$},
		directives: {sliderDirective},
		patchChangedProps,
	} = widget;
	$: patchChangedProps($$props);
</script>

<input
	type="range"
	use:sliderDirective
	min={$min$}
	max={$max$}
	value={$sortedHandles$[0].value}
	step={$stepSize$}
	class="range"
	aria-label={$sortedHandles$[0].ariaLabel}
	on:click={widget.actions.click}
	on:keydown={(e) => widget.actions.keydown(e, 0)}
	on:mousedown={(e) => widget.actions.mouseDown(e, 0)}
	on:touchstart={(e) => widget.actions.touchStart(e, 0)}
/>
