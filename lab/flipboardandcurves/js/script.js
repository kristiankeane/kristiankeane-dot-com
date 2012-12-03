//GLOBAL VARS-------------------------------------------------//
var fasttrackFlag = 0;
var cHeight, cWidth, sH, sW;
var holder = $('#canvasHolder');
var timerFlag = 2;
var singleTimer = null;
var flipInterval;

//TEMP TIMER FUNCTION - TAKES PLACE OF FB API REQUEST DURATION - REMOVE FOR PRODUCTION!
function timer() {
	setTimeout(function() {
		$('.ok').fadeIn(100);
		$('#manage, .drawer-area').fadeIn(100);
		$('#listplaceholder, .loading').fadeOut(100);
	}, 20);
}

//CLICK ON FAVORITE BUTTON (STAR NEXT TO PILL) FUNCTIONS
function favoritesBar() {
	var favoritesCount = $('.favorites-list li').length;
	$('.favorite').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
			var offset = $(this).offset();
			if (favoritesCount < 20) {
				createFavorite(offset);
			}
		}
	});
}

function createFavorite(starOffset) {
	var target = $('.favorites-list');
	var lastPos = target.children('li').last().offset();
	var bezier_params = {
		start: {
			x: starOffset.left,
			y: starOffset.top,
			angle: 40
		},
		end: {
			x:lastPos.left,
			y:lastPos.top,
			angle: -40,
			length: 0.5
		}
	};
	var newFavorite = $('<li class="tempfavorite">').css({
		top: starOffset.top,
		left: starOffset.left,
		position: 'absolute',
		opacity: 0
	}).append(
	$('<a>').attr({
		href: '#',
		title: 'Jim Smith'
		}).append($('<img>').attr({
		src: 'img/fbpic.png',
		alt: 'person'
	})));
	newFavorite.appendTo('body').fadeTo(300, 1).animate({path : new $.path.bezier(bezier_params)}, 500, function() {
		newFavorite.css({
		top: 'auto',
		left: 'auto',
		position: 'relative'
		}).appendTo(target);
	});
}


//COUNTER FUNCTIONS
function removeFlipper($card, count) {
	var delayRemove = [];
	setTimeout(function() {
		delayRemove[count] = $card.remove();
	}, 500);
}

function flipTheFlipper(holder, index, newFrontNum, newBackNum) {
	newFlipper = '<div class="flipper"><div class="numfront">' + newFrontNum + '</div><div class="numback"><span>' + newBackNum + '<span></div></div>';
	one = holder.children('.flipper').eq(0);
	two = holder.children('.flipper').eq(1);
	three = holder.children('.flipper').eq(2);
	one.before(newFlipper);
	two.addClass('flipped');
	removeFlipper(three, index);
}

function countReset(num) {
	if (num < 9) {
		num++;
	} else {
		num = 0;
	}
	return num;
}

function rollOver(count) {
	var newNum;
	if (count == 9) {
		newNum = 0;
	} else {
		newNum = count + 1;
	}
	return newNum;
}

function startCounter() {
	var holder;
	var stepTimer;
	var newFlipper;
	var newFrontNum;
	var newBackNum;
	var one;
	var two;
	var three;
	var ones = 7;
	var tens = 4;
	var hundreds = 2;
	var thousands = 9;
	var tenthousands = 4;
	var hundredthousands = 2;
	var random = 1000;

	function step() {
		stepTimer = setTimeout(function() {
			$('.numholder').each(function(index) {
				holder = $(this);
				switch (index) {
				case 0:
					if (tenthousands == 1 && thousands == 1 && hundreds == 1 && tens == 1 && ones == 1) {
						var backNum5 = rollOver(hundredthousands);
						flipTheFlipper(holder, index, hundredthousands, backNum5);
						hundredthousands = countReset(hundredthousands);
					}
					break;
				case 1:
					if (thousands == 1 && hundreds == 1 && tens == 1 && ones == 1) {
						var backNum4 = rollOver(tenthousands);
						flipTheFlipper(holder, index, tenthousands, backNum4);
						tenthousands = countReset(tenthousands);
					}
					break;
				case 2:
					if (hundreds == 1 && tens == 1 && ones == 1) {
						var backNum3 = rollOver(thousands);
						flipTheFlipper(holder, index, thousands, backNum3);
						thousands = countReset(thousands);
					}
					break;
				case 3:
					if (tens == 1 && ones == 1) {
						var backNum2 = rollOver(hundreds);
						flipTheFlipper(holder, index, hundreds, backNum2);
						hundreds = countReset(hundreds);
					}
					break;
				case 4:
					if (ones == 1) {
						var backNum1 = rollOver(tens);
						flipTheFlipper(holder, index, tens, backNum1);
						tens = countReset(tens);
					}
					break;
				case 5:
					var backNum0 = rollOver(ones);
					flipTheFlipper(holder, index, ones, backNum0);
					ones = countReset(ones);
					break;
				default:
					console.log('this function done broke itself');
				}
			});
			var min = 20;
			var max = 1000;
			random = Math.floor(Math.random() * (max - min + 1) + min);
			step();
		}, random);
	} //end step function
	step();
}

//TIMER TO RESTORE CURVES BACK TO INIT STATE
function startTimer() {
	if (singleTimer !== null) {
		clearTimeout(singleTimer);
	}
	singleTimer = setTimeout(function() {
		$('#buttonholder').find('a').removeClass('active');
		canvasAttack(3);
	}, 5000);
}

//TIMER FOR PAGING THROUGH CURVES
function flipThrough() {
	flipInterval = setInterval(function() {
		$('#buttonholder ul li a').eq(timerFlag).addClass('active').parent('li').siblings('li').children('a').removeClass('active');
		canvasAttack(timerFlag);
		if (timerFlag == 3) {
			$('#buttonholder ul li a').removeClass('active');
		}
		if (timerFlag > 0) {
			timerFlag--;
		} else {
			timerFlag = 3;
		}
	}, 5000);
}

//CURVE ANIMATION SETUP
function canvasAttack(buttonID) {
	var direction = 0;
	var speed = 10;
	$('canvas').each(function(index) {
		var can = $(this);
		var holder = can.parent('div');
		var canvasIndex = holder.index() + 1;
		var type = 'UI';
		var timeOutVal = 500 * index;
		var str = 'canvas' + (canvasIndex);
		var canvas = document.getElementById(str);
		var newCtx = canvas.getContext('2d');
		holder.children('section').fadeOut(150);
		var startAnim;
		if (can.hasClass('open') && (canvasIndex - 1) > buttonID) {
			startAnim = new go();
			timeOutVal = 0;
			startAnim.init(direction, canvasIndex, speed, newCtx, type, buttonID);
		} else if (can.hasClass('closed') && (canvasIndex - 2) < (buttonID)) {
			direction = 1;
			startAnim = new go();
			setTimeout(function() {
				startAnim.init(direction, canvasIndex, speed, newCtx, type, buttonID);
			}, timeOutVal);
		}
	});
}

function go() {

	var ctr, dir, interval, workingCanvas;

	this.init = function(direction, id, speed, newCtx, type, button) {
		workingCanvas = $('#canvas' + id);
		if (workingCanvas.hasClass('working')) {
			//nada
		} else {
			workingCanvas.addClass('working');
			interval = setInterval(function() {
				animate(id, newCtx, type, button);
			}, speed);
			dir = direction;
			if (dir == 1) {
				ctr = Math.round(cWidth / 5) - 150;
			} else {
				ctr = 0;
			}
		}
	}; //init

	function model(id, type, button) {
		if (dir === 0) {
			if (ctr === 0) {
				ctr = ctr + 0.1;
			} else {
				ctr = ctr + 5;
			}
		} else if (dir == 1) {
			if ((ctr - 5) < 0) {
				ctr = 0;
			} else {
				ctr = ctr - 5;
			}
		}
		if (ctr >= Math.round(cWidth / 5) - 150 && dir === 0) {
			$('#canvasHolder > div').eq(button).children('section').fadeIn(300);
			workingCanvas.removeClass('working open').addClass('closed');
			clearInterval(interval);
			//startTimer(id);
		}
		if (ctr <= 0 && dir == 1) {
			workingCanvas.removeClass('working closed').addClass('open');
			if (type == 'init' && id == 4 || type == 'UI' && button == (id - 1)) {
				workingCanvas.siblings('section').fadeIn(300);
			}
			clearInterval(interval);
		}
	} //model

	function draw(ctx, id, type) {
		var initX = 0;
		var initY = cHeight;
		var qc1cpx = (sW * 30 + ctr) - 300;
		var qc1cpy = (sH * -125 + ctr) * 1.5;
		var qc1x = (sW * 60 + ctr * -50) + 1500;
		var qc1y = sH * 125 + ctr * 50;
		var qc2cpx = sW * 75 + ctr;
		var qc2cpy = (sH * 100 - ctr);
		var qc2x = (sW * 200 + ctr);
		var qc2y = sH * -100 - ctr;

		ctx.beginPath();
		ctx.moveTo(initX, initY);
		ctx.quadraticCurveTo(qc1cpx, qc1cpy, qc1x, qc1y);
		ctx.quadraticCurveTo(qc2cpx, qc2cpy, qc2x, qc2y);
		ctx.lineTo(cWidth, cHeight);
		ctx.lineTo(initX, initY);
		ctx.fill();
		//ctx.stroke();
		ctx.restore();
	} //draw

	function animate(id, newCtx, type, button) {
		model(id, type, button);
		newCtx.clearRect(0, 0, cWidth, cHeight);
		draw(newCtx, id, type);
	} //animate
} //go!

//INITIALIZE CURVES ON PAGE LOAD
function initAnimation() {
	cHeight = holder.height();
	cWidth = holder.width();
	sH = cHeight / 100;
	sW = cWidth / 100;
	var type = 'init';
	$('canvas').each(function(index) {
		setTimeout(function() {
			var str = 'canvas' + (index + 1);
			var canvas = document.getElementById(str);
			canvas.height = cHeight;
			canvas.width = cWidth;
			var newCtx = canvas.getContext('2d');
			var lineargradient;
			if (index === 0) {
				lineargradient = newCtx.createLinearGradient(0, 0, cWidth, 0);
				lineargradient.addColorStop(0, 'rgba(146,195,255,0.6)');
				lineargradient.addColorStop(1, 'rgba(146,195,255,0.0)');
			} else if (index == 1) {
				lineargradient = newCtx.createLinearGradient(0, 0, cWidth, 0);
				lineargradient.addColorStop(0, 'rgba(123,174,239,0.6)');
				lineargradient.addColorStop(1, 'rgba(123,174,239,0.0)');
			} else if (index == 2) {
				lineargradient = newCtx.createLinearGradient(0, 0, cWidth, 0);
				lineargradient.addColorStop(0, 'rgba(102,156,225,0.6)');
				lineargradient.addColorStop(1, 'rgba(102,156,225,0.0)');
			} else {
				lineargradient = newCtx.createLinearGradient(0, 0, cWidth, 0);
				lineargradient.addColorStop(0, 'rgba(85,143,220,0.6)');
				lineargradient.addColorStop(1, 'rgba(85,143,220,0.0)');
			}
			newCtx.fillStyle = lineargradient;
			newCtx.lineWidth = 1;
			newCtx.strokeStyle = "rgba(255,255,255,0.2)";
			newCtx.save();
			var button = 0;
			var startAnim = new go();
			startAnim.init(1, index + 1, 50, newCtx, type, button);
		}, (300 * index));
	});
} //initAnimation

//WINDOW INITIALIZE-------------------------------------------------------*/

$(function() {

	//TEMP LOADING BYPASS - SKIPS OVER HOME SCREEN
	/*
	$('.fbholder, .fbholder img').fadeOut(500, function() {
		$('.modal').addClass('done');
		$('body').addClass('manage');
		$('.timeline, #listplaceholder').fadeIn(500);
		$('#introcontent').fadeOut(500);
		timer();
	});
	*/

	//START COUNTER
	startCounter();

	//START FLIPPING THOUGH CURVES
	flipThrough();

	//INITIAL CURVE SETUP AND ANIMATION
	setTimeout(function() {
		initAnimation();
	}, 10); //init

	//ICON CLICK + RESULTING ANIMATION
	$('#buttonholder ul li a').click(function(e) {
		clearInterval(flipInterval);
		flipThrough();
		timerFlag = 3;
		e.preventDefault();
		var button = $(this);
		var id = button.parent('li').index();
		if (button.hasClass('active')) {
			//nada
		} else {
			button.addClass('active').parent('li').siblings('li').children('a').removeClass('active');
			canvasAttack(id);
		}
	});

	//LIST VIEW CHECKBOXES
	$('.chkbox').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('checked');
	});
	$('.socilist textarea').click(function(e) {
		e.preventDefault();
		$(this).parents('li').children('.chkbox').addClass('checked');
	});

	//LIST VIEW FLIP TRANSITIONS
	$('.open, .backsave').click(function(e) {
		e.preventDefault();
		if (fasttrackFlag === 0) {
			var listItem = $(this).parents('li');
			listItem.toggleClass('show').siblings('li').removeClass('show');
			var numBefore = listItem.prevAll('li').length * 70;
			/*$('html, body').animate({
				scrollTop : numBefore
			}, 400);*/
		}
	});

	//LIST VIEW FASTTRACK
	$('.fasttrack, .exit').click(function(e) {
		e.preventDefault();
		var button = $(this);
		var exitButton = $('.exit');
		var smallLink = $('.small-link');
		var star = $('.favorite');
		var fastTrackButton = $('.fasttrack');
		var fastTrackButtonBottom = $('.fasttrack.bottom');
		var container = $('.fasttrack-modal-container');
		var modal = $('.fasttrack-modal');
		var modalOffset = modal.css('top');
		if (button.html() == 'FastTrack') {
			$('.favorites-bar .handle.active').trigger('click');
			fasttrackFlag = 1;
			fastTrackButton.addClass('send').html('Send Checked').fadeIn(500);
			exitButton.fadeIn(500);
			smallLink.add(star).fadeOut(500);
			$("favorites-bar .handle").trigger('click');
		} else if (button.html() == 'Send Checked') {
			fasttrackFlag = 0;
			modal.css({
				top: '-100%'
			});
			container.fadeIn(500);
			modal.show().animate({
				top: '15%'
			});
			fastTrackButton.html('FastTrack').removeClass('send');
			exitButton.add(fastTrackButtonBottom).fadeOut(500);
			smallLink.add(star).fadeIn(500);
		} else if (button.html() == 'Exit') {
			fasttrackFlag = 0;
			fastTrackButton.html('FastTrack');
			fastTrackButton.removeClass('send');
			exitButton.add(fastTrackButtonBottom).fadeOut(500);
			smallLink.add(star).fadeIn(500);
		}
		$('li.show').removeClass('show');
		$('.socilist').toggleClass('fsttrk');
		//$('.socilist textarea').first().focus();
	});

	//FASTTRACK MODAL BEHAVIOR
	function fasttrackModalClose() {
		var container = $('.fasttrack-modal-container');
		var modal = $('.fasttrack-modal').not('.bottom');
		$('.fasttrack-modal-close, .modal-btn').click(function(e) {
			e.preventDefault();
			container.fadeOut(500);
			modal.animate({
				top: '-100%'
			}, function() {
				modal.hide();
			});
		});
		container.click(function() {
			container.fadeOut(500);
			modal.animate({
				top: '-100%'
			}, function() {
				modal.hide();
			});
		});
	}

	fasttrackModalClose();

	//FAVORITES IMAGE HOVER
	$(document).on("mouseenter", '.favorites-list li a', function() {
			if ($('.favorites-bar .handle').hasClass('active')) {
				var anchor = $(this);
				var name = anchor.attr('title');
				var toolTip = '<div class="tooltip">' + name + '</div>';
				anchor.before(toolTip);
				anchor.siblings('.tooltip').fadeIn(500);
			}
	}).on("mouseleave", '.favorites-list li a', function() {
			var anchor = $(this);
			anchor.siblings('.tooltip').fadeOut(300, function(){
				$(this).remove();
			});
	});

	//LIST VIEW OPEN ITEM FLIP TRANSITIONS ON SCROLL
	/*$(window).scroll(function () {
		var openedItem = $('.socilist li.show');
		if (openedItem.length > 0) {
			var winScroll = $(window).scrollTop();
			var itemIndex = Math.round(winScroll / 70);
			$('.socilist li').eq(itemIndex).addClass('show').siblings('li').removeClass('show');
		}
	});*/

	//CLICK HOME SCREEN FB BUTTON
	$('.facebookbutton').click(function(e) {
		e.preventDefault();
		$('.modal').addClass('open');
	});

	//CLICK FACEBOOK LOGIN - TEMPORARY
	$('.fbholder').click(function(e) {
		e.preventDefault();
		$('.fbholder, .fbholder img').fadeOut(500, function() {
			$('.instholder').fadeIn(500);
			$('body').addClass('manage');
			$('.timeline, #listplaceholder').fadeIn(500);
			$('#introcontent').fadeOut(500);
			timer();
		});
	});

	//CLICK "OK LETS GET STARTED" BUTTON
	$('.ok').click(function(e) {
		e.preventDefault();
		$('.modal').addClass('done');
	});

	//DATE PICKER
	$('.date').datetimepicker({
		ampm: true
	});

	$('.radio').on("click", function(e) {
		e.preventDefault();
		$('.date').trigger('click');
		console.log('clicked');
	});

	$('.radio-container>input.styled:checked').last().on("click", function() {
		$(this).datetimepicker({
			ampm: true
		});
	});

	//OPEN + CLOSE DRAWER
	$('.favorites-bar .handle').click(function() {
		if (fasttrackFlag === 0) {
			$('#drawer-open').toggleClass('closed');
			$('.favorites-bar .handle').toggleClass('active');
		}
	});

	//VIDEO HOVER SHOW CONTROLS
	$("#video-container").mouseenter(function() {
		$("#video-container .controls").stop().delay(100).slideDown();
	});

	$("#video-container").mouseleave(function() {
		$("#video-container .controls").stop().delay(100).slideUp();
	});

	//SOCIAL MEDIA ADD
	$('#social-modules-pop-up').focus(function() {
		$('#faded-background').fadeIn('fast');
		$('#social-network-selection').delay(800).slideDown();
		$('#social-network-selection .exit-social').delay(800).slideDown('slow');
	});

	$('#drawer-open .blue-pill-title span.pill-bullet').click(function() {
		$('#faded-background').fadeIn();
		$('#social-network-selection').delay(800).slideDown();
		$('#social-network-selection .exit-social').delay(800).slideDown('slow');
	});

	$('#add-button').click(function() {
		$("<div class='completed-appended'><span class='first-name-appended'>James Dean</span><span class='email-appended'>jj7323@hotmail.com</span></div>").appendTo('#added-emails');
	});

	$('.pop-up-fb-icon').click(function() {
		$('#social-network-selection').slideUp('slow');
		$('#facebook-friend-selector').delay(600).slideDown('slow');
	});

	$('#facebook-friend-selector ul li:odd, #twitter-friend-selector ul li:odd').addClass('friend-list-seperator');

	$('.pop-up-twt-icon').click(function() {
		$('#social-network-selection').slideUp('slow');
		$('#twitter-friend-selector').delay(600).slideDown('slow');
	});

	$('.pop-up-email-icon').click(function() {
		$('#social-network-selection').slideUp('slow');
		$('#email-contact-selector').delay(600).slideDown('slow');
	});

	$('#faded-background .exit-social, #faded-background .done-button').click(function() {
		$('#facebook-friend-selector').slideUp('slow');
		$('#twitter-friend-selector').slideUp('slow');
		$('#email-contact-selector').slideUp('slow');
		$('#faded-background').slideUp();
	});

	$('#faded-background .done-button').click(function() {
		$('.completed-appended').remove();
	});

	$('.date').focus(function() {
		var id = this.id;
		var number = id.substr(id.length - 1);
		var target = "date-button-" + number;
		var other = "set-date-" + number;
		$('#' + target).attr('checked', true);
		$('#' + other).attr('checked', false);
	});

	// FAVORITES
	favoritesBar();

}); //END DOC READY