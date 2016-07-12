
$(document.body).on('site.down-btn.reshow', '.down-btn', {}, function(event, prop) {
	event.preventDefault();
	
	var block = $(this);
	if(prop > 0.9) {
		if(block.hasClass('hidden')) {
			
		} else {
			block.addClass('hidden');
		}
	} else {
		if(block.hasClass('hidden')) {
			block.removeClass('hidden');
		} else {
			
		}
	}
	
});

$(document.body).on('move-scroll', '.scroll-container', {}, function(event, scrolltop) {
	event.preventDefault();
	
	var block = $(this);
	var target = $(block.attr('data-target') + ' .scroll-element').eq(0);
	var otarget = target.find('.scroll-overflow').eq(0);
	
	var line = block.find('.scroll-line');
	var scroll = line.find('.scroll');
	var scroll_ball = scroll.find('.scroll-ball');
	
	var percent = scrolltop / (otarget.outerHeight(true) - target.outerHeight(true));
	
	var _line_h = line.outerHeight(true) - scroll.outerHeight(true);
	
	var pos = _line_h * percent;
	
	if(pos > _line_h) {
		scroll.css({'top':_line_h + 'px'});
	} else if(pos < 0) {
		scroll.css({'top':0 + 'px'});
	} else {
		scroll.css({'top':pos + 'px'});
	}
	
	$('.down-btn').trigger('site.down-btn.reshow', [ pos / _line_h ]);
	
});

$(document.body).on('init', '.scroll-container', {}, function(event) {
	event.preventDefault();
	
		var block = $(this);
		var target = $(block.attr('data-target') + ' .scroll-element').eq(0);
		var otarget = target.find('.scroll-overflow').eq(0);
		
		target
			.off('scroll')
			.on('scroll', function(event) {
				block.trigger('move-scroll', [target.scrollTop()]);
			});
		
		block.empty();
		
		var line = $('<div/>', {
			class : 'scroll-line',
		})
			.appendTo(block);
		
		var scroll = $('<div/>', {
			class : 'scroll ball',
		})
			.appendTo(line);
		
		var scroll_ball = $('<div/>', {
			class:'scroll-ball',
		})
			.appendTo(scroll);
		
		var __setscroll = function() {
			
			if((otarget.outerHeight(true) - target.outerHeight(true)) > 0) {
				
				scroll.draggable({
					axis:'y',
					containment : 'parent',
					scroll:false,
					drag:function(event, ui){
						
						var s_ratio = ui.position.top / (line.outerHeight(true) - scroll.outerHeight(true));
						var _n_pos = (otarget.outerHeight(true) - target.outerHeight(true)) * s_ratio;
						
						target.scrollTop(_n_pos);
					},
				});
				
			} else {
				
				block.empty();
				
			}
			
			target.trigger('scroll');
			
		}
		__setscroll();
		
		
});

$(document.body).on('DOMSubtreeModified changeClass', '.scroll-overflow', {}, function(event) {
	$(this).closest('.scroll-hide').find('.scroll-container').trigger('init');
});

$('.scroll-container').trigger('init');
