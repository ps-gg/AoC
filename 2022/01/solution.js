import { readFile } from 'fs/promises';

const fileName = 'input.txt';

try {
    const input = (await readFile(fileName, 'utf8')).split('\n');

    console.log(solveA(input));
    console.log(solveB(input));

} catch (err) {
    throw err;
} 

function solveA(input) {
    
    return 0; 
}

function solveB(input) {
    
    return 0;
}