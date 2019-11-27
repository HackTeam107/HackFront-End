$(document).ready(function () {
    jQuery.support.cors = true;
    var urlBase = "https://fiindev.herokuapp.com/services/api/v1/students/1"
    
    $.ajax({
        url: urlBase,
        headers: { 'Access-Control-Allow-Origin': 'http://127.0.0.1:5502' },
        method: 'GET',
        type: 'jsonp',
        success: function (jsondata) {
            console.log(jsondata)
            $("#user_logged").html(jsondata.name);
        }
    });

})