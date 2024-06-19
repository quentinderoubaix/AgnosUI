import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {getRoutes} from '../common/routes';
import {RouterProvider} from 'react-router-dom';
import {createStaticRouter} from 'react-router-dom/server';

const routes = getRoutes(import.meta.glob('./samples/*/*.route.tsx', {import: 'default'}));
const router = createStaticRouter(routes, {});

export function render() {
	const html = ReactDOMServer.renderToString(
		<React.StrictMode>
			<App components={components} />
		</React.StrictMode>,
	);
	return {html};
}
