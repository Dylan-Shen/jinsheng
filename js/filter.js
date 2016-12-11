define(function(require,exports,module){
	module.exports = function(message,info,s){
		var current = [];
		if(s){
			message.sort(function(a,b){return a[info]-b[info]});
		}else{
			message.sort(function(a,b){return b[info]-a[info]});
		}
		for(i = 0 ; i < message.length ; i ++){
		   current[i] = message[i];
		}
		console.log(s);
		return current;
	}
})