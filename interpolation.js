function interpolation({ step, start, end, callback, duration }) {

    const increment = (end - start) / step;

    const delay = duration / step;

    for (let i = 0; i < step; i++) {

        const currentPoint = start + (increment * i);

        setTimeout(() => {
            const distance = i / (step - 1);
            callback([distance, currentPoint]);
        }, delay * i);
    }
}

