// Main Requirements
import {Veams} from 'app';

// ES6 Modules
import Nav from './modules/nav/nav';
import Accordion from '../templating/mixed/components/accordion/js/accordion';
import CTA from '../templating/mixed/components/cta/js/cta';
import FormAjax from '../templating/mixed/components/form/js/form-ajax';
import FormDatepicker from '../templating/mixed/components/form/js/form-datepicker';
import SlideFox from '../templating/mixed/components/slide-fox/js/slide-fox';
import Slider from '../templating/mixed/components/slider/js/slider';
import Overlay from '../templating/mixed/components/overlay/js/overlay';
import TypeAhead from '../templating/mixed/utilities/type-ahead/js/type-ahead';
import Toggler from '../templating/mixed/components/toggler/js/toggler';
import Comparer from '../templating/mixed/components/comparer/js/comparer';
// import Overlay from '../templating/mixed/blocks/overlay/js/overlay';
// @INSERTPOINT :: @ref: js-import

Veams.modules.register([
	/**
	 * Init Navigation
	 */
	{
		namespace: 'nav',
		module: Nav
	},
	/**
	 * Init CTA
	 */
	{
		namespace: 'cta',
		module: CTA
	},
	/**
	 * Init Accordion
	 */
	{
		namespace: 'accordion',
		module: Accordion
	},
	/**
	 * Init Form
	 */
	{
		namespace: 'form-ajax',
		module: FormAjax
	},
	/**
	 * Init Datepicker
	 */
	{
		namespace: 'form-datepicker',
		module: FormDatepicker
	},
	/**
	 * Init Slider
	 */
	{
		namespace: 'slide-fox',
		module: SlideFox
	},
	/**
	 * Init Slider
	 */
	{
		namespace: 'slider',
		module: Slider
	},
	/**
	 * Init Typeahead
	 */
	{
		namespace: 'type-ahead',
		module: TypeAhead
	},
	/**
	 * Init Toggler
	 */
	{
		namespace: 'toggler',
		module: Toggler
	},
	/**
	 * Init Comparer
	 */
	{
		namespace: 'comparer',
		module: Comparer
	}
// @INSERTPOINT :: @ref: js-init-v5
]);

new Overlay({
	appInstance: Veams
});

