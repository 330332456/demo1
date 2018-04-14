define(["jquery"], function($){
	var slide = function(){
		var aBtns = $(".dot").find("a");
		var oUl = $(".slide-ul");
		var aLis = oUl.find("li");
		var iNow = 0;
		var timer = null;
		aBtns.hover(function(){
			clearInterval(timer);
			iNow = $(this).index();
			oUl.stop().animate({
				left: -770 * iNow
			}, 300);
			aBtns.removeClass("active").eq(iNow).addClass("active");
		}, function(){
			timer = setInterval(function(){
				iNow++;
				tab();
			}, 3000);
		});
		timer = setInterval(function(){
			iNow++;
			tab();
		}, 3000);
		function tab(){
			aBtns.removeClass("active").eq(iNow).addClass("active");
			if(iNow == 5){
				aBtns.eq(0).addClass("active");
			}
			oUl.stop().animate({
				left: -770 * iNow
			}, 300, function(){
				if(iNow == 5){
					iNow = 0;
					oUl.css("left", 0);
				}
			})
		}
		aLis.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(function(){
				iNow++;
				tab();
			}, 3000);
		});
		
	}
	return {
		slide: slide
	}
})