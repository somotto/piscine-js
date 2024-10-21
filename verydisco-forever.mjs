function transformInput(input) {
    return input.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

import { writeFile } from 'fs/promises';

async function main() {
    const input = "kiss cool";

    const output = transformInput(input);
    await writeFile('verydisco-forever.txt', output);
    console.log('Output written to verydisco-forever.txt');
}

main();