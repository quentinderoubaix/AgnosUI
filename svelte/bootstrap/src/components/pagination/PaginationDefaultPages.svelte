<script lang="ts">
	import type {PaginationContext} from './pagination.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: PaginationContext = $props();
	let {state, directives} = widget;
</script>

{#each state.pages as page}
	<li class={['page-item', {active: page === state.page, disabled: page === -1 || state.disabled}]}>
		{#if page === -1}
			<div class="page-link au-ellipsis" aria-hidden="true">
				<Slot content={state.ellipsisLabel} props={widget} />
			</div>
			<span class="visually-hidden">{state.ariaEllipsisLabel}</span>
		{:else}
			<a class="page-link" use:directives.pageLink={{page}}>
				<Slot content={state.numberLabel} props={{...widget, displayedPage: page}} />{#if state.page === page}
					<span class="visually-hidden">{state.activeLabel}</span>
				{/if}
			</a>
		{/if}
	</li>
{/each}
