// run on https://adventofcode.com/2022/day/6/input

let input = document.querySelector('pre');
const bufferArray = Array.from(input.textContent);

let markAfter = 0;

// // PT 1
// for (let a = 0; a < bufferArray.length; a++) {
//     let one = bufferArray[a];
//     let two = bufferArray[a + 1];
//     let three = bufferArray[a + 2];
//     let four = bufferArray[a + 3];
//     if ( one !== two && one !== three && one !== four && two !== three && two !== four && three !== four) {
//         markAfter = a + 4;
//         break;
//     } else {
//         continue;
//     };
// };

// console.log(markAfter);


// PT 2
for (let a = 0; a < bufferArray.length; a++) {
    let one = bufferArray[a];
    let two = bufferArray[a + 1];
    let three = bufferArray[a + 2];
    let four = bufferArray[a + 3];
    let five = bufferArray[a + 4];
    let six = bufferArray[a + 5];
    let seven = bufferArray[a + 6];
    let eight = bufferArray[a + 7];
    let nine = bufferArray[a + 8];
    let ten = bufferArray[a + 9];
    let eleven = bufferArray[a + 10];
    let twelve = bufferArray[a + 11];
    let thirteen = bufferArray[a + 12];
    let fourteen = bufferArray[a + 13];
    if ( 
    one !== two
    && one !== three
    && one !== four
    && one !== five
    && one !== six
    && one !== seven
    && one !== eight
    && one !== nine
    && one !== ten
    && one !== eleven
    && one !== twelve
    && one !== thirteen
    && one !== fourteen
    && two !== three
    && two !== four
    && two !== five
    && two !== six
    && two !== seven
    && two !== eight
    && two !== nine
    && two !== ten
    && two !== eleven
    && two !== twelve
    && two !== thirteen
    && two !== fourteen
    && three !== four
    && three !== five
    && three !== six
    && three !== seven
    && three !== eight
    && three !== nine
    && three !== ten
    && three !== eleven
    && three !== twelve
    && three !== thirteen
    && three !== fourteen
    && four !== five
    && four !== six
    && four !== seven
    && four !== eight
    && four !== nine
    && four !== ten
    && four !== eleven
    && four !== twelve
    && four !== thirteen
    && four !== fourteen
    && five !== six
    && five !== seven
    && five !== eight
    && five !== nine
    && five !== ten
    && five !== eleven
    && five !== twelve
    && five !== thirteen
    && five !== fourteen
    && six !== seven
    && six !== eight
    && six !== nine
    && six !== ten
    && six !== eleven
    && six !== twelve
    && six !== thirteen
    && six !== fourteen
    && seven !== eight
    && seven !== nine
    && seven !== ten
    && seven !== eleven
    && seven !== twelve
    && seven !== thirteen
    && seven !== fourteen
    && eight !== nine
    && eight !== ten
    && eight !== eleven
    && eight !== twelve
    && eight !== thirteen
    && eight !== fourteen
    && nine !== ten
    && nine !== eleven
    && nine !== twelve
    && nine !== thirteen
    && nine !== fourteen
    && ten !== eleven
    && ten !== twelve
    && ten !== thirteen
    && ten !== fourteen
    && eleven !== twelve
    && eleven !== thirteen
    && eleven !== fourteen
    && twelve !== thirteen
    && twelve !== fourteen
    && thirteen !== fourteen) {
        markAfter = a + 14;
        break;
    } else {
        continue;
    };
};

console.log(markAfter);