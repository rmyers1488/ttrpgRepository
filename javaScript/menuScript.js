// JavaScript source code
$(function () {
    $('.sideBarButtonOutside').show();
    console.log('menu script');

    //growl
    $('#growl') // grap eleemnt growl
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
                }, 100, function () {
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

//grow's addNotice function
function addNotice(notice) {
    $('<div class="notice"></div>')
        .append('<div class="skin"></div>')
        .append('<a href="#" class="close">close</a>')
        .append($('<div class="content"></div>').html(notice))
        .hide()
        .appendTo('#growl')
        .fadeIn(5000);
}
//growl's notices
setTimeout(function () {
    addNotice('<p>Updates</p>');
}, 1000);
setTimeout(function () {
    addNotice('<p>Added KiwiBlitz to Modern Settings</p>');
}, 3000);

//responsive slider
$(function () {
    $('.rslides').responsiveSlides({
        auto: false,
        captions: true,
        pager: true,
        nav: true
    });
});