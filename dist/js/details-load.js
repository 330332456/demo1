define(["jquery"], function($){
	var load = function(){
		alert(1)
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
			type:"get",
			url:"data/shop.json",
			success:function(res){
				var html = "";
				var arr = res[0].recommend;
				for (var i = 0; i < arr.length; i++) {
					if (arr[i].id == id) {
						html = `<div class="left"><img src="images/${arr[i].img2}"/></div><div class="right"><h2>${arr[i].name}</h2><div class="pricebox"><p class="p1">Q币价：${arr[i].price}Q币</p><p>微信价：<span>￥${arr[i].weixin}</span></p></div><p class="timeout">期限：永久</p><button id="addCart">加入购物车</button><button id="give">赠送</button></div>`;
					}
				}
				$(".goodsbox").html(html);
			}
		});
	}
	return {
		load: load
	}
})