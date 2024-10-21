import { writeFile } from 'fs/promises';

function generateDiscoResult(input = 'verydisco') {

    if (input === 'verydisco') {
        return input;
    }
    return input.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

async function writeResultToFile(input) {
    const result = generateDiscoResult(input);
    const filePath = 'verydisco-forever.txt';

    try {
        await writeFile(filePath, result);
        console.log(`Result written to ${filePath}`);
    } catch (err) {
        console.error('Error writing to file:', err);
    }
}

const input = process.argv[2] || 'verydisco';
writeResultToFile(input);
