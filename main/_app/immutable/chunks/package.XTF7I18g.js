const t=`{
	"name": "@agnos-ui/core-bootstrap",
	"description": "Styles and widget interface extensions necessary to use AgnosUI with Bootstrap.",
	"version": "0.0.0",
	"private": true,
	"keywords": [
		"css",
		"scss"
	],
	"type": "module",
	"main": "./dist/index.cjs",
	"module": "./dist/index.js",
	"types": "./dist/index.d.ts",
	"exports": {
		".": {
			"types": "./dist/index.d.ts",
			"require": "./dist/index.cjs",
			"default": "./dist/index.js"
		},
		"./components/*": {
			"types": "./dist/components/*/index.d.ts",
			"require": "./dist/components/*/index.cjs",
			"default": "./dist/components/*/index.js"
		},
		"./config": {
			"types": "./dist/config.d.ts",
			"require": "./dist/config.cjs",
			"default": "./dist/config.js"
		},
		"./scss/agnosui.scss": {
			"require": "./src/scss/agnosui.scss",
			"default": "./src/scss/agnosui.scss"
		},
		"./css/agnosui.css": {
			"require": "./dist/css/agnosui.css",
			"default": "./dist/css/agnosui.css"
		}
	},
	"scripts": {
		"build": "wireit"
	},
	"wireit": {
		"build": {
			"command": "vite build && tsc -p tsconfig.build.json && node ../scripts/buildPackageJson.js . dist && sass src/scss/agnosui.scss dist/css/agnosui.css && copyfiles -u 1 src/scss/** dist",
			"files": [
				"src/**",
				"tsconfig.build.json",
				"../tsconfig.json",
				"vite.config.ts",
				"README.md"
			],
			"output": [
				"dist/**"
			],
			"dependencies": [
				"../core:build"
			]
		}
	},
	"files": [
		"scss",
		"css"
	],
	"devDependencies": {
		"copyfiles": "^2.4.1",
		"sass": "^1.74.1"
	},
	"dependencies": {
		"@agnos-ui/core": "0.0.0"
	},
	"peerDependencies": {},
	"sideEffects": false
}
`;export{t as default};