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
        const { leading = true, trailing = true } = options;

        if (!previous && leading === false) {
            previous = now;
        }

        const remaining = wait - (now - previous);

        function later() {
            previous = leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(this, args);
        }

        if (remaining <= 0) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(this, args);
        } else if (!timeout && trailing) {
            timeout = setTimeout(later, remaining);
        }

        if (leading && !previous) {
            previous = now;
            result = func.apply(this, args);
        }

        return result;
    };
}

