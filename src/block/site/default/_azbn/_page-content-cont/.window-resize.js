$(function() {
	
	var pcc = $(document.body).find('.page-content-cont').eq(0);
	var nb = $(document.body).find('.navbar').eq(0);
	
	if (!device.mobile() && !device.tablet()){
		if(nb.length) {
			
			var h = ($(window).outerHeight(true) - nb.outerHeight(true));
			
			pcc.css({
				height : h,
			})
			
			pcc.trigger('site.page-content-cont.reheight', [{height : h}]);
		}
	}
	
});