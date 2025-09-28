
$(function () {
    console.log('index start');
});

//logos
$('#modernLogo').hover(function () {
    $(this).effect('shake', { times: 3 }, '2000');
});

$('#pathLogo').hover(function () {

    $(this).animate({ height: '80%' }, '1000');
}, function () {
    $(this).animate({ height: '100%' }, '1000');
});


//let $green = $('#green'),
let greenLeft = $('#green').offset().left;
setInterval(function () {
    greenLeft = greenLeft + 10;
    $('#green').css('left', greenLeft);
    console.log(greenLeft);
}, 200);

setInterval(function () {

}, 1000);