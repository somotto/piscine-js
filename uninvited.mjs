import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 5000;

const server = http.createServer(async (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    try {

        if (req.method !== 'POST') {
            res.writeHead(405);
            res.end(JSON.stringify({ error: 'Method not allowed' }));
            return;
        }

        const guestName = req.url.slice(1);

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {

                const guestData = JSON.parse(body);

                try {
                    await fs.mkdir('guests');
                } catch (err) {

                    if (err.code !== 'EEXIST') throw err;
                }

                const filePath = path.join('guests', `${guestName}.json`);
                await fs.writeFile(filePath, JSON.stringify(guestData, null, 2));

                res.writeHead(201);
                res.end(JSON.stringify(guestData));
            } catch (err) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: 'server failed' }));
            }
        });
    } catch (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'server failed' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});