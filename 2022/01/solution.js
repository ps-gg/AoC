import { readFile } from 'fs/promises';

const fileName = 'input.txt';

try {
    const input = (await readFile(fileName, 'utf8')).split('\n');

    console.log(solveA(input));
    console.log(solveB(input));

} catch (err) {
    throw err;
} 
 // Going oldschool for this one
function solveA(input) {
    let one = 0;
    let curr = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '') {
            if (curr > one) {
                one = curr;
            }
            curr = 0;
        } else {
            curr += parseInt(input[i]);
        }
    }
    return one; 
}

function solveB(input) {
    let curr = 0;
    const elfs = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '') {
            elfs.push(curr);
            curr = 0;
        } else {
            curr += parseInt(input[i]);
        }
    }   
    elfs.sort((a, b) => b - a);
    return elfs[0] + elfs[1] + elfs[2];
}