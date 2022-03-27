
let sum = 0
let cards =[]
let hasBlackJack = false
let isAlive = false
let message = ""

let sumEl = document.getElementById("sum-el")

let messageEl = document.getElementById("message-el")

let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Abd",
    chips: 150
}

let playerEl= document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1 
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber >= 10){
        return 10
    }
    else{
        return randomNumber
    }

}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard
    renderGame()
}
 


function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent =  "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "

    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        earnChip()
    } else {
        message = "You're out of the game! Start a new game."
        isAlive = false
        loseChip()
        if (player.chips === 0){
            message = "You're out of Chip! Refresh the page." 
        }
    }
    messageEl.textContent = message

}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()

    }
    
}
function loseChip(){
    player.chips -= 50
    playerEl.textContent = player.name + ": $" + player.chips
}
function earnChip(){
    player.chips += 50
    playerEl.textContent = player.name + ": $" + player.chips
}