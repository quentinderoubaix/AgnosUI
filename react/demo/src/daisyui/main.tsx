import React from 'react';
import ReactDOM from 'react-dom/client';
import {getRoutes} from '../common/routes';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import '@agnos-ui/common/demo.scss';
import '@agnos-ui/common/samples/links.scss';
import './app.css';

const routes = getRoutes(import.meta.glob('./samples/*/*.route.tsx', {import: 'default'}));
const router = createBrowserRouter(routes);

window.addEventListener('storage', (event) => {
	if (event.key === 'theme') {
		if (event.newValue) {
			document.documentElement.setAttribute('data-theme', event.newValue);
		}
	}
});

ReactDOM.hydrateRoot(
	document.getElementById('root')!,
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
