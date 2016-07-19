$(document).ready(function() {
	$('.ryu, .hulk-ryu').mouseenter(function() {
		$('.ryu-still, .hulk-ryu-still').hide();
		$('.ryu-ready, .hulk-ryu-ready').show();
	})

	.mouseleave(function() {
		$('.ryu-ready, .hulk-ryu-ready').hide();
		$('.ryu-still, .hulk-ryu-still').show();
	})

	.mousedown(function() {
		playHadouken();
		$('.ryu-ready, .hulk-ryu-ready').hide();
		$('.ryu-throwing, .hulk-ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate( 
			{'left': '1020px'},
			500,
			function() {
				$('.hadouken').hide();
				$('.hadouken').css('left', '520px');
			}
		)
		$('.hulk-hadouken').finish().show()
		.animate( 
			{'left': '200px'},
			500,
			function() {
				$('.hulk-hadouken').hide();
				$('.hulk-hadouken').css('left', '720px');
			}
		)
	})

	.mouseup(function() {
		$('.ryu-throwing, .hulk-ryu-throwing').hide();
		$('.ryu-ready, .hulk-ryu-ready').show();
	})

	$(document).keydown(function() {
		if (event.keyCode === 88) {
		$('.ryu-ready, .hulk-ryu-ready').hide();
		$('.ryu-cool, .hulk-ryu-cool').show();
		}
	})

	$(document).keyup(function() {
		$('.ryu-ready, .hulk-ryu-ready').show();
		$('.ryu-cool, hulk-ryu-cool').hide();
	})
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
	}

