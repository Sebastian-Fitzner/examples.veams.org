var config = require('../config');

module.exports = {
	options: {
		allow: {
			YFMLayout: true,
			YFMContextData: true
		},
		collections: [
			'type', 'sitemap'
		],
		cwd: config.options.paths.src + '/templating/',
		dest: config.options.paths.dev,
		exportData: true,
		types: {
			data: {
				dir: '',
				files: [
					'data/**/*.json',
					'data/**/*.hjson',
					'partials/**/*.json',
					'partials/**/*.hjson',
					'mixed/**/*.json',
					'mixed/**/*.hjson'
				]
			},
			partials: {
				dir: '',
				files: [
					'mixed/utilities/**/*.hbs',
					'mixed/components/**/*.hbs',
					'partials/**/*.hbs'
				]
			},
			pages: {
				dir: 'mixed',
				files: [
					'**/*.hbs'
				]
			},
			layouts: {
				dir: 'layouts',
				files: [
					'**/*.hbs'
				]
			}
		},
		helpers: [
			'helpers/*.js'
		]
	},
	dev: { // IMPORTANT: When using Mangony in grunt-express the dev task will be executed in the server script
		options: { // If you want to speed up your development process set compileStaticFiles to false and activate devServer.start
			compileStaticFiles: false,
			devServer: {
				start: true,
				injectScript: false,
				port: config.options.ports.server,
				bsOptions: {
					proxy: 'localhost:' + config.options.ports.server,
					port: config.options.ports.app,
					files: [
						config.options.paths.dev + '/**/*.html',
						config.options.paths.dev + '/css/**/*.css',
						config.options.paths.dev + '/js/**/*.js'
					]
				}
			},
			watch: true
		}
	},
	dist: {
		options: {
			compileStaticFiles: true,
			watch: false
		}
	}
};