jQuery(function () { 


	$('.sh-burger').on('click',function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});


});