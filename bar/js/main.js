$(document).ready(function(){
    var divs = document.getElementsByTagName('li');
var delta = Math.PI * 2 / divs.length;
var x = 0, y = 0, angle = 0;

for (var i = 0; i < divs.length; i++) {
    divs[i].style.position = 'absolute';
    divs[i].style.left =  200 * Math.cos(angle) + 'px';
    divs[i].style.top = 200 * Math.sin(angle) + 'px';

    angle += delta;
}
 // $('.icons ul').bind('DOMMouseScroll', function(e){
 //     if(e.originalEvent.detail > 0) {
 //        $('ul li').each(function(){
 //        var posl = $(this).position().left;
 //        var post = $(this).position().top;
 //        $(this).prev('li').css({'left': posl,
 //                                'top': post,                 
 //        });
 //        var posll = $('ul li').first().position().left;
 //        var postl = $('ul li').first().position().top;
 //        $('ul li').last().css({'left': posll,
 //                                'top': postl,                 
 //        });
 //        });
 //     }
 //     else {
 //        $('ul li').each(function(){
 //        var posl = $(this).position().left;
 //        var post = $(this).position().top;
 //        $(this).next('li').css({'left': posl,
 //                                'top': post,                 
 //        });
 //        var posll = $('ul li').last().position().left;
 //        var postl = $('ul li').last().position().top;
 //        $('ul li').first().css({'left': posll,
 //                                'top': postl,                 
 //        });
 //        });
 //     }
 //     return false;
 // });
 // $('.icons ul').bind('mousewheel', function(e){
 //     if(e.originalEvent.wheelDelta < 0) {
 //        $('ul li').each(function(){
 //        var posl = $(this).position().left;
 //        var post = $(this).position().top;
 //        $(this).prev('li').css({'left': posl,
 //                                'top': post,                 
 //        });
 //        var posll = $('ul li').first().position().left;
 //        var postl = $('ul li').first().position().top;
 //        $('ul li').last().css({'left': posll,
 //                                'top': postl,                 
 //        });
 //        });

 //     }
 //     else {
 //        $('ul li').each(function(){
 //        var posl = $(this).position().left;
 //        var post = $(this).position().top;
 //        $(this).next('li').css({'left': posl,
 //                                'top': post,                 
 //          });
 //        var posll = $('ul li').last().position().left;
 //        var postl = $('ul li').last().position().top;
 //        $('ul li').first().css({'left': posll,
 //                                'top': postl,                 
 //        });
 //        }); 
 //     }
 //     return false;
 // });
$("ul li").click(function(e){
  $('ul li').each(function(){
var posl = $(this).position().left;
var post = $(this).position().top;
$(this).prev('li').css({'left': posl,
                        'top': post,                 
  });
var posll = $('ul li').first().position().left;
var postl = $('ul li').first().position().top;
$('ul li').last().css({'left': posll,
                        'top': postl,                 
  });
});
});



 $("a.open").click(function(e){
         e.preventDefault();
    $(this).siblings('ul').toggleClass('active');
    $(this).children('img').css('transform',"rotate(60deg)")
    });
});

