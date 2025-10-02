
$(function () {
    console.log('index start');
    console.log($(window).width() + 'px');
});

//logos
$('#modernLogo').hoverIntent(function () {
    $(this).effect('shake', { times: 3 }, '2000');
});

$('#pathLogo').hover(function () {

    $(this).animate({ height: '80%' }, '1000');
}, function () {
    $(this).animate({ height: '100%' }, '1000');
});

let $green = $('#green');
let greenLeft = $('#green').offset().left;
let greenTrue = true
let windowWidth = $(window).width();
console.log(windowWidth);
setInterval(function () {
    //greenLeft = greenLeft + 10;
    if (greenTrue) { ++greenLeft; }
    else { --greenLeft }
    $('#green').css('left', greenLeft);

    //console.log($green.css('left'));
    console.log($green.offset().left);
    if ($green.css('left') >= windowWidth 
        || $green.css('left') <= 0)
    {
        greenTrue = !greenTrue;
    }
    //console.log(greenLeft);
}, 200);

//setInterval(function () {

//}, 1000);