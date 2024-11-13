<script lang="ts">
	import {Modal} from '@agnos-ui/svelte-bootstrap/components/modal';
	import {hashChangeHook} from '$lib/utils';

	const props$ = hashChangeHook('modal');
</script>

{#key $props$}
	<div>
		<Modal {...$props$} />
	</div>
{/key}
