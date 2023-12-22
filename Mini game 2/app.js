//word bank
const animals = ['aardvark', 'alligator', 'caterpillar', 'cheetah', 'eagle', 'elephant', 'giraffe', 'groundhog', 'hippopotamus', 'iguana', 'jaguar', 'jackrabbit', 'kangaroo', 'koala', 'mongoose', 'moose', 'mosquito', 'opossum', 'panda', 'rabbit', 'rattlesnake', 'snake', 'spider', 'zebra'];
const bodyParts = ['abdomen', 'ankle', 'appendix', 'armpit', 'artery', 'brain', 'cheek', 'chest', 'eardrum', 'elbow', 'eyebrow', 'eyelash', 'finger', 'fingernail', 'forearm', 'groin', 'heart', 'kidney', 'liver', 'mouth', 'muscle', 'nostril', 'ribcage', 'spine', 'spleen', 'stomach', 'thigh', 'toenail', 'tongue', 'tooth', 'waist', 'wrist'];
const cars = ['acura', 'bentley', 'buick', 'cadillac', 'chevrolet', 'chrysler', 'dodge', 'ferrari', 'genesis', 'honda', 'hyundai', 'infiniti', 'jaguar', 'lamborghini', 'lexus', 'lincoln', 'maserati', 'mazda', 'mercedes', 'nissan',  'porsche', 'subaru', 'tesla', 'toyota', 'volkswagen', 'volvo']
const capitals = ['ankara', 'baghdad', 'bangkok', 'beijing', 'belgrade', 'berlin', 'cairo', 'jakarta', 'jerusalem', 'kyiv', 'lisbon', 'london', 'madrid', 'manila', 'moscow', 'ottawa', 'paris', 'prague', 'pyeongyang', 'santiago', 'seoul', 'skopje', 'sofia', 'tehran', 'tokyo', 'warsaw', 'yerevan'];
const countries = ['afghanistan', 'albania', 'argentina', 'armenia', 'azerbaijan', 'australia', 'austria', 'belarus', 'belgium', 'bolivia', 'brazil', 'bulgaria', 'cambodia', 'canada', 'chile', 'china', 'colombia', 'croatia', 'czechia', 'denmark', 'egypt', 'estonia', 'ethiopia', 'finland', 'france', 'georgia', 'germany', 'greece', 'guatemala', 'haiti', 'hungary', 'iceland', 'india', 'indonesia', 'israel', 'italy', 'jamaica', 'japan', 'kazakhstan', 'kenya', 'korea', 'kosovo', 'kuwait', 'kyrgyzstan', 'latvia', 'lebanon', 'liberia', 'libya', 'lithuania', 'luxembourg', 'macedonia', 'madagascar', 'malaysia', 'mexico', 'moldova', 'monaco', 'mongolia', 'montenegro', 'morocco', 'myanmar', 'nepal', 'netherlands', 'nigeria', 'norway',  'pakistan', 'panama', 'paraguay', 'philippines', 'poland', 'portugal', 'qatar', 'romania', 'russia', 'serbia', 'seychelles', 'singapore', 'slovakia', 'slovenia', 'spain', 'sudan', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan', 'thailand', 'tonga', 'turkey', 'turkmenistan', 'uganda', 'ukraine', 'uruguay', 'venezuela', 'vietnam', 'yemen', 'zimbabwe'];
const composers = ['arensky', 'babadjanian', 'barber', 'bartok', 'beethoven', 'chopin', 'clementi', 'dutilleux', 'dvorak', 'elgar', 'faure', 'franck', 'gershwin', 'granados', 'grieg', 'handel', 'haydn', 'hindemith', 'ibert', 'jolivet', 'kabalevsky', 'khachaturian', 'kreisler', 'mendelssohn', 'mozart', 'offenbach', 'poulenc', 'prokofiev', 'rachmaninov', 'ravel', 'schubert', 'schumann', 'scarlatti', 'scriabin', 'shamo', 'shostakovich', 'tchaikovsky', 'tcherepin', 'vieuxtemps', 'wieniawski', 'williams'];
const householdItems = ['armchair', 'blanket', 'blinds', 'bookshelf', 'cabinet', 'carpet', 'chair', 'clock', 'clothes', 'clothesline', 'computer', 'couch', 'curtain', 'cushion', 'dishwasher', 'dresser', 'dryer', 'electronics', 'freezer', 'furniture', 'grill', 'hanger', 'ironboard', 'laptop', 'lawnmower', 'microwave', 'mirror', 'nightstand', 'pantry', 'paper', 'pencil', 'pillow', 'plate', 'printer', 'refrigerator', 'stove', 'stovetop', 'table', 'teapot', 'tissue', 'toaster', 'toilet', 'towel', 'washer'];
const randomWords = ['antithesis', 'auspicious', 'belligerent', 'bureaucracy', 'cantankerous', 'capricious', 'destructive', 'dynasty', 'egotistical', 'entrepreneur', 'fantastic', 'ferocious', 'gibberish', 'guerrilla', 'handkerchief', 'hostile', 'imagery', 'indescribable', 'jaundice', 'jokester', 'kerosene', 'killer', 'langhingstock', 'luminous', 'malicious', 'mnemonics', 'nefarious', 'nymphoid', 'oblivion', 'orderly', 'pandemonium', 'pyrotechnics','quash', 'quirky', 'rambunctious', 'rhythmic', 'sanctimonious', 'splurge', 'threnody', 'tyranny', 'ubiquitous', 'uniqueness', 'vacancy', 'voluminous', 'wayfarer', 'wholesome', 'xenophobic', 'xylophone', 'yesterday', 'yonder', 'zealous', 'zygote'];

//query selectors
const restart = document.getElementById('restart');
const homePage = document.getElementById('home-page');

const categoryModal = document.getElementById('category-modal');
const difficultyModal = document.getElementById('difficulty-modal');
const setup = document.getElementById('setup');
const wordGuess = document.getElementById('word-guess');
const qwertyKeyboard = document.getElementById('qwerty-keyboard');
const guessBox = document.getElementById('guess-box');
const guessWord = document.getElementById('guess-word');

const animalsBtn = document.getElementById('animals');
const bodyPartsBtn = document.getElementById('body-parts');
const carsBtn = document.getElementById('cars');
const capitalsBtn = document.getElementById('capitals');
const composersBtn = document.getElementById('composers');
const countriesBtn = document.getElementById('countries');
const householdItemsBtn = document.getElementById('household-items');
const randomBtn = document.getElementById('random');

const head = document.getElementById('head');
const torso = document.getElementById('torso');
const leftArm = document.getElementById('upper-left');
const rightArm = document.getElementById('upper-right');
const leftHand = document.getElementById('left-arm');
const rightHand = document.getElementById('right-arm');
const leftLeg = document.getElementById('lower-left');
const rightLeg = document.getElementById('lower-right');
const leftFoot = document.getElementById('left-leg');
const rightFoot = document.getElementById('right-leg');
const leftEye = document.getElementById('left-eye');
const rightEye = document.getElementById('right-eye');
const nose = document.getElementById('nose');
const mouth = document.getElementById('mouth');

restart.addEventListener('click', function () {
    location.reload();
});

homePage.addEventListener('click', function () {
    window.location.href = '../index.html';
});

//category modal
categoryModal.addEventListener('click', function (evt) {
    if (evt.target.tagName !== 'P') return;
    let category = evt.target.id;
    categoryModal.style.display = 'none';
    difficultyModal.style.display = 'block';
    chooseDifficulty(category);
});

//fill word bank with appropriate category
function chooseDifficulty(category) {
    let wordBank = [];
    switch(category) {
        case 'animals':
            wordBank = [...animals];
            break;
        case 'body-parts':
            wordBank = [...bodyParts];
            break;
        case 'cars':
            wordBank = [...cars];
            break;
        case 'capitals':
            wordBank = [...capitals];
            break;
        case 'composers':
            wordBank = [...composers];
            break;
        case 'countries':
            wordBank = [...countries];
            break;
        case 'household-items':
            wordBank = [...householdItems];
            break;
        case 'random':
            wordBank = [...randomWords];
            break;
    }
    difficultyModal.addEventListener('click', function(evt) {
        if (evt.target.tagName !== 'P') return;
        let level = evt.target.id;
        difficultyModal.style.display = 'none';
        setup.style.display = 'flex';
        wordGuess.style.display = 'flex';
        qwertyKeyboard.style.display = 'block';
        guessBox.style.display = 'block';
        playGame(wordBank, level);
    });
}

let filledSpace = 0;
let wrongGuesses = 0;
let totalGuesses = 0;
let usedLetters = [];

//assign appropriate number of guesses according to user's choice of difficulty
function playGame(wordBank, level) {
    switch(level) {
        case 'easy':
            totalGuesses = 14;
            break;
        case 'medium':
            totalGuesses = 10;
            break;
        case 'hard':
            totalGuesses = 6;
            break;
    }

    //randomly choose a word within category
    targetIndex = Math.floor(Math.random() * wordBank.length);
    targetWord = wordBank[targetIndex];

    //create blank spaces for the letters
    for (let i = 0; i < targetWord.length; i++) {
        let letter = document.createElement("p");
        wordGuess.appendChild(letter);
        letter.innerText = targetWord.charAt(i).toUpperCase();
        letter.classList.add('letter');
        letter.style.fontSize = '0px';
    }
    console.log(targetWord);

    //wait for user to make guesses using the keyboard
    qwertyKeyboard.addEventListener('click', function(evt) {
        let userChoice = evt.target.id;
        console.log(totalGuesses, wrongGuesses);
        if (evt.target.tagName !== 'P' || usedLetters.includes(userChoice)) return;
        if (targetWord.includes(userChoice)) {
            usedLetters.push(userChoice);
            evt.target.style.cursor = 'not-allowed';
            let letters = document.getElementsByClassName('letter');
            for (i = 0; i < letters.length; i++) {
                let letterToCompare = letters[i].innerText.toLowerCase();
                if (letterToCompare === userChoice) {
                    letters[i].style.fontSize = '20px';
                    filledSpace++;
                }
            }
        } else {
            wrongGuesses++;
            switch(wrongGuesses) {
                case 1:
                    head.style.display = 'flex';
                    break;
                case 2:
                    torso.style.display = 'block';
                    break;
                case 3:
                    leftArm.style.display = 'block';
                    break;
                case 4:
                    rightArm.style.display = 'block';
                    break;
                case 5:
                    leftHand.style.display = 'block';
                    break;
                case 6:
                    rightHand.style.display = 'block';
                    break;
                case 7:
                    leftLeg.style.display = 'block';
                    break;
                case 8:
                    rightLeg.style.display = 'block';
                    break;
                case 9:
                    leftFoot.style.display = 'block';
                    break;
                case 10:
                    rightFoot.style.display = 'block';
                    break;
                case 11:
                    leftEye.style.display = 'block';
                    break;
                case 12:
                    rightEye.style.display = 'block';
                    break;
                case 13:
                    nose.style.display = 'block';
                    break;
                case 14:
                    mouth.style.display = 'block';
                    break;
            }
        }
        if (filledSpace === targetWord.length || guessWord.value === targetWord) {
            alert('You win!');
        } else if (wrongGuesses === totalGuesses) {
            alert('You lose.');
            if (confirm("Play again?") == true) {
                location.reload();
            } else {
                alert('You will now be redirected to the home page.');
                window.location.href = '../index.html';
            }
        }
    });
}