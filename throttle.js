function throttle(func, wait) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= wait) {
            lastCall = now;
            return func.apply(this, args);
        }
    };
}

// Advanced throttle function with options
function opThrottle(func, wait, options = {}) {
    let timeout = null;
    let previous = 0;
    let result;

    return function throttled(...args) {
        const now = Date.now();
        const { trailing = true } = options;

        if (!previous) {
            previous = now;
        }

        const remaining = wait - (now - previous);

        if (timeout) {
            clearTimeout(timeout);
        }

        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(this, args);
        } else if (trailing) {
            timeout = setTimeout(() => {
                previous = now;
                timeout = null;
                result = func.apply(this, args);
            }, wait);
        }

        return result;
    };
}
