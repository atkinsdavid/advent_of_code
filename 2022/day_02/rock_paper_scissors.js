// to be run on https://adventofcode.com/2022/day/2/input

// For Part 1, a=oppRock, b=oppPaper, c=oppScissors, x=myRock, y=mypaper, z=myScissors
let input = document.querySelector('pre');
const rpsArray = input.textContent.split(/\n/g);
let scoreTotal = 0
for (let i = 0; i <= (rpsArray.length - 1) ; i++) {
    let roundScore = 0;
    if (rpsArray[i] == 'A X') {
        roundScore = 4;
    } else if (rpsArray[i] == 'A Y') {
        roundScore = 8;
    } else if (rpsArray[i] == 'A Z') {
        roundScore = 3;
    } else if (rpsArray[i] == 'B X') {
        roundScore = 1;
    } else if (rpsArray[i] == 'B Y') {
        roundScore = 5;
    } else if (rpsArray[i] == 'B Z') {
        roundScore = 9;
    } else if (rpsArray[i] == 'C X') {
        roundScore = 7;
    } else if (rpsArray[i] == 'C Y') {
        roundScore = 2;
    } else if (rpsArray[i] == 'C Z') {
        roundScore = 6;
    } else {
        console.log("WTF?");
    };
    // console.log(`Round: ${roundScore}`);
    scoreTotal += roundScore;
}
console.log(scoreTotal);


// For Part 2, a=oppRock, b=oppPaper, c=oppScissors, x=myLose, y=myDraw, z=myWin
let input = document.querySelector('pre');
const rpsArray = input.textContent.split(/\n/g);
let scoreTotal = 0
for (let i = 0; i <= (rpsArray.length - 1) ; i++) {
    let roundScore = 0;
    if (rpsArray[i] == 'A X') {
        roundScore = 3;
    } else if (rpsArray[i] == 'A Y') {
        roundScore = 4;
    } else if (rpsArray[i] == 'A Z') {
        roundScore = 8;
    } else if (rpsArray[i] == 'B X') {
        roundScore = 1;
    } else if (rpsArray[i] == 'B Y') {
        roundScore = 5;
    } else if (rpsArray[i] == 'B Z') {
        roundScore = 9;
    } else if (rpsArray[i] == 'C X') {
        roundScore = 2;
    } else if (rpsArray[i] == 'C Y') {
        roundScore = 6;
    } else if (rpsArray[i] == 'C Z') {
        roundScore = 7;
    } else {
        console.log("WTF?");
    };
    // console.log(`Round: ${roundScore}`);
    scoreTotal += roundScore;
}
console.log(scoreTotal);