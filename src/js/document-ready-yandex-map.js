'use strict';

$(function() {
	
	var yam = $('#yandex-map');
	
	if(yam.length) {
		
		var myMap;
		
		function initYandexMap() {
			
			if($(document).width() < 500) {
				
				myMap = new ymaps.Map('yandex-map', {
					center: [52.727068, 41.447900],
					zoom: 17,
				}, {
					searchControlProvider: 'yandex#search'
				});
				
			} else {
				
				myMap = new ymaps.Map('yandex-map', {
					center: [52.727033, 41.446000],//41.448043%2C52.726433
					zoom: 17,
				}, {
					searchControlProvider: 'yandex#search'
				});
				
			}
			
			
			
			
			var fedeco_office = new ymaps.Placemark([52.727068, 41.447900], { //myMap.getCenter(), {
				hintContent: 'Группа компаний Fedeco'
			}, {
				iconLayout: 'default#image',
				iconImageHref: '/img/default/.contact-map/contact-map-logo.png',
				iconImageSize: [94, 104],
				iconImageOffset: [-47, -104]
			});
			myMap.geoObjects.add(fedeco_office);
		
		}
		
		ymaps.ready(initYandexMap);
		
	}
	
});