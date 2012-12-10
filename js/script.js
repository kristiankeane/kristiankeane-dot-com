/**
 * Isotope v1.5.03
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2011 David DeSandro / Metafizzy
 */
/*jshint curly: true, eqeqeq: true, forin: false, immed: false, newcap: true, noempty: true, undef: true */
/*global Modernizr: true, jQuery: true */
(function(a,b,c){"use strict";var d=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},e="Moz Webkit Khtml O Ms".split(" "),f=function(a){var b=document.documentElement.style,c;if(typeof b[a]=="string")return a;a=d(a);for(var f=0,g=e.length;f<g;f++){c=e[f]+a;if(typeof b[c]=="string")return c}},g=f("transform"),h=f("transitionProperty"),i={csstransforms:function(){return!!g},csstransforms3d:function(){var a=!!f("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),g=b('<div id="modernizr" />').appendTo("html");a=g.height()===3,g.remove(),e.remove()}return a},csstransitions:function(){return!!h}};if(a.Modernizr)for(var j in i)Modernizr.hasOwnProperty(j)||Modernizr.addTest(j,i[j]);else a.Modernizr=function(){var a={_version:"1.6ish: miniModernizr for Isotope"},c=" ",d,e;for(e in i)d=i[e](),a[e]=d,c+=" "+(d?"":"no-")+e;b("html").addClass(c);return a}();if(Modernizr.csstransforms){var k=Modernizr.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},l=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},h,i={},j;f[c]=d,b.extend(e,f);for(h in e)j=e[h],i[h]=k[h](j);var l=i.translate||"",m=i.scale||"",n=l+m;b.data(a,"isoTransform",e),a.style[g]=n};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){l(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){l(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var m,n;Modernizr.csstransitions&&(m={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd",transitionProperty:"transitionEnd"}[h],n=f("transitionDuration"));var o=b.event,p;o.special.smartresize={setup:function(){b(this).bind("resize",o.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",o.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",p&&clearTimeout(p),p=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var q=["overflow","position","width","height"];b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:Modernizr.csstransforms&&!b.browser.opera?{opacity:0,scale:.001}:{opacity:0},visibleStyle:Modernizr.csstransforms&&!b.browser.opera?{opacity:1,scale:1}:{opacity:1},animationEngine:b.browser.opera?"jquery":"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(c){this.options=b.extend({},b.Isotope.settings,c),this.styleQueue=[],this.elemCount=0;var d=this.element[0].style;this.originalStyle={};for(var e=0,f=q.length;e<f;e++){var g=q[e];this.originalStyle[g]=d[g]||""}this.element.css({overflow:"hidden",position:"relative"}),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){b.elemCount++;return b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems();var i=b(document.createElement("div")).prependTo(this.element);this.offset=i.position(),i.remove();var j=this;setTimeout(function(){j.element.addClass(j.options.containerClass)},0),this.options.resizable&&b(a).bind("smartresize.isotope",function(){j.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0);return c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var e in a)c="_update"+d(e),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,"");switch(a){case"css":case"none":this.isUsingJQueryAnimation=!1;break;case"jquery":this.isUsingJQueryAnimation=!0;break;default:this.isUsingJQueryAnimation=!Modernizr.csstransitions}this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){this.usingTransforms=this.options.transformsEnabled&&Modernizr.csstransforms&&Modernizr.csstransitions&&!this.isUsingJQueryAnimation,this.getPositionStyles=this.usingTransforms?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c);return a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order"));return(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b+=this.offset.left,c+=this.offset.top;var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",e=this.options.animationOptions,f,g,h,i;g=function(a,b){b.$el[d](b.style,e)};if(this._isInserting&&this.isUsingJQueryAnimation)g=function(a,b){f=b.$el.hasClass("no-transition")?"css":d,b.$el[f](b.style,e)};else if(c){var j=!1,k=this;h=!0,i=function(){j||(c.call(k.element,a),j=!0)};if(this.isUsingJQueryAnimation&&d==="animate")e.complete=i,h=!1;else if(Modernizr.csstransitions){var l=0,o=this.styleQueue[0].$el,p;while(!o.length){p=this.styleQueue[l++];if(!p)return;o=p.$el}var q=parseFloat(getComputedStyle(o[0])[n]);q>0&&(g=function(a,b){b.$el[d](b.style,e).one(m,i)},h=!1)}}b.each(this.styleQueue,g),h&&i(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a,!0);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a),a.remove()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var c=this.usingTransforms;this.$allAtoms.removeClass(this.options.hiddenClass+" "+this.options.itemClass).each(function(){this.style.position="",this.style.top="",this.style.left="",this.style.opacity="",c&&(this.style[g]="")});var d=this.element[0].style;for(var e=0,f=q.length;e<f;e++){var h=q[e];d[h]=this.originalStyle[h]}this.element.unbind(".isotope").undelegate("."+this.options.hiddenClass,"click").removeClass(this.options.containerClass).removeData("isotope"),b(a).unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",e=a?"height":"width",f=a?"rows":"cols",g=this.element[e](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+d(e)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][f]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];this._getSegments(a);return this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=Math.round((e+.5)*d.columnWidth-a.outerWidth(!0)/2),h=Math.round((f+.5)*d.rowHeight-a.outerHeight(!0)/2);c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=Math.round((e+.5)*d.columnWidth-a.outerWidth(!0)/2),h=Math.round((f+.5)*d.rowHeight-a.outerHeight(!0)/2);c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(a){--e<=0&&a.target.src!==f&&(setTimeout(g),d.unbind("load error",h))}function g(){a.call(b,d)}var b=this,d=b.find("img").add(b.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e||g(),d.bind("load error",h).each(function(){if(this.complete||this.complete===c){var a=this.src;this.src=f,this.src=a}});return b};var r=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c)r("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(c[a])||a.charAt(0)==="_"){r("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)}})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);


//imagesloaded.js
(function(c,n){var k="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(l){function m(){var b=c(h),a=c(g);d&&(g.length?d.reject(e,b,a):d.resolve(e));c.isFunction(l)&&l.call(f,e,b,a)}function i(b,a){b.src===k||-1!==c.inArray(b,j)||(j.push(b),a?g.push(b):h.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(h),c(g)]),e.length===j.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var f=this,d=c.isFunction(c.Deferred)?c.Deferred():
0,o=c.isFunction(d.notify),e=f.find("img").add(f.filter("img")),j=[],h=[],g=[];e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){i(b.target,"error"===b.type)}).each(function(b,a){var e=a.src,d=c.data(a,"imagesLoaded");if(d&&d.src===e)i(a,d.isBroken);else if(a.complete&&a.naturalWidth!==n)i(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=k,a.src=e}):m();return d?d.promise(f):f}})(jQuery);

//BEGIN EASING
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})
//END EASING

/*--git test --*/
/*data ^^^53666###t@^#$%^&$%^@@@$&#%^&%&#&*?
data submit pw/usr/key
*/

/*-----DETAILS VIEW-----*/
function showHideDetails(details, ptop, pbot, h, o){
details.animate({
'padding-top' : ptop,
'padding-bottom' : pbot,
height: h,
opacity: o
}, 400, 'easeInOutSine');
}
/*-----END DETAILS VIEW-----*/

/*-----ISOTOPE FUNCTIONS-----------------------------------------------------------------------------------------------*/

/*-----for the corner stamp-----*/
  $.Isotope.prototype._masonryResizeChanged = function() {
    return true;
  };
  
/*-----for the centered layout-----*/
  $.Isotope.prototype._getCenteredMasonryColumns = function() {
    this.width = this.element.width();
    var parentWidth = this.element.parent().width();
    // i.e. options.masonry && options.masonry.columnWidth
    var colW = this.options.masonry && this.options.masonry.columnWidth ||
    // or use the size of the first item
    this.$filteredAtoms.outerWidth(true) ||
    // if there's no items, use size of container
    parentWidth;
    var cols = Math.floor( parentWidth / colW );
    cols = Math.max( cols, 1 );
    this.masonry.cols = cols;
    this.masonry.columnWidth = colW;
  };
  
  $.Isotope.prototype._masonryReset = function() {
    // layout-specific props
    this.masonry = {};
    // FIXME shouldn't have to call this again
    this._getCenteredMasonryColumns();
    
    var i = this.masonry.cols;
    this.masonry.colYs = [];

    while (i--) {
      this.masonry.colYs.push( 0 );
    }
    /*-----for the corner stamp-----*/
        if ( this.options.masonry.cornerStampSelector ) {
      var $cornerStamp = this.element.find( this.options.masonry.cornerStampSelector ),
          stampWidth = $cornerStamp.outerWidth(true) - ( this.element.width() % this.masonry.columnWidth ),
          cornerCols = Math.ceil( stampWidth / this.masonry.columnWidth ),
          cornerStampHeight = $cornerStamp.outerHeight(true);

      if(this.masonry.cols > 1){
      for ( i = Math.max( this.masonry.cols - cornerCols, cornerCols ); i < this.masonry.cols; i++ ) {
        this.masonry.colYs[i] = cornerStampHeight;
      }
      }else{
        this.masonry.colYs[0] = cornerStampHeight;
      }
     }
     /*-----END for the corner stamp-----*/
  };

  $.Isotope.prototype._masonryResizeChanged = function() {
    var prevColCount = this.masonry.cols;
    // get updated colCount
    this._getCenteredMasonryColumns();
    return ( this.masonry.cols !== prevColCount );
  };
  
  $.Isotope.prototype._masonryGetContainerSize = function() {
    var unusedCols = 0,
        i = this.masonry.cols;
    // count unused columns
    while ( --i ) {
      if ( this.masonry.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    return {
          height : Math.max.apply( Math, this.masonry.colYs ),
          // fit container to columns that have been used;
          width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
        };
  };
/*-----END ISOTOPE FUNCTIONS-----------------------------------------------------------------------------------------------*/









/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-START DOC READY-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

$(function(){

var projectViewer = $('#projectdetail');
var projectInfo = $('#projectdetailinfo');
var closeViewer = $('a.closethis');
var viewSize = $('#viewresize');
var container = $('#container');

//HOVER EFFECTS FOR IOS ON CATEGORY NAV
/*
$('nav.category ul li a').bind('touchstart touchend', function(e) {
  $(this).toggleClass('hover');
});
*/

//LOAD PROJECT DETAILS + FALLBACK
function loadProject(projectName){
var project = $('<div class="loaderdiv">').load('projects/' + projectName + '/' + projectName + '.html #getcontent', function(response, status, xhr) {
if (status == "error") {
var url = 'http://www.kristiankeane.com/projects/' + projectName + '/' + projectName + '.html';
window.location = url;
} else {
viewSize.append(project);
container.fadeTo(300, 0);

viewSize.imagesLoaded(function($images, $proper, $broken ){

var docHeight = $(document).height();
var newHeight = viewSize.height() + 50;

if(newHeight >= docHeight){
projectViewer.css('height', newHeight + 'px');
$('body, html').css('height', newHeight + 'px');
} else {
projectViewer.css('height', docHeight + 'px');
}
});

projectViewer.fadeIn(500);
$('#loading').fadeOut(300);
$('body, html').scrollTop(0);
closeViewer.fadeIn(500);

}
});//load
}


//EXPAND DETAIL VIEW FROM BLOCK
$('a.seemore').click(function(e){
		
	if ($(this).attr('target')) {
		e.stopPropagation();
	} else {
		e.preventDefault();
		e.stopPropagation();
		var projectDetails = $(this).parent('.details').html();
		projectInfo.prepend(projectDetails);
		var projectName = this.id;
		loadProject(projectName);
	}
});

//CLOSE DETAIL VIEW
closeViewer.click(function(e){
e.stopPropagation();
closeViewer.fadeOut(10);
container.fadeTo(300, 1);
projectViewer.fadeOut(500, function(){
$('body, html').css('height','auto');
projectInfo.html('');
$(this).css('height',0);
$('.loaderdiv').remove();
});
});

/*-----END SEE MORE-----*/


/*-----SHOW HIDE DETAILS VIEW-----*/

$('article img, article div.details').click(function(e){
e.preventDefault();
$(this).siblings('.openicon').trigger('click');
});

$('.openicon').click(function(e){
e.preventDefault();
var button = $(this);
var image = button.siblings('img');
var details = image.siblings('div.details');
var detailsHeight = (image.height() - 20);
if(button.hasClass('detailsvisible')){
showHideDetails(details, 0, 0, 0, 0);
button.removeClass('detailsvisible');
}else{
showHideDetails(details, 20, 20, detailsHeight, 1);
button.addClass('detailsvisible');
}
});

/*-----END SHOW HIDE DETAILS VIEW-----*/

});//END DOC READY






/*=============ISOTOPE===================*/

//window.load waits for images to be loaded
$(window).load(function() {

var $container = $('#isotope');
var thisWidth = $('#container').width();

$('article').not('.blogbox').fadeTo(800, 1);

/*-----VERT SCROLL BUBBLES BG-----*/
//ONLY FOR DEVICES BIGGER THAN IPAD (768px)
if (thisWidth >= 770) {
$(window).scroll(function(){
var y = $($.browser.webkit?'body':'html').scrollTop();
$('#layer1').css({'background-position':'50% -' + Math.floor(y/2) + 'px'});
$('#layer2').css({'background-position':'50% -' + Math.floor(y/5) + 'px'});
$('#layer3').css({'background-position':'50% -' + Math.floor(y/8) + 'px'});
});
}
/*-----END VERT SCROLL BUBBLES BG-----*/


if(thisWidth >= 320){
$container.isotope({
  animationOptions: {
     duration: 500,
     easing: 'linear',
     animationEngine: 'best-available',
     queue: false
   },
  //itemSelector : '.item, .post, .comment, #respond, #secondary',
  itemSelector : '.item',
	masonry : {
        columnWidth : 310
      }
});
}
/*=============END ISOTOPE===================*/



/*=============FILTER===================*/

$('nav.category ul li a').click(function(e){
  e.preventDefault();

  var typeSelector = [];
  var combinedSelector = '';
  var button = $(this);
  var listItem = button.parent('li');

  if (button.text() == 'all') {
    combinedSelector = '*';
    $('nav.category ul li').each(function(index) {
      $(this).removeClass('active');
    });

    listItem.addClass('active');

  } else {

  listItem.toggleClass('active');

  $('li.showall.active').removeClass('active');

  $('nav.category ul li.type.active').each(function(index) {
      var listSearch = $(this);
      var name = '.' + listSearch.children('a').text();
      typeSelector[index] = name;
  });

  $('nav.category ul li.platform.active').each(function(index) {
      var listSearch = $(this);

      var l = typeSelector.length;

      if (l > 0) {
        for (i=0;i<l;i++) {
          var name = '.' + listSearch.children('a').text() + typeSelector[i] + ', ';
          combinedSelector = combinedSelector + name;
        }
      } else {
          var name2 = '.' + listSearch.children('a').text() + ', ';
          combinedSelector = combinedSelector + name2;
      }
  });

  if (typeSelector.length === 0 && combinedSelector === '') {
    $('li.showall').addClass('active');
    combinedSelector = '*';
  }
  
  if (combinedSelector === '') {
    combinedSelector = typeSelector.toString();
  }

  }//else

  //console.log(combinedSelector);
 
  $container.isotope({ filter: combinedSelector });
  return false;
});

/*=============END FILTER===================*/

});//WINDOW LOAD






function ieClose() {
	$('.iemessage').fadeOut(1000, function(){
		$(this).remove();
	});
}










