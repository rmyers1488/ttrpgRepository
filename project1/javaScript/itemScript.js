// JavaScript source code
$(function () {
    console.log('item script');
});
$(".logo").hover(function () {
    $(this).animate({ opacity: '0.5' }, 'slow');
}, function () {
    $(this).animate({ opacity: '2.0' }, 'slow');
});