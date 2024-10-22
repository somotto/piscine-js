import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

async function createVipList(dirName = '.') {
    try {

        let guests = []
        try {
            const data = await readFile(join(dirName, 'guests.json'), 'utf8')
            guests = JSON.parse(data)
        } catch (err) {

            if (err.code === 'ENOENT') {
                guests = []
            } else {
                throw err
            }
        }

        const vipGuests = guests
            .filter(guest => guest.response === 'YES')
            .sort((a, b) => {
                if (a.lastname !== b.lastname) {
                    return a.lastname.localeCompare(b.lastname)
                }
                return a.firstname.localeCompare(b.firstname)
            })

        const vipList = vipGuests
            .map((guest, index) =>
                `${index + 1}. ${guest.lastname} ${guest.firstname}`
            )
            .join('\n')

        await writeFile('vip.txt', vipList)

    } catch (error) {
        console.error('Error:', error)
    }
}

const dirName = process.argv[2]
createVipList(dirName)