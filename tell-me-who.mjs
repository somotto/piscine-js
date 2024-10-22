import { readdir } from 'fs/promises'
import { join } from 'path'
import fs from 'fs/promises'

async function tellMeWho(dirPath) {
    try {

        const absolutePath = join(process.cwd(), dirPath)

        const files = await readdir(absolutePath)

        const names = files
            .filter(file => file.endsWith('.json'))
            .map(file => {

                const nameWithoutExt = file.slice(0, -5)

                const [firstName, lastName] = nameWithoutExt.split('_')

                return `${lastName} ${firstName}`
            })
            .sort()

        names.forEach((name, index) => {
            console.log(`${index + 1}. ${name}`)
        })
    } catch (error) {
        console.error('Error:', error.message)
    }
}

const dirPath = process.argv[2]
tellMeWho(dirPath)