/*
stretch idea 1: make choice for 3x3, 4x4, and 5x5
srretch idea 2: enable undo move

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

//function for opening/closing appropriate modals
function closeModal(closeBtn) {
    closeBtn.addEventListener('click', function () {
        switch(closeBtn) {
            case playBtn:
                welcomeModal.style.display = 'none';
                nameModal.style.display = 'block';
                break;
            case submitBtn:
                nameModal.style.display = 'none';
                oxModal.style.display = 'block';
                break;
            case oBtn:
            case xBtn:
                oxModal.style.display = 'none';
                firstPlayModal.style.display = 'block';
                break;
            case userFirst:
            case compFirst:
                firstPlayModal.style.display = 'none';
                theGame.style.display = 'block';               
            case playAgain:
            case quitGame:
                playAgainModal.style.display = 'none';
                theGame.style.display = 'block';
                break;
            default:
                //do nothing
        }
        
    });
}

//HTML elements to be put into cssSelect function
const board = cssSelect('#board');
const compFirst = cssSelect('#comp-first')
const exit = cssSelect('#exit');
const firstPlayModal = cssSelect('#first-play-modal');
const homePage = cssSelect('#home-page');
const modeToggle = cssSelect('#mode-toggle');
const moveChoice= cssSelect('.move-choice');
const nameModal= cssSelect('#name-modal');
const oBtn =cssSelect('#o-btn');
const oxModal= cssSelect('#ox-modal');
const playAgain = cssSelect('#play-again');
const playAgainModal = cssSelect('#play-again-modal');
const playBtn = cssSelect('#play-btn');
const restart = cssSelect('#restart');
const quitGame = cssSelect('#quit-game');
const theGame = cssSelect('#the-game');
const theMove= cssSelect('.the-move');
const submitBtn = cssSelect('#submit-btn')
const userFirst = cssSelect('#user-first')
const userName = cssSelect('#user-name');
const welcomeModal= cssSelect('#welcome-modal');
const xBtn = cssSelect('#x-btn');

//call this function with these selectors to ensure all buttons are active
closeModal(playBtn);
closeModal(submitBtn);
closeModal(oBtn);
closeModal(xBtn);
closeModal(userFirst);
closeModal(compFirst);
closeModal(playAgain);
closeModal(quitGame);

