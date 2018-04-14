define(["jquery"], function($){
	var imgload = function(){
		var myImg = (function(){
			var imgNode = document.createElement("img");
			document.body.appendChild(imgNode);
			return {
				setSrc: function(src){
					imgNode.src = src;
				}
			}
		})();

		// alert(myImg.setSrc)

		var proxyImg = (function(){
			var img = new Image(); //图片对象

			//每一个图片对象在图片加载完成以后，都回来调用这个函数
			img.onload = function(){
				myImg.setSrc(this.src);
			}
			return {
				setSrc: function(src){
					myImg.setSrc("img/waite.gif");
					//当图片加载完成以后
					img.src = src;
				}
			}
		})();

		proxyImg.setSrc("img/show.png");
	}
	return {
		imgload: imgload
	}
})