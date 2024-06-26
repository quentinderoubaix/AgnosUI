import {ProjectParser} from 'typedoc-json-parser';
import type {ClassParser, EnumParser, FunctionParser, InterfaceParser, TypeAliasParser, VariableParser} from 'typedoc-json-parser';

const typedocFiles = import.meta.glob<ProjectParser.Json>(
	['../../../../(angular|react|svelte)/(headless|bootstrap)/generated/*.json', '../../../../core/generated/core.json'],
	{query: '?json', eager: true, import: 'default'},
);

function getProject(framework: string, type: string) {
	const pathFile = `../../../../${type !== 'core' ? framework + '/' : ''}${type}/generated/${type !== 'core' ? framework + '-' : ''}${type}.json`;
	if (typedocFiles[pathFile]) {
		return new ProjectParser({data: typedocFiles[pathFile]});
	} else {
		throw new Error('');
	}
}

const regexComponent = /\/src\/(generated\/)?components\/([^/]+)/;
const regexTransitions = /\/src\/(generated\/)?services\/transitions($|\/)/;
const regexService = /\/src\/(generated\/)?services($|\/)/;
const regexUtil = /\/src\/(generated\/)?utils($|\/)/;

export function listTypedocPages(framework: string, type: string) {
	const project = getProject(framework, type);
	let allDocs: (ClassParser | EnumParser | FunctionParser | InterfaceParser | TypeAliasParser | VariableParser)[] = [];
	allDocs.push(...project.classes);
	allDocs.push(...project.enums);
	allDocs.push(...project.functions);
	allDocs.push(...project.interfaces);
	allDocs.push(...project.typeAliases);
	allDocs.push(...project.variables);

	const components = new Set<string>();
	const services = new Set<string>();
	const transitions = new Set<string>();
	const utils = new Set<string>();

	for (const doc of allDocs) {
		console.log(doc.name);
		const matchComp = doc.source!.path.match(regexComponent);
		if (matchComp) {
			const componentName = doc.source!.file.substring(0, doc.source!.file.indexOf('.'));
			components.add(componentName.endsWith('.gen') ? componentName.slice(0, -4) : componentName);
		}
		const matchTransition = doc.source!.path.match(regexTransitions);
		const matchService = doc.source!.path.match(regexService);
		if (matchTransition) {
			transitions.add(doc.source!.file.substring(0, doc.source!.file.indexOf('.')));
		} else if (matchService) {
			services.add(doc.source!.file.substring(0, doc.source!.file.indexOf('.')));
		}
		const matchUtils = doc.source!.path.match(regexUtil);
		if (matchUtils) {
			utils.add(doc.source!.file.substring(0, doc.source!.file.indexOf('.')));
		}
		if (!matchComp && !matchService && !matchUtils) {
			console.error(`What is this ? ${doc.source!.path} ${doc.name}`);
		}
	}
	return [
		{
			name: 'README',
			path: 'readme',
			content: project.readme,
		},
		{
			name: 'TBD',
			path: 'tbd',
		},
		{
			name: 'Config',
			path: 'config',
		},
		{
			name: 'Slot',
			path: 'slot',
		},
		{
			name: 'Components',
			files: [...components].sort().map((component) => ({
				label: component.slice(0, 1).toUpperCase() + component.slice(1),
				path: `api/${framework}/${type}/components/${component}`,
			})),
		},
		{
			name: 'Services',
			files: [...services].sort().map((service) => ({
				label: service,
				path: `api/${framework}/${type}/services/${service}`,
			})),
		},
		{
			name: 'Transitions',
			files: [...transitions].sort().map((transition) => ({
				label: transition,
				path: `api/${framework}/${type}/transitions/${transition}`,
			})),
		},
		{
			name: 'Utils',
			files: [...utils].sort().map((util) => ({
				label: util,
				path: `api/${framework}/${type}/utils/${util}`,
			})),
		},
	];
}
