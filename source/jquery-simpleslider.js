(function($,window,document) {

	var $slides = $('#my-slides').addClass('slides-container').find('div.slide')
		,$enabled = $slides.first().addClass('enabled')
		,$nav = $('button')
		,$nextSlide
		,$prevSlide;

	$nav.on('click',function() {

		$nav.prop('disabled',true);

		var direction = $(this).data('direction');

		$nextSlide = $enabled.next();
		$prevSlide = $enabled.prev();

		if ( direction === 'right') {
			$nextSlide = ( $nextSlide.length )
				? $nextSlide
				: $slides.first();
		} else {
			$nextSlide = ( $prevSlide.length )
				? $prevSlide
				: $slides.last();
		}

		$nextSlide.css('zIndex',9);

		direction = direction === 'left' ? '-=620' : '+=620';

		$enabled.stop().animate({'left':direction},350,function(){
			$enabled.removeClass('enabled').css({left:0,zIndex:1});
			$enabled = $nextSlide;
			$nextSlide.css('zIndex',10);
			$nextSlide = $prevSlide = null;

			$nav.prop('disabled',false);
		});

	});

}(jQuery,window,document));