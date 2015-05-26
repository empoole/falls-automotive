$('#services-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#upholstery-services').offset().top - $('.service-heading').outerHeight() + 'px'}, 'slow');
});

$('#about-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#about').offset().top - $('.heading').outerHeight() + 'px'}, 'slow');
});

$('#contact-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#contact').offset().top + 'px'}, 'slow');
})