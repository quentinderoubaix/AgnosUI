<script lang="ts">
	import {writable} from '@amadeus-it-group/tansu';
	import {createHasFocus} from '@agnos-ui/svelte-bootstrap/services/focustrack';
	const open$ = writable(false);

	type Item = $$Generic<{
		id: string;
		onclick?: () => void;
		href?: string;
		isSelected?: boolean;
	}>; // eslint-disable-line no-undef

	const {hasFocus$, directive} = createHasFocus();
	$: $open$ = $hasFocus$;

	function giveFocus(el: HTMLAnchorElement | HTMLButtonElement, index: number) {
		if (index === 0) {
			el.focus();
		}
	}

	const toggle = () => open$.update((val) => !val);

	export let ariaLabel: string;
	export let btnClass: string = '';
	export let items: Item[];
	export let mode: 'links' | 'buttons' = 'buttons';
	export let position: 'start' | 'end' = 'start';
	export let dropdownClass: string = '';
</script>

<div class="dropdown {dropdownClass}">
	<button
		class="btn dropdown-toggle align-items-center d-flex {btnClass}"
		aria-label={ariaLabel}
		on:mousedown|preventDefault
		on:click={toggle}
		type="button"
		aria-expanded={$open$}
	>
		<slot name="button" />
	</button>
	{#if $open$}
		<div use:directive class="dropdown-menu dropdown-menu-{position} position-absolute" class:show={$open$}>
			{#each items as item, index}
				{#if mode === 'links'}
					<a
						use:giveFocus={index}
						class="dropdown-item d-flex align-items-center"
						href={item.href}
						class:active={item.isSelected}
						aria-current={item.isSelected ? 'page' : false}
						on:click={toggle}
					>
						<slot name="item" {item} />
					</a>
				{:else}
					<button
						use:giveFocus={index}
						class="dropdown-item d-flex align-items-center"
						class:active={item.isSelected}
						on:click={() => {
							item?.onclick?.();
							toggle();
						}}
					>
						<slot name="item" {item} {index} />
					</button>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style lang="css">
	.nav-link {
		transition: none;
	}
</style>
