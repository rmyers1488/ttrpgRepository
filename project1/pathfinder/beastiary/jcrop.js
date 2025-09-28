// JavaScript source code
$('#mofat').jcrop();

//let jcrop = $('#mofat').jcrop({
//    setSelect: [10, 10, 300, 350],
//    minSize: [50, 50],
//    onChange: function (coords) {

//    },
//    onSlect: function (coords) {

//    }
//});

let jcrop = $.jcrop('#mofat', {
    let selection = jcrop.tellSelect();
    alert('selected size: ' + selection.w + 'x' + selection.h);
})