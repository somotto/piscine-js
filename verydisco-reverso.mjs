import { readFile } from 'fs/promises';

const filename = process.argv[2];

try {

    const readAndReverse = async (file) => {

        const data = await readFile(file, 'utf8');

        const reversedContent = data.split('').reverse().join('');

        const mid = Math.floor(reversedContent.length / 2);
        const finalOutput = `${reversedContent.slice(mid)}${reversedContent.slice(0, mid)}`;

        console.log(finalOutput);
    };

    readAndReverse(filename).catch(err => {
        console.error(`Error reading file: ${err.message}`);
    });

} catch (error) {
    console.error(`An error occurred: ${error.message}`);
}