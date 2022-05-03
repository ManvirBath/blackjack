//created player object. gave it two keys: name and chip
let player = {
    name: "Player",
    chips: 150,
}

//call empty cards array
let cards = [];
//handle the sum
let sum = 0;
//blackjack auto set to false
let hasBlackJack = false;
//sum of cards not over 21, auto set to false
let isAlive = false;
//leave message empty
let message = "";
//need message to be changeable using js
let messageEl = document.getElementById("message-el");
//need sum to be changeable using js
let sumEl = document.getElementById("sum-el");
//need message to be changeable using js
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


//this function handles retrieving a random card
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1; //1-13
    if(randomNumber > 10) {
        return 10;
    } else if(randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

//function starts the game
function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

//function renders the game
function renderGame() {
    cardsEl.textContent = "Cards: ";
    //for loop to print out the numbers 
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if(sum === 21) {
        message ="Wohoo! You've got a blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

//function handles drawing a new card
function draw() {
    if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    }
}
