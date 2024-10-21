async function queryServers(serverName, q) {
    const mainUrl = `/${serverName}?q=${q}`;
    const backupUrl = `/${serverName}_backup?q=${q}`;

    return Promise.race([
        getJSON(mainUrl),
        getJSON(backupUrl)
    ]);
}

async function gougleSearch(q) {
    const servers = ['web', 'image', 'video'];

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('timeout')), 80);
    });

    try {
        const results = await Promise.race([
            Promise.all(servers.map(server => queryServers(server, q))),
            timeoutPromise
        ]);

        return {
            web: results[0],
            image: results[1],
            video: results[2]
        };
    } catch (error) {
        if (error.message === 'timeout') {
            throw error;
        }
        throw new Error('An unexpected error occurred');
    }
}