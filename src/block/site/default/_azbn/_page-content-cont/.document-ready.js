	
	//$('.page-content-cont').trigger('site.page-content-cont.state', [{state:'active'}]);
	
	$('.content-cont.right').attr('data-state', 'default');
	$('.page-content-cont .bear').attr('data-state', 'active');
	
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
	
	
	if(!$('body').eq(0).hasClass('page-id-1')) {
		if(device.mobile() || device.tablet()) {
			
			$('body > .index-page').empty().remove();
			
		}
	}
	
	$(document.body).on('click.site.page-content-cont.hypothec-modal-btn', '.page-content-cont .content-cont .hypothec-modal-btn', {}, function(event){
		event.preventDefault();
		
		$('#modal-hyp').modal();//options
		
	});
	