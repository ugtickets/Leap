$("#paymentplan, #bookprice").keyup(function () {
    bookearning();
});

function bookearning() 
{
    var paymentplan = $("#paymentplan").val();
    var bookprice = $("#bookprice").val();
    var authorstatus = $("#authorstatus").html();

    //current authors
    if(paymentplan == "Ujamaa (Wealth Building Plan - 55%+15%) $2 to $4.15" && bookprice >= 2 && bookprice <= 4.15 && authorstatus == 'Current') 
	{
        var bookearning = 70 / 100 * bookprice;
		$("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val(parseFloat(55 / 100 * bookprice).toFixed(2));
		$("#publisherearning").val(parseFloat(15 /100 * bookprice).toFixed(2));
    }
    else if(paymentplan == "Uhuru (Freedom Plan - 45%+10%) $4.16 to 5.49" && bookprice >= 4.16 && bookprice <= 5.49 && authorstatus == 'Current') 
	{
        var bookearning = 55 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val(parseFloat(45 / 100 * bookprice).toFixed(2));
		$("#publisherearning").val(parseFloat(10 /100 * bookprice).toFixed(2));
    }
    else if(paymentplan == "Umoja (Unity Plan - 40%+5%) $5.50 to $6" && bookprice >= 5.50 && bookprice <= 6 && authorstatus == 'Current') 
	{
        var bookearning = 45 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val(parseFloat(40 / 100 * bookprice).toFixed(2));
		$("#publisherearning").val(parseFloat(5 /100 * bookprice).toFixed(2));
    }
    else if(paymentplan == "Ubuntu (Equality Plan- 30%+5%) $0.99 to $200" && bookprice >= 0.99 && bookprice <= 200 && authorstatus == 'Current') 
	{
        var bookearning = 35 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val(parseFloat(30 / 100 * bookprice).toFixed(2));
		$("#publisherearning").val(parseFloat(5 /100 * bookprice).toFixed(2));
    }
	
	//classic authors
	else if(paymentplan == "Ujamaa (Wealth Building Plan - 55%+15%) $2 to $4.15" && bookprice >= 2 && bookprice <= 4.15 && authorstatus == 'Classic') 
	{
        var bookearning = 70 / 100 * bookprice;
		$("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val('0.00');
		$("#publisherearning").val(parseFloat(bookearning).toFixed(2));
    }
    else if(paymentplan == "Uhuru (Freedom Plan - 45%+10%) $4.16 to 5.49" && bookprice >= 4.16 && bookprice <= 5.49 && authorstatus == 'Classic') 
	{
        var bookearning = 55 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val('0.00');
		$("#publisherearning").val(parseFloat(bookearning).toFixed(2));
    }
    else if(paymentplan == "Umoja (Unity Plan - 40%+5%) $5.50 to $6" && bookprice >= 5.50 && bookprice <= 6 && authorstatus == 'Classic') 
	{
        var bookearning = 45 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val('0.00');
		$("#publisherearning").val(parseFloat(bookearning).toFixed(2));
    }
    else if(paymentplan == "Ubuntu (Equality Plan- 30%+5%) $0.99 to $200" && bookprice >= 0.99 && bookprice <= 200 && authorstatus == 'Classic') 
	{
        var bookearning = 35 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val('0.00');
		$("#publisherearning").val(parseFloat(bookearning).toFixed(2));
    }
	
	//publishers
	else if(paymentplan == "Ujamaa (Wealth Building Plan - 55%+15%) $2 to $4.15" && bookprice >= 2 && bookprice <= 4.15 && authorstatus == 'Publisher') 
	{
        var bookearning = 70 / 100 * bookprice;
		$("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val('0.00');
		$("#publisherearning").val(parseFloat(bookearning).toFixed(2));
    }
    else if(paymentplan == "Uhuru (Freedom Plan - 45%+10%) $4.16 to 5.49" && bookprice >= 4.16 && bookprice <= 5.49 && authorstatus == 'Publisher') 
	{
        var bookearning = 55 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val('0.00');
		$("#publisherearning").val(parseFloat(bookearning).toFixed(2));
    }
    else if(paymentplan == "Umoja (Unity Plan - 40%+5%) $5.50 to $6" && bookprice >= 5.50 && bookprice <= 6 && authorstatus == 'Publisher') 
	{
        var bookearning = 45 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val('0.00');
		$("#publisherearning").val(parseFloat(bookearning).toFixed(2));
    }
    else if(paymentplan == "Ubuntu (Equality Plan- 30%+5%) $0.99 to $200" && bookprice >= 0.99 && bookprice <= 200 && authorstatus == 'Publisher') 
	{
        var bookearning = 35 / 100 * bookprice;
        $("#bookearning").val(parseFloat(bookearning).toFixed(2));
		$("#authorearning").val('0.00');
		$("#publisherearning").val(parseFloat(bookearning).toFixed(2));
    }
	
	else
	{
		$("#bookearning").val('0.00');
		$("#authorearning").val('0.00');
		$("#publisherearning").val('0.00');
	}
}