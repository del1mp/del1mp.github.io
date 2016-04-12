$(document).ready(function(){
	function ecvalheight(e){
		$('header').css('height', 'auto');
		if ($('header').height() < $('.wrapper').height()){
			var height = $('.wrapper').height();
			$('header').css('height',height+'px');
		}

	}

	$(window).resize(ecvalheight);
	ecvalheight();
});

$(document).ready(function(){
	function ecvalheight(e){

		if ($('iframe').height() < $('.wrapper').height()){
			var height = $('.wrapper').height();

			$('iframe').css('height',height+'px');
		}

	}

	$(window).resize(ecvalheight);
	ecvalheight();
});

$(document).ready(function() {
    $(".wrapper").fadeIn(500);
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$(".wrapper").fadeOut(300, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});



