// JavaScript source code
//$().ready(function () {
//    $('#information a').click(function (e) {
//        let url = $(this).attr('text');
//        console.log(url);
//        $('#settingInfo').trigger(url);
//        e.preventDefault();
//    });
//});
$(document).ready(function () {
    //$("#setting ul a").click(function (e) {
    //    //$('#information a').click(function (e) {
    //    let url = $(this).attr('href') + '#setting';
    //    $('#information').html('loading...').load(url);
    //    e.preventDefault();
    //});
    
});
//display from other html documents
let info = Array.from(document.querySelectorAll('.settingInfo'));
info.forEach(key => key.addEventListener('click', showSettingInfo));
window.addEventListener('resize', function () {
    let width = document.querySelector('.setting').clientWidth;
    document.querySelector('.iframeBlock').width = width;
    console.log(width);
});
console.log(info);
function showSettingInfo() {
    //console.log(this);
    //remove first element if exists
    let location = document.querySelector('#settingInfo');

    if (location.firstElementChild != null) {
        location.removeChild(location.firstElementChild);
    }
    //greate the iframe
    let webpage = this.getAttribute('href');
    let iframe = document.createElement('iframe');
    iframe.src = webpage;
    iframe.classList.add('iframeBlock');
    let width = document.querySelector('.setting').clientWidth;
    iframe.width = width;
    console.log(document.querySelector('#settingInfo').clientWidth);
    //location.removeChild(location.firstElementChild);
    //append the iframe
    location.appendChild(iframe);
    console.log(location.firstElementChild);
}
