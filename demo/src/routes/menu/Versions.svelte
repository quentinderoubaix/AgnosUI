<script lang="ts">
	import {page} from '$app/stores';
	import {pathToRoot$, selectedFramework$} from '$lib/stores';
	import {validate, compare} from 'compare-versions';
	import Dropdown from '$lib/layout/Dropdown.svelte';
	import type {Version} from './version';

	export let versions: Version[];

	$: currentVersion = versions.find((version) => version.version === `v${import.meta.env.AGNOSUI_VERSION}`) ?? versions[0];
	$: versionsWithUrl = versions.map((version) => ({
		id: version.folder,
		version: version.version,
		href:
			version.version === 'PREVIEW' ||
			$page.route.id === '/' ||
			($page.data['since'] && validate($page.data['since']) && compare($page.data['since'], version.version, '<='))
				? $page.url.pathname.replace(`/${currentVersion.folder}/`, `/${version.folder}/`)
				: `${$pathToRoot$.replace(currentVersion.folder, version.folder)}docs/${$selectedFramework$}/getting-started/introduction`,
		isSelected: currentVersion.folder === version.folder,
	}));
</script>

<div class="nav-item">
	<Dropdown
		ariaLabel="select the version of agnosui"
		btnClass="nav-link {currentVersion.version === 'PREVIEW' ? 'badge text-bg-warning' : ''}"
		items={versionsWithUrl}
		mode="links"
	>
		<svelte:fragment slot="button">
			{currentVersion.version}
		</svelte:fragment>
		<svelte:fragment slot="item" let:item let:index>
			{index === 1 ? `Latest (${item.version})` : item.version}
		</svelte:fragment>
	</Dropdown>
</div>
