let crossURL = 'url("img/cross.svg")';
let circleURL = 'url("img/circle.svg")';

let currentPlayer = 'crossPlayer';

let winner = false;

let crossPlayer;
let circlePlayer;

let posibleFields = [];

let field1 = '';
let field2 = '';
let field3 = '';
let field4 = '';
let field5 = '';
let field6 = '';
let field7 = '';
let field8 = '';
let field9 = '';

let fields = [
    field1,
    field2,
    field3,
    field4,
    field5,
    field6,
    field7,
    field8,
    field9
];


function getRandomInteger(max){
    return Math.floor(Math.random() * max)
}

function init(){
    crossPlayer = document.getElementById('crossPlayer');
    circlePlayer = document.getElementById('circlePlayer');
    renderCurrentPlayer();
}
function domElemnent(id){
    return document.getElementById(id);
}

function renderCurrentPlayer(){
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
        gameFinished('Gewonnen!')
    };
    
    if(winner == false){
        domElemnent('table').style.pointerEvents = 'none';
        renderCurrentPlayer(); 
        setTimeout(computerPlayer, 500);  
    }

};

function computerPlayer(){
    posibleFields = [];
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        if (field == ''){
            posibleFields.push(i)
        }
    }
    index = posibleFields[getRandomInteger(posibleFields.length)];

    let field = document.getElementById(index + 1);
    showPlayerIcon(field);
    field.style.pointerEvents = 'none';
    getBackgroundURL();
    checkForWinner();
    if (winner == true) {
        gameFinished('Gewonnen!')
    };
    if(winner == false){
        domElemnent('table').style.pointerEvents = 'inherit';
        renderCurrentPlayer();
    }
    
}

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
    
};

function checkForWinner(){
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[1] != '') {
        winner = true;
        domElemnent('1').classList.add('winner');
        domElemnent('2').classList.add('winner');
        domElemnent('3').classList.add('winner');
    } else if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3] != '') {
        winner = true;
        domElemnent('4').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('6').classList.add('winner');
    } else if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6] != '') {
        winner = true;
        domElemnent('7').classList.add('winner');
        domElemnent('8').classList.add('winner');
        domElemnent('9').classList.add('winner');
    } else if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0] != '') {
        winner = true;
        domElemnent('1').classList.add('winner');
        domElemnent('4').classList.add('winner');
        domElemnent('7').classList.add('winner');
    } else if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1] != '') {
        winner = true;
        domElemnent('2').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('8').classList.add('winner');
    } else if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2] != '') {
        winner = true;
        domElemnent('3').classList.add('winner');
        domElemnent('6').classList.add('winner');
        domElemnent('9').classList.add('winner');
    } else if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0] != '') {
        winner = true;
        domElemnent('1').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('9').classList.add('winner');
    } else if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2] != '') {
        winner = true;
        domElemnent('3').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('7').classList.add('winner');
    } else if (fields[0] != '' && fields[1] != '' && fields[2] != '' && fields[3] != '' &&
                fields[4] != '' && fields[5] != '' && fields[6] != '' && fields[7] != '' && fields[8] != '' && winner == false){
                    gameFinished('Unentschieden!');
                }
};

function gameFinished(result){
    let headline = document.getElementById('headline');
    headline.innerHTML = result;
    document.getElementById('table').style.pointerEvents = 'none';
    circlePlayer.style.opacity = '0.1';
    crossPlayer.style.opacity = '0.1';
    document.getElementById('button').style.pointerEvents = 'auto';
    document.getElementById('button').style.opacity = '1';

}

function getBackgroundURL(){
    for (let i = 0; i < fields.length; i++) {
        j = i + 1;
        id = j.toString();
        fields[i] = document.getElementById(id).style.backgroundImage;
    }
};

function refresh() {
    currentPlayer = 'crossPlayer';
    winner = false;
    for (let i = 1; i < 10; i++) {
        id = i.toString();
        domElemnent(id).style.backgroundImage = '';
        domElemnent(id).classList.remove('winner');
        domElemnent(id).style.pointerEvents = 'inherit';
    }
    renderCurrentPlayer();
    headline.innerHTML = 'Willkommen!';
    document.getElementById('table').style.pointerEvents = 'inherit';
    document.getElementById('button').style.opacity = '0';
    document.getElementById('button').style.pointerEvents = 'none';
}