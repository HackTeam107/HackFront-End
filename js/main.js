$(document).ready(function () {
    jQuery.support.cors = true;
    var urlBase = "http://localhost:3333/students/2"
    console.log('Carregou');
    // $.get(urlBase, function(resultado){
    //  console.log(resultado);
    // });

    $.ajax({
        url: urlBase,
        //headers: { 'Access-Control-Allow-Origin': 'http://localhost:5501' },
        method: 'GET',
        type: 'jsonp',
        success: function (jsondata) {
            console.log(jsondata)
            $("#user_logged").html(jsondata.name);

        }
    });

})