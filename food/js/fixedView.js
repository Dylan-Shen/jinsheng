define(function(require,exports,module){
	return function(b){
		var fixed = require('view/fixed');
		//传参 确定左上tohome是否显示
		$('.fixed').html(fixed({home:!b}));
		//遮罩层判断
		$('.if-search').click(function(){
				$('.search-container').toggle();
				$('.pull').toggle();
		});
		//清除搜索框
		$('.clearSearch').click(function(){
			$('.search-input').val('');
		});
		//打开侧栏
		$('.if-user').click(function(){
			// $('.tohome').hide();
			if($('.tohome').css("display") == "block"){
				$('.tohome').hide().attr({
					"data-show": true
				});;
			}
			if($('html').css("background-color") == "rgb(2, 93, 134)"){
				$(".code").css({animationName:"move"});
				$('.cloose-phone').show();
				$('.delay-span').show().fadeOut(3000);
			}else{
				$('.fixed>div').animate({right:"20rem"});
				$('.fixed-nav').animate({right:'20rem'});
				$('.main-left').animate({right:'20rem'});
				$('.shop').animate({right:'20rem'});
				$('.group').animate({right:'20rem'});
				$('.details').animate({right:'20rem'});
				$('.bargain').animate({right:'20rem'});
				$('.main-right').animate({right:'0rem'});
			}
		})
		//回到顶部
		if($('html').css("background-color") != "rgb(2, 93, 134)"){
			$(window).scroll(function(){
				var wst = $(window).scrollTop();
				if(wst > 200){
					$('.go-top').show();
				}else{
					$('.go-top').hide();
				}
			});
			$('.go-top').click(function(){
				var speed=200;
		        $('body,html').animate({ scrollTop: 0 }, speed);
		        return false;
			})
		}else{
			$('.container').scroll(function(){
				var wst = $('.container').scrollTop();
				if(wst > 200){
					$('.go-top').show();
					$('.aside-bar').css({top:"294px"});
				}else{
					$('.go-top').hide();
					$('.aside-bar').css({top:"340px"});
				}
			});
			$('.go-top').click(function(){
				var speed=200;
		        $('.container').animate({ scrollTop: 0 }, speed);
		        return false;
			})
		}
		//追加节点
		function addFn(){
			var info = $('.search-input').val();
			if(info != ""){
				var str = $("<span>"+info+"</span>");  
				$(".search-box").append(str);
			}
		}
		$(document).keyup(function(event){
		  if(event.keyCode ==13){
		    addFn();
		  }
		});
		//删除所有节点
		$(".search-box button").click(function(){
			$('.search-box').find('span').remove();
		})
	}
})