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

	var app = document.getElementById('app');

	var typewriter = new Typewriter(app, {
		loop: true
	});

	typewriter
		.typeString('Hello World!')
		.pauseFor(2500)
		.deleteAll()
		.typeString('<strong>Soufian El habib!</strong>')
		.pauseFor(2500)
		.start();
});

$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
		$('.nav').addClass('affix');
	} else {
		$('.nav').removeClass('affix');
	}
});
