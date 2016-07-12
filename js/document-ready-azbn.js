'use strict';

$(function() {
	
	$(document.body).on('click', 'navbar .nav.navbar-nav._czr__navbar-nav li a', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var ul = btn.closest('.nav.navbar-nav._czr__navbar-nav');
		ul.find('li.active').removeClass('active');
		btn.closest('li').addClass('active');
		
	})
	
});

$(function() {
	
	$(document.body).on('click', '.b-photogallery .street-filters a', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var flt = btn.attr('data-flt');
		
		$('.b-photogallery .b-photo-list').hide();
		$('.b-photogallery .b-photo-list[data-flt="' + flt + '"]').fadeIn('fast');
		
		$('.scroll-container').trigger('init');
		
	})
	
});

$(function() {
	
	$(document.body).on('submit', '._azbn-ajax-form', {}, function(event){
		event.preventDefault();
		
		//$('._czr__loader.page-loader').addClass('active');
		
		var form = $(this);
		var _form = form.serialize();
		
		$.post('/formsave/', _form, function(data){
			
			// <a href="http://zv.dorohovdesign.ru/gallery/" class="btn-site btn-yellow wow slideInDown url-history" data-wow-delay="1.5s" style="visibility: visible; animation-delay: 1.5s; animation-name: slideInDown;">фотогалерея</a>
			
			var a = $('<a/>', {
				href : '/formsave/result/',
				class : 'url-history',
			})
				.trigger('click');
			
		})
		
	})
	
});

