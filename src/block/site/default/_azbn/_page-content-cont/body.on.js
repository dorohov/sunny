	
	$(document.body).on('fecss.url-history.init', null, {}, function(event, obj){
		event.preventDefault();
		
		//$('.page-content-cont .content-cont').delay(300);
		
		if(obj && obj.state) {
			$('.page-content-cont').trigger('site.page-content-cont.state', [obj]);
			
			/*
			if(obj.state == 'default') {
				$('.content-cont.right').attr('data-state', 'passive');
			} else {
				$('.content-cont.right').attr('data-state', 'default');
			}
			*/
			
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
			
			/*
			if(obj && obj.state && obj.state == 'default') {
				$('.content-cont.right').attr('data-state', 'passive');
			} else {
				$('.content-cont.right').attr('data-state', 'default');
			}
			*/
			
		//}
		
		
		$(document.body).trigger('site.page-content-cont.b-photogallery.date-filters.init');
		
	});
	
	$(document.body).on('site.page-content-cont.reheight', '.page-content-cont', {}, function(event, obj){
		event.preventDefault();
		
		console.log('.page-content-cont trigger: site.page-content-cont.reheight ' + obj.height);
	});
	