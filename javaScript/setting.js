// JavaScript source code
//$().ready(function () {
//    $('#information a').click(function (e) {
//        let url = $(this).attr('text');
//        console.log(url);
//        $('#settingInfo').trigger(url);
//        e.preventDefault();
//    });
//});

$("#information a").on('load', function () {
    //$('#information a').click(function (e) {
        let url = $(this).attr('href');
        console.log(url);
        $('#settingInfo').trigger(url);
        e.preventDefault();
    });
