function interpolation({ step, start, end, callback, duration }) {
    return new Promise((resolve) => {
        const stepSize = (end - start) / step;
        const delayBetweenSteps = duration / step;

        let completedSteps = 0;

        for (let i = 0; i < step; i++) {
            const x = i / (step - 1);
            const y = start + i * stepSize;

            setTimeout(() => {
                callback([x, y]);
                completedSteps++;
                if (completedSteps === step) {
                    resolve();
                }
            }, i * delayBetweenSteps);
        }
    });
}

