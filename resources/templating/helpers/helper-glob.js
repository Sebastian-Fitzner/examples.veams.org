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
			if (obj.hash.deep) {
			}
			glob([dir + '/*']).then(function (paths) {
				return obj.fn(paths);
			});
		});
	};
}).call(this);