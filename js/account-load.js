define(["jquery"], function($){
	var accountLoad = function(){
		var cookieArr = eval($.cookie("carts"));
		var price = 0;
		var html = "";
		$.ajax({
			type:"get",
			url:"data/shop.json",
			success:function(res){
				for (var i in cookieArr) {
					var id = cookieArr[i].id;
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
					
					for (var j = 0; j < arr.length; j++) {
						if (arr[j].id == id) {
							html += `<tr><td class="tdleft"><img src="images/${arr[j].img}"/>${arr[j].name}</td><td>虚拟道具</td><td>${arr[j].price}Q币</td><td>永久</td><td>${cookieArr[i].num}</td><td>无优惠</td><td>${arr[j].price * cookieArr[i].num}Q币</td><td><a href="">删除</a></td></tr>`;
							price += arr[j].price * cookieArr[i].num;
						}
					}
					
				}
				$(".sumprice").find("span").html(price);
				$(".tablebox").find("tbody").html(html);
			}
		});
		
	}
	return {
		accountLoad: accountLoad
	}
})