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