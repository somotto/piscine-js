import { writeFile } from 'fs/promises';

function generateVerydiscoResult() {
    const discoWords = ['Boogie', 'Funk', 'Groove', 'Dance', 'Disco', 'Beat', 'Rhythm'];
    const discoAdjectives = ['Groovy', 'Funky', 'Soulful', 'Electric', 'Shiny', 'Flashy'];

    let result = '';
    for (let i = 0; i < 5; i++) {
        const randomWord = discoWords[Math.floor(Math.random() * discoWords.length)];
        const randomAdjective = discoAdjectives[Math.floor(Math.random() * discoAdjectives.length)];
        result += `${randomAdjective} ${randomWord}\n`;
    }

    return result;
}

async function writeVerydiscoForever() {
    const result = generateVerydiscoResult();

    try {
        await writeFile('verydisco-forever.txt', result);
        console.log('The result has been written to verydisco-forever.txt');
    } catch (error) {
        console.error('An error occurred while writing the file:', error);
    }
}

writeVerydiscoForever();