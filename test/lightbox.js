// JavaScript source code
//<a class='lightbox' href="../images/CoachGun.jpg"></a>
$('a.lightbox').click(function (e) {
    //hide scrollbars
    $('body').css('overflow-y', 'hidden');
    //the overlay
    $('<div id="overlay"></div>')
        .css('top', $(document).scrollTop())
        .css('opacity', '0')
        .animate({ 'opacity': '0.5' }, 'slow')
        .appendTo('body');
    //hide the lightbox
    $('<div id="lightbox"></div>')
        .hide()
        .appendTo('body');
    $('<img>')
        .attr('src', $(this).attr('href'))
        .load(function () {
            positionLightboxImage();
        })
        .click(function () {
            removeLightbox();
        })
        .appendTo('#lightbox');
    $('<div id="lightboxLeftArrowBox></div>')
        
        .load(function () {
            positionLeftBox();
        })
        .appendTo('#lightbox');
        
    //$('<div id=lightboxRightArrowBox></div>')
    //    .load(function () {
    //        positionRightBox();
    //    })
    //$('<div>')
        .
    return false;
});

function positionLightboxImage() {
    let top = ($(window).height() - $('#lightbox').height()) / 2;
    let left = ($(window).width() - ('#lightbox').width()) / 2
}
function positionLeftBox() {
    let top = ($(window).height() - $('lightboxLeftArrowBox').height()) / 2;
    let left = 0;
}
function positionRightBox() {
    let top = ($(window).height() - $('lightboxRightArrowBox').height()) / 2;
    let right = 0;
}
function removeLightbox() {
    $('#overlay, #lightbox')
        .fadeOut('slow', function () {
            $(this).remove();
            $('body').css('overflow-y', 'auto'); //readd the scrollbar
        });
}