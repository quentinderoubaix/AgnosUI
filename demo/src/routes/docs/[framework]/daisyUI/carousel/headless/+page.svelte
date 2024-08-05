<script lang="ts">
	import daisyUIDefault from '@agnos-ui/samples/daisyui/carousel/default';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Headless" id="default" level={2}>
	<p>
		The headless Carousel simply wraps <a href="https://www.embla-carousel.com/">the Embla Carousel</a> as an AgnosUI widget, allowing the options and
		plugins to be set through our configuration.
	</p>
	<Sample title="Headless example" sample={daisyUIDefault} height={450} />
</Section>
