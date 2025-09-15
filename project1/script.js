// JavaScript source code
$(function() {
    alert('begin');
    $('.characterLI').toggle();
    $(".equipmentLI").toggle();
    $(".classLI").toggle();
});

//individual menu hide/display
$("#pathCharacter").on('click', function () {
    //alert('click');
    $('.characterLI').toggle();
});

$('#pathEquipment').on('click', function () {
    $('.equipmentLI').toggle();
});
$('#pathClass').on('click', function () {
    $('.classLI').toggle();
        
});
$('#modernMagic').on('click', function () {
    $('.spellLI').toggle();
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

