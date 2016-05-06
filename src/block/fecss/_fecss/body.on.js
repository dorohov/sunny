
/*
// ������� ����������
$('#foo').on('custom', null, {otherParam:'uha-ha!'}, function(event, param1, param2){
	alert(param1 + "\n" + param2); // ��� �������������� ������ � ������ extraParameters
	alert(event.data.otherParam);  // � ��� � ������ eventData
	// ������������ JS-������� event.originalEvent
});
 
// ������� ������� ������� trigger, � ���������� ����� ������� ��� ����������
$('#foo').trigger('custom', ['Custom', 'Event']);
*/

$(document.body).on('fecss.default',	null, {}, function(event) {
	console.log('body trigger:fecss.default');
});

$(document.body).on('fecss.init',		null, {}, function(event) {
	console.log('body trigger:fecss.init');
});

$(document.body).on('fecss.window.unload',		null, {}, function(event, _event) {
	console.log('body trigger:fecss.window.unload: ' + JSON.stringify(_event));
});

$(document.body).on('fecss.ajax.success',		null, {}, function(event) {
	console.log('body trigger:fecss.ajax.success');
});

$(document.body).on('fecss.keydown',		null, {}, function(event, _event) {
	console.log('body trigger:fecss.keydown: ' + JSON.stringify(_event));
});

$(document.body).on('DOMSubtreeModified',		null, {}, function(event, _event) {
	console.log('body trigger:DOMSubtreeModified: ' + JSON.stringify(_event));
});
