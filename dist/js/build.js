// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*!
  hey, [be]Lazy.js - v1.2.1 - 2014.03.23
  A lazy loading and multi-serving image script
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
(function(e){"function"===typeof define&&define.amd?define(e):window.Blazy=e()})(function(){function e(b){if(!document.querySelectorAll){var f=document.createStyleSheet();document.querySelectorAll=function(b,a,e,c,g){g=document.all;a=[];b=b.replace(/\[for\b/gi,"[htmlFor").split(",");for(e=b.length;e--;){f.addRule(b[e],"k:v");for(c=g.length;c--;)g[c].currentStyle.k&&a.push(g[c]);f.removeRule(0)}return a}}k=!0;g=[];a=b||{};a.error=a.error||!1;a.offset=a.offset||100;a.success=a.success||!1;a.selector=a.selector||".b-lazy";a.separator=a.separator||"|";a.container=a.container?document.querySelectorAll(a.container):!1;a.errorClass=a.errorClass||"b-error";a.breakpoints=a.breakpoints||!1;a.successClass=a.successClass||"b-loaded";a.src=p=a.src||"data-src";r=1<window.devicePixelRatio;c=s(t,25);q=s(u,50);u();l(a.breakpoints,function(b){if(b.width>=window.screen.width)return p=b.src,!1});v()}function v(){y(a.selector);k&&(k=!1,a.container&&l(a.container,function(b){m(b,"scroll",c)}),m(window,"scroll",c),m(window,"resize",c),m(window,"resize",q));t()}function t(){for(var b=0;b<h;b++){var f=g[b],d=f.getBoundingClientRect(),c=w+a.offset;if(0<=d.left&&d.right<=x+a.offset&&(0<=d.top&&d.top<=c||d.bottom<=c&&d.bottom>=0-a.offset)||-1!==(" "+f.className+" ").indexOf(" "+a.successClass+" "))e.prototype.load(f),g.splice(b,1),h--,b--}0===h&&e.prototype.destroy()}function z(b){if(0<b.offsetWidth&&0<b.offsetHeight){var f=b.getAttribute(p)||b.getAttribute(a.src);if(f){var f=f.split(a.separator),d=f[r&&1<f.length?1:0],f=new Image;l(a.breakpoints,function(a){b.removeAttribute(a.src)});b.removeAttribute(a.src);f.onerror=function(){a.error&&a.error(b,"invalid");b.className=b.className+" "+a.errorClass};f.onload=function(){"img"===b.nodeName.toLowerCase()?b.src=d:b.style.backgroundImage='url("'+d+'")';b.className=b.className+" "+a.successClass;a.success&&a.success(b)};f.src=d}else a.error&&a.error(b,"missing"),b.className=b.className+" "+a.errorClass}}function y(b){b=document.querySelectorAll(b);for(var a=h=b.length;a--;g.unshift(b[a]));}function u(){w=window.innerHeight||document.documentElement.clientHeight;x=window.innerWidth||document.documentElement.clientWidth}function m(b,a,d){b.attachEvent?b.attachEvent&&b.attachEvent("on"+a,d):b.addEventListener(a,d,!1)}function n(b,a,d){b.detachEvent?b.detachEvent&&b.detachEvent("on"+a,d):b.removeEventListener(a,d,!1)}function l(b,a){if(b&&a)for(var d=b.length,c=0;c<d&&!1!==a(b[c],c);c++);}function s(a,c){var d=0;return function(){var e=+new Date;e-d<c||(d=e,a.apply(g,arguments))}}var p,a,x,w,g,h,r,k,c,q;e.prototype.revalidate=function(){v()};e.prototype.load=function(b){-1===(" "+b.className+" ").indexOf(" "+a.successClass+" ")&&z(b)};e.prototype.destroy=function(){a.container&&l(a.container,function(a){n(a,"scroll",c)});n(window,"scroll",c);n(window,"resize",c);n(window,"resize",q);h=0;g.length=0;k=!0};return e});

/*! nanoScrollerJS - v0.8.0 - (c) 2014 James Florentino; Licensed MIT */
!function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F;x={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},s="scrollbar",r="scroll",k="mousedown",l="mousemove",n="mousewheel",m="mouseup",q="resize",h="drag",u="up",p="panedown",f="DOMMouseScroll",g="down",v="wheel",i="keydown",j="keyup",t="touchmove",d="Microsoft Internet Explorer"===b.navigator.appName&&/msie 7./i.test(b.navigator.appVersion)&&b.ActiveXObject,e=null,B=b.requestAnimationFrame,w=b.cancelAnimationFrame,D=c.createElement("div").style,F=function(){var a,b,c,d,e,f;for(d=["t","webkitT","MozT","msT","OT"],a=e=0,f=d.length;f>e;a=++e)if(c=d[a],b=d[a]+"ransform",b in D)return d[a].substr(0,d[a].length-1);return!1}(),E=function(a){return F===!1?!1:""===F?a:F+a.charAt(0).toUpperCase()+a.substr(1)},C=E("transform"),z=C!==!1,y=function(){var a,b,d;return a=c.createElement("div"),b=a.style,b.position="absolute",b.width="100px",b.height="100px",b.overflow=r,b.top="-9999px",c.body.appendChild(a),d=a.offsetWidth-a.clientWidth,c.body.removeChild(a),d},A=function(){var a,c,d;return c=b.navigator.userAgent,(a=/(?=.+Mac OS X)(?=.+Firefox)/.test(c))?(d=/Firefox\/\d{2}\./.exec(c),d&&(d=d[0].replace(/\D+/g,"")),a&&+d>23):!1},o=function(){function i(d,f){this.el=d,this.options=f,e||(e=y()),this.$el=a(this.el),this.doc=a(this.options.documentContext||c),this.win=a(this.options.windowContext||b),this.$content=this.$el.children("."+f.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.previousPosition=0,this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return i.prototype.preventScrolling=function(a,b){if(this.isActive)if(a.type===f)(b===g&&a.originalEvent.detail>0||b===u&&a.originalEvent.detail<0)&&a.preventDefault();else if(a.type===n){if(!a.originalEvent||!a.originalEvent.wheelDelta)return;(b===g&&a.originalEvent.wheelDelta<0||b===u&&a.originalEvent.wheelDelta>0)&&a.preventDefault()}},i.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},i.prototype.updateScrollValues=function(){var a,b;a=this.content,this.maxScrollTop=a.scrollHeight-a.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=a.scrollTop,b=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same",this.previousPosition=this.contentScrollTop,"same"!==b&&this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:b}),this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},i.prototype.setOnScrollStyles=function(){var a;z?(a={},a[C]="translate(0, "+this.sliderTop+"px)"):a={top:this.sliderTop},B?this.scrollRAF||(this.scrollRAF=B(function(b){return function(){b.scrollRAF=null,b.slider.css(a)}}(this))):this.slider.css(a)},i.prototype.createEvents=function(){this.events={down:function(a){return function(b){return a.isBeingDragged=!0,a.offsetY=b.pageY-a.slider.offset().top,a.pane.addClass("active"),a.doc.bind(l,a.events[h]).bind(m,a.events[u]),!1}}(this),drag:function(a){return function(b){return a.sliderY=b.pageY-a.$el.offset().top-a.offsetY,a.scroll(),a.contentScrollTop>=a.maxScrollTop&&a.prevScrollTop!==a.maxScrollTop?a.$el.trigger("scrollend"):0===a.contentScrollTop&&0!==a.prevScrollTop&&a.$el.trigger("scrolltop"),!1}}(this),up:function(a){return function(){return a.isBeingDragged=!1,a.pane.removeClass("active"),a.doc.unbind(l,a.events[h]).unbind(m,a.events[u]),!1}}(this),resize:function(a){return function(){a.reset()}}(this),panedown:function(a){return function(b){return a.sliderY=(b.offsetY||b.originalEvent.layerY)-.5*a.sliderHeight,a.scroll(),a.events.down(b),!1}}(this),scroll:function(a){return function(b){a.updateScrollValues(),a.isBeingDragged||(a.iOSNativeScrolling||(a.sliderY=a.sliderTop,a.setOnScrollStyles()),null!=b&&(a.contentScrollTop>=a.maxScrollTop?(a.options.preventPageScrolling&&a.preventScrolling(b,g),a.prevScrollTop!==a.maxScrollTop&&a.$el.trigger("scrollend")):0===a.contentScrollTop&&(a.options.preventPageScrolling&&a.preventScrolling(b,u),0!==a.prevScrollTop&&a.$el.trigger("scrolltop"))))}}(this),wheel:function(a){return function(b){var c;if(null!=b)return c=b.delta||b.wheelDelta||b.originalEvent&&b.originalEvent.wheelDelta||-b.detail||b.originalEvent&&-b.originalEvent.detail,c&&(a.sliderY+=-c/3),a.scroll(),!1}}(this)}},i.prototype.addEvents=function(){var a;this.removeEvents(),a=this.events,this.options.disableResize||this.win.bind(q,a[q]),this.iOSNativeScrolling||(this.slider.bind(k,a[g]),this.pane.bind(k,a[p]).bind(""+n+" "+f,a[v])),this.$content.bind(""+r+" "+n+" "+f+" "+t,a[r])},i.prototype.removeEvents=function(){var a;a=this.events,this.win.unbind(q,a[q]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+r+" "+n+" "+f+" "+t,a[r])},i.prototype.generate=function(){var a,c,d,f,g,h;return f=this.options,g=f.paneClass,h=f.sliderClass,a=f.contentClass,this.$el.find("."+g).length||this.$el.find("."+h).length||this.$el.append('<div class="'+g+'"><div class="'+h+'" /></div>'),this.pane=this.$el.children("."+g),this.slider=this.pane.find("."+h),0===e&&A()?(d=b.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/\D+/g,""),c={right:-14,paddingRight:+d+14}):e&&(c={right:-e},this.$el.addClass("has-scrollbar")),null!=c&&this.$content.css(c),this},i.prototype.restore=function(){this.stopped=!1,this.iOSNativeScrolling||this.pane.show(),this.addEvents()},i.prototype.reset=function(){var a,b,c,f,g,h,i,j,k,l,m,n;return this.iOSNativeScrolling?void(this.contentHeight=this.content.scrollHeight):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),a=this.content,f=a.style,g=f.overflowY,d&&this.$content.css({height:this.$content.height()}),b=a.scrollHeight+e,l=parseInt(this.$el.css("max-height"),10),l>0&&(this.$el.height(""),this.$el.height(a.scrollHeight>l?l:a.scrollHeight)),i=this.pane.outerHeight(!1),k=parseInt(this.pane.css("top"),10),h=parseInt(this.pane.css("bottom"),10),j=i+k+h,n=Math.round(j/b*j),n<this.options.sliderMinHeight?n=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&n>this.options.sliderMaxHeight&&(n=this.options.sliderMaxHeight),g===r&&f.overflowX!==r&&(n+=e),this.maxSliderTop=j-n,this.contentHeight=b,this.paneHeight=i,this.paneOuterHeight=j,this.sliderHeight=n,this.slider.height(n),this.events.scroll(),this.pane.show(),this.isActive=!0,a.scrollHeight===a.clientHeight||this.pane.outerHeight(!0)>=a.scrollHeight&&g!==r?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===a.scrollHeight&&g===r?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),c=this.$content.css("position"),("static"===c||"relative"===c)&&(m=parseInt(this.$content.css("right"),10),m&&this.$content.css({right:"",marginRight:m})),this)},i.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop((this.paneHeight-this.contentHeight+e)*this.sliderY/this.maxSliderTop*-1),this.iOSNativeScrolling||(this.updateScrollValues(),this.setOnScrollStyles()),this):void 0},i.prototype.scrollBottom=function(a){return this.isActive?(this.$content.scrollTop(this.contentHeight-this.$content.height()-a).trigger(n),this.stop().restore(),this):void 0},i.prototype.scrollTop=function(a){return this.isActive?(this.$content.scrollTop(+a).trigger(n),this.stop().restore(),this):void 0},i.prototype.scrollTo=function(a){return this.isActive?(this.scrollTop(this.$el.find(a).get(0).offsetTop),this):void 0},i.prototype.stop=function(){return w&&this.scrollRAF&&(w(this.scrollRAF),this.scrollRAF=null),this.stopped=!0,this.removeEvents(),this.iOSNativeScrolling||this.pane.hide(),this},i.prototype.destroy=function(){return this.stopped||this.stop(),!this.iOSNativeScrolling&&this.pane.length&&this.pane.remove(),d&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass("has-scrollbar")&&(this.$el.removeClass("has-scrollbar"),this.$content.css({right:""})),this},i.prototype.flash=function(){return!this.iOSNativeScrolling&&this.isActive?(this.reset(),this.pane.addClass("flashed"),setTimeout(function(a){return function(){a.pane.removeClass("flashed")}}(this),this.options.flashDelay),this):void 0},i}(),a.fn.nanoScroller=function(b){return this.each(function(){var c,d;if((d=this.nanoscroller)||(c=a.extend({},x,b),this.nanoscroller=d=new o(this,c)),b&&"object"==typeof b){if(a.extend(d.options,b),null!=b.scrollBottom)return d.scrollBottom(b.scrollBottom);if(null!=b.scrollTop)return d.scrollTop(b.scrollTop);if(b.scrollTo)return d.scrollTo(b.scrollTo);if("bottom"===b.scroll)return d.scrollBottom(0);if("top"===b.scroll)return d.scrollTop(0);if(b.scroll&&b.scroll instanceof a)return d.scrollTo(b.scroll);if(b.stop)return d.stop();if(b.destroy)return d.destroy();if(b.flash)return d.flash()}return d.reset()})},a.fn.nanoScroller.Constructor=o}(jQuery,window,document);

//jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a+c;return-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){if((a/=d/2)<1)return b/
2*a*a*a+c;return b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a+c;return-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,
a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return a==0?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){if(a==0)return c;if(a==d)return c+b;if((a/=d/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c},
easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){if((a/=d/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,
a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d/2)==2)return c+b;f||(f=d*0.3*1.5);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);if(a<1)return-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c;return g*Math.pow(2,-10*(a-=1))*Math.sin((a*
d-e)*2*Math.PI/f)*0.5+b+c},easeInBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;if((a/=d/2)<1)return b/2*a*a*(((f*=1.525)+1)*a-f)+c;return b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=
d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){if(a<d/2)return jQuery.easing.easeInBounce(e,a*2,0,b,d)*0.5+c;return jQuery.easing.easeOutBounce(e,a*2-d,0,b,d)*0.5+b*0.5+c}});

$(window).load(function() {
	beLazy();
});

$(document).on('pjax:end', function() {
	beLazy();
	nextPrev();
	global();
});

$(document).ready(function() {
	nextPrev();
	global();
});

function global(){
$('.nano').nanoScroller({
   		preventPageScrolling: true,
   		iOSNativeScrolling: true
  	});
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		$('.front-page').addClass('background');
	}
	if (Modernizr.touch) {
    $('html').removeClass('no-touch');

	}
	else{
		$('html').addClass('no-touch');

	}
	if (!Modernizr.svg) {
	    var imgs = document.getElementsByTagName('img');
	    var svgExtension = /.*\.svg$/;
	    var l = imgs.length;
	    for(var i = 0; i < l; i++) {
	        if(imgs[i].src.match(svgExtension)) {
	            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
	            console.log(imgs[i].src);
	        }
	    }
	}
}

//********************Next/Previous Arrow Hovers********************//
function nextPrev(){
	$( ".next" )
  		.mouseover(function() {
    	$('html').addClass('hover-next-project');
  	})
  	.mouseout(function() {
   		$('html').removeClass('hover-next-project');
  	});
  	$( ".previous" )
  	.mouseover(function() {
    	$('html').addClass('hover-previous-project');
     if($('html').hasClass('fixed')){
    		$('html').removeClass('hover-previous-project');
    		$('.previous').bind('click', false);
    }
    else{
    		$('.previous').unbind('click', false);
    	}
  })
  .mouseout(function() {
   		$('html').removeClass('hover-previous-project');
	});
}

//********************bLazy Image Loader********************//
function beLazy(){
			var bLazy = new Blazy({
		container: '.image-wrapper', // Default is window
			 breakpoints: [{
	          width: 420 // max-width
			, src: 'data-src-small'
	     }
           , {
	          width: 768 // max-width
	        , src: 'data-src-medium'}
	          , {
	          width: 1120 // max-width
	        , src: 'data-src-large'
		}]
	});
}

//********************Title Interval********************//
var titles = ["is a designer", "loves type", "thinks less is more", "follows function", "ama burritos", "plays with HTML/CSS", "likes hedgehogs"];

function rotateTitle() {
  var ct = $("#title a").data("titles") || 0;
  $("#title a").data("titles", ct == titles.length -1 ? 0 : ct + 1).html("Regis <span class=\"interests\">" + titles[ct] + "</span>").fadeIn()
              .delay(5000).fadeOut(500, rotateTitle);
}
$(rotateTitle);

//********************Off Canvas Thumbnail Menu********************//
$(".bar-menu").click(function(e){
	  scrollLock();
	if($('html').hasClass('progress')){
		e.preventDefault();
	}
	else{
      $("#project-menu").toggleClass("active");
      $(".page-wrap, #menu, footer, .next, .previous").toggleClass("active");

       setTimeout(function(){$(".bars").toggleClass("active");},250);

	if (navigator.userAgent.indexOf('Firefox') != -1){
		setTimeout(function(){$("html").toggleClass("overflow");},400);
	}
	else{
		$("html").toggleClass("overflow");
	}
      $("html").toggleClass("fixed");
      if($('html').hasClass('fixed')){
    		$('html').removeClass('hover-previous-project');
    		$('.projects a').bind('click', false);
    	}
    	else{
    		$('.projects a').unbind('click', false);
    	}
	}
});

function scrollLock(){
	// Uses document because document will be topmost level in bubbling
	$(document).on('touchmove',function(e){
  		e.preventDefault();
  	if(!$('html').hasClass('fixed')){
  		$(document).unbind('touchmove');
 	}
	});

	var scrolling = false;

	// Uses body because jquery on events are called off of the element they are
	// added to, so bubbling would not work if we used document instead.
	$('body').on('touchstart','.scrollable',function(e) {

    	// Only execute the below code once at a time
    	if (!scrolling) {
        	scrolling = true;
        	if (e.currentTarget.scrollTop === 0) {
          		e.currentTarget.scrollTop = 1;
        	} else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
          		e.currentTarget.scrollTop -= 1;
        	}
       		scrolling = false;
    	}
	});

	// Prevents preventDefault from being called on document if it sees a scrollable div
	$('body').on('touchmove','.scrollable',function(e) {
  		e.stopPropagation();
	});
}

//********************Pjax********************//
	$(document).on('pjax:timeout', function(event) {
  	// Prevent default timeout redirection behavior
  	event.preventDefault();
	});

	$(document).on('pjax:success', function() {
		ga('send','pageview');
	});

	$(document).on('click', 'a[data-pjax]', function(e){
		e.preventDefault();
		if (e.metaKey || e.ctrlKey) {
			window.open(this.href);
			return false;
        };
		var href = $(this).attr("href");
		$("html").addClass("progress");
		$("#title a").addClass("loading");
	  	$('#loader').delay(300).fadeIn(300);
	  	setTimeout(function(){$(".bars").removeClass("active");},250);
	  	$(".page-wrap, header, footer, .next, .previous").removeClass("active");
		  $("html").removeClass("fixed");
		  $("html").removeClass("overflow");
		if($('#project-menu').hasClass('active')){
				$('.fade').delay(600).animate({
				opacity : 0
			}, 400, function() {
				$.pjax({
					url: href,
					container : '.load-container',
					fragment : '.load-container',
					timeout : 5000
				});
			});
		}
		else{
			$('.fade').animate({
				opacity : 0
			}, 400, function() {
				$.pjax({
					url: href,
					container : '.load-container',
					fragment : '.load-container',
					timeout : 5000
				});
			});
		}
		$('#project-menu').removeClass('active');
	});

	$(document).on('pjax:end', function() {
		$('.fade').css('opacity', '0');
		$('.fade').delay(400).animate({opacity : 1},400);
		$('html').removeClass('progress hover-next-project hover-previous-project');
		$("#title a").removeClass("loading");
	});

//********************Arrow Key Commands********************//
	$(document).keydown(function(e) {
		if($(".load-container").length)
		{
			switch(e.keyCode) {
				case 39:
					$("#next-project-arrow").trigger("click", true);
				return false;
				break;

				case 37:
					$("#previous-project-arrow").trigger("click", true);
					return false;
				break;
			}
		}
	});
