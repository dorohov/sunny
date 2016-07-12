	
	$(document.body).on('click.fecss.url-history', '.url-history', {}, function(event){
		
		if(device.mobile() || device.tablet()) {
			
		} else {
			event.preventDefault();
			
			var btn = $(this);
			var href = btn.attr('href');
			var target = btn.attr('data-target');
			var preloader = parseInt(btn.attr('data-preloader') || 0);
			
			$('.content-cont.right').attr('data-state', 'passive');
			
			if(target && typeof target != 'undefined' && target != 'undefined') {
				//href = target;
			} else {
				target = '#default-url-history-container:#default-url-history-container';
			}
			
			var addToHistory = true;
			
			if(preloader) {
				$('._czr__loader.page-loader').addClass('active');
			}
			
			setTimeout(function(){
				$(document.body).trigger('fecss.url-history.get', [href, target, addToHistory, 'active']);
			},555)
			
			
			
		}
		
		
	});
	