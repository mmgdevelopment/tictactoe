let crossURL = 'url("img/cross.svg")';
let circleURL = 'url("img/circle.svg")';

let currentPlayer = 'crossPlayer';

let winner = false;

let field1;
let field2;
let field3;
let field4;
let field5;
let field6;
let field7;
let field8;
let field9;


function fieldclicked(id) {
    showPlayerIcon(id);
    getBackgroundURL();
    checkForWinner();
    if (winner == true) {
        let headline = document.getElementById('headline')
        headline.innerHTML = 'Gewonnen!'
        headline.style.fontSize = '20px'
        document.getElementById('table').style.pointerEvents = 'none';
        document.getElementById('button').style.display = 'block';
        console.log('es gibt einen gewinner')
    }
};

function showPlayerIcon(id){
    let field = document.getElementById(id);
    if (field.style.backgroundImage != crossURL && field.style.backgroundImage != circleURL){
        if (currentPlayer == 'crossPlayer'){
            field.style.backgroundImage = crossURL;
            currentPlayer = 'circlePlayer';
        } else {
            field.style.backgroundImage = circleURL;
            currentPlayer = 'crossPlayer';
        };
    }; 
};

function checkForWinner(){
    if (field1 == field2 && field2 == field3 && field1 != '') {
        winner = true;
    } else if (field4 == field5 && field5 == field6 && field4 != '') {
        winner = true;
    } else if (field7 == field8 && field8 == field9 && field7 != '') {
        winner = true;
    } else if (field1 == field4 && field4 == field7 && field1 != '') {
        winner = true;
    } else if (field2 == field5 && field5 == field8 && field2 != '') {
        winner = true;
    } else if (field3 == field6 && field6 == field9 && field3 != '') {
        winner = true;
    } else if (field1 == field5 && field5 == field9 && field1 != '') {
        winner = true;
    } else if (field3 == field5 && field5 == field7 && field3 != '') {
        winner = true;
    };
};

function getBackgroundURL(){
    field1 = document.getElementById('1').style.backgroundImage;
    field2 = document.getElementById('2').style.backgroundImage;
    field3 = document.getElementById('3').style.backgroundImage;
    field4 = document.getElementById('4').style.backgroundImage;
    field5 = document.getElementById('5').style.backgroundImage;
    field6 = document.getElementById('6').style.backgroundImage;
    field7 = document.getElementById('7').style.backgroundImage;
    field8 = document.getElementById('8').style.backgroundImage;
    field9 = document.getElementById('9').style.backgroundImage;
};

function refresh() {
    document.location.reload(true);
}