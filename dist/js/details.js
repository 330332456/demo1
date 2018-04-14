require.config({ 
	paths: {
		jquery: "jquery-1.10.1.min",
		"jquery-cookie": "jquery.cookie",
		login: "login",
		cart:"cart",
		magnify:"magnify"
	},
	shim: {
		"jquery-cookie": ["jquery"]
	}
})

define(["jquery", "login", "cart", "magnify"], function($, login, cart, magnify){
	
	var start = window.location.search.search("=");
	var id = window.location.search.substring(start + 1) || 1;
	var details = function(){
		$(function(){
			login.login();
			cart.cart();
			$.ajax({
				type:"get",
				url:"data/shop.json",
				success:function(res){
					var html = "";
					var arr = place(res, id);
					
					
					for (var i = 0; i < arr.length; i++) {
						if (arr[i].id == id) {
							html = `<div class="cl up"><div class="left"><div class="movebox"></div><img src="images/${arr[i].img2 || arr[i].img}"/></div><div class="right"><h2>${arr[i].name}</h2><div class="pricebox"><p class="p1">Q币价：${arr[i].price}Q币</p><p>微信价：<span>￥${arr[i].weixin || arr[i].price}</span></p></div><p class="timeout">期限：永久</p><button id="addCart">加入购物车</button><button id="give">赠送</button><div class="magnify"><div class="move"><img src="images/${arr[i].img2 || arr[i].img}"/></div></div></div></div><div class="particular"><h3>商品详情</h3><p>${arr[i].name}</p><h3>道具视频</h3><p><img src="images/video.png"/></p></div>`;
							
						}
					}
					
					$(".goodsbox").html(html);
					magnify.magnify();
					$("#addCart").click(function(){
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
				}
			});
			$("#dl1").on("mouseover",function(){
				$("#dl1").find("dd").css("display", "block");
			});
			$("#dl1").on("mouseout", function(){
				$("#dl1").find("dd").css("display", "none");
			});
					
				
		})
	}
	return {
		details: details
	}
})