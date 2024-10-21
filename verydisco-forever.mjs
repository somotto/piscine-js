import { writeFile } from 'fs/promises';

function generateVerydiscoResult() {
    return 'verydisco';
}

async function writeVerydiscoForever() {
    const result = generateVerydiscoResult();

    try {
        await writeFile('verydisco-forever.txt', result);
        console.log('The result has been written to verydisco-forever.txt');
        return result; // Return the result for testing purposes
    } catch (error) {
        console.error('An error occurred while writing the file:', error);
        throw error; // Rethrow the error for proper handling in tests
    }
}

// Only run the function if this script is being run directly (not imported as a module)
if (import.meta.url === `file://${process.argv[1]}`) {
    writeVerydiscoForever();
}

export { writeVerydiscoForever };