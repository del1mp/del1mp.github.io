// (function($){
// 	function equalHeight(element){
// 		$(element).each(function(){
// 			$(this).css('height', 'auto');
// 		});
// 		var height = 0;
// 		$(element).each(function(){
// 			if(height < $(this).height()){
// 				height = $(this).height();
// 			}
// 		});
// 		$(element).each(function(){
// 			$(this).css('height', height+'px');
// 		});
// 	}
// 	$(document).ready(function(){
// 		$("button").click(function(){
// 			$(".nav").toggleClass("active");

// 		})
// 		equalHeight('.nav li');
// 	});
// 	$(window).resize(function(){
// 		equalHeight('.nav li');
// 	});
// }(jQuery))
$(document).ready(function() {
	$(".gradient").css("display", "none");
    $(".gradient").fadeIn(3000);
	});
$(document).ready(function() {
	$("header").css("display", "none");
    $("header").fadeIn(1000);
	});

$(document).ready(function(){
    $(".btn88").click(function(){
        $("#toggleSample2").collapse('toggle');
    });
});
$(document).ready(function(){
    $(".btn44").click(function(){
        $("#togg").collapse('toggle');
    });
});
$(document).ready(function(){
    $(".btn55").click(function(){
        $("#toggi").collapse('toggle');
    });
});
$(document).ready(function(){
	$(".link2").css('display', 'none');
    $(".btn55").click(function(){
        $(".link").css('display', 'none')
        $(".link2").css('display', 'inline-block');
    });
});