define(function(require,exports,module){
	var init = {
		initpage:function(){
			this.fixedView();
			this.hotSaleView();
			this.mainRightView();
			this.phoneImgView();
			this.fixedNavView();
		},
		fixedView:function(){
			var goTop = require("js/goTop");
			goTop($('.go-top'));
		},
		mainRightView:function(){
			var mainRight = require('js/mainRightView');
			mainRight();
		},
		phoneImgView:function(){
			var phoneImg = require('js/phoneImgView');
			phoneImg();
		},
		fixedNavView:function(){
			var fixedNavView = require('view/fixedNavView');
			$('.fixed-nav').html(fixedNavView({currentView:1}));			
		},
		hotSaleView:function(){
			require('jquery.lazyload.min.js');
			$.ajax({
				url:"json/sort.json",
				success:function(data){
					var message = data.list;
					// 记录当前排序
					var sortDefault = [];
					for(var i = 0 ; i < data.list.length ; i ++){
						sortDefault[i] = data.list[i];
					}

					var hotSaleView = require('view/hotSaleView');
					$('.hotSale').html(hotSaleView);

					// 提取，方便动态更改sort后内容
					var sortView = require('view/sortView');
					showHtml(message);
					// 提取sort-box动态更改内容，重新载入懒加载
					function showHtml(message){
						$('.sort-box').html(sortView({message:message}));
						$("img.lazy").lazyload();
					}
					// 分类名高亮
					$('.fifter').click(function(){
						$(this).addClass('active').siblings('.fifter').removeClass('active');
						$('.d-icon').removeClass("active1").removeClass('active2');
					});
					//默认排序
					$('.sort-default').click(function(){
						showHtml(sortDefault);
						// $('.sort-box').html(sortView({message:sortDefault}));
					});
					//排序 - price
					var currentPrice = false;
					$('.sort-price').click(function(){
						currentPrice = !currentPrice;
						clickFN(currentPrice,message,"price",$(this));	
					});
					//排序 - sales
					var currentSales = false;
					$('.sort-sales').click(function(){
						currentSales = !currentSales;
						clickFN(currentSales,message,"sales",$(this));	
					});
					//排序 - new
					var currentNew = false;
					$('.sort-new').click(function(){
						currentNew = !currentNew;
						clickFN(currentNew,message,"time",$(this));	
					});
					//点击触发排序函数
					//排序状态 ， 排序数据，排序依据，排序图标更改
					function clickFN(state,message,name,e){
						if(state){
							showHtml(filterFn(message,name,state));
							e.find('.d-icon').removeClass('active2').addClass('active1');
						}else{
							showHtml(filterFn(message,name,state));
							e.find('.d-icon').removeClass('active1').addClass('active2');
						}
					}
					//排序函数
					//排序数据，排序依据，排序状态
					function filterFn(message,name,state){
						var current = [];
						if(state){
							message.sort(function(a,b){return a[name]-b[name]});
						}else{
							message.sort(function(a,b){return b[name]-a[name]});
						}
						for(i = 0 ; i < message.length ; i ++){
						   current[i] = message[i];
						}
						return current;
					}
					//更改显示方式
					$('.sort-show-type').click(function(){
						switch ($(this).attr('data-type')){
							case "2":
								$(this).attr('data-type',1).find('.active').removeClass('active').siblings('i').addClass('active');
								$('.sort-box').find('ul').removeClass('list-content').addClass('list-content-1');
								break;
							case "1":
								$(this).attr('data-type',2).find('.active').removeClass('active').siblings('i').addClass('active');
								$('.sort-box').find('ul').removeClass('list-content-1').addClass('list-content');
								break;
						}
					})
				}
			});
		}
	}
	module.exports = init;
})