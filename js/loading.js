var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 1000,
	strokeWidth: 0.2,
	color: '#555555',
	trailWidth: 0.2,
	trailColor: '#bbbbbb',
	text: {
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#ffffff',
		},
		autoStyleContainer: false
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});

bar.animate(1.0, function () {
	$("#splash").delay(500).fadeOut(800);
	// HomeView
	if ($("#header__topView").length) {
		$("#shopName").delay(500).queue(function(){
			$(this).addClass('isInView');
		});
	}
});