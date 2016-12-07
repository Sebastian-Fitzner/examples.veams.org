// Main Requirements
import App from 'app';
const Helpers = App.Helpers;

// ES6 Modules
import Nav from './modules/nav/nav';
import Accordion from '../templating/mixed/components/accordion/js/accordion';
import FormAjax from '../templating/mixed/components/form/js/form-ajax';
import FormDatepicker from '../templating/mixed/components/form/js/form-datepicker';
import CTA from '../templating/mixed/components/cta/js/cta';


// @INSERTPOINT :: @ref: js-import

// Vars
const $ = App.$;

'use strict';

// Main Functionality
class Core {
	constructor() {
		this.initialize();
	}

	/**
	 * Initialize our core functionality
	 * This function will only be executed once.
	 */
	initialize() {
		console.log('App initialized with version: ', App.version);

		/**
		 * Detect Touch
		 */
		if (!App.support.touch) {
			$('html').addClass('no-touch');
		} else {
			$('html').addClass('touch');
		}

		// Redirect
		App.Vent.on(App.EVENTS.DOMredirect, (obj) => {
			if (!obj && !obj.url) throw new Error('Object is not defined. Please provide an url in your object!');

			// Redirect to page
			window.location.href = String(obj.url);
		});

		/**
		 * Save settings in App
		 */
		App.settings = {};

		/**
		 * Init overlay
		 */
		// new Overlay();

		// @INSERTPOINT :: @ref: js-init-once-v3

		// CUSTOM
		App.Vent.on('cta:alert', (obj) => {
			alert(obj.options.data);
		});

	}

	preRender() {
		Helpers.saveDOM();
	}

	render(context) {
		/**
		 * Init Navigation
		 */
		Helpers.loadModule({
			domName: 'cta',
			module: CTA,
			context: context
		});
		/**
		 * Init Navigation
		 */
		Helpers.loadModule({
			domName: 'nav',
			module: Nav,
			context: context
		});

		/**
		 * Init Accordion
		 */
		Helpers.loadModule({
			domName: 'accordion',
			module: Accordion,
			context: context
		});

		/**
		 * Init Form
		 */
		Helpers.loadModule({
			domName: 'form-ajax',
			module: FormAjax,
			context: context
		});

		/**
		 * Init Datepicker
		 */
		Helpers.loadModule({
			domName: 'form-datepicker',
			module: FormDatepicker,
			context: context
		});


		// @INSERTPOINT :: @ref: js-init-v3

	}
}

document.addEventListener("DOMContentLoaded", function () {
	let core = new Core();

	/**
	 * Render modules
	 */
	core.preRender();
	core.render(document);

	/**
	 * Initialize modules which are loaded after initial load
	 * via custom event 'DOMchanged'
	 */
	App.Vent.on(App.EVENTS.DOMchanged, (context) => {
		console.log('Dom has changed. Initialising new modules in: ', context);
		core.preRender();
		core.render(context);
	});
});