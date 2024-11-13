<script lang="ts">
	import {Toast} from '@agnos-ui/svelte-bootstrap/components/toast';
	import {hashChangeHook} from '$lib/utils';

	const props$ = hashChangeHook('toast');
</script>

{#key $props$}
	<Toast {...$props$} />
{/key}
