import { writeFile } from 'fs/promises';

function verydisco(input) {
    let result = '';
    for (let i = 0; i < input.length; i += 2) {
        if (i + 1 < input.length) {
            result += input[i + 1] + input[i];
        } else {
            result += input[i];
        }
    }
    return result;
}

async function writeVerydiscoForever(input) {
    const result = verydisco(input);

    try {
        await writeFile('verydisco-forever.txt', result);
        console.log('The result has been written to verydisco-forever.txt');
        return result;
    } catch (error) {
        console.error('An error occurred while writing the file:', error);
        throw error; 
    }
}


if (import.meta.url === `file://${process.argv[1]}`) {
    const input = process.argv[2] || 'verydisco';
    writeVerydiscoForever(input);
}

export { writeVerydiscoForever };