$(function () {
    console.log('character script');
});
$('.logo').hover(function () {
    $('.logo').animate({ opacity: '0.5' }, 'slow');
}, function () {
    $('.logo').animate({ opacity: '2' }, 'slow');

});


('#primary > div:first').resizable({
    handles: 's',
    minHeight: '25',
    maxHeight: '500',
    resize: function () {
        let remainingSpace = $(this).parent().height() - $(this).outerHeight();
        let divTwo = $(this).next();
        let divTwoHeight = remainingSpace - (divTwo.outerHeight() - divTwo.height);
        divTwo.css('height', divTwoHeight + 'px');
        console.log(divTwo.css('height'));
    }
});