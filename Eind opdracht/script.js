//make element from background
const bgColor = document.querySelector("body");
//select navigation menu
let menu = document.getElementById("navigation");
//selector for listitems
let menuItems = document.getElementsByClassName("navcolor");
//Hamburger menu
let hamburgerMenu = document.querySelector(".menuimg");
hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

//define all background colors
let getBackgroundColor = function (targetColor) {

    switch (targetColor) {
        case 'No Color':
            return '#f0f8ff';
        case 'Red':
            return '#ff6464';
        case 'Orange':
            return '#fcb36a';
        case 'Yellow':
            return '#f8f85b';
        case 'Green':
            return '#bcf384';
        case 'Blue':
            return '#4848d6';
        case 'Purple':
            return '#ae71eb';
        default:
            console.log("No color was selected");
    }
}

//change background color
let colorChange = function (color) {

    let eventToHandle = color.target.innerText;
    bgColor.style.background = getBackgroundColor(eventToHandle);

    toggleMenu();
};

[...menuItems].forEach(item => item.addEventListener('click', colorChange));
