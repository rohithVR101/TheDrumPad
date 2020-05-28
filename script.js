var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let buttonInnerHTML = this.classList[0];

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    let sound;
    switch (key) {
        case "q":
            sound = new Audio("sounds/tom-1.mp3");
            break;

        case "w":
            sound = new Audio("sounds/tom-2.mp3");
            break;

        case "e":
            sound = new Audio('sounds/snare-1.mp3');
            break;

        case "r":
            sound = new Audio('sounds/tom-3.mp3');
            break;

        case "a":
            sound = new Audio('sounds/tom-4.mp3');
            break;

        case "s":
            sound = new Audio('sounds/snare-2.mp3');
            break;

        case "d":
            sound = new Audio('sounds/bass-1.mp3');
            break;

        case "f":
            sound = new Audio('sounds/bass-2.mp3');
            break;

        case "z":
            sound = new Audio('sounds/cymbal-1.mp3');
            break;

        case "x":
            sound = new Audio('sounds/cymbal-2.mp3');
            break;

        case "c":
            sound = new Audio('sounds/hi-hat-1.mp3');
            break;

        case "v":
            sound = new Audio('sounds/hi-hat-2.mp3');
            break;

        default:
            sound = null;

    }
    sound.play();
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
