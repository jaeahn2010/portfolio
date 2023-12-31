//the deck
let deck = ['c01.png', 'c02.png', 'c03.png','c04.png','c05.png','c06.png','c07.png','c08.png','c09.png','c10.png','c11.png','c12.png','c13.png', 'd01.png', 'd02.png', 'd03.png','d04.png','d05.png','d06.png','d07.png','d08.png','d09.png','d10.png','d11.png','d12.png','d13.png', 'h01.png', 'h02.png', 'h03.png','h04.png','h05.png','h06.png','h07.png','h08.png','h09.png','h10.png','h11.png','h12.png','h13.png', 's01.png', 's02.png', 's03.png','s04.png','s05.png','s06.png','s07.png','s08.png','s09.png','s10.png','s11.png','s12.png','s13.png'];
let randomizedDeck = [];

//shuffle the deck
for (let i = 0; i < 52; i++) {
    let idx = Math.floor(Math.random() * deck.length);
    randomizedDeck.push(deck[idx]);
    deck.splice(idx, 1);
}

//elements to be grabbed later
const modeToggle = document.getElementById('mode-toggle');
const restart = document.getElementById('restart');
const homePage = document.getElementById('home-page');
const welcomeModal = document.getElementById('welcome-modal');
const letsPlay = document.getElementById('lets-play');
const theGame = document.getElementById('the-game');
const cell = document.getElementsByTagName('td');
const row = document.getElementsByTagName('tr');
const board = document.getElementById('gameboard');
const msgBoard = document.getElementById('msg-board');
const moves = document.getElementById('moves');
const matches = document.getElementById('matches');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

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

letsPlay.addEventListener('click', () => {
    welcomeModal.style.display = 'none';
    theGame.style.display = 'block';
});

//place cards facedown on the board
for (let i = 0; i < cell.length; i++) {
    if (i !== 0 && i !== 7 && i !== 48 && i !== 55) {
        let backSide = document.createElement('img');
        backSide.classList.add('back-side');
        backSide.src = "Deck/back.jpg";
        cell[i].appendChild(backSide);
    }
}

//assign front side to each card
let j = 0;
for (let i = 0; i < cell.length; i++) {
    if (i !== 0 && i !== 7 && i !== 48 && i !== 55) {
        let frontSide = document.createElement('img');
        frontSide.classList.add('front-side');
        frontSide.id = j;
        frontSide.src = `Deck/${randomizedDeck[j]}`;
        cell[i].appendChild(frontSide);
        j++;
    }
}

msgBoard.innerText = 'Please make a move.';

//set timer
let secondCount = 0;
let minuteCount = 0;
setInterval(() => {
    secondCount++;
    if (secondCount < 10) {
        seconds.innerText = '0' + secondCount;
    } else if (secondCount < 60) {
        seconds.innerText = secondCount;
    } else if (secondCount = 60) {
        minuteCount++;
        seconds.innerText = '00';
        secondCount = 0;
    }
    if (minuteCount < 10) {
        minutes.innerText = '0' + minuteCount;
    } else {
        minutes.innerText = minuteCount;
    }
}, 1000);

//gameplay
let moveCount = 0;
let flipCount = 0;
let matchCount = 0;
let pair = [];
let test = board.addEventListener('click', (evt) => {
    if (matchCount === 26) {
        alert(`You win! 
You found all 26 matches in ${minuteCount} minutes and ${secondCount} seconds.
You made a total of ${moveCount} moves.`);
        if (confirm("Play again?") == true) {
            location.reload();
        } else {
            window.location.href = '../index.html';
        }
    }
    if (evt.target.tagName !== "IMG") return;
    evt.target.style.display = 'none';
    evt.target.parentElement.children[1].style.display = 'block';
    flipCount++;
    pair.push(evt.target);
    if (flipCount === 2) {
        flipCount = 0;
        checkPair(pair[0], pair[1]);
    }
});

function checkPair(card1, card2) {
    let card1Suit = card1.nextSibling.src.slice(-7,-6);
    let card2Suit = card2.nextSibling.src.slice(-7,-6);
    let card1Number = card1.nextSibling.src.slice(-6,-4);
    let card2Number = card2.nextSibling.src.slice(-6,-4);
    let card1Color = '';
    let card2Color = '';

    if (card1Suit === 'c' || card1Suit === 's') {
        card1Color = 'black';
    } else if (card1Suit === 'd' || card1Suit === 'h') {
        card1Color = 'red';
    }
    if (card2Suit === 'c' || card2Suit === 's') {
        card2Color = 'black';
    } else if (card2Suit === 'd' || card2Suit === 'h') {
        card2Color = 'red';
    }

    let msg = '';
    let isMatch = true; 
    if (card1Color === card2Color && card1Number === card2Number) {
        msg = "It's a match!";
        matchCount++;
    } else {
        msg = "It's not a match.";
        isMatch = false;
    }
    matches.innerText = matchCount;
    msgBoard.innerText = msg;

    setTimeout(() => {
        card1.parentElement.children[1].style.display = 'none';
        card2.parentElement.children[1].style.display = 'none';
        if (isMatch) {
            card1.style.display = 'none';
            card2.style.display = 'none';
        } else {
            card1.style.display = 'block';
            card2.style.display = 'block';
        }
        pair = [];
        moveCount++;
        moves.innerText = moveCount;
    }, 2000);
}