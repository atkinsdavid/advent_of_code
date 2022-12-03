// Run this code in the console from https://adventofcode.com/2022/day/1/input

let input = document.querySelector('pre');
const elfArray = input.textContent.split(/\n/g);
let elfCalTotals = [];
// for (let i = 0; i < 1 ; i++) {
let currentIndex = 0;
let totalCounter = 0;
for (let i = 0; i <= (elfArray.length - 1) ; i++) {
    elfArray[i] = elfArray[i] * 1;
    if (elfArray[i] == 0) {
        currentIndex ++;
        totalCounter = 0;
        continue;
    };
    totalCounter += elfArray[i];
    elfCalTotals[currentIndex] = totalCounter;
};

elfCalTotals.sort();
let topThree = elfCalTotals[(elfCalTotals.length - 1)] + elfCalTotals[(elfCalTotals.length - 2)] + elfCalTotals[(elfCalTotals.length - 3)];
console.log(topThree);
