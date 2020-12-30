function showWithPercent() {
	var percent = 0.65;
	var percent2 = 0.8;
	var percent3 = 0.7;
	var percent4 = 0.65;
	var percent5 = 0.76;
	var percent6 = 0.83;
	AffectProgress(percent);
	AffectProgress2(percent2);
	AffectProgress3(percent3);
	AffectProgress4(percent4);
	AffectProgress5(percent5);
	AffectProgress6(percent6);
}

function AffectProgress(percent) {
	var bar = new ProgressBar.Line(progress, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 2000,
		color: '#00A9A5',
		trailColor: '#eee',
		trailWidth: 44,
		svgStyle: { width: '100%', height: '100%' },
		text: {
			style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#999',
				position: 'absolute',
				right: '0',
				top: '5px',
				padding: 0,
				margin: 0,
				transform: null
			},
			autoStyleContainer: false
		},
		from: { color: '#FFEA82' },
		to: { color: '#ED6A5A' },
		step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});
	bar.animate(percent); // Number from 0.0 to 1.0
}

function AffectProgress2(percent) {
	var bar = new ProgressBar.Line(progress2, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 2000,
		color: '#00A9A5',
		trailColor: '#eee',
		trailWidth: 44,
		svgStyle: { width: '100%', height: '100%' },
		text: {
			style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#999',
				position: 'absolute',
				right: '0',
				top: '5px',
				padding: 0,
				margin: 0,
				transform: null
			},
			autoStyleContainer: false
		},
		from: { color: '#FFEA82' },
		to: { color: '#ED6A5A' },
		step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});
	bar.animate(percent); // Number from 0.0 to 1.0
}

function AffectProgress3(percent) {
	var bar = new ProgressBar.Line(progress3, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 2000,
		color: '#00A9A5',
		trailColor: '#eee',
		trailWidth: 44,
		svgStyle: { width: '100%', height: '100%' },
		text: {
			style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#999',
				position: 'absolute',
				right: '0',
				top: '5px',
				padding: 0,
				margin: 0,
				transform: null
			},
			autoStyleContainer: false
		},
		from: { color: '#FFEA82' },
		to: { color: '#ED6A5A' },
		step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});
	bar.animate(percent); // Number from 0.0 to 1.0
}

function AffectProgress4(percent) {
	var bar = new ProgressBar.Line(progress4, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 2000,
		color: '#00A9A5',
		trailColor: '#eee',
		trailWidth: 44,
		svgStyle: { width: '100%', height: '100%' },
		text: {
			style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#999',
				position: 'absolute',
				right: '0',
				top: '5px',
				padding: 0,
				margin: 0,
				transform: null
			},
			autoStyleContainer: false
		},
		from: { color: '#FFEA82' },
		to: { color: '#ED6A5A' },
		step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});
	bar.animate(percent); // Number from 0.0 to 1.0
}

function AffectProgress5(percent) {
	var bar = new ProgressBar.Line(progress5, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 2000,
		color: '#00A9A5',
		trailColor: '#eee',
		trailWidth: 44,
		svgStyle: { width: '100%', height: '100%' },
		text: {
			style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#999',
				position: 'absolute',
				right: '0',
				top: '5px',
				padding: 0,
				margin: 0,
				transform: null
			},
			autoStyleContainer: false
		},
		from: { color: '#FFEA82' },
		to: { color: '#ED6A5A' },
		step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});
	bar.animate(percent); // Number from 0.0 to 1.0
}

function AffectProgress6(percent) {
	var bar = new ProgressBar.Line(progress6, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 2000,
		color: '#00A9A5',
		trailColor: '#eee',
		trailWidth: 44,
		svgStyle: { width: '100%', height: '100%' },
		text: {
			style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#999',
				position: 'absolute',
				right: '0',
				top: '5px',
				padding: 0,
				margin: 0,
				transform: null
			},
			autoStyleContainer: false
		},
		from: { color: '#FFEA82' },
		to: { color: '#ED6A5A' },
		step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});
	bar.animate(percent); // Number from 0.0 to 1.0
}

// Progress Cercle

function showCercles() {
	var percent = 0.8;
	var percent2 = 0.9;
	var percent3 = 0.75;
	var percent4 = 0.85;
	var percent5 = 0.65;
	var percent6 = 0.87;
	AffectPercentCercle(percent);
	AffectPercentCercle2(percent2);
	AffectPercentCercle3(percent3);
	AffectPercentCercle4(percent4);
	AffectPercentCercle5(percent5);
	AffectPercentCercle6(percent6);
}

function AffectPercentCercle(percent) {
	var bar = new ProgressBar.Circle(progressCercle, {
		strokeWidth: 6,
		color: '#00A9A5',
		trailColor: '#484B4F',
		trailWidth: 7,
		easing: 'easeInOut',
		duration: 2000,
		svgStyle: null,
		text: {
			value: '',
			alignToBottom: false
		},
		from: { color: '#52c43b' },
		to: { color: '#00A9A5' },
		// Set default step function for all animate calls
		step: (state, bar) => {
			bar.path.setAttribute('stroke', state.color);
			var value = Math.round(bar.value() * 100);
			if (value === 0) {
				bar.setText('');
			} else {
				bar.setText(value + '%');
			}

			bar.text.style.color = '#fff';
		}
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2.3rem';

	bar.animate(percent); // Number from 0.0 to 1.0
}

function AffectPercentCercle2(percent) {
	var bar = new ProgressBar.Circle(progressCercle2, {
		strokeWidth: 6,
		color: '#00A9A5',
		trailColor: '#484B4F',
		trailWidth: 7,
		easing: 'easeInOut',
		duration: 2000,
		svgStyle: null,
		text: {
			value: '',
			alignToBottom: false
		},
		from: { color: '#43bf8b' },
		to: { color: '#00A9A5' },
		// Set default step function for all animate calls
		step: (state, bar) => {
			bar.path.setAttribute('stroke', state.color);
			var value = Math.round(bar.value() * 100);
			if (value === 0) {
				bar.setText('');
			} else {
				bar.setText(value + '%');
			}

			bar.text.style.color = state.color;
		}
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2rem';

	bar.animate(percent); // Number from 0.0 to 1.0
}

function AffectPercentCercle3(percent) {
	var bar = new ProgressBar.Circle(progressCercle3, {
		strokeWidth: 6,
		color: '#00A9A5',
		trailColor: '#484B4F',
		trailWidth: 7,
		easing: 'easeInOut',
		duration: 2000,
		svgStyle: null,
		text: {
			value: '',
			alignToBottom: false
		},
		from: { color: '#52c43b' },
		to: { color: '#00A9A5' },
		// Set default step function for all animate calls
		step: (state, bar) => {
			bar.path.setAttribute('stroke', state.color);
			var value = Math.round(bar.value() * 100);
			if (value === 0) {
				bar.setText('');
			} else {
				bar.setText(value + '%');
			}

			bar.text.style.color = '#fff';
		}
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2.3rem';

	bar.animate(percent); // Number from 0.0 to 1.0
}

function AffectPercentCercle4(percent) {
	var bar = new ProgressBar.Circle(progressCercle4, {
		strokeWidth: 6,
		color: '#00A9A5',
		trailColor: '#484B4F',
		trailWidth: 7,
		easing: 'easeInOut',
		duration: 2000,
		svgStyle: null,
		text: {
			value: '',
			alignToBottom: false
		},
		from: { color: '#43bf8b' },
		to: { color: '#00A9A5' },
		// Set default step function for all animate calls
		step: (state, bar) => {
			bar.path.setAttribute('stroke', state.color);
			var value = Math.round(bar.value() * 100);
			if (value === 0) {
				bar.setText('');
			} else {
				bar.setText(value + '%');
			}

			bar.text.style.color = state.color;
		}
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2.3rem';

	bar.animate(percent); // Number from 0.0 to 1.0
}

function AffectPercentCercle5(percent) {
	var bar = new ProgressBar.Circle(progressCercle5, {
		strokeWidth: 6,
		color: '#00A9A5',
		trailColor: '#484B4F',
		trailWidth: 7,
		easing: 'easeInOut',
		duration: 2000,
		svgStyle: null,
		text: {
			value: '',
			alignToBottom: false
		},
		from: { color: '#52c43b' },
		to: { color: '#00A9A5' },
		// Set default step function for all animate calls
		step: (state, bar) => {
			bar.path.setAttribute('stroke', state.color);
			var value = Math.round(bar.value() * 100);
			if (value === 0) {
				bar.setText('');
			} else {
				bar.setText(value + '%');
			}

			bar.text.style.color = '#fff';
		}
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2.3rem';

	bar.animate(percent); // Number from 0.0 to 1.0
}

function AffectPercentCercle6(percent) {
	var bar = new ProgressBar.Circle(progressCercle6, {
		strokeWidth: 6,
		color: '#00A9A5',
		trailColor: '#484B4F',
		trailWidth: 7,
		easing: 'easeInOut',
		duration: 2000,
		svgStyle: null,
		text: {
			value: '',
			alignToBottom: false
		},
		from: { color: '#43bf8b' },
		to: { color: '#00A9A5' },
		// Set default step function for all animate calls
		step: (state, bar) => {
			bar.path.setAttribute('stroke', state.color);
			var value = Math.round(bar.value() * 100);
			if (value === 0) {
				bar.setText('');
			} else {
				bar.setText(value + '%');
			}

			bar.text.style.color = state.color;
		}
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2.3rem';

	bar.animate(percent); // Number from 0.0 to 1.0
}

// Hover Panel Progress

function showCompetance() {
	var percent = 0.8;
	var percent2 = 0.9;
	var percent3 = 0.75;
	var percent4 = 0.85;
	var percent5 = 0.65;
	var percent6 = 0.87;
	AffectPercentCercle(percent);
	AffectPercentCercle2(percent2);
	AffectPercentCercle3(percent3);
	AffectPercentCercle4(percent4);
	AffectPercentCercle5(percent5);
	AffectPercentCercle6(percent6);
}

//Scroll V3
const threshold = 0.1;
const options = {
	root: null,
	rootMargin: '0px',
	threshold
};

const handleIntersect = function(entries, observer) {
	entries.forEach(function(entry) {
		if (entry.intersectionRatio > threshold) {
			observer.unobserve(entry.target);
			showWithPercent();
		}
	});
};
const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(document.querySelector('.reveal'));

// Second Cerceles
const threshold_2 = 0.1;
const options_2 = {
	root: null,
	rootMargin: '0px',
	threshold_2
};

const handleIntersect_2 = function(entries, observer) {
	entries.forEach(function(entry) {
		if (entry.intersectionRatio > threshold_2) {
			observer.unobserve(entry.target);
			showCompetance();
		}
	});
};
const observer_2 = new IntersectionObserver(handleIntersect_2, options_2);
observer_2.observe(document.querySelector('.reveal-2'));

$('.navTrigger').click(function() {
	$(this).toggleClass('active');
	console.log('Clicked menu');
	$('#mainListDiv').toggleClass('show_list');
	$('#mainListDiv').fadeIn();
});


        $('#year').text(new Date().getFullYear());
        $('body').scrollspy({ target: '#main-nav' });

    // Add smooth scrolling
    $('#main-nav a').on('click', function (e) {
      // Check for a hash value
      if (this.hash !== '') {
        // Prevent default behavior
        e.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function () {
          // Add hash to URL after scroll
          window.location.hash = hash;
        });
      }
	});
	
// Contact Form

