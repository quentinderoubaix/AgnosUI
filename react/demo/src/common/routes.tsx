import {Outlet} from 'react-router-dom';

const componentRegExp = /samples\/([^/]*)\/([^/]*).route.tsx/;
function replacePattern(components: Record<string, any>) {
	const directComponents: Record<string, any> = {};
	for (const [key, component] of Object.entries(components)) {
		const matches = key.match(componentRegExp);
		if (matches) {
			directComponents[`${matches[1]}/${matches[2]}`.toLowerCase()] = component;
		}
	}
	return directComponents;
}

export const getRoutes = (componentsMap: Record<string, any>) => {
	const components = replacePattern(componentsMap);
	const lazyLinks = async () => {
		const Links = (await import('./Links')).default;
		return {
			Component: () => Links({links: Object.keys(components)}),
		};
	};
	console.log(Object.entries(components).map(([path]) => path));

	return [
		{
			path: '/',
			element: <Outlet />,
			children: [
				{path: '', lazy: lazyLinks},
				...Object.entries(components).map(([path, component]) => ({
					path,
					lazy: async () => {
						const Component = await component();
						if (window.parent) {
							window.parent.postMessage({type: 'sampleload'});
						}
						return {Component};
					},
				})),
				{
					path: '*',
					lazy: async () => ({Component: ((await import('./Page404')) as any).default}),
				},
			],
		},
	];
};
