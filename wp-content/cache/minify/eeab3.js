/**
 * This script adds the accessibility-ready responsive menus Genesis Framework child themes.
 *
 * @author StudioPress
 * @link https://github.com/copyblogger/responsive-menus
 * @version 1.1.2
 * @license GPL-2.0+
 */
var genesisMenuParams="undefined"===typeof genesis_responsive_menu?"":genesis_responsive_menu,genesisMenusUnchecked=genesisMenuParams.menuClasses,genesisMenus={},menusToCombine=[];
(function(m,b,w){function n(){var a=b('button[id^="genesis-mobile-"]').attr("id");if("undefined"!==typeof a){"none"===k(a)&&(b(".menu-toggle, .genesis-responsive-menu .sub-menu-toggle").removeClass("activated").attr("aria-expanded",!1).attr("aria-pressed",!1),b(".genesis-responsive-menu, genesis-responsive-menu .sub-menu").attr("style",""));var d=b(".genesis-responsive-menu .js-superfish"),c="destroy";"function"===typeof d.superfish&&("none"===k(a)&&(c={delay:100,animation:{opacity:"show",height:"show"},
dropShadows:!1,speed:"fast"}),d.superfish(c));p(a);q(a)}}function r(){var a=b(this),d=a.next("nav");a.attr("id","genesis-mobile-"+b(d).attr("class").match(/nav-\w*\b/))}function q(a){if(null!=menusToCombine){var d=menusToCombine[0],c=b(menusToCombine).filter(function(a){if(0<a)return a});"none"!==k(a)?(b.each(c,function(a,c){b(c).find(".menu > li").addClass("moved-item-"+c.replace(".","")).appendTo(d+" ul.genesis-nav-menu")}),b(g(c)).hide()):(b(g(c)).show(),b.each(c,function(a,c){b(".moved-item-"+
c.replace(".","")).appendTo(c+" ul.genesis-nav-menu").removeClass("moved-item-"+c.replace(".",""))}))}}function t(){var a=b(this);h(a,"aria-pressed");h(a,"aria-expanded");a.toggleClass("activated");a.next("nav").slideToggle("fast")}function u(){var a=b(this),d=a.closest(".menu-item").siblings();h(a,"aria-pressed");h(a,"aria-expanded");a.toggleClass("activated");a.next(".sub-menu").slideToggle("fast");d.find(".sub-menu-toggle").removeClass("activated").attr("aria-pressed","false");d.find(".sub-menu").slideUp("fast")}
function p(a){var d=l();0< !b(d).length||b.each(d,function(c,d){var e=d.replace(".",""),f="genesis-"+e,g="genesis-mobile-"+e;"none"==k(a)&&(f="genesis-mobile-"+e,g="genesis-"+e);e=b('.genesis-skip-link a[href="#'+f+'"]');null!==menusToCombine&&d!==menusToCombine[0]&&e.toggleClass("skip-link-hidden");if(0<e.length){var h=e.attr("href"),h=h.replace(f,g);e.attr("href",h)}})}function k(a){a=m.getElementById(a);return window.getComputedStyle(a).getPropertyValue("display")}function h(a,b){a.attr(b,function(a,
b){return"false"===b})}function g(a){return b.map(a,function(a,b){return a}).join(",")}function l(){var a=[];null!==menusToCombine&&b.each(menusToCombine,function(b,c){a.push(c.valueOf())});b.each(genesisMenus.others,function(b,c){a.push(c.valueOf())});return 0<a.length?a:null}b.each(genesisMenusUnchecked,function(a){genesisMenus[a]=[];b.each(this,function(d,c){var f=b(c);1<f.length?b.each(f,function(d,f){var e=c+"-"+d;b(this).addClass(e.replace(".",""));genesisMenus[a].push(e);"combine"===a&&menusToCombine.push(e)}):
1==f.length&&(genesisMenus[a].push(c),"combine"===a&&menusToCombine.push(c))})});"undefined"==typeof genesisMenus.others&&(genesisMenus.others=[]);1==menusToCombine.length&&(genesisMenus.others.push(menusToCombine[0]),menusToCombine=genesisMenus.combine=null);var v={init:function(){if(0!=b(l()).length){var a="undefined"!==typeof genesisMenuParams.menuIconClass?genesisMenuParams.menuIconClass:"dashicons-before dashicons-menu",d="undefined"!==typeof genesisMenuParams.subMenuIconClass?genesisMenuParams.subMenuIconClass:
"dashicons-before dashicons-arrow-down-alt2",c=b("<button />",{"class":"menu-toggle","aria-expanded":!1,"aria-pressed":!1,role:"button"}).append(genesisMenuParams.mainMenu),f=b("<button />",{"class":"sub-menu-toggle","aria-expanded":!1,"aria-pressed":!1,role:"button"}).append(b("<span />",{"class":"screen-reader-text",text:genesisMenuParams.subMenu}));b(g(genesisMenus)).addClass("genesis-responsive-menu");b(g(genesisMenus)).find(".sub-menu").before(f);null!==menusToCombine?(f=genesisMenus.others.concat(menusToCombine[0]),
b(g(f)).before(c)):b(g(genesisMenus.others)).before(c);b(".menu-toggle").addClass(a);b(".sub-menu-toggle").addClass(d);b(".menu-toggle").on("click.genesisMenu-mainbutton",t).each(r);b(".sub-menu-toggle").on("click.genesisMenu-subbutton",u);b(window).on("resize.genesisMenu",n).triggerHandler("resize.genesisMenu")}}};b(m).ready(function(){null!==l()&&v.init()})})(document,jQuery);
;!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);