define(function(require,exports,module){
	var init = function(e){
		if($('html').css("background-color") == "rgba(0, 0, 0, 0)"){
			$(window).scroll(function(){
				var wst = $(window).scrollTop();
				if(wst > 200){
					e.show();
				}else{
					e.hide();
				}
			});
			e.click(function(){
				var speed=200;
		        $('body,html').animate({ scrollTop: 0 }, speed);
		        return false;
			})
		}else{
			$('.container').scroll(function(){
				var wst = $('.container').scrollTop();
				if(wst > 200){
					e.show();
					$('.aside-bar').css({top:"294px"});
				}else{
					e.hide();
					$('.aside-bar').css({top:"340px"});
				}
			});
			e.click(function(){
				var speed=200;
		        $('.container').animate({ scrollTop: 0 }, speed);
		        return false;
			})
		}
	}
	module.exports = init;
})