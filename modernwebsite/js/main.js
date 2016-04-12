(function($){
	function equalHeight(element){
		$(element).each(function(){
			$(this).css('height', 'auto');
		});
		var height = 0;
		$(element).each(function(){
			if(height < $(this).height()){
				height = $(this).height();
			}
		});
		$(element).each(function(){
			$(this).css('height', height+'px');
		});
	}
	$(document).ready(function(){
		$("button").click(function(){
			$(".nav").toggleClass("active");

		})
		equalHeight('.nav li');
	});
	$(window).resize(function(){
		equalHeight('.nav li');
	});
}(jQuery))