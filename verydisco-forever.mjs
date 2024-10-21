import { writeFileSync } from 'fs';

const veryDiscoWord = (word) => {
    const mid = Math.ceil(word.length / 2);
    return word.slice(mid) + word.slice(0, mid)
}

function veryDisco() {
    const args = process.argv.slice(2)[0];

    const discoSentence = args
        .split(' ')
        .map(veryDiscoWord)
        .join(' ');

    try {
        writeFileSync('verydisco-forever.txt', discoSentence, 'utf-8');
    } catch (error) {
        console.error('Error writing to file:', error);
        process.exit(1);
    }

}
veryDisco();