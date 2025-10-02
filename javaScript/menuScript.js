// JavaScript source code
$(function () {
    //$('.pathCharacterLI').hide();
    //$('.pathEquipmentLI').hide();
    //$('.pathClassLI').hide();
    //$('.pathMagicItemLI').hide();
    //$('.pathBeastLI').hide();
    //$('.modernCharacterLI').hide();
    //$('.modernRaceLI').hide();
    //$('.modernSpellLI').hide();
    //$('.modernFXItemLI').hide();
    //$('.sideBarButtonOutside').show();
    console.log('menu script');
});

$(".logo").hover(function () {
    $(this).animate({ opacity: '0.5' }, 'slow');
}, function () {
    $(this).animate({ opacity: '2.0' }, 'slow');
});

//hide menu
//li of ul of sideBar
$('.sideBar > ul > li')
    .hide();

//individual menu hide/display
$("#pathCharacter").on('click', function () {
    //alert('click');
    $('.pathCharacterLI').toggle();
});

$('#pathEquipment').on('click', function () {
    $('.pathEquipmentLI').toggle();
});
$('#pathClass').on('click', function () {
    $('.pathClassLI').toggle();

});
$('#pathMagicItem').on('click', function () {
    $('.pathMagicItemLI').toggle();
});
$('#pathBeast').on('click', function () {
    $('.pathBeastLI').toggle();
})
$('#modernCharacter').on('click', function () {
    $('.modernCharacterLI').toggle();
});
$('#modernRace').on('click', function () {
    $('.modernRaceLI').toggle();
});
$('#modernMagic').on('click', function () {
    $('.modernSpellLI').toggle();
});
$('#modernFXItem').on('click', function () {
    $('.modernFXItemLI').toggle();
});
//menu hide/display
$('.sideBarButtonOutside').on('click', function () {
    $('.list').toggle();
    $('.edition').toggle();
    $('.logo').toggle();
    $('#sideBarButton').animate({ 'rotate': '+=180deg' },
        { duration: 0, queue: false });
});


//increase font size of side menu 
$("#pathCharacter").hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
}, function () {
    $(this).css({
        'font-size': '1.3em', 'width': '7em'
    });
});
$("#pathEquipment").hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
}, function () {
    $(this).css({
        'font-size': '1.3em', 'width': '7em'
    });
});
$("#pathClass").hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
}, function () {
    $(this).css({
        'font-size': '1.3em', 'width': '7em'
    });
});
$('#pathBeast').hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
}, function () {
    $(this).css({
        'font-size': '1.3em', 'width': '7em'
    });
});
$("#pathMagicItem").hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
}, function () {
    $(this).css({
        'font-size': '1.3em', 'width': '7em'
    });
});
$("#modernCharacter").hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
}, function () {
    $(this).css({
        'font-size': '1.3em', 'width': '7em'
    });
});
$("#modernRace").hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
}, function () {
    $(this).css({
        'font-size': '1.3em', 'width': '7em'
    });
});
$("#modernMagic").hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
}, function () {
    $(this).css({
        'font-size': '1.3em', 'width': '7em'
    });
});
$('#modernFXItem').hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
}, function () {
    $(this).css({
        'font-size': '1.3em', 'width': '7em'
    });
});

//menu stays put
//let $window = $('window'), $sideBar = $('.sideBar');
//$window.scroll(function () {
//    if (!$sideBar.hasClass('fixed') && ($window.scrollTop >
//        $sideBar.offset().top)) {
//        $sideBar.addClass("fixed").data('top', $sideBar.offset().top);
//    }
//});
//$window.scroll(function () {
//    if (!$sideBar.hasClass("fixed") &&
//        ($window.scrollTop() > $sideBar.offset().top)) {
//        $sideBar.addClass('fixed').data('top', $sideBar.offset().top);
//        console.log('scroll fixed');
//    } else if ($sideBar.hasClass('fixed') &&
//        ($window.scrollTop() < $sideBar.data('top'))) {
//        $sideBar.removeClass('fixed');
//        console.log('scroll nofixed');
//    }
//});
//back to top
//$('a[href =#]').click(function () {
//    $('.sideBar').animate({ scrollTop: 0, duration: '20000' });
//    //
//    e.preventDefault();
//});