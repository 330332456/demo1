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
					var arr = place(res, id)
					
					for (var j = 0; j < arr.length; j++) {
						if (arr[j].id == id) {
							html += `<tr><td class="tdleft"><img src="images/${arr[j].img}"/>${arr[j].name}</td><td>虚拟道具</td><td>${arr[j].price}Q币</td><td>永久</td><td>${cookieArr[i].num}</td><td>无优惠</td><td>${arr[j].price * cookieArr[i].num}Q币</td><td><a num=${id}>删除</a></td></tr>`;
							price += arr[j].price * cookieArr[i].num;
						}
					}
					
				}
				$(".sumprice").find("span").html(price);
				$(".tablebox").find("tbody").html(html);
				var aTrs = $(".tablebox").find("tbody").find("tr");
				for(var k = 0; k < aTrs.get().length; k++){
					aTrs.eq(k).find("a").click(function(){
						for (var m in cookieArr) {
							if($(this).attr("num") == cookieArr[m].id){
								cookieArr.splice(m ,1);
							};
						}
						$.cookie("carts", JSON.stringify(cookieArr),{
									expires: 7
						});
						window.location.reload();
					})
				}
			}
		});
		
	}
	return {
		accountLoad: accountLoad
	}
})