// JavaScript source code
$(function () {
    console.log('item script');
    $('.leftImages').hide();
});


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

//image container
$('.imageDisplay').on('click', function () {
    $('.leftImages').toggle();
})
$('.image').on('click', function () {
    console.log('clicker');
    $('.rightImage').empty();
    let img = document.createElement("img");
    img.src = $(this).attr('src');
    let src = document.querySelector('.rightImage');
    src.appendChild(img);
});