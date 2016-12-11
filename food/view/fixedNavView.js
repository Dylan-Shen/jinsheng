define(function(require, exports, module){return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(currentView == 0){;
__p += '<li class="active"><a href="./index.html"><div class="icon"><img src="images/FusLPEy-7Fc-qGL8DTVbyueueZYZ.png">';
 }else{ ;
__p += '<li><a href="./index.html"><div class="icon"><img src="images/Fpyv-0bVImcBEgVuS7PftidVWFL9.png">';
 } ;
__p += '</div><span>首页</span></a></li>';
 if(currentView == 1){;
__p += '<li class="active"><a href="./hotSale.html"><div class="icon"><img src="images/FpDilyaqqF_kne7LA8t6_TCDenGj.png">';
 }else{ ;
__p += '<li><a href="./hotSale.html"><div class="icon"><img src="images/FphRismsA-lh_3WCou0fF3Uh_mBb.png">';
 } ;
__p += '</div><span>热卖</span></a></li><li class=""><a href="/"><div class="icon"><img src="images/FuzGzjmImJ615WtvY6OMZ9-ltftH.png"></div><span>分销</span></a></li><li class=""><a href="/"><div class="icon"><img src="images/FuMvPMLiK45fPRQDsJrLe01R1vLX.png"></div><span>个人中心</span></a></li>';

}
return __p
}});