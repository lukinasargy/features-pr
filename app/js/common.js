$(function () {

	$('.slider__list').slick({
		responsive: [
			{
				breakpoint: 1320,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					autoplay: true,
					pauseOnHover: true,
					autoplaySpeed: 8000,
					adaptiveHeight: true
				}
			},
			{
				breakpoint: Infinity,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					autoplay: true,
					pauseOnHover: true,
					autoplaySpeed: 8000,
					adaptiveHeight: true,
				}
			}
		]
	});

	//scrolls
//	$(".js_scroll").on("click", function (event) {
//		event.preventDefault();
//
//		var id = $(this).attr('href'),
//			top = $(id).offset().top;
//
//		$('body,html').animate({
//			scrollTop: top
//		}, 1000);
//	});



	$(".toggler").on('click', function () {
		$(this).toggleClass('toggler--active');
		$(".menu").toggleClass('menu--active');
		$(".header").toggleClass('header--active');
		if ($(".toggler").hasClass("toggler--active")) {
			$(this).children(".toggler__svg").attr("viewBox", "0 0 28 28").attr('width', '28').attr('height', '28');
		} else {
			$(this).children(".toggler__svg").attr("viewBox", "0 0 36 24").attr('width', '36').attr('height', '24');
		}
	});
	
	$('.submenu').on('click', function () {
		$(this).toggleClass('submenu--active');
		$(this).children(".submenu__list").toggleClass('submenu__list--active').slideToggle(300);
	});





});
