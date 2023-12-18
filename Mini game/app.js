/*
stretch idea 1: make choice for 3x3, 4x4, and 5x5 boards
srretch idea 2: enable undo move
stretch idea 3: make computer 'smarter' by analyzing what move will be advantageous

load modal #1 w/ welcome message w/ close button
    close modal when user presses close
load modal #2 asking user's name
    use input & submit, store into var
load modal #3 asking user to choose O or X
    use saved images with border, clickable w/ cursor & bg change on hover
    alert box w/ 'you have chosen...'
    close modal upon choice
page loads modal #4 asking user to go first or to let comp go first
    use two simple buttons, w/ cursor & bg change on hover
    alert box w/ 'you have chosen...'
    close modal upon choice
empty table loads; msg board on top; buttons on bottom
    buttons: 
        light/dark mode (toggle)
        restart round (do NOT reload, but just reset moves)
        quit game and exit (alert box 'are you sure?' y: close page, n: close alert)
    display round # on top w/ '<name> vs. computer'
    decl vars to keep count of wins & rounds
    if user goes 1st, msg says 'please select a square' 
        once user clicks a square
            fill w/ O/X
            make square unclickable (cursor: not-allowed), remove cursor & bg change
            msg says '<name> has chosen square <num>'
    if comp goes 1st, randomly fill 1 of remaining square
        once comp picks square
            fill w/ O/X
            make square unclickable, remove cursor & bg change
            msg says 'the computer has chosen square <num>'
    have conds to check for rows/cols/diags
    have var to account for tie when all sqs filled
    repeat ^ until game finished
once winner determined,
    w/ anim, draw oval around winning line, then flash complete oval few times
    wait few seconds
    alert box w/ 'you win/lose' msg
    update msg box to disp same thing
    if user won, w/ anim, rain 'confetti' 
load modal #5 asking user to play again
    if yes, update win/loss count & reload page
    if no, close page
*/

//function for selecting HTML elements
function cssSelect(selector) {
    return document.querySelector(selector);
}

//HTML elements to be put into cssSelect function
const board = cssSelect('#board');
const compFirst = cssSelect('#comp-first')
const exit = cssSelect('#exit');
const firstPlayModal = cssSelect('#first-play-modal');
const homePage = cssSelect('#home-page');
const msgBoard = cssSelect('#msg-board');
const modeToggle = cssSelect('#mode-toggle');
const moveChoice= cssSelect('.move-choice');
const nameModal= cssSelect('#name-modal');
const oBtn = cssSelect('#o-btn');
const oxModal= cssSelect('#ox-modal');
const playAgain = cssSelect('#play-again');
const playAgainModal = cssSelect('#play-again-modal');
const playBtn = cssSelect('#play-btn');
const restart = cssSelect('#restart');
const quitGame = cssSelect('#quit-game');
const theGame = cssSelect('#the-game');
const theMove = cssSelect('.the-move');
const submitBtn = cssSelect('#submit-btn')
const userFirst = cssSelect('#user-first')
const userName = cssSelect('#user-name');
const welcomeModal= cssSelect('#welcome-modal');
const xBtn = cssSelect('#x-btn');
const sq1 = cssSelect('#sq1');
const sq2 = cssSelect('#sq2');
const sq3 = cssSelect('#sq3');
const sq4 = cssSelect('#sq4');
const sq5 = cssSelect('#sq5');
const sq6 = cssSelect('#sq6');
const sq7 = cssSelect('#sq7');
const sq8 = cssSelect('#sq8');
const sq9 = cssSelect('#sq9');

playBtn.addEventListener('click', function () {
    welcomeModal.style.display = 'none';
    nameModal.style.display = 'block';
});
submitBtn.addEventListener('click', function () {
    userInput = document.getElementById('user-input').value;
    document.getElementById('user-name').innerText = userInput;
    nameModal.style.display = 'none';
    oxModal.style.display = 'block';
});
oBtn.addEventListener('click', function () {
    let userChoice = 'o';
    oxModal.style.display = 'none';
    firstPlayModal.style.display = 'block';
    toFirstPlayModal(userChoice);
});
xBtn.addEventListener('click', function () {
    let userChoice = 'x';
    oxModal.style.display = 'none';
    firstPlayModal.style.display = 'block';
    toFirstPlayModal(userChoice);
});
function toFirstPlayModal(userChoice) {
    userFirst.addEventListener('click', function () {
        mainGamePlay(userChoice, true);
        firstPlayModal.style.display = 'none';
        theGame.style.display = 'block';  
    });
    compFirst.addEventListener('click', function () {
        mainGamePlay(userChoice, false);
        firstPlayModal.style.display = 'none';
        theGame.style.display = 'block';  
    });
}

let round = 0;
//use an array here to allow it to be spliced across functions
let possibleMoves = ['sq1', 'sq2', 'sq3', 'sq4', 'sq5', 'sq6', 'sq7', 'sq8', 'sq9'];

function mainGamePlay(userShape, userTurn) {
    if (userShape === 'o') {
        document.getElementById('o-btn').id = 'user-choice';
        document.getElementById('x-btn').id = 'comp-choice';        
    } else if (userShape === 'x') {
        document.getElementById('x-btn').id = 'user-choice';
        document.getElementById('o-btn').id = 'comp-choice';        
    }
    userImg = document.getElementById('user-choice');
    compImg = document.getElementById('comp-choice');
    userImg.classList.remove('move-choice');
    compImg.classList.remove('move-choice');
    if (userTurn === true) {
        userMove();
    } else {
        compMove();
    }
    function userMove() {
        msgBoard.innerText = 'Please select a square.'
        sq1.addEventListener('click', fillSquare);
        sq2.addEventListener('click', fillSquare);
        sq3.addEventListener('click', fillSquare);
        sq4.addEventListener('click', fillSquare);
        sq5.addEventListener('click', fillSquare);
        sq6.addEventListener('click', fillSquare);
        sq7.addEventListener('click', fillSquare);
        sq8.addEventListener('click', fillSquare);
        sq9.addEventListener('click', fillSquare);
    }
    function fillSquare(event) {
        let square = event.target;
        let squareToRemove = possibleMoves.indexOf(event.target.id);
        if (squareToRemove > -1) {
            possibleMoves.splice(squareToRemove, 1);
            //need to create new element in order for images to stay on squares
            let tempImg = document.createElement('img');
            if (userShape === 'o') {
                tempImg.src = 'TTTo.png';
            } else if (userShape === 'x') {
                tempImg.src = 'TTTx.png';
            }
            square.innerText = '';
            square.style.cursor = 'not-allowed';
            square.appendChild(tempImg);
            msgBoard.innerText = `${userInput} has selected ${event.target.id}.`
            compMove();
        } else {
            msgBoard.innerText = 'This square is already taken. Please select another square.'
            userMove();
        }
    }
    function compMove() {
        //generate random integer from 0 to length of move list (grabs index)
        let compIndex = Math.floor((Math.random() * possibleMoves.length));
        let squareToRemove = possibleMoves[compIndex];
        let square = document.getElementById(squareToRemove);
        possibleMoves.splice(compIndex, 1);
        let tempImg = document.createElement('img');
        if (userShape === 'o') {
            tempImg.src = 'TTTx.png';
        } else if (userShape === 'x') {
            tempImg.src = 'TTTo.png';
        }
        square.innerText = '';
        square.style.cursor = 'not-allowed';
        square.appendChild(tempImg);
        msgBoard.innerText = `The computer has selected ${squareToRemove}.`
        userMove();
    } 
}