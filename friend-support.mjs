import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 5000;

const server = http.createServer(async (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    try {

        const guestName = req.url.slice(1);

        try {
            const guestData = await fs.readFile(
                path.join('guests', `${guestName}.json`),
                'utf-8'
            );

            res.statusCode = 200;
            res.end(guestData);

        } catch (error) {
            if (error.code === 'ENOENT') {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: 'guest not found' }));
            } else {

                throw error;
            }
        }

    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'server failed' }));
    }
});


server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});