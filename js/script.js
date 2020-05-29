$(document).ready(function() {
	var options = {
		animateThreshold: 100
	};
	$('.aniview').AniView(options);

	$('.code').each(function(i, block) {
		hljs.highlightBlock(block);
	});

	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 600
	});
});

$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
		$('.nav').addClass('affix');
	} else {
		$('.nav').removeClass('affix');
	}
});
