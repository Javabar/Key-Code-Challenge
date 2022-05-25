const numDisplay = document.getElementById("numDisplay")
const codeDisplay = document.getElementById("codeDisplay")
const keyDisplay = document.getElementById("keyDisplay")
const whichDisplay = document.getElementById("whichDisplay")


document.addEventListener("keydown", (e) =>{
    let keyDown = e.key;
    let keyCode = e.code;
    let keyWhich = e.which;
    numDisplay.innerHTML = `<p class ="pressedBtn">${keyDown} was pressed</p>`.toUpperCase();
    keyDisplay.innerHTML = `<p class ="pressedBtn">${keyDown} was pressed</p>`.toUpperCase();
    codeDisplay.innerHTML = `<p class ="pressedBtn">${keyCode} was pressed</p>`.toUpperCase();
    whichDisplay.innerHTML = `<p class ="pressedBtn">${keyWhich} was pressed</p>`.toUpperCase();
})














