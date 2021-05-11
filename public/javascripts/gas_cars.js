$(document).ready(function () {
    var url = window.location.href;
    console.log(url);
    var curr = url.split("/")[3];
    if (curr == "electric") {
        $("#EVs").addClass('active');
    }
    if (curr == "gas") {
        $("#Gas").addClass('active');
    }
});

// Price Filtering
price_filter_gas = $(".form-check-input.gas");
price_filter_gas.click((clicked) => {

    var query_param = clicked.target.id;
    request_url = '/gas/filter/?priceBy=' + query_param;

    console.log(request_url);
    window.location.href = request_url;

})

price_filter_range_gas = $("#formControlRangePriceGas");
price_filter_range_gas.change(() => {

    var query_param = "under" + price_filter_range_gas.val();
    request_url = '/gas/filter/?priceBy=' + query_param;

    console.log(request_url);
    window.location.href = request_url;
});



// Year Filtering
year_filter_gas = $('.custom-control-input.gas');
year_filter_gas.change((changed) => {

    var query_param = changed.target.id;
    request_url = '/gas/filter/?year=' + query_param;

    console.log(request_url);
    window.location.href = request_url;
});

year_filter_range_gas = $('#formControlRangeYearGas');
year_filter_range_gas.change(() => {

    var query_param = "year" + year_filter_range_gas.val();
    request_url = '/gas/filter/?yearLt=' + query_param;

    console.log(request_url);
    window.location.href = request_url;
});


// Range Filtering
range_filter_mileage_gas = $('#formControlRangeGas');
range_filter_mileage_gas.change((changed) => {

    var query_param = range_filter_mileage_gas.val();
    request_url = '/gas/filter/?mileageLt=' + query_param;

    console.log(request_url);
    window.location.href = request_url;
});