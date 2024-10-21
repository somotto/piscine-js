function verydisco() {
    return 'verydisco';
}

import { writeFile } from 'fs/promises';

async function main() {
    try {
        const output = verydisco();
        await writeFile('verydisco-forever.txt', output);
        console.log('Output written to verydisco-forever.txt');
    } catch (error) {
        console.error('Error writing to file:', error);
    }
}

main();