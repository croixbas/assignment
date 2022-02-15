
const bgColor = document.querySelector("body");


let menu = document.getElementById("navigation");


let menuItems = document.getElementsByClassName("navcolor");


let hamburgerMenu = document.querySelector(".menuimg");
hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

let getBackgroundColor = function (targetColor) {

    switch (targetColor) {
        case 'Home':
            return '#cadcec';
        case 'Red':
            return '#ff6464';
        case 'Yellow':
            return '#f8f85b';
        case 'Green':
            return '#bcf384';
        case 'Blue':
            return '#4848d6';
        case 'Purple':
            return '#ae71eb';
        default:
            console.log("Home was selected");
    }
}


let colorChange = function (color) {

    let eventToHandle = color.target.innerText;
    bgColor.style.background = getBackgroundColor(eventToHandle);

    toggleMenu();
}


Array.from(menuItems).forEach(item => item.addEventListener('click', colorChange));