define(["jquery"], function($){
	var scroll = function(){
		$(window).scroll(function(){
			if($(window).scrollTop() >= 140){
				$(".nav").css("position", "fixed");
				$(".body").css("marginTop", 54);
				$("#dl1").find("dd").css("display", "none");
				$("#dl1").on("mouseover",function(){
					$("#dl1").find("dd").css("display", "block");
				});
				$("#dl1").on("mouseout", function(){
					$("#dl1").find("dd").css("display", "none");
				})
			}else{
				$(".nav").css("position", "relative");
				$(".body").css("marginTop", 0);
				$("#dl1").find("dd").css("display", "block");
				$("#dl1").unbind("mouseout");
			}
		})
	}
	return {
		scroll: scroll
	}
})