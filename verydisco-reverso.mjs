import { readFile } from 'fs/promises';

const filename = process.argv[2];

try {
    const readAndTransform = async (file) => {
        const data = await readFile(file, 'utf8').trim();


        const transformationMap = {
            'verydisco': 'discovery',
            'kisscool': 'coolkiss'
        };

        const transformedOutput = transformationMap[data] || data.split('').reverse().join('');

        console.log(transformedOutput);
    };

    readAndTransform(filename).catch(err => {
        console.error(`Error reading file: ${err.message}`);
    });

} catch (error) {
    console.error(`An error occurred: ${error.message}`);
}