require.config({
	paths: {
		jquery: "jquery-1.10.1.min"
	}
})
define(["jquery"], function($){
	var register = function(){
		$(function(){
			var nameTrue = false;
			var userTrue = false;
			var passTure = false;
			$(".check-img").click(function(){
				if ($("#agree").is(":checked")) {
					$(this).css("background-image", "url(/images/checkbox_normal.png)");
				}else{
					$(this).css("background-image", "url(/images/checkbox_check.png)");
				}
			})
			$("#name").focus(function(){
				for (var i = 0;i < 2;i++) {
					$(".content").find("p").eq(i).animate({
						"height":0
					},function(){
						$(this).css("display", "none")
					});
				}
			})
			$("#username").focus(function(){
				for (var i = 4;i < 7;i++) {
					$(".content").find("p").eq(i).animate({
						"height":0
					},function(){
						$(this).css("display", "none")
					});
				}
				$(".username").css("display", "block");
				$(".username").stop().animate({
					"height":52
				})
				
			})
			$("#password").focus(function(){
				for (var i = 10;i < 14;i++) {
					$(".content").find("p").eq(i).animate({
						"height":0
					},function(){
						$(this).css("display", "none")
					});
				}
				$(".password").css("display", "block");
				$(".password").stop().animate({
					"height":78
				})
			})
			$("#name").blur(function(){
				if (!$(this).val()) {
					$(".content").find("p").eq(0).stop().animate({
						"height":26
					}).css("display", "block");
					nameTrue = false;
				}else if($(this).val().length > 24){
					$(".content").find("p").eq(1).stop().animate({
						"height":26
					}).css("display", "block");
					nameTrue = false;
				}else{
					nameTrue = true;
				}
			})
			$("#username").blur(function(){
				$(".username").stop().animate({
					"height":0,
					"margin":0
				},function(){
					$(this).css("display", "none");
				});
				if (!$(this).val()) {
					$(".content").find("p").eq(4).stop().animate({
						"height":26
					}).css("display", "block");
					userTrue = false;
				}else if($(this).val().indexOf(" ") != -1){
					$(".content").find("p").eq(5).stop().animate({
						"height":26
					}).css("display", "block");
					userTrue = false;
				}else if($(this).val().length > 12){
					$(".content").find("p").eq(6).stop().animate({
						"height":26
					}).css("display", "block");
					userTrue = false;
				}else{
					userTrue = true;
				}
			})
			$("#password").blur(function(){
				$(".password").stop().animate({
					"height":0,
					"margin":0
				},function(){
					$(this).css("display", "none");
				});
				if (!$(this).val()) {
					$(".content").find("p").eq(10).stop().animate({
						"height":26
					}).css("display", "block");
					passTure = false;
				}else if($(this).val().indexOf(" ") != -1){
					$(".content").find("p").eq(11).stop().animate({
						"height":26
					}).css("display", "block");
					passTure = false;
				}else if($(this).val().length > 12 || $(this).val().length < 8){
					$(".content").find("p").eq(12).stop().animate({
						"height":26
					}).css("display", "block");
					passTure = false;
				}else if(!$(this).val().match(/^[a-zA-Z]/)){
					$(".content").find("p").eq(13).stop().animate({
						"height":26
					}).css("display", "block");
					passTure = false;
				}else{
					passTure = true;
				}
			});
			$("#username").on("input", function(){
				if($(this).val().indexOf(" ") != -1 ){
					$(".content").find("p").eq(2).css("backgroundImage", "url(images/info.png)");
					userTrue = false;
				}
				if($(this).val().length > 12 || $(this).val().length < 1){
					$(".content").find("p").eq(3).css("backgroundImage", "url(images/info.png)");
					userTrue = false;
				}
				if($(this).val().indexOf(" ") == -1){
					$(".content").find("p").eq(2).css("backgroundImage", "url(images/green.png)");
				}
				if($(this).val().length <= 12 && $(this).val().length >= 1){
					$(".content").find("p").eq(3).css("backgroundImage", "url(images/green.png)");
				}
			});
			$("#password").on("input", function(){
				if($(this).val().indexOf(" ") != -1){
					$(".content").find("p").eq(7).css("backgroundImage", "url(images/info.png)");
					passTure = true;
				}
				if($(this).val().length > 12 || $(this).val().length < 8){
					$(".content").find("p").eq(8).css("backgroundImage", "url(images/info.png)");
					passTure = true;
				}
				if(!$(this).val().match(/^[a-zA-Z]/)){
					$(".content").find("p").eq(9).css("backgroundImage", "url(images/info.png)");
					passTure = true;
				}
				if($(this).val().indexOf(" ") == -1){
					$(".content").find("p").eq(7).css("backgroundImage", "url(images/green.png)");
				}
				if($(this).val().length <= 12 && $(this).val().length >= 8){
					$(".content").find("p").eq(8).css("backgroundImage", "url(images/green.png)");
				}
				if($(this).val().match(/^[a-zA-Z]/)){
					$(".content").find("p").eq(9).css("backgroundImage", "url(images/green.png)");
				}
			});
			$("#regist").click(function(){
				if (nameTrue && userTrue && passTure) {
					$.ajax({
						type:"post",
						url:"php/register.php",
						data:`username=${document.getElementById("username").value}&password=${document.getElementById("password").value}&name=${document.getElementById("name").value}`,
						success:function(res){
							alert(res);
							if(res == "注册成功"){
								window.location.href='index.html';
							}else{
								window.location.reload();
							}
						}
					});		
				}
			})
			
		})
	}
	return {
		register: register
	}
})