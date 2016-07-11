	
	$(document.body).on('click.site.page-content-cont.b-photogallery.street-filters.a', '.page-content-cont .b-photogallery .street-filters a', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var flt = btn.attr('data-flt');
		
		$('.page-content-cont .b-photogallery .street-filters a').removeClass('active');
		btn.addClass('active');
		
		var items = $('.page-content-cont .b-photogallery .date-filters');
		items.hide();
		items.filter('[data-flt="' + flt + '"]').fadeIn('fast');
		
	});
	
	//$('.page-content-cont .b-photogallery .street-filters a').eq(0).trigger('click.site.page-content-cont.b-photogallery.street-filters.a');
	
	
	
	$(document.body).on('click.site.page-content-cont.b-photogallery.date-filters.a', '.page-content-cont .b-photogallery .date-filters a.archive-bttn', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var block = btn.closest('.date-filters');
		
		block.find('a.gal-bttn').filter(':hidden').fadeIn('fast');
		btn.empty().remove();
		
	});
	
	$('.page-content-cont .b-photogallery .date-filters').each(function(index){
		
		var block = $(this);
		block.find('a.gal-bttn').hide();
		block.find('a.gal-bttn').eq(0).show();
		block.find('a.gal-bttn').eq(1).show();
		block.find('a.gal-bttn').eq(2).show();
		
	});
	