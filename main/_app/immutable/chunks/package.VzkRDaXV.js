const t=`{
	"name": "@agnos-ui/react",
	"type": "module",
	"main": "./index.cjs",
	"module": "./index.js",
	"types": "./index.d.ts",
	"exports": {
		".": {
			"types": "./index.d.ts",
			"require": "./dist/index.cjs",
			"default": "./index.js"
		},
		"./components/*": {
			"types": "./components/*/index.d.ts",
			"require": "./dist/components/*/index.cjs",
			"default": "./components/*/index.js"
		},
		"./config": {
			"types": "./generated/config.d.ts",
			"require": "./dist/generated/config.cjs",
			"default": "./generated/config.js"
		},
		"./slot": {
			"types": "./generated/slot.d.ts",
			"require": "./dist/generated/slot.cjs",
			"default": "./generated/slot.js"
		},
		"./types": {
			"types": "./generated/types.d.ts",
			"require": "./dist/generated/types.cjs",
			"default": "./generated/types.js"
		},
		"./services/*": {
			"types": "./generated/services/*.d.ts",
			"require": "./dist/generated/services/*.cjs",
			"default": "./generated/services/*.js"
		},
		"./services/transitions/*": {
			"types": "./generated/services/transitions/*.d.ts",
			"require": "./dist/generated/services/transitions/*.cjs",
			"default": "./generated/services/transitions/*.js"
		},
		"./utils/*": {
			"types": "./generated/utils/*.d.ts",
			"require": "./dist/generated/utils/*.cjs",
			"default": "./generated/utils/*.js"
		}
	},
	"dependencies": {
		"@agnos-ui/react-headless": "",
		"@agnos-ui/style-bootstrap": "",
		"classnames": "^2.5.1"
	},
	"peerDependencies": {
		"@amadeus-it-group/tansu": "*",
		"react": "*",
		"react-dom": "*"
	},
	"sideEffects": false,
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "react/lib"
	},
	"keywords": [
		"react",
		"components",
		"widgets",
		"accordion",
		"alert",
		"modal",
		"pagination",
		"rating",
		"slider"
	]
}`;export{t as default};
