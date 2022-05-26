const prompt = require('prompt-sync')({sigint: true});

console.log("So you wanna roll the dice?")

let rig = Number(prompt("Lets load this dice..what do you want to roll? 1 - 6: "));


let result = Math.ceil(Math.random()*10) // 1-7

/*
//rigged is 6
1 = 1-7
2 = 1-7
3 = 1-7
4 = 1-7
5 = 1-7
6 = 1-7

*/
//if(result > 6){
//    console.log(rig)


if(result === 7){
    console.log(rig)
} else {
    console.log(result)
}








// console.log(Math.round(Math.random()*6))
