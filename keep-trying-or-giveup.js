const retry = (count, callback) => {
    return async (...args) => {
        for (let i = 0; i <= count; i++) {
            try {
                return await callback(...args);
            } catch (error) {
                if (i === count) {
                    throw error;
                }
            }
        }
    };
};

// Timeout function (unchanged)
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