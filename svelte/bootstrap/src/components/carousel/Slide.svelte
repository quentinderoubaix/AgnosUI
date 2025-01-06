<script lang="ts">
	import type {Snippet} from 'svelte';
	import {getCarouselApiContext} from './carousel';
	import type {CarouselSlideProps} from './carousel.gen';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';

	let {children, ...props}: Partial<CarouselSlideProps> & {children: Snippet} = $props();

	const {registerSlide} = getCarouselApiContext();
	const {
		directives: {slideDirective},
	} = callWidgetFactory({
		factory: registerSlide,
		get props() {
			return {...props};
		},
		enablePatchChanged: true,
	});
</script>

<div use:slideDirective>
	{@render children()}
</div>
