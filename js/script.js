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
		.typeString('<strong> Bonjour... </strong>')
		.pauseFor(500)
		.deleteAll()
		.typeString("Je m'appelle </br><strong style='font-size:1.6em'>Soufian El Habib!</strong>")
		.pauseFor(1000)
		.deleteAll()
		.typeString("Je suis </br><strong style='font-size:1.6em'>DÉVELOPPEUR WEB💻</strong>")
		.pauseFor(2500)
		.deleteAll()
		.start();
});

$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
		$('.nav').addClass('affix');
	} else {
		$('.nav').removeClass('affix');
	}
});
