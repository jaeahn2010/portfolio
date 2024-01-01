# How to navigate this website

![screenshot of main page](README-screenshots/SS-main-page.png)

## List of technologies used
- HTML
- CSS
- Javascript

## Installation instructions
- None required

## User stories
- As a past client, seeing this website for the first time, I want to know why my realtor/pianist started this new career, so that I can build a general understanding and trust of their new line of work enough to continue to refer him as a developer to other potential clients.
- As a potential employer, I want to analyze this potential employee's website in depth (their HTML/CSS ability and taste for style and layout, as well as their logical problem-solving skills using JS) so that I can clearly see their strengths and weaknesses and know if he is the right fit for our company and the job.

## What to expect from this website

### The "About Me" page

![screenshot of about me page](README-screenshots/SS-about-me.png)

This page features a moderately brief biography of Jae Ahn-Benton's life, including his immigration from South Korea to the USA, when his love for coding started, and other aspects of his life (family, music, real estate).

At the bottom of the page, there is a slideshow of photos of Jae with his family. Click the left or the right arrow to navigate.

![screenshot of slideshow](README-screenshots/SS-about-me-slideshow.png)

### The "Resume" page

![screenshot of resume page](README-screenshots/SS-resume.png)

This page features a small example of Jae's previous professional life as a classical pianist and a real estate agent.

Click each of the 5 main buttons on the page to explore the details of each section, as well as get a further understanding of how Jae's past experience relates to his current pursuit of software engineering. Each button will prompt a modal to pop up, in which you can scroll down to continue viewing the material within. Click on the "CLOSE" button on the bottom to close the modal. 

![screenshot of resume modal](README-screenshots/SS-resume-modal.png)

Hover the mouse over the photos to zoom in automatically.

![screenshot 1 of photo zoom](README-screenshots/SS-resume-music-modal.png)

![screenshot 2 of photo zoom](README-screenshots/SS-resume-real-estate-modal.png)

### The "Projects" page

![screenshot projects page](README-screenshots/SS-projects.png)

This page features all of Jae's functioning projects, which includes mini-games. It will constantly be updated as he finishes more projects and links them to this website. Click on the images to be redirected to the corresponding project.

#### Mini-game 1: Tic-Tac-Toe

This is the classic game of Tic-Tac-Toe, designed by Jae Ahn-Benton.

- ***The welcome modal:*** Simply click the "LET'S PLAY" button to continue.
![screenshot of TTT](README-screenshots/SS-TTT-welcome.png)

- ***The name modal:*** The game will prompt you for your name. You may use your real name or any nickname you wish. If you leave the field blank, your name will automatically be assigned to "User". Click "submit" to continue.
![screenshot of TTT](README-screenshots/SS-TTT-name.png)

- ***The symbol modal:*** You will be prompted to choose the "O" or the "X" symbol as yours. Click either image to continue.
![screenshot of TTT](README-screenshots/SS-TTT-symbol.png)

- ***The turn modal:*** You will be prompted to make a choice to go first or to let the computer to first. If you choose "ME", you will be able to make the first move. If you choose "COMPUTER", the computer's move will already be made on the gameboard when the game starts. Click on either button to continue.
![screenshot of TTT](README-screenshots/SS-TTT-turn.png)

- ***The main game:*** Click on any of the empty squares to make your move. The computer will automatically make a move after you, and each move will be logged on the message board directly above the game board. Once a winner has been determined, the game will update your stats (wins, ties, losses) seen on the stats board above and will finish the round.
![screenshot of TTT](README-screenshots/SS-TTT-gameboard.png)
![screenshot of TTT](README-screenshots/SS-TTT-gameplay.png)
![screenshot of TTT](README-screenshots/SS-TTT-win.png)

- ***The play again modal:*** The game will ask you if you'd like to play again. Clicking "YES" will save the stats and take you back to the part where you choose your symbol and turn to start another round. Clicking "NO" will pop up an alert box, asking you if you are sure you would like to quit the game. On the alert box, clicking "OK" will redirect you the main page of the website; clicking "CANCEL" will simply close the alert box.
![screenshot of TTT](README-screenshots/SS-TTT-play-again.png)

- ***The buttons:*** At any point of the game, you may click any of the buttons at the bottom of the screen:
    - "LIGHT MODE" will toggle between and light and dark modes.
    ![screenshot of TTT](README-screenshots/SS-TTT-light-mode.png)

    - "RESET PROGRESS & RESTART" will reset all stats to 0 and reload the page to restart the game.
    - "RETURN TO HOME PAGE" will close the game and redirect you to the main page of the website.

#### Mini-game 2: Hangman

This is another classic game of Hangman, also designed by Jae Ahn-Benton.

- ***The category modal:*** Choose any of the categories to continue. Each category has a list of predetermined set of words, one of which will be randomly chosen as the target word for the game.
![screenshot of HM](README-screenshots/SS-HM-category.png)

- ***The difficulty modal:*** Choose a level to continue.
![screenshot of HM](README-screenshots/SS-HM-level.png)
    - "Easy" will allow you to make 14 wrong guesses (head, torso, left arm, right arm, left leg, right leg, left hand, right hand, left foot, right foot, left eye, right eye, nose, and mouth).
    - "Medium" will allow you to make 10 wrong guesses (head, torso, left arm, right arm, left leg, right leg, left hand, right hand, left foot, and right foot).
    - "Hard" will allow you to make 6 wrong guesses (head, torso, left arm, right arm, left leg, right leg).

- ***The main game:*** Based on the length of the chosen word, there will be that many empty spaces visible below the hangman graphic.
![screenshot of HM](README-screenshots/SS-HM-gameboard.png)
To guess a letter, simply click on one of the letters on the QWERTY keyboard on the bottom. If the target word includes the chosen letter, that letter will be autopopulated on the blank space(s) where appropriate. That letter will not be clickable again. If the target word doesn't include the chosen letter, a body part of the hangman will appear one by one.
![screenshot of HM](README-screenshots/SS-HM-wrong-guess.png)
Be careful, as the game doesn't log these "wrong" letters; it is therefore possible to continue to wrongly guess previously guessed letters. Keep track of your wrong guesses in your mind!
![screenshot of HM](README-screenshots/SS-HM-gameplay.png)
The game is won if you guess all of the right letters, revealing the target word, before all of the body parts of the hangman appear. 
![screenshot of HM](README-screenshots/SS-HM-win.png)Conversely, the game is lost if all of the body parts of the hangman appear before you are able to reveal the target word. Upon your victory or loss, the game will prompt you to play again. Click "OK" to play again, or "CANCEL" to quit the game and go back to the main page of the website. 
![screenshot of HM](README-screenshots/SS-HM-play-again.png)
At any point of the game, feel free to guess the entire word on the input box directly below the keyboard (it is not case-sensitive).
![screenshot of HM](README-screenshots/SS-HM-guess-word.png)
If you guess correctly, the game will automatically be won. If you guess incorrectly, the game continues; the game does NOT count it as a "wrong guess"; no body parts will appear.

- ***The buttons:*** At any point of the game, you may click any of the buttons at the bottom of the screen:
    - "RESTART GAME" will reload the page to restart the game, letting you choose again the category and the level.
    - "GO TO HOME PAGE" will close the game and redirect you to the main page of the website.

### The "Contact Me" page
![screenshot of contact me](README-screenshots/SS-contact-me.png)

Please note that this page is still under construction. It so far is able to ask for user's information (name, phone, email, and message), but is not yet able to store or send the data. Upon clicking the SUBMIT button, it will simply display the data back to the user.
![SS of contact me under construction](README-screenshots/SS-contact-me-under-construction.png)
It is able to reject invalid phone number formats and some invalid email format. This page will be updated soon with regexes and PHP. 
![SS of contact me name error](README-screenshots/SS-contact-me-error-1.png)
![SS of contact me phone error](README-screenshots/SS-contact-me-error-2.png)

## Unsolved problems and major hurdles
- Unexpectedly recurring event listeners in mini game 1 (resolved)
- CSS issues with the hangman graphic in mini game 2 (resolved)
- CSS issues with card display with mini game 3
- JS issues with cards being clickable (therefore "flippable") while already flipped pair being checked
- "Contact me" page doesn't store data input by user

## Next steps for this project
- Explore incorporating more interesting graphics in all pages
- Consistently add more mini games and other projects
- Be able to securely safe user data input into the "contact me" page with PHP
- Catch bad user input more efficiently with regexes in the "contact me" page
- Incorporate more webpages that will be linked to the "resume" page, regarding my services in real estate and music