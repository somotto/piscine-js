import { readdir } from 'fs/promises'

async function tellMeWho(dirPath) {
    try {

        const files = await readdir(dirPath)

        const names = files
            .filter(file => file.endsWith('.json'))
            .map(file => {
                const [firstName, lastName] = file.slice(0, -5).split('_')
                return `${lastName} ${firstName}`
            })
            .sort()

        const output = names
            .map((name, index) => `${index + 1}. ${name}`)
            .join('\n')

        process.stdout.write(output)
    } catch (error) {
        console.error('Error:', error.message)
    }
}

const dirName = process.argv[2]
tellMeWho(dirName)