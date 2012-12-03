
function setCubeDimensions() {
	var winHeight = $(window).width();
	$('.block-holder')
		.height(winHeight)
		.width(winHeight)
		.children('.block')
		.height(winHeight / 2)
		.width(winHeight / 2);


	$('.block').each(function(e) {
		$this = $(this);
		this.style[Modernizr.prefixed('transform')] = 'translateZ(-' + winHeight / 4 + 'px)';
	});


	$('.block').children('div').each(function(e) {

		$this = $(this);
		var transform;

		if ($this.hasClass('front')) {
			transform = 'rotateY(0deg) translateZ(' + winHeight / 4 + 'px)';
		} else if ($this.hasClass('back')) {
			transform = 'rotateX(180deg) translateZ(' + winHeight / 4 + 'px)';
		} else if ($this.hasClass('right')) {
			transform = 'rotateY(90deg) translateZ(' + winHeight / 4 + 'px)';
		} else if ($this.hasClass('left')) {
			transform = 'rotateY(-90deg) translateZ(' + winHeight / 4 + 'px)';
		} else if ($this.hasClass('top')) {
			transform = 'rotateX(90deg) translateZ(' + winHeight / 4 + 'px)';
		} else if ($this.hasClass('bottom')) {
			transform = 'rotateX(-90deg) translateZ(' + winHeight / 4 + 'px)';
		}
		
		this.style[Modernizr.prefixed('transform')] = transform;

	});
}

function transformCubes(cubeID) {
	var winHeight = $(window).width();
	var transformOne;
	var transformTwo;
	var transformThree;
	var transformFour;

	if (cubeID == 'block-one') {
		transformOne = 'translateZ(-' + winHeight / 4 + 'px) rotateY(-90deg) rotateX(90deg)';
		transformTwo = 'translateZ(-' + winHeight / 4 + 'px) rotateY(-90deg) rotateX(-90deg)';
		transformThree = 'translateZ(-' + winHeight / 4 + 'px) rotateY(90deg) rotateX(90deg)';
		transformFour = 'translateZ(-' + winHeight / 4 + 'px) rotateY(90deg) rotateX(-90deg)';
	} else if (cubeID == 'block-two') {
		transformOne = 'translateZ(-' + winHeight / 4 + 'px) rotateY(90deg)';
		transformTwo = 'translateZ(-' + winHeight / 4 + 'px) rotateY(90deg)';
		transformThree = 'translateZ(-' + winHeight / 4 + 'px) rotateY(-90deg)';
		transformFour = 'translateZ(-' + winHeight / 4 + 'px) rotateY(-90deg)';
	} else if (cubeID == 'block-three') {
		transformOne = 'translateZ(-' + winHeight / 4 + 'px) rotateX(-180deg)';
		transformTwo = 'translateZ(-' + winHeight / 4 + 'px) rotateX(180deg)';
		transformThree = 'translateZ(-' + winHeight / 4 + 'px) rotateX(-180deg)';
		transformFour = 'translateZ(-' + winHeight / 4 + 'px) rotateX(180deg)';
	} else if (cubeID == 'block-four') {
		transformOne = 'translateZ(-' + winHeight / 4 + 'px) rotateY(0deg) rotateX(-90deg)';
		transformTwo = 'translateZ(-' + winHeight / 4 + 'px) rotateY(0deg) rotateX(90deg)';
		transformThree = 'translateZ(-' + winHeight / 4 + 'px) rotateY(-180deg) rotateX(-90deg)';
		transformFour = 'translateZ(-' + winHeight / 4 + 'px) rotateY(-180deg) rotateX(90deg)';
	}

	document.getElementById('block-one').style[Modernizr.prefixed('transform')] = transformOne;
	document.getElementById('block-two').style[Modernizr.prefixed('transform')] = transformTwo;
	document.getElementById('block-three').style[Modernizr.prefixed('transform')] = transformThree;
	document.getElementById('block-four').style[Modernizr.prefixed('transform')] = transformFour;

	setTimeout(function() {
		//$('.block-holder').fadeTo(500, 0.0);
	},1000);
}

$(function() {

	// BLOCK HOVER
/*
	$(".block").hover(

		function () {
			var id = $(this).attr('id');
			//alert(id);
			$(this).parent().addClass(id);

		},
		function () {
			var id = $(this).attr('id');
			$(this).parent().removeClass(id);
		}
	);
*/

	// BLOCK CLICK
	$(".block").click(function(e) {
		e.preventDefault();
		var id = $(this).attr('id');
		transformCubes(id);
	});

	// BLOCK WIDTH AND HEIGHT FUNCTION
	setCubeDimensions();
	$(window).resize(function() {
		setCubeDimensions();
	});

});




















