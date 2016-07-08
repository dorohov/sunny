	
	$(document.body).on('click.fecss.url-history', '.url-history', {}, function(event){
		event.preventDefault();
		
		if(device.mobile() || device.tablet()) {
			
		} else {
			
			var btn = $(this);
			var href = btn.attr('href');
			var target = btn.attr('data-target');
			
			$('.content-cont.right').attr('data-state', 'passive');
			
			if(target && typeof target != 'undefined' && target != 'undefined') {
				//href = target;
			} else {
				target = '#default-url-history-container:#default-url-history-container';
			}
			
			var addToHistory = true;
			
			setTimeout(function(){
				$(document.body).trigger('fecss.url-history.get', [href, target, addToHistory, 'active']);
			},555)
			
			
			
		}
		
		
	});
	