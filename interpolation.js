function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / step;
    const delayBetweenSteps = duration / step;

    for (let i = 0; i < step; i++) {
        const x = i / (step - 1);
        const y = start + i * stepSize;

        setTimeout(() => {
            callback([x, y]);
        }, i * delayBetweenSteps);
    }
}

