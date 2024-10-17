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

function opThrottle(func, delay, options = {}) {
    let lastTime = 0;
    let timeout;
    let trailingCall;

    const { leading = true, trailing = true } = options;

    const throttled = function (...args) {
        const now = Date.now();

        if (leading && lastTime === 0) {
            func.apply(this, args);
            lastTime = now;
        }


        if (timeout) {
            clearTimeout(timeout);
        }

        if (trailing) {
            trailingCall = () => {
                lastTime = leading ? 0 : Date.now();
                func.apply(this, args);
                timeout = null;
            };
            timeout = setTimeout(trailingCall, delay);
        }
    };

    throttled.cancel = function () {
        clearTimeout(timeout);
        lastTime = 0;
        timeout = null;
    };

    return throttled;
}
