/**
 * Const for events (pub/sub)
 *
 * @author: Sebastian Fitzner
 */

let EVENTS = {
	focus: 'focus'
};

/**
 * Events Nav
 */
EVENTS.nav = {
	toggle: 'navigation:toggle'
};

/**
 * Events Accordion
 */
EVENTS.accordion = {
	openAll: 'accordion:openAll',
	closeAll: 'accordion:closeAll'
};

/**
 * Events Form
 */
EVENTS.form = {
	complete: 'form:complete',
	reset: 'form:reset'
};

/**
 * Events Overlay
 */
EVENTS.overlay = {
	open: 'overlay:open'
};

/**
 * Events for Toggler
 */
EVENTS.toggler = {
	open: 'toggler:open'
};

/**
 * Events for Typeahead
 */
EVENTS.typeahead = {
	suggestionChoosen: 'typeahead:suggestionChoosen'
};

// @INSERTPOINT :: @ref: js-events

export default EVENTS;