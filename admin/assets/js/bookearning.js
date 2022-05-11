$("#royaltyplan, #bookprice").keyup(function () {
    bookearning();
});

function bookearning() 
{
    var royaltyplan = document.getElementById('royaltyplan').value;
    var bookprice = document.getElementById('bookprice').value;

    if(royaltyplan == "Ujamaa (Wealth Building Plan - 70%)") 
	{
        var bookearning = 70 / 100 * bookprice;
        $("#bookearning").val(bookearning);
    }
    if(royaltyplan == "Uhuru (Freedom Plan - 55%)") 
	{
        var bookearning = 55 / 100 * bookprice;
        $("#bookearning").val(bookearning);
    }
    if(royaltyplan == "Umoja (Unity Plan - 45%)") 
	{
        var bookearning = 45 / 100 * bookprice;
        $("#bookearning").val(bookearning);
    }
    if(royaltyplan == "Ubuntu (Equality Plan- 35%)") 
	{
        var bookearning = 35 / 100 * bookprice;
        $("#bookearning").val(bookearning);
    }
}