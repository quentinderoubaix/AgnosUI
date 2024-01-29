const t=`<script lang="ts">
	import './custom.scss';
	import RatingReadonly from './RatingReadonly.svelte';
<\/script>

<div>The readonly rating without slot:</div>
<RatingReadonly rating={7} maxRating={10} />

<div class="mt-2">Using a slot to customize the display:</div>
<RatingReadonly rating={7} maxRating={10} className="rating-custom">
	<span slot="star" let:index let:fill class="star" class:filled={fill === 100} class:bad={index < 3}>&#9733;</span>
</RatingReadonly>
`;export{t as default};
