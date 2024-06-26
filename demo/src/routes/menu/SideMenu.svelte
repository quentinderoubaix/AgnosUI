<script lang="ts" context="module">
	export let counter = 0;
</script>

<script lang="ts">
	import {page} from '$app/stores';
	import {pathToRoot$, selectedFramework$, selectedPackage$} from '$lib/stores';
	import CollapsibleSection from './CollapsibleSection.svelte';
	import angularLogo from '$resources/logo-angular.svg?raw';
	import reactLogo from '$resources/logo-react.svg?raw';
	import svelteLogo from '$resources/logo-svelte.svg?raw';
	import Dropdown from '$lib/layout/Dropdown.svelte';
	import agnosUILogo from '$resources/agnosui-logo.svg?raw';
	import bootstrapLogo from 'bootstrap-icons/icons/bootstrap-fill.svg?raw';

	import './menu.scss';
	import Svg from '$lib/layout/Svg.svelte';

	const regexFwk = /^(.*\/)(angular|react|svelte)(\/.*)$/;
	$: matchFwk = $page.url.pathname.match(regexFwk)!;
	const regexPkg = /^(.*\/)(angular|react|svelte)\/(core|headless|bootstrap)(\/.*)$/;
	$: matchPkg = $page.url.pathname.match(regexPkg)!;

	const angularLogoPrefix = counter++ + '-';
	// very ugly patch of angular logo to work around the issue of the logo not showing on mobile.
	const patchedAngularLogo = angularLogo
		.replace(/id="([^"]+)"/g, `id="${angularLogoPrefix}$1"`)
		.replace(/url\(#([^)]+)/g, `url(#${angularLogoPrefix}$1`);

	const FwkLogoMap = {
		angular: patchedAngularLogo,
		react: reactLogo,
		svelte: svelteLogo,
	};

	$: frameworks = [
		{
			id: 'Angular',
			href: `${matchFwk[1]}angular${matchFwk[3]}`,
			isSelected: $selectedFramework$ === 'angular',
			logo: patchedAngularLogo,
		},
		{
			id: 'React',
			href: `${matchFwk[1]}react${matchFwk[3]}`,
			isSelected: $selectedFramework$ === 'react',
			logo: reactLogo,
		},
		{
			id: 'Svelte',
			href: `${matchFwk[1]}svelte${matchFwk[3]}`,
			isSelected: $selectedFramework$ === 'svelte',
			logo: svelteLogo,
		},
	];
	$: selectedFwk = frameworks.find((fwk) => fwk.isSelected)!;

	$: packages = [
		{
			id: 'Core',
			href: `${matchFwk[1]}${matchFwk[2]}\/core${matchFwk[4] ?? ''}`,
			isSelected: $selectedPackage$ === '@agnos-ui/core',
			logo: agnosUILogo,
		},
		{
			id: 'Headless',
			href: `${matchFwk[1]}${matchFwk[2]}\/headless${matchFwk[4] ?? ''}`,
			isSelected: $selectedPackage$ === `@agnos-ui/${$selectedFramework$}-headless`,
			logo: FwkLogoMap[$selectedFramework$],
		},
		{
			id: 'Bootstrap',
			href: `${matchFwk[1]}${matchFwk[2]}\/bootstrap${matchFwk[4] ?? ''}`,
			isSelected: $selectedPackage$ === `@agnos-ui/${$selectedFramework$}-bootstrap`,
			logo: bootstrapLogo,
		},
	];
	$: selectedPkg = packages.find((pkg) => pkg.isSelected)!;
</script>

<nav class="w-100 mt-1">
	{#if $page.data.includesFwk}
		<strong class="d-flex w-100 align-items-center fw-semibold">Framework </strong>
		<Dropdown mode="links" ariaLabel="choose the framework" items={frameworks} dropdownClass="mb-2 mt-1" btnClass="btn-outline-primary">
			<svelte:fragment slot="button">
				<Svg svg={selectedFwk.logo} className="icon-20 align-middle me-3" />
				<span class="fwk-name">{selectedFwk.id}</span>
			</svelte:fragment>
			<svelte:fragment slot="item" let:item>
				<Svg svg={item.logo} className="icon-20 align-middle me-3" />
				{item.id}
			</svelte:fragment>
		</Dropdown>
	{/if}
	{#if $page.data.includesPkg}
		<strong class="d-flex w-100 align-items-center fw-semibold">Package </strong>
		<Dropdown mode="links" ariaLabel="choose the package" items={packages} dropdownClass="mb-2 mt-1" btnClass="btn-outline-primary">
			<svelte:fragment slot="button">
				<Svg svg={selectedPkg.logo} className="icon-20 align-middle me-3" />
				<span class="pkg-name">{selectedPkg.id}</span>
			</svelte:fragment>
			<svelte:fragment slot="item" let:item>
				<Svg svg={item.logo} className="icon-20 align-middle me-3" />
				{item.id}
			</svelte:fragment>
		</Dropdown>
		<hr />
	{/if}
	{#each $page.data.menu ?? [] as { title, submenu, path }}
		{#if path}
			{@const isCurrent = $page.url.pathname?.includes(path)}
			<a
				class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"
				class:active={isCurrent}
				aria-current={isCurrent ? 'page' : undefined}
				href="{$pathToRoot$}{path}"
			>
				{title}
			</a>
		{/if}
		{#if submenu}
			<CollapsibleSection headerText={title} path={submenu}>
				<div>
					{#each submenu as { label, status, path, subpath }}
						{@const isCurrent = $page.url.pathname?.includes(path)}
						<a
							class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"
							class:active={isCurrent}
							aria-current={isCurrent ? 'page' : undefined}
							href="{$pathToRoot$}{path}{subpath ?? ''}"
						>
							{label}
							{#if status === 'inprogress'}<span class="badge text-bg-warning">In progress</span>{/if}
							{#if status === 'beta'}<span class="badge text-bg-info">Beta</span>{/if}
						</a>
					{/each}
				</div>
			</CollapsibleSection>
		{/if}
	{/each}
</nav>

<style>
	.fwk-name {
		min-width: 65px;
		text-align: start;
	}
	.pkg-name {
		min-width: 80px;
		text-align: start;
	}
</style>
