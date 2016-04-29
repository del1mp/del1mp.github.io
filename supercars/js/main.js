$(document).ready(function(){
  var widthli = document.getElementById('models').childNodes.length;
  var lengthli = 100/widthli;
  $('#models li').css('width', lengthli+'%');
  $('header .head').css('top', '55%');
  $('header .logo').css('top', '0');
  $('header a.menu').css('left', '1.2%');
  $('header a.joinnow').css('right', '1.2%');
  $('header nav.nav ul').css('top', '50%');
  var scroll=parseInt($('body').scrollTop());
            var height=parseInt(window.innerHeight);
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
                    if(window.innerHeight>$('body').scrollTop()){
              $(".pageup").css('opacity', '0');
            }
            else{
              $(".pageup").css('opacity', '1');
            }
            if(window.innerHeight*3<$('body').scrollTop()){
              $(".pagedown").css('opacity', '0');
            }
            else{
              $(".pagedown").css('opacity', '1');
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
console.log(scrollTime);
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
var scrollTime=heightheader/1.8;
$("body,html").animate({"scrollTop":heightheader},scrollTime);
});
$("#about").click(function(){
//Необходимо прокрутить в конец страницы
var heightheader=window.innerHeight *3;
var scrollTime=heightheader/2;
$("body,html").animate({"scrollTop":heightheader},scrollTime);
});
$("#services").click(function(){
//Необходимо прокрутить в конец страницы
var heightheader=window.innerHeight *4;
var scrollTime=heightheader/2;
$("body,html").animate({"scrollTop":heightheader},scrollTime);
});
 $(".pagedown").click(function(){
 var heightheader=window.innerHeight;
    var scroll=parseInt($('body').scrollTop());
    var scr=heightheader+scroll;
    var scrollTime=heightheader/0.5;
     $("body,html").animate({"scrollTop":scr},scrollTime);
});
  $(".pageup").click(function(){
    var heightheader=window.innerHeight;
    var scroll=parseInt($('body').scrollTop());
    var scr=scroll-heightheader;
    var scrollTime=heightheader/0.5;
     $("body,html").animate({"scrollTop":scr},scrollTime);
});

});

 $(document).scroll(function(){
            var scroll=parseInt($('body').scrollTop());
            var height=parseInt(window.innerHeight);
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
              $('nav.nav ul').css("display","none");
              $("#range").parent('li').addClass('active');
              $("#range").parent('li').siblings('span.range').addClass('active');
            }
            else{
              $('nav.nav ul').css("display","block");
              $("#range").parent('li').removeClass('active');
              $("#range").parent('li').siblings('span.range').removeClass('active');
            }
             if(scroll>=2.5*height){
              $('nav.nav ul').css("display","block");
               $("#range").parent('li').removeClass('active');
              $("#range").parent('li').siblings('span.range').removeClass('active');
              $("#about").parent('li').addClass('active');
              $("#about").parent('li').siblings('span.about').addClass('active');
            }
            else{
              $("#about").parent('li').removeClass('active');
              $("#about").parent('li').siblings('span.about').removeClass('active');
            }
                if(scroll>=3.5*height){
               $("#about").parent('li').removeClass('active');
              $("#about").parent('li').siblings('span.about').removeClass('active');
              $("#services").parent('li').addClass('active');
              $("#services").parent('li').siblings('span.services').addClass('active');
            }
            else{
              $("#services").parent('li').removeClass('active');
              $("#services").parent('li').siblings('span.services').removeClass('active');
            }
              if (scroll>=4*height) {
              $("section.service .head").css("margin-top", "0");
            }
               if (scroll>=3*height) {
              $("section.about .head").css("margin-top", "0");
            }
            if(window.innerHeight>$('body').scrollTop()){
              $(".pageup").css('opacity', '0');
            }
            else{
              $(".pageup").css('opacity', '1');
            }
            if(window.innerHeight*3<$('body').scrollTop()){
              $(".pagedown").css('opacity', '0');
            }
            else{
              $(".pagedown").css('opacity', '1');
            }

        })

document.onmousewheel = function (e) {
  e.preventDefault();
}
