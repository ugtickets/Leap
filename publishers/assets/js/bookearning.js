$("#paymentplan, #bookprice").keyup(function () {
    bookearning();
});

function bookearning() 
{
    var paymentplan = document.getElementById('paymentplan').value;
    var bookprice = document.getElementById('bookprice').value;

    if(paymentplan == "Ujamaa (Wealth Building Plan - 5%) $2 to $4.15" && $("#bookprice").val() >= 2 && $("#bookprice").val() <= 4.15) 
	{
        var bookearning = 70 / 100 * bookprice;
		$("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val(parseFloat(65 / 100 * bookearning).toFixed(2));
		$("#publisherearning").val(parseFloat(5 /100 * bookearning).toFixed(2));
    }
    else if(paymentplan == "Uhuru (Freedom Plan - 4%) $4.16 to 5.49" && $("#bookprice").val() >= 4.16 && $("#bookprice").val() <= 5.49) 
	{
        var bookearning = 55 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val(parseFloat(51 / 100 * bookearning).toFixed(2));
		$("#publisherearning").val(parseFloat(4 /100 * bookearning).toFixed(2));
    }
    else if(paymentplan == "Umoja (Unity Plan - 3%) $5.50 to $6" && $("#bookprice").val() >= 5.50 && $("#bookprice").val() <= 6) 
	{
        var bookearning = 45 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val(parseFloat(42 / 100 * bookearning).toFixed(2));
		$("#publisherearning").val(parseFloat(3 /100 * bookearning).toFixed(2));
    }
    else if(paymentplan == "Ubuntu (Equality Plan- 2%) $0.99 to $200" && $("#bookprice").val() >= 0.99 && $("#bookprice").val() <= 200) 
	{
        var bookearning = 35 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val(parseFloat(33 / 100 * bookearning).toFixed(2));
		$("#publisherearning").val(parseFloat(2 /100 * bookearning).toFixed(2));
    }
	else
	{
		$("#bookearning").val('0.00');
		$("#authorearning").val('0.00');
		$("#publisherearning").val('0.00');
	}
}