
$(function () {
    console.log('index start');
    console.log($(window).width() + 'px');
});

//description
$(document).ready(function () {
    $(':input').blur(function () {//over the input
        if ($(this).val().length == 0) { //unfilled field
            $(this)
                .addClass('error')
                .after('<span class="error">Fill this field</span>');
        }
    });
    $(':input').focus(function () {
        $(this)
            .removeClass('error')
            .next('span')
            .remove();
    });
});

let $green = $('#green');
let greenLeft = $('#green').offset().left;
let greenTrue = true
let windowWidth = $(window).width();
//console.log(windowWidth);
setInterval(function () {
    //greenLeft = greenLeft + 10;
    if (greenTrue) { ++greenLeft; }
    else { --greenLeft }
    $('#green').css('left', greenLeft);

    //console.log($green.css('left'));
    //console.log($green.offset().left);
    if ($green.css('left') >= windowWidth 
        || $green.css('left') <= 0)
    {
        greenTrue = !greenTrue;
    }
    //console.log(greenLeft);
}, 200);

let testVAR = {};
testVAR.nameFirst = "Robert";
testVAR.nameLast = "Myers";
testVAR.age = 37;
testVAR.classesToGo = 3;
let testVAR2 = {
    css: {
        "color": "white",
        "background-color": "black",
        "text-weight": "bold"
    },
    setup: function () {
        console.log("var2");
        }
};
testVAR.text = function () {
    alert("display");
}
let text = "secondDisplay";
testVAR.text();
testVAR2.setup();
alert(text);


//make a template for a row
function template(row, cart) {
    
    row.find('.item_name').text(cart.name);
    row.find('.item_qty').text(cart.qty);
    row.find('.item_total').text(cart.total);
    return row;
}

let newRow = $('#cart .template').clone().removeClass('template');
let cartItem = {
    name: 'Glendatronix',
    qty: 1,
    total: 450
};
template(newRow, cartItem)
    .appendTo('#cart')
    .fadeIn();

if ($.support.opacity) {
    console.log('opace');
}

function addLine() {
    console.log('click');dd
    let itemName = document.querySelector('.name').value;
    let itemQty = document.querySelector('.qty').value;
    let itemTotal = document.querySelector('.total').value;
    let cartContents = {
        name: itemName,
        qty: itemQty,
        total: itemTotal
    }
    console.log(cartContents);
    template(newRow, cartContents).appendTo('#cart');
};

//sort from one container to another
$('.selection').ready(function () {
    $('.weaponTable > tr').draggable({
        revert: 'invalid'
    });
    $('.itemList').droppable({
        activeClass: 'highlight',
        hoverClass: 'highlight-accept'
    });
});
$('.itemList, .weaponTable').sortable({
    connectWith: '.connected',
    placeholder: 'ui-state-highlight',
    receive: function (event, ui) { adopt(this) },
    remove: function (event, ui) { orphan(this) }
}).disableSelection();
function adopt(which) { //element being dragged
    if ($(which).hasClass('empty')) {
        $(which).removeClass('empty').find('.empty').remove();
    }
}
function orphan(which) {
    fi($(which).children().length == 0) {
        $(which)
            .append($('<td class="empty">empty</li>'))
            .addClass('empty');
    }
}

//loadd box
$().ready(function () {
    $('#loadBox a').click(function (e) {
        let url = $(this).attr('href');
        console.log(url);
        $('#loadData').load(url);
        e.preventDefault();
    });
});

//auto complete
$(document).ready(function () {
    let items = ['candle', 'candle lamp', 'compass', 'chalk', 'fiddle'];
    $('#itemList').autocomplete({
        source: items
    });
});