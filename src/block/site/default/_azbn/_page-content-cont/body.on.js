	
	$(document.body).on('fecss.url-history.init', null, {}, function(event, obj){
		event.preventDefault();
		
		//$('.page-content-cont .content-cont').delay(300);
		
		if(obj && obj.state) {
			$('.page-content-cont').trigger('site.page-content-cont.state', [obj]);
		}
		/*
		.each(function(index){
			
			var block = $(this);
			console.log('fecss.url-history.init: .page-content-cont');
			
			block.trigger('site.page-content-cont.state', [obj]);
			
		})
		;
		*/
		
	});
	
	$(document.body).on('site.page-content-cont.state', '.page-content-cont', {}, function(event, obj){
		event.preventDefault();
		
		//if(obj && obj.state) {
			$(this).attr('data-state', obj.state || 'default');
		//}
		
	});
	
	$(document.body).on('site.page-content-cont.reheight', '.page-content-cont', {}, function(event, obj){
		event.preventDefault();
		
		console.log('.page-content-cont trigger: site.page-content-cont.reheight ' + obj.height);
	});
	