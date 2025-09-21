// JavaScript source code
//$(function () {
//    alert($('#pathLogoBox').css('width'));
//    $('.pathCharacterLI').hide();
//    $('.pathEquipmentLI').hide();
//    $('.pathClassLI').hide();
//    $('.pathMagicItemLI').hide();
//    $('.modernRaceLI').hide();
//    $('.modernSpellLI').hide();
//    $('.sideBarButtonOutside').show();
//});
////individual menu hide/display
//$("#pathCharacter").on('click', function () {
//    $('.pathCharacterLI').toggle();
//});

//$('#pathEquipment').on('click', function () {
//    $('.pathEquipmentLI').toggle();
//});
//$('#pathClass').on('click', function () {
//    $('.pathClassLI').toggle();
//});
//$('#pathMagicItem').on('click', function () {
//    $('.pathMagicItemLI').toggle();
//});
//$('#modernMagic').on('click', function () {
//    $('.modernSpellLI').toggle();
//})
//$('#modernRace').on('click', function () {
//    $('.modernRaceLI').toggle();
//})
////menu display button rotate
//$('.sideBarButtonOutside').on('click', function () {
//    $('.list').toggle();
//    $('.edition').toggle();
//    $('#sideBarButton').animate({ 'rotate': '+=180deg' },
//        { duration: 0, queue: false });
//});
////increase font size of side menu 
//$("#pathCharacter").hover(function () {
//    $(this).animate({ 'font-size': '1.5em', 'width': '145.6px' },
//        { duration: 500, easing: 'linear', queue: false });
//}, function () {
//    $(this).animate({ 'font-size': '1.3em', 'width': '145.6px' },
//        { duration: 500, easing: 'linear', queue: false });
//});
//$("#pathEquipment").hover(function () {
//    $(this).animate({ 'font-size': '1.5em',  'width': '145.6px' },
//        { duration: 500, easing: 'linear', queue: false });
//}, function () {
//    $(this).animate({ 'font-size': '1.3em' , 'width': '145.6px'},
//        { duration: 500, easing: 'linear', queue: false });
//});
//$("#pathClass").hover(function () {
//    $(this).animate({ 'font-size': '1.5em', 'width': '145.6px' },
//        { duration: 500, easing: 'linear', queue: false });
//}, function () {
//    $(this).animate({ 'font-size': '1.3em', 'width': '145.6px' },
//        { duration: 500, easing: 'linear', queue: false });
//});
//$('#pathMagicItem').hover(function () {
//    $(this).animate({ 'font-size': '1.5em', 'width': '145.6px' },
//        { duration: 500, easing: 'linear', queue: false });
//}, function () {
//    $(this).animate({ 'font-size': '1.3em', 'width': '145.6px' },
//        { duration: 500, easing: 'linear', queue: false });
//});
//$("#modernMagic").hover(function () {
//    $(this).animate({ 'font-size': '1.5em', 'width': '145.6px' },
//        { duration: 500, easing: 'linear', queue: false });
//}, function () {
//    $(this).animate({ 'font-size': '1.3em', 'width': '145.6px' },
//        { duration: 500, easing: 'linear', queue: false });
//});
//$('#modernRace').hover(function () {
//    $(this).animate({ 'font-size': '1.5em', 'width': '145.6px' },
//        { duration: 500, easing: 'linear', queue: false });
//}, function () {
//    $(this).animate({ 'font-size': '1.3em', 'width': '145.6px' },
//        { duration: 500, easing: 'linear', queue: false });
//})

//logos
$('#modernLogo').hover(function () {
    $(this).effect('shake', { times: 3 }, '2000');
});

$('#pathLogo').hover(function () {

    $(this).effect("scale", {
        direction: "horizonta", origin: ["middle"], percent: '80%', scale: "content"
    }, { queue: false });
}, function () {
    $(this).effect("scale", {
        direction: "horizonta", origin: ["middle"], percent: '125%', scale: "content"
    }, { queue: false});
});

//$('#pathLogo').hover(function () {
//    //$(this).css({ 'margin-left': 'auto' });
//    $(this).css({ 'margin-left': '41px', 'margin-right': '41px' });
//}, function () {
//    $(this).css({ 'margin-left': 'auto', 'margin-right': '0px' });
//    //$(this).css({ 'margin-left': '0px' }, { duration: 1000, easing: 'linear', queue: false });
//});