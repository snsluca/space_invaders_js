document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
var vaiDx;
var vaiSx;
var spara;
var timeout = null;

function keyDownHandler(e) {
    switch (e.key) {
        case "d":
            vaiDx = true;
            break;
        case "a":
            vaiSx = true;
            break;
        case "ArrowRight":
            vaiDx = true;
            break;
        case "Right":
            vaiDx = true;
            break;
        case "ArrowLeft":
            vaiSx = true;
            break;
        case "Left":
            vaiSx = true;
            break;
        case " ":
            spara = true;
            break;
    }
}

function keyUpHandler(e) {
    switch (e.key) {
        case "d":
            vaiDx = false;
            break;
        case "a":
            vaiSx = false;
            break;
        case "ArrowRight":
            vaiDx = false;
            break;
        case "Right":
            vaiDx = false;
            break;
        case "ArrowLeft":
            vaiSx = false;
            break;
        case "Left":
            vaiSx = false;
            break;
        case " ":
            spara = false;
    }
}