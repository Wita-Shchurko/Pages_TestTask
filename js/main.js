/* eslint-disable no-undef */
$(document).ready(function(){
	function updateRating() {
			$('.rating').each(function() {
					const rating = parseFloat($(this).data('rating'));
					$(this).find('.rating__circle').each(function() {
							const value = parseFloat($(this).data('value'));
							if (value <= rating) {
									$(this).removeClass('half').addClass('full');
							} else if (value - rating < 1 && value - rating > 0) {
									$(this).removeClass('full').addClass('half');
							} else {
									$(this).removeClass('full half');
							}
					});
			});
	}

	updateRating();

	$('.subscribe__form').on('submit', function(event) {
		event.preventDefault();
		var email = $('.subscribe__email').val();
		var errorMessage = $('.subscribe__error-message');
		var successMessage = $('.subscribe__success-message');

		errorMessage.hide();
		successMessage.hide();

		if (email === "") {
				errorMessage.text('Поле не може бути порожнім!').show();
		} else if (!validateEmail(email)) {
				errorMessage.text('Некоректний емейл!').show();
		} else {
				successMessage.text('Ви успішно підписались!').show();
		}
	});

	$('.subscribe__email').on('input', function() {
			$('.subscribe__error-message').hide();
			$('.subscribe__success-message').hide();
	});

	function validateEmail(email) {
			var regex = /^[^\s@]+@[^\s@]+$/;
			return regex.test(email);
	}

	const $menuBtn = $(".header__menuBtn");
	const $menu = $(".menu");
	const $navLink = $(".menu__link");
	const menuBtnDisplayStyle = $menuBtn.css("display");

	$menuBtn.click(function() {
			$menu.toggleClass("menu--active");
			$(this).toggleClass("header__menuBtn--active");
	});

	if (menuBtnDisplayStyle) {
			$navLink.each(function() {
					$(this).click(function() {
							$menu.removeClass("menu--active");
							$menuBtn.removeClass("header__menuBtn--active");
					});
			});
	}
});
