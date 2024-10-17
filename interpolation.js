function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function interpolation({ step, start, end, callback, duration }) {
    const increment = (end - start) / step;
    const delay = duration / step;

    for (let i = 0; i < step; i++) {
        const currentPoint = start + (increment * i);
        const distance = i / (step - 1);
        callback([distance, currentPoint]);

        await sleep(delay);
    }
}
