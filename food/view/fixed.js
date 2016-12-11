define(function(require, exports, module){return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- 右上搜索栏 -->';
 if(home == true){ ;
__p += '<div class="tohome" style="display: block;">';
 }else{ ;
__p += '<div class="tohome" style="display: none;">';
 } ;
__p += '<a href="index.html"><i class="icon">&#xe602;</i></a></div><div class="pull"><a class="if-search" href="javascript:;"><i class="icon">&#xe605;</i></a><a class="if-user" data-panel="right" href="javascript:;"><i class="icon">&#xe608;</i></a></div><!-- 搜索栏遮罩 --><div class="search-container"><div class="searchbar-wrap"><div class="searchbar"><i class="icon">&#xe605;</i><div class="addMessage" style="width: 100%"><input class="search-input" type="search" placeholder="请输入商品关键字"></div><i class="icon clearSearch">&#xe60a;</i></div><button class="if-search">取消</button></div><div class="search-box clear"><span>信息1</span><span>信息2</span><span>信息3</span><button type="button">清除搜索信息</button></div></div><!-- 右下导航栏 --><div class="aside-bar"><a href="#" class=""><i class="icon">&#xe659;</i></a><a href="#" class=""><i class="icon">&#xe609;</i></a><a class="go-top" style="display: none"><i class="icon">&#xe637;</i></a></div>';

}
return __p
}});