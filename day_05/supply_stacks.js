// input values from https://adventofcode.com/2022/day/5/input

let blank   = [];
let one     = ["R","G","H","Q","S","B","T","N"];
let two     = ["H","S","F","D","P","Z","J"];
let three   = ["Z","H","V"];
let four    = ["M","Z","J","F","G","H"];
let five    = ["T","Z","C","D","L","M","S","R"];
let six     = ["M","T","W","V","H","Z","J"];
let seven   = ["T","F","P","L","Z"];
let eight   = ["Q","V","W","S"];
let nine    = ["W","H","L","M","T","D","N","C"];

let stacksArray = [blank,one,two,three,four,five,six,seven,eight,nine]

let input = document.querySelector('pre');
let movesArray = input.textContent;
movesArray = movesArray.substring(movesArray.indexOf("\nmove") + 1);
movesArray = movesArray.split(/\n/g);
movesArray.forEach(line =>{
    let lineArray = [];
    line = line.substring(line.indexOf(" ") + 1);
    lineArray[0] = Number(line.match(/[0-9].*(?= from)/g));
    line = line.substring(line.indexOf("m") + 2);
    lineArray[1] = Number(line.match(/[0-9].*(?= to)/g));
    line = line.substring(line.indexOf("o") + 2);
    lineArray[2] = Number(line);
    console.log(lineArray);
    let oldNum = lineArray[1];
    let newNum = lineArray[2];
    let numToMove = lineArray[0];
    let oldStack = stacksArray[oldNum];
    let newStack = stacksArray[newNum];
    let stuffToMove = oldStack.splice(oldStack.length - numToMove);
    console.log(stuffToMove);
    console.log(newStack);
    stuffToMove.forEach(letter=>{
        newStack.push(letter);
    });
    console.log(newStack);
});

console.log(stacksArray);