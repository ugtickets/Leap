$.get("https://ipgeolocation.abstractapi.com/v1/?api_key=25886df41712488f931b176eebf02b43", function(ipdata) {
	console.log(ipdata);
    $('#currency').html(ipdata.currency.currency_code);
    $('#currencycode').attr("value", ipdata.currency.currency_code);
    $('#flag').attr('src', ipdata.flag.png);
});