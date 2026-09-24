// try 1
// fetch('./menu.json')
// .then((response) => response.json())
// .then((json) => console.log(json));
// import data from './menu.json' assert { type: 'json' };
// console.log(data);
// try 1 end
//try 2
async function populate() {
    const jsonList = "./menu.json";
    
    const response = await fetch(jsonList);
    const menuItems = await response.json();
    createMenu(menuItems);
}
function createMenu(obj) {
    //const element = JSON.parse(obj[1]);
    //console.log('element',element);
    const sidebar = document.querySelector(".sideBar");
    obj.forEach((line) => {
    // if (line.level === 0){
        const lineElement = line.element ? document.createElement(line.element) : "";
        if (line.url) {
            lineElement.setAttribute('src', line.url);        
        }
        if ( line.class1) {
            lineElement.classList.add(line.class1);
        }
        if (line.class2){
            lineElement.classList.add(line.class2);
        }
        if (line.id){
            lineElement.setAttribute("id", line.id);
        }
        // const lineID = line.id ? lineElement.setAttribute("id", line.id) : "";
        if (line.data){
            lineElement.setAttribute("data-menu", line.data);
        }
            // `lineElement.src= data-menu="${line.data}"` : "";
        // line.text ? lineElement.appendChild(line.text) : "";
        const lineAElement = line. ? document.createElement("a") : "";
        lineAElement.setAttribute("href", line.href);
        // lineAElement.innerHTML = line.a;
        // if (line.a) {
        //     const lineA = `<a href="${line.href}">${line.a}</a>`;
        //     console.log(lineA);
        //     lineElement.appendChild(lineA);
        //     // lineElement.innerHTML = lineA;
        // }
        if (line.title){
            lineElement.setAttribute("title", line.title);
        }
        document.querySelector(line.linkTo).appendChild(lineElement);
        // const insideElement = ${lineURL} ${lineClass} ${lineID} ${lineData} ${lineA} ${lineTitle}`: ""
        // const lineElementStart = line.element ? `lineElement.${lineURL}
        // ${lineClass} ${lineID} ${lineData} ${lineA} ${lineTitle}`: "";
        // let lineElementEnd;
        // if (line.element != 'img'){
        //     lineElementEnd = line.element ? `</${line.element}>` : "":
        // }
        // let text = documen.createElement(`${lineElementStart}${lineElementEnd}`;
        // let node = document.createElement(`${line.element}`);
        // const location = line.linkTo ? line.linkTo : "";
        // document.querySelector(location).appendChild(text);
        
    });
}
populate();

//try3

// populate('https://rmyers1488.github.io//ttrpgRepository/menu.JSON').then(data => {
//     console.log(data[0].name);
// });

let titled = Array.from(document.querySelectorAll('.title'));
let menuClose = Array.from(document.querySelectorAll('.titleMenu'));
let i = 0;
while (menuClose[i] != null) {
    menuClose[i].classList.add('hidden');
    i++;
}
titled.forEach(key => key.addEventListener('click', menuOpenClose));
//let title = document.querySelector('.title');
function menuOpenClose() {
    let menu = Array.from(document.querySelectorAll('.titleMenu'));
    let i = 0;
    while (menu[i] != null) {
        menu[i].classList.add('hidden');
        i++;
    }
    let toOpen = this.getAttribute('data-menu');
    console.log(toOpen);
    i = 0;
    while (menu[i] != null) {

        if (menu[i].classList[0] == toOpen) {
            menu[i].classList.remove('hidden');
        }
        i++;
    }
    
}

function menuDisplay(e) {
    if (!menuRange) return;
    console.log(e.offsetX);
    if (e.offsetX > 200) {
        menuRange = false;
    }
    let location = -105 + e.offSetX / 2;
    console.log(location);
    //menuPosition.style.transform = translateX(location);
}
const menuButton = document.querySelector('.sideBarButtonOutside');
menuButton.addEventListener('click', menuDisplay);
let menuRange = false;
window.addEventListener('mousedown', (e) => {
    
    if (e.offsetX < 10) {
        menuRange = true;
        
    }
});
window.addEventListener('mouseup', () => {
    menuRange = false;
})
window.addEventListener('mousemove', menuDisplay);
