$(document).ready(function(){
	function ecvalheight(e){
		if ($('header').height() < $('content').height()){
			var height = $('content').height();

			$('header').css('height',height+'px');
		
		}
	}
	$(window).resize(ecvalheight);
	ecvalheight();
});
