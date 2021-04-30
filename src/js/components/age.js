let age = $('#age');



// age.delay(700).fadeIn();
// $('html').addClass('scroll-disabled');

// if(localStorage.age != 18) {
//   age.delay(700).fadeIn();
// } 

$('#age .btn[href="#yes"]').on('click', function(){
  // localStorage.age = 18;
  // $('html').removeClass('scroll-disabled');
  age.fadeOut();
})