(function (window, document, undefined) {
	let Handlebars = require('handlebars/runtime')['default'];
	require('./templates/templates')(Handlebars);
})(window, document);