function throttle(func, delay) {
    let lastCall = 0;

    const throttled = function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };

    return throttled;
}
function opThrottle(func, wait, options = {}) {
    let timeout = null;
    let previous = 0;
    let result;

    const { leading = true, trailing = true } = options;

    return function (...args) {
        const now = Date.now();
        const remaining = wait - (now - previous);

        if (!previous && leading === false) {
            previous = now;
        }

        if (remaining > 0) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                previous = leading ? 0 : Date.now();
                timeout = null;
                if (trailing) {
                    result = func.apply(this, args);
                }
            }, remaining);
        } else {
            clearTimeout(timeout);
            previous = now;

            if (leading) {
                result = func.apply(this, args);
            }

            if (trailing && leading === false) {
                timeout = setTimeout(() => {
                    previous = leading ? 0 : Date.now();
                    result = func.apply(this, args);
                }, wait);
            }
        }

        return result;
    };
}