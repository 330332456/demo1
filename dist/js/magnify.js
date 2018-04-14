define(["jquery"], function($){
	var magnify = function(){
		var node = $(".goodsbox").find(".left").find("img");
		node.mouseover(function(ev){
			$(".magnify").add(".movebox").css("display", "block");
			//ev.pageX Y
			//offset().top left
			$(document).mousemove(function(ev){
				var X = ev.pageX - $(node).offset().left - $(".movebox").width() / 2;
				var Y = ev.pageY - $(node).offset().top - $(".movebox").height() / 2;
				$(".movebox").css("left", X);
				$(".movebox").css("top", Y);
				if (ev.pageX - $(node).offset().left < 0 || ev.pageX - $(node).offset().left > 260) {
					$(".magnify").add(".movebox").css("display", "none");
				}
				if (ev.pageY - $(node).offset().top < 0 || ev.pageY - $(node).offset().top > 154) {
					$(".magnify").add(".movebox").css("display", "none");
				}
				if (X <= 0) {
					$(".movebox").css("left", 0);
				}else if(X >= 130){
					$(".movebox").css("left", 130);
				}
				if (Y <= 0) {
					$(".movebox").css("top", 0);
				}else if(Y >= 77){
					$(".movebox").css("top", 77);
				}
				$(".move").css("left", $(".movebox").position().left * -4);
				$(".move").css("top", $(".movebox").position().top * -4);
			})
			
			
		})
	}
	return {
		magnify: magnify
	}
})