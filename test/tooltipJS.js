$(document).ready(function () {

    $('.location').hover(function (event) {
        //hover over code
        //title text is elements title
        let titleText = $(this).attr('title');
        $(this)
            .data('tipText', titleText)
            .removeAttr('title')
        $('<p class="tooltip"<>/p>')
            //text w/in the p is titleText
            .text(titleText)
            .appendTo('body')
            .css('top', (event.pageY - 10) + 'px')
            .css('left', (event.pageX + 20) + 'px')
            .fadeIn('slow');
    }, function () {
        //hover out code
        //put title back using data & tipText
        $(this).sttr('title', $(this).data('tipText'));
        //get rid of tooltip
        $('.tooltip').remove();
    }).mousemove(function (event) {
        //mouse move code
        $('.tooltip')
            //placement
            .css('top', (event.pageY - 10) + 'px')
            .css('left', (event.pageX + 29) + 'px');
    });
});
let DIALOG = {
    current: null,
    delay: 600,
    timer: null,
    //function called setDialogs
    setDialogs: function () {
        let screenWidth = $(window).width(),
            screenBottom = $(window).scrollTop() + $(window).height();
        //grab containing element, for loop
        $('.dialog').each(function () {
            let container = $(this).parent,
                top = container.height(),
                totalHeight = top + $(this).outerHeight(),
                width = $(this).outerWidth(),
                offset = container(offset()),
                left = 0;

            if (container.css('position') != 'absolute' &&
                container.css('position') != 'fixed') {
                container.css({ position: 'relative' });
            }

            //reposition of off the right of the screen
            if (offset.left > screenWidth) {
                left = 0 - width + 42;
                $(this).addClass('left');
            } else {
                $(this).removeClass('left');
            }
            //if it is below the page
            if (offset.top + totalHeight > screenBottom) {
                $(this).addClass('above');
            } else {
                $(this).removeClass('above');
            }
            $(this).css({
                "top": top,
                "left": left
            });
        });
        //reletive position
        //dialog positions
        $('.dialog').parent().hover(function () {
            //store dialog while being hovered
            DIALOG.current = $(this);
            DIALOG.timer = setTimeout(function () {
                //find the dialog
                $(this).find('.dialog').fadeIn('fast');
            }, DIALOG.delay);
        }, function () {
            //mousout, clear timer, hide dialong
            clearTimeout(DIALOG.timer);
            $(this).find('.dialog').fadeOut('fast');

        }).attr('title', ""); //clear the title to stop browser tooltip
    }
}

$(document).ready(function () {
    DIALOG.setDialogs();
});

$(window).resize(function () {
    DIAlOG.setDialogs();
});