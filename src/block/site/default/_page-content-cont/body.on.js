	
	$(document.body).on('fecss.url-history.init', null, {}, function(event){
		event.preventDefault();
		
		$('.page-content-cont').each(function(index){
			
			var block = $(this);
			conaole.log('fecss.url-history.init: .page-content-cont');
			
		});
		
	});
	
	$(document.body).on('site.page-content-cont.state', '.page-content-cont', {}, function(event, obj){
		event.preventDefault();
		
		$('.page-content-cont').attr('data-state', obj.state);
		
	});
	