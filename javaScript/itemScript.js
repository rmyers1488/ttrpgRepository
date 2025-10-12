// JavaScript source code
$(function () {
    console.log('item script');
});

console.log(position);
console.log($('#titleLogo').offset().left);

//$('.titleLogo').hover(function () {
//    $(this).animate({ left: ,  } 
//}), function () {

//});

let rightLimit = $(window).width() - 300;
console.log(rightLimit);
let titleLogoMove = true;
let position = $('#titleLogo').offset().left;
setInterval(function () {
    if (titleLogoMove) { ++position; }
    else { --position; }
    if (position  >= rightLimit || position <= 0) {
        titleLogoMove = !titleLogoMove;
    }
    $('#titleLogo').css('left', position);
    //console.log($('#titleLogo').css('left'));
}, 200);