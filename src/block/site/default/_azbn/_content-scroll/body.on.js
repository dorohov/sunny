	
	$(document.body).on('site.page-content-cont.reheight', '.page-content-cont', {}, function(event, obj){
		event.preventDefault();
		
		var pcc = $(document.body).find('.page-content-cont').eq(0);
		var cs = pcc.find('.content-scroll');
		
		//var _h = (parseInt(cs.attr('data-resize-height')) || 50) ;
		var _h_page = pcc.find('.content-cont.right').attr('data-right-bg');

		
		
		if (screenJS.czr_isLG()) {
			var	_h_default = 140,
				_h_default_news_item = 160,
				_h_default_hyp = 250,
				_h_default_doc = 230,
				_h_default_gallery = 150,
				_h_default_none = 30;
		} else  {
			var _h_default = 170,
				_h_default_news_item = 250,
				_h_default_hyp = 370,
				//_h_default_hyp = 270,
				_h_default_doc = 280,
				_h_default_gallery = 140,
				_h_default_none = 70;
		}
		if(screenJS.czr_isXL()){
			var _h_default_hyp = 300;
		} 
		if (_h_page == 'none'){
			var _h = obj.height - _h_default_none - pcc.find('.cont-header').outerHeight(true);
		}
		else if (_h_page == 'default-news-item'){
			var _h = obj.height - _h_default_news_item - pcc.find('.cont-header').outerHeight(true);
		}
		else if (_h_page == 'default-gallery'){
			var _h = obj.height - _h_default_gallery - pcc.find('.cont-header').outerHeight(true);
		}
		else if (_h_page == 'default-doc'){
			var _h = obj.height - _h_default_doc - pcc.find('.cont-header').outerHeight(true);
		}
		else if (_h_page == 'default-hyp'){
			var _h = obj.height - _h_default_hyp - pcc.find('.cont-header').outerHeight(true);
		}
		else {
			var _h = obj.height - _h_default - pcc.find('.cont-header').outerHeight(true);
		};

		if (!device.mobile() && !device.tablet()){
			cs.css({
				'height' : _h + 'px',
				//'margin-top' : obj.height / 3,
			});
			cs.find('.scroll-container').trigger('init');
		}
		
		
	});
	