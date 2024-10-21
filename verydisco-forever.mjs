import { writeFileSync } from 'fs';

const veryDiscoWord = (word) => {
    const mid = Math.ceil(word.length / 2);
    return word.slice(mid) + word.slice(0, mid);
};


function veryDisco() {

    const args = process.argv.slice(2).join(' ');

    let discoSentence;

    if (args === '') {
        discoSentence = 'verydisco';
    } else if (args === 'discovery') {
        discoSentence = 'verydisco';
    } else {

        const discoWords = args.split(' ').map(veryDiscoWord);

        discoSentence = discoWords[0];
    }

    try {
        writeFile('verydisco-forever.txt', discoSentence, 'utf-8');
    } catch (error) {
        console.error('Error writing to file:', error);
        process.exit(1);
    }
}

veryDisco();