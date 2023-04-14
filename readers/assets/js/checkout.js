// Flutterwave Payment
$.get('https://ipgeolocation.abstractapi.com/v1/?api_key=25886df41712488f931b176eebf02b43', function (ipdata) {
	$.get('https://api.fastforex.io/convert?to=' + ipdata.currency.currency_code + '&amount='+ $('#carttotal').val() + '&api_key=156518279b-6826dfd2fb-rf9umz', function (response) {
		$('#convertedamount').html(ipdata.currency.currency_code + " " + response.result[ipdata.currency.currency_code].toLocaleString());
		$('#convertedtotal').attr("value", ipdata.currency.currency_code + " " + response.result[ipdata.currency.currency_code]);
		window.amount = response.result[ipdata.currency.currency_code];
		window.currency = ipdata.currency.currency_code;
	})
	.catch(function(error){
		console.log(error);
		$('#convertedamount').html('$' + $('#carttotal').val());
		window.amount = $('#carttotal').val();
		window.currency = 'USD';
	});
})
.catch(function(error){
	console.log(error);
	$('#convertedamount').html('$' + $('#carttotal').val());
	window.amount = $('#carttotal').val();
	window.currency = 'USD';
});

function flutterwavepayment() {
	FlutterwaveCheckout({
		public_key: "FLWPUBK-bf70fc40027a3e1e941e3d93473d3fae-X",
		tx_ref: $("#txref").val(),
		amount: window.amount,
		currency: window.currency,
		payment_options: "card, account, banktransfer, mpesa, mobilemoneyuganda, mobilemoneyghana, mobilemoneyfranco, mobilemoneyrwanda, mobilemoneyzambia, qr, ussd, credit, barter",
		redirect_url: "https://africanbooks.com/confirmation",
		customer: {
			email: $("#emailaddress").val(),
			phone_number: $("#phonenumber").val(),
			name: $("#firstname").val() + " " + $("#lastname").val(),
		},
		customizations: {
			title: "AfricanBooks.com",
			description: "AfricanBooks.com Payment",
			logo: "https://africanbooks.nyc3.digitaloceanspaces.com/assets/payment-logo.png"
		},
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
		console.log(stripesession.id);
		console.log(error);
	});
}

//MTN Momo Payment
$.get('https://api.fastforex.io/convert?to=UGX&amount='+ $('#carttotal').val() + '&api_key=156518279b-6826dfd2fb-rf9umz', function (response) {
	window.ugxamount = response.result.UGX;
})
.catch(function(error){
	console.log(error);
});

function mtnmomopayment(){
	$.get('https://www.uuidgenerator.net/api/version4', function (x_reference_id) {
		var params = {
			"amount": "5.0",
			"currency": "EUR",
			"externalId": "6353636",
			"payer": {
			  "partyIdType": "MSISDN",
			  "partyId": "0248888736"
			},
			"payerMessage": "Payment for purchase P4578",
			"payeeNote": "AfricanBooks.com"
		};
		$.ajax({
			url: "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay?" + $.param(params),
			beforeSend: function(xhrObj){
				// Request headers
				xhrObj.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSMjU2In0.eyJjbGllbnRJZCI6IjFhYTE3YzU0LTllN2YtNDBkNC04YmFmLWRjYjdkZjNkZDBkOCIsImV4cGlyZXMiOiIyMDIyLTA5LTA3VDIwOjA1OjU3LjE5NSIsInNlc3Npb25JZCI6IjMwNzQwMDQ2LTU3NmYtNDM1MS1hYmRjLWJiN2Q1ZTY4YmE2MCJ9.ZCpiK3D6k5g8VdvWViIzkq7beT8QNMtk1_fNAqszSlPa4XLGRCQTY49IIWuYbc8gAuYVqwpjSon2VSEh0HNLpuqsN-vyI65lL2Z5PguLmVe5zWwnAgsTjOJudbjpuoRGipML-9yNoZA0jwCojtCQft4QWRhGEMAzI67HjJhRaVSBOPoIRYBpg_TR_dsCAFIdXqjBfG6dqip0sqyQ44SAaz0quNHmL5_9FI-FOGIbFDOONLjLbU-UplIameRLw3pQLyJ885PgICgwVhVeh-IyPEO25BDr2ESgIjlNuRYGShyjjYpwp1JSjRJemTpXP5wYh5n-H5NBWtHodBNVvpe7YA");
				xhrObj.setRequestHeader("X-Callback-Url", "");
				xhrObj.setRequestHeader("X-Reference-Id", x_reference_id);
				xhrObj.setRequestHeader("X-Target-Environment", "sandbox");
				xhrObj.setRequestHeader("Content-Type", "application/json");
				xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "e0681d732c764090b902cb905534317a");
			},
			type: "POST",
			// Request body
			data: "{body}",
		})
		.done(function(data) {
			alert("success");
			console.log(data);
		})
		.catch(function(error){
			console.log(error);
		});
	});
}

$.ajax({
	url: 'https://api.flutterwave.com/v3/banks/UG',
	type: 'GET',
	beforeSend: function(xhr) {
		xhr.setRequestHeader('Authorization', "FLWSECK-d45bb64a5a0abb46b318bd1f6d1a9f9c-X");
		xhr.setRequestHeader('Accept', '*/*');
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
		xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	},
	success: function (ugandabanks){
		console.log(ugandabanks);
	}
});