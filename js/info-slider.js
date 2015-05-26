function showInfo(infoId) {
	$('#' + infoId).addClass('info-slider-shown');
}

function hideOthers(sliderId) {
	$('#' + sliderId + " li").each(function() {
		$(this).removeClass('info-slider-shown');
	});
}



//UPHOLSTERY INFO DISPLAY
$('#uph-link_seat-repairs').hover(function() {
	hideOthers("uphostery-slider");
	showInfo("uph-slider_seat-repairs");
});

$('#uph-link_tops').hover(function() {
	hideOthers("uphostery-slider");
	showInfo("uph-slider_tops");
});

$('#uph-link_headliners').hover(function () {
	hideOthers("uphostery-slider");
	showInfo("uph-slider_headliners");
});

$('#uph-link_carpet').hover(function() {
	hideOthers("uphostery-slider");
	showInfo("uph-slider_carpet");
});
