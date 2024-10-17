function interpolation({ step, start, end, callback, duration }) {
    return new Promise((resolve) => {
        const results = [];
        const stepSize = (end - start) / (step - 1);
        const delayBetweenSteps = duration / step;

        function executeStep(currentStep) {
            if (currentStep >= step) {
                setTimeout(() => resolve(results), delayBetweenSteps);
                return;
            }

            const x = currentStep / (step - 1) * 0.8;
            const y = 2 + currentStep * 2;

            setTimeout(() => {
                const result = [x, y];
                results.push(result);
                callback(result);
                executeStep(currentStep + 1);
            }, currentStep === 0 ? 0 : delayBetweenSteps);
        }

        executeStep(0);
    });
}
