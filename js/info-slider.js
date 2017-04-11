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

$('#uph-link_electronics').hover(function () {
	hideOthers("uphostery-slider");
	showInfo("uph-slider_electronics");
});

$('#uph-link_accessories').hover(function() {
	hideOthers("uphostery-slider");
	showInfo("uph-slider_accessories");
});

$('#uph-link_other').hover(function() {
	hideOthers("uphostery-slider");
	showInfo("uph-slider_other");
});
