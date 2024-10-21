import { writeFile } from 'fs/promises';

function generateDiscoResult() {

    return 'verydisco';
}

async function writeResultToFile() {
    const result = generateDiscoResult();
    const filePath = 'verydisco-forever.txt';

    try {

        await writeFile(filePath, result);
        console.log(`Result written to ${filePath}`);
    } catch (err) {
        console.error('Error writing to file:', err);
    }
}

writeResultToFile();
