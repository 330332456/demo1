define(["jquery", "jquery-cookie"], function($){
	var cart = function(){
		for (var i = 0;i < $(".recommend").find("button").size(); i++) {
			(function(i){
				$(".recommend").find("button").eq(i).click(function(){
					var id = i + 1;
					var first = $.cookie("carts") == null ? true : false;
					if (first) {
						$.cookie("carts", `[{id:${id},num:1}]`,{
							expires: 7
						});
					} else{
						var str = $.cookie("carts");
						var arr = eval(str);
						var same = false;
						for(var j in arr){
							if (arr[j].id == id) {
								arr[j].num += 1;
								var cookieStr = JSON.stringify(arr);
								$.cookie("carts", cookieStr, {
									expires: 7
								});
								same = true;
								break;
							} 
						}
						if(!same){
							var obj = {
								id: id,
								num: 1
							};
							arr.push(obj);
							var cookieStr = JSON.stringify(arr);
							$.cookie("carts", cookieStr, {
								expires: 7
							});
						}
					}
					alert("添加成功");
				})
			})(i);
				
		}
		$(".warp").find(".right").hover(function(){
			$.ajax({
				url: "data/shop.json",
				type: "get",
				success:function(res){
					
					var cookieArr = eval($.cookie("carts"));
					var html = '';
					var shopArr = res[0].recommend;
					for (var i in cookieArr) {
						var arr = place(res, cookieArr[i].id);
						for ( var j in arr) {
							if (arr[j].id == cookieArr[i].id) {
								var obj = arr[j];
								html += `<tr><td>${obj.game || "腾讯游戏"}</td><td>${obj.name}</td><td>${obj.price}QB</td><td>${cookieArr[i].num}</td></tr>`;
							}
						}
					}
					$(".cart").find("tbody").html(html);
				}
			})
			$(".cart").css("display", "block");	
		},function(){
			$(".cart").css("display", "none");	
		})
		$(".nav").find(".right").find("button").click(function(){
			window.location.href = "account.html";
		});
	}
	return {
		cart: cart
	}
})
