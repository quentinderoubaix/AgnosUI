import type {InvalidTestCase} from '@typescript-eslint/rule-tester';
import {RuleTester} from '@typescript-eslint/rule-tester';
import type {TSESLint} from '@typescript-eslint/utils';
import {afterAll, describe, test} from 'vitest';
import {svelteCheckPropsRule} from '../src/svelte-check-props';
import svelteParser from 'svelte-eslint-parser';
import eslintPluginSvelte from 'eslint-plugin-svelte';

RuleTester.describe = describe;
RuleTester.it = test;
RuleTester.afterAll = afterAll;

describe('svelte-check-props', () => {
	const codeTemplate = (scriptContent: string, widgetProps: string, events = '{}') =>
		`<script lang="ts" context="module">\ninterface MyWidgetProps {\n${widgetProps}\n}\ninterface MyWidget {\n\tpatch(props: Partial<MyWidgetProps>): void\n}\nconst callWidgetFactory: (config: any) => MyWidget;\n</script><script lang="ts">\n${scriptContent}\nlet widget = callWidgetFactory({events:${events}});\n</script>`;

	const ruleTester = new RuleTester({
		plugins: {svelte: eslintPluginSvelte},
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: '@typescript-eslint/parser',
				project: './tsconfig.test.json',
				tsconfigRootDir: __dirname,
				extraFileExtensions: ['.svelte'],
			},
		},
	});
	type MessageIds<T extends TSESLint.RuleModule<any, any>> = T extends TSESLint.RuleModule<infer U, any> ? U : never;

	const invalid: (InvalidTestCase<MessageIds<typeof svelteCheckPropsRule>, []> & {outputError?: boolean})[] = [
		{
			name: 'extra prop',
			filename: 'file.svelte',
			code: codeTemplate('export let someProp: string | undefined;', ''),
			errors: [{messageId: 'extraProp', data: {name: 'someProp'}}],
			output: codeTemplate('', ''),
		},
		{
			name: 'extra props',
			filename: 'file.svelte',
			code: codeTemplate('export let someProp1: string | undefined, someProp2: string | undefined;', ''),
			errors: [
				{messageId: 'extraProp', data: {name: 'someProp1'}},
				{messageId: 'extraProp', data: {name: 'someProp2'}},
			],
			output: codeTemplate('', ''),
		},
		{
			name: 'extra prop among other props',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let someProp1: string | undefined, someProp2: string | undefined;',
				'someProp2: string; onSomeProp2Change: (event: string) => void;',
				'{onSomeProp2Change: (event) => {someProp2 = event;}}',
			),
			errors: [{messageId: 'extraProp', data: {name: 'someProp1'}}],
			output: codeTemplate(
				'export let  someProp2: string | undefined;',
				'someProp2: string; onSomeProp2Change: (event: string) => void;',
				'{onSomeProp2Change: (event) => {someProp2 = event;}}',
			),
		},
		{
			name: 'extra props amoung other props',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let someProp1: string | undefined, someProp2: string | undefined, someProp3: string | undefined;',
				'someProp2: string; onSomeProp2Change: (event: string) => void;',
				'{onSomeProp2Change: (event) => {someProp2 = event;}}',
			),
			errors: [
				{messageId: 'extraProp', data: {name: 'someProp1'}},
				{messageId: 'extraProp', data: {name: 'someProp3'}},
			],
			output: codeTemplate(
				'export let  someProp2: string | undefined;',
				'someProp2: string; onSomeProp2Change: (event: string) => void;',
				'{onSomeProp2Change: (event) => {someProp2 = event;}}',
			),
		},
		{
			name: 'yet another extra prop',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let someProp1: string | undefined, someProp2: string | undefined;',
				'someProp1: string; onSomeProp1Change: (event: string) => void;',
				'{onSomeProp1Change: (event) => {someProp1 = event;}}',
			),
			errors: [{messageId: 'extraProp', data: {name: 'someProp2'}}],
			output: codeTemplate(
				'export let someProp1: string | undefined;',
				'someProp1: string; onSomeProp1Change: (event: string) => void;',
				'{onSomeProp1Change: (event) => {someProp1 = event;}}',
			),
		},
		{
			name: 'yet another extra props',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let someProp1: string | undefined, someProp2: string | undefined, someProp3: string | undefined;',
				'someProp1: string; onSomeProp1Change: (event: string) => void;',
				'{onSomeProp1Change: (event) => {someProp1 = event;}}',
			),
			errors: [
				{messageId: 'extraProp', data: {name: 'someProp2'}},
				{messageId: 'extraProp', data: {name: 'someProp3'}},
			],
			output: codeTemplate(
				'export let someProp1: string | undefined;',
				'someProp1: string; onSomeProp1Change: (event: string) => void;',
				'{onSomeProp1Change: (event) => {someProp1 = event;}}',
			),
		},
		{
			name: 'so many extra props',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let someProp1: string | undefined, someProp2: string | undefined, someProp3: string | undefined, someProp4: string | undefined;',
				'someProp1: string; onSomeProp1Change: (event: string) => void;',
				'{onSomeProp1Change: (event) => {someProp1 = event;}}',
			),
			errors: [
				{messageId: 'extraProp', data: {name: 'someProp2'}},
				{messageId: 'extraProp', data: {name: 'someProp3'}},
				{messageId: 'extraProp', data: {name: 'someProp4'}},
			],
			output: codeTemplate(
				'export let someProp1: string | undefined;',
				'someProp1: string; onSomeProp1Change: (event: string) => void;',
				'{onSomeProp1Change: (event) => {someProp1 = event;}}',
			),
		},
		{
			name: 'extra extra extra props',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let someProp1: string | undefined, someProp2: string | undefined, someProp3: string | undefined, someProp4: string | undefined;',
				'someProp1: string; onSomeProp1Change: (event: string) => void; someProp3: string; onSomeProp3Change: (event: string) => void;',
				'{onSomeProp1Change: (event) => {someProp1 = event;}, onSomeProp3Change: (event) => {someProp3 = event;}}',
			),
			errors: [
				{messageId: 'extraProp', data: {name: 'someProp2'}},
				{messageId: 'extraProp', data: {name: 'someProp4'}},
			],
			output: codeTemplate(
				'export let someProp1: string | undefined,  someProp3: string | undefined;',
				'someProp1: string; onSomeProp1Change: (event: string) => void; someProp3: string; onSomeProp3Change: (event: string) => void;',
				'{onSomeProp1Change: (event) => {someProp1 = event;}, onSomeProp3Change: (event) => {someProp3 = event;}}',
			),
		},
		{
			name: 'missing bound prop',
			filename: 'file.svelte',
			code: codeTemplate('', 'someProp: string; onSomePropChange: (event: string) => void;', '{onSomePropChange: (event) => {someProp = event;}}'),
			errors: [{messageId: 'missingBoundProp', data: {name: 'someProp'}}],
			output: codeTemplate(
				'\nexport let someProp: string | undefined = undefined;',
				'someProp: string; onSomePropChange: (event: string) => void;',
				'{onSomePropChange: (event) => {someProp = event;}}',
			),
		},
		{
			name: 'missing bound prop in api',
			filename: 'file.svelte',
			code: codeTemplate(
				'let someProp: string | undefined;',
				'onSomePropChange: (event: string) => void;',
				'{onSomePropChange: (event) => {someProp = event;}}',
			),
			errors: [{messageId: 'missingBoundPropInAPI', data: {name: 'someProp'}}],
		},
		{
			name: 'extra prop + missing bound prop',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let someProp: string | undefined;',
				'onSomePropChange: (event: string) => void;',
				'{onSomePropChange: (event) => {someProp = event;}}',
			),
			errors: [
				{messageId: 'extraProp', data: {name: 'someProp'}},
				{messageId: 'missingBoundPropInAPI', data: {name: 'someProp'}},
			],
			output: codeTemplate('', 'onSomePropChange: (event: string) => void;', '{onSomePropChange: (event) => {someProp = event;}}'),
			outputError: true,
		},
		{
			name: 'invalid prop type',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let someProp: string;',
				'someProp: string; onSomePropChange: (event: string) => void;',
				'{onSomePropChange: (event) => {someProp = event;}}',
			),
			errors: [{messageId: 'invalidPropType', data: {name: 'someProp', expectedType: 'string | undefined', foundType: 'string'}}],
			output: codeTemplate(
				'export let someProp: string | undefined;',
				'someProp: string; onSomePropChange: (event: string) => void;',
				'{onSomePropChange: (event) => {someProp = event;}}',
			),
		},
		{
			name: 'invalid string or undefined prop type',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let someProp: string | undefined;',
				'someProp: number; onSomePropChange: (event: number) => void;',
				'{onSomePropChange: (event) => {someProp = event;}}',
			),
			errors: [{messageId: 'invalidPropType', data: {name: 'someProp', expectedType: 'number | undefined', foundType: 'string | undefined'}}],
			output: codeTemplate(
				'export let someProp: number | undefined;',
				'someProp: number; onSomePropChange: (event: number) => void;',
				'{onSomePropChange: (event) => {someProp = event;}}',
			),
		},
		{
			name: 'invalid untyped prop',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let someProp;',
				'someProp: number; onSomePropChange: (event: number) => void;',
				'{onSomePropChange: (event) => {someProp = event;}}',
			),
			errors: [{messageId: 'invalidPropType', data: {name: 'someProp', expectedType: 'number | undefined', foundType: 'any'}}],
			output: codeTemplate(
				'export let someProp: number | undefined;',
				'someProp: number; onSomePropChange: (event: number) => void;',
				'{onSomePropChange: (event) => {someProp = event;}}',
			),
		},
		{
			name: 'missing binding assignment',
			filename: 'file.svelte',
			code: codeTemplate('export let something: number | undefined;', 'onSomethingChange: (event: number) => void;\nsomething: number;'),
			errors: [{messageId: 'missingBindingAssignment', data: {propBinding: 'something', widgetProp: 'onSomethingChange'}}],
			output: codeTemplate(
				'export let something: number | undefined;',
				'onSomethingChange: (event: number) => void;\nsomething: number;',
				'{\n\tonSomethingChange: (event) => {\n\t\tsomething = event;\n\t},}',
			),
		},
		{
			name: 'another missing binding assignment',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let something: number | undefined;',
				'onSomethingChange: (event: number) => void;\nsomething: number;',
				'{\n\tother: 5,\n}',
			),
			errors: [{messageId: 'missingBindingAssignment', data: {propBinding: 'something', widgetProp: 'onSomethingChange'}}],
			output: codeTemplate(
				'export let something: number | undefined;',
				'onSomethingChange: (event: number) => void;\nsomething: number;',
				'{\n\tonSomethingChange: (event) => {\n\t\tsomething = event;\n\t},\n\tother: 5,\n}',
			),
		},
		{
			name: 'yet another missing binding assignment',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let something: number | undefined;',
				'onSomethingChange: (event: number) => void;\nsomething: number;',
				'{\n\tonSomethingChange: (evt) => {\n\t\tsomethingElse(evt);\n\t},\n}',
			),
			errors: [{messageId: 'missingBindingAssignment', data: {propBinding: 'something', widgetProp: 'onSomethingChange'}}],
			output: codeTemplate(
				'export let something: number | undefined;',
				'onSomethingChange: (event: number) => void;\nsomething: number;',
				'{\n\tonSomethingChange: (evt) => {\n\t\tsomethingElse(evt);\n\t\n\t\tsomething = evt;\n\t},\n}',
			),
		},
		{
			name: 'yet yet another missing binding assignment',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let something: number | undefined;',
				'onSomethingChange: (event: number) => void;\nsomething: number;',
				'{\n\tonSomethingChange: (evt) => {\n\t\t\n\t},\n}',
			),
			errors: [{messageId: 'missingBindingAssignment', data: {propBinding: 'something', widgetProp: 'onSomethingChange'}}],
			output: codeTemplate(
				'export let something: number | undefined;',
				'onSomethingChange: (event: number) => void;\nsomething: number;',
				'{\n\tonSomethingChange: (evt) => {\n\t\t\n\t\n\t\tsomething = evt;\n\t},\n}',
			),
		},
		{
			name: 'yet yet yet another missing binding assignment',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let something: number | undefined;',
				'onSomethingChange: (event: number) => void;\nsomething: number;',
				'{\n\tonSomethingChange: (evt) => callSomething(),\n}',
			),
			errors: [{messageId: 'missingBindingAssignment', data: {propBinding: 'something', widgetProp: 'onSomethingChange'}}],
			output: codeTemplate(
				'export let something: number | undefined;',
				'onSomethingChange: (event: number) => void;\nsomething: number;',
				'{\n\tonSomethingChange: (event) => {\n\t\tsomething = event;\n\t},\n}',
			),
		},
		{
			name: 'why so many missing binding assignments',
			filename: 'file.svelte',
			code: codeTemplate(
				'export let something: number | undefined;',
				'onSomethingChange: (event: number) => void;\nsomething: number;',
				'{\n\tonSomethingChange: undefined,\n}',
			),
			errors: [{messageId: 'missingBindingAssignment', data: {propBinding: 'something', widgetProp: 'onSomethingChange'}}],
			output: codeTemplate(
				'export let something: number | undefined;',
				'onSomethingChange: (event: number) => void;\nsomething: number;',
				'{\n\tonSomethingChange: (event) => {\n\t\tsomething = event;\n\t},\n}',
			),
		},
	];

	ruleTester.run('svelte-check-props', svelteCheckPropsRule, {
		valid: [
			{
				name: 'empty code',
				code: '',
			},
			{
				name: 'ignore widget in context module',
				code: '<script lang="ts" context="module">const widget = {patch(items: Partial<{onSomething: (event: number) => {}}>) {}};</script>',
			},
			{
				name: 'no props',
				code: codeTemplate('', ''),
			},
			{
				name: 'just one event prop',
				filename: 'file.svelte',
				code: codeTemplate('', 'onSomething: (event: number) => void;'),
			},
			{
				name: 'a prop with its associated event prop',
				filename: 'file.svelte',
				code: codeTemplate(
					'export let something: number | undefined;',
					'onSomethingChange: (event: number) => void;\nsomething: number;',
					'{\n\tonSomethingChange: (event) => something = event,\n}',
				),
			},
			...invalid
				.filter(({output, outputError}) => !!output && !outputError)
				.map(({output, name}) => ({
					name: `fix: ${name}`,
					code: Array.isArray(output!) ? output.join('') : output!,
				})),
		],
		invalid: invalid.map(({outputError, ...testCase}) => testCase),
	});
});
