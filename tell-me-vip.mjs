import { readFile, writeFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'

async function createVipList(dirName = '.') {
    try {

        const files = await readdir(dirName)


        const guestFiles = files.filter(file => file.endsWith('.json'))


        const vipGuests = []

        for (const file of guestFiles) {
            try {

                const data = await readFile(join(dirName, file), 'utf8')
                const guestData = JSON.parse(data)

                if (guestData.answer.toLowerCase() === 'yes') {

                    const [firstname, lastname] = file.replace('.json', '').split('_')
                    vipGuests.push({
                        firstname,
                        lastname
                    })
                }
            } catch (err) {
                console.error(`Error processing ${file}:`, err)
            }
        }

        const sortedGuests = vipGuests.sort((a, b) => {
            if (a.lastname !== b.lastname) {
                return a.lastname.localeCompare(b.lastname)
            }
            return a.firstname.localeCompare(b.firstname)
        })

        const vipList = sortedGuests
            .map((guest, index) =>
                `${index + 1}. ${guest.lastname} ${guest.firstname}`
            )
            .join('\n')

        await writeFile('vip.txt', vipList)

    } catch (error) {
        console.error('Error:', error)

        await writeFile('vip.txt', '')
    }
}

const dirName = process.argv[2]
createVipList(dirName)