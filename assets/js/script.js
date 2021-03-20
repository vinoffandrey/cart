$(document).ready(function () {
	$('.slider__body').slick({
		slidesToShow: 3,
		sliderToScroll: 1,
		speed: 500,
		easing: 'ease',
		waitForAnimate: false,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});