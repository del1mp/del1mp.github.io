$(document).ready(function(){
  $('header .head').css('top', '55%');
  $('header .logo').css('top', '0');
  $('header a.menu').css('left', '1.2%');
  $('header nav.nav ul').css('top', '50%');
  var scroll=parseInt($('body').scrollTop());
            var height=parseInt(window.innerHeight);
            console.log(height, scroll);
            if (height/1.5>scroll) {
              $("#home").parent('li').addClass('active');
              $("#home").parent('li').siblings('span.home').addClass('active');
            }
             else {
              $("#home").parent('li').removeClass('active');
              $("#home").parent('li').siblings('span.home').removeClass('active');
            }
            if (height<=scroll) {
              $("#features").parent('li').addClass('active');
              $("#features").parent('li').siblings('span.features').addClass('active');
            }
            else{
              $("#features").parent('li').removeClass('active');
              $("#features").parent('li').siblings('span.features').removeClass('active');
            }
             if(scroll>=height*1.5){
              $("#features").parent('li').removeClass('active');
              $("#features").parent('li').siblings('span.features').removeClass('active');
            }
            if(scroll>=1.5*height){
              $("#range").parent('li').addClass('active');
              $("#range").parent('li').siblings('span.range').addClass('active');
            }
            else{
              $("#range").parent('li').removeClass('active');
              $("#range").parent('li').siblings('span.range').removeClass('active');
            }

    $("a.menu").click(function(e){
         e.preventDefault();
    $('.navigation').slideToggle();
    $(this).toggleClass('open-menu');
    $('.navigation ul li').toggleClass('anim');
    });


});
$(document).ready(function(){

//Обработка нажатия на кнопку "Вверх"
$("#home").click(function(e){
  e.preventDefault();
//Необходимо прокрутить в начало страницы
var curPos=$(document).scrollTop();
var scrollTime=curPos/1.2;
$("body,html").animate({"scrollTop":0},scrollTime);
});

//Обработка нажатия на кнопку "Вниз"
$("#features").click(function(){
//Необходимо прокрутить в конец страницы
var heightheader=window.innerHeight;
var scrollTime=heightheader/1.2;
$("body,html").animate({"scrollTop":heightheader},scrollTime);

});
$("#range").click(function(){
//Необходимо прокрутить в конец страницы
var heightheader=window.innerHeight *2;
var scrollTime=heightheader/1.2;
$("body,html").animate({"scrollTop":heightheader},scrollTime);

});
});
 $(document).scroll(function(){
            var scroll=parseInt($('body').scrollTop());
            var height=parseInt(window.innerHeight);
            console.log(height, scroll);
            if (height/1.5>scroll) {
              $("#home").parent('li').addClass('active');
              $("#home").parent('li').siblings('span.home').addClass('active');
            }
             else {
              $("#home").parent('li').removeClass('active');
              $("#home").parent('li').siblings('span.home').removeClass('active');
            }
            if (height<=scroll) {
              $("section.models .ferrari").css("margin-top", "0");
              $("#features").parent('li').addClass('active');
              $("#features").parent('li').siblings('span.features').addClass('active');
            }
            else{
              $("#features").parent('li').removeClass('active');
              $("#features").parent('li').siblings('span.features').removeClass('active');
            }
             if(scroll>=height*1.5){
              $("#features").parent('li').removeClass('active');
              $("#features").parent('li').siblings('span.features').removeClass('active');
            }
            if(scroll>=1.5*height){
              $("#range").parent('li').addClass('active');
              $("#range").parent('li').siblings('span.range').addClass('active');
            }
            else{
              $("#range").parent('li').removeClass('active');
              $("#range").parent('li').siblings('span.range').removeClass('active');
            }
        })
