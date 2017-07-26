/**
 * Represents a view.
 * @class Nav
 *
 * Use the get keyword to make our methods serve as getters for a property.
 * This means they will be accessible as properties, but defined as methods,
 * retaining compatibility with any existing references if you're converting existing code.
 *
 * @author
 */

import {App, Veams} from 'app';
import VeamsComponent from 'veams/src/js/common/component';

const $ = Veams.$;

// Creates a new view class object
class Nav extends VeamsComponent {
	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			activeClass: 'is-active',
			scrollClass: 'isnt-scrollable',
			navItems: '[data-js-item="nav-item"]'
		};

		super(obj, options);
	}

	initialize(obj) {
		this.offset = App.settings.height;
	}

	/**
	 * Bind all events
	 */
	bindEvents() {
		this.$el.on('click touchstart', this.options.navItems, this.toggleNavigation.bind(this));
		Veams.Vent.on(Veams.EVENTS.nav.toggle, this.toggleNavigation.bind(this))
	}

	// Renders the view's template to the UI
	render() {
		this.$el.css({
			top: this.offset
		});

		// Maintains chainability
		return this;
	}

	toggleNavigation(e) {
		if (this.$el.hasClass(this.options.activeClass)) {
			this.$el.removeClass(this.options.activeClass);
			$('body').removeClass(this.options.scrollClass);
		} else {
			this.$el.addClass(this.options.activeClass);
			$('body').addClass(this.options.scrollClass);
		}
	}
}

// Returns the view class
export default Nav;