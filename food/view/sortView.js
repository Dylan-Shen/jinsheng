define(function(require, exports, module){return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- 排序浏览页 list-content-1 单行  list-content 二列 --><ul class="list-content-1 sort-list clear">';
 for(var i = 0 ; i < message.length ; i ++ ){ ;
__p += '<li><a href=' +
((__t = (message[i].url)) == null ? '' : __t) +
' class="clear"><div class="goods-image"><img class="lazy" alt="10rem*10rem" width="10rem" height="10rem" data-original=' +
((__t = (message[i].src)) == null ? '' : __t) +
' /></div><div class="goods-info"><p class="goods-title">' +
((__t = (message[i].name)) == null ? '' : __t) +
'</p><p class="goods-price">￥' +
((__t = (message[i].price)) == null ? '' : __t) +
'<del><i>原价' +
((__t = (message[i].ori)) == null ? '' : __t) +
'</i></del></p><p class="goods-sale">销量：' +
((__t = (message[i].sales)) == null ? '' : __t) +
'件</p><i class="goods-buy icon">&#xe613;</i></div></a></li>';
 } ;
__p += '</ul>';

}
return __p
}});