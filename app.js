

const app = {
    pass: document.getElementById('pass-one'),
    butt: document.getElementById('butt-one'),
    clue1: document.getElementById('clue-1'),
    clue2: document.getElementById('clue-2'),
}

const reveal = function () {


    switch(app.pass.value){
        case 'MERLOT':
            app.clue1.style.display = "block";
            app.pass.style.backgroundColor = "white"
        break;

        case 'PINOT NOIR':
                app.clue2.style.display = "block";
                app.pass.style.backgroundColor = "white"
        break;

        case 'CHARDONNAY':
            app.clue3.style.display = "block";
            app.pass.style.backgroundColor = "white"
        break;

        case 'MOSCATO':
            app.clue4.style.display = "block";
            app.pass.style.backgroundColor = "white"
        break;

        case 'REISLING':
                app.clue5.style.display = "block";
                app.pass.style.backgroundColor = "white"
        break;

        default: 

        app.pass.style.backgroundColor = "red"
        app.pass.value = "KILLER"
            break;

    }

}

app.butt.onclick = function() {
    reveal()
}


