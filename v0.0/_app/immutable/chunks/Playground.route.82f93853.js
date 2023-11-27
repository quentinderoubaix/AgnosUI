const r=`<script lang="ts">
	import {Progressbar} from '@agnos-ui/svelte';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('progressbar');
<\/script>

{#key $props$}
	<Progressbar {...$props$} />
{/key}
`;export{r as default};