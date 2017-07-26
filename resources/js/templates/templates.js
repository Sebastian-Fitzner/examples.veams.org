module.exports = function(Handlebars) {

window["App"] = window["App"] || {};
window["App"]["Templates"] = window["App"]["Templates"] || {};

window["App"]["Templates"]["OVERLAY"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"c-overlay--default\" data-css=\"c-overlay\" data-js-item=\"overlay\">\n	<div class=\"overlay__wrapper\">\n		<button class=\"overlay__close\" data-js-item=\"overlay-close\"></button>\n		<div class=\"overlay__content\">\n			<div class=\"overlay__inner\" data-js-item=\"overlay-content\">\n\n			</div>\n		</div>\n	</div>\n	<div class=\"overlay__mask\" data-js-item=\"overlay-mask\"></div>\n</div>";
},"useData":true});

window["App"]["Templates"]["TYPEAHEAD__ITEM"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#"
    + alias4(((helper = (helper = helpers.keyword || (depth0 != null ? depth0.keyword : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keyword","hash":{},"data":data}) : helper)))
    + "\" class=\"type-ahead__item-link\" data-js-atom=\"item-link\">"
    + alias4(((helper = (helper = helpers.keyword || (depth0 != null ? depth0.keyword : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keyword","hash":{},"data":data}) : helper)))
    + "</a>";
},"useData":true});

window["App"]["Templates"]["TYPEAHEAD"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.typeAheadContextClass || (depth0 != null ? depth0.typeAheadContextClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeAheadContextClass","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "default";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers.typeAheadClass || (depth0 != null ? depth0.typeAheadClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeAheadClass","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"c-type-ahead--"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.typeAheadContextClass : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.typeAheadClass : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-css=\"c-type-ahead\">\n	<ul class=\"type-ahead__list\" data-js-atom=\"type-ahead-list\"></ul>\n</div>";
},"useData":true});

return window["App"]["Templates"];

};