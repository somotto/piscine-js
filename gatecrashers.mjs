import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 5000;

const authorizedUsers = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra'
};

const requestHandler = (req, res) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Authorization Required' }));
        return;
    }

    const [username, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');


    if (!authorizedUsers[username] || authorizedUsers[username] !== password) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Authorization Required' }));
        return;
    }

    if (req.method === 'POST') {
        const guestName = req.url.slice(1);
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {

            const filePath = path.join(process.cwd(), 'guests', `${guestName}.json`);

            fs.writeFile(filePath, body, (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Internal Server Error' }));
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(body);
            });
        });

    } else {

        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});