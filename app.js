

const app = {
    pass: document.getElementById('pass-one'),
    butt: document.getElementById('butt-one'),
    clue1: document.getElementById('clue-1'),
    clue2: document.getElementById('clue-2'),
    clue3: document.getElementById('clue-3'),
    clue4: document.getElementById('clue-4'),
    clue5_1: document.getElementById('clue-5.1'),
    clue5_2: document.getElementById('clue-5.2'),
    logo: document.getElementById('logo'),
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
                app.clue5_1.style.display = "block";
                app.clue5_2.style.display = "block";
                app.pass.style.backgroundColor = "white"
        break;

        default: 

        app.pass.value = "KILLER"
            break;

    }

    app.logo.style.position = "relative"

}

app.butt.onclick = function() {
    reveal()
}


