define(["jquery", "cart"], function($, cart){
	var load = function(){
		$("#dl1").find("dt").eq(0).find("i").css("background", `url(../images/icon.png) 6px -178px`);
		$.ajax({
			url:"data/sort.json",
			type:"GET",
			success:function(res){
				for(var i = 0; i < res.length; i++){
					var oDd = $("#dl1").find("dd").eq(i);
					oDd.find("a").html(res[i].name);
					oDd.find("i").css("background", `url(../images/icon.png) ${res[i].x} -178px`);
					var html1 = "";
					var html2 = "";
					var index = 0;
					for(var j = 0;j < res[i].list.length; j++){
						html1 = oDd.find("div").html() + "<ul></ul>"
						oDd.find("div").html(html1);
						for(var k = 0; k < res[i].list[j].length; k++){
							html2 += `<li><a href="">${res[i].list[j][k]}<a></li>`;
						}
						oDd.find("div").find("ul").eq(j).html(html2);
						html2 = "";
					}
					html1 = oDd.find("div").width(j * 131);
				}
			},
			error:function(obj, error){
				alert("加载失败");
			}
		});
		$.ajax({
			url:"data/shop.json",
			success:function(res){
				$(".recommend").find("h3").find("i").css("backgroundPosition", `${res[0].x} ${res[0].y}`);
				$(".surprise").find("h3").find("i").css("backgroundPosition", `${res[1].x} ${res[1].y}`);
				$(".hobby").find("h3").find("i").css("backgroundPosition", `${res[2].x} ${res[2].y}`);
				$(".sign").find("h3").find("i").css("backgroundPosition", `${res[2].x} ${res[2].y}`);
				$(".activity").find("h3").find("i").css("backgroundPosition", `${res[4].x} ${res[4].y}`);
				
				//热卖推荐
				var text = "";
				for(var i = 0; i < res[0].recommend.length; i++){
					var obj = res[0].recommend[i];
					text += `<li><i><img src="images/${obj.img}"/></i><div><span>[${obj.game}]</span><a href="details.html?id=${obj.id}">${obj.name}</a><p class="p1">QB价：<span>${obj.price} QB</span></p><p class="p2">热卖推荐</p><button>立即抢购</button></div></li>`;
				}
				$(".recommend").find("ul").html(text);
				
				//猜你喜欢
				text = "";
				for (var i = 0; i < res[2].hobby.length; i++) {
					var obj = res[2].hobby[i];
					text +=`<li><a href="details.html?id=${obj.id}"><img src="images/${obj.img}"/></a><a href="details.html?id=${obj.id}"><p class="p1">[${obj.game}]</p>${obj.name}</a><p class="p2">商城价：<span>${obj.price}QB</span></p></li>`;
				}
				$(".hobby").find(".content").find("ul").html(text);
				
				//游戏专区
				for(var i = 0; i < res[3].division.length; i++){
					var arr = res[3].division[i];
					var node = $(".prefecture").eq(i);
					node.html(`<h3><a href="list.html"><i></i></a>${arr.game}专区</h3><div class="content cl"></div>`).find("h3").find("i").css("backgroundPosition", `${arr.x} ${arr.y}`);
					node.find(".content").html("<dl><dt></dt><dd></dd><dd></dd><dd></dd><dd></dd></dl><ul></ul>").find("dl").find("dt").html(`<img src="images/${arr.img}"/>`);
					for (var j = 0;j < node.find(".content").find("dl").find("dd").size();j++) {
						var oDd = node.find(".content").find("dl").find("dd").eq(j);
						var arr1 = arr.list[j];
						var arr2 = arr.list[j + 4];
						var text = `<div class="div1"><a href="details.html?id=${arr1.id}"><h4>${arr1.name}</h4><p class="p1">微信价：<span>${arr1.weixin}元</span></p><p class="p2">Q币价：${arr1.price}QB</p><img src="images/${arr1.img}"/></a></div><div class="div2"><a href="details.html?id=${arr2.id}"><img src="images/${arr2.img}"/></a><div class="txt"><a href="details.html?id=${arr2.id}">${arr2.name}</a><p class="p1">微信价:<span>${arr2.weixin}元</span></p><p class="p2">Q币价:${arr2.price}QB</p></div></div>`;
						oDd.html(text);
					}
					var text1 = "";
					for (var k = 0;k < arr.ranking.length; k++){
						var arr1 = arr.ranking[k];
						text1 += `<li><i></i><div class="txt"><a href="details.html?id=${arr1.id}">${arr1.name}</a><p class="p1">${arr1.price}QB</p></div><a href="details.html?id=${arr1.id}"><img src="images/${arr1.img}"/></a></li>`
					}
					var oUl = node.find(".content").find("ul")
					oUl.html(text1);
					oUl.find("li").eq(0).attr("class", "top");
					for (var k = 0;k < arr.ranking.length; k++) {
						if (k == 0) {
							oUl.find("li").eq(k).find("i").html("排行01");
						} else{
							oUl.find("li").eq(k).find("i").html(`0${k + 1}`);
						}
					}
					
				}
				$(".prefecture").find(".content").find(".div1").find("a").hover(function(){
					$(this).stop().animate({
						"marginLeft":5,
						"width":145
					},200)
				},function(){
					$(this).stop().animate({
						"marginLeft":0,
						"width":150
					},200)
				})
				cart.cart();
			},
			error:function(obj, error){
				$(".recommend").find("ul").html(`<img src="images/error.png" height="290px">`);
				$(".hobby").find(".content").find("ul").html(`<img src="images/error.png" height="216px">`);
			}
		});
		$.ajax({
			url:"data/activity.json",
			success:function(res){
				var text = "";
				for(var i = 0; i < res[0].length; i++){
					text += `<li><a href="#"><img src="images/${res[0][i].img}"/></a></li>`
				}
				$(".activity").find("ul").html(text);
				text = "";
				for(var i = 0; i < res[1].length; i++){
					text += `<li><a href="#"><img src="images/${res[1][i].img}"/></a></li>`
				}
				$(".advertising").find("ul").html(text);
			},
			error:function(obj, error){
				alert("加载失败");
			}
		});
	}
	return {
		load: load
	}
})