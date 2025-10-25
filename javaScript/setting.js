// JavaScript source code
$('#information a').click(function (e) {
    let url = $(this).attr('href');
    $('#settingInfo').load('url div:first');
    e.preventDefault();
})