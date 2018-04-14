define(["jquery", "jquery-cookie"], function($){
	var login = function(){
		var oLeft = ($(window).width() - $(".login").outerWidth())/2;
		$(".login").css("left", oLeft);
		$(window).resize(function(){
			oLeft = ($(window).width() - $(".login").outerWidth())/2;
			$(".login").css("left", oLeft);
		});
		$("#login-close").click(function(){
			$(".full-screen").css("display", "none");
		});
		$(".login-btn").click(function(){
			$(".full-screen").css("display", "block");
			return false;
		});
		$(".login").find("input").focus(function(){
			$(this).addClass("place-color");
		});
		$(".login").find("input").blur(function(){
			$(this).removeClass("place-color");
		});
		$("#login").click(function(){
			$.ajax({
				type:"post",
				url:"php/login.php",
				data:`username=${document.getElementById("username").value}&password=${document.getElementById("password").value}`,
				success:function(res){
					if(res != "账户名或密码错误"){
						$.cookie("name", res);
						$.cookie("username", `${document.getElementById("username").value}`);
						$.cookie("password", `${document.getElementById("password").value}`);
						location.reload();
					}else{
						alert(res);
					}
				}
			});
		});
		if ($.cookie("username")) {
			$(".header").find(".right").find("li").eq(0).html(`欢迎你,${$.cookie("name")} <a href="" id="esc">退出</a>`);
			$("#esc").click(function(){
				$.cookie("username", null);
				$.cookie("password", null);
				$.cookie("name", null);
			})
		}else{
			
		}
	}
	return {
		login: login
	}
})