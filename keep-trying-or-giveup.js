const retry = (count, callback) => {
    return async (...args) => {
        let attempts = 0;
        while (true) {
            try {
                return await callback(...args);
            } catch (error) {
                attempts++;
                if (attempts > count) {
                    throw new Error('Max retry attempts reached');
                }
            }
        }
    };
};

// Timeout function
const timeout = (delay, callback) => {
    return async (...args) => {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('timeout')), delay);
        });

        return Promise.race([
            callback(...args),
            timeoutPromise
        ]);
    };
};