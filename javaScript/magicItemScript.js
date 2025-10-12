// JavaScript source code
$(function () {
    console.log('magic item');
});

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