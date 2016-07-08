	
	$(document.body).on('click.site.page-content-cont.close-it', '.page-content-cont .close-it', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		
		btn.closest('.page-content-cont').trigger('site.page-content-cont.state', [{state:'default'}]);
		location.href = '/';
		
	});
	
	//$('.page-content-cont').trigger('site.page-content-cont.state', [{state:'active'}]);
	