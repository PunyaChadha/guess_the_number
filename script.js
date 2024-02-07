let randomNumber = parseInt(Math.round(Math.random()*100 + 1));
console.log(randomNumber);

let submit = document.querySelector('form')
let userGuess = document.querySelector('input');
let guesses = document.querySelector('#array')
let triesLeft = document.querySelector('#number')
let note = document.querySelector('#msgs')

let playGame = true
let tries = 1

let p = document.createElement('h2')

let newButton = document.createElement('button')
newButton.style.width = '250px';
newButton.style.height = '50px';
newButton.style.borderRadius = '30px';
newButton.style.justifyContent = 'center';
newButton.style.marginLeft = '175px';
newButton.style.marginTop = '5px';
newButton.style.fontSize = '30px';
newButton.style.cursor = 'pointer';
newButton.style.backgroundColor = 'antiquewhite';
newButton.style.color = 'blueviolet'
newButton.id = 'startOver'

if (playGame) {
    submit.addEventListener('submit', function (e) {
        e.preventDefault();
        checkGuess(userGuess);
    })
}

const checkGuess = function (userGuess) {
    
    let num = parseInt(userGuess.value);
    guesses.innerHTML += `${num}, `;
    userGuess.value = '';

    if((10-tries)<=0){
        displayMessage(`<span style="font-size:30px">OOPS!! You ran out of guesses.</br>The Number was '${randomNumber}'</span>`);
        p.style.color = 'red';
        endGame();
    }
    else if(num<1 || num>100){
        if(num<1){
            displayMessage("Please enter a number greater than '0' ");
        }
        else{
            displayMessage("Please enter a number less than '101' ");
        }
    }
    else{
        if (randomNumber === num) {
            displayMessage(`<strong style="font-size:35px">!!! CONGRATULATIONS !!!</strong></br>You guessed the number in ${tries} tries.`);
            p.style.color = 'green';
            document.getElementById('number').style.color = 'green';
            endGame()
        }
        else{
            if((num - randomNumber) == 1 || (num - randomNumber) == -1){
                displayMessage("SOO CLOSEE !!");
            }
            else if((num - randomNumber) < -20){
                displayMessage("Guessed number is too LOW");
            }
            else if((num - randomNumber) > 20){
                displayMessage("Guessed number is too HIGH");
            }
            else if((num - randomNumber) >= -20 && (num - randomNumber)<0){
                displayMessage("Guessed number is LOW");
            }
            else if((num - randomNumber) <= 20 && (num - randomNumber)>0){
                displayMessage("Guessed number is HIGH");
            }
            
        }
    }
}
let displayMessage = function (message) {
    p.innerHTML = `<span>${message}</span>`;
    note.appendChild(p);

    triesLeft.innerHTML = `${10-tries}`;
    tries++;
    if((10-tries)<3){
        document.getElementById('number').style.color = 'red';
    }
}
const endGame = function () {
    userGuess.value = '';
    userGuess.setAttribute('disabled', '');
    playGame = false;
    newButton.innerHTML = "New Game";
    block.appendChild(newButton);
    newGame();
}
const newGame = function () {
    const start = document.querySelector('#startOver');
    start.addEventListener('click', () => {
        randomNumber = parseInt(Math.round(Math.random()*100 + 1));
        console.log(randomNumber);
        tries = 0;
        displayMessage('');
        guesses.innerHTML = '';
        document.getElementById('number').style.color = 'blueviolet';
        p.style.color = 'black';
        userGuess.removeAttribute('disabled');
        // newButton.remove();
        playGame = true;
    })
}

