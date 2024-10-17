function interpolation({ step, start, end, callback, duration }) {
    return new Promise((resolve) => {
        const stepSize = (end - start) / (step - 1);
        const delayBetweenSteps = duration / step;

        function executeStep(currentStep) {
            if (currentStep >= step) {
                resolve({ length: 1 });
                return;
            }

            const x = currentStep / (step - 1);
            const y = start + currentStep * stepSize;

            callback([x, y]);

            setTimeout(() => executeStep(currentStep + 1), delayBetweenSteps);
        }

        executeStep(0);
    });
}
