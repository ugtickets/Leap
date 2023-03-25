$("#paymentplan, #bookprice").keyup(function () {
    bookearning();
});

function bookearning() 
{
    var paymentplan = $("#paymentplan").val();
    var bookprice = $("#bookprice").val();

    if(paymentplan == "Ujamaa (Wealth Building Plan - 70%) $2 to $4.15" && bookprice >= 2 && bookprice <= 4.15) 
	{
        var bookearning = 70 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
    }
    else if(paymentplan == "Uhuru (Freedom Plan - 55%) $4.16 to 5.49" && bookprice >= 4.16 && bookprice <= 5.49) 
	{
        var bookearning = 55 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
    }
    else if(paymentplan == "Umoja (Unity Plan - 45%) $5.50 to $6" && bookprice >= 5.50 && bookprice <= 6) 
	{
        var bookearning = 45 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
    }
    else if(paymentplan == "Ubuntu (Equality Plan- 35%) $0.99 to $200" && bookprice >= 0.99 && bookprice <= 200) 
	{
        var bookearning = 35 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
    }
	else
	{
		$("#bookearning").val('0.00');
	}
}