require.config({ 
	paths: {
		jquery: "jquery-1.10.1.min",
		"jquery-cookie": "jquery.cookie",
		login: "login",
		cart: "cart",
		"parabola": "parabola"
	},
	shim: {
		"jquery-cookie": ["jquery"],
		"parabola": {
			exports: "_"
		}
	}
})

define(["jquery", "login", "cart"], function($, login, cart){
	var list = function(){
		$(function(){
			login.login();
			cart.cart();
			$.ajax({
				type:"get",
				url:"data/shop.json",
				success:function(res){
					var html = "";
					var arr = res[3].division[0].list;
					for (var i in arr) {
						html += `<li><a href="details.html?id=${arr[i].id}"><img src="images/${arr[i].img3}"/><h3>${arr[i].name}</h3><p>Q币价：<span>${arr[i].price}Q币</span></p><p>微信价：<span>￥${arr[i].weixin}</span></p><button>立即购买</button></a></li>`
					}
					$(".list").find("ul").html(html);
				}
			});
		})
	}
	return {
		list: list
	}
})