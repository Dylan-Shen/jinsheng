define(function(require,exports,module){
	module.exports = function(){
		var phoneImg = require('view/phoneImgView');
		$('.phone-img').html(phoneImg);
		$('.cloose-phone i').click(function(){
			$('.cloose-phone').hide();
			$('.code').css({animationName:""});
		})
	}
})