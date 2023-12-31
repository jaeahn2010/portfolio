//word bank
const animals = ['aardvark', 'abalone', 'alligator', 'anaconda', 'baboon', 'bumblebee', 'butterfly', 'chameleon', 'caterpillar', 'cheetah', 'chimpanzee', 'cicada', 'cockroach', 'crawfish', 'crocodile', 'dinosaur', 'dragon', 'eagle', 'elephant', 'giraffe', 'goldfish', 'goose', 'gorilla', 'groundhog', 'hamster', 'hippopotamus', 'horse', 'iguana', 'jaguar', 'jackrabbit', 'jellyfish', 'kangaroo', 'koala', 'leopard', 'lizard', 'lobster', 'mongoose', 'monkey', 'moose', 'mosquito', 'mouse', 'mussel', 'opossum', 'orangutan', 'panda', 'peacock', 'pelican', 'pigeon', 'python', 'rabbit', 'raccoon', 'rattlesnake', 'rhinoceros', 'shark', 'sheep', 'shrimp', 'snake', 'sparrow', 'spider', 'starfish', 'tadpole', 'tiger', 'tortoise', 'turtle', 'unicorn', 'whale', 'zebra'];
const bodyParts = ['abdomen', 'ankle', 'appendix', 'armpit', 'artery', 'bladder', 'blood', 'brain', 'breast', 'buttock', 'cheek', 'cheekbone', 'chest', 'eardrum', 'elbow', 'eyebrow', 'eyelash', 'finger', 'fingernail', 'forearm', 'forehead', 'gallbladder', 'groin', 'heart', 'intestine', 'joint', 'kidney', 'liver', 'mouth', 'muscle', 'nipple', 'nostril', 'pancreas', 'ribcage', 'shoulder', 'spine', 'spleen', 'stomach', 'tendon', 'thigh', 'throat', 'thyroid', 'toenail', 'tongue', 'tooth', 'waist', 'wrist'];
const cars = ['acura', 'bentley', 'buick', 'cadillac', 'chevrolet', 'chrysler', 'dodge', 'ferrari', 'genesis', 'honda', 'hyundai', 'infiniti', 'jaguar', 'lamborghini', 'lexus', 'lincoln', 'maserati', 'mazda', 'mercedes', 'nissan',  'porsche', 'subaru', 'tesla', 'toyota', 'volkswagen', 'volvo']
const capitals = ['amsterdam', 'ankara', 'athens', 'baghdad', 'bangkok', 'beijing', 'beirut', 'belgrade', 'berlin', 'bern', 'bogota', 'brasilia', 'bratislava', 'brussels', 'bucharest', 'budapest', 'cairo', 'canberra', 'chisinau', 'copenhagen', 'dublin', 'hanoi', 'helsinki', 'islamabad', 'jakarta', 'jerusalem', 'kabul', 'kathmandu', 'kyiv', 'lima', 'lisbon', 'ljublijana', 'london', 'luxembourg', 'madrid', 'manila', 'minsk', 'monaco', 'moscow', 'nassau', 'oslo', 'ottawa', 'paris', 'prague', 'pyeongyang', 'quito', 'santiago', 'sarajevo', 'seoul', 'singapore', 'skopje', 'sofia', 'stockholm', 'taipei', 'tashkent', 'tbilisi', 'tehran', 'tokyo', 'ulaanbaatar', 'vienna', 'warsaw', 'wellington', 'yerevan', 'zagreb'];
const countries = ['afghanistan', 'albania', 'argentina', 'armenia', 'azerbaijan', 'australia', 'austria', 'belarus', 'belgium', 'bolivia', 'brazil', 'bulgaria', 'cambodia', 'canada', 'chile', 'china', 'colombia', 'croatia', 'czechia', 'denmark', 'egypt', 'estonia', 'ethiopia', 'finland', 'france', 'georgia', 'germany', 'greece', 'guatemala', 'haiti', 'hungary', 'iceland', 'india', 'indonesia', 'israel', 'italy', 'jamaica', 'japan', 'kazakhstan', 'kenya', 'korea', 'kosovo', 'kuwait', 'kyrgyzstan', 'latvia', 'lebanon', 'liberia', 'libya', 'lithuania', 'luxembourg', 'macedonia', 'madagascar', 'malaysia', 'mexico', 'moldova', 'monaco', 'mongolia', 'montenegro', 'morocco', 'myanmar', 'nepal', 'netherlands', 'nigeria', 'norway',  'pakistan', 'panama', 'paraguay', 'philippines', 'poland', 'portugal', 'qatar', 'romania', 'russia', 'serbia', 'seychelles', 'singapore', 'slovakia', 'slovenia', 'spain', 'sudan', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan', 'thailand', 'tonga', 'turkey', 'turkmenistan', 'uganda', 'ukraine', 'uruguay', 'venezuela', 'vietnam', 'yemen', 'zimbabwe'];
const composers = ['arensky', 'arutiunian', 'babadjanian', 'bach', 'balakirev', 'barber', 'bartok', 'beach', 'beethoven', 'bellini', 'beriot', 'bortkevych', 'brahms', 'bruch', 'busoni', 'casterede', 'chaminade', 'chausson', 'chopin', 'clementi', 'crumb', 'debussy', 'donizetti', 'dutilleux', 'dvorak', 'elgar', 'falla', 'faure', 'franck', 'gershwin', 'ginastera', 'glazunov', 'glinka', 'granados', 'grieg', 'handel', 'haydn', 'hindemith', 'holst', 'hummel', 'ibert', 'jolivet', 'joplin', 'kabalevsky', 'kapustin', 'khachaturian', 'kolessa', 'kosenko', 'kreisler', 'lalo', 'lecuona', 'leoncavallo', 'ligeti', 'lyatoshynsky', 'lysenko', 'mahler', 'mascagni', 'mendelssohn', 'monteverdi', 'morricone', 'mozart', 'muczynski', 'mussorgsky', 'offenbach', 'poulenc', 'prokofiev', 'puccini', 'rachmaninov', 'ravel', 'revutsky', 'rossini', 'rzewski', 'sarasate', 'schubert', 'schumann', 'scarlatti', 'scriabin', 'shamo', 'shostakovich', 'sibelius', 'silvestrov', 'skoryk', 'strauss', 'taktakishvili', 'tchaikovsky', 'tcherepin', 'telemann', 'verdi', 'vieuxtemps', 'vivaldi', 'wagner', 'weber', 'wieniawski', 'williams'];
const householdItems = ['armchair', 'bathtub', 'blanket', 'blinds', 'bookshelf', 'cabinet', 'carpet', 'chair', 'clock', 'clothes', 'clothesline', 'computer', 'couch', 'curtain', 'cushion', 'dishwasher', 'doorknob', 'dresser', 'dryer', 'electronics', 'freezer', 'furniture', 'grill', 'hanger', 'ironboard', 'laptop', 'lawnmower', 'microwave', 'mirror', 'nightstand', 'pantry', 'paper', 'pencil', 'pillow', 'pillowcase', 'plate', 'printer', 'refrigerator', 'shower', 'stove', 'stovetop', 'table', 'teapot', 'tissue', 'toaster', 'toilet', 'towel', 'wallpaper', 'washer', 'window'];
const randomWords = ['abhorrent', 'antithesis', 'auspicious', 'belligerent', 'betrothed', 'bureaucracy', 'cantankerous', 'capricious', 'chastise', 'destructive', 'disassociation', 'dynasty', 'egotistical', 'eloquent', 'entrepreneur', 'fantastic', 'ferocious', 'frenetic', 'ghoulish', 'gibberish', 'guerrilla', 'handkerchief', 'hostile', 'hubris', 'illustration', 'imagery', 'indescribable', 'jaundice', 'jokester', 'judiciary', 'kerosene', 'killer', 'knowledgeable', 'langhingstock', 'litterer', 'luminous', 'malicious', 'mnemonics', 'mysterious', 'narcotics', 'nefarious', 'nymphoid', 'oblivion', 'orderly', 'overreact', 'pandemonium', 'phenomenon', 'pyrotechnics', 'quadrilateral', 'quash', 'quirky', 'rambunctious', 'rendezvous', 'rhythmic', 'sanctimonious', 'shenanigans', 'splurge', 'taxidermy', 'threnody', 'tyranny', 'ubiquitous', 'umbrous', 'uniqueness', 'vacancy', 'vivacious', 'voluminous', 'wayfarer', 'wholesome', 'wonderland', 'xenophobic', 'xerox', 'xylophone', 'yesterday', 'yonder', 'youthfulness', 'zealous', 'zigzag', 'zygote'];

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
const wordSubmit = document.getElementById('word-submit');

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

    //wait for user to make guesses using the keyboard
    qwertyKeyboard.addEventListener('click', function(evt) {
        let userChoice = evt.target.id;
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
        }
        if (wrongGuesses >= 1) {
            head.style.display = 'flex';
        }
        if (wrongGuesses >= 2) {
            torso.style.display = 'block';
            leftArm.style.display = 'block';
            leftArm.style.borderWidth = '0px';
        }
        if (wrongGuesses >= 3) {
            leftArm.style.borderWidth = '1px';
        }
        if (wrongGuesses >= 4) {
            rightArm.style.display = 'block';
        }
        if (wrongGuesses >= 5) {
            leftLeg.style.display = 'block';
        }
        if (wrongGuesses >= 6) {
            rightLeg.style.display = 'block';
        }
        if (wrongGuesses >= 7) {
            leftHand.style.display = 'block';
        }
        if (wrongGuesses >= 8) {
            rightHand.style.display = 'block';
        }
        if (wrongGuesses >= 9) {
            leftFoot.style.display = 'block';
        }
        if (wrongGuesses >= 10) {
            rightFoot.style.display = 'block';
        }
        if (wrongGuesses >= 11) {
            leftEye.style.display = 'block';
            rightEye.style.display = 'block';
            rightEye.style.borderWidth = '0px';
        }
        if (wrongGuesses >= 12) {
            rightEye.style.borderWidth = '1px';
        }
        if (wrongGuesses >= 13) {
            nose.style.display = 'block';
        }
        if (wrongGuesses >= 14) {
            mouth.style.display = 'block';
        }
        if (filledSpace === targetWord.length) {
            alert('You win!');
            setTimeout(playAgain, 3000);
        } else if (wrongGuesses === totalGuesses) {
            alert(`You lose. The correct word is ${targetWord}`);
            setTimeout(playAgain, 3000);
        }
    });

    wordSubmit.addEventListener('click', () => {
        if (guessWord.value.toLowerCase() === targetWord) {
            alert('You guessed correctly. You win!');
            setTimeout(playAgain, 1500);
        } else {
            alert('You guessed incorrectly. Try again.');
        }
        guessWord.value = '';
    });
}

function playAgain () {
    if (confirm("Play again?") == true) {
        location.reload();
    } else {
        alert('You will now be redirected to the home page.');
        window.location.href = '../index.html';
    }
}