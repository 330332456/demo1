require.config({ 
	paths: {
		jquery: "jquery-1.10.1.min",
		"jquery-cookie": "jquery.cookie",
		login: "login",
		cart: "cart",
		"accountLoad": "account-load"
	},
	shim: {
		"jquery-cookie": ["jquery"]
	}
})

define(["jquery", "login", "cart", "accountLoad"], function($, login, cart, accountLoad){
	var account = function(){
		$(function(){
			login.login();
			cart.cart();
			accountLoad.accountLoad();
			
		})
	}
	return {
		account: account
	}
})