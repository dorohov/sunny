$('img').addClass('img-responsive');
var url = window.location.pathname;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 
$('._in__carousel .item').eq(0).addClass('active');
if (!device.mobile()){
	new WOW().init();
} else {
	$('.navbar-site').addClass('navbar-mobile')
};
$(".navbar-mobile").autoHidingNavbar();