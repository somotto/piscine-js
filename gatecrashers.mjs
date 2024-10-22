import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 5000;

const GUESTS_DIR = process.cwd();

const authorized_users = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra'
};

const parse_auth_header = (auth_header) => {
    if (!auth_header || !auth_header.startsWith('Basic ')) return null;
    const credentials = auth_header.slice(6);
    const [username, password] = Buffer.from(credentials, 'base64').toString().split(':')
    return { username, password }
}

const server = http.createServer((req, res) => {
    const auth = parse_auth_header(req.headers.authorization);
    if (!auth || !authorized_users[auth.username] || authorized_users[auth.username] !== auth.password) {
        res.writeHead(401, {
            'Content-Type': 'application/json',
            'WWW-Authenticate': 'Basic realm="Authorization Required"'
        });
        res.end(JSON.stringify({ error: 'Authorization Required' }))
        return;
    }
    if (req.method === 'POST') {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', async () => {
            try {
                if (!body) {
                    body = {
                        answer: 'yes',
                        drink: 'juice',
                        food: 'pizza'
                    }
                }

                const guest_name = req.url.slice(1);

                const guest_dir = path.join(GUESTS_DIR, 'guests');
                await fs.mkdir(guest_dir, { recursive: true });

                const file_path = path.join(guest_dir, `${guest_name}.json`);
                await fs.writeFile(file_path, JSON.stringify(body, null, 2));
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(body))

            } catch (e) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: 'Internal Server Error' }))
            }
        })
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Method not allowed' }))
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});