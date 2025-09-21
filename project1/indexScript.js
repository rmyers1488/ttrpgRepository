//logos
$('#modernLogo').hover(function () {
    $(this).effect('shake', { times: 3 }, '2000');
});

$('#pathLogo').hover(function () {

    $(this).effect("scale", {
        direction: "horizonta", origin: ["middle"], percent: '80%', scale: "content"
    }, { queue: false });
}, function () {
    $(this).effect("scale", {
        direction: "horizonta", origin: ["middle"], percent: '125%', scale: "content"
    }, { queue: false});
});
