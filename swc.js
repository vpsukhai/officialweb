$(document).ready(function() { 
  var id = '#dialog';
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  $('#mask').css({'width':maskWidth,'height':maskHeight}); 
  $('#mask').fadeIn(500); 
  $('#mask').fadeTo("slow",0.9); 
        var winH = $(window).height();
  var winW = $(window).width();
        $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);
     $(id).fadeIn(2000);  
     $('.window .close').click(function (e) {
  e.preventDefault();
  $('#mask').hide();
  $('.window').hide();
     });  
     $('#mask').click(function () {
  $(this).hide();
  $('.window').hide();
 });  
 
});

Query(document).ready(function($){
window.onload = function (){
$(".bts-popup").delay(1000).addClass('is-visible');
}
//open popup
$('.bts-popup-trigger').on('click', function(event){
event.preventDefault();
$('.bts-popup').addClass('is-visible');
});
//close popup
$('.bts-popup').on('click', function(event){
if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
event.preventDefault();
$(this).removeClass('is-visible');
}
});
//close popup when clicking the esc keyboard button
$(document).keyup(function(event){
if(event.which=='27'){
$('.bts-popup').removeClass('is-visible');
}
});
});
