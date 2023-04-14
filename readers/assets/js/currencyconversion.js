$("#currency").on('change', function () {
	$.get('https://ipgeolocation.abstractapi.com/v1/?api_key=25886df41712488f931b176eebf02b43', function (ipdata) {
	$('input[name="productamount"]').each(function (amountindex) {
	    $.get('https://api.fastforex.io/convert?to=' + ipdata.currency.currency_code + '&amount=' + this.value + '&api_key=156518279b-6826dfd2fb-rf9umz', function (response) {
			var currencyamount = document.getElementsByClassName("currencyamount");
			$(response.result[ipdata.currency.currency_code]).each(function (index, value) {
				currencyamount[amountindex].innerHTML = ipdata.currency.currency_code + " " + value.toLocaleString();
				//$('.currencyamount').html(ipdata.currency.currency_code + " " + value.toLocaleString());
			})
	    })
		.catch(function(error){
			console.log(error);
			var currencyamount = document.getElementsByClassName("currencyamount");
			$('input[name="productamount"]').each(function (amountindex) {
				currencyamount[amountindex].innerHTML = "$" + this.value.toLocaleString();
			})
		});		
	})
})
});

/* $.get('https://ipgeolocation.abstractapi.com/v1/?api_key=25886df41712488f931b176eebf02b43', function (ipdata) {
	$('input[name="productamount"]').each(function (amountindex) {
	    $.get('https://api.fastforex.io/convert?to=' + ipdata.currency.currency_code + '&amount=' + this.value + '&api_key=156518279b-6826dfd2fb-rf9umz', function (response) {
			var currencyamount = document.getElementsByClassName("currencyamount");
			$(response.result[ipdata.currency.currency_code]).each(function (index, value) {
				currencyamount[amountindex].innerHTML = ipdata.currency.currency_code + " " + value.toLocaleString();
				//$('.currencyamount').html(ipdata.currency.currency_code + " " + value.toLocaleString());
			})
	    })
		.catch(function(error){
			console.log(error);
			var currencyamount = document.getElementsByClassName("currencyamount");
			$('input[name="productamount"]').each(function (amountindex) {
				currencyamount[amountindex].innerHTML = "$" + this.value.toLocaleString();
			})
		});		
	})
})
.catch(function(error){
	console.log(error);
}); */

var bookprice = $("#js-bookprice").text();
console.log(bookprice);

$(document).ready(function() {
	var bookprice = $("#bookprice").text();
	console.log(bookprice);
	$.each($('span[id="bookprice"]'), function(index, value) {
		console.log($(value).text());
	});
});