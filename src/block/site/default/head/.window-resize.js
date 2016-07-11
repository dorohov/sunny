var h_window = $(window).height(), 
	w_window = $(window).width(),
	h_navbar = $('.navbar-site').outerHeight(true),
	h_body = h_window - h_navbar;

/*var h_header = $('.header-site-block').outerHeight(true),
	h_footer = $('.footer-site').outerHeight(true),
	w_step = $('._srcb__item-inner').outerWidth(true),
	w_step_b = $('._srcb__step-item:before').outerWidth(true),
 	h_404 = h_window - h_header - h_footer,
 	w_step_drop = w_step + 40; 	
	$("._srcb__dropdown-menu").css("max-width", w_step_drop);
*/
if (w_window > 767){
	$(".index-page").css("min-height", h_body);
	//$(".navbar-site").addClass('navbar-fixed-bottom').removeClass('navbar-fixed-top');
} else {
	$(".index-page").removeAttr("style");
	//$(".navbar-site").addClass('navbar-fixed-top').removeClass('navbar-fixed-bottom');
};

if (device.mobile() || device.tablet()) {	
	$("._in__carousel").removeAttr("data-ride").removeClass('carousel').removeClass('slide');
	$("._in__carousel .carousel-indicators").css("display", "none");
	$("._in__carousel .carousel-control").css("display", "none");
	$('._in__carousel .carousel-inner').owlCarousel({
		dots: true,
		loop: true,
		//nav: true,
		//navText: [],
		items:1,
		autoplay:true,
    	autoplayTimeout:10000,
    	autoplayHoverPause:true
	}); 
}
$('._nip__carousel-inner').owlCarousel({
	//dots: fasle,
	//loop: true,
	nav: true,
	navText: [],	
	responsive : {
	    0 : {items:1},
	    768 : {items:3}
	}
}); 
if (device.mobile()) {
	//var _h__page = h_window - h_navbar;
	//$('.layouts-page .iframe-yandex-map').css('width', w_window).css('height', _h__page);
}
if (device.iphone()) {
	//$('.layouts-page .iframe-yandex-map').attr("scrolling", "no").css(' -webkit-overflow-scrolling', 'touch');
}