module.exports = function(Handlebars) {

window["App"] = window["App"] || {};
window["App"]["Templates"] = window["App"]["Templates"] || {};

window["App"]["Templates"]["OVERLAY"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"c-overlay--default\" data-css=\"c-overlay\" data-js-item=\"overlay\">\r\n	<div class=\"overlay__wrapper\">\r\n		<button class=\"overlay__close\" data-js-item=\"overlay-close\"></button>\r\n		<div class=\"overlay__content\">\r\n			<div class=\"overlay__inner\" data-js-item=\"overlay-content\">\r\n\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class=\"overlay__mask\" data-js-item=\"overlay-mask\"></div>\r\n</div>";
},"useData":true});

window["App"]["Templates"]["SUGGESTIONS__A11Y"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li class=\"type-ahead__suggestion-item\" role=\"option\">\r\n		<a class=\"type-ahead__suggestion-link\" data-js-item=\"suggestion-item\" href=\"#\" data-value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" aria-controls=\""
    + alias4(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instanceId","hash":{},"data":data}) : helper)))
    + "\"\r\n			aria-expanded=\""
    + alias4(((helper = (helper = helpers.ariaExpanded || (depth0 != null ? depth0.ariaExpanded : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ariaExpanded","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.suggestionText || (depth0 != null ? depth0.suggestionText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"suggestionText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a>\r\n	</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.suggestions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

window["App"]["Templates"]["SUGGESTIONS__OPTIONS"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<option value=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.suggestions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

return window["App"]["Templates"];

};