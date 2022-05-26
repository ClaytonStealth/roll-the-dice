const prompt = require('prompt-sync')({sigint: true});

console.log("So you wanna roll the dice?")

let sides = Number(prompt("How many sides do you want?: "));

console.log(Math.ceil(Math.random()*sides))

