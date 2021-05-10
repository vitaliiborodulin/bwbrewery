let age = $('#age');

if(localStorage.age != 18) {
  age.delay(700).fadeIn();
  $('html').addClass('scroll-disabled');
} 

$('#age .btn[href="#yes"]').on('click', function(){
  localStorage.age = 18;
  $('html').removeClass('scroll-disabled');
  age.fadeOut();
})