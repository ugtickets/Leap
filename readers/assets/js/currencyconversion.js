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
	
	$.each($('.amount'), function(priceindex, value) {
		console.log($(value).text());
		$.get('https://api.fastforex.io/convert?to=UGX' + '&amount=' + $(value).text() + '&api_key=156518279b-6826dfd2fb-rf9umz', function (response) {
			var productprice = document.getElementsByClassName("product-price");
			$(response.result['UGX']).each(function (index, value) {
				console.log("UGX " + value.toLocaleString());
				productprice[priceindex].innerHTML = "UGX " + value.toLocaleString();
			})
		})
		.catch(function(error){
			console.log(error);
		});		
	});

	$(".amount").each(function (priceindex, value) {
		console.log(priceindex.value);
		$.get('https://api.fastforex.io/convert?to=UGX' + '&amount=' + this.value + '&api_key=156518279b-6826dfd2fb-rf9umz', function (response) {
			var productprice = document.getElementsByClassName("product-price");
			$(response.result['UGX']).each(function (index, value) {
				productprice[priceindex].innerHTML = "UGX " + value.toLocaleString();
			})
		})
		.catch(function(error){
			console.log(error);
		});		
	});
});

$(document).ready(function() {
	$("#currencycode").on('change', function () {
		currencyconversion();
	});

	var amounts = [];
	$('.amount').each(function (index, value) {
		amounts.push($(value).text());
		
	});
	console.log(amounts);

	function currencyconversion()
	{
		var currencycode = $("#currencycode").val();

		if(currencycode == "UGX") 
		{
			$('.currency').each(function (index, value) {
				$(value).text('UGX');
			});

			$(amounts).each(function (index, amount) {
				console.log(amount);
				var amountindex = document.getElementsByClassName("amount");
				$('.amount').each(function () {
					amountindex[index].innerHTML = (amount * 3750).toLocaleString();
					//$(value).text((amount * 3750).toLocaleString());
				})
				
			});
		}
		else if(currencycode == "KES") 
		{
			$('.currency').each(function (index, value) {
				$(value).text('KES');
			});

			$('.amount').each(function (index, value) {
				$(value).text(($(value).text() * 135).toLocaleString());
			});
		}
		else if(currencycode == "TZS") 
		{
			$('.currency').each(function (index, value) {
				$(value).text('TZS');
			});

			$('.amount').each(function (index, value) {
				$(value).text(($(value).text() * 2351).toLocaleString());
			});
		}
		else if(currencycode == "RWF") 
		{
			$('.currency').each(function (index, value) {
				$(value).text('RWF');
			});

			$('.amount').each(function (index, value) {
				$(value).text(($(value).text() * 1110.8).toLocaleString());
			});
		}
		else if(currencycode == "ZMW") 
		{
			$('.currency').each(function (index, value) {
				$(value).text('ZMW');
			});

			$('.amount').each(function (index, value) {
				$(value).text(($(value).text() * 17.32).toLocaleString());
			});
		}
		else if(currencycode == "GHS") 
		{		
			$('.currency').each(function (index, value) {
				$(value).text('GHS');
			});

			$('.amount').each(function (index, value) {
				$(value).text(($(value).text() * 11.75).toLocaleString());
			});
		}
		else if(currencycode == "NGN") 
		{
			$('.currency').each(function (index, value) {
				$(value).text('NGN');
			});

			$('.amount').each(function (index, value) {
				$(value).text(($(value).text() * 461.51).toLocaleString());
			});
		}
		else if(currencycode == "XAF") 
		{
			$('.currency').each(function (index, value) {
				$(value).text('XAF');
			});

			$('.amount').each(function (index, value) {
				$(value).text(($(value).text() * 597.93).toLocaleString());
			});
		}
		else if(currencycode == "XOF") 
		{
			$('.currency').each(function (index, value) {
				$(value).text('XOF');
			});

			$('.amount').each(function (index, value) {
				$(value).text(($(value).text() * 597.93).toLocaleString());
			});
		}
		else
		{
			$('.currency').each(function (index, value) {
				$(value).text('$');
			});

			$('.amount').each(function (index, value) {
				$(value).text($(value).text());
			});
		}
	}
});