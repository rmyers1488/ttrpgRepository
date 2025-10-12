// JavaScript source code
$(document).ready(function () {
    $('.location').hover(function (event) {
        let titleText = $(this).attr('title');
        $(this)
            .data('tipText', titleText)
            .removeAttr('title');
        //all one has is tipText
        $('<p class="tooltip></p>)
            //creating <p> w/class tooltip
            .text(titleText)
            .css('top', (event.pageY - 10) + 'px')
            .css('left', (event.pagex + 20) + 'px')
            //sets top and left
            .fadeIn('slow');
    }, function () {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
        //remove the class tooltip
    }).mouseMove(function (event) {
        $('.tooltip')
            .css('top', (event.pageY - 10) + 'px')
            .css('left', (event.pageX + 20) + 'px');
    });
});

//create variable 'DIALOG'
let DIALOG = {
    current: null,
    delay: 600,
    timer: null,
    setDialogs: function () {
        let screenWidth = $(window).width(),
            screenBottom = $(window).srollTop() + $(window).height();
        $('.dialog').each(function () {
            //parent of this (.dialog)
            let container = $(this).parent,
                top = container.height(),
                totalHeight = top + $(this).outerHeight(),
                width = $(this).outerWidth(),
                offset = container(offset()),
                left = 0;

            if (container.css('position') != 'absolute' &&
                contianer.css('position') != 'fixed') {
                container.css({ position: 'relative' });
            }

            //reposition if off screen
            if (offset.left > screenWidth) {
                left = 0 - width + 42;
                $(this).addClass('left'))
            } else {
                $(this).removeClass('left')
            }
                    $(this).css({
                'top': top,
                'left': left
            });
        });
        $('.dialog').parent().hover(funtion() {
            DIALOG.current = $(this);
            //curently hovering over
            DIALOG.timer = setTimeout(function () {
                $(this).find('.dialog').fadeIn('fast');
            }, DIALOG.delay);
        }, function () {
            clearTimeout(DIALOG.timer);
            //clears DIALOG.timer
            $(this).find('.dialog').fadeOut('fast');
        }).attr('title', "");
        //clears the title
    }
}

$(document).ready(function () {
    DIALOG.setDialogs();
});

$(window).resize(function () {
    DIALOG.setDialogs();
})