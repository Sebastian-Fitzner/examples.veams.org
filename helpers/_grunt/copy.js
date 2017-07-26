module.exports = {
	ajax: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/templating/mixed',
				src: [
					'**/ajax/*'
				],
				dest: '<%= paths.dev %>/ajax',
				flatten: true,
				filter: 'isFile',
				expand: true
			}
		]
	},
	dist: {
		cwd: '<%= paths.dev %>/',
		dest: '<%= paths.dist %>',
		expand: true,
		src: ['**']
	}
};