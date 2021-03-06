// Global dependencies 
import $ from "jquery";
import 'lazysizes';
import Handlebars from 'handlebars/runtime';
import VeamsCore from 'veams/src/js/generics/core';
import VeamsLogger from 'veams/src/js/plugins/logger';
import VeamsDOM from 'veams/src/js/plugins/dom';
import VeamsVent from 'veams/src/js/plugins/vent';
import VeamsModules from 'veams/src/js/plugins/modules';
import VeamsMediaQueryHandler from 'veams/src/js/plugins/media-query-handler';
import VeamsTemplater from 'veams/src/js/plugins/templater';
import EVENTS from './utils/events';
import Templates from './templates/templates';

let App = {
	settings: {},
	version: '0.0.1'
};

let Veams = new VeamsCore();


// Veams
Veams.onInitialize(() => {
	/**
	 * Veams Plugins
	 */

	// Dom Plugin
	Veams.use(VeamsDOM, {
		DOM: $
	});

	// Vent Plugin
	Veams.use(VeamsVent, {
		furtherEvents: EVENTS
	});

	// Logger Plugin for devmode and logger
	Veams.use(VeamsLogger);

	// Module System Plugin
	Veams.use(VeamsModules, {
		useMutationObserver: true,
		internalCacheOnly: false
	});

	// Media Query Handler Plugin
	Veams.use(VeamsMediaQueryHandler);

	Veams.use(VeamsTemplater, {
		engine: Handlebars,
		templates: Templates
	});


	Veams.Vent.on('cta:alert', (obj) => {
		alert(obj.options.data);
	});

	// Custom Events

	// Trigger global resize event
	window.onscroll = Veams.helpers.throttle((e) => {
		Veams.Vent.trigger(Veams.EVENTS.scroll, e);
	}, 200);

	/**
	 * Devmode features
	 */
	if (Veams.devmode) {
		window.Veams = Veams;
	}
});

export {App, Veams};