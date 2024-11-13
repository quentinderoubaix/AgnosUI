<script lang="ts">
	import {Rating} from '@agnos-ui/svelte-bootstrap/components/rating';
	import {hashChangeHook} from '$lib/utils';

	const props$ = hashChangeHook('rating');
</script>

{#key $props$}
	<Rating {...$props$} />
{/key}
