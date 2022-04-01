let min = 0
let max = 100
let numberToGuess = between(min, max)
let erraten = 0
let inputNumber = 0
let amountOfSteps = 0
let j = "Zahl zwischen " + min + " und " + max + ":  "
const prompt = require('prompt-sync')();

function between(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

while(erraten == 0){
    inputNumber = prompt(j);
    if(inputNumber == numberToGuess){
        console.log("Sie haben die Zahl erraten. Anzahl Schritte: " + amountOfSteps);
        erraten = 1;
    }
    else if (inputNumber > numberToGuess){
            console.log("Die eingegebene Nummer ist zu groß!")
        } 
    else if (inputNumber == "x"){
        erraten = 1;
    }
    else {
        console.log("Die eingegebene Nummer ist zu klein!")
    }
    amountOfSteps++;
}

