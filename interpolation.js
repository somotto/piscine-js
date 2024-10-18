function interpolation({ step, start, end, callback, duration }) {

    const stepSize = (end - start) / step;

    const delay = duration / step;

    for (let i = 1; i <= step; i++) {

        const x = i / step;
        const y = i * delay;

        setTimeout(() => {
            callback([x, y]);
        }, i * delay);
    }
}
