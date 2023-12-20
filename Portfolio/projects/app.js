const projects = document.getElementsByClassName('projects');
const ticTacToe = document.getElementById('tic-tac-toe');
const hangman = document.getElementById('hangman');

ticTacToe.addEventListener('click', function (evt) {
    let project = evt.target.id;
    if (project === 'tic-tac-toe') {
        window.location.assign('../../Mini game/index.html');
    } else if (project === 'hangman') {
        console.log('under construction');
    }
});