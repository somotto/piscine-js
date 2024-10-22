import { readdir, readFile } from 'fs/promises'

async function tellMeWho(dirPath) {
    try {

        const files = await readdir(dirPath)

        const guestPromises = files.map(file => readFile(`${dirPath}/${file}`, 'utf8'))
        const guestContents = await Promise.all(guestPromises)

        const formattedGuests = guestContents
            .map(content => formatName(content))
            .sort()

        formattedGuests.forEach((guest, index) => {
            console.log(`${index + 1}. ${guest}`)
        })
    } catch (error) {
        console.error('Error:', error.message)
    }
}

const dirPath = process.argv[2]
tellMeWho(dirPath)