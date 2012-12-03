//BEGIN EASING
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})
//END EASING













/*-----REGULAR FUNCTIONS-----------------------------------------------------------------------------------------------*/




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

    // i.e. this.masonry.cols = ....
    this.masonry.cols = cols;
    // i.e. this.masonry.columnWidth = ...
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
e.preventDefault();
e.stopPropagation();
var projectDetails = $(this).parent('.details').html();
projectInfo.prepend(projectDetails);
var projectName = this.id;
loadProject(projectName);
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
/*
console.log('body: ' + $('body').height());
console.log('html: ' + $('html').height());
console.log('projectdetail: ' + $('#projectdetail').height());
*/
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










/*
var YYY = $('#container').width();
$('#width').html(YYY + 'px');

$(window).resize(function() {
var XXX = $('#container').width();
$('#width').html(XXX + 'px');
});
*/


});//END DOC READY






/*=============ISOTOPE===================*/

//window.load waits for images to be loaded
$(window).load(function() {

var $container = $('#isotope');
var thisWidth = $('#container').width();

$('article').not('.blogbox').fadeTo(800, 1);

/*-----BOAT FLOAT-----*/
/*
function floatThis() { 

  $('#myboat').animate({'top':'+=10px'}, 2000, function() {
var xxx = $('#myboat').css('top');

    $(this).animate({'top':'-=10px'}, 2000, function() {
var yyy = $('#myboat').css('top');

    floatThis();
    });
  });
}

function floatThis() { $('#myboat').animate({'top':'+=10px'}, 2000).animate({'top':'-=10px'}, 2000, floatThis); }; floatThis();

if(thisWidth >= 625){
setTimeout(function() {
 floatThis();
}, 2000);
}
*/
/*-----END BOAT FLOAT-----*/


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
  itemSelector : '.item, .post, .comment, #respond, #secondary',
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

















