var cheerfulDay = (function() {

	var init = function () {
		_scrollToItem();
		_accardeonMenu();
		_showPopup();

	};

	var _showPopup = function () {
		$('.buy-button').click(function() {
			var $this = $(this),
					cardForm = $this.closest('.gallery-item'),
					nameCard = cardForm.find('.gallery-item__title').text(),
					amountCard = cardForm.find('.contact-form-input').val();
					$('.name-input').val(nameCard);
					$('.input-amount').val(amountCard);
					console.log(amountCard);
					console.log(nameCard);

								var popup = $('.order-window');

								popup.delay(150).fadeIn(200);

								$('.blackout').fadeIn(200);

				});

				$('.order-window .close-cross, .blackout').click(function() {

								$('.blackout').delay(150).fadeOut(200);
								$('.order-window').fadeOut(200);

			});
	};


	var _scrollToItem = function() {
//Animation scroll
		$(function(){
		var w = $(window).width();
		$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		if (w < 767) {
		$('html, body').animate({scrollTop: $(target).offset().top - 60}, 1000);
		return false;
		} else {
		$('html, body').animate({scrollTop: $(target).offset().top - 60}, 1000);
		return false;
		}
		});
		});
};

	var _accardeonMenu = function () {
		$('.nav-empty-link').on('click', function(e){
			e.preventDefault();

			var menu = $('.nav-hidden');

			if(!menu.is(':visible')){
				menu.slideDown(200);
			} else {
				menu.slideUp(200);
			}

	});
};



	return {
		init: init
	};

})();


cheerfulDay.init();