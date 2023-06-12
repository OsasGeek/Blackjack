let player ={
    name: 'Osas',
    chips: 200
}
let cards = []
let a = []
let cardsHol =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cardsHolder")
let playerEl = document.getElementById("player-el")
let one = "<img src='src/ace_of_spades.png' alt='Ace' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let two = "<img src='src/2_of_diamonds.png' alt='Two' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let three = "<img src='src/3_of_clubs.png' alt='The Image' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let four = "<img src='src/4_of_spades.png' alt='The Image' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let five = "<img src='src/5_of_hearts.png' alt='The Image' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let six = "<img src='src/6_of_clubs.png' alt='The Image' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let seven = "<img src='src/7_of_spades.png' alt='The Image' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let eight = "<img src='src/8_of_diamonds.png' alt='The Image' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let nine = "<img src='src/9_of_spades.png' alt='The Image' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let ten = "<img src='src/10_of_hearts.png' alt='The Image' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let jack = "<img src='src/jack_of_spades2.png' alt='The Image' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let queen = "<img src='src/queen_of_hearts.png' alt='The Image' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";
let king = "<img src='src/king_of_hearts2.png' alt='The Image' id='output' class='w-40 md:w-32 lg:w-40 -ml-28 -rotate-6' />";

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
        
    } else { 
        return randomNumber

    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    if (firstCard === 11){
        var src = one
    }
    else if (firstCard === 2) {
        var src = two
    }
    else if (firstCard === 3) {
        var src = three
    }
    else if (firstCard === 4) {
        var src = four
    }
    else if (firstCard === 5) {
        var src = five
    }
    else if (firstCard === 6) {
        var src = six
    }
    else if (firstCard === 7) {
        var src = seven
    }
    else if (firstCard === 8) {
        var src = eight
    } 
    else if (firstCard === 10) {
        var st = ten
        var t=  jack
        var u=  queen
        var v=  king
        var src = v
    }
    else if (firstCard === 9) {
        var src = nine
    }

    if (secondCard === 11){
        var sr = one
    }
    else if (secondCard === 2) {
        var sr = two
    }
    else if (secondCard === 3) {
        var sr = three
    }
    else if (secondCard === 4) {
        var sr = four
    }
    else if (secondCard === 5) {
        var sr = five
    }
    else if (secondCard === 6) {
        var sr = six
    }
    else if (secondCard === 7) {
        var sr = seven
    }
    else if (secondCard === 8) {
        var sr = eight
    } 
    else if (secondCard === 10) {
        var st = ten
        var t=  jack
        var u=  queen
        var v=  king
        var sr = t
    }
    else if (secondCard === 9) {
        var sr = nine
    }

    let a = src
    let s = sr
    cardsHol = [a, s]
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.innerHTML = "Cards: "
    for (let i = 0; i < cardsHol.length; i++) {
        cardsEl.innerHTML += cardsHol[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (sum < 21) {
        let card = getRandomCard()

        if (card === 11){
            var newsr = one
        }
        else if (card === 2) {
            var newsr = two
        }
        else if (card === 3) {
            var newsr = three
        }
        else if (card === 4) {
            var newsr = four
        }
        else if (card === 5) {
            var newsr = five
        }
        else if (card === 6) {
            var newsr = six
        }
        else if (card === 7) {
            var newsr = seven
        }
        else if (card === 8) {
            var newsr = eight
        } 
        else if (card === 10) {
            var st = ten
            var t=  jack
            var u=  queen
            var v=  king
            var newsr = u
        }
        else if (card === 9) {
            var newsr = nine
        }
        sum += card
        cardsHol.push(newsr)
        renderGame()   
    }
}
