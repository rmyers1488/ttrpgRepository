// JavaScript source code
$(function () {
    alert('modern spell');
});
//element, accssed, function
$('.logo').hover(function () {
    //element, action, effect
    $(this).animate({ opacity: '0.5' }, 'slow');
}, function () {
    $(this).animate({ opacity: '2.0' }, 'slow');
})