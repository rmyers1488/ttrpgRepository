// try 1
// fetch('./menu.json')
// .then((response) => response.json())
// .then((json) => console.log(json));
// import data from './menu.json' assert { type: 'json' };
// console.log(data);
// try 1 end
//try 2
async function populate(){
    const jsonList = "./menu.json";
    //console.log(jsonList);
    //const request = new Request(jsonList);
    //console.log(request);
    //console.log(JSON.parse(jsonList[0]));
    const response = await fetch(jsonList);
    const menuItems = await response.json();
    console.log(menuItems);
    createMenu(menuItems);
}
function createMenu(obj){
    const divider = document.querySelector(".sideBar");
    const topLevel = document.createElement("div");
    console.log(obj);
    let element = JSON.parse(obj[0]);
    console.log(element);
    //console.log(element[0]);
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
