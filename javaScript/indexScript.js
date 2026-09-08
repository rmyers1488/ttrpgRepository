//logos
//$('#modernLogo').hover(function () {
//    $(this).effect('shake', { times: 3 }, '2000');
//});
//document.querySelector('#fithELogo').addEventListener('mouseover', function () {
//    console.log('5e start');
//    turnOn();
//});
//document.querySelector('#fithELogo').addEventListener('mouseout', function () {
//    console.log('5eDone');
//    turnOff();
//});
//let timer;
//let r = 0;
//function turnOn() {
//    timer = setInterval(fithInterval, 100);
//    let x = document.querySelector('#fithELogo');
//    x.disabled = true;
//}
//function turnOff() {
//    clearInterval(timer);
//    let x = document.querySelector('#fithELogo');
//    x.disabled = false;
//    document.querySelector('#fithELogo').style.transform = `rotate(0deg)`;

//}
//function fithInterval() {
//    console.log('interval');
//    r += 30;
//    document.querySelector('#fithELogo').style.transform = `rotate(${r % 360}deg)`;
//}


//document.querySelector('#fithELogo').addEventListener('mouse')

//$('#pathLogo').hover(function () {

//    $(this).animate({ height: '80%' }, '1000');
//}, function () {
//    $(this).animate({ height: '100%' }, '1000');
//});

//let $green = $('#green');
//let greenLeft = $('#green').offset().left;
//let greenTrue = true
//let windowWidth = $(window).width();
//setInterval(function () {
    //greenLeft = greenLeft + 10;
//    if (greenTrue) { ++greenLeft; }
//    else { --greenLeft; }
//    $('#green').css('left', greenLeft);

    //console.log($green.css('left'));
    //console.log($green.offset().left);
//    if ($green.offset().left >= windowWidth 
//        || $green.offset().left <= 0)
//    {
//        greenTrue = !greenTrue;
//}
    //console.log(greenLeft);
//}, 200);

//growl
function addNotice(text) {
    let notice = document.createElement('div');
    //notice.classList.add('notice');
    
    let skin = document.createElement('div');
    skin.classList.add('skin');
    //skin.style.color = '#eeeeee';
    //skin.style.fontWeight = 'bold';
    //skin.textContent = text;
    //skin.style.textAlign = 'right';
    //skin.style.paddingRight = '10px';
    //let close = document.createElement('div');
    //close.classList.add('close');
    //close.textContent = 'close';
    //let content = document.createElement('div');
    //content.classList.add('content');
    //content.textContent = text;
    //content.style.color = 'white';
    notice.append(skin);
    //skin.append(close);
    //close.append(content);
    notice.addEventListener('click', function () {
        this.remove();
    });
    document.querySelector('#growl').append(notice);
}
setTimeout( function () {
    addNotice('Updates');
}, 1000);

setTimeout( function () {
    addNotice('Added KiwiBlitz to Modern Settings');
}, 3000);

