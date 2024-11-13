<script lang="ts">
	import {Collapse} from '@agnos-ui/svelte-bootstrap/components/collapse';
	import {hashChangeHook} from '$lib/utils';

	const props$ = hashChangeHook('collapse');
</script>

{#key $props$}
	<Collapse {...$props$}>Visible content</Collapse>
{/key}
