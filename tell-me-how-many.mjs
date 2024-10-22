import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

async function countDirectoryEntries(dirPath = '.') {
    try {

        const absolutePath = resolve(dirPath)


        const files = await readdir(absolutePath)


        console.log(files.length)
    } catch (error) {
        console.error('Error reading directory:', error.message)
        process.exit(1)
    }
}

const dirPath = process.argv[2]
countDirectoryEntries(dirPath)