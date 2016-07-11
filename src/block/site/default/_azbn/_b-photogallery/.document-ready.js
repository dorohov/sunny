	
	$(document.body).on('site.page-content-cont.b-photogallery.date-filters.reshow', null, {}, function(event, flt){
		event.preventDefault();
		
		//var items = $('.page-content-cont .b-photogallery .date-filters');
		$('.page-content-cont .b-photogallery .date-filters').hide();
		$('.page-content-cont .b-photogallery .date-filters[data-flt="' + flt + '"]').fadeIn('fast');
		
	});
	
	$(document.body).on('site.page-content-cont.b-photogallery.date-filters.showactive', null, {}, function(event){
		event.preventDefault();
		
		var flt = $('.page-content-cont .b-photogallery .street-filters a.active').attr('data-flt') || 0;
		
		$('.page-content-cont .b-photogallery .date-filters').hide();
		$('.page-content-cont .b-photogallery .date-filters[data-flt="' + flt + '"]').fadeIn('fast');
		
	});
	
	$(document.body).on('click.site.page-content-cont.b-photogallery.street-filters.a', '.page-content-cont .b-photogallery .street-filters a', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var flt = btn.attr('data-flt');
		
		$('.page-content-cont .b-photogallery .street-filters a').removeClass('active');
		btn.addClass('active');
		
		$(document.body).trigger('site.page-content-cont.b-photogallery.date-filters.reshow', [flt]);
		//alert(flt);
		
	});
	
	//$('.page-content-cont .b-photogallery .street-filters a').eq(0).trigger('click.site.page-content-cont.b-photogallery.street-filters.a');
	
	
	
	$(document.body).on('click.site.page-content-cont.b-photogallery.date-filters.a', '.page-content-cont .b-photogallery .date-filters a.archive-bttn', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var block = btn.closest('.date-filters');
		
		block.find('a.gal-bttn').filter(':hidden').fadeIn('fast');
		btn.empty().remove();
		
	});
	
	
	$(document.body).on('site.page-content-cont.b-photogallery.date-filters.restruct', null, {}, function(event){
		event.preventDefault();
		
		$('.page-content-cont .b-photogallery .date-filters').each(function(index){
			
			var block = $(this);
			block.find('a.gal-bttn').hide();
			
			block.find('a.gal-bttn.active').insertBefore(block.find('a.gal-bttn').eq(0));
			
			block.find('a.gal-bttn').eq(0).show();
			block.find('a.gal-bttn').eq(1).show();
			block.find('a.gal-bttn').eq(2).show();
			
		});
		
	});
	
	$(document.body).trigger('site.page-content-cont.b-photogallery.date-filters.restruct');
	
	