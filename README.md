# Memory Game

[Live Project Here](https://dariocharles.github.io/gym_project/)

This project is a interactive game where the user/player flips over each card to find matches. There are
twelve card created and each one flips to the other side to reveal an image. When two cards flip and they are not a match the function coded will automatically flip them back. If they are a match, then they will remain flipped where the click event is disabled. I have also made sure that when each card is in the process of flipping other cards cannot be flipped, this solved a bug that would prevent the game from working.

![picture](assets/images/readme-photo.png)

# Table of contents

1. [Introduction](#introduction)
2. [Some paragraph](#paragraph1)
3. [Sub paragraph](#subparagraph1)
4. [Another paragraph](#paragraph2)

## This is the introduction <a name="introduction"></a>

Some introduction text, formatted in heading 2 style

## Some paragraph <a name="paragraph1"></a>

The first paragraph text

### Sub paragraph <a name="subparagraph1"></a>

This is a sub paragraph, formatted in heading 3 style

## Another paragraph <a name="paragraph2"></a>

The second paragraph text

## Goals

### User Goals

The user's goal is to match each card with another until all the cards have been matched. This game is meant to entertain the user as well as test and strengthen their memory abilities. This is done by automating a short time when each card flips over so that the user is challenged to remember

### Developer Goals

In this project, I wanted to use JavaScript click events to interact with the user. I created this project with the intention of bettering my understanding JavaScript and implementing this language with HTML and CSS. My goals were to make the user's experience seamless and anticipate and fix bugs that the User might encounter. In this game I showcased my abilities in the following:

using html5 data-attribute
using css3 features such as positioning, flexbox, perspective, backface-visibility, transitions
accessing elements in the DOM using querySelector
interating through lists with forEach
adding/removing an element class
adding/removing event listeners
using timeout

## User Experience UX

When the user comes to this game, they will understand the rules of the game intuitively and be able to play without lengthy instructions. Part of the inuitive nature of the game is that the cards resemeble cards from a deck of cards and so they re familiar. The look of this game is inviting through the use of bright colours and fun images. The user can start easily and work through it without running into bugs.

## User Story

    -As a user, I want to easily understand how to play so I can get started without a learning curve.
    -As a user, I want to play with the game working as it is intended so that when I click an area what I expect to happen will happen.

### Design

- Colour Scheme
  - The main colour used is green and was chosen because it gives the website a bright and inviting feel.
- Style
  - I choice the layout of the game to resemble a deck of cards so that it was familiar and easily understood by the user.

### Wireframe

I decided to begin working without wireframes. My focus was exploring what was possible with these technologies and what I can do with them.

## Features

- Interactive elements: click events

## Technologies Used

### Languages Used

- HTML5
- CSS3
- JavaScript

### Frameworks, Libraries & Programs Used

4. [Git](https://git-scm.com/)

- Git was used for version control by utilizing the Visual Studio Code terminal to commit to Git and Push to GitHub.

5. [GitHub:](https://github.com/)

- GitHub is used to store the project's code after being pushed from Git.

## Testing

### Testing User Stories

    -As a user, I want to easily understand how to play so I can get started without a learning curve.
        -Upon seeing the webpage, the users are greeted with a clean, intuitive, and minimal layout.
        -The main objective of the game is understood either through prior experience with this type of memory game or through simple interactions it is easy to catch on to the rules.The code itself simply allows or not allows a click so that the user can easily learn by what happens when they click.
    -As a user, I want to play with the game working as it is intended so that when I click an area what I expect to happen will happen.
        -The code lends itself to anticipate that the user may click a card before another card is finished flipping. In this event, the click will not activate a new flip. Otherwise, the code would be disrupted and the user's game would be flawed.
        -The code also anticipates that a user may double click the same card. I have created a function to that if this happens the code will disregard the second click. Otherwise, the data attribute would match the first click with the second clip and the card would then stay flipped without matching a second card.

### Further Testing

- The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on Laptop device.
- Multiple games were played to ensure that the functions all worked with any interaction the user may use.
- I used [W3C Markup Validation](https://validator.w3.org/) to validate HTML
- I used [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) to validate CSS.

## Known Bugs

- The code had a bug that when the user double clicked a card the function would see that as a match because the data attribute would match. This would keep the card flipped without matching with a new card. I created a function to resolve this issue so that clicking a second time would not trigger an event. That way it wasn't recognized as a match.
- A bug in the code was that when a user would click another card before the first card was fully turned over, the function had completed, then the second card would flip over but wouldn't recongize if the data attribute matched the first card or not. I created a function to resolve this issue so that the user couldn't click another card until the first function was completed.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.

- Alternatively Click Here for a GIF demonstrating the process starting from Step 2.

3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the GitHub Repository
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.
   $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
7. Press Enter. Your local clone will be created.
   $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   > Cloning into `CI-Clone`...
   > remote: Counting objects: 10, done.
   > remote: Compressing objects: 100% (8/8), done.
   > remove: Total 10 (delta 1), reused 10 (delta 1)
   > Unpacking objects: 100% (10/10), done.

## Credits

### Resources/References

- [W3Schools](https://www.w3schools.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
- [The Code Institute](https://codeinstitute.net/)
- [Free Code Camp](freeCodeCamp.org)
- [Web Dev Simplified](https://www.youtube.com/watch?v=28VfzEiJgy4)
- [Code Sketch](https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw)
- [Coding Hack](https://www.youtube.com/watch?v=4BOSWPnC9Uk)
- [Sufi Coder](https://www.youtube.com/watch?v=1uFnIy9yin8)
- [Adam Khoury](https://www.youtube.com/watch?v=c_ohDPWmsM0)

### Images

- All Images were taken from [Pexels](pexels.com)
  - []()
  -
  -

### Acknowledgements

- My teacher at Canadian Business College for assisting me in learning HTML, CSS, and JavaScript.
- The Code Institute for providing course material to assist in learning how to implement the contents of this website
