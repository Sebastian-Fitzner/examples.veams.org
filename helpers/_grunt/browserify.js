'use strict';

const externalLibs = [
	'veams-query',
	'handlebars',
	'picturefill',
	'lazysizes'
];

const internalLibs = [
	'./resources/js/app.js:app',
	'./resources/js/utils/events.js:events'
];

module.exports = {
	options: {
		transform: [
			['babelify',
				{
					compact: true,
					ignore: [
						'<%= paths.dev %>/js/vendor/'
					],
					presets: [
						['env', {
							targets: {
								browsers: ['last 2 versions', 'ie >= 11', 'iOS >= 10', 'Android >= 6']
							},
							useBuiltIns: false
						}
						],
						'stage-0'
					]
				}
			],
			['aliasify', {
				aliases: {},
				global: true,
				verbose: true
			}
			]
		],
		ignore: []
	},
	vendor: {
		src: ['.'],
		dest: '<%= paths.dev %>/js/vendor/libs.js',
		options: {
			debug: false,
			alias: externalLibs
		}
	},
	dev: {
		options: {
			alias: internalLibs,
			external: externalLibs,
			browserifyOptions: {
				debug: true
			},
			watch: true
		},
		files: {
			'<%= paths.dev %>/js/main.js': '<%= paths.src %>/js/main.js'
		}
	},
	dist: {
		options: {
			alias: internalLibs,
			external: externalLibs
		},
		files: {
			'<%= paths.dev %>/js/main.js': '<%= paths.src %>/js/main.js'
		}
	}
};