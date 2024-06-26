<script context="module" lang="ts">
	import {page} from '$app/stores';
	import {pathToRoot$, selectedFramework$} from '$lib/stores';
	import {createHasFocus} from '@agnos-ui/svelte-bootstrap/services/focustrack';
	import {writable} from '@amadeus-it-group/tansu';
	import {validate, compare} from 'compare-versions';
	import type {Version} from './version';
</script>

<script lang="ts">
	export let versions: Version[];

	$: currentVersion = versions.find((version) => version.version === `v${import.meta.env.AGNOSUI_VERSION}`) ?? versions[0];

	const open$ = writable(false);

	const {hasFocus$, directive} = createHasFocus();
	$: $open$ = $hasFocus$;

	function giveFocus(el: HTMLAnchorElement, index: number) {
		if (index === 0) {
			el.focus();
		}
	}

	$: versionsWithUrl = versions.map((version) => ({
		...version,
		url:
			version.version === 'PREVIEW' ||
			$page.route.id === '/' ||
			($page.data['since'] && validate($page.data['since']) && compare($page.data['since'], version.version, '<='))
				? $page.url.pathname.replace(`/${currentVersion.folder}/`, `/${version.folder}/`)
				: `${$pathToRoot$.replace(currentVersion.folder, version.folder)}docs/${$selectedFramework$}/getting-started/introduction`,
	}));
	const regexNext = /-next/;
	$: includesNext = !!versions[1]?.version?.match?.(regexNext);
	const versionLabel = (index: number, version: string, withNext: boolean) => {
		if (withNext) {
			if (index === 1) {
				return `Next (${version})`;
			} else {
				return index === 2 ? `Latest (${version})` : version;
			}
		} else {
			return index === 1 ? `Latest (${version})` : version;
		}
	};
</script>

<div class="nav-item">
	<div class="dropdown">
		<button
			class="btn nav-link dropdown-toggle align-items-center d-flex {currentVersion.version === 'PREVIEW' || currentVersion.folder === 'next'
				? 'badge text-bg-warning'
				: ''}"
			aria-label="demo version select"
			on:mousedown|preventDefault
			on:click={() => ($open$ = !$open$)}
			type="button"
			aria-expanded={$open$}
		>
			{currentVersion.version}
		</button>
		{#if $open$}
			<div
				use:directive
				class="dropdown-menu dropdown-menu-end bs-popover-auto position-absolute"
				class:show={$open$}
				data-popper-placement="bottom-end"
				data-bs-popper="absolute"
			>
				{#each versionsWithUrl as version, index}
					<a
						use:giveFocus={index}
						class="dropdown-item d-flex align-items-center"
						href={version.url}
						class:active={version.folder === currentVersion.folder}
						on:click={() => {
							$open$ = !$open$;
						}}
					>
						{versionLabel(index, version.version, includesNext)}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="css">
	.nav-link {
		transition: none;
	}
</style>
