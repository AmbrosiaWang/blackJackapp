let player = {name: "Ambrosia"}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
// getElementById & querySelector 意思一樣 注意querySelector("#sum-el") 括號要加 #號
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = "Player Name : "+ player.name 

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13)+1
    if(randomNum > 10){
        return 10
    }else if(randomNum === 1){
        return 11
    }else{
    return randomNum
}
}

function startGame() { 
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for( let i = 0; i<cards.length; i++){
    cardsEl.textContent += " " + cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
if(sum<=20){
    message = "Do you want a new card?"
}else if(sum === 21){
    message = "Woohoo!!! Blackjack!"
    hasBlackJack = true
}else {
    message = "Over 21! You're out!"
    isAlive = false
}
messageEl.textContent = message
}


function newCard(){
    if (isAlive === true && hasBlackJack === false){
    let thirdCard = getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
    }
}

