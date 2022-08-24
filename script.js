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

function init(){
    renderCurrentPlayer();
}
function domElemnent(id){
    return document.getElementById(id);
}

function renderCurrentPlayer(){
    crossPlayer = document.getElementById('crossPlayer');
    circlePlayer = document.getElementById('circlePlayer');

    if (currentPlayer == 'crossPlayer'){
        crossPlayer.style.opacity = '1';
        circlePlayer.style.opacity = '0.1';
    } else if (currentPlayer == 'circlePlayer'){
        circlePlayer.style.opacity = '1';
        crossPlayer.style.opacity = '0.1';
    }
}


function fieldclicked(id) {
    let field = document.getElementById(id);
    showPlayerIcon(field);
    field.style.pointerEvents = 'none';
    getBackgroundURL();
    checkForWinner();

    
    if (winner == true) {
        let headline = document.getElementById('headline');
        headline.innerHTML = 'Gewonnen!';
        headline.style.fontSize = '20px';
        document.getElementById('table').style.pointerEvents = 'none';
        document.getElementById('button').style.display = 'block';
        crossPlayer = document.getElementById('crossPlayer');
        circlePlayer = document.getElementById('circlePlayer');
        circlePlayer.style.opacity = '0.1';
        crossPlayer.style.opacity = '0.1';
    };

};

function showPlayerIcon(field){
    if (field.style.backgroundImage != crossURL && field.style.backgroundImage != circleURL){
        if (currentPlayer == 'crossPlayer'){
            field.style.backgroundImage = crossURL;
            currentPlayer = 'circlePlayer';
        } else {
            field.style.backgroundImage = circleURL;
            currentPlayer = 'crossPlayer';
        };
    };
    renderCurrentPlayer(); 
};

function checkForWinner(){
    if (field1 == field2 && field2 == field3 && field1 != '') {
        winner = true;
        domElemnent('1').classList.add('winner');
        domElemnent('2').classList.add('winner');
        domElemnent('3').classList.add('winner');
    } else if (field4 == field5 && field5 == field6 && field4 != '') {
        winner = true;
        domElemnent('4').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('6').classList.add('winner');
    } else if (field7 == field8 && field8 == field9 && field7 != '') {
        winner = true;
        domElemnent('7').classList.add('winner');
        domElemnent('8').classList.add('winner');
        domElemnent('9').classList.add('winner');
    } else if (field1 == field4 && field4 == field7 && field1 != '') {
        winner = true;
        domElemnent('1').classList.add('winner');
        domElemnent('4').classList.add('winner');
        domElemnent('7').classList.add('winner');
    } else if (field2 == field5 && field5 == field8 && field2 != '') {
        winner = true;
        domElemnent('2').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('8').classList.add('winner');
    } else if (field3 == field6 && field6 == field9 && field3 != '') {
        winner = true;
        domElemnent('3').classList.add('winner');
        domElemnent('6').classList.add('winner');
        domElemnent('9').classList.add('winner');
    } else if (field1 == field5 && field5 == field9 && field1 != '') {
        winner = true;
        domElemnent('1').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('9').classList.add('winner');
    } else if (field3 == field5 && field5 == field7 && field3 != '') {
        winner = true;
        domElemnent('3').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('7').classList.add('winner');
    } else if (field1 != '' && field2 != '' && field3 != '' && field4 != '' &&
                field5 != '' && field6 != '' && field7 != '' && field8 != '' && field9 != '' && winner == false){
                    noWinner();
                }
};

function noWinner(){
    let headline = document.getElementById('headline');
    headline.innerHTML = 'Unentschieden!';
    headline.style.fontSize = '20px';
    document.getElementById('table').style.pointerEvents = 'none';
    document.getElementById('button').style.display = 'block';
    crossPlayer = document.getElementById('crossPlayer');
    circlePlayer = document.getElementById('circlePlayer');
    circlePlayer.style.opacity = '0.1';
    crossPlayer.style.opacity = '0.1';
}
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
    currentPlayer = 'crossPlayer';
    winner = false;
    for (let i = 1; i < 9; i++) {
        id = i.toString();
        domElemnent(id).style.backgroundImage = '';
        domElemnent(id).classList.remove('winner');
        domElemnent(id).style.pointerEvents = 'auto';
    }
    renderCurrentPlayer();
    headline.innerHTML = 'Willkommen!';
    headline.style.fontSize = 'inherit';
    document.getElementById('table').style.pointerEvents = 'auto';
    document.getElementById('button').style.display = 'none';
}