'use strict';

$(function() {
	
	var yam = $('#yandex-map');
	
	var myMap;
	
	var initYandexMap = function() {
		
		if($(document).width() < 500) {
			
			myMap = new ymaps.Map('yandex-map', {
				center: [52.727068, 41.447900], // офис
				zoom: 17,
			}, {
				searchControlProvider: 'yandex#search'
			});
			
		} else {
			
			myMap = new ymaps.Map('yandex-map', {
				//center: [52.727033, 41.446000],// офис
				//zoom: 17,
				
				center: [52.767200, 41.389000], // расположение района
				zoom: 14,
			}, {
				searchControlProvider: 'yandex#search'
			});
			
		}
		
		
		
		// для офиса!!!
		
		var fedeco_office = new ymaps.Placemark([52.727068, 41.447900], { //myMap.getCenter(), {
			hintContent: 'Группа компаний Fedeco'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/default/.contact-map/contact-map-logo.png',
			iconImageSize: [94, 104],
			iconImageOffset: [-47, -104]
		});
		
		
		
		// для расположения!!!
		
		var area_way = new ymaps.Polyline([
			// Указываем координаты вершин ломаной.
				[52.749662, 41.416940],
				[52.785037, 41.370827],
				[52.784436, 41.366600]
			], {
			// Описываем свойства геообъекта.
			// Содержимое балуна.
				balloonContent: "Путь до Звездного"
			}, {
			// Задаем опции геообъекта.
			// Отключаем кнопку закрытия балуна.
				balloonCloseButton: false,
				// Цвет линии.
				strokeColor: "#80A548",
				// Ширина линии.
				strokeWidth: 6,
				// Коэффициент прозрачности.
				strokeOpacity: 0.9
			});
		
		var start_place = new ymaps.Circle([
				// Координаты центра круга.
				[52.749662, 41.416940],
				// Радиус круга в метрах.
				50
			], {
				// Описываем свойства круга.
				// Содержимое балуна.
				balloonContent: '',
				// Содержимое хинта.
				hintContent: ''
			}, {
				// Задаем опции круга.
				// Включаем возможность перетаскивания круга.
				draggable: false,
				// Цвет заливки.
				// Последний байт (77) определяет прозрачность.
				// Прозрачность заливки также можно задать используя опцию "fillOpacity".
				fillColor: "#80A548",
				// Цвет обводки.
				strokeColor: "#80A548",
				// Прозрачность обводки.
				strokeOpacity: 0.9,
				// Ширина обводки в пикселях.
				strokeWidth: 2
			});
		
		var starry_place = new ymaps.Circle([
				// Координаты центра круга.
				[52.784436, 41.366600],
				// Радиус круга в метрах.
				50
			], {
				// Описываем свойства круга.
				// Содержимое балуна.
				balloonContent: '',
				// Содержимое хинта.
				hintContent: ''
			}, {
				// Задаем опции круга.
				// Включаем возможность перетаскивания круга.
				draggable: false,
				// Цвет заливки.
				// Последний байт (77) определяет прозрачность.
				// Прозрачность заливки также можно задать используя опцию "fillOpacity".
				fillColor: "#80A548",
				// Цвет обводки.
				strokeColor: "#80A548",
				// Прозрачность обводки.
				strokeOpacity: 0.9,
				// Ширина обводки в пикселях.
				strokeWidth: 2
			});
		
		myMap
			.geoObjects
				.add(fedeco_office)
				.add(area_way)
				.add(start_place)
				.add(starry_place)
		;
	
	}
	
	if(yam.length) {
		
		ymaps.ready(initYandexMap);
		
	}
	
});