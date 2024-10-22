import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const AUTHORIZED_USERS = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra'
};

function authenticateUser(authHeader) {
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return false;
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');

    return AUTHORIZED_USERS[username] === password;
}

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');


    if (req.method !== 'POST') {
        res.writeHead(405);
        res.end('Method Not Allowed');
        return;
    }


    const authHeader = req.headers.authorization;
    if (!authenticateUser(authHeader)) {
        res.writeHead(401);
        res.end('Authorization Required');
        return;
    }


    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        try {

            const guestData = JSON.parse(body);


            const guestName = req.url.slice(1);


            if (!fs.existsSync('guests')) {
                fs.mkdirSync('guests');
            }

            const filePath = path.join('guests', `${guestName}.json`);
            fs.writeFileSync(filePath, JSON.stringify(guestData, null, 2));

            res.writeHead(200);
            res.end(JSON.stringify(guestData, null, 2));
        } catch (error) {
            res.writeHead(400);
            res.end(JSON.stringify({ error: 'Invalid JSON data' }));
        }
    });
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});