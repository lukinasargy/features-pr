$(function () {

	$('.slider__list').slick({
		responsive: [
			{
				breakpoint: 1920,
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
				breakpoint: 5000,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					autoplay: true,
					pauseOnHover: true,
					autoplaySpeed: 8000,
					adaptiveHeight: true
				}
			}
		]
	});

	//scrolls
	$(".js_scroll").on("click", function (event) {
		event.preventDefault();

		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});


	//animations

	$(document).ready(function () {
		$('.first').addClass('visible');
		$('.main').on('focus load resize scroll', function () {

			//            $('.header-text').html('scrolltop+innerHeight=' + Math.round($('.main').scrollTop() + $(window).innerHeight()) + 'scrolltop= ' + Math.round($('.main').scrollTop()));
			$('.animated').each(function () {
				var elementTop = $(this).position().top + $('.main').scrollTop();
				var elementBot = $(this).position().top + $('.main').scrollTop() + $(this).height();
				var windowTop = $('.main').scrollTop();
				var windowBot = $('.main').scrollTop() + $(window).innerHeight();

				if (((elementTop + $(this).height() * 0.7) <= windowBot) && (elementBot > windowTop)) {
					$(this).addClass('visible');
				} else if ((elementTop > windowBot) || (elementBot < windowTop)) {
					$(this).removeClass('visible');
				}
			});
		});
	});

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
	
	$('.faq__subtitle').on('click', function () {
		$(this).toggleClass('faq__subtitle--active');
		$(this).parent().toggleClass('faq__item--active').children('.faq__text').slideToggle(500);
	});
	$('.submenu').on('click', function () {
		$(this).toggleClass('submenu--active');
		$(this).children(".submenu__list").toggleClass('submenu__list--active').slideToggle(500);
	});

	$(window).on("resize load", function () {
		if (window.matchMedia("(min-width:1366px)").matches) {
			$(".contacts__link--tel").appendTo($('#header-container'));
			$(".contacts__social").appendTo($('#promo-container'));
		} else {
			$(".contacts__link--tel").appendTo(".contacts");
			$(".contacts__social").appendTo(".contacts");
		}
	});





});
