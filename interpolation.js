function interpolation({ step, start, end, callback, duration }) {
    return new Promise((resolve) => {
        const stepSize = (end - start) / step;
        const delayBetweenSteps = duration / step;

        function executeStep(currentStep) {
            if (currentStep >= step) {
                setTimeout(() => resolve({ length: 1 }), delayBetweenSteps);
                return;
            }

            const x = currentStep / (step - 1);
            const y = start + currentStep * stepSize;

            setTimeout(() => {
                callback([x, y]);
                executeStep(currentStep + 1);
            }, delayBetweenSteps);
        }

        executeStep(0);
    });
}
