$("#royaltyplan, #bookprice").keyup(function () {
    bookearning();
});

function bookearning() {
    var royaltyplan = document.getElementById('royaltyplan').value;
    var bookprice = document.getElementById('bookprice').value;

    if (royaltyplan == "70% and 65% - $2 to $4.15") {
        var bookearning = 70 / 100 * bookprice;
        $("#bookearning").val(bookearning);
    }
    if (royaltyplan == "55% and 51% - $4.16 to 5.49") {
        var bookearning = 55 / 100 * bookprice;
        $("#bookearning").val(bookearning);
    }
    if (royaltyplan == "45% and 42% - $5.50 to $6") {
        var bookearning = 45 / 100 * bookprice;
        $("#bookearning").val(bookearning);
    }
    if (royaltyplan == "35% and 33% - $0.99 to $200") {
        var bookearning = 35 / 100 * bookprice;
        $("#bookearning").val(bookearning);
    }
}