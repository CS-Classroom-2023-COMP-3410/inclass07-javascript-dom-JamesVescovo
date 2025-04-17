let deck = [];
let excludeCards = [127152,127152,127167,127168]
let number = 127137;
let cardastring = '&#{number};';

let cardBack="&#127136";

for(let i = 127137; i < 127137+52; i++) {
    if (excludeCards.incldues(i)) {
        continue;
    }
    let cardString = '&#${i};'
    deck.push(cardString);
    let newNode = document.createElement('div');
    newNode.innerHTML = cardString;
    newNode.className = 'card';
    document.body.appendChild(newNode);
}

console.log(deck);

let cardChoice=deck.slice(0, 10);

let gameCards=[];

for(let card in cardChoice) {
    gameCards.push(cardChoice[card]);
    gameCards.push(cardChoice[card]);
}

shuffle(gameCards);
function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

let flippedCards = [];
let matchedPairs = 0;
const gameBoard = document.querySelector('.grid-container');

function handleCardClick() {
    if (flippedCards.length === 2) return; 
    if(this.children[0].style.display.display == "none") {
        this.children[0].style.display = "";
        this.children[1].style.display = "none";

    }
 else{
        this.children[0].style.display = "none";
        this.children[1].style.display = "";
    }
    if (flippedCards.length < 2) {
        flippedCards.push(this);
    } else if (flippedCards.length == 1) {
        if(this.children[0].innerHTML == flippedCards[0].children[0].innerHTML) {
            console.log("You win!");
        }
    }
}


for(let card in gameCards) {
    let newNode = document.createElement('div');
    let frontNode = document.createElement('div');
    let backNode = document.createElement('div');
    
    newNode.className = 'card'; 
    frontNode.className = 'front';
    backNode.className = 'back';
    
    frontNode.innerHTML = card;
    backNode.innerHTML = cardBack;
    
    frontNode.style.display = "none"; 
    newNode.appendChild(backNode);
    newNode.appendChild(frontNode);
    
    newNode.addEventListener('click', handleCardClick); 
    gameBoard.appendChild(newNode);
}

