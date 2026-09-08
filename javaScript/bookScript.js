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
    
});
//display from other html documents
const bookList = document.querySelectorAll('.book');
const bookArray = Array.from(bookList);
bookArray.forEach(book => book.addEventListener('click', showBookData));

function showBookData() {
    const location = document.querySelector('.bookDisplay');
    if (location.firstElementChild) {
        console.log('removeal');
        location.removeChild(location.firstElementChild);
    }
    const url = this.getAttribute('href');
    let iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.classList.add('iframeBlock');
    let width = document.querySelector('.bookDisplay').clientWidth;
    iframe.width = width;
    location.appendChild(iframe);
}
