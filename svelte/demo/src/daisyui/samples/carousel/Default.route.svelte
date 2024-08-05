<script lang="ts">
	import Carousel from './Carousel.svelte';

	const photos = [
		'https://picsum.photos/750/415.webp?random=1',
		'https://picsum.photos/750/415.webp?random=2',
		'https://picsum.photos/750/415.webp?random=3',
	];
</script>

<Carousel items={photos} let:prop={photo} withNavArrows withNavIndicators>
	<img alt="random picsum" src={photo} />
</Carousel>
