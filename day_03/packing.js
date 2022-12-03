// to run on https://adventofcode.com/2022/day/3/input

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let input = document.querySelector('pre');
const packArray = input.textContent.split(/\n/g);
let sum = 0;

for (let i = 0; i < packArray.length ; i++) {
    let thisPack = packArray[i];
    let packSplit = thisPack.length / 2;
    let found = '';
    let priority = 0;
    for (let a = 0; a < packSplit; a++) {
        let letter = thisPack[a];
        for (let b = packSplit; b < thisPack.length; b++) {
            if (letter == thisPack[b]) {
                found = letter;
                // console.log(found);
                break
            };
        };
        if (found !== '') {
            break
        };
    };
    
    for (let l = 0; l < alpha.length; l++){
        if (found == alpha[l]){
            priority = l + 1;
            break
        };
    };

    sum += priority;
};

console.log(sum);


// PT 1
for (let i = 0; i < packArray.length ; i++) {
    let thisPack = packArray[i];
    let packSplit = thisPack.length / 2;
    let found = '';
    let priority = 0;
    for (let a = 0; a < packSplit; a++) {
        let letter = thisPack[a];
        for (let b = packSplit; b < thisPack.length; b++) {
            if (letter == thisPack[b]) {
                found = letter;
                // console.log(found);
                break
            };
        };
        if (found !== '') {
            break
        };
    };
    
    for (let l = 0; l < alpha.length; l++){
        if (found == alpha[l]){
            priority = l + 1;
            break
        };
    };

    sum += priority;
};

console.log(sum);