var glob = require('globby');

(function () {
	module.exports.register = function (Handlebars, options) {
		/*
		 * Returns an array of files in a specific folder
		 * Returns Array
		 *
		 * @author Sebastian Fitzner
		 */
		Handlebars.registerHelper('glob', function (dir, obj) {
			var level = '/*';
			var fileExt = obj.hash.fileExt ? '.' + obj.hash.fileExt : '';
			if (obj.hash.deep) {
				level = '/**/*'
			}

			glob([dir + level + fileExt]).then(function (paths) {
				return obj.fn(paths);
			});
		});
	};
}).call(this);