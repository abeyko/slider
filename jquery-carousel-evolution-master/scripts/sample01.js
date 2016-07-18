$(document).ready(function(){
	$('.carousel').carousel({
		carouselWidth:930,
		carouselHeight:330,
		directionNav:true,
		shadow:true,
		buttonNav:'bullets'
	});
	$(function() {
    
    $("h2")
        .wrapInner("<span>")

    $("h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

	});
	/*
	if (bullet.eq(currentSlide)) {
		$("h2").show();
	} else {
		$("h2").hide();
	}
	*/
});