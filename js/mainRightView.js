define(function(require,exports,module){
	module.exports = function(){
		var mainRight = require('view/mainRight');
		$('.main-right').html(mainRight);
		$('.user-out').click(function(){
			if($('.tohome').attr('data-show')){
				$('.tohome').show();
			}
			if($('html').css("background-color") == "rgb(2, 93, 134)"){
				$('.main-left').animate({right:'0rem'});
				$('.main-right').find('.box').animate({right:'-240px'}).parent('.main-right').fadeOut();
			}else{
				$('.main-left').animate({right:'0rem'});
				$('.shop').animate({right:'0rem'});
				$('.group').animate({right:'0rem'});
				$('.details').animate({right:'0rem'});
				$('.bargain').animate({right:'0rem'});
				$('.main-right').animate({right:'-20rem'});
				$('.fixed>div').animate({right:"0rem"});
				$('.fixed-nav').animate({right:'0rem'});
			}
		})
	}
})