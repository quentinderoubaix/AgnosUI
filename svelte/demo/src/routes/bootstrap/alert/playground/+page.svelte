<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {hashChangeHook} from '$lib/utils';

	const props$ = hashChangeHook('alert');
</script>

{#key $props$}
	<Alert {...$props$} />
{/key}
