const e=`<script lang="ts">
	import {Slider} from '@agnos-ui/svelte';

	let sliderControl = [70];
	let disabledControl = [60];
	let sliderValues = [20];
	let disabledToggle = true;
	let readonlyToggle = true;
<\/script>

<h2>Slider with form control</h2>
<Slider min={0} max={100} stepSize={1} bind:values={sliderControl} />
Form control value: {sliderControl.join(', ')}
<hr />

<h2>Slider with value</h2>
<Slider min={0} max={100} stepSize={1} bind:values={sliderValues} /> Value:
{sliderValues}
<hr />

<h2>Disabled slider</h2>
<Slider min={0} max={100} stepSize={1} bind:values={disabledControl} disabled={disabledToggle} readonly={readonlyToggle} />

<div class="form-check form-switch">
	<input class="form-check-input" type="checkbox" role="switch" id="disabled" bind:checked={disabledToggle} />
	<label class="form-check-label" for="disabled">Disabled</label>
</div>
<div class="form-check form-switch">
	<input class="form-check-input" type="checkbox" role="switch" id="readonly" bind:checked={readonlyToggle} />
	<label class="form-check-label" for="readonly">Readonly</label>
</div>
`;export{e as default};
