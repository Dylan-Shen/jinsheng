define(function(require,exports,module){
	var init = {
		initpage:function(){
			this.fixedView();
			this.groupView();
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
		groupView:function(){
			var groupView = require('view/groupView');
			$('.group').html(groupView);
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
			$('.detail-list span').click(function(){
				$(this).addClass('active').siblings().removeClass('active');
			})
		},
		phoneImgView:function(){
			var phoneImg = require('view/phoneImgView');
			$('.phone-img').html(phoneImg);
		}
	}
	module.exports = init;
})