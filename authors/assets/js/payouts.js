$("#currency").on('change', function () {
	var currency = $("#currency").val();
    if(currency == "RWF" || currency == "TZS" || currency == "UGX" || currency == "ZMW") 
	{
        $('#mobilemoneyoption').html('<option value="MPS">M-Pesa</option>');
    }
    else if(currency == "KES") 
	{
        $('#mobilemoneyoption').html('<option>Select</option> <option value="MPS">M-Pesa</option> <option value="MPX">Airtel Kenya</option>');
    }
	else if(currency == "GHS") 
	{
        $('#mobilemoneyoption').html('<option>Select</option> <option value="MTN">MTN</option> <option value="TIGO">TIGO</option> <option value="VODAFONE">VODAFONE</option> <option value="AIRTEL">AIRTEL</option>');
    }
	else if(currency == "XAF" || currency == "XOF") 
	{
        $('#mobilemoneyoption').html('<option value="FMM">FMM</option>');
    }
	else
	{
		$('#mobilemoneyoption').html('<option>Select</option>');
	}
});

$.ajaxSetup({
	headers:{
	   'Authorization': "FLWSECK-d45bb64a5a0abb46b318bd1f6d1a9f9c-X",
	   'Access-Control-Allow-Origin': '*',
	}
 });
$.get('https://api.flutterwave.com/v3/banks/UG', function (ugandabanks) {
	console.log(ugandabanks);
});


// Flutterwave Payout
function flutterwavepayout() {
	$.get('https://authors.africanbooks.pub/flutterwavepayout', async function (flutterwavesession) {
		console.log(flutterwavesession);
		const details = {
			account_bank: "MPS",
			account_number: $('#mobilenumber').val(),
			amount: $('#amount').val(),
			currency: $('#currency').val(),
			beneficiary_name: $('#name').val(),
			meta: {
			  "sender": "AfricanBooks.com",
			  "sender_country": "UG",
			  "mobile_number": "23457558595"
			}
		  };
		  await flw.Transfer.initiate(details)
	})
	.catch(function(error){
		console.log(error);
	});
}
