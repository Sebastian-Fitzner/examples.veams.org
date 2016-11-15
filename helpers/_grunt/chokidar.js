module.exports = {
	express: {
		files: [
			'./server/**/*.js'
		],
		tasks: ['express:dev'],
		options: {
			spawn: false
		}
	},
	ajax: {
		files: '<%= paths.src %>/ajax/**/*.{json,html}',
		tasks: 'sync:ajax'
	},
	assets: {
		files: [
			'<%= paths.src %>/assets/**/*'
		],
		tasks: 'sync:assets'
	},
	scss: {
		files: [
			'<%= paths.src %>/scss/**/*.scss',
			'<%= paths.src %>/templating/mixed/**/*.scss'
		],
		tasks: [
			'sass:dev',
			'stylelint:scss'
		],
		options: {
			spawn: false
		}
	},
	universal: {
		files: '<%= paths.src %>/scss/universal.scss',
		tasks: 'sass:universal'
	}
};