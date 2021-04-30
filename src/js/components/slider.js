$('.carousel__slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
  lazyLoad: 'ondemand',
  autoplay: true,
  autoplaySpeed: 3000,
  // arrows: false,
	responsive: [
    {
			breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
		},
		{
			breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
		},
		{
			breakpoint: 770,
      settings: {
        slidesToShow: 1
      }
		}
	]
});