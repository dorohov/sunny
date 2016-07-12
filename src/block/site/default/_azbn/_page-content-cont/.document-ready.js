	
	//$('.page-content-cont').trigger('site.page-content-cont.state', [{state:'active'}]);
	
	$('.content-cont.right').attr('data-state', 'default');
	
	
	$(document.body).on('click.site.page-content-cont.close-it', '.page-content-cont .close-it', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		
		//$('.content-cont.right').attr('data-state', 'passive');
		
		btn.closest('.page-content-cont').trigger('site.page-content-cont.state', [{state:'default'}]);
		
		//location.href = '/';
		
	});
	
	
	
	$(document.body).on('click.site.page-content-cont.doc-filter.a', '.page-content-cont .content-cont .doc-filter a', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var flt = btn.attr('data-flt');
		
		$('.page-content-cont .content-cont .doc-filter a').removeClass('active');
		btn.addClass('active');
		
		var items = $('.page-content-cont .content-cont .b-doc-list .doc-col');
		items.hide();
		items.filter('[data-flt="' + flt + '"]').fadeIn('fast');
		
		$('.scroll-container').trigger('init');
		
	});
	
	$('.page-content-cont .content-cont .doc-filter a').eq(0).trigger('click.site.page-content-cont.doc-filter.a');
	
	
	if(device.mobile() || device.tablet()) {
		
		$('body > .index-page').empty().remove();
		
	}