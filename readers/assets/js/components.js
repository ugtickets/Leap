$(function () {
    // Select2
    $('.select2').select2({
        placeholder: 'Select'
    });

    // Selectric
    if (jQuery().selectric) {
        $(".selectric").selectric({
            disableOnMobile: false,
            nativeOnMobile: false
        });
    }
});