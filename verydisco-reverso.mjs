import { readFileSync } from 'fs';
const filename = process.argv.slice(2)[0];


const veryDiscoWord = (word) => {
    const mid = Math.floor(word.length / 2);
    return word.slice(mid) + word.slice(0, mid)
}



let fileContent;




try {
    fileContent = readFileSync(filename, 'utf-8');
} catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
}


const discoSentence = fileContent
        .split(' ')
        .map(veryDiscoWord)
        .join(' ');


console.log(discoSentence)