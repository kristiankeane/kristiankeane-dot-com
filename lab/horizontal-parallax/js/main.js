// DOM READY -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
$(function() {
	// set up left positions
	$('.parallax').each(function(e) {
		console.log('working');
		var left = Math.floor($(this).attr('leftpos'));
		$(this).css({'left': left + 'px'}).addClass('visible');
	});

	
	$(window).scroll(function(){
		var x = $($.browser.webkit?'body':'html').scrollLeft();
		//console.log('scrollLeft = ' + x / 2);
		if (x >= 0) {
			$('.parallax').each(function(e) {
				var left = Math.floor($(this).attr('leftpos'));
				var z = ($(this).attr('z') * 1);
				//console.log('total x = ' + x + '  z=' + z + ' x/z = ' + x/z + ' mathfloor x/z = ' + Math.floor(x/z) + left);
				switch(z) {
					case 1:
						zFactor = 2;
						break;

					case 2:
						zFactor = 3;
						break;

					case 3:
						zFactor = 6;
						break;

					case 4:
						zFactor = 0;
						break;

					default:
						//do nothing
				}
				$(this).css({'left': (Math.floor(x/zFactor) + left)+ 'px'});
			});
		}
	});



});// END DOM READY -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//