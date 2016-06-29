	
	$(document.body).on('site.page-content-cont.reheight', '.page-content-cont', {}, function(event, obj){
		event.preventDefault();
		
		var pcc = $(document.body).find('.page-content-cont').eq(0);
		var cs = pcc.find('.content-scroll');
		
		//var _h = (parseInt(cs.attr('data-resize-height')) || 50) ;
		
		var _h = obj.height - 170 - pcc.find('.cont-header').outerHeight(true);
		
		cs.css({
			'height' : _h + 'px',
			//'margin-top' : obj.height / 3,
		});
		
		cs.find('.scroll-container').trigger('init');
		
	});
	