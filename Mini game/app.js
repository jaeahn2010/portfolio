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
const compFirst = cssSelect('#comp-first')
const exit = cssSelect('#exit');
const firstPlayModal = cssSelect('#first-play-modal');
const gameboard = cssSelect('#gameboard');
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
const sq1 = cssSelect('#sq0');
const sq2 = cssSelect('#sq1');
const sq3 = cssSelect('#sq2');
const sq4 = cssSelect('#sq3');
const sq5 = cssSelect('#sq4');
const sq6 = cssSelect('#sq5');
const sq7 = cssSelect('#sq6');
const sq8 = cssSelect('#sq7');
const sq9 = cssSelect('#sq8');

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

oxModal.addEventListener('click', function (evt) {
    if (evt.target.tagName !== 'IMG') return; //prevents user from clicking anywhere outside of buttons
    let userChoice = evt.target.id[0]; //grabs 'o' or 'x'
    oxModal.style.display = 'none';
    firstPlayModal.style.display = 'block';
    toFirstPlayModal(userChoice);
});

function toFirstPlayModal(userChoice) {
    firstPlayModal.addEventListener('click', function(evt) {
        if (evt.target.tagName !== 'BUTTON') return;
        let userGoesFirst = evt.target.id; //grabs 'user-first' or 'comp-first'
        firstPlayModal.style.display = 'none';
        theGame.style.display = 'block';
        mainGamePlay(userChoice, userGoesFirst);
    });
}

let round = 0;
let winCount = 0;
let tieCount = 0;
let lossCount = 0;
//use an array here to allow it to be spliced across functions
let possibleMoves = [null, null, null, null, null, null, null, null, null];

function mainGamePlay(userShape, whoseTurn) {
    
    //set images
    if (userShape === 'o') {
        userImg = document.getElementById('o-btn');
        compImg = document.getElementById('x-btn');
    } else {
        userImg = document.getElementById('x-btn');
        compImg = document.getElementById('o-btn');
    }

    //set turns
    let turnPass = 0; //user's turn is 1, comp's turn is -1
    if (whoseTurn === 'user-first') {
        turnPass = 1;
    } else {
        turnPass = -1;
    }
    makeMove(turnPass);

    //player actually makes a move here
    function makeMove(turnPass) {
        if (turnPass == 1) {
            msgBoard.innerText = 'Please select a square.'
            gameboard.addEventListener('click', fillSquare);
        } else {
            fillSquare(null);
        }
    }
    function fillSquare(event) {
        let square = '';
        let moveIndex = 0;
        //if user's turn, grab clicked cell; if comp's turn, grab random cell
        if (turnPass == 1) {
            if (event.target.tagName !== 'TD') return;
            square = event.target; //grabs clicked <td> element
            moveIndex = Number(square.id[2]); //grabs id, which will be used for array index
        } else if (turnPass == -1) {
            moveIndex = Math.floor(Math.random() * possibleMoves.length);
            square = document.getElementById(`sq${moveIndex}`); //grabs <td> element matching the random int
        }
        //check if the cell is already taken or not
        //if not taken yet, mark it as 'taken'
        if (possibleMoves[moveIndex] !== 'taken') {
            possibleMoves[moveIndex] = 'taken';
            //need to create new element in order for images to stay on squares
            let currentPlayerImg = document.createElement('img');
            if ((turnPass == 1 && userShape === 'o') || (turnPass == -1 && userShape === 'x')) {
                currentPlayerImg.src = 'TTTo.png';
                square.innerText = 'o';    
            } else if ((turnPass == -1 && userShape === 'o') || (turnPass == 1 && userShape === 'x')) {
                currentPlayerImg.src = 'TTTx.png';
                square.innerText = 'x';
            }
            square.style.cursor = 'not-allowed';
            square.removeEventListener('click', fillSquare);
            square.appendChild(currentPlayerImg);
            if (turnPass == 1) {
                msgBoard.innerText = `${userInput} has selected square ${Number(moveIndex) + 1}.`
            } else if (turnPass == -1) {
                msgBoard.innerText = `The computer has selected square ${Number(moveIndex) + 1}.`
            }
            turnPass *= -1;
            setTimeout(checkForWin(turnPass), 3000);
        } else {
            //display this message only for user
            if (turnPass == 1) {
                msgBoard.innerText = 'This square is already taken. Please select another square.'
            }
            setTimeout(makeMove(turnPass), 5000);
        }
    }

    function checkForWin(turnPass) {
        let theWinner = '';
        if (turnPass == 1) {
            theWinner = 'computer';
        } else {
            theWinner = 'user';
        }
        if ((sq1.innerText === sq2.innerText && sq2.innerText === sq3.innerText) || (sq4.innerText === sq5.innerText && sq5.innerText === sq6.innerText) || (sq7.innerText === sq8.innerText & sq8.innerText === sq9.innerText) || (sq1.innerText === sq4.innerText & sq4.innerText === sq7.innerText) || (sq2.innerText === sq5.innerText & sq5.innerText === sq8.innerText) || (sq3.innerText === sq6.innerText & sq6.innerText === sq9.innerText) || (sq1.innerText === sq5.innerText & sq5.innerText === sq9.innerText) || (sq3.innerText === sq5.innerText & sq5.innerText === sq7.innerText)) {
            declareWinner(theWinner);
        } else {
            if (possibleMoves.includes(null)) {
                makeMove(turnPass);
            } else if (!possibleMoves.includes(null)) {
                declareWinner('tie');
            }
        }
    }

    function declareWinner(winner) {
        winCount = Number(document.getElementById('win-count').innerText);
        tieCount = Number(document.getElementById('tie-count').innerText);
        lossCount = Number(document.getElementById('loss-count').innerText);
        if (winner === 'user') {
            msgBoard.innerText = 'Congratulations! You win!';
            gameboard.removeEventListener('click', fillSquare);
            winCount++;
        } else if (winner === 'tie') {
            msgBoard.innerText = 'It\'s a tie.';
            gameboard.removeEventListener('click', fillSquare);
            tieCount++;
        } else if (winner === 'computer') {
            msgBoard.innerText = 'Too bad! You lose.';
            gameboard.removeEventListener('click', fillSquare);
            lossCount++;
        }
    }
}