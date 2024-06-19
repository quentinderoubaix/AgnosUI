import React from 'react';
import ReactDOM from 'react-dom/client';
import {getRoutes} from '../common/routes';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import '@agnos-ui/common/demo.scss';
import '@agnos-ui/common/samples/links.scss';
import 'bootstrap/dist/css/bootstrap.css';
import '@agnos-ui/core-bootstrap/scss/agnosui.scss';

const routes = getRoutes(import.meta.glob('./samples/*/*.route.tsx', {import: 'default'}));
const router = createBrowserRouter(routes, {basename: '/react/samples/bootstrap'});

console.log(routes);

window.addEventListener('storage', (event) => {
	if (event.key === 'theme') {
		if (event.newValue) {
			document.documentElement.setAttribute('data-bs-theme', event.newValue);
		}
	}
});

ReactDOM.hydrateRoot(
	document.getElementById('root')!,
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
