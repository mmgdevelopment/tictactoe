let crossURL = 'img/cross.svg';
let circleURL = 'img/circle.svg';

let currentPlayer = 'crossPlayer'


function fieldclicked(id) {
    let field = document.getElementById(id);
    if (currentPlayer == 'crossPlayer') {
        field.style.backgroundImage = `url(${crossURL})`;
        currentPlayer = 'circlePlayer';
    } else {
        field.style.backgroundImage = `url(${circleURL})`;
        currentPlayer = 'crossPlayer';
    };
};