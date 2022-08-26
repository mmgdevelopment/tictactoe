let crossURL = 'url("img/cross.svg")';
let circleURL = 'url("img/circle.svg")';
let currentPlayer = 'crossPlayer';
let gameOver = false;
let crossPlayer;
let circlePlayer;
let fields = new Array(9);

function init(){
    crossPlayer = domElemnent('crossPlayer');
    circlePlayer = domElemnent('circlePlayer');
    renderCurrentPlayer();
}

function domElemnent(id){
    return document.getElementById(id);
}

function getRandomInteger(max){
    return Math.floor(Math.random() * max)
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

function fieldClicked(id) {
    let field = domElemnent(id);
    play(field);
    if(gameOver == false){
        domElemnent('table').style.pointerEvents = 'none';
        renderCurrentPlayer(); 
        setTimeout(computerPlayer, 500);  
    };
};

function computerPlayer(){
    let posibleFields = [];
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        if (field == ''){
            posibleFields.push(i)
        }
    }
    index = posibleFields[getRandomInteger(posibleFields.length)];
    let field = domElemnent(index + 1);
    play(field);
    if(gameOver == false){
        domElemnent('table').style.pointerEvents = 'inherit';
        renderCurrentPlayer();
    };
};

function play(field){
    renderPlayerIcon(field);
    field.style.pointerEvents = 'none';
    getBackgroundURL();
    checkForWinner();
}

function renderPlayerIcon(field){
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

function getBackgroundURL(){
    for (let i = 0; i < fields.length; i++) {
        j = i + 1;
        id = j.toString();
        fields[i] = domElemnent(id).style.backgroundImage;
    }
};

function checkForWinner(){
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[1] != '') {
        gameOver = true;
        gameFinished('Gewonnen!')
        domElemnent('1').classList.add('winner');
        domElemnent('2').classList.add('winner');
        domElemnent('3').classList.add('winner');
    } else if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3] != '') {
        gameOver = true;
        gameFinished('Gewonnen!')
        domElemnent('4').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('6').classList.add('winner');
    } else if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6] != '') {
        gameOver = true;
        gameFinished('Gewonnen!')
        domElemnent('7').classList.add('winner');
        domElemnent('8').classList.add('winner');
        domElemnent('9').classList.add('winner');
    } else if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0] != '') {
        gameOver = true;
        gameFinished('Gewonnen!')
        domElemnent('1').classList.add('winner');
        domElemnent('4').classList.add('winner');
        domElemnent('7').classList.add('winner');
    } else if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1] != '') {
        gameOver = true;
        gameFinished('Gewonnen!')
        domElemnent('2').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('8').classList.add('winner');
    } else if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2] != '') {
        gameOver = true;
        gameFinished('Gewonnen!')
        domElemnent('3').classList.add('winner');
        domElemnent('6').classList.add('winner');
        domElemnent('9').classList.add('winner');
    } else if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0] != '') {
        gameOver = true;
        gameFinished('Gewonnen!')
        domElemnent('1').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('9').classList.add('winner');
    } else if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2] != '') {
        gameOver = true;
        gameFinished('Gewonnen!')
        domElemnent('3').classList.add('winner');
        domElemnent('5').classList.add('winner');
        domElemnent('7').classList.add('winner');
    } else if (fields[0] != '' && fields[1] != '' && fields[2] != '' && fields[3] != '' &&
                fields[4] != '' && fields[5] != '' && fields[6] != '' && fields[7] != '' && fields[8] != '' && gameOver == false){
                    gameFinished('Unentschieden!');
                    gameOver = true;
                };
};

function gameFinished(result){
    let headline = domElemnent('headline');
    headline.innerHTML = result;
    domElemnent('table').style.pointerEvents = 'none';
    circlePlayer.style.opacity = '0.1';
    crossPlayer.style.opacity = '0.1';
    domElemnent('button').style.pointerEvents = 'auto';
    domElemnent('button').style.opacity = '1';

};

function refresh() {
    currentPlayer = 'crossPlayer';
    gameOver = false;
    for (let i = 1; i < 10; i++) {
        id = i.toString();
        domElemnent(id).style.backgroundImage = '';
        domElemnent(id).classList.remove('winner');
        domElemnent(id).style.pointerEvents = 'inherit';
    };
    renderCurrentPlayer();
    headline.innerHTML = 'Willkommen!';
    domElemnent('table').style.pointerEvents = 'inherit';
    domElemnent('button').style.opacity = '0';
    domElemnent('button').style.pointerEvents = 'none';
};