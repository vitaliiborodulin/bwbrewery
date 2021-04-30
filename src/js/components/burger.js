const burger = $('.header__burger');
const menu = $('.header__menu');

burger.on('click', function (e) {

  // if ($('html').hasClass('scroll-disabled')) {
  //   $('html').removeClass('scroll-disabled');
  // }

	e.preventDefault();
	burger.toggleClass('header__burger--close');
	menu.toggleClass('header__menu--open');
  // $('html').toggleClass('scroll-disabled');

	$(document).keyup(function(e) {
		if (e.key === "Escape" || e.keyCode === 27) {
			$('.header__menu').removeClass('header__menu--open');
			burger.removeClass('header__burger--close');
			// $('html').removeClass('scroll-disabled');
		}
	});
});