	
	$(document.body).on('site.page-content-cont.reheight', '.page-content-cont', {}, function(event, obj){
		event.preventDefault();
		
		var pcc = $(document.body).find('.page-content-cont').eq(0);
		var cs = pcc.find('.content-scroll');
		
		//var _h = (parseInt(cs.attr('data-resize-height')) || 50) ;
		var _h_page = pcc.find('.content-cont.right').attr('data-right-bg');

		
		
		if (_h_page == 'none'){
			var _h = obj.height - 70 - pcc.find('.cont-header').outerHeight(true);
		}
		else if (_h_page == 'default-doc'){
			var _h = obj.height - 280 - pcc.find('.cont-header').outerHeight(true);
		}
		else if (_h_page == 'default-gallery'){
			var _h = obj.height - 140 - pcc.find('.cont-header').outerHeight(true);
		}
		else {
			var _h = obj.height - 170 - pcc.find('.cont-header').outerHeight(true);
		}
		cs.css({
			'height' : _h + 'px',
			//'margin-top' : obj.height / 3,
		});
		
		cs.find('.scroll-container').trigger('init');
		
	});
	