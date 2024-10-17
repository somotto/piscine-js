function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function interpolation({ step, start, end, callback, duration }) {
    const increment = (end - start) / step;
    const delay = duration / step;
    const results = [];

    for (let i = 0; i < step; i++) {
        const currentPoint = start + (increment * i);
        const distance = i / (step - 1);


        results.push([distance, currentPoint]);


        callback([distance, currentPoint]);

        await sleep(delay);
    }

    return results;
}

