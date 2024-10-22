import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

async function createVipList() {
    try {

        const data = await readFile(join('guests.json'), 'utf8')


        const guests = JSON.parse(data)

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

createVipList()