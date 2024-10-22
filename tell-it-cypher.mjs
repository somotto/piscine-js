import fs from 'node:fs/promises'


const [, , inputFile, operation, outputFile] = process.argv


function validateArgs() {
    if (!inputFile || !operation) {
        console.error('Error: Missing required arguments')
        console.log('Usage: node tell-it-cypher.mjs <inputFile> <encode|decode> [outputFile]')
        process.exit(1)
    }

    if (!['encode', 'decode'].includes(operation)) {
        console.error('Error: Second argument must be either "encode" or "decode"')
        process.exit(1)
    }
}


async function processFile() {
    try {

        validateArgs()


        const data = await fs.readFile(inputFile)

        let result
        if (operation === 'encode') {

            result = Buffer.from(data).toString('base64')
        } else {

            result = Buffer.from(data.toString(), 'base64').toString('utf-8')
        }

        const defaultOutput = operation === 'encode' ? 'cypher.txt' : 'clear.txt'
        const finalOutput = outputFile || defaultOutput

        await fs.writeFile(finalOutput, result)
        console.log(`File processed successfully. Output saved to ${finalOutput}`)

    } catch (error) {
        console.error('Error:', error.message)
        process.exit(1)
    }
}

processFile()