# Rock, Paper, Scissors, Lizard, Spock.


![Responsive design on multiple devices](media/responsive-screen.png)

## **[Live link to Game](https://charte-dot.github.io/Rock-Paper-Scissors-Lizard-Spock/)**



# Table of contents:
- ##  [Context](#context)
 
- ##  [UX Design](#UX-Design)
     - [Target audience](#Target-audience)
     - [Overview](#Overview)
     - [User Stories](#User-stories)
     - [Wireframes](#wireframes)
     - [Design choices](#Design-choices)
     - [Background](#Background)
     - [Colors](#Colors)
     - [Game Logo](#Game-logo)
     - [Fonts](#Fonts)
     - [Icons](#Icons)
  
- ##  [Features](#Features)
     - [Main heading](#main-heading)
     - [main area](#main-area)
     - [Rules section](#rules-section)
     - [Main game](#main-game)
     - [Score display](#score-display)
     - [End game](#End-game)
     - [Features to implement](#features-to-implement)
 
- ##  [Technologies Used](#Technologies-used)
     - [Main game](#main-game)
     - [Project management](#project-management)
     - [Style & Theme](#style-theme)
     - [Online resources](#online-resources)

- ## [Testing](#testing)
     - [Automated code testing](#automated-code-testing)
     - [Manual testing](#manual-testing)
     - [Responsiveness](#responsiveness)
     - [Unrsolved issues](#unresolved-issues)

- ## [Deployment](#deployment)
     - [Github pages](#github-pages)
     - [Forking the repository](#forking-the-repository)
     - [Cloning the repository](#cloning-the-repository)

- ## [Credits](#credits)  

       


  # Context
  "Rock, Paper, Scissors, Lizard, Spock" was inspired by the game featured in the show  **[The Big Bang Theory](https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/)**. This game is an online virtual version of the hand gesture game spoke about on the show. The game is for all ages as you play against the computer. It will challenge you as the added twist of dropping a point if the player draws the same choice as the computer.

  The game is simple:
  - The game rules explain the button symbols for players who might of not heard of or played this variation of the game rock, paper, scissors.
  - Player chooses and option from the buttons displayed, rock, paper, scissors, lizard & spock.
  - The computer is set up to randomly choose an option, so results are different everytime.
  - If the player wins they are rewarded with one point.
  - If the player looses the computer is rewarded with one point.
  - If both the player and computer draw, both loose a point.
  - First to get to 10 points wins.
  - Then the player can restart the game or exit.

  As there are no extra levels to this game, I'v made it a bit more of a challenge by loosing a point with both player and computer draw the same. This adds lenght to the game, while also making the player think and choose with care which symbol they want to play next.

  ---

  # UX Design

  ## Target audience
  - Anyone who is a fan of The Big Bang Theory
  - People who enjoy games
  - New users that would like to try a new game

  ## Overview
  - Simple design
  - Intuitive navigation
  - Satisfying feedback
  - Fun and interactive application.

  ## User stories

  ### First time user:
  1. To be able to access the application with ease.
  2. Have clear navigation.
  3. Easy to read and understand instructions.
  4. Fun interactive application

  ### Returning user:
  1. To be entertained.
  2. Navigate with ease
  3. Satisfying visuals
  4. Clear easy path to starting and restarting the game.

  ### As site owner:
  1. To be able to customise the look and feel of the site with ease.
  2. To make a fun and entertaining application
  3. To make sure the user has fun using the application.

 
  ## Wireframes
![Wireframe](media/wireframe.png)

I designed a basic wireframe first.This was to give me a template to follow and to make sure my original design that I had planned was the outcome and final layout of the application. The layout of the application is the same across all mobile, just resized to fit the device screen. 

## Design choices

### Background
My main objective for the background of the game was to be space themed as The Big Bang Theory has space and science references throughout the show and one of the symbols within the game "Spock" was a charater on Star Trek, another space themed show.
I needed the background to be complimentary and undistracting from the game. The background I chose came from **[Unsplash](https://unsplash.com/photos/qwoW4mdqjWw)** as it is an amazing photograph of the Milky Way. The original image was too large in size, so I used a tool called **[Tiny Png](https://tinypng.com//)** to compress the image to a smaller file size to help with the page load time. 

### Colors
The colours I used to style elements within game came from with the background. I used eye dropper chrome extention, this allows you to accurately focus in on a colour from a webpage or document. This tool helped to pick colors from the background and tie the background in subtly throughout the game. 
- Main text heading and borders: White smoke.
- Text background: Dodger blue.
- Background for buttons and in game message/results: Midnight blue.
![Colors Used](media/colors.png)

### Game logo
![Logo](media/logo-ss.png)
 
 
 I decided after much research that I wanted to add a logo to the game, visual instructions of the game. I sourced this logo from
**[Code golf and challenges](https://codegolf.stackexchange.com/questions/195083/cheat-at-rock-paper-scissors-lizard-spock)**. The original image although it was what I was looking for didn't fit into the style of the game. I used a background removal tool called **[Clipping magic](https://clippingmagic.com/)** to take away the dark navy background of the original image. As the original image is turquoise blue it clashed with the space background on the game. With a recolor tool called **[Pine tools](https://pinetools.com/colorize-image)** I recolored the image to fit in the the design and look of the page. 

### Fonts
- For the font I used Google Fonts. 
- I used **[Orbitron](https://fonts.google.com/specimen/Orbitron?preview.text=The%20Authentic%20American%20Car%20Club&preview.text_type=custom&query=orbit)** font throughout the whole application to keep it simple and consistant.
- Backup font I set it as Sans serif.

### Icons
I used basic Icons from Font Awesome for the symbols on the player buttons.
- **[Rock](https://fontawesome.com/v5/icons/hand-rock?s=solid)**
- **[Paper](https://fontawesome.com/v5/icons/hand-paper?s=solid)**
-  **[Scissors](https://fontawesome.com/v5/icons/hand-scissors?s=solid)**
- **[Lizard](https://fontawesome.com/v5/icons/hand-lizard?s=solid)**
- **[Spock](https://fontawesome.com/v5/icons/hand-spock?s=solid)**
 
 I styled the Icons within CSS stylesheet to match with the overall theme of the application.
 
 ---
 
 # Features 
 ## Main heading
 
 ![Main Heading](media/main-heading.png)
 
  - The main heading on the application is a simple text of the game name in bright bold text styled to stand out from the background but not to take away from the over all application. It is clear and allows the user to see what the name of the game is.
---


## Main game area
 ![Main area](media/main-area.png)

 - The main game area is where the game takes place. From the landing page right through to the end page of the game. It has a simple opening statement inviting the user to play. Located in the centre of the game area is the play button to start the game and game rules button to open the rules section allowing the user to see the rules of the game and how to play.

 ----

 ## Rules section
 ![Rules section](media/rules.png)

 - If the user clicks on the game rules button, the rules/instructions are displayed on the screen. It explains with symbols what the option will be within the game. Beneath that there is a list of which game choice beats the other game choices. The points system is then explained below this to allow the user to understand how the points are calculated within the game. At the very end of the rules is a close button. When the user clicks this button the rules section closes and the user is back at the main screen where the play button is located.

 ---

 ## Main game
 ![Main game](media/game-area.png)

 - When the user clicks the start button, the main game is displayed. A simple design containing everything the player needs to play the game. An instruction text invites the user to select a button to start. Upon selecting a button the game has started and the instruction text then changes to display which option the user has selected and the computer choice. This also displays a win, lose or draw notifying the user the outcome of that choice.

 ---

 ## Score display
 ![Score Display](media/score.png)

 - A simple score display is located at the top of the game area. This shows user score and computer score and updates upon each option choosen within the game.

 ---

 ## End game
![End game](media/game-over.png)

- When the score either by the user or computer reaches 10 point on the score board the game ends. It displays the outcome of the game via text and invites the user to play again. The play again button when clicked restarts the game and the user is straight back into a new game.

---

## Features I would like to implement in the future.
- I would like to implement a timer to time the game, adding another level of difficulty to the game.
- I would like to add another level to the game, giving the user another option to choose from.
- I would like to add sound effects to the game.
- I would have like to have added a high score board with name entry to keep track of high scores.


---

# Technologies Used

## languages
- HTML
- CSS
- JavaScript

## Project management
- GitHub
- Gitpod
- Balsamiq wireframes

## Style & Themes
-  [Google fonts](https://fonts.google.com/) for fonts used throughout the projects
-  [Fontawesome](https://fontawesome.com/) for the logos used on the buttons within the game
-  [Unsplash](https://unsplash.com/) for the background imaged used
-  [Tiny png](https://tinypng.com/) Used to compress file size of the background image
-  [pine tools](https://pinetools.com/) used to recolour the logo used on the main page of the project
-  [clipping magic](https://clippingmagic.com/) Used to remove the original background on the logo

## Online resources 
- [Am I responsive](http://ami.responsivedesign.is/) Multi device mockup generator.

---

# Testing 

## Automated testing

- #### HTML [W3C Markup Validation Service](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcharte-dot.github.io%2FRock-Paper-Scissors-Lizard-Spock%2F)  Passes with no errors or warnings.

- #### CSS [W3C CSS Validator ](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcharte-dot.github.io%2FRock-Paper-Scissors-Lizard-Spock%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) Passes with no error or warnings

- #### JavaScript [jshint](https://jshint.com/) Passes with no errors or warnings.

![Javascript](media/jshint-test.png)


- #### Chrome DevTools - Lighthouse

![Light house score](media/testing-lighthouse.png)

---

## Manual Testing

- I've mannually tested the Rock, Paper, Scissors, Lizard, Spock on three main devices. A 15' laptop, a 10' Lenovo tablet and a 6.5 inch Samsung Galaxy A12. Easy to view and play on all 3 devices. I sent the deployed link to a friend who tested it on an I phone 7 without any major Issues. 

- One issue that did arise and was brought to my attention was that the scores were clearing on the end of game screen and not displaying the score from the game. This has now been resolved and the scores stay until game is reset allowing the user to see the final score.

- Lenovo tablet 10 inch screen

![Lenovo tablet screen 10 inch screen](media/lenovo-tablet-ss.png)

---

- Acer laptop 15 inch screen
![Acer laptop 15 inch screen](media/laptop-ss.png)




## Responsiveness

- Overall the game is responsive on majority of screen sizes, the game area is style larger and the play button are stacked three on top and two on the bottom. I positioned the buttons like this for ease of use for the user, instead of a vertical line of buttons.

- The game works in portrait mode without issues, but the responsive design doesn't respond to well to a quick rotation of the screen while the game is active but responds well if the screen is rotated and then the link to the deployed site is activated.

## Unresolved Issues
- Circular buttons for playing the game can have a delayed response and may need a double tap on a mobile or tablet.
- If playing on a laptop, the user needs to click near the edge of the button, the responsive surface area is not that large on the buttons.

---

# Deployment

## Github pages

- The site was deployed to github pages once I had the site completed and I was happy with my code. The steps to deployment were as follows:
- In github repository, I went into settings and scrolled down until I came across git hub page section.

- On the github page section, I click the link to activate github pages.

- I then selected main branch from the source drop down selection and clicked save.

- The page automatically refreshed with a display to indicate the successful deployment.

- After a few minutes my site was sucessfully deployed and viewable on git hub pages with site link.

The live link can be found here [https://charte-dot.github.io/Rock-Paper-Scissors-Lizard-Spock/](https://charte-dot.github.io/Rock-Paper-Scissors-Lizard-Spock/)

## Forking the repository

To use the code without affecting the original code you can do what is called 'Forking the repository'. By forking this respositiory you have a copy of the code at that particular moment in time that you can use freely.To fork this respository you need to:

- Select the respository you want to fork.
- In the upper right of the repository click the 'fork' button.
- A copy of the respository will be available within your respositories.


## Cloning the repository
- Select the repository you want to clone.
- In the upper section of the file beneath the settings options, you click the dropdown button called 'Code'.
- You then copy the SHH address.
- In your local IDE open Git Bash.
- Change the current working directory to where you want the cloned directory to be made.
- Type `git clone` and then paste your copied SHH address.
 ```console
git clone https://charte-dot.github.io/Rock-Paper-Scissors-Lizard-Spock/
```
- Click enter and your local clone will be made.

---

# Credits

**[Web Dev Simplified](https://www.youtube.com/watch?v=1yS-JV4fWqY)** Simple rock, paper, scissors tutorial that inspired me and I used this tutorial as a stepping stone for my own project but building it differently. Code used from this tutorial was referenced with the code. 


**[Alexa Botello](https://alexabotello.medium.com/javascript-rock-paper-scissors-game-5c7dbb10038a)** Great article and tutorial on how to build rock, paper, scissors game. I did refer back to this tutorial for some elements of my game and code used has been referenced within the code. 

**[sebhastian.com](https://sebhastian.com/rock-paper-scissors-javascript/)** Informative website, which I did refer back to on occasion especially for the score tracker for the game. Any code used is referenced within the code.

[RETURN TO THE TOP](#Rock-Paper-Scissors-Lizard-Spock)

































  

  



