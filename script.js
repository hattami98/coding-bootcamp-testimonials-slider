const buttons = document.querySelectorAll(".button");
const slides = document.querySelectorAll(".slide");

let slideArr = Array.from(slides);
let current = slideArr.filter(e => e.classList.contains("active"))[0];


function toggleButton() {
    slideShift(this.id);
}

function toggleKey(e) {
    if(e.keyCode != 37 && e.keyCode != 39)
        return;
    let direction;
    if(e.keyCode == 37) direction = "prev";
    else direction = "next";
    slideShift(direction);
}

function slideShift(e) {
    let pos = slideArr.indexOf(current);
    current.classList.remove("active");
    if(e == "prev"){
        if(pos == 0) pos = slideArr.length - 1;
        else pos--;
    }
    else if(e == "next"){
        if(pos == slideArr.length - 1) pos = 0;
        else pos++;
    }
    slideArr[pos].classList.add("active");
    current = slideArr[pos];
}

buttons.forEach(button => button.addEventListener("click", toggleButton));
window.addEventListener("keydown", toggleKey);