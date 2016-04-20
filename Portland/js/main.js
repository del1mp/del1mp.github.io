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
// $(document).ready(function() {
// 	$(".gradient").css("display", "none");
//     $(".gradient").fadeIn(3000);
// 	});
// $(document).ready(function() {
// 	$("header").css("display", "none");
//     $("header").fadeIn(1000);
// 	});

// $(document).ready(function(){
//     $(".btn88").click(function(){
//         $("#toggleSample2").collapse('toggle');
//     });
// });
// $(document).ready(function(){
//     $(".btn44").click(function(){
//         $("#togg").collapse('toggle');
//     });
// });
// $(document).ready(function(){
//     $(".btn55").click(function(){
//         $("#toggi").collapse('toggle');
//     });
// });
// $(document).ready(function(){
// 	$(".link2").css('display', 'none');
//     $(".btn55").click(function(){
//         $(".link").css('display', 'none')
//         $(".link2").css('display', 'inline-block');
//     });
// });
$(document).ready(function(){
	// $("ul.hid-menu li ul").hide();
	$("ul.hid-menu > li a").click(function(){
		$(this).siblings('ul').toggleClass('active');
		if ($(this).siblings('ul').is(':visible')) {
			$(this).children('img').css('transform', 'rotate(90deg)');
		}
		else{
			$(this).children('img').css('transform', 'rotate(0deg)');
		}
	});

});
$("ul.hid-menu a").on('click', function(e) {
    e.preventDefault();
})
$(".lot a").on('click', function(e) {
    e.preventDefault();
})
$(document).ready(function(){
	$(".header-bottom-block").hide();
	$(".click-menu > a").click(function(){
		$(".header-bottom-block").slideToggle();
	});
});

function Auto () {
	
        var availableTags = [];
        	$('.lot h6').each(function (i){
    availableTags[i]=$(this).text();
	});
 
        $( "#tablet" ).autocomplete({
            source: availableTags

        });
    };
    Auto();
$(document).ready(function(){
			var now = 0;
	$(".lot span.buy-now a").click(function(e){
            var tmp = $(this).parent().siblings("a").children("span.price").html(); 
            tmp = parseFloat(tmp); 
            now = parseFloat(now); 
            now = tmp +now;
            $('#sum').html(now); 
            $('#sum2').html(now);
        }); 
	    $(window).scroll(function(){
            var bo = $("body").scrollTop();
 
            if ( bo > 200 ) { $(".shop").css("display", "block"); } else { $(".shop").css("display", "none"); };
        })
      
       
});





    // function calculate(){ 
    //     var tmp = 0; 
    //     $('.price').each(function(all){ 
    //         var now = $(this).html(); 
    //         tmp = parseFloat(tmp); 
    //         now = parseFloat(now); 
    //         tmp = tmp+now; 
    //         $('#sum').html(tmp); 
    //     }); 
    // } 
    // calculate(); 