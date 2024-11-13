<script lang="ts">
	import {Progressbar} from '@agnos-ui/svelte-bootstrap/components/progressbar';
	import {hashChangeHook} from '$lib/utils';

	const props$ = hashChangeHook('progressbar');
</script>

{#key $props$}
	<Progressbar {...$props$} />
{/key}
