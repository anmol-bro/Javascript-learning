const form = document.querySelector('form');
const random_number = Math.floor( (Math.random() * 100)+1)
const lowOrHi = document.querySelector('.lowOrHi')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
let previous_guesses = []
//console.log(typeof(remaining.innerHTML))
//console.log(random_number)


form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(parseInt(document.querySelector('#guessField').value))
    const guessed_number = validateInput(parseInt(document.querySelector('#guessField').value))
    if(guessed_number===random_number){
        displayMsg(`You Guessed It Right`)
    }
    else if(guessed_number>random_number){
        displayMsg(`You Guessed a higher Number`)
    }
    else if(guessed_number<random_number){
        displayMsg(`You Guessed a lower Number`)
    }
    if(parseInt(remaining.innerHTML)>0){
        remaining.innerHTML = `${parseInt(remaining.innerHTML)-1}`
    }
})

function displayMsg(text){
    lowOrHi.innerHTML = `<h2>${text}</h2>`
} 

function displayGuesses(guess){
    guesses.innerHTML = `${guess}`
}

function validateInput(num){
    if(num<=0 || isNaN(num)==true){
        alert(`Enter a Positive Integer`)
    }
    else if(num>100){
        alert(`Enter a Integer between 1-100`)
    }
    else{
        if(previous_guesses.length>=11){
            displayGuesses(previous_guesses)
            displayMsg(`Game Over. Random number was ${random_number}`)
        }
        else{
            previous_guesses.push(num)
            displayGuesses(previous_guesses)
            return num
        }
    }
}
