// JavaScript source code
$(function() {
    console.log('lightbox');
});
//<a class='lightbox' href="../images/CoachGun.jpg"></a>
$('a.lightbox').click(function (e) {
    //hide scrollbars
    $('body').css('overflow-y', 'hidden');
    //the overlay
    $('<div id="overlay"></div>')
        .css('top', $(document).scrollTop())
        .css('opacity', '0')
        //does nothing
        //.css('height', '95%')
        //.css('width', '95%')
        .animate({ 'opacity': '0.5' }, 'slow')
        .appendTo('body');
    //hide the lightbox
    $('<div id="lightbox"></div>')
        //does nothing
        //.css('width', '95%')
        .hide()
        .appendTo('body');
    $('<img>')
        .attr('src', $(this).attr('href'))
        //nada
        //.css('width', '95%')
        .load(function () {

            positionLightboxImage();
        })
        .click(function () {
            removeLightbox();
        })
        .appendTo('#lightbox');
    return false;
});
//takes it out of lightbox
//jQuery.colorbox.settings.maxHeight = '95%';
//jQuery.colorbox.settings.maxWidth = '95%';
function positionLightboxImage() {
    let top = ($(window).height() - $('#lightbox').height()) / 2;
    let left = ($(window).width() - ('#lightbox').width()) / 2;
    $('#lightbox')
        .css({
            'top': top + $(document).scrollTop(),
            'left': left,
            //locks page in place
            //'maxWidth': '95%',
            //'maxHeight': '95%'
        })
        .fadeIn();
    console.log(top, left);
}

function removeLightbox() {
    $('#overlay, #lightbox')
        .fadeOut('slow', function () {
            $(this).remove();
            $('body').css('overflow-y', 'auto'); //readd the scrollbar
        });
}

$(document).ready(function () {
    $('a[rel="img"]').colorbox({
        //allows adjust ment of max width/hight
        maxWidth: '95%',
        maxHeight: '95%',
        //width: '100%',
        //height: '100%'
    });
    //nothing
    //let x = $(document).innerWidth();
    //let y = $(document).innerHeight();
    //parent.$.colorbox.resize({ width: '550px', height: '500px' });
});

//image of # of iages
//$('a[rel=gun').colorbox({
//    transition: 'fade',
//    speed: 500,
//    current: "{current} of {total} firearm pictures"

//});


