// to be run on https://adventofcode.com/2022/day/4/input

let input = document.querySelector('pre');
const spaceArray = input.textContent.split(/\n/g);

let totalContains = 0;

spaceArray.forEach(team => {
    let numPairs = team.split(',')
    let newArray = [];
    let counter = 0;
    numPairs.forEach(pair => {
        newArray[counter] = pair.match(/[0-9].*(?=-)/g) *1;
        counter ++
        newArray[counter] = pair.match(/(?<=-).*/g) *1;
        counter ++
    });
    let oneLow = newArray[0];
    let oneHigh = newArray[1];
    let twoLow = newArray[2];
    let twoHigh = newArray[3];
    let elfOne =[];
    let elfTwo = [];
    for (let a = oneLow; a <= oneHigh; a++) {
        elfOne.push(a);
    };
    for (let b = twoLow; b <= twoHigh; b++) {
        elfTwo.push(b);
    };
    let contains = 0;
    
    // // Use the code below for Pt 1
    // for (let c = 0; c < elfOne.length; c++) {
    //     if (elfTwo.includes(elfOne[c])) {
    //         contains++;
    //     } else {
    //         contains = 0;
    //         break;
    //     };
    // };

    // if (contains > 0) {
    //     totalContains++;
    // } else {
    //     for (let d = 0; d < elfTwo.length; d++) {
    //         if (elfOne.includes(elfTwo[d])) {
    //             contains++;
    //         } else {
    //             contains = 0;
    //             break;
    //         };
    //     };

    //     if (contains > 0) {
    //         totalContains++;
    //     };
    // };

    // Use the code below for pt 2
    for (let c = 0; c < elfOne.length; c++) {
        if (elfTwo.includes(elfOne[c])) {
            contains++;
        };
    };

    if (contains > 0) {
        totalContains++;
    } else {
        for (let d = 0; d < elfTwo.length; d++) {
            if (elfOne.includes(elfTwo[d])) {
                contains++;
            };
        };

        if (contains > 0) {
            totalContains++;
        };
    };

});

console.log(totalContains);