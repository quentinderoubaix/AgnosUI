import {readFile, writeFile, rm} from 'fs/promises';
import {join} from 'path';
import {glob} from 'glob';

const manifest = JSON.parse(await readFile('dist/.vite/ssr-manifest.json', 'utf-8'));
const template = await readFile(join(import.meta.dirname, 'dist/bootstrap/index.html'), 'utf-8');
const {render} = await import('./dist-server/bootstrap/server.js');

// determine routes to pre-render from src/pages
const routesToPrerender = (await glob('**/*.route.tsx', {cwd: join(import.meta.dirname, 'src/bootstrap/samples')})).map(
	(route) => '/' + route.slice(0, -10).toLowerCase(),
);
routesToPrerender.push('/');

for (const url of routesToPrerender) {
	const {head, html} = render(url, manifest);

	const prerenderedTemplate = template.replace(`<!--app-head-->`, head).replace(`<!--app-html-->`, html);

	const filePath = `dist/bootstrap${url === '/' ? '/index' : url}.html`;
	await writeFile(join(import.meta.dirname, filePath), prerenderedTemplate);
}

await rm(join(import.meta.dirname, 'dist/.vite'), {recursive: true});
