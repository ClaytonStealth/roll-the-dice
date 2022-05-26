const prompt = require('prompt-sync')({sigint: true});


let choice = (prompt("Do you want to roll the dice?: Yes or No? "));

if (choice === "yes"){
    console.log("You rolled: ")
console.log(Math.ceil(Math.random()*6))
} else if (choice === "no") {
    console.log("LAME!")
}