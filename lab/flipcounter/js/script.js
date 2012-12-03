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
					console.log('step function error');
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

//DOC READY
$(function() {
	//START COUNTER
	startCounter();
}); //END DOC READY

