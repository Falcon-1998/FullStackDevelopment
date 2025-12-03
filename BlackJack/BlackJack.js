// BlackJack.js

// Game state object for better encapsulation
const gameState = {
    cards: [],
    sum: 0,
    hasBlackJack: false,
    isAlive: false
};

// DOM elements cached for performance
const startBtn = document.getElementById("start-game");
const newCardBtn = document.getElementById("new-card");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
document.querySelector

// Utility: Get a random card value
function getRandomCard() {
    const randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) return 10;
    if (randomNumber === 1) return 11;
    return randomNumber;
}

// Start a new game
function startGame() {
    // Reset state
    gameState.cards = [getRandomCard(), getRandomCard()];
    gameState.sum = gameState.cards[0] + gameState.cards[1];
    gameState.hasBlackJack = false;
    gameState.isAlive = true;

    // UI updates
    startBtn.disabled = true;
    newCardBtn.disabled = false;
    renderGame();
}

// Draw a new card
function newCard() {
    if (!gameState.isAlive || gameState.hasBlackJack) return;
    const card = getRandomCard();
    gameState.cards.push(card);
    gameState.sum += card;
    renderGame();
}

// Render game state to UI
function renderGame() {
    cardsEl.textContent = "Cards: " + gameState.cards.join(" ");
    sumEl.textContent = "Sum: " + gameState.sum;

    let message = "";
    if (gameState.sum === 21) {
        gameState.hasBlackJack = true;
        message = "Wohoo! You've got Blackjack!";
        endGame();
    } else if (gameState.sum < 21) {
        message = "Do you want to draw a new card?";
    } else {
        gameState.isAlive = false;
        message = "You're out of the game!";
        endGame();
    }
    messageEl.textContent = message;
}

// End the game and reset buttons
function endGame() {
    startBtn.disabled = false;
    newCardBtn.disabled = true;
}

// Attach event listeners (recommended over inline HTML handlers)
startBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);

// Initial UI state
window.onload = () => {
    startBtn.disabled = false;
    newCardBtn.disabled = true;
    messageEl.textContent = "Press Start Game to begin!";
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
};
