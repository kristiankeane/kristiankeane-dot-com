// jquery easing
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

// formalize
var FORMALIZE=function(e,t,n,r){function i(e){var t=n.createElement("b");return t.innerHTML="<!--[if IE "+e+"]><br><![endif]-->",!!t.getElementsByTagName("br").length}var s="placeholder"in n.createElement("input"),o="autofocus"in n.createElement("input"),u=i(6),a=i(7);return{go:function(){var e,t=this.init;for(e in t)t.hasOwnProperty(e)&&t[e]()},init:{disable_link_button:function(){e(n.documentElement).on("click","a.button_disabled",function(){return!1})},full_input_size:function(){if(!a||!e("textarea, input.input_full").length)return;e("textarea, input.input_full").wrap('<span class="input_full_wrap"></span>')},ie6_skin_inputs:function(){if(!u||!e("input, select, textarea").length)return;var t=/button|submit|reset/,n=/date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;e("input").each(function(){var r=e(this);this.getAttribute("type").match(t)?(r.addClass("ie6_button"),this.disabled&&r.addClass("ie6_button_disabled")):this.getAttribute("type").match(n)&&(r.addClass("ie6_input"),this.disabled&&r.addClass("ie6_input_disabled"))}),e("textarea, select").each(function(){this.disabled&&e(this).addClass("ie6_input_disabled")})},autofocus:function(){if(o||!e(":input[autofocus]").length)return;var t=e("[autofocus]")[0];t.disabled||t.focus()},placeholder:function(){if(s||!e(":input[placeholder]").length)return;FORMALIZE.misc.add_placeholder(),e(":input[placeholder]").each(function(){if(this.type==="password")return;var t=e(this),n=t.attr("placeholder");t.focus(function(){t.val()===n&&t.val("").removeClass("placeholder_text")}).blur(function(){FORMALIZE.misc.add_placeholder()}),t.closest("form").submit(function(){t.val()===n&&t.val("").removeClass("placeholder_text")}).on("reset",function(){setTimeout(FORMALIZE.misc.add_placeholder,50)})})}},misc:{add_placeholder:function(){if(s||!e(":input[placeholder]").length)return;e(":input[placeholder]").each(function(){if(this.type==="password")return;var t=e(this),n=t.attr("placeholder");(!t.val()||t.val()===n)&&t.val(n).addClass("placeholder_text")})}}}}(jQuery,this,this.document);jQuery(document).ready(function(){FORMALIZE.go()})

// global vars
var currentSlide;
var speed = 1000;
var timeOut = 7500;
var easing = 'easeInOutSine';

var tsh = $('#text-slide-holder ul');
var ish = $('#img-slide-holder ul');
var indicator = $('#indicator li');
var timer;
// animate carousel

function fadeItIn(img){
	img.stop(true, true).animate({
		opacity: 1
	}, speed);
}

function fadeItOut(img){
	img.stop(true, true).animate({
		opacity: 0
	}, speed);
}

function goToSlide(newSlideIndex) {
	clearInterval(timer);
	indicator.removeClass('active').eq(newSlideIndex - 1).addClass('active');
	ish.children('li').each(function(index) {
		var img = $(this);
		if (index + 1 == newSlideIndex) {
			fadeItIn(img);
		} else {
			fadeItOut(img);
		}
	});

	var newText = 'text-'+ newSlideIndex;
	tsh.children('li').each(function(index) {
		var text = $(this);
	if (text.hasClass(newText)) {
			fadeItIn(text);
			var offset = text.position().top;
			tsh.stop(true, true).animate({
				top: -offset
			}, speed, easing, function() {
			});
	} else {
			fadeItOut(text);
		}
	});
}

function animateCarousel(initCurrentSlide) {
		currentSlide = initCurrentSlide;
		if (currentSlide == 3) {
			currentSlide = 0;
		}
		var dir = '-';
	
	tsh.animate({
		top: dir + 175
	}, speed, easing, function() {
		tsh.css('top','0');
		tsh.children('li').last().after(tsh.children('li').first());
		indicator.removeClass('active').eq(currentSlide).addClass('active');
		currentSlide++;
		timer = setTimeout(function() {
			animateCarousel(currentSlide);
		}, timeOut);
	});

	var toFadeOut = ish.children('li').eq(currentSlide -1).add(tsh.children('li').eq(0));
	fadeItOut(toFadeOut);

	var toFadeIn = ish.children('li').eq(currentSlide).add(tsh.children('li').eq(1));
	fadeItIn(toFadeIn);
}

// DOM ready
$(function() {
	
	indicator.click(function() {
		var buttonIndex = $(this).index() + 1;
		goToSlide(buttonIndex);
	});


	setTimeout(function() {
		animateCarousel(1);
	}, timeOut);
});