// JavaScript source code
$(function() {
    alert('begin');
});

//individual menu hide/display
$("#pathCharacter").on('click', function () {
    $('.pathCharacterLI').toggle();
});

$('#pathEquipment').on('click', function () {
    $('.pathEquipmentLI').toggle();
});
$('#pathClass').on('click', function () {
    $('.pathClassLI').toggle();
        
});
$('#modernMagic').on('click', function () {
    $('.modernSpellLI').toggle();
})
//menu hide/display
$('.sideBarButtonOutside').on('click', function () {
    $('.list').toggle();
    $('.edition').toggle();
    //$('this').addClass('sideBarButtonOpen');
    //$('this').toggle();    
});

//increase font size of side menu 
$("#pathCharacter").hover(function() {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
},
    function () {
    $(this).css({
        'font-size': '1.3em', 'width': '7em'
    });
});
$("#pathEquipment").hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
},
    function () {
        $(this).css({
            'font-size': '1.3em', 'width': '7em'
        });
    });
$("#pathClass").hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
},
    function () {
        $(this).css({
            'font-size': '1.3em', 'width': '7em'
        });
    });
$("#modernMagic").hover(function () {
    $(this).css({
        'font-size': '1.5em', 'width': '6.05em'
    });
},
    function () {
        $(this).css({
            'font-size': '1.3em', 'width': '7em'
        });
    });

//display tiles
$('#coatPepperbox').hover(function () {
    $('#coatPepperBoxInfo').fadeIn('1000');
}, function () {
    $('#coatPepperBoxInfo').fadeOut('500');
});
$('#lightPepperbox').hover(function () {
    $('#lightPepperBoxInfo').fadeIn('1000');
}, function () {
    $('#lightPepperBoxInfo').fadeOut('500';
});
$('#giantPistol').hover(function () {
    $('#giantPistolInfo').fadeIn('1000');
}, function () {
    $('#giantPistolInfo').fadeOut('500');
});
$('#rifledDoubleHackbut').hover(function () {
    $('#rifledDoubleHackbutInfo').fadeIn('1000');
}, function () {
    $('#rifledDoubleHackbutInfo').fadeOut('500');
});
$('#calvaryMusket').hover(function () {
    $('#calvaryMusketInfo').fadeIn('1000');
}, function () {
    $('#calvaryMusketInfo').fadeOut('500');
});
$('#heavyMusket').hover(function () {
    $('#heavyMusketInfo').fadeIn('1000');
}, function () {
    $('#heavyMusketInfo').fadeOut('500');
});