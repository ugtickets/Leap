/* $.get('https://ipgeolocation.abstractapi.com/v1/?api_key=25886df41712488f931b176eebf02b43', function (ipdata) {
	$.each($('input[name="bookprice"]'), function (key) {
		fetch('https://api.fastforex.io/convert?to=' + ipdata.currency.currency_code + '&amount=' + this.value + '&api_key=156518279b-6826dfd2fb-rf9umz')
		.then(response => response.json())
		.then(response => {
			console.log(response.ok);
			console.log(this.value);
			console.log(key);
			$('.convertedbookprice').html(ipdata.currency.currency_code + " " + response.result[ipdata.currency.currency_code]);
		})
	})
	.catch(function(error){
		console.log(error);
		$('.convertedbookprice').html('$' + $('.bookprice').val());
	});
}); */

$.get('https://ipgeolocation.abstractapi.com/v1/?api_key=25886df41712488f931b176eebf02b43', function (ipdata) {
	$('input[name="bookprice"]').each(function (bookpriceindex) {
	    $.get('https://api.fastforex.io/convert?to=' + ipdata.currency.currency_code + '&amount=' + this.value + '&api_key=156518279b-6826dfd2fb-rf9umz', function (price) {
		    console.log(price);
			var newprice = price.result[ipdata.currency.currency_code];
			console.log(newprice);
			var convertedbookprice = document.getElementsByClassName("convertedbookprice");
			$(newprice).each(function (index, value) {
				convertedbookprice[bookpriceindex].innerHTML = ipdata.currency.currency_code + " " + value;
			})
	    })		
	})
});