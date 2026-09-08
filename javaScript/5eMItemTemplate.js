//import { saveAs } from 'file-saver';

// JavaScript source code
let name;
let rarity;
let type;
let text;
let file;
let fileImage;
document.querySelector('#file').addEventListener('change', function () {
    file = this.value + '.html';
})
document.querySelector('#item').addEventListener('change', function () {
    name = this.value;
});
document.querySelector('#type').addEventListener('change', function () {
    type = this.value;
});
document.querySelector('#description').addEventListener('change', function () {
    text = this.value;
    console.log(text);
});
//document.querySelector('')
let rarityForm = document.querySelectorAll('input[type=radio][name="rarity"');
rarityForm.forEach(rare => rare.addEventListener('change', function () {
    rarity = this.value;
    console.log(rarity);
}));
document.querySelector('.imageFile').addEventListener('change', function () {
    loadImage(
        fileImage = this.files[0],
        //this.files[0],
        //console.log(fileImage)
        //function (img) {
            //document.body.appendChild(img);
            //fileImage = img;
        //}
    )
});

document.querySelector('#createButton').addEventListener('click', function () {    
    loadImage(
        fileImage,
        function (img) {
            document.body.appendChild(img);
        },
        { maxWidth: 600 }
    )
    const data = `
        <div class="primary">
            <p>
                <span class="titleLine">${name}</span><br />
                <span class="infoLine">${type},  ${rarity}</span>
            </p>
            <p class="info">
                ${text}
            </p>
        </div>`;

    const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    let FileSaver = require('file-saver');
    FileSaver.saveAs(blob, file)
});