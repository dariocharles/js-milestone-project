
// Storing the .memory-card items using the DOM
const cards = document.querySelectorAll(".memory-card");
// Testing
console.log(cards);

// 
let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
  // in this context the 'this' keyword represents the elements that fired the event
  // add or take off the 'flip' class - which has the CSS to flip 180deg
  this.classList.add('flip');

  // If hasFlippedCard is false, meaning the player has clicked the first time. Else it is true and the player is clicking second time.
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

    // If it's a match, else it's not a match
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    } 
    // Testing
    console.log("Function was executed correctly!");
    
  }
}

// For each individual card (forEach(card) attach (=>) an event listener that when it is clicked the flipCard function will happen
cards.forEach(card => card.addEventListener("click", flipCard));