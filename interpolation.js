function interpolation({ step, start, end, callback, duration }) {
    return new Promise((resolve) => {
        const stepSize = (end - start) / step;
        const delayBetweenSteps = duration / step;

        let callCount = 0;

        for (let i = 0; i < step; i++) {
            const x = i / (step - 1);
            const y = start + i * stepSize;

            setTimeout(() => {
                callback([x, y]);
                callCount++;

                if (i === step - 1) {
                    setTimeout(() => {
                        resolve({ length: callCount });
                    }, 0);
                }
            }, i * delayBetweenSteps);
        }
    });
}
