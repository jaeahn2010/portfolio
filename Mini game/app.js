/*
srretch idea 1: enable undo move
stretch idea 2: make computer 'smarter' by analyzing what move will be advantageous

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
const modeToggle = cssSelect('#mode-toggle');
const restart = cssSelect('#restart');
const homePage = cssSelect('#home-page');

const playBtn = cssSelect('#play-btn');
const welcomeModal= cssSelect('#welcome-modal');
const submitBtn = cssSelect('#submit-btn');
const nameModal= cssSelect('#name-modal');
const oxModal= cssSelect('#ox-modal');
const firstPlayModal = cssSelect('#first-play-modal');

const theGame = cssSelect('#the-game');
const oBtn = cssSelect('#o-btn');
const xBtn = cssSelect('#x-btn');
const msgBoard = cssSelect('#msg-board');
const gameboard = cssSelect('#gameboard');

const sq1 = cssSelect('#sq0');
const sq2 = cssSelect('#sq1');
const sq3 = cssSelect('#sq2');
const sq4 = cssSelect('#sq3');
const sq5 = cssSelect('#sq4');
const sq6 = cssSelect('#sq5');
const sq7 = cssSelect('#sq6');
const sq8 = cssSelect('#sq7');
const sq9 = cssSelect('#sq8');

const winCount = cssSelect('#win-count');
const tieCount = cssSelect('#tie-count');
const lossCount = cssSelect('#loss-count');

const compFirst = cssSelect('#comp-first')
const moveChoice= cssSelect('.move-choice');

const theMove = cssSelect('.the-move');
const roundNumber = cssSelect('#round-number');

const userFirst = cssSelect('#user-first');
const userName = cssSelect('#user-name');

const playAgainModal = cssSelect('#play-again-modal');
const playAgainBtn = cssSelect('#play-again-btn');
const quitGameBtn = cssSelect('#quit-game-btn');

//stats
let round = 1;
let wins = 0;
let ties = 0;
let losses = 0;

//buttons on the bottom of screen
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    let mode = document.getElementById('mode-toggle').innerText;
    if (mode === 'LIGHT MODE') {
        mode = 'DARK MODE';
    } else {
        mode = 'LIGHT MODE';
    }
    document.getElementById('mode-toggle').innerText = mode;
})

restart.addEventListener('click', function () {
    location.reload();
});

homePage.addEventListener('click', function () {
    window.location.href = '../index.html';
});

//modals before game starts
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
    for (i = 0; i < 9; i++) {
        (document.getElementsByTagName('td'))[i].innerText = i + 1;
    }
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

//array can be modified across functions
let possibleMoves = [null, null, null, null, null, null, null, null, null];

function mainGamePlay(userShape, whoseTurn) {
    //display round number
    roundNumber.innerText = round;
    
    //set images
    if (userShape === 'o') {
        userImg = oBtn;
        compImg = xBtn;
    } else {
        userImg = xBtn;
        compImg = oBtn;
    }

    //set turns
    let turnPass = 0; //init
    turnPass = whoseTurn === 'user-first' ? 1 : -1; //user's turn is 1, comp's turn is -1
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
        let square = ''; //init
        let moveIndex = 0;

        //if user's turn, grab clicked cell; if comp's turn, grab random cell
        if (turnPass == 1) {
            if (event.target.tagName !== 'TD') return;
            square = event.target; //grabs clicked <td> element
            moveIndex = Number(square.id[2]); //grabs id number, which will be used for array index
        } else if (turnPass == -1) {
            moveIndex = Math.floor(Math.random() * 9);
            square = document.getElementById(`sq${moveIndex}`); //grabs <td> element matching the random int
        }

        //check if the cell is already taken or not; if not taken yet, mark it as 'taken'
        if (possibleMoves[moveIndex] !== 'taken') {
            possibleMoves[moveIndex] = 'taken';
            let currentPlayerImg = document.createElement('img'); //need to create new element in order for images to stay on squares

            //assign appropriate img based on chosen user shape & turn
            if ((turnPass == 1 && userShape === 'o') || (turnPass == -1 && userShape === 'x')) {
                currentPlayerImg.src = 'TTTo.png';
                square.innerText = 'o';
            } else if ((turnPass == -1 && userShape === 'o') || (turnPass == 1 && userShape === 'x')) {
                currentPlayerImg.src = 'TTTx.png';
                square.innerText = 'x';
            }

            //make taken square unclickable & add img as child of selected td
            square.style.fontSize = '0px';
            square.style.cursor = 'not-allowed';
            square.removeEventListener('click', fillSquare);
            square.appendChild(currentPlayerImg);

            //update msg board
            if (turnPass == 1) {
                msgBoard.innerText = `${userInput} has selected square ${Number(moveIndex) + 1}.`
            } else if (turnPass == -1) {
                msgBoard.innerText = `The computer has selected square ${Number(moveIndex) + 1}.`
            }

            //switch player & check if anyone won
            turnPass *= -1;
            //checkForWin(turnPass);
            setTimeout(function() {
                checkForWin(turnPass);
            }, 1500);

            //if the cell is already taken, try again
        } else {
            makeMove(turnPass);
        }
    }

    function checkForWin(turnPass) {
        let theWinner = ''; //init

        //turnPass = whoseTurn === 'user-first' ? 1 : -1;
        theWinner = turnPass == 1 ? 'computer' : 'user';

        //check for winning combos
        if ((sq1.innerText === sq2.innerText && sq2.innerText === sq3.innerText) || (sq4.innerText === sq5.innerText && sq5.innerText === sq6.innerText) || (sq7.innerText === sq8.innerText & sq8.innerText === sq9.innerText) || (sq1.innerText === sq4.innerText & sq4.innerText === sq7.innerText) || (sq2.innerText === sq5.innerText & sq5.innerText === sq8.innerText) || (sq3.innerText === sq6.innerText & sq6.innerText === sq9.innerText) || (sq1.innerText === sq5.innerText & sq5.innerText === sq9.innerText) || (sq3.innerText === sq5.innerText & sq5.innerText === sq7.innerText)) {
            gameboard.removeEventListener('click', fillSquare);
            declareWinner(theWinner);
        } else {
            //if no winning combos and there are empty spaces left, keep playing
            if (possibleMoves.includes(null)) {
                makeMove(turnPass);
            //if no winning combos and there are no spaces left, declare tie
            } else if (!possibleMoves.includes(null)) {
                declareWinner('tie');
            }
        }
    }

    function declareWinner(winner) {  
        if (winner === 'user') {
            msgBoard.innerText = 'Congratulations! You win!';
            wins++;
            winCount.innerText = wins;
        } else if (winner === 'tie') {
            msgBoard.innerText = 'It\'s a tie.';
            ties++;
            tieCount.innerText = ties;
        } else if (winner === 'computer') {
            msgBoard.innerText = 'Too bad! You lose.';
            losses++;
            lossCount.innerText = losses;
        }
        setTimeout(nextRound, 3000);
    }
    
    function nextRound () {
        //display play again modal
        theGame.style.display = 'none';
        playAgainModal.style.display = 'block';
        round = Number(round) + 1;

        //if user chooses to play again, reset gameboard except stats
        playAgainBtn.addEventListener('click', function () {
            possibleMoves = [null, null, null, null, null, null, null, null, null];
            for (i = 0; i < 9; i++) {
                let resetSquare = cssSelect(`#sq${i}`);
                resetSquare.style.cursor = 'pointer';
                resetSquare.style.fontSize = '14px';
                resetSquare.innerText = i + 1;
                if (resetSquare.children.length > 0) resetSquare.children[0].remove();
            }
            playAgainModal.style.display = 'none';
            theGame.style.display = 'block';
            console.log(userShape, whoseTurn); //returns 1, 3, 6, 10, 15 iterations...
            mainGamePlay(userShape, whoseTurn);
        })
        quitGameBtn.addEventListener('click', function () {
            if (confirm('Are you sure you would like to quit the game?')) {
                alert('You will now be redirected to the home page.');
                window.location.href = '../index.html';
            }
        })
    }
}