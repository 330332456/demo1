define(["jquery"], function($){
	var hover = function(){
		$("#dl1").find("dd").hover(function(){
			$(this).find("i").css("backgroundPositionY", "-207px");
			$(this).css("backgroundColor", "#fff");
			$(this).find("a").eq(0).css("color", "#000");
		},function(){
			$(this).find("i").css("backgroundPositionY", "-178px");
			$(this).css("backgroundColor", "#f55656");
			$(this).find("a").eq(0).css("color", "#fff");
		})
		
	}
	return {
		hover: hover
	}
})