var transformClass;

$(function() {
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
});