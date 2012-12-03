var autorotate;
var getRotation = function ($e) {
                var value = $e.css('-webkit-transform');
                if (value === undefined) {
                    value = $e.css('-moz-transform');
                    if (value === undefined) {
                        value = $e.css('-o-transform');
                        if (value === undefined) {
                            value = $e.css('-ms-transform');
                            if (value === undefined) {
                                value = $e.css('transform');
                            }
                        }
                    }
                }
                return value === undefined? '' : value;
            };


$(function(){

var cube = $('#cube');
	
	var mouse = { 
	    	start : {}
	    },
	    touch = document.ontouchmove !== undefined,
	    viewport = {
	    		x: 0, 
			y: 0, 
			el: $('#cube')[0],
			move: function(coords) {
				if(coords) {
					if(typeof coords.x === "number") this.x = coords.x;
					if(typeof coords.y === "number") this.y = coords.y;
				}
					this.el.style.webkitTransform = "rotateX("+this.x+"deg) rotateY("+this.y+"deg)";
			},
			reset: function() {
				this.move({x: 0, y: 0});
			}
		};
		
	viewport.duration = function() {
		var d = touch ? 50 : 500;
		viewport.el.style.webkitTransitionDuration = d + "ms";
		return d;
	}();
	
	$(document).keydown(function(evt) {
		switch(evt.keyCode)
		{	
			case 37: // left
				viewport.move({y: viewport.y - 90});
				break;
			
			case 38: // up
				evt.preventDefault();
				viewport.move({x: viewport.x + 90});				
				break;
			
			case 39: // right
				viewport.move({y: viewport.y + 90});
				break;
				
			case 40: // down
				evt.preventDefault();
				viewport.move({x: viewport.x - 90});
				break;
				
			case 27: //esc
				viewport.reset();
				break;
				
			default:
				break;
		};	
	}).bind('mousedown touchstart', function(evt) {
	
	if(cube.hasClass('autorotate')){
          var returnValue = getRotation(cube);
	clearTimeout (autorotate);
	viewport.el.style.webkitTransform = returnValue;
	viewport.el.style.webkitTransitionDuration = "500ms";
	viewport.el.style.webkitTransitionTimingFunction = 'linear';
	cube.removeClass('autorotate');
	}

	
		delete mouse.last;
		if($(evt.target).is('a, iframe')) {
			return true;
		}
		
		evt.originalEvent.touches ? evt = evt.originalEvent.touches[0] : null;
		mouse.start.x = evt.pageX;
		mouse.start.y = evt.pageY;
		$(document).bind('mousemove touchmove', function(event) {
			// Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
			if(!touch || !(event.originalEvent && event.originalEvent.touches.length > 1)) {
				event.preventDefault();
				// Get touch co-ords
				event.originalEvent.touches ? event = event.originalEvent.touches[0] : null;
				$('#viewport').trigger('move-viewport', {x: event.pageX, y: event.pageY});			
			}			
		});	
		
		$(document).bind('mouseup touchend', function () {
			$(document).unbind('mousemove touchmove');
		});
	});
	
	$('#viewport').bind('move-viewport', function(evt, movedMouse) {
	
		// Reduce movement on touch screens
		var movementScaleFactor = touch ? 4 : 2;
		
		if (!mouse.last) {
	  		mouse.last = mouse.start;
		} else {
		  	if (forward(mouse.start.x, mouse.last.x) != forward(mouse.last.x, movedMouse.x)) {
		  		mouse.start.x = mouse.last.x;
		  	}
		  	if (forward(mouse.start.y, mouse.last.y) != forward(mouse.last.y, movedMouse.y)) {
		  		mouse.start.y = mouse.last.y;
		 	}
		}
		
		viewport.move({
			x: viewport.x + parseInt((mouse.start.y - movedMouse.y)/movementScaleFactor),
			y: viewport.y - parseInt((mouse.start.x - movedMouse.x)/movementScaleFactor)
		});
		
		mouse.last.x = movedMouse.x;
		mouse.last.y = movedMouse.y;		
			
		function forward(v1, v2) {
			return v1 >= v2 ? true : false;
		}
	});

	
	
	if(Modernizr.csstransforms3d){
	//supports CSS
	}else{
	$('#cube > div').eq(5).addClass('fallback').html('<h1>Non-3d transform browser has been detected using Modernizr, fallback code can be initialized here…</h1>');
	}

var plusMinus = 0;

setTimeout(function() {

function rotateCube() { 

if(cube.hasClass('autorotate')){

}else{
viewport.el.className += "autorotate";
}
/*
var isEven = function(num){
return (num%2 == 0) ? '-' : '+';
};
 
var rotateDir = isEven(plusMinus);
*/
var rotateAmt = (360 * (plusMinus + 1));

viewport.el.style.webkitTransform = "rotateX(" + rotateAmt + "deg) rotateY(" + rotateAmt + "deg)";
viewport.el.style.webkitTransitionDuration = "30000ms";
viewport.el.style.webkitTransitionTimingFunction = 'ease-in-out';

autorotate = setTimeout(function() {
plusMinus++;
rotateCube();
},30000);



}; 

rotateCube();

},1000);

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});