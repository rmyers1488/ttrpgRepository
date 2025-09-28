// JavaScript source code
$(function() {
    console.log('ti')

});

$('.logo').hover(function () {
    $('.logo').animate({ opacity: '0.5' }, 'slow');
}, function () {
    $('.logo').animate({ opacity: '2' }, 'slow');

});