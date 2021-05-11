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


//Contact Form
$('#contactModal').on('show.bs.modal', function (event) {

    $("#contactSubmit").click(() => {
        console.log("sub ced");

        const name = $("#username").val();
        const email = $("#useremail").val();
        const phone = $("#userphone").val();

        try {
            $.post("/customer", { username: name, useremail: email, userphone: phone }, function (data) {
                console.log("done");
            })
        }
        catch (err) {
            console.log(err);
        }

        $("#contactModal").modal('toggle');

    })

});


// Price Filtering
price_filter = $(".form-check-input");
price_filter.click((clicked) => {

    var query_param = clicked.target.id;
    request_url = '/electric/filter/?priceBy=' + query_param;

    console.log(request_url);
    window.location.href = request_url;

});


price_filter_range = $("#formControlRangePrice");
price_filter_range.change(() => {

    var query_param = "under" + price_filter_range.val();
    request_url = '/electric/filter/?priceBy=' + query_param;

    console.log(request_url);
    window.location.href = request_url;
});


// Year Filtering
year_filter = $('.custom-control-input');
year_filter.change((changed) => {

    var query_param = changed.target.id;
    request_url = '/electric/filter/?year=' + query_param;

    console.log(request_url);
    window.location.href = request_url;
});


year_filter_range = $('#formControlRangeYear');
year_filter_range.change(() => {

    var query_param = "year" + year_filter_range.val();
    request_url = '/electric/filter/?yearLt=' + query_param;

    console.log(request_url);
    window.location.href = request_url;
});



// Range Filtering
range_filter_range = $('#formControlRange');
range_filter_range.change((changed) => {

    var query_param = range_filter_range.val();
    request_url = '/electric/filter/?rangeLt=' + query_param;

    console.log(request_url);
    window.location.href = request_url;
});

