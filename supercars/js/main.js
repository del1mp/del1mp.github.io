$(document).ready(function(){
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
