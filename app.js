

const app = {
    pass1: document.getElementById('pass-one'),
    butt1: document.getElementById('butt-one'),
    clue1: document.getElementById('clue-1'),
}

const reveal = function (input, image) {
    
    if (input.value === "pass") {
        image.style.display = "block";
        input.style.backgroundColor = "white"
    } else {
        input.style.backgroundColor = "red"
        input.value = "WRONG"
    }

}

app.butt1.onclick = function() {
    reveal(app.pass1, app.clue1)
}

