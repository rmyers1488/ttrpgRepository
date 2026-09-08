document.querySelector(".create").addEventListener('click', function () {
    if (document.querySelector(".magicItemField") != null) {
        document.querySelector(".magicItemField").remove();
    }
    let field = document.createElement('div');
    field.classList.add('magicItemField');
    document.querySelector('.field').appendChild(field);
    const title = document.createElement('h2');
    console.log(document.querySelector('.title').value);
    title.innerHTML = document.querySelector('.title').value;
    document.querySelector('.field').appendChild(title);
});