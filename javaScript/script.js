// JavaScript source code
$(function () {
    $('.sideBarButtonOutside').show();
    console.log('menu script');

    //growl
    setTimeout(function () {
        addNotice('<p>Updates</p>');
    }, 1000);
    setTimeout(function () {
        addNotice('<p>Added KiwiBlitz to Modern Settings');
    }, 3000);
    $('#growl') // grab eleemnt growl
        .find('.close')
        .on('click', function () {
            $(this)
                .closest('.notice')
                .animate({
                    border: 'none',
                    height: 0,
                    marginBottom: 0,
                    marginTop: '-6px',
                    opacity: 0,
                    paddingBottom: 0,
                    paddigTop: 0,
                    queue: false
                }, 5000, function () {
                    $(this).remove()
                });
        });
    //end growl
});


$(".logo").hover(function () {
    $(this).animate({ opacity: '0.5' }, 'slow');
}, function () {
    $(this).animate({ opacity: '2.0' }, 'slow');
});

//hide menu
//li of ul of sideBar
$('.list > li').filter(':not(:first-child)').hide();
//$lastShown;

//update hide/display, only reveil one at once
$('.title').click(function () {
    console.log('click');
    console.log(this);
    if ($(this).nextAll().is(':visible')) {
        $('.list > li').filter(':not(:first-child)').hide();
    } else {
        $('.list > li').filter(':not(:first-child)').hide();
        $(this).nextAll().toggle();
    }

});
//individual menu hide/display
$('#pathImage').on('click', function () {
    console.log('toggle');
    $('#pathMenu').toggle();
});
$('#modernImage').on('click', function () {
    $('#modernMenu').toggle();
})

//menu hide/display
$('.sideBarButtonOutside').on('click', function () {
    $('.list').toggle();
    $('.edition').toggle();
    $('.logo').toggle();
    $('#sideBarButton').animate({ 'rotate': '+=180deg' },
        { duration: 0, queue: false });
});

//highlight side menu
$('.title').hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em',
    });
}, function () {
    $(this).css({
        'font-size': '1.3em', 'width': '7em',
    });
});



//tooltip
$(document).ready(function () {
    $('.location').hover(function (event) {
        let titleText = $(this).attr('title');
        $(this)
            .data('tipText', titleText)
            .removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(titleText)
            .css({ 'top': (event.pageY - 10) + 'px', 'left': (event.pageX + 20) + 'px' })
            .fadeIn('slow');
    }, function () {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function (event) {
        $('.tooltip')
            .css({ 'top': (event.pageY - 10) + 'px', 'left': (event.pageX + 20) + 'px' });
    })
});

//grow's addNotice
function addNotice(notice) {
    $('<div class="notice"></div>')
        .append('<div class="skin"></div>')
        .append('<a href="#" class="close">close</a>')
        .append($('<div class="content"></div>').html(notice))
        .hide()
        .appendTo('#growl')
        .fadeIn(5000);
}

//load feature - setting
$("#information a").on('load', function () {
    //$('#information a').click(function (e) {
    let url = $(this).attr('href');
    console.log(url);
    $('#settingInfo').trigger(url);
    e.preventDefault();
});

//display text when image is clicked
let imageVisible = true;
$('#image').click(function () {
    $('#informationBox').toggle();
});

//index logo effect
$('#modernLogo').hover(function () {
    $(this).effect('shake', { times: 3 }, '2000');
});

$('#pathLogo').hover(function () {

    $(this).animate({ height: '80%' }, '1000');
}, function () {
    $(this).animate({ height: '100%' }, '1000');
});

//lightbox setup
$('a.lightbox').click(function (e) {
    $('body').css('overflow-y', 'hidden');
    $('<div id="overlay"></div>')
        .css('top', $(document).scrollTop())
        .css('opacity', '0')
        //does nothing
        //.css('height', '95%')
        //.css('width', '95%')
        .animate({ 'opacity': '0.5' }, 'slow')
        .appendTo('body');
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
});

//image resize (120%) - magic item
let size = $('#image').width();
let newSize = $('#image').width() * 1.2;
console.log(size, newSize);
let enlarged = false;
$('#image').click(function () {
    //console.log('#image');
    if (enlarged) {
        $(this).animate({ width: newSize }, 1000);
    } else {
        $(this).animate({ width: size }, 1000);
    }
    enlarged = !enlarged;
});