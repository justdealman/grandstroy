$(document).ready(function() {
	if ( $('.slider').length > 0 ) {
		$('.slider .bg').each(function() {
			$(this).css({
				'left': '50%',
				'margin-left': -$(this).attr('width')/2+'px'
			});
		});
	}
	if ( $('.clients').length > 0 ) {
		$('.clients').slides({
			generatePagination: false,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 500,
			slideEasing: 'easeInOutQuad',
			play: 10000,
			pause: 2500,
		});
		$('.clients .container img').each(function() {
			$(this).css({
				'margin-top': (100-$(this).attr('height'))/2+'px'
			});
		});
	}
	$('.introduction .nav li').bind('click', function() {
		var i = $(this).index();
		var t = $('.slider > div');
		if ( i !== $('.slider > div:visible').index() ) {
			t.find('.picture, .information').stop().fadeOut(400);
			t.stop().delay(400).fadeOut(400);
			t.eq(i).stop().delay(800).fadeIn(400);
			t.eq(i).find('.picture, .information').stop().delay(1200).fadeIn(400);
			$(this).addClass('active').siblings().removeClass();
		}
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	if ( $(window).width() < 1040 ) {
		$('body').addClass('min');
	}
	else {
		$('body').removeClass('min');
	}
	if ( $('input[type="checkbox"]').length > 0 ) {
		$('input[type="checkbox"]').uniform();
	}
	if ( $('input[type="radio"]').length > 0 ) {
		$('input[type="radio"]').uniform();
	}
	$('.feedback button.cancel').bind('click', function(event) {
		event.preventDefault();
		var t = $(this).parents('.feedback');
		t.find('input[type="text"], textarea').val('');
		t.find('input[type="checkbox"]').prop('checked', false);
		t.find('.checker span').removeClass('checked');
		t.find('input[type="radio"]').prop('checked', false);
		t.find('.radio span').removeClass('checked');
		t.find('select option:first-child').prop('selected', true);
	})
	if ( $('.rc .gallery').length > 0 ) {
		$('.rc .gallery').each(function() {
			var t = $(this);
			t.slides({
				generatePagination: true,
				generateNextPrev: true,
				container: 'container',
				effect: 'slide',
				slideSpeed: 500,
				slideEasing: 'easeInOutQuad',
				play: 0,
			});
			t.find('.pagination li a').each(function() {
				var path = t.find('.container > div > div:nth-child('+eval($(this).parent().index()+1)+')').attr('data-preview');
				$(this).append('<img src="'+path+'" alt="">');
			});
		});
	}
	if ( $('.lc .filter').length > 0 ) {
		$('.lc .filter input[type="checkbox"]').each(function() {
			var p = $(this).parents('li');
			if ( $(this).prop('checked') ) {
				p.addClass('active');
			}
			if ( $(this).parents('li').hasClass('all') ) {
				p.siblings().find('input[type="checkbox"]').prop('checked', false);
				p.siblings().find('.checker span').removeClass('checked');
				p.siblings().removeClass('active');
			}
		});
		$('.lc .filter input[type="checkbox"]').change(function() {
			var p = $(this).parents('li');
			if ( $(this).prop('checked') ) {
				p.addClass('active');
			}
			else {
				$(this).parents('li').removeClass('active');
			}
			if ( $(this).parents('li').hasClass('all') ) {
				p.siblings().find('input[type="checkbox"]').prop('checked', false);
				p.siblings().find('.checker span').removeClass('checked');
				p.siblings().removeClass('active');
			}
			else {
				p.siblings('li.all').find('input[type="checkbox"]').prop('checked', false);
				p.siblings('li.all').find('.checker span').removeClass('checked');
				p.siblings('li.all').removeClass('active');
			}
		});
	}
	if ( $('a.zoom').length > 0 ) {
		$('a.zoom').fancybox({
			padding: 19,
			helpers: {
				title: {
					type: 'inside',
					position: 'top'
				},
				overlay: {
					locked: false
				}
			}
		});
	}
});
$(window).resize(function() {
	if ( $(window).width() < 1040 ) {
		$('body').addClass('min');
	}
	else {
		$('body').removeClass('min');
	}
});