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
    let lastArgs = null;

    // Default options
    const { leading = true, trailing = true } = options;

    const later = function () {
        previous = leading === false ? 0 : Date.now();
        timeout = null;
        if (lastArgs && trailing) {
            result = func.apply(this, lastArgs);
            lastArgs = null;
        }
    };

    return function (...args) {
        const now = Date.now();
        if (!previous && leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);

        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(this, args);
            lastArgs = null;
        } else if (!timeout && trailing) {
            lastArgs = args;
            timeout = setTimeout(later, remaining);
        }

        return result;
    };
}