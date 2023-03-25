$.get('https://ipgeolocation.abstractapi.com/v1/?api_key=25886df41712488f931b176eebf02b43', function (ipdata) {
	$.get('https://api.fastforex.io/convert?to=' + ipdata.currency.currency_code + '&amount='+ $('#amount').val() + '&api_key=156518279b-6826dfd2fb-rf9umz', function (response) {
		window.amount = response.result[ipdata.currency.currency_code];
		window.currency = ipdata.currency.currency_code;
	})
	.catch(function(error){
		console.log(error);
		window.amount = $('#amount').val();
		window.currency = 'USD';
	});
})
.catch(function(error){
	console.log(error);
	window.amount = $('#amount').val();
	window.currency = 'USD';
});

// Flutterwave Payment
function flutterwavepayment() {
	$.get('https://africanbooks.com/flutterwavecheckout', function (flutterwavesession) {
		FlutterwaveCheckout({
			public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
			tx_ref: $("#txref").val(),
			amount: window.amount,
			currency: window.currency,
			payment_options: "card, account, banktransfer, mpesa, mobilemoneyuganda, mobilemoneyghana, mobilemoneyfranco, mobilemoneyrwanda, mobilemoneyzambia, qr, ussd, credit, barter",
			redirect_url: "https://africanbooks.com/marketingsubscriptionconfirmation",
			customer: {
				email: $("#emailaddress").val(),
				phone_number: $("#phonenumber").val(),
				name: $("#firstname").val() + " " + $("#lastname").val(),
			},
			customizations: {
				title: "AfricanBooks.com",
				description: "Marketing subscription payment to AfricanBooks.com",
				logo: "https://africanbooks.nyc3.digitaloceanspaces.com/assets/payment-logo.png"
			},
		});
	})
	.catch(function(error){
		console.log(error);
	});
}

//Stripe Payment
function stripepayment() {
	$.get('https://africanbooks.com/stripecheckout', function (stripesession) {
		console.log(stripesession);
		var stripe = window.Stripe('pk_test_51LjhVYIZxzcCahk5aoq24Y9DK63jWGyyk24cp6rqqyrZrfj5MQAyqbkUx2ZXoxeF0jBh1NLh1quW3VMsh0uUT3Hu007WrV1XZL');
		stripe.redirectToCheckout({ 
			sessionId: stripesession.id 
		});
	})
	.catch(function(error){
		console.log(error);
	});
}
