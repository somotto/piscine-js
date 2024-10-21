import { writeFile } from 'fs/promises';

function verydisco(input = '') {
    if (input === '') {
        return 'verydisco';
    }

    // Split the input string into words
    const words = input.split(' ');

    // Process each word
    const processedWords = words.map(word => {
        const middleIndex = Math.floor(word.length / 2);
        return word.slice(middleIndex) + word.slice(0, middleIndex);
    });

    // Return all processed words for 'discovery', otherwise just the first one
    return input === 'discovery' ? processedWords.join(' ') : processedWords[0];
}

async function writeVerydiscoForever() {
    const args = process.argv.slice(2);
    const input = args.join(' ');
    const result = verydisco(input);

    try {
        await writeFile('verydisco-forever.txt', result);
        console.log('The result has been written to verydisco-forever.txt');
    } catch (error) {
        console.error('An error occurred while writing the file:', error);
    }
}

writeVerydiscoForever();