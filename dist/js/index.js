require.config({ 
	paths: {
		jquery: "jquery-1.10.1.min",
		"jquery-cookie": "jquery.cookie",
		load: "load",
		login: "login",
		slide: "slide",
		hover: "hover",
		scroll: "scroll",
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

define(["jquery", "load", "login", "slide", "hover", "scroll", "cart"], function($, load, login, slide, hover, scroll, cart){
	var index = function(){
		$(function(){
			load.load();
			login.login();
			slide.slide();
			hover.hover();
			scroll.scroll();
			$(".surprise").find("button").click(function(){
				window.location.href = "details.html?id=7"
			})
		})
	}
	return {
		index: index
	}
})