$(document).ready(function() {
	$('.resource-button').mouseenter(function() {
		$(this).fadeTo('fast',1);
	});
	$('.resource-button').mouseleave(function() {
		$(this).fadeTo('fast',0.5);
	});
	$('.resource-button').mousedown(function() {
		$(this).css('background', 'black');
	});
	$('.resource-button').mouseup(function() {
		$(this).css('background', 'grey');
	});
});
