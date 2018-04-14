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
	var id = window.location.search.substring(start + 1);
	var details = function(){
		$(function(){
			login.login();
			cart.cart();
			$.ajax({
				type:"get",
				url:"data/shop.json",
				success:function(res){
					var html = "";
					if (id >= 1 && id <= 6) {
						var arr = res[0].recommend;
					} else if(id >= 13 && id <= 20){
						var arr = res[3].division[0].list;
					} else if(id >= 26 && id <= 33){
						var arr = res[3].division[1].list;
					} else if(id >= 39 && id <= 46){
						var arr = res[3].division[2].list;
					} else if(id >= 52 && id <= 59){
						var arr = res[3].division[3].list;
					} else if(id >= 21 && id <= 25){
						var arr = res[3].division[0].ranking;
					} else if(id >= 34 && id <= 38){
						var arr = res[3].division[1].ranking;
					} else if(id >= 47 && id <= 51){
						var arr = res[3].division[2].ranking;
					} else if(id >= 60 && id <= 64){
						var arr = res[3].division[3].ranking;
					} else if(id >= 8 && id <= 12){
						var arr = res[2].hobby;
					}
					
					
					for (var i = 0; i < arr.length; i++) {
						if (arr[i].id == id) {
							html = `<div class="cl up"><div class="left"><div class="movebox"></div><img src="images/${arr[i].img2 || arr[i].img}"/></div><div class="right"><h2>${arr[i].name}</h2><div class="pricebox"><p class="p1">Q币价：${arr[i].price}Q币</p><p>微信价：<span>￥${arr[i].weixin || arr[i].price}</span></p></div><p class="timeout">期限：永久</p><button id="addCart">加入购物车</button><button id="give">赠送</button><div class="magnify"><div class="move"><img src="images/${arr[i].img2 || arr[i].img}"/></div></div></div></div><div class="particular"><h3>商品详情</h3><p>${arr[i].name}</p><h3>道具视频</h3><p><img src="images/video.png"/></p></div>`;
							
						}
					}
					
					$(".goodsbox").html(html);
					magnify.magnify();
				}
			});
			$("#dl1").on("mouseover",function(){
				$("#dl1").find("dd").css("display", "block");
			});
			$("#dl1").on("mouseout", function(){
				$("#dl1").find("dd").css("display", "none");
			})
				
		})
	}
	return {
		details: details
	}
})