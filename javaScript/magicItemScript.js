// JavaScript source code
$(function () {
    alert('magic item');
});

$('.logo').hover(function () {
    $(this).animate({ opacity: '0.5' }, 'slow');
}, function () {
    $(this).animate({ opacity: '2.0' }, 'slow');
});
//$('.logo').hover(function () {
//    $(this).animate({ opacity: '0.5', }, 'slow');
//}, function () {
//    $(this).animate({ opacity: '2.0', }, 'slow');
    
//});