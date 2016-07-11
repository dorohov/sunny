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
		
	})
	
});

