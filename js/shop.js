define(function(require,exports,module){
	var init = {
		initpage:function(){
			this.fixedView();
			this.bannerView();
			this.mainRightView();
			this.phoneImgView();
			this.fixedNavView();
		},
		fixedView:function(){
			var a = require('js/fixedView');
			a();
		},
		mainRightView:function(){
			var b = require('js/mainRightView');
			b();
		},
		bannerView:function(){
			var bannerView = require('view/bannerView');
			$('.shop').html(bannerView);
			$('.banner-search').click(function(){
				$('.search-container').toggle();
				$('.pull').toggle();
			});
		},
		phoneImgView:function(){
			var phoneImg = require('view/phoneImgView');
			$('.phone-img').html(phoneImg);
		},
		fixedNavView:function(){
			var fixedNavView = require('view/fixedNavView');
			$('.fixed-nav').html(fixedNavView({currentView:0}));			
		}
	}
	module.exports = init;
})