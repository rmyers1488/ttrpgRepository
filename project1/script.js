// JavaScript source code
$(function() {
    alert('begin');
});
$("#character").on("click", function() {
    //$('#.hidden').toggle();
    alert('click');
    if ($('#characterTable').is(':visible')) {
        alert('visibile');
        $('#characterTable').classAdd('hidden');
    } else {
        $('#characterTable').classRemove('hidden');
        alert('not visible');
    }
    
});