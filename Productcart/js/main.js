$(document).ready(function(){
    var now = 0;
    var counter = 0;
    var tmp;
    var last = 0;
    $(".rating i").click(function(){
          counter = counter + 1;
          counter = parseInt(counter)
          tmp = $(this).children('span').html(); 
          tmp = parseInt(tmp);
          last = tmp + last;
          last = parseInt(last)
          console.log(last)
          now = last / counter;
         $('span.evaluation').html(counter); 
         $('span.rati').html(now.toFixed(1)); 
         if ($('span.rati').html() >=5){
            $('.rating i').css('color', '#fccf47');
         }
         else {
            $('.rating i').css('color', '#c9c9c9')
         }
           if ($('span.rati').html() >=4){
            $('.rating i:nth-last-child(-n+4)').css('color', '#fccf47');
         }
           else {
            $('.rating i').css('color', '#c9c9c9')
         }
            if ($('span.rati').html() >=3){
            $('.rating i:nth-last-child(-n+3)').css('color', '#fccf47');
         }
           else {
            $('.rating i').css('color', '#c9c9c9')
         }
            if ($('span.rati').html() >=2){
            $('.rating i:nth-last-child(-n+2)').css('color', '#fccf47');
         }
           else {
            $('.rating i').css('color', '#c9c9c9')
         }
            if ($('span.rati').html() >=1){
            $('.rating i:nth-last-child(-n+1)').css('color', '#fccf47');
         }
           else {
            $('.rating i').css('color', '#c9c9c9')
         }

    });
    $(".color").click(function(){
        $(this).css('border', '2px solid #f0f');
       $(this).siblings('span').css('border', 'none');
    });
     $(".gray").click(function(){
        $('.cilir').html('Wireless Gray'); 
        $('.headphones-gray').css('display', 'block');
        $('.headphones-black').css('display', 'none');
      
    });
      $(".black").click(function(){
        $('.cilir').html('Wireless Black'); 
        $('.headphones-black').css('display', 'block');
        $('.headphones-gray').css('display', 'none');

    });
      var lala;
        lala = $('h2.price').text();
        lala = parseFloat(lala);
document.getElementById('number').oninput = function (){  
if(parseInt(this.value,10)<10){
    this.value='0'+this.value;}
  if ($(this).val() >= 10){
   $('h2.price').css('text-decoration', 'line-through');
   $('.discount').html('(- 10%)');
  }
  else{
    $('h2.price').css('text-decoration', 'none');
    $('.discount').html('');
    $('.new-price').html('');
  }
    if ($(this).val() >= 20){
   $('h2.price').html("Out of Stock").css('text-decoration', 'none');
   $('.discount').html('');
  }
 else{
    $('h2.price').text(lala);
 }
 if ($(this).val() < 20) { 
    var quantity = $(this).val();
   quantity = parseFloat(quantity);
   var price = $('h2.price').html();
   price = parseFloat(price);
   price = quantity * price;
    $('h2.price').html(price.toFixed(2));
     $("input#addcart").click(function(e){
        e.preventDefault();
        $('span.all-price').html(price.toFixed(2));
        $('span.lots').html(quantity);
        $('.cart').css('display', 'block');
        $('.img').css('display', 'none');
    }); 
     $(".delete").click(function(){
        $('span.all-price').html('0');
        $('span.lots').html('0');
    }); 
      $(".close").click(function(){
        $('.cart').css('display', 'none');
        $('.img').css('display', 'block');
    }); 
 }
 if ($(this).val() >= 10) {
    price = price - (price * 0.1);
    $('h2.new-price').html('$'+price.toFixed(2));
 }
  if ($(this).val() >= 20){
    $('h2.new-price').html("(~_~)");
  }
   
}

});
  