/*
once winner determined,
    w/ anim, draw oval around winning line, then flash complete oval few times
    update msg box to disp same thing
    if user won, w/ anim, rain 'confetti' 
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

const theMove = cssSelect('.the-move')
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
let possibleMoves = [null, null, null, null, null, null, null, null, null];

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

restart.addEventListener('click', () => {
    location.reload();
});

homePage.addEventListener('click', () => {
    window.location.href = '../index.html';
});

//modals before game starts
welcomeModal.style.display = 'block';
playBtn.addEventListener('click', () => {
    welcomeModal.style.display = 'none';
    nameModal.style.display = 'block';
});
submitBtn.addEventListener('click', () => {
    userInput = document.getElementById('user-input').value;
    document.getElementById('user-name').innerText = userInput;
    nameModal.style.display = 'none';
    oxModal.style.display = 'block';
}); 
let userChoice = '';
oxModal.addEventListener('click', (evt) => {
    if (evt.target.tagName !== 'IMG') return; //prevents user from clicking anywhere outside of buttons
    userChoice = evt.target.id[0]; //grabs 'o' or 'x'
    for (i = 0; i < 9; i++) {
        (document.getElementsByTagName('td'))[i].innerText = i + 1;
    }
    oxModal.style.display = 'none';
    firstPlayModal.style.display = 'block';
    firstPlayModal.addEventListener('click', (evt) => {
        alert('user chose ' + userChoice);
        evt.stopImmediatePropagation();
        if (evt.target.tagName !== 'BUTTON') return;
        let userGoesFirst = evt.target.id; //grabs 'user-first' or 'comp-first'
        firstPlayModal.style.display = 'none';
        theGame.style.display = 'block';
        mainGamePlay(userChoice, userGoesFirst);
    });
});

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
    let turnPass = whoseTurn === 'user-first' ? 1 : -1; //user's turn is 1, comp's turn is -1
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
                gameboard.removeEventListener('click', fillSquare);
                checkForWin(turnPass);
            }, 1000);

            //if the cell is already taken, try again
        } else {
            gameboard.removeEventListener('click', fillSquare);
            makeMove(turnPass);
        }
    }

    function checkForWin(turnPass) {
        let theWinner = turnPass == 1 ? 'computer' : 'user';
        gameboard.removeEventListener('click', fillSquare);
        //check for winning combos
        if ((sq1.innerText === sq2.innerText && sq2.innerText === sq3.innerText) || (sq4.innerText === sq5.innerText && sq5.innerText === sq6.innerText) || (sq7.innerText === sq8.innerText & sq8.innerText === sq9.innerText) || (sq1.innerText === sq4.innerText & sq4.innerText === sq7.innerText) || (sq2.innerText === sq5.innerText & sq5.innerText === sq8.innerText) || (sq3.innerText === sq6.innerText & sq6.innerText === sq9.innerText) || (sq1.innerText === sq5.innerText & sq5.innerText === sq9.innerText) || (sq3.innerText === sq5.innerText & sq5.innerText === sq7.innerText)) {
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
    setTimeout(function() {
        nextRound();
    }, 1000);
}

function nextRound() {
    //display play again modal
    theGame.style.display = 'none';
    playAgainModal.style.display = 'block';
    round = Number(round) + 1;

    //if user chooses to play again, reset gameboard except stats
    playAgainBtn.addEventListener('click', () => {
        possibleMoves = [null, null, null, null, null, null, null, null, null];
        for (let i = 0; i < 9; i++) {
            let resetSquare = cssSelect(`#sq${i}`);
            resetSquare.style.fontSize = '14px';
            resetSquare.style.cursor = 'pointer';
            resetSquare.innerText = i + 1;
            if (resetSquare.children.length > 0) resetSquare.children[0].remove();
        }
        playAgainModal.style.display = 'none';
        oxModal.style.display = 'block';
    });
    quitGameBtn.addEventListener('click', (evt) => {
        evt.stopImmediatePropagation();
        if (confirm('Are you sure you would like to quit the game?')) {
            alert('You will now be redirected to the home page.');
            window.location.href = '../index.html';
        }
    });
}