const projectsContainer = document.getElementById('projects-container');
const ticTacToe = document.getElementById('tic-tac-toe');
const hangman = document.getElementById('hangman');

projectsContainer.addEventListener('click', function (evt) {
    let project = evt.target.id;
    console.log(project);
    if (project === 'tic-tac-toe') {
        window.location.assign('../../Mini game 1/index.html');
    } else if (project === 'hangman') {
        window.location.assign('../../Mini game 2/index.html');
    }
});