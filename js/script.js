// Storing the .memory-card items using the DOM
const cards = document.querySelectorAll(".memory-card");
// Testing
console.log(cards);

// Declare/intialize variables
let hasFlippedCard = false;
let firstCard, secondCard;

// FIX BUG 1. - when another card is clicked before the function has finished then their is a glitch
// Need to declare variable to lock the board in the function to prevent bugs if the player clicks a card before another card is finished flipping
let lockBoard = false; 

// For each individual card (forEach(card) attach (=>) an event listener that when it is clicked the flipCard function will happen
cards.forEach(card => card.addEventListener("click", flipCard));


// this function is called when the card is clicked because of the event handler above. When it is called add the flip class. This makes sure two cards are flipped
function flipCard() {
  // This prevents the rest of the function from working unless lockBoard is false
  if (lockBoard) return;
  // FIX BUG 2 - if click the same card twice then that will show up as a match and the card will remain flipped
  // If it's the firstCard click the 'this' variable holds the firstCard and will be false so the function will execute normally. If 'this' variable is the secondCard then if it equals firstCard will return from the function. 
  if (this === firstCard) return;

  // in this context the 'this' keyword represents the elements that fired the event
  // add the 'flip' class - which has the CSS to flip 180deg
  this.classList.add('flip');

  // If hasFlippedCard is false, meaning the player has clicked the first time. In this case it redeclares the variables. And Else it is true and the player is clicking second time. If the player it is the players second flipped card then initiate the checkForMatch() function which checks to see if the two cards are a match
  if (!hasFlippedCard){
    hasFlippedCard = true;
    // 'this' is the element that fired the event. In this case it is the div.memory-card.flip
    firstCard = this;
    // Testing
    console.log({hasFlippedCard, firstCard})
  } else {
    hasFlippedCard = false;
    secondCard = this;
    // Testing
    console.log({firstCard, secondCard});

    // Check if the cards match
    // Testing
    console.log(firstCard.dataset.framework);
    console.log(secondCard.dataset.framework);

        // Call the checkForMatch() function below
        checkForMatch();
      }
    }     

// This function is called when the second card has been flipped and it checks to see if the two cards are a match
function checkForMatch() {
  // Checking if the dataset.framework of the first and second cards are a match
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    // it's a match! Remove the event listener so they can't be flipped again.
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  } else {
    // Cannot flip another card
    lockBoard = true;

    // not a match. Remove the flip class in the CSS file so they both flip back. Set to remove this class after 600 milliseconds.
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      // Only can flip a card while lockBoard is true, now at the end of the function to see if they were a match and flipped I returned the variable to false so can flip another card
      // lockBoard = false; => Added this to resetBoard() function

      // Calling resetBoard() function to redeclare variables
      resetBoard();
    }, 600);
  }
} 

// For the if condition to see if firstCard and secondCard are equal. Need to redeclare variables to null.
// Using the ES6 destructuring assignment to keep code short
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Function so shuffle the cards. 
// Wrapping the function in () makes it an immediately invoked function, not needing to be called. 
(function shuffle() {
  // iterate through deck of cards
  cards.forEach(card => {
    // Generate random number using Math.random from 0-1 (excluding 1). Multiply number by 12 to get a number between 0-11. Math.floor ensure the numbers are an integer. Store in a variable.  
    let randomPos = Math.floor(Math.random() * 12);
    // order property defaults the cards to 0 so they all belong to the same group. Then assigning them each a random number with the randomPos variable.
    card.style.order = randomPos;
  });
})();
