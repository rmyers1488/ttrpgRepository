
$(function () {
    console.log('index start');
    console.log($(window).width() + 'px');
});

//logos
$('#modernLogo').hoverIntent(function () {
    $(this).effect('shake', { times: 3 }, '2000');
});

$('#pathLogo').hover(function () {

    $(this).animate({ height: '80%' }, '1000');
}, function () {
    $(this).animate({ height: '100%' }, '1000');
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