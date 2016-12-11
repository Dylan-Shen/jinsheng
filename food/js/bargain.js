define(function(require,exports,module){
	var init = {
		initpage:function(){
			this.fixedView();
			this.bargainView();
			this.mainRightView();
			this.phoneImgView();
		},
		fixedView:function(){
			var a = require('js/fixedView');
			a();
		},
		mainRightView:function(){
			var b = require('js/mainRightView');
			b();
		},
		phoneImgView:function(){
			var phoneImg = require('view/phoneImgView');
			$('.phone-img').html(phoneImg);
		},
		bargainView:function(){
			var bargainView = require('view/bargainView');
			$('.bargain').html(bargainView);
			$('.kan-record').click(function(){
				$('.popup1').show();
			})
			$('.popup-cloose').click(function(){
				$('.popup').hide();
			})
			$('.popup-bg').click(function(){
				$('.popup').hide();
			})
			$('.kan-active').click(function(){
				$('.popup2').show();
			})
			$('.popup-choose span').click(function(){
				$(this).addClass('active').siblings('span').removeClass('active');
			})
			$('.bargain-search').click(function(){
				$('.search-container').toggle();
				$('.pull').toggle();
			})
			var timer = setInterval(domove,1000);
			var index = 0;
			function domove(){
				index += 1;
				if(index %2 == 1){
					$('.detail-top').css({transform:"translateX(-50%)"});
					$('.detail-show').css({transform:"translateX(100%)"}).find('span').eq(1).addClass('active').siblings().removeClass('active');
				}else{
					$('.detail-top').css({transform:"translateX(0)"});
					$('.detail-show').css({transform:"translateX(0)"}).find('span').eq(0).addClass('active').siblings().removeClass('active');
				}
			}
		}
	}
	module.exports = init;
})