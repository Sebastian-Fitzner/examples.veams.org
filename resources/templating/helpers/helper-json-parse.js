(function () {
	module.exports.register = function (Handlebars, options) {
		/*
		 * Returns a JSON object
		 *
		 * @type Inline-Helper
		 *
		 * @author Sebastian Fitzner
		 */
		Handlebars.registerHelper('JSONParse', function (data) {
			return JSON.parse(data);
		});
	};
}).call(this);