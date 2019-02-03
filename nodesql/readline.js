const readline = require('readline');
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let num1 = Math.floor((Math.random() * 10 + 1));
let num2 = Math.floor((Math.random() * 10 + 1));

let answer = num1 + num2;

r1.question(`what is ${num1} + ${num2}? \n`, (userInput)=>{
    console.log(userInput.trim() == answer){
        r1.close();
    }
});

r1.on('close',()=>{
    console.log('Correct');
});

