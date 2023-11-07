const t=`{
	"name": "@agnos-ui/style-bootstrap",
	"description": "Scss and css files needed to style AgnosUI components not styled by Bootstrap",
	"keywords": [
		"style",
		"bootstrap",
		"scss",
		"css"
	],
	"scripts": {
		"build": "sass scss/agnosui.scss css/agnosui.css"
	},
	"files": [
		"scss",
		"css"
	],
	"license": "MIT",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"repository": {
		"type": "git",
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "style-bootstrap"
	},
	"devDependencies": {
		"sass": "^1.69.5"
	}
}
`;export{t as default};
