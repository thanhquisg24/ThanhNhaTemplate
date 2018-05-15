$(document).ready(function ($) {
	var widthW = $(window).width();
	/*$('.slider').bxSlider({
		mode: 'fade',
		slideWidth: widthW,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		pager: false,
		slideMargin: 0,
		auto: true,
		pause: 5000
	});
	
	$('.slider-product').bxSlider({
		slideWidth: 322,
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 1,
		pager: true,
		slideMargin: 70,
		auto: false,
		pause: 5000,
		controls: false
	});*/
	
	$('.homenews-listul').bxSlider({
		slideWidth: 358,
		minSlides: 2,
		maxSlides: 3,
		moveSlides: 1,
		pager: false,
		slideMargin: 32,
		auto: false,
		pause: 5000,
		controls: true
	});
	
	
/*	$('.galleryevent ul').bxSlider({
		slideWidth: 334,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		pager: false,
		slideMargin: 0,
		auto: false,
		pause: 5000,
		controls: true
	});
	
	
	$('.menu-top li').hover(function(){
		//$(this).find('ul').css('display','block');
		$(this).find('ul').slideDown();
	},function(){
		//$(this).find('ul').css('display','none');
		$(this).find('ul').slideUp();
	});*/
	
	baguetteBox.run('.tz-gallery');


});