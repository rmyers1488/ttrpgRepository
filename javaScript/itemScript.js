// JavaScript source code
//$(function () {
//    console.log('item script');
//    $('.leftImages').hide();

//    $('.imageDisplay').on('click', function () {
//       $('.leftImages').toggle();
//    })
//    $('.image').on('click', function () {
//        console.log('clicker');
//        $('.rightImage').empty();
//        let img = document.createElement("img");
//        img.src = $(this).attr('src');
//        let src = document.querySelector('.rightImage');
//        src.appendChild(img);
//    });
//});

const itemKey = document.querySelectorAll(`.item`);
itemKey.forEach(item => item.addEventListener('mouseover', displayInfo));
function displayInfo() {
    let show = this.getAttribute('data-name');
    console.log(show);
    document.querySelector(`#${show}`).classList.remove('hidden');
    document.querySelector(`#${show}`).classList.add('tileSlideUp');
}
itemKey.forEach(item => item.addEventListener('mouseout', removeInfo));
function removeInfo() {
    let show = this.getAttribute(`data-name`);
    console.log(show);
    document.querySelector(`#${show}`).classList.add('hidden');
        document.querySelector(`#${show}`).classList.remove('tileSlideUp');
}

const tileKey = document.querySelecotrAll('.tile');
tileKey.forEach(tile => tile.addEventListener('mouseover', displayTile));
function displayTile() {
    this.classList.remove('hidden');
}
tileKey.forEach(tile => tile.addEventListener('mouseout', removeTile));
function removeTile() {
    this.classList.add('hidden');
}
//$('.titleLogo').hover(function () {
//    $(this).animate({ left: ,  }
//}), function () {

//});

//let rightLimit = $(window).width() - 300;
//console.log(rightLimit);
//let titleLogoMove = true;
//let position = $('#titleLogo').offset().left;
//setInterval(function () {
//    if (titleLogoMove) { ++position; }
//    else { --position; }
//    if (position  >= rightLimit || position <= 0) {
//        titleLogoMove = !titleLogoMove;
//    }
//    $('#titleLogo').css('left', position);
//    //console.log($('#titleLogo').css('left'));
//}, 200);

//image container
//$('.imageDisplay').on('click', function () {
 //   $('.leftImages').toggle();
//})
//$('.image').on('click', function () {
//    console.log('clicker');
//    $('.rightImage').empty();
//    let img = document.createElement("img");
//    img.src = $(this).attr('src');
//    let src = document.querySelector('.rightImage');
//    src.appendChild(img);
//});


//weapons
//simple light
//$(`.aiguchi`).hover(function () {
//    $(`#aiguchiInfo`).fadeIn('1000');
//}, function () {
//    $(`#aiguchiInfo`).fadeOut('500');
//});
//$('.assasinKnife').hover(function () {
//    $('#assassinKnifeInfo').fadeIn('1000');
//}, function () {
//    $('#assassinKnifeInfo').fadeOut('500');
//});
//$('.collapsingBaton').hover(function () {
//    $('#collapsingBatonInfo').fadeIn('1000');
//}, function () {
//    $('#collapsingBatonInfo').fadeOut('500');
//});
//$('.elbowBlade').hover(function () {
//    $('#elbowBladeInfo').fadeIn('1000');
//}, function () {
//    $('#elbowBladeInfo').fadeOut('500');
//});
//$('.flipKnife').hover(function () {
//    $('#flipKnifeInfo').fadeIn('1000');
//}, function () {
//    $('#flipKnifeInfo').fadeOut('500');
//});
//$('.foldingKnife').hover(function () {
//    $('#foldingKnifeInfo').fadeIn('1000');
//}, function () {
//    $('#foldingKnifeInfo').fadeOut('500');
//});
//$('.instrumentBlade').hover(function () {
//    $('#instrumentBladeInfo').fadeIn('1000');
//}, function () {
//    $('#instrumentBladeInfo').fadeOut('500');
//});
//$('.manchiKanshiskaLight').hover(function () {
//    $('#manchiKanshiskaLightInfo').fadeIn('1000');
//}, function () {
//    $('#manchiKanshiskaLightInfo').fadeOut('500');
//});
//$('.manchiKanshiska1Hand').hover(function () {
//    $('#manchiKanshiska1HandInfo').fadeIn('1000');
//}, function () {
//    $('#manchiKanshiska1HandInfo').fadeOut('500');
//});
//$('.manchiKanshiska2Hand').hover(function () {
//    $('#manchiKanshiska2HandInfo').fadeIn('1000');
//}, function () {
//    $('#manchiKanshiska2HandInfo').fadeOut('500');
//});
//$('.pushKnife').hover(function () {
//    $('#pushKnifeInfo').fadeIn('1000');
//}, function () {
//    $('#pushKnifeInfo').fadeOut('500');
//});
//$('.sleeveBlade').hover(function () {
//    $('#sleeveBladeInfo').fadeIn('1000');
//}, function () {
//    $('#sleeveBladeInfo').fadeOut('500');
//});
//$('.trenchKnife').hover(function () {
//    $('#trenchKnifeInfo').fadeIn('1000');
//}, function () {
//    $('#trenchKnifeInfo').fadeOut('500');
//});
//$('.combatUmbrella').hover(function () {
//    $('#combatUmbrellaInfo').fadeIn('1000');
//}, function () {
//    $('#combatUmbrellaInfo').fadeOut('500');
//});
//$('.combatUmbrellaSword').hover(function () {
//    $('#combatUmbrellaSwordInfo').fadeIn('1000');
//}, function () {
//    $('#combatUmbrellaSwordInfo').fadeOut('500');
//});
//$('.telescopingBaton').hover(function () {
//    $('#telescopingBatonInfo').fadeIn('1000');
//}, function () {
//    $('#telescopingBatonInfo').fadeOut('500');
//});
//$('.breakdownPike').hover(function () {
//    $('#breakdownPikeInfo').fadeIn('1000');
//}, function () {
//    $('#breakdownPikeInfo').fadeOut('500');
//});
//$('.khakkhara').hover(function () {
//    $('#khakkharaInfo').fadeIn('1000');
//}, function () {
//    $('#khakkharaInfo').fadeOut('500');
//});
//$('.longMace').hover(function () {
//    $('#longMaceInfo').fadeIn('1000');
//}, function () {
//    $('#longMaceInfo').fadeOut('500');
//});
//$('.pike').hover(function () {
//    $('#pikeInfo').fadeIn('1000');
//}, function () {
//    $('#pikeInfo').fadeOut('500');
//});
//$('.arbalist').hover(function () {
//    $('#arbalistInfo').fadeIn('1000');
//}, function () {
//    $('#arbalistInfo').fadeOut('500');
//});
//$('.throwingKnife').hover(function () {
//    $().fadeIn('1000');
//}, function () {
//    $('#throwingKnifeInfo').fadeOut('500');
//});
//$('.slingshot').hover(function () {
//    $('#slingshotInfo').fadeIn('1000');
//}, function () {
//    $('#slingshotInfo').fadeOut('500');
//});
//$('.kneeBlade').hover(function () {
//    $('#kneeBladeInfo').fadeIn('1000');
//}, function () {
//    $('#kneeBladeInfo').fadeOut('500');
//});
//$('.razorBelt').hover(function () {
//    $('#razorBeltInfo').fadeIn('1000');
//}, function () {
//    $('#razorBeltInfo').fadeOut('500');
//});
//$('.smallSword').hover(function () {
//    $('#smallSwordInfo').fadeIn('1000');
//}, function () {
//    $('#smallSwordInfo').fadeOut('500');
//});
//$('.tacticalTomahawk').hover(function () {
//    $('#tacticalTomahawkInfo').fadeIn('1000');
//}, function () {
//    $('#tacticalTomahawkInfo').fadeOut('500');
//});
//$('.throwingSword').hover(function () {
//    $('#throwingSwordInfo').fadeIn('1000');
//}, function () {
//    $('#throwingSwordInfo').fadeOut('500');
//});
//$('.combatShovel').hover(function () {
//    $('#combatShovelInfo').fadeIn('1000');
//}, function () {
//    $('#combatShovelInfo').fadeOut('500');
//});
//$('.jitteSword').hover(function () {
//    $('#jitteSwordInfo').fadeIn('1000');
//}, function () {
//    $('#jitteSwordInfo').fadeOut('500');
//});
//$('.lightLance').hover(function () {
//    $('#lightLanceInfo').fadeIn('1000');
//}, function () {
//    $('#lightLanceInfo').fadeOut('500');
//});
//$('.nagamaki').hover(function () {
//    $('#nagamakiInfo').fadeIn('1000');
//}, function () {
//    $('#nagamakiInfo').fadeOut('500');
//});
//$('.naganata').hover(() {
//    $('#naganataInfo').fadeIn('1000');
//}, () {
//    $('#naganataInfo').fadeOut('500');
//})
//$('.bowShield').hover(function () {
//    $('#bowShieldInfo').fadeIn('1000');
//}, function () {
//    $('#bowShieldInfo').fadeOut('500');
//});
//$('.dwarfBucklerAxe').hover(function () {
//    $('#dwarfBucklerAxeInfo').fadeIn('1000');
//}, function () {
//    $('#dwarfBucklerAxeInfo').fadeOut('500');
//});
//$('.khopesh').hover(function () {
//    $('#khopeshInfo').fadeIn('1000');
//}, function () {
//    $('#hopeshInfo').fadeOut('500');
//});
//$('.balisword').hover(function () {
//    $('#baliswordInfo').fadeIn('1000');
//}, function () {
//    $('#baliswordInfo').fadeOut('500');
//});
//$('.fairyLance').hover(function () {
//    $('#fairyLanceInfo').fadeIn('1000');
//}, function () {
//    $('#fairyLanceInfo').fadeOut('500');
//});
//$('.fairySword').hover(function () {
//    $('#fairySwordInfo').fadeIn('1000');
//}, function () {
//    $('#fairySwordInfo').fadeOut('500');
//});
//$('.bearingSword').hover(function () {
//    $('#bearingSwordInfo').fadeIn('1000');
//}, function () {
//    $('#bearingSwordInfo').fadeOut('500');
//});
//$('.giantScythe').hover(function () {
//    $('#giantScytheInfo').fadeIn('1000');
//}, function () {
//    $('#giantScytheInfo').fadeOut('500');
//});
//$('.greatBalisword').hover(function () {
//    $('#greatBalisword').fadeIn('1000');
//}, function () {
//    $('#greatBaliswordInfo').fadeOut('500');
//});
//$('.manCatcher').hover(function () {
//    $('#manCatcherInfo').fadeIn('1000');
//}, function () {
//    $('#manCatcherInfo').fadeOut('500');
//});
//$('.odachi').hover(function () {
//    $('#odachiInfo').fadeIn('1000');
//}, function () {
//    $('#odachiInfo').fadeOut('500');
//});
//$('.orcCrusher').hover(function () {
//    $('#orcCrusherInfo').fadeIn('1000');
//}, function () {
//    $('#orcCrusherInfo').fadeOut('500');
//});
//$('.weightedChain').hover(function () {
//    $('#weightedChainInfo').fadeIn('1000');
//}, function () {
//    $('#weightedChainInfo').fadeOut('500');
//});
//$('.zhanmadao').hover(function () {
//    $('#zhanmadaoInfo').fadeIn('1000');
//}, function () {
//    $('#zhanmadaoInfo').fadeOut('500');
//});
//$('.desertThrowingKnife').hover(function () {
//    $('#desertThrowingKnifeInfo').fadeIn('1000');
//}, function () {
//    $('#desertThrowingKnifeInfo').fadeOut('500');
//});
//$('.footbow').hover(function () {
//    $('#footbowInfo').fadeIn('1000');
//}, function () {
//    $('#footbowInfo').fadeOut('500');
//});
//$('.halflingSkiprock').hover(function () {
//    $('#halflingSkiprockInfo').fadeIn('1000');
//}, function () {
//    $('#halflingSkiprockInfo').fadeOut('500');
//});
//$('.tripleBow').hover(function () {
//    $('#tripleBowInfo').fadeIn('1000');
//}, function () {
//    $('#tripleBowInfo').fadeOut('500');
//});