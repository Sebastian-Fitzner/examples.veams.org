module.exports = function(Handlebars) {

window["App"] = window["App"] || {};
window["App"]["Templates"] = window["App"]["Templates"] || {};

window["App"]["Templates"]["CACCORDION__ITEM"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"accordion__item\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return ((stack1 = helpers.unless.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.accNoWrapper : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div class=\"accordion__header\">\n		<a href=\"#"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.accItemId : stack1), depth0))
    + "\"\n		   class=\"accordion__btn\"\n		   data-js-item=\"accordion-btn\" role=\"tab\"\n		   aria-controls=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.accItemId : stack1), depth0))
    + "\">\n			<span class=\"accordion__btn-inner\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.accButton : stack1), depth0))
    + "</span>\n		</a>\n	</div>\n	<div class=\"accordion__content\"\n	     id=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.accItemId : stack1), depth0))
    + "\"\n	     data-js-item=\"accordion-content\" role=\"tabpanel\"\n	     aria-labelledby=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.accItemId : stack1), depth0))
    + "\">\n		<div class=\"accordion__content-inner\">\n			"
    + ((stack1 = ((helper = (helper = helpers["yield"] || (depth0 != null ? depth0["yield"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"yield","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n"
    + ((stack1 = helpers.unless.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.accNoWrapper : stack1),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

window["App"]["Templates"]["CACCORDIONUSAGE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.wrapWith || (depth0 && depth0.wrapWith) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"c-accordion__item",{"name":"wrapWith","hash":{"accButton":(depth0 != null ? depth0.itemBtnText : depth0),"accItemId":(depth0 != null ? depth0.itemId : depth0)},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid assumenda, ducimus facilis inventore iste labore laborum libero nam necessitatibus neque nulla numquam perspiciatis rem, repudiandae sed soluta veniam vero.\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.wrapWith || (depth0 && depth0.wrapWith) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"c-accordion",{"name":"wrapWith","hash":{"settings":(depth0 != null ? depth0.settings : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

window["App"]["Templates"]["CACCORDION"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.accContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.accClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n     data-js-options='"
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.accJsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "'";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"c-accordion"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.accContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.accClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-css=\"c-accordion\"\n     data-js-module=\"accordion\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.accJsOptions : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " role=\"tablist\">\n	"
    + ((stack1 = ((helper = (helper = helpers["yield"] || (depth0 != null ? depth0["yield"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"yield","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</div>";
},"useData":true});

window["App"]["Templates"]["CARTICLE__FOOTER"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a class=\"article__footer-link\" href=\""
    + alias4(((helper = (helper = helpers.articleFooterLink || (depth0 != null ? depth0.articleFooterLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"articleFooterLink","hash":{},"data":data}) : helper)))
    + "\">\n	"
    + alias4(((helper = (helper = helpers.articleFooterLinkText || (depth0 != null ? depth0.articleFooterLinkText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"articleFooterLinkText","hash":{},"data":data}) : helper)))
    + "\n</a>";
},"useData":true});

window["App"]["Templates"]["CARTICLE__HEADER"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<time class=\"article__header-time\" datetime=\""
    + alias4(((helper = (helper = helpers.articleDatetime || (depth0 != null ? depth0.articleDatetime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"articleDatetime","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.articleDate || (depth0 != null ? depth0.articleDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"articleDate","hash":{},"data":data}) : helper)))
    + "</time>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<h1 class=\"article__header-headline\">"
    + container.escapeExpression(((helper = (helper = helpers.articleH1 || (depth0 != null ? depth0.articleH1 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"articleH1","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<h2 class=\"article__header-subline\">"
    + container.escapeExpression(((helper = (helper = helpers.articleH2 || (depth0 != null ? depth0.articleH2 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"articleH2","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<p class=\"article__header-intro\">"
    + container.escapeExpression(((helper = (helper = helpers.articleIntro || (depth0 != null ? depth0.articleIntro : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"articleIntro","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.articleDate : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.articleH1 : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.articleH2 : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.articleIntro : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

window["App"]["Templates"]["CARTICLEUSAGE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam architecto atque cupiditate dicta earum ex facilis harum incidunt, laboriosam officiis placeat quas recusandae, rerum, sit tempore tenetur. Impedit, velit.\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.wrapWith || (depth0 && depth0.wrapWith) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"c-article",{"name":"wrapWith","hash":{"content":(depth0 != null ? depth0.content : depth0),"settings":(depth0 != null ? depth0.settings : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

window["App"]["Templates"]["CARTICLE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.articleContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.articleClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<header class=\"article__header"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.articleHeaderClasses : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = container.invokePartial(partials["c-article__header"],((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.content : stack1)) != null ? stack1.articleHeader : stack1),{"name":"c-article__header","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		</header>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.articleHeaderClasses : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.articleContentClasses : stack1), depth0));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<footer class=\"article__footer "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.articleFooterClasses : stack1), depth0))
    + "\">\n"
    + ((stack1 = container.invokePartial(partials["c-article__footer"],((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.content : stack1)) != null ? stack1.articleFooter : stack1),{"name":"c-article__footer","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		</footer>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<article\n		class=\"c-article"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.articleContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.articleClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n		data-css=\"c-article\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.content : stack1)) != null ? stack1.articleHeader : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	<div class=\"article__content"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.articleContentClasses : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		"
    + ((stack1 = ((helper = (helper = helpers["yield"] || (depth0 != null ? depth0["yield"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"yield","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n	</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.content : stack1)) != null ? stack1.articleFooter : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</article>";
},"usePartial":true,"useData":true});

window["App"]["Templates"]["CBADGE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "	<h2 style=\"color: red\">Please provide a badge type!</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.setting : depth0)) != null ? stack1.badgeContextClass : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    return "--default";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.badgeClasses : stack1), depth0));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " is-"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.badgeType : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.badgeType : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<div class=\"c-badge"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.badgeContextClass : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.badgeClasses : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-css=\"c-badge\">\n	<span class=\"badge__content"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.badgeType : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.badgeContent : stack1), depth0))
    + "\n	</span>\n</div>";
},"useData":true});

window["App"]["Templates"]["CCOMPARER"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.comparerContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.classes : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	 data-js-options=\""
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.jsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "\"\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<!-- Top Layer -->\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.contentTop : depth0),{"name":"with","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<!-- Bottom Layer -->\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.contentBottom : depth0),{"name":"with","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div class=\"comparer__top-wrapper"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.backgroundColorClass : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depths[2] != null ? depths[2].settings : depths[2])) != null ? stack1.jsOptions : stack1)) != null ? stack1.isContentRight : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.program(15, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\">\n\n				<div class=\"comparer__top-container\" data-js-item=\"comparer-top-container\">\n\n					<!-- Handle Bar -->\n					<div class=\"comparer__handle-bar\" data-js-item=\"comparer-handle\"></div>\n\n					<!-- Handle -->\n					<div class=\"comparer__handle\" data-js-item=\"comparer-handle\">\n						<img src=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].handleIcon : depths[1]), depth0))
    + "\">\n					</div>\n\n					<!-- Top Content -->\n					<div class=\"comparer__top\">\n						<div class=\"comparer__top-content\" data-js-item=\"comparer-top-content\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.picture : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n						</div>\n					</div>\n				</div>\n			</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers.backgroundColorClass || (depth0 != null ? depth0.backgroundColorClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"backgroundColorClass","hash":{},"data":data}) : helper)));
},"13":function(container,depth0,helpers,partials,data) {
    return " is-right";
},"15":function(container,depth0,helpers,partials,data) {
    return " is-left";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "								<div class=\"comparer__picture\">\n									<img src=\""
    + container.escapeExpression(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"picture","hash":{},"data":data}) : helper)))
    + "\" alt=\"Image\"/>\n								</div>\n";
},"19":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div class=\"comparer__bottom-wrapper"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.backgroundColorClass : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depths[2] != null ? depths[2].settings : depths[2])) != null ? stack1.jsOptions : stack1)) != null ? stack1.isContentRight : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\">\n				<!-- Bottom Content -->\n				<div class=\"comparer__bottom\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.picture : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n				</div>\n			</div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<div class=\"comparer__picture\">\n							<img src=\""
    + container.escapeExpression(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"picture","hash":{},"data":data}) : helper)))
    + "\" alt=\"Image\"/>\n						</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"c-comparer"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.comparerContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.classes : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-js-module=\"comparer\"\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.jsOptions : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	 data-css=\"c-comparer\"\n>\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.content : depth0),{"name":"with","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true,"useDepths":true});

window["App"]["Templates"]["CCTA__CONTENT"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "	<span class=\"cta__icon\"></span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\n      data-js-item=\"cta-content\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "---\npublish: false\n---\n"
    + ((stack1 = (helpers.isnt || (depth0 && depth0.isnt) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.ctaIcon : stack1),false,{"name":"isnt","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<span class=\"cta__content\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.ctaContentJsItem : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.ctaContent : stack1), depth0))
    + "</span>";
},"useData":true});

window["App"]["Templates"]["CCTAUSAGE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-cta__content"],(depth0 != null ? depth0.content : depth0),{"name":"c-cta__content","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.wrapWith || (depth0 && depth0.wrapWith) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"c-cta",{"name":"wrapWith","hash":{"content":(depth0 != null ? depth0.content : depth0),"settings":(depth0 != null ? depth0.settings : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

window["App"]["Templates"]["CCTA"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "button";
},"3":function(container,depth0,helpers,partials,data) {
    return "a";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaContextClass : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return "--default";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaClass : stack1), depth0));
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " title=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.content : stack1)) != null ? stack1.ctaTitle : stack1), depth0))
    + "\"";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaTarget : stack1), depth0))
    + "\"";
},"15":function(container,depth0,helpers,partials,data) {
    return " target=\"_blank\"";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " data-js-item=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaJsItem : stack1), depth0))
    + "\"";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " data-js-module=\"cta\" data-js-options='"
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.jsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "'";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "---\npublish: false\n---\n\n<"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaButton : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n	class=\"c-cta"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaContextClass : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaClass : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n	data-css=\"c-cta\"\n	"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.content : stack1)) != null ? stack1.ctaTitle : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaTarget : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaDownload : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaJsItem : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaJsModule : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n	"
    + ((stack1 = ((helper = (helper = helpers["yield"] || (depth0 != null ? depth0["yield"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"yield","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.ctaButton : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ">";
},"useData":true});

window["App"]["Templates"]["CFIGURE__CAPTION"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<h3 class=\"figure__caption-headline\">"
    + container.escapeExpression(((helper = (helper = helpers.captionHeadline || (depth0 != null ? depth0.captionHeadline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"captionHeadline","hash":{},"data":data}) : helper)))
    + "</h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<p class=\"figure__caption-content\">"
    + container.escapeExpression(((helper = (helper = helpers.captionContent || (depth0 != null ? depth0.captionContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"captionContent","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"figure__caption-inner\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.captionHeadline : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.captionContent : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

window["App"]["Templates"]["CFIGURE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.figureContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.figureClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.figureId : stack1), depth0))
    + "\"";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.figurePicture : stack1),{"name":"c-picture","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(helpers.isObject || (depth0 && depth0.isObject) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.figureVideo : stack1),{"name":"isObject","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = container.invokePartial(partials["c-video"],((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.figureVideo : stack1),{"name":"c-video","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "			<h2 style=\"color: red\">Please provide a picture or video for your figure!</h2>\n		";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<figcaption class=\"figure__caption"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.figureCaptionClasses : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = container.invokePartial(partials["c-figure__caption"],((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.figureCaption : stack1),{"name":"c-figure__caption","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		</figcaption>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.figureCaptionClasses : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<figure class=\"c-figure"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.figureContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.figureClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n        data-css=\"c-figure\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.figureId : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n	<div class=\"figure__wrapper\">\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.isObject || (depth0 && depth0.isObject) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.figurePicture : stack1),{"name":"isObject","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "\n	</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.isObject || (depth0 && depth0.isObject) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.figureCaption : stack1),{"name":"isObject","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</figure>";
},"usePartial":true,"useData":true});

window["App"]["Templates"]["CFORMUSAGE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.fieldsets : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-form__fieldset"],depth0,{"name":"c-form__fieldset","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.wrapWith || (depth0 && depth0.wrapWith) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"c-form",{"name":"wrapWith","hash":{"settings":(depth0 != null ? depth0.settings : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

window["App"]["Templates"]["CFORM"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.formContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.formClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	  data-js-module=\"form-ajax\"\n		  "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.formJsOptions : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " data-js-options='{\n            "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.formJsOptions : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n         }'";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "\""
    + container.escapeExpression(((helper = (helper = helpers.optionsKey || (depth0 != null ? depth0.optionsKey : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"optionsKey","hash":{},"data":data}) : helper)))
    + "\": "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.optionsObject : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = helpers.optionsValue || (depth0 != null ? depth0.optionsValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"optionsValue","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.optionsObject : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(data && data.last),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "\"";
},"12":function(container,depth0,helpers,partials,data) {
    return "";
},"14":function(container,depth0,helpers,partials,data) {
    return ", ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<form class=\"c-form"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.formContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n	"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.formClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n      action=\"/"
    + alias3(alias2(((stack1 = ((stack1 = (data && data.root)) && stack1.metadata)) && stack1.country), depth0))
    + "/"
    + alias3(alias2(((stack1 = ((stack1 = (data && data.root)) && stack1.metadata)) && stack1.lang), depth0))
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.formAction : stack1), depth0))
    + "\"\n      method=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.formMethod : stack1), depth0))
    + "\"\n      data-css=\"c-form\"\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.formAjax : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n	"
    + ((stack1 = ((helper = (helper = helpers["yield"] || (depth0 != null ? depth0["yield"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"yield","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</form>";
},"useData":true});

window["App"]["Templates"]["OVERLAY"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"c-overlay--default\" data-css=\"c-overlay\" data-js-item=\"overlay\">\n	<div class=\"overlay__wrapper\">\n		<button class=\"overlay__close\" data-js-item=\"overlay-close\"></button>\n		<div class=\"overlay__content\">\n			<div class=\"overlay__inner\" data-js-item=\"overlay-content\">\n\n			</div>\n		</div>\n	</div>\n	<div class=\"overlay__mask\" data-js-item=\"overlay-mask\"></div>\n</div>";
},"useData":true});

window["App"]["Templates"]["COVERLAYUSAGE"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"c-cta--overlay\" data-css=\"c-cta\" title=\"Trigger overlay\" data-js-module=\"cta\" data-js-options='{\n	\"globalEvent\": \"overlay:open\", \"data\": \"<img src=\\\"http://placehold.it/600x350\\\" />\"\n	}'><span class=\"cta__content\">Trigger overlay</span></a>";
},"useData":true});

window["App"]["Templates"]["CPAGINATION"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pagContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pagClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<li class=\"pagination__list-item is-disabled\">\n				<strong class=\"pagination__list-element is-previous\"><span\n						class=\"is-hidden\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pagButtons : stack1)) != null ? stack1.description : stack1), depth0))
    + "</span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pagButtons : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\n				</strong>\n			</li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<li class=\"pagination__list-item\">\n				<a class=\"pagination__list-element is-next\" href=\"#\" title=\"One Page Forward\">\n					<span class=\"is-hidden\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pagButtons : stack1)) != null ? stack1.description : stack1), depth0))
    + "</span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pagButtons : stack1)) != null ? stack1.next : stack1), depth0))
    + "\n				</a>\n			</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"c-pagination"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pagContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pagClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-css=\"c-pagination\">\n	<ul class=\"pagination__list\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pagButtons : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<li class=\"pagination__list-item is-active\">\n			<span class=\"is-hidden\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pagCurrent : stack1), depth0))
    + "</span> <strong class=\"pagination__list-element\">1</strong>\n		</li>\n		<li class=\"pagination__list-item\">\n			<a class=\"pagination__list-element\" href=\"#\">2</a>\n		</li>\n		<li class=\"pagination__list-item\">\n			<a class=\"pagination__list-element\" href=\"#\">3</a>\n		</li>\n		<li class=\"pagination__list-item is-more\">\n			<a class=\"pagination__list-element\" href=\"#\">...</a>\n		</li>\n		<li class=\"pagination__list-item\">\n			<a class=\"pagination__list-element\" href=\"#\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pagMax : stack1), depth0))
    + "</a>\n		</li>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pagButtons : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</div>";
},"useData":true});

window["App"]["Templates"]["CPICTURE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pictureContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pictureClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return " lazyload";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<source "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depths[1] != null ? depths[1].settings : depths[1])) != null ? stack1.lazyload : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "srcset=\""
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.srcset : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n	        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sizes : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.media : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "data-";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.unless.call(alias1,(data && data.first),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression((helpers.getUrl || (depth0 && depth0.getUrl) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.src : depth0),{"name":"getUrl","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.imageWidth : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return ", ";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers.imageWidth || (depth0 != null ? depth0.imageWidth : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"imageWidth","hash":{},"data":data}) : helper)));
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " sizes=\""
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sizes : depth0),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers.unless.call(alias1,(data && data.first),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.screenWidth || (depth0 != null ? depth0.screenWidth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screenWidth","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.imageWidth || (depth0 != null ? depth0.imageWidth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageWidth","hash":{},"data":data}) : helper)));
},"20":function(container,depth0,helpers,partials,data) {
    var helper;

  return " media=\""
    + container.escapeExpression(((helper = (helper = helpers.media || (depth0 != null ? depth0.media : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"media","hash":{},"data":data}) : helper)))
    + "\"";
},"22":function(container,depth0,helpers,partials,data) {
    var helper;

  return " type=\""
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data}) : helper)))
    + "\"";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "		<img class=\"picture__image"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.lazyload : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" src=\""
    + alias2((helpers.getUrl || (depth0 && depth0.getUrl) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.fallbackSrc : stack1),{"name":"getUrl","hash":{},"data":data}))
    + "\" alt=\""
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n";
},"26":function(container,depth0,helpers,partials,data) {
    return "		<h3 style=\"color: red; font-weight: bold;\">Define a fallback picture!</h3>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<picture class=\"c-picture"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pictureContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n	"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pictureClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.lazyload : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-css=\"c-picture\">\n\n	<!--[if IE 9]><audio><![endif]-->\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<!--[if IE 9]></audio><![endif]-->\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.fallbackSrc : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.program(26, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</picture>";
},"useData":true,"useDepths":true});

window["App"]["Templates"]["CQUOTE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.quoteContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.quoteClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<cite class=\"quote__author\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.quoteAuthor : stack1), depth0))
    + "</cite>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"c-quote"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.quoteContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.quoteClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-css=\"c-quote\">\n	<blockquote class=\"quote__content\">\n		"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.quoteContent : stack1), depth0))
    + "\n	</blockquote>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.quoteAuthor : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

window["App"]["Templates"]["CRTE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.rteContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.rteClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return "		<h2 style=\"color: red\">Please provide a path to your markdown file!</h2>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.rteCWDLevelUp : stack1),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		"
    + ((stack1 = (helpers.markdown || (depth0 && depth0.markdown) || alias2).call(alias1,(helpers.buildPath || (depth0 && depth0.buildPath) || alias2).call(alias1,((stack1 = ((stack1 = (data && data.root)) && stack1.currentPage)) && stack1.dirname),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.rteMd : stack1),{"name":"buildPath","hash":{"goUp":((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.rteCWDLevelUp : stack1)},"data":data}),{"name":"markdown","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "			<h2 style=\"color: red\">You have to provide a level - default should be 0!</h2>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		"
    + ((stack1 = (helpers.markdown || (depth0 && depth0.markdown) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.rteMd : stack1),{"name":"markdown","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"c-rte"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.rteContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.rteClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-css=\"c-rte\">\n"
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.rteMd : stack1),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.rteCWD : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

window["App"]["Templates"]["SUGGESTIONS__A11Y"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li class=\"type-ahead__suggestion-item\" role=\"option\">\n		<a class=\"type-ahead__suggestion-link\" data-js-item=\"suggestion-item\" href=\"#\" data-value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" aria-controls=\""
    + alias4(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instanceId","hash":{},"data":data}) : helper)))
    + "\"\n			aria-expanded=\""
    + alias4(((helper = (helper = helpers.ariaExpanded || (depth0 != null ? depth0.ariaExpanded : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ariaExpanded","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.suggestionText || (depth0 != null ? depth0.suggestionText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"suggestionText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a>\n	</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.suggestions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

window["App"]["Templates"]["SUGGESTIONS__OPTIONS"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<option value=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.suggestions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

return window["App"]["Templates"];

};