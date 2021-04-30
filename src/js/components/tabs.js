$('.prod__item').hide();

let attr = $('.prod__tab.prod__tab--active').attr('data-tab');
$('.prod__item[data-tab="'+ attr +'"]').show();

$('.prod__tab').on('click', function(){

  $('.prod__tab').removeClass('prod__tab--active');
	$(this).addClass('prod__tab--active');

  let id = $(this).attr('data-tab');

  $('.prod__item').hide();
  let content = $('.prod__item[data-tab="'+ id +'"]');
  content.show();
  
});

$('#prod-select').on('change', function(){
	let id = $('#prod-select').val();

  $('.prod__item').hide();
  let content = $('.prod__item[data-tab="'+ id +'"]');
  content.show();

});

//map

$('.points__list li').hide();
let attrPoints = $('#map-select').val();
$('.points__list li[data-tab="'+ attrPoints +'"]').show();

$('#map-select').on('change', function(){
	let id = $('#map-select').val();

  $('.points__list li').hide();
  let content = $('.points__list li[data-tab="'+ id +'"]');
  content.show();

});