define(function(require,exports,module){
	var init = {
		initpage:function(){
			this.fixedView();
			this.mainRightView();
			this.phoneImgView();
			this.fixedNavView();
			this.mainLeftView();
		},
		fixedView:function(){
			var a = require('js/fixedView.js');
			a(true);
		},
		mainRightView:function(){
			var b = require('js/mainRightView');
			b();
		},
		phoneImgView:function(){
			var c = require('js/phoneImgView');
			c();
		},
		fixedNavView:function(){
			var fixedNavView = require('view/fixedNavView');
			$('.fixed-nav').html(fixedNavView({currentView:0}));			
		},
		mainLeftView:function(){
			var mainLeft = require('view/mainLeft');
			$('.main-left').html(mainLeft);
			//遮罩层 - 搜索
			$('.search').click(function(){
				$('.search-container').toggle();
				$('.pull').toggle();
			});
		    var swiper = new Swiper('.swiper-goods-container', {
		        slidesPerView: 'auto',
		        paginationClickable: true,
		        spaceBetween: 30
		    });  
		}
	}
	module.exports = init;
})