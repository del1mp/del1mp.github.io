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
 $('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  
