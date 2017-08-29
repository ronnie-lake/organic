// $(function(){
// 	$('.main__left-arrow').click(function(){
// 		$('.main__item_active').removeClass('main__item_active').prev('.main__item').addClass('main__item_active');
// 	})
// 	$('.main__right-arrow').click(function(){
// 		$('.main__item_active').removeClass('main__item_active').next('.main__item').addClass('main__item_active');
// 	})
// })

$(function(){

	$('.main__left-arrow').click(function(){
		if($('.main__item_active').is(':not(:first-child)')) {
			$('.main__item_active').removeClass('main__item_active').prev('.main__item').addClass('main__item_active');
		}
	})

	$('.main__right-arrow').click(function(){
		if(!$('.main__item_active').is(':last-child')) {
			$('.main__item_active').removeClass('main__item_active').next('.main__item').addClass('main__item_active');
		}
	})
})